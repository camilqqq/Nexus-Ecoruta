interface RutaActividad {
  id: number;
  tipo?: string;
  nombre: string;
  categoria: string;
  ubicacion: string;
  dificultad: string;
  imagen: string;
  imagenes?: string[];
  alt: string;
  detalle: string;
  actualizado?: string;
  emprendimiento_id?: number;
  emprendimiento_nombre?: string;
  whatsapp?: string;
  whatsapp_url?: string;
}

const API_URL_RUTAS = "http://localhost:8000/api/rutas";
const FAVORITES_KEY = "ecoruta_favoritos";

function getFavorites(): number[] {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveFavorites(ids: number[]): void {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
}

function toggleFavorite(id: number): void {
  const favs = getFavorites();
  const idx = favs.indexOf(id);
  if (idx === -1) favs.push(id);
  else favs.splice(idx, 1);
  saveFavorites(favs);
  aplicarFiltros();
}

function normalizarImagen(rutaImg: string): string {
  if (!rutaImg) return "assets/imagenes/Sendero/Sendero_Nielol.jpg";
  if (rutaImg.startsWith("http") || rutaImg.startsWith("assets/")) return rutaImg;
  if (rutaImg.startsWith("../assets/")) return rutaImg.replace("../", "");
  return rutaImg;
}

function construirGaleria(ruta: RutaActividad): string[] {
  const imgPrincipal = normalizarImagen(ruta.imagen);
  if (ruta.imagenes && ruta.imagenes.length > 0) {
    return ruta.imagenes.map(normalizarImagen);
  }
  const match = imgPrincipal.match(/^(.*?)(\.[a-zA-Z0-9]+)$/);
  if (!match) return [imgPrincipal];
  const [, base, ext] = match;
  return [
    `${base}${ext}`,
    `${base}2${ext}`,
    `${base}3${ext}`,
    `${base}4${ext}`
  ];
}

let todasLasRutas: RutaActividad[] = [];
let categoriaActiva = "Todas";

function crearTarjeta(ruta: RutaActividad): HTMLElement {
  const article = document.createElement("article");
  article.className = "card";

  const galeria = construirGaleria(ruta);
  const esFav = getFavorites().includes(ruta.id);

  const slidesHtml = galeria
    .map(
      (src, i) => `
      <img
        src="${src}"
        alt="${ruta.alt || ruta.nombre}${i > 0 ? ` (${i + 1})` : ""}"
        class="carousel-img ${i === 0 ? "active" : ""}"
        loading="lazy"
        onerror="this.src='assets/imagenes/Sendero/Sendero_Nielol.jpg'"
      />`
    )
    .join("");

  const dotsHtml = galeria
    .map(
      (_, i) =>
        `<button type="button" class="carousel-dot ${i === 0 ? "active" : ""}" data-slide="${i}" aria-label="Imagen ${i + 1}"></button>`
    )
    .join("");

  const nombreEmprendimiento = ruta.emprendimiento_nombre ? ` • ${ruta.emprendimiento_nombre}` : "";
  const urlWhatsapp =
    ruta.whatsapp_url ||
    `https://wa.me/${ruta.whatsapp || "56912345678"}?text=${encodeURIComponent(
      `Hola, vengo desde EcoRuta Temuco y me interesa consultar por "${ruta.nombre}".`
    )}`;

  const queryDetalle = ruta.emprendimiento_id
    ? `paginas/Actividad.html?id=${ruta.id}`
    : `paginas/Actividad.html?local_id=${ruta.id}`;

  article.innerHTML = `
    <div class="card-carousel">
      ${slidesHtml}
      ${
        galeria.length > 1
          ? `<button type="button" class="carousel-btn prev" aria-label="Anterior">‹</button>
             <button type="button" class="carousel-btn next" aria-label="Siguiente">›</button>
             <div class="carousel-dots">${dotsHtml}</div>`
          : ""
      }
    </div>
    <div class="card-body">
      <div style="display:flex; justify-content:space-between; align-items:center; gap:0.5rem;">
        <span class="badge-diff">${ruta.dificultad || "Fácil"}</span>
        ${ruta.tipo ? `<span style="font-size:0.75rem; font-weight:700; text-transform:uppercase; color:var(--primary);">${ruta.tipo}</span>` : ""}
      </div>
      <h3>${ruta.nombre}</h3>
      <p class="card-meta">${ruta.categoria} • ${ruta.ubicacion}${nombreEmprendimiento}</p>
      <p class="card-desc">${ruta.detalle}</p>
      <div class="card-actions">
        <a href="${queryDetalle}" class="btn-card btn-ficha">Ver ficha</a>
        <a href="${urlWhatsapp}" target="_blank" rel="noopener noreferrer" class="btn-card btn-whatsapp">Contactar</a>
        <button type="button" class="btn-fav ${esFav ? "active" : ""}" aria-label="Guardar favorito">
          ${esFav ? "❤️ Favorito" : "🤍 Favorito"}
        </button>
      </div>
    </div>
  `;

  const imgs = article.querySelectorAll<HTMLImageElement>(".carousel-img");
  const dots = article.querySelectorAll<HTMLButtonElement>(".carousel-dot");
  let idxActual = 0;

  const mostrarSlide = (nuevoIdx: number) => {
    if (imgs.length === 0) return;
    idxActual = (nuevoIdx + imgs.length) % imgs.length;
    imgs.forEach((img, idx) => img.classList.toggle("active", idx === idxActual));
    dots.forEach((dot, idx) => dot.classList.toggle("active", idx === idxActual));
  };

  article.querySelector(".prev")?.addEventListener("click", (e) => {
    e.stopPropagation();
    mostrarSlide(idxActual - 1);
  });

  article.querySelector(".next")?.addEventListener("click", (e) => {
    e.stopPropagation();
    mostrarSlide(idxActual + 1);
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      e.stopPropagation();
      const slide = Number(dot.dataset.slide || "0");
      mostrarSlide(slide);
    });
  });

  article.querySelector(".btn-fav")?.addEventListener("click", () => toggleFavorite(ruta.id));

  return article;
}

function renderizarRutas(lista: RutaActividad[]): void {
  const contenedor = document.querySelector(".activities .list");
  const contador = document.getElementById("contador-resultados");
  if (!contenedor) return;

  contenedor.innerHTML = "";
  if (contador) {
    contador.textContent = `${lista.length} ${lista.length === 1 ? "resultado" : "resultados"}`;
  }

  if (lista.length === 0) {
    contenedor.innerHTML = `<p class="empty-msg">No se encontraron actividades con los filtros seleccionados.</p>`;
    return;
  }

  lista.forEach((ruta) => contenedor.appendChild(crearTarjeta(ruta)));
}

function aplicarFiltros(): void {
  const searchInput = document.querySelector<HTMLInputElement>("main input[type='text'], main input[type='search']");
  const texto = (searchInput?.value || "").trim().toLowerCase();
  const favs = getFavorites();

  const filtradas = todasLasRutas.filter((r) => {
    const coincideCat =
      categoriaActiva === "Todas"
        ? true
        : categoriaActiva === "Favoritas"
        ? favs.includes(r.id)
        : r.categoria.toLowerCase() === categoriaActiva.toLowerCase();

    const coincideTexto =
      !texto ||
      r.nombre.toLowerCase().includes(texto) ||
      r.ubicacion.toLowerCase().includes(texto) ||
      r.categoria.toLowerCase().includes(texto) ||
      r.detalle.toLowerCase().includes(texto) ||
      (r.emprendimiento_nombre || "").toLowerCase().includes(texto);

    return coincideCat && coincideTexto;
  });

  renderizarRutas(filtradas);
}

async function inicializarCatalogo(): Promise<void> {
  let rutasLocales: RutaActividad[] = [];
  let rutasBackend: RutaActividad[] = [];

  try {
    const respLocal = await fetch("data/rutas.json");
    if (respLocal.ok) rutasLocales = await respLocal.json();
  } catch {}

  try {
    const respApi = await fetch(API_URL_RUTAS);
    if (respApi.ok) rutasBackend = await respApi.json();
  } catch {}

  const idsBackend = new Set(rutasBackend.map((r) => r.nombre.toLowerCase()));
  const localesSinDuplicar = rutasLocales.filter((r) => !idsBackend.has(r.nombre.toLowerCase()));
  todasLasRutas = [...rutasBackend, ...localesSinDuplicar];

  aplicarFiltros();
}

document.addEventListener("DOMContentLoaded", () => {
  inicializarCatalogo();

  document
    .querySelector<HTMLInputElement>("main input[type='text'], main input[type='search']")
    ?.addEventListener("input", aplicarFiltros);

  document.querySelectorAll<HTMLButtonElement>("[data-categoria]").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll("[data-categoria]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      categoriaActiva = btn.dataset.categoria || "Todas";
      aplicarFiltros();
    });
  });
});
