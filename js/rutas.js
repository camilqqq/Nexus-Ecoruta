"use strict";
const API_LOCAL_URL = "data/rutas.json";
const API_BACKEND_URL = "https://nexus-ecoruta.onrender.com/api/rutas";
const RUTAS_STORAGE_FAV = "ecoruta_favoritos";
const STORAGE_FILTRO_CAT = "ecoruta_filtro_categoria";
const STORAGE_FILTRO_BUSQ = "ecoruta_filtro_busqueda";
let rutasCargadas = [];
let categoriaSeleccionada = sessionStorage.getItem(STORAGE_FILTRO_CAT) || "Todas";

const GALERIAS_ACTIVIDADES = {
    1: [
        "assets/imagenes/Sendero/sendero.jpg",
        "assets/imagenes/Sendero/sendero2.jpg",
        "assets/imagenes/Sendero/sendero3.jpg",
        "assets/imagenes/Sendero/sendero4.jpg"
    ],
    2: [
        "assets/imagenes/Museo/museo.jpg",
        "assets/imagenes/Museo/museo2.jpg",
        "assets/imagenes/Museo/museo3.jpg",
        "assets/imagenes/Museo/museo4.jpg"
    ],
    3: [
        "assets/imagenes/Feria/feria.jpg",
        "assets/imagenes/Feria/feria2.jpg",
        "assets/imagenes/Feria/feria3.jpg",
        "assets/imagenes/Feria/feria4.jpg"
    ]
};

function normalizarTexto(texto) {
    return String(texto || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}
function normalizarImagen(rutaImg) {
    if (!rutaImg)
        return "assets/imagenes/Sendero/sendero.jpg";
    if (rutaImg.startsWith("../assets/"))
        return rutaImg.replace("../", "");
    return rutaImg;
}
// --- Gestión de Favoritos (LocalStorage) ---
function rutasObtenerFav() {
    try {
        const raw = localStorage.getItem(RUTAS_STORAGE_FAV);
        if (!raw)
            return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed.filter((id) => typeof id === "number") : [];
    }
    catch {
        return [];
    }
}
function rutasAlternarFav(id) {
    const favoritos = rutasObtenerFav();
    const existe = favoritos.includes(id);
    const actualizados = existe ? favoritos.filter((item) => item !== id) : [...favoritos, id];
    localStorage.setItem(RUTAS_STORAGE_FAV, JSON.stringify(actualizados));
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
    let rutasLocales = [];
    let rutasBackend = [];
    try {
        const respLocal = await fetch(API_LOCAL_URL);
        if (respLocal.ok) {
            rutasLocales = await respLocal.json();
        }
    }
    catch { }
    try {
        const respBack = await fetch(API_BACKEND_URL);
        if (respBack.ok) {
            rutasBackend = await respBack.json();
        }
    }
    catch { }
    if (rutasLocales.length === 0 && rutasBackend.length === 0) {
        return { ok: false, datos: [], error: "No se pudo conectar con el catálogo local ni con la base de datos." };
    }
    const nombresBackend = new Set(rutasBackend.map((r) => r.nombre.toLowerCase()));
    const localesSinDuplicar = rutasLocales.filter((r) => !nombresBackend.has(r.nombre.toLowerCase()));
    return { ok: true, datos: [...rutasBackend, ...localesSinDuplicar] };
}
function filtrarRutas(rutas, categoria, terminoBusqueda) {
    const termino = normalizarTexto(terminoBusqueda.trim());
    const favoritos = rutasObtenerFav();
    return rutas.filter((ruta) => {
        const coincideCat = categoria === "Todas" ||
            (categoria === "Favoritas" ? favoritos.includes(ruta.id) : ruta.categoria === categoria);
        const textoCompleto = normalizarTexto(`${ruta.nombre} ${ruta.categoria} ${ruta.ubicacion} ${ruta.detalle || ""} ${ruta.dificultad || ""} ${ruta.emprendimiento_nombre || ""}`);
        const coincideTexto = !termino || textoCompleto.includes(termino);
        return coincideCat && coincideTexto;
    });
}
function iniciarCarruselTarjeta(contenedor, cardIdx, rutaId) {
    const imgPrincipal = contenedor.querySelector("img");
    if (!imgPrincipal)
        return;
    const srcOriginal = imgPrincipal.getAttribute("src") || "";
    const tieneGaleriaReal = Array.isArray(GALERIAS_ACTIVIDADES[rutaId]);
    const rutas = tieneGaleriaReal
        ? [...GALERIAS_ACTIVIDADES[rutaId]]
        : [srcOriginal, srcOriginal, srcOriginal, srcOriginal];
    if (rutas[0] !== srcOriginal) {
        rutas[0] = srcOriginal;
    }
    imgPrincipal.classList.add("activa");
    const imagenes = [imgPrincipal];
    const dotsBox = document.createElement("div");
    dotsBox.className = "carrusel-dots";
    const encuadres = ["left center", "right center", "center top"];
    rutas.forEach((ruta, idx) => {
        if (idx > 0) {
            const img = document.createElement("img");
            img.src = ruta;
            img.alt = `${imgPrincipal.alt} (${idx + 1})`;
            img.loading = "lazy";
            img.decoding = "async";
            if (!tieneGaleriaReal) {
                img.style.objectPosition = encuadres[idx - 1] || "center center";
            }
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
    const favoritosActuales = rutasObtenerFav();
    rutas.forEach((ruta, index) => {
        const esFavorito = favoritosActuales.includes(ruta.id);
        const article = document.createElement("article");
        article.className = "activity";
        article.setAttribute("data-categoria", ruta.categoria);
        article.setAttribute("data-dificultad", ruta.dificultad);
        const imgSrc = normalizarImagen(ruta.imagen);
        const empTag = ruta.emprendimiento_nombre ? ` • ${ruta.emprendimiento_nombre}` : "";
        const actualizadoTxt = ruta.actualizado ? `Actualizado: ${ruta.actualizado}` : `Dificultad: ${ruta.dificultad}`;
        const fichaHref = `paginas/Actividad.html?id=${ruta.id}`;
        const waHref = ruta.whatsapp_url ||
            `https://wa.me/${ruta.whatsapp || "56912345678"}?text=${encodeURIComponent(`Hola, vengo desde EcoRuta Temuco y me interesa consultar por "${ruta.nombre}".`)}`;
        article.innerHTML = `
      <div class="image">
        <img src="${imgSrc}" alt="${ruta.alt || ruta.nombre}" width="400" height="250" ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'} onerror="this.onerror=null;this.src='assets/imagenes/Sendero/sendero.jpg';" />
        <button type="button" class="btn-favorito ${esFavorito ? "activo" : ""}" data-id="${ruta.id}" aria-pressed="${esFavorito}" aria-label="${esFavorito ? "Quitar de favoritos" : "Guardar en favoritos"}: ${ruta.nombre}" style="position: absolute; top: 10px; left: 10px; z-index: 3; width: 36px; height: 36px; border-radius: 50%; border: 1px solid ${esFavorito ? "#feb2b2" : "rgba(0,0,0,0.12)"}; background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(4px); display: flex; align-items: center; justify-content: center; font-size: 1.05rem; cursor: pointer; box-shadow: 0 2px 6px rgba(0,0,0,0.18);">
          ${esFavorito ? "❤️" : "🤍"}
        </button>
      </div>
      <div class="info">
        <div class="activity-header">
          <div>
            <h3>${ruta.nombre}</h3>
            <p>${ruta.categoria} • ${ruta.ubicacion}${empTag}</p>
          </div>
          <small>${actualizadoTxt}</small>
        </div>
        <p>${ruta.detalle || ""}</p>
        <div class="buttons">
          <a href="${fichaHref}" class="primary" aria-label="Ver ficha detallada de ${ruta.nombre}">Ver ficha</a>
          <a href="${waHref}" target="_blank" rel="noopener" aria-label="Contactar por WhatsApp sobre ${ruta.nombre}">Contactar</a>
        </div>
      </div>
    `;
        contenedorLista.appendChild(article);
        const btnFav = article.querySelector(".btn-favorito");
        if (btnFav) {
            btnFav.addEventListener("click", (e) => {
                e.stopPropagation();
                rutasAlternarFav(ruta.id);
                if (alCambiarFavorito)
                    alCambiarFavorito();
            });
        }
        const boxImg = article.querySelector(".image");
        if (boxImg)
            iniciarCarruselTarjeta(boxImg, index, ruta.id);
    });
}
document.addEventListener("DOMContentLoaded", async () => {
    const botones = document.querySelectorAll(".filters button");
    const buscador = document.querySelector(".search input");
    const contenedorLista = document.querySelector(".list");
    const contador = document.getElementById("contador-resultados");
    const busquedaGuardada = sessionStorage.getItem(STORAGE_FILTRO_BUSQ) || "";
    if (buscador && busquedaGuardada) {
        buscador.value = busquedaGuardada;
    }
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
