export interface UsuarioSesion {
  id: number;
  nombre: string;
  correo: string;
}

export interface CredencialesLogin {
  correo: string;
  password: string;
}

export interface DatosRegistro {
  nombre: string;
  correo: string;
  password: string;
  confirmarPassword: string;
}

export const SESSION_COOKIE_NAME = "ecoruta_session_meta";
export const BACKEND_COOKIE_NAME = "nexus_session";
export const DEFAULT_SESSION_MAX_AGE_SECONDS = 60 * 60 * 12; // 12 horas

export function sanitizeInputText(raw: unknown, maxLength = 150): string {
  if (typeof raw !== "string") {
    return "";
  }
  return raw
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, maxLength);
}

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

export function setSessionCookie(
  value: string,
  maxAgeSeconds: number = DEFAULT_SESSION_MAX_AGE_SECONDS
): void {
  const safeMaxAge = Math.max(0, Math.floor(maxAgeSeconds));
  const secureFlag =
    typeof window !== "undefined" && window.location.protocol === "https:"
      ? "; Secure"
      : "";
  document.cookie = `${SESSION_COOKIE_NAME}=${encodeURIComponent(value)}; max-age=${safeMaxAge}; SameSite=Lax; path=/${secureFlag}`;
}

export function clearSessionCookies(): void {
  const secureFlag =
    typeof window !== "undefined" && window.location.protocol === "https:"
      ? "; Secure"
      : "";
  document.cookie = `${SESSION_COOKIE_NAME}=; max-age=0; SameSite=Lax; path=/${secureFlag}`;
  document.cookie = `${BACKEND_COOKIE_NAME}=; max-age=0; SameSite=Lax; path=/${secureFlag}`;

  try {
    sessionStorage.removeItem("ecoruta_user");
  } catch {
    // Ignorar si sessionStorage no está disponible
  }
}

export function validateLoginInput(input: CredencialesLogin): {
  ok: boolean;
  error?: string;
  data?: { correo: string; password: string };
} {
  const correo = sanitizeInputText(input.correo, 150).toLowerCase();
  const password = typeof input.password === "string" ? input.password : "";

  if (!isValidEmail(correo)) {
    return { ok: false, error: "Ingresa un correo electrónico válido." };
  }
  if (password.length < 8 || password.length > 72) {
    return {
      ok: false,
      error: "La contraseña debe tener entre 8 y 72 caracteres.",
    };
  }
  return { ok: true, data: { correo, password } };
}

export function validateRegisterInput(input: DatosRegistro): {
  ok: boolean;
  error?: string;
  data?: { nombre: string; correo: string; password: string };
} {
  const nombre = sanitizeInputText(input.nombre, 100);
  const correo = sanitizeInputText(input.correo, 150).toLowerCase();
  const password = typeof input.password === "string" ? input.password : "";
  const confirmar =
    typeof input.confirmarPassword === "string" ? input.confirmarPassword : "";

  if (nombre.length < 2 || nombre.length > 100) {
    return {
      ok: false,
      error: "Ingresa un nombre válido (entre 2 y 100 caracteres).",
    };
  }
  if (!isValidEmail(correo)) {
    return { ok: false, error: "Ingresa un correo electrónico válido." };
  }
  if (password.length < 8 || password.length > 72) {
    return {
      ok: false,
      error: "La contraseña debe tener entre 8 y 72 caracteres.",
    };
  }
  if (password !== confirmar) {
    return { ok: false, error: "Las contraseñas no coinciden." };
  }
  return { ok: true, data: { nombre, correo, password } };
}