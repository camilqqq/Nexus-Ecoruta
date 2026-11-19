from datetime import date
from sqlalchemy import Column, Integer, String, Text, Float, Date, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class Emprendimiento(Base):
    __tablename__ = "emprendimientos"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(120), nullable=False)
    correo = Column(String(120), unique=True, index=True, nullable=False)
    password_hash = Column(String(255), nullable=False)
    whatsapp = Column(String(20), nullable=False)

    rutas = relationship("RutaActividad", back_populates="emprendimiento", cascade="all, delete-orphan")


class RutaActividad(Base):
    __tablename__ = "rutas_actividades"

    id = Column(Integer, primary_key=True, index=True)
    emprendimiento_id = Column(Integer, ForeignKey("emprendimientos.id"), nullable=False)
    tipo = Column(String(20), nullable=False)
    nombre = Column(String(150), nullable=False)
    categoria = Column(String(40), nullable=False)
    ubicacion = Column(String(120), nullable=False)
    detalle = Column(Text, nullable=False)
    dificultad = Column(String(20), nullable=False)
    latitud = Column(Float, nullable=False)
    longitud = Column(Float, nullable=False)
    imagen = Column(Text, nullable=False)
    alt = Column(Text, nullable=False)
    actualizado = Column(Date, default=date.today)

    emprendimiento = relationship("Emprendimiento", back_populates="rutas")
