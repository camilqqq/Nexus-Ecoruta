export interface RutaTuristica {
  id: number;
  nombre: string;
  categoria: "Naturaleza" | "Cultura" | "Gastronomía";
  ubicacion: string;
  actualizado: string;
  detalle: string;
  dificultad: "Fácil" | "Moderada" | "Alta";
  imagen: string;
  alt: string;
}

const API_RUTAS_URL = "data/rutas.json";
let rutasCargadas: RutaTuristica[] = [];
let categoriaSeleccionada: string = "Todas";

function normalizarTexto(texto: string): string {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export async function obtenerRutasDesdeAPI(): Promise<RutaTuristica[]> {
  try {
    const respuesta = await fetch(API_RUTAS_URL);
    if (!respuesta.ok) {
      throw new Error(`Error HTTP ${respuesta.status}`);
    }
    const datos: RutaTuristica[] = await respuesta.json();
    return datos;
  } catch (error) {
    console.warn("No se pudo obtener rutas desde la API, usando DOM existente:", error);
    return [];
  }
}

export function filtrarRutas(
  rutas: RutaTuristica[],
  categoria: string,
  terminoBusqueda: string
): RutaTuristica[] {
  const termino = normalizarTexto(terminoBusqueda.trim());
  return rutas.filter((ruta) => {
    const coincideCat = categoria === "Todas" || ruta.categoria === categoria;
    const textoCompleto = normalizarTexto(
      `${ruta.nombre} ${ruta.categoria} ${ruta.ubicacion} ${ruta.detalle} ${ruta.dificultad}`
    );
    const coincideTexto = !termino || textoCompleto.includes(termino);
    return coincideCat && coincideTexto;
  });
}

function iniciarCarruselTarjeta(contenedor: HTMLElement, cardIdx: number): void {
  const imgPrincipal = contenedor.querySelector("img") as HTMLImageElement | null;
  if (!imgPrincipal) return;

  const srcOriginal = imgPrincipal.getAttribute("src") || "";
  const rutas: string[] = [srcOriginal];
  for (let i = 2; i <= 4; i++) {
    rutas.push(srcOriginal.replace(/1?(\.[a-zA-Z]+)$/, `${i}$1`));
  }

  imgPrincipal.classList.add("activa");
  const imagenes: HTMLImageElement[] = [imgPrincipal];

  const dotsBox = document.createElement("div");
  dotsBox.className = "carrusel-dots";

  rutas.forEach((ruta, idx) => {
    if (idx > 0) {
      const img = document.createElement("img");
      img.src = ruta;
      img.alt = `${imgPrincipal.alt} (${idx + 1})`;
      img.loading = "lazy";
      img.onerror = function () {
        (this as HTMLImageElement).onerror = null;
        (this as HTMLImageElement).src = srcOriginal;
      };
      contenedor.appendChild(img);
      imagenes.push(img);
    }

    const dot = document.createElement("span");
    if (idx === 0) dot.classList.add("activa");
    dot.addEventListener("click", (e) => {
      e.preventDefault();
      cambiarSlide(idx);
    });
    dotsBox.appendChild(dot);
  });

  contenedor.appendChild(dotsBox);
  const dots = dotsBox.querySelectorAll("span");
  let indice = 0;

  function cambiarSlide(nuevoIndice: number): void {
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

export function renderizarCatalogo(rutas: RutaTuristica[]): void {
  const contenedorLista = document.querySelector(".list") as HTMLElement | null;
  const contador = document.getElementById("contador-resultados");
  if (!contenedorLista) return;

  contenedorLista.innerHTML = "";

  if (contador) {
    contador.textContent = `${rutas.length} resultado${rutas.length === 1 ? "" : "s"}`;
  }

  if (rutas.length === 0) {
    const mensaje = document.createElement("p");
    mensaje.className = "mensaje-vacio";
    mensaje.textContent = "No se encontraron actividades con esos criterios.";
    contenedorLista.appendChild(mensaje);
    return;
  }

  rutas.forEach((ruta, index) => {
    const article = document.createElement("article");
    article.className = "activity";
    article.setAttribute("data-categoria", ruta.categoria);
    article.setAttribute("data-dificultad", ruta.dificultad);

    article.innerHTML = `
      <div class="image">
        <img src="${ruta.imagen}" alt="${ruta.alt}" width="400" height="250" ${
      index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'
    } />
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
        </div>
      </div>
    `;

    contenedorLista.appendChild(article);
    const boxImg = article.querySelector(".image") as HTMLElement | null;
    if (boxImg) iniciarCarruselTarjeta(boxImg, index);
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  const botones = document.querySelectorAll(".filters button");
  const buscador = document.querySelector(".search input") as HTMLInputElement | null;

  const datosAPI = await obtenerRutasDesdeAPI();
  if (datosAPI.length > 0) {
    rutasCargadas = datosAPI;
    renderizarCatalogo(rutasCargadas);
  }

  const actualizarVista = () => {
    const texto = buscador ? buscador.value : "";
    const filtradas = filtrarRutas(rutasCargadas, categoriaSeleccionada, texto);
    renderizarCatalogo(filtradas);
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
});
