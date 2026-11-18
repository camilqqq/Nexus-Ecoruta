"use strict";
const API_RUTAS_URL = "data/rutas.json";
const STORAGE_FAVORITOS = "ecoruta_favoritos";
const STORAGE_FILTRO_CAT = "ecoruta_filtro_categoria";
const STORAGE_FILTRO_BUSQ = "ecoruta_filtro_busqueda";
let rutasCargadas = [];
let categoriaSeleccionada = sessionStorage.getItem(STORAGE_FILTRO_CAT) || "Todas";

function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

// --- Gestión de Favoritos (LocalStorage) ---
function obtenerFavoritos() {
    try {
        const raw = localStorage.getItem(STORAGE_FAVORITOS);
        if (!raw)
            return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed.filter((id) => typeof id === "number") : [];
    }
    catch {
        return [];
    }
}

function alternarFavorito(id) {
    const favoritos = obtenerFavoritos();
    const existe = favoritos.includes(id);
    const actualizados = existe ? favoritos.filter((item) => item !== id) : [...favoritos, id];
    localStorage.setItem(STORAGE_FAVORITOS, JSON.stringify(actualizados));
    return !existe;
}

// --- Estados visuales de Carga y Error en API ---
function mostrarEstadoCarga(contenedor, contador) {
    if (contador)
        contador.textContent = "Cargando...";
    if (!contenedor)
        return;
    contenedor.innerHTML = `
    <div class="estado-api estado-cargando" role="status" aria-live="polite" style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: #2e7d32;">
      <p style="font-weight: 600; margin-bottom: 0.35rem;">Cargando rutas y actividades sustentables...</p>
      <small style="color: #555;">Conectando con el catálogo de EcoRuta Temuco</small>
    </div>
  `;
}

function mostrarEstadoError(contenedor, contador, mensajeError, alReintentar) {
    if (contador)
        contador.textContent = "Error de carga";
    if (!contenedor)
        return;
    contenedor.innerHTML = `
    <div class="estado-api estado-error" role="alert" style="grid-column: 1 / -1; text-align: center; padding: 2rem; background: #fff5f5; border: 1px solid #feb2b2; border-radius: 12px; color: #9b2c2c;">
      <p style="font-weight: 700; margin-bottom: 0.4rem;">No se pudieron cargar las rutas en este momento</p>
      <p style="font-size: 0.9rem; margin-bottom: 1rem;">${mensajeError}</p>
      <button type="button" id="btn-reintentar-api" style="padding: 0.55rem 1.2rem; border-radius: 8px; border: none; background: #2e7d32; color: #fff; font-weight: 600; cursor: pointer;">
        Reintentar carga
      </button>
    </div>
  `;
    const btnReintentar = document.getElementById("btn-reintentar-api");
    if (btnReintentar) {
        btnReintentar.addEventListener("click", alReintentar);
    }
}

async function obtenerRutasDesdeAPI() {
    try {
        const respuesta = await fetch(API_RUTAS_URL);
        if (!respuesta.ok) {
            throw new Error(`Error HTTP ${respuesta.status} al consultar el catálogo.`);
        }
        const datos = await respuesta.json();
        return { ok: true, datos };
    }
    catch (error) {
        const mensaje = error instanceof Error ? error.message : "Error de conexión con el servidor.";
        console.error("Error al obtener rutas desde la API:", error);
        return { ok: false, datos: [], error: mensaje };
    }
}

function filtrarRutas(rutas, categoria, terminoBusqueda) {
    const termino = normalizarTexto(terminoBusqueda.trim());
    const favoritos = obtenerFavoritos();
    return rutas.filter((ruta) => {
        const coincideCat = categoria === "Todas" ||
            (categoria === "Favoritas" ? favoritos.includes(ruta.id) : ruta.categoria === categoria);
        const textoCompleto = normalizarTexto(`${ruta.nombre} ${ruta.categoria} ${ruta.ubicacion} ${ruta.detalle} ${ruta.dificultad}`);
        const coincideTexto = !termino || textoCompleto.includes(termino);
        return coincideCat && coincideTexto;
    });
}

function iniciarCarruselTarjeta(contenedor, cardIdx) {
    const imgPrincipal = contenedor.querySelector("img");
    if (!imgPrincipal)
        return;
    const srcOriginal = imgPrincipal.getAttribute("src") || "";
    const rutas = [srcOriginal];
    for (let i = 2; i <= 4; i++) {
        rutas.push(srcOriginal.replace(/1?(\.[a-zA-Z]+)$/, `${i}$1`));
    }
    imgPrincipal.classList.add("activa");
    const imagenes = [imgPrincipal];
    const dotsBox = document.createElement("div");
    dotsBox.className = "carrusel-dots";
    rutas.forEach((ruta, idx) => {
        if (idx > 0) {
            const img = document.createElement("img");
            img.src = ruta;
            img.alt = `${imgPrincipal.alt} (${idx + 1})`;
            img.loading = "lazy";
            img.onerror = function () {
                this.onerror = null;
                this.src = srcOriginal;
            };
            contenedor.appendChild(img);
            imagenes.push(img);
        }
        const dot = document.createElement("span");
        if (idx === 0)
            dot.classList.add("activa");
        dot.addEventListener("click", (e) => {
            e.preventDefault();
            cambiarSlide(idx);
        });
        dotsBox.appendChild(dot);
    });
    contenedor.appendChild(dotsBox);
    const dots = dotsBox.querySelectorAll("span");
    let indice = 0;
    function cambiarSlide(nuevoIndice) {
        imagenes[indice].classList.remove("activa");
        dots[indice].classList.remove("activa");
        indice = nuevoIndice;
        imagenes[indice].classList.add("activa");
        dots[indice].classList.add("activa");
    }
    setTimeout(() => {
        setInterval(() => {
            cambiarSlide((indice + 1) % imagenes.length);
        }, 3800);
    }, cardIdx * 400);
}

function renderizarCatalogo(rutas, alCambiarFavorito) {
    const contenedorLista = document.querySelector(".list");
    const contador = document.getElementById("contador-resultados");
    if (!contenedorLista)
        return;
    contenedorLista.innerHTML = "";
    if (contador) {
        contador.textContent = `${rutas.length} resultado${rutas.length === 1 ? "" : "s"}`;
    }
    if (rutas.length === 0) {
        const mensaje = document.createElement("p");
        mensaje.className = "mensaje-vacio";
        mensaje.textContent =
            categoriaSeleccionada === "Favoritas"
                ? "Aún no tienes rutas o actividades guardadas en Favoritos."
                : "No se encontraron actividades con esos criterios.";
        contenedorLista.appendChild(mensaje);
        return;
    }
    const favoritosActuales = obtenerFavoritos();
    rutas.forEach((ruta, index) => {
        const esFavorito = favoritosActuales.includes(ruta.id);
        const article = document.createElement("article");
        article.className = "activity";
        article.setAttribute("data-categoria", ruta.categoria);
        article.setAttribute("data-dificultad", ruta.dificultad);
        article.innerHTML = `
      <div class="image">
        <img src="${ruta.imagen}" alt="${ruta.alt}" width="400" height="250" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} />
      </div>
      <div class="info">
        <div class="activity-header">
          <div>
            <h3>${ruta.nombre}</h3>
            <p>${ruta.categoria} • ${ruta.ubicacion}</p>
          </div>
          <small>Actualizado: ${ruta.actualizado}</small>
        </div>
        <p>${ruta.detalle}</p>
        <div class="buttons">
          <a href="paginas/Actividad.html?id=${ruta.id}" class="primary" aria-label="Ver ficha detallada de ${ruta.nombre}">Ver ficha</a>
          <a href="https://wa.me/56912345678" target="_blank" rel="noopener" aria-label="Contactar por WhatsApp sobre ${ruta.nombre}">Contactar</a>
          <button type="button" class="btn-favorito ${esFavorito ? "activo" : ""}" data-id="${ruta.id}" aria-pressed="${esFavorito}" aria-label="${esFavorito ? "Quitar de favoritos" : "Guardar en favoritos"}: ${ruta.nombre}" style="padding: 0.5rem 0.85rem; border-radius: 8px; border: 1px solid ${esFavorito ? "#e53e3e" : "#cbd5e0"}; background: ${esFavorito ? "#fff5f5" : "#fff"}; color: ${esFavorito ? "#c53030" : "#2d3748"}; font-weight: 600; cursor: pointer;">
            ${esFavorito ? "❤️ Guardado" : "🤍 Favorito"}
          </button>
        </div>
      </div>
    `;
        contenedorLista.appendChild(article);
        const btnFav = article.querySelector(".btn-favorito");
        if (btnFav) {
            btnFav.addEventListener("click", () => {
                alternarFavorito(ruta.id);
                if (alCambiarFavorito)
                    alCambiarFavorito();
            });
        }
        const boxImg = article.querySelector(".image");
        if (boxImg)
            iniciarCarruselTarjeta(boxImg, index);
    });
}

document.addEventListener("DOMContentLoaded", async () => {
    const botones = document.querySelectorAll(".filters button");
    const buscador = document.querySelector(".search input");
    const contenedorLista = document.querySelector(".list");
    const contador = document.getElementById("contador-resultados");

    // Restaurar búsqueda previa desde sessionStorage al volver desde una ficha[cite: 8]
    const busquedaGuardada = sessionStorage.getItem(STORAGE_FILTRO_BUSQ) || "";
    if (buscador && busquedaGuardada) {
        buscador.value = busquedaGuardada;
    }

    // Marcar visualmente el botón de categoría restaurado desde sessionStorage[cite: 8]
    botones.forEach((boton) => {
        const cat = boton.getAttribute("data-categoria") || "Todas";
        if (cat === categoriaSeleccionada) {
            boton.classList.add("active");
        }
        else {
            boton.classList.remove("active");
        }
    });

    const actualizarVista = () => {
        const texto = buscador ? buscador.value : "";
        sessionStorage.setItem(STORAGE_FILTRO_CAT, categoriaSeleccionada);
        sessionStorage.setItem(STORAGE_FILTRO_BUSQ, texto);
        const filtradas = filtrarRutas(rutasCargadas, categoriaSeleccionada, texto);
        renderizarCatalogo(filtradas, actualizarVista);
    };

    const iniciarCargaRutas = async () => {
        mostrarEstadoCarga(contenedorLista, contador);
        const resultado = await obtenerRutasDesdeAPI();
        if (!resultado.ok) {
            mostrarEstadoError(contenedorLista, contador, resultado.error || "Error inesperado al cargar datos.", iniciarCargaRutas);
            return;
        }
        rutasCargadas = resultado.datos;
        actualizarVista();
    };

    botones.forEach((boton) => {
        boton.addEventListener("click", () => {
            botones.forEach((b) => b.classList.remove("active"));
            boton.classList.add("active");
            categoriaSeleccionada = boton.getAttribute("data-categoria") || "Todas";
            actualizarVista();
        });
    });

    if (buscador) {
        buscador.addEventListener("input", actualizarVista);
    }

    await iniciarCargaRutas();
});