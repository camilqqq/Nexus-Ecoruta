from datetime import date
from typing import Literal, Optional
from pydantic import BaseModel, EmailStr, Field, field_validator

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


class TuristaCredenciales(BaseModel):
    correo: EmailStr
    password: str = Field(min_length=8)

    @field_validator("password")
    @classmethod
    def validar_longitud_password(cls, valor):
        if len(valor.encode("utf-8")) > 72:
            raise ValueError("La contraseña no puede superar 72 bytes")
        return valor


class TuristaRegistro(TuristaCredenciales):
    nombre: str = Field(min_length=2, max_length=100)


class TuristaLogin(TuristaCredenciales):
    pass

