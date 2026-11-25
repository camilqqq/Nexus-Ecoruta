
import os
from datetime import datetime, timedelta, timezone

import bcrypt
import jwt

from fastapi import Depends, HTTPException, status, Request
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session

from database import get_db
from models import Emprendimiento, Turista



SECRET_KEY = os.getenv("JWT_SECRET")

if not SECRET_KEY or len(SECRET_KEY) < 32:
    raise RuntimeError(
        "JWT_SECRET no está configurada o es demasiado corta."
    )

ALGORITHM = "HS256"
TOKEN_HOURS = 12
COOKIE_NAME = "nexus_session"

security = HTTPBearer(auto_error=False)



def hash_password(password: str) -> str:
    pwd_bytes = password.encode("utf-8")

    if len(pwd_bytes) > 72:
        raise ValueError("La contraseña supera el límite de 72 bytes")

    return bcrypt.hashpw(
        pwd_bytes,
        bcrypt.gensalt()
    ).decode("utf-8")


def verify_password(plain: str, hashed: str) -> bool:
    pwd_bytes = plain.encode("utf-8")

    if len(pwd_bytes) > 72:
        return False

    try:
        return bcrypt.checkpw(
            pwd_bytes,
            hashed.encode("utf-8")
        )
    except (ValueError, TypeError):
        return False



def _crear_token(usuario_id: int, tipo: str) -> str:
    ahora = datetime.now(timezone.utc)

    payload = {
        "sub": str(usuario_id),
        "tipo": tipo,
        "iat": ahora,
        "exp": ahora + timedelta(hours=TOKEN_HOURS)
    }

    return jwt.encode(
        payload,
        SECRET_KEY,
        algorithm=ALGORITHM
    )


def crear_token(emprendimiento_id: int) -> str:
    return _crear_token(emprendimiento_id, "emprendimiento")


def crear_token_turista(turista_id: int) -> str:
    return _crear_token(turista_id, "turista")



def _obtener_payload(
    request: Request,
    creds: HTTPAuthorizationCredentials = None
):
    token = None

    
    if creds:
        token = creds.credentials

    
    if not token:
        token = request.cookies.get(COOKIE_NAME)

    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="No hay una sesión activa",
            headers={"WWW-Authenticate": "Bearer"}
        )

    try:
        return jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )
    except jwt.InvalidTokenError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token inválido o expirado",
            headers={"WWW-Authenticate": "Bearer"}
        )



def obtener_emprendimiento_actual(
    request: Request,
    creds: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db)
) -> Emprendimiento:

    payload = _obtener_payload(request, creds)

    if payload.get("tipo", "emprendimiento") != "emprendimiento":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Este token no pertenece a un emprendimiento"
        )

    try:
        emp_id = int(payload["sub"])
    except (KeyError, ValueError, TypeError):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token inválido"
        )

    emp = db.query(Emprendimiento).filter(
        Emprendimiento.id == emp_id
    ).first()

    if not emp:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Emprendimiento no encontrado"
        )

    return emp



def obtener_turista_actual(
    request: Request,
    creds: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db)
) -> Turista:

    payload = _obtener_payload(request, creds)

    if payload.get("tipo") != "turista":
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Este token no pertenece a un turista"
        )

    try:
        turista_id = int(payload["sub"])
    except (KeyError, ValueError, TypeError):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token inválido"
        )

    turista = db.query(Turista).filter(
        Turista.id == turista_id
    ).first()

    if not turista:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Turista no encontrado"
        )

    return turista
