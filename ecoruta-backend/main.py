import os
from urllib.parse import quote
import httpx
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from database import Base, engine, get_db
from models import Emprendimiento, RutaActividad
from schemas import (
    EmprendimientoRegistro,
    EmprendimientoLogin,
    RutaCrear,
    RutaRespuesta,
    ContactoWhatsApp,
)
from auth import hash_password, verify_password, crear_token, obtener_emprendimiento_actual

Base.metadata.create_all(bind=engine)

app = FastAPI(title="API Nexus EcoRuta Temuco", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/auth/registro", status_code=status.HTTP_201_CREATED)
def registrar_emprendimiento(datos: EmprendimientoRegistro, db: Session = Depends(get_db)):
    if db.query(Emprendimiento).filter(Emprendimiento.correo == datos.correo).first():
        raise HTTPException(status_code=400, detail="El correo ya está registrado")

    nuevo = Emprendimiento(
        nombre=datos.nombre,
        correo=datos.correo,
        password_hash=hash_password(datos.password),
        whatsapp=datos.whatsapp.replace("+", "").strip(),
    )
    db.add(nuevo)
    db.commit()
    db.refresh(nuevo)
    return {"id": nuevo.id, "nombre": nuevo.nombre, "token": crear_token(nuevo.id)}

@app.post("/api/auth/login")
def login_emprendimiento(datos: EmprendimientoLogin, db: Session = Depends(get_db)):
    emp = db.query(Emprendimiento).filter(Emprendimiento.correo == datos.correo).first()
    if not emp or not verify_password(datos.password, emp.password_hash):
        raise HTTPException(status_code=401, detail="Credenciales incorrectas")
    return {"id": emp.id, "nombre": emp.nombre, "token": crear_token(emp.id)}

@app.get("/api/rutas", response_model=list[RutaRespuesta])
def listar_rutas(db: Session = Depends(get_db)):
    rutas = db.query(RutaActividad).all()
    resultado = []
    for r in rutas:
        resultado.append(
            RutaRespuesta(
                id=r.id,
                tipo=r.tipo,
                nombre=r.nombre,
                categoria=r.categoria,
                ubicacion=r.ubicacion,
                detalle=r.detalle,
                dificultad=r.dificultad,
                latitud=r.latitud,
                longitud=r.longitud,
                imagen=r.imagen,
                alt=r.alt,
                actualizado=r.actualizado,
                emprendimiento_id=r.emprendimiento_id,
                emprendimiento_nombre=r.emprendimiento.nombre,
                whatsapp=r.emprendimiento.whatsapp,
            )
        )
    return resultado

@app.post("/api/rutas", status_code=status.HTTP_201_CREATED)
def crear_ruta(
    datos: RutaCrear,
    db: Session = Depends(get_db),
    emp: Emprendimiento = Depends(obtener_emprendimiento_actual),
):
    nueva = RutaActividad(**datos.model_dump(), emprendimiento_id=emp.id)
    db.add(nueva)
    db.commit()
    db.refresh(nueva)
    return {"ok": True, "id": nueva.id, "mensaje": "Publicación creada correctamente"}

@app.delete("/api/rutas/{ruta_id}")
def eliminar_ruta(
    ruta_id: int,
    db: Session = Depends(get_db),
    emp: Emprendimiento = Depends(obtener_emprendimiento_actual),
):
    ruta = db.query(RutaActividad).filter(RutaActividad.id == ruta_id).first()
    if not ruta:
        raise HTTPException(status_code=404, detail="Ruta o actividad no encontrada")
    if ruta.emprendimiento_id != emp.id:
        raise HTTPException(status_code=403, detail="No puedes eliminar publicaciones de otro emprendimiento")

    db.delete(ruta)
    db.commit()
    return {"ok": True, "mensaje": "Eliminado correctamente"}

@app.post("/api/whatsapp/contactar")
async def contactar_whatsapp(datos: ContactoWhatsApp, db: Session = Depends(get_db)):
    ruta = db.query(RutaActividad).filter(RutaActividad.id == datos.ruta_id).first()
    if not ruta:
        raise HTTPException(status_code=404, detail="Ruta o actividad no encontrada")

    emp = ruta.emprendimiento
    fecha_txt = f" para el {datos.fecha_preferida}" if datos.fecha_preferida else ""
    mensaje = (
        f"Hola {emp.nombre}, soy {datos.nombre_turista} desde EcoRuta Temuco. "
        f"Me interesa consultar por la {ruta.tipo} \"{ruta.nombre}\"{fecha_txt}."
    )
    url_whatsapp = f"https://wa.me/{emp.whatsapp}?text={quote(mensaje)}"

    wa_token = os.getenv("WHATSAPP_TOKEN")
    wa_phone_id = os.getenv("WHATSAPP_PHONE_ID")
    enviado_cloud_api = False

    if wa_token and wa_phone_id:
        async with httpx.AsyncClient() as client:
            resp = await client.post(
                f"https://graph.facebook.com/v20.0/{wa_phone_id}/messages",
                headers={"Authorization": f"Bearer {wa_token}"},
                json={
                    "messaging_product": "whatsapp",
                    "to": emp.whatsapp,
                    "type": "text",
                    "text": {"body": mensaje},
                },
            )
            enviado_cloud_api = resp.status_code == 200

    return {
        "ok": True,
        "emprendimiento": emp.nombre,
        "whatsapp": emp.whatsapp,
        "url_whatsapp": url_whatsapp,
        "enviado_cloud_api": enviado_cloud_api,
    }
