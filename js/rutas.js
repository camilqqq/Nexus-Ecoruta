"use strict";

const API_LOCAL_URL = "data/rutas.json";
const API_BACKEND_URL = "data/rutas.json";
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
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function obtenerFavoritos() {
  try {
    const raw = localStorage.getItem(RUTAS_STORAGE_FAV);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function guardarFavoritos(favoritos) {
  localStorage.setItem(RUTAS_STORAGE_FAV, JSON.stringify(favoritos));
}

function alternarFavorito(id) {
  const favoritos = obtenerFavoritos();
  const idx = favoritos.indexOf(id);
  if (idx >= 0) {
    favoritos.splice(idx, 1);
  } else {
    favoritos.push(id);
  }
  guardarFavoritos(favoritos);
  filtrarYRenderizar();
}

function obtenerTextoTraducido(ruta, campo, lang) {
  if (lang === "en" && ruta[`${campo}_en`]) {
    return ruta[`${campo}_en`];
  }
  return ruta[campo] || "";
}

function inicializarCarruseles() {
  const tarjetas = document.querySelectorAll(".activity");

  tarjetas.forEach((tarjeta) => {
    const contenedorImg = tarjeta.querySelector(".image");
    const imgPrincipal = contenedorImg ? contenedorImg.querySelector("img") : null;
    if (!contenedorImg || !imgPrincipal) return;

    if (contenedorImg.querySelector(".carrusel-dots")) return;

    const id = Number(tarjeta.dataset.id);
    const titulo = tarjeta.querySelector("h2, h3")?.textContent?.trim() || "Actividad";
    const srcBase = imgPrincipal.getAttribute("src");

    let galeria = GALERIAS_ACTIVIDADES[id]
      ? [...GALERIAS_ACTIVIDADES[id]]
      : [srcBase, srcBase, srcBase, srcBase];

    if (galeria[0] !== srcBase) {
      galeria = [srcBase, ...galeria.filter((s) => s !== srcBase)];
    }

    imgPrincipal.classList.add("activa");

    const posiciones = ["left center", "right center", "center top"];
    galeria.slice(1).forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = `${titulo} (${i + 2})`;
      img.loading = "lazy";
      img.decoding = "async";
      if (!GALERIAS_ACTIVIDADES[id]) {
        img.style.objectPosition = posiciones[i] || "center center";
      }
      contenedorImg.appendChild(img);
    });

    const todasImgs = contenedorImg.querySelectorAll("img");
    const dotsContainer = document.createElement("div");
    dotsContainer.className = "carrusel-dots";

    galeria.forEach((_, idx) => {
      const dot = document.createElement("span");
      if (idx === 0) dot.classList.add("activa");
      dot.addEventListener("click", (e) => {
        e.stopPropagation();
        mostrarSlide(idx);
        reiniciarIntervalo();
      });
      dotsContainer.appendChild(dot);
    });

    contenedorImg.appendChild(dotsContainer);
    const dots = dotsContainer.querySelectorAll("span");

    let indiceActual = 0;
    let intervalo = null;

    function mostrarSlide(nuevoIndice) {
      todasImgs[indiceActual].classList.remove("activa");
      dots[indiceActual].classList.remove("activa");
      indiceActual = (nuevoIndice + todasImgs.length) % todasImgs.length;
      todasImgs[indiceActual].classList.add("activa");
      dots[indiceActual].classList.add("activa");
    }

    function reiniciarIntervalo() {
      clearInterval(intervalo);
      intervalo = setInterval(() => {
        mostrarSlide(indiceActual + 1);
      }, 4000);
    }

    contenedorImg.addEventListener("mouseenter", () => clearInterval(intervalo));
    contenedorImg.addEventListener("mouseleave", reiniciarIntervalo);

    reiniciarIntervalo();
  });
}

function renderizarRutas(lista) {
  const contenedor = document.querySelector(".list");
  const contador = document.getElementById("contador-resultados");
  if (!contenedor) return;

  const lang = localStorage.getItem("selectedLang") || "es";
  const favoritos = obtenerFavoritos();

  if (contador) {
    contador.textContent =
      lang === "en"
        ? `${lista.length} ${lista.length === 1 ? "result" : "results"}`
        : `${lista.length} ${lista.length === 1 ? "resultado" : "resultados"}`;
  }

  if (!lista.length) {
    contenedor.innerHTML = `<p style="grid-column: 1 / -1; text-align: center; padding: 2rem;">${
      lang === "en"
        ? "No activities found matching your search."
        : "No se encontraron actividades que coincidan con tu búsqueda."
    }</p>`;
    return;
  }

  contenedor.innerHTML = lista
    .map((ruta, index) => {
      const esFavorita = favoritos.includes(ruta.id);
      const nombre = obtenerTextoTraducido(ruta, "nombre", lang);
      const ubicacion = obtenerTextoTraducido(ruta, "ubicacion", lang);
      const categoria = obtenerTextoTraducido(ruta, "categoria", lang);
      const descripcion =
        obtenerTextoTraducido(ruta, "descripcion", lang) ||
        obtenerTextoTraducido(ruta, "detalles", lang) ||
        [ruta.duracion ? `Duración: ${ruta.duracion}` : "", ruta.dificultad ? `Dificultad: ${ruta.dificultad}` : ""]
          .filter(Boolean)
          .join(" · ");
      const alt = obtenerTextoTraducido(ruta, "alt", lang) || nombre;
      const actualizado = ruta.actualizado || "";

      const txtVerFicha = lang === "en" ? "View details" : "Ver ficha";
      const txtContactar = lang === "en" ? "Contact" : "Contactar";
      const txtActualizado = lang === "en" ? "Updated:" : "Actualizado:";

      return `
        <article class="activity" data-id="${ruta.id}">
          <div class="image">
            <img
              src="${ruta.imagen}"
              alt="${alt}"
              class="activa"
              decoding="async"
              ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}
            />
            <button
              type="button"
              class="btn-fav"
              data-fav-id="${ruta.id}"
              aria-pressed="${esFavorita}"
              aria-label="${esFavorita ? "Quitar de favoritas" : "Agregar a favoritas"}"
              style="position:absolute;top:10px;right:10px;z-index:3;width:36px;height:36px;border-radius:50%;border:none;background:rgba(255,255,255,0.9);cursor:pointer;font-size:1.1rem;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(0,0,0,0.2);"
            >${esFavorita ? "❤️" : "🤍"}</button>
          </div>
          <div class="info">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:0.5rem;">
              <h2 style="margin:0;">${nombre}</h2>
              ${actualizado ? `<span class="updated" style="font-size:0.75rem;color:#666;white-space:nowrap;">${txtActualizado} ${actualizado}</span>` : ""}
            </div>
            <p class="meta">${categoria} • ${ubicacion}</p>
            ${descripcion ? `<p class="details" style="margin:0.5rem 0 1rem 0;">${descripcion}</p>` : ""}
            <div class="buttons" style="display:grid;grid-template-columns:1fr 1fr;gap:0.65rem;margin-top:auto;">
              <a href="paginas/actividad.html?id=${ruta.id}" style="background:#2d5a3c;color:#ffffff;font-weight:600;text-align:center;padding:0.65rem 1rem;border-radius:10px;text-decoration:none;">${txtVerFicha}</a>
              <a href="paginas/contacto.html?actividad=${encodeURIComponent(nombre)}" style="background:#ffffff;color:#1b3b26;font-weight:600;text-align:center;padding:0.65rem 1rem;border-radius:10px;border:1px solid #cfd8d3;text-decoration:none;">${txtContactar}</a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  contenedor.querySelectorAll(".btn-fav").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = Number(btn.getAttribute("data-fav-id"));
      alternarFavorito(id);
    });
  });

  inicializarCarruseles();
}

function filtrarYRenderizar() {
  const inputBusqueda = document.querySelector(".search input");
  const termino = normalizarTexto(inputBusqueda ? inputBusqueda.value : "");
  const favoritos = obtenerFavoritos();

  const filtradas = rutasCargadas.filter((ruta) => {
    if (categoriaSeleccionada === "Favoritas") {
      if (!favoritos.includes(ruta.id)) return false;
    } else if (categoriaSeleccionada !== "Todas") {
      if (normalizarTexto(ruta.categoria) !== normalizarTexto(categoriaSeleccionada)) {
        return false;
      }
    }

    if (!termino) return true;

    const campos = [
      ruta.nombre,
      ruta.nombre_en,
      ruta.ubicacion,
      ruta.ubicacion_en,
      ruta.categoria,
      ruta.categoria_en,
      ruta.descripcion,
      ruta.descripcion_en,
      ruta.detalles,
      ruta.detalles_en
    ]
      .map(normalizarTexto)
      .join(" ");

    return campos.includes(termino);
  });

  renderizarRutas(filtradas);
}

async function cargarRutas() {
  try {
    const resp = await fetch(API_LOCAL_URL);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const data = await resp.json();
    rutasCargadas = Array.isArray(data) ? data : data.rutas || [];
    filtrarYRenderizar();
  } catch (err) {
    console.error("Error cargando rutas:", err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const botonesFiltro = document.querySelectorAll(".filters button");
  const inputBusqueda = document.querySelector(".search input");

  botonesFiltro.forEach((btn) => {
    const cat = btn.getAttribute("data-categoria");
    if (cat === categoriaSeleccionada) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }

    btn.addEventListener("click", () => {
      categoriaSeleccionada = cat || "Todas";
      sessionStorage.setItem(STORAGE_FILTRO_CAT, categoriaSeleccionada);

      botonesFiltro.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      filtrarYRenderizar();
    });
  });

  if (inputBusqueda) {
    const busquedaGuardada = sessionStorage.getItem(STORAGE_FILTRO_BUSQ) || "";
    inputBusqueda.value = busquedaGuardada;

    inputBusqueda.addEventListener("input", () => {
      sessionStorage.setItem(STORAGE_FILTRO_BUSQ, inputBusqueda.value);
      filtrarYRenderizar();
    });
  }

  cargarRutas();
});
