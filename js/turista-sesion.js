"use strict";

(() => {
  const SESSION_COOKIE = "ecoruta_session_meta";
  const USER_STORAGE_KEY = "ecoruta_turista_sesion";
  const SESSION_MAX_AGE = 60 * 60 * 12; // 12 horas
  const FAV_PREFIX = "ecoruta_favoritos_";
  const ITINERARIO_PREFIX = "ecoruta_itinerario_";

  function sanitizarTexto(valor, maxLen = 100) {
    if (typeof valor !== "string") return "";
    return valor
      .replace(/[\u0000-\u001F\u007F]/g, "")
      .replace(/[<>]/g, "")
      .trim()
      .slice(0, maxLen);
  }

  function obtenerRutaBase() {
    const pathname = window.location.pathname.replace(/\\/g, "/");
    return pathname.includes("/paginas/") ? "../" : "./";
  }

  function obtenerUsuarioActual() {
    try {
      const raw = localStorage.getItem(USER_STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return null;

      const nombre = sanitizarTexto(parsed.nombre, 100);
      const correo = sanitizarTexto(parsed.correo, 150).toLowerCase();
      if (!nombre && !correo) return null;

      const claveBase = correo || nombre.toLowerCase().replace(/\s+/g, "_");
      return {
        id: parsed.id || claveBase,
        nombre: nombre || correo.split("@")[0] || "Viajero",
        correo,
        clavePerfil: `u_${claveBase.replace(/[^a-z0-9_@.-]/gi, "_")}`
      };
    } catch {
      return null;
    }
  }

  function guardarSesionTurista(datos) {
    const nombre = sanitizarTexto(datos?.nombre, 100);
    const correo = sanitizarTexto(datos?.correo, 150).toLowerCase();
    const id = datos?.id || correo || nombre.toLowerCase().replace(/\s+/g, "_");

    const perfilSeguro = {
      id,
      nombre: nombre || (correo ? correo.split("@")[0] : "Viajero"),
      correo,
      iniciadoEn: Date.now()
    };

    try {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(perfilSeguro));
    } catch {
      // Ignorar si localStorage no está disponible
    }

    const secureFlag = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${SESSION_COOKIE}=${encodeURIComponent(String(id))}; max-age=${SESSION_MAX_AGE}; SameSite=Lax; path=/${secureFlag}`;

    window.dispatchEvent(new CustomEvent("ecoruta:sesion-cambiada", { detail: obtenerUsuarioActual() }));
    return obtenerUsuarioActual();
  }

  function cerrarSesionTurista() {
    try {
      localStorage.removeItem(USER_STORAGE_KEY);
    } catch {
      // Ignorar si localStorage no está disponible
    }

    const secureFlag = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${SESSION_COOKIE}=; max-age=0; SameSite=Lax; path=/${secureFlag}`;
    document.cookie = `nexus_session=; max-age=0; SameSite=Lax; path=/${secureFlag}`;

    window.dispatchEvent(new CustomEvent("ecoruta:logout"));
    window.dispatchEvent(new CustomEvent("ecoruta:sesion-cambiada", { detail: null }));
  }

  function obtenerClaveFavoritos() {
    const usuario = obtenerUsuarioActual();
    return usuario ? `${FAV_PREFIX}${usuario.clavePerfil}` : `${FAV_PREFIX}visitante`;
  }

  function obtenerFavoritosUsuario() {
    const clave = obtenerClaveFavoritos();
    try {
      const raw = localStorage.getItem(clave);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          return parsed.map(Number).filter((n) => Number.isInteger(n) && n > 0);
        }
      }

      const legacyRaw = localStorage.getItem("ecoruta_favoritos");
      if (legacyRaw) {
        const legacyParsed = JSON.parse(legacyRaw);
        if (Array.isArray(legacyParsed)) {
          const limpios = legacyParsed.map(Number).filter((n) => Number.isInteger(n) && n > 0);
          localStorage.setItem(clave, JSON.stringify(limpios));
          return limpios;
        }
      }
      return [];
    } catch {
      return [];
    }
  }

  function alternarFavoritoUsuario(id) {
    const numId = Number(id);
    if (!Number.isInteger(numId) || numId <= 0) return false;

    const actuales = obtenerFavoritosUsuario();
    const existe = actuales.includes(numId);
    const actualizados = existe
      ? actuales.filter((item) => item !== numId)
      : [...actuales, numId];

    try {
      localStorage.setItem(obtenerClaveFavoritos(), JSON.stringify(actualizados));
    } catch {
      // Ignorar si localStorage no está disponible
    }

    window.dispatchEvent(new CustomEvent("ecoruta:favoritos-cambiados", { detail: actualizados }));
    return !existe;
  }

  function obtenerClaveItinerario() {
    const usuario = obtenerUsuarioActual();
    return usuario ? `${ITINERARIO_PREFIX}${usuario.clavePerfil}` : `${ITINERARIO_PREFIX}visitante`;
  }

  function obtenerItinerarioUsuario() {
    try {
      const raw = localStorage.getItem(obtenerClaveItinerario());
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function guardarItinerarioUsuario(items) {
    try {
      localStorage.setItem(obtenerClaveItinerario(), JSON.stringify(Array.isArray(items) ? items : []));
    } catch {
      // Ignorar si localStorage no está disponible
    }
  }

  function obtenerIniciales(nombre) {
    const partes = String(nombre || "V").trim().split(/\s+/);
    if (partes.length === 1) return partes[0].slice(0, 1).toUpperCase();
    return (partes[0][0] + partes[1][0]).toUpperCase();
  }

  function renderizarNavbarSesion() {
    const nav = document.querySelector("header nav");
    if (!nav) return;

    const existente = nav.querySelector("[data-auth-nav]");
    if (existente) existente.remove();

    const usuario = obtenerUsuarioActual();
    const base = obtenerRutaBase();
    const wrapper = document.createElement("div");
    wrapper.setAttribute("data-auth-nav", "true");
    wrapper.style.display = "inline-flex";
    wrapper.style.alignItems = "center";
    wrapper.style.gap = "0.5rem";

    if (usuario) {
      const badge = document.createElement("span");
      badge.className = "nav-user-badge";
      badge.title = usuario.correo ? `${usuario.nombre} (${usuario.correo})` : usuario.nombre;
      badge.style.display = "inline-flex";
      badge.style.alignItems = "center";
      badge.style.gap = "0.4rem";
      badge.style.padding = "0.35rem 0.65rem";
      badge.style.borderRadius = "999px";
      badge.style.background = "#e8f5e9";
      badge.style.color = "#1b4332";
      badge.style.fontWeight = "700";
      badge.style.fontSize = "0.85rem";

      const avatar = document.createElement("span");
      avatar.setAttribute("aria-hidden", "true");
      avatar.textContent = obtenerIniciales(usuario.nombre);
      avatar.style.width = "22px";
      avatar.style.height = "22px";
      avatar.style.borderRadius = "50%";
      avatar.style.background = "#1b4332";
      avatar.style.color = "#ffffff";
      avatar.style.display = "inline-flex";
      avatar.style.alignItems = "center";
      avatar.style.justifyContent = "center";
      avatar.style.fontSize = "0.72rem";

      const textoNombre = document.createElement("span");
      textoNombre.textContent = usuario.nombre;

      const btnLogout = document.createElement("button");
      btnLogout.type = "button";
      btnLogout.id = "btn-cerrar-sesion-nav";
      btnLogout.textContent = "Cerrar sesión";
      btnLogout.style.padding = "0.35rem 0.7rem";
      btnLogout.style.borderRadius = "6px";
      btnLogout.style.border = "1px solid #c8d6cd";
      btnLogout.style.background = "#ffffff";
      btnLogout.style.color = "#1d2d24";
      btnLogout.style.fontWeight = "600";
      btnLogout.style.fontSize = "0.85rem";
      btnLogout.style.cursor = "pointer";

      btnLogout.addEventListener("click", () => {
        cerrarSesionTurista();
        renderizarNavbarSesion();
      });

      badge.appendChild(avatar);
      badge.appendChild(textoNombre);
      wrapper.appendChild(badge);
      wrapper.appendChild(btnLogout);
    } else {
      const linkLogin = document.createElement("a");
      linkLogin.href = `${base}paginas/login.html`;
      linkLogin.textContent = "Iniciar sesión";
      linkLogin.style.fontWeight = "700";
      wrapper.appendChild(linkLogin);
    }

    nav.appendChild(wrapper);
  }

  window.EcoRutaSesion = {
    obtenerUsuarioActual,
    guardarSesionTurista,
    cerrarSesionTurista,
    obtenerFavoritosUsuario,
    alternarFavoritoUsuario,
    obtenerItinerarioUsuario,
    guardarItinerarioUsuario,
    renderizarNavbarSesion
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderizarNavbarSesion);
  } else {
    renderizarNavbarSesion();
  }

  window.addEventListener("ecoruta:sesion-cambiada", renderizarNavbarSesion);
})();