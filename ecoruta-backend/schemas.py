from datetime import date
from typing import Literal, Optional
from pydantic import BaseModel, EmailStr

class EmprendimientoRegistro(BaseModel):
    nombre: str
    correo: EmailStr
    password: str
    whatsapp: str

class EmprendimientoLogin(BaseModel):
    correo: EmailStr
    password: str

class RutaCrear(BaseModel):
    tipo: Literal["ruta", "actividad"]
    nombre: str
    categoria: Literal["Naturaleza", "Cultura", "Gastronomía"]
    ubicacion: str
    detalle: str
    dificultad: Literal["Fácil", "Moderada", "Alta"]
    latitud: float
    longitud: float
    imagen: str
    alt: str

class RutaRespuesta(RutaCrear):
    id: int
    actualizado: date
    emprendimiento_id: int
    emprendimiento_nombre: str
    whatsapp: str

    class Config:
        from_attributes = True

class ContactoWhatsApp(BaseModel):
    ruta_id: int
    nombre_turista: Optional[str] = "Un visitante"
    fecha_preferida: Optional[str] = None
