
import os
from urllib.parse import quote

import httpx
from fastapi import FastAPI, Depends, HTTPException, status, Response
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import Base, engine, get_db
from models import Emprendimiento, RutaActividad, Turista

from schemas import (
    EmprendimientoRegistro,
    EmprendimientoLogin,
    RutaCrear,
    RutaRespuesta,
    ContactoWhatsApp,
    TuristaRegistro,
    TuristaLogin,
)

from auth import (
    hash_password,
    verify_password,
    crear_token,
    crear_token_turista,
    obtener_emprendimiento_actual,
    obtener_turista_actual,
)

# CREACIÓN DE TABLAS
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="API Nexus EcoRuta Temuco",
    version="1.1.0"
)

# CONFIGURACIÓN CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://camilqqq.github.io"
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "DELETE", "OPTIONS"],
    allow_headers=["Authorization", "Content-Type"],
)


# CONFIGURACIÓN DE SESIONES
COOKIE_NAME = "nexus_session"
COOKIE_MAX_AGE = 12 * 60 * 60


def establecer_sesion(response: Response, token: str):
    response.set_cookie(
        key=COOKIE_NAME,
        value=token,
        max_age=COOKIE_MAX_AGE,
        httponly=True,
        secure=True,
        samesite="none",
        path="/",
    )


def cerrar_sesion(response: Response):
    response.delete_cookie(
        key=COOKIE_NAME,
        path="/",
        httponly=True,
        secure=True,
        samesite="none",
    )


# --------------------------------------------------
# AUTENTICACIÓN DE EMPRENDEDORES
# --------------------------------------------------

@app.post("/api/auth/registro", status_code=status.HTTP_201_CREATED)
def registrar_emprendimiento(
    datos: EmprendimientoRegistro,
    db: Session = Depends(get_db)
):
    if db.query(Emprendimiento).filter(
        Emprendimiento.correo == datos.correo
    ).first():
        raise HTTPException(
            status_code=400,
            detail="El correo ya está registrado"
        )

    nuevo = Emprendimiento(
        nombre=datos.nombre,
        correo=datos.correo,
        password_hash=hash_password(datos.password),
        whatsapp=datos.whatsapp.replace("+", "").strip(),
    )

    db.add(nuevo)
    db.commit()
    db.refresh(nuevo)

    return {
        "id": nuevo.id,
        "nombre": nuevo.nombre,
        "token": crear_token(nuevo.id)
    }


@app.post("/api/auth/login")
def login_emprendimiento(
    datos: EmprendimientoLogin,
    db: Session = Depends(get_db)
):
    emp = db.query(Emprendimiento).filter(
        Emprendimiento.correo == datos.correo
    ).first()

    if not emp or not verify_password(
        datos.password,
        emp.password_hash
    ):
        raise HTTPException(
            status_code=401,
            detail="Credenciales incorrectas"
        )

    return {
        "id": emp.id,
        "nombre": emp.nombre,
        "token": crear_token(emp.id)
    }


# --------------------------------------------------
# AUTENTICACIÓN DE TURISTAS
# --------------------------------------------------

@app.post(
    "/api/auth/turistas/registro",
    status_code=status.HTTP_201_CREATED
)
def registrar_turista(
    datos: TuristaRegistro,
    response: Response,
    db: Session = Depends(get_db)
):
    correo = str(datos.correo).lower()

    existente = db.query(Turista).filter(
        Turista.correo == correo
    ).first()

    existente_emprendedor = db.query(Emprendimiento).filter(
        Emprendimiento.correo == correo
    ).first()

    if existente or existente_emprendedor:
        raise HTTPException(
            status_code=409,
            detail="Este correo ya está registrado"
        )

    nuevo = Turista(
        nombre=datos.nombre.strip(),
        correo=correo,
        password_hash=hash_password(datos.password)
    )

    db.add(nuevo)

    try:
        db.commit()
        db.refresh(nuevo)
    except Exception:
        db.rollback()
        raise HTTPException(
            status_code=500,
            detail="No fue posible crear la cuenta"
        )

    token = crear_token_turista(nuevo.id)
    establecer_sesion(response, token)

    return {
        "ok": True,
        "mensaje": "Cuenta creada correctamente",
        "usuario": {
            "id": nuevo.id,
            "nombre": nuevo.nombre,
            "correo": nuevo.correo
        }
    }


@app.post("/api/auth/turistas/login")
def login_turista(
    datos: TuristaLogin,
    response: Response,
    db: Session = Depends(get_db)
):
    correo = str(datos.correo).lower()

    turista = db.query(Turista).filter(
        Turista.correo == correo
    ).first()

    if not turista or not verify_password(
        datos.password,
        turista.password_hash
    ):
        raise HTTPException(
            status_code=401,
            detail="Correo o contraseña incorrectos"
        )

    token = crear_token_turista(turista.id)
    establecer_sesion(response, token)

    return {
        "ok": True,
        "mensaje": "Inicio de sesión correcto",
        "usuario": {
            "id": turista.id,
            "nombre": turista.nombre,
            "correo": turista.correo
        }
    }


@app.get("/api/auth/turistas/me")
def perfil_turista(
    turista: Turista = Depends(obtener_turista_actual)
):
    return {
        "id": turista.id,
        "nombre": turista.nombre,
        "correo": turista.correo
    }


@app.post("/api/auth/turistas/logout")
def logout_turista(response: Response):
    cerrar_sesion(response)

    return {
        "ok": True,
        "mensaje": "Sesión cerrada correctamente"
    }


# --------------------------------------------------
# RUTAS Y ACTIVIDADES
# --------------------------------------------------

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
    nueva = RutaActividad(
        **datos.model_dump(),
        emprendimiento_id=emp.id
    )

    db.add(nueva)
    db.commit()
    db.refresh(nueva)

    return {
        "ok": True,
        "id": nueva.id,
        "mensaje": "Publicación creada correctamente"
    }


@app.delete("/api/rutas/{ruta_id}")
def eliminar_ruta(
    ruta_id: int,
    db: Session = Depends(get_db),
    emp: Emprendimiento = Depends(obtener_emprendimiento_actual),
):
    ruta = db.query(RutaActividad).filter(
        RutaActividad.id == ruta_id
    ).first()

    if not ruta:
        raise HTTPException(
            status_code=404,
            detail="Ruta o actividad no encontrada"
        )

    if ruta.emprendimiento_id != emp.id:
        raise HTTPException(
            status_code=403,
            detail="No puedes eliminar publicaciones de otro emprendimiento"
        )

    db.delete(ruta)
    db.commit()

    return {
        "ok": True,
        "mensaje": "Eliminado correctamente"
    }


# --------------------------------------------------
# CONTACTO WHATSAPP
# --------------------------------------------------

@app.post("/api/whatsapp/contactar")
async def contactar_whatsapp(
    datos: ContactoWhatsApp,
    db: Session = Depends(get_db)
):
    ruta = db.query(RutaActividad).filter(
        RutaActividad.id == datos.ruta_id
    ).first()

    if not ruta:
        raise HTTPException(
            status_code=404,
            detail="Ruta o actividad no encontrada"
        )

    emp = ruta.emprendimiento

    fecha_txt = (
        f" para el {datos.fecha_preferida}"
        if datos.fecha_preferida else ""
    )

    mensaje = (
        f"Hola {emp.nombre}, soy {datos.nombre_turista} "
        f"desde EcoRuta Temuco. "
        f"Me interesa consultar por la {ruta.tipo} "
        f"\"{ruta.nombre}\"{fecha_txt}."
    )

    url_whatsapp = (
        f"https://wa.me/{emp.whatsapp}?text={quote(mensaje)}"
    )

    wa_token = os.getenv("WHATSAPP_TOKEN")
    wa_phone_id = os.getenv("WHATSAPP_PHONE_ID")
    enviado_cloud_api = False

    if wa_token and wa_phone_id:
        async with httpx.AsyncClient() as client:
            resp = await client.post(
                f"https://graph.facebook.com/v20.0/{wa_phone_id}/messages",
                headers={
                    "Authorization": f"Bearer {wa_token}"
                },
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
