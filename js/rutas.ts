// Interface que define la estructura de una Ruta
export interface Ruta {
  id?: string | number;
  nombre: string;
  dificultad: "Fácil" | "Media" | "Alta" | string;
  distancia: string;
  kilometros?: number;
  tiempoEstimado: string;
  descripcion: string;
  inicio?: string;
  fin?: string;
  imagen?: string;
  mapaRutaImg?: string;
  ubicacion?: string;
  desnivel?: string;
}

// Endpoint de la API
const RUTAS_API_URL = "https://6724eb29c39fedae05b33100.mockapi.io/api/v1/rutas";

// Datos de respaldo
const rutasBase: Ruta[] = [
  {
    id: 1,
    nombre: "Sendero Cerro Ñielol",
    dificultad: "Fácil",
    distancia: "2.5 km",
    tiempoEstimado: "1h 30min",
    descripcion: "Caminata entre bosque nativo con vista panorámica a Temuco.",
    ubicacion: "Monumento Natural Cerro Ñielol"
  },
  {
    id: 2,
    nombre: "Ruta Eco-Etnia Ruka Mapuche",
    dificultad: "Media",
    distancia: "5.0 km",
    tiempoEstimado: "2h 45min",
    descripcion: "Recorrido cultural y gastronómico por rukas y senderos locales.",
    ubicacion: "Padre Las Casas"
  }
];

// FUNCIÓN 1: Obtener rutas desde la API
export async function cargarRutas(): Promise<Ruta[]> {
  try {
    const response = await fetch(RUTAS_API_URL);
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    const data: Ruta[] = await response.json();
    return data && data.length > 0 ? data : rutasBase;
  } catch (error) {
    console.warn("No se pudo conectar con la API de rutas. Cargando datos de respaldo:", error);
    return rutasBase;
  }
}

// FUNCIÓN 2: Filtrar lista de rutas según nivel de dificultad
export function filtrarRutasPorDificultad(listaRutas: Ruta[], dificultad: string): Ruta[] {
  if (!dificultad || dificultad === "Todas") return listaRutas;
  return listaRutas.filter(
    (ruta) => ruta.dificultad.toLowerCase() === dificultad.toLowerCase()
  );
}

// FUNCIÓN 3: Renderizar las rutas en el DOM
async function renderizarRutas(): Promise<void> {
  const contenedor = document.getElementById("contenedor-rutas") || document.getElementById("contenedor-api");
  if (!contenedor) return;

  const rutas = await cargarRutas();

  contenedor.innerHTML = rutas.map((ruta) => `
    <article class="ruta-card" style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 1.2rem; margin-bottom: 1.5rem; background: #fff;">
      ${ruta.imagen ? `<img src="${ruta.imagen}" alt="${ruta.nombre}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 6px; margin-bottom: 0.8rem;" />` : ''}
      <h3 style="color: #2e7d32; margin-top: 0;">${ruta.nombre}</h3>
      <p style="margin: 0.4rem 0;"><strong>Dificultad:</strong> <span class="badge-dificultad">${ruta.dificultad}</span></p>
      <p style="margin: 0.4rem 0;"><strong>Distancia:</strong> ${ruta.distancia} | <strong>Duración:</strong> ${ruta.tiempoEstimado}</p>
      ${ruta.inicio ? `<p style="margin: 0.4rem 0;"><strong>📍 Inicio:</strong> ${ruta.inicio} ➡️ <strong>🏁 Fin:</strong> ${ruta.fin}</p>` : ''}
      <p style="color: #555; margin-top: 0.5rem;">${ruta.descripcion}</p>
      ${ruta.ubicacion ? `<small style="color: #2d3748;">📍 ${ruta.ubicacion}</small>` : ''}
    </article>
  `).join('');
}

// Escuchar el evento DOMContentLoaded de manera independiente
document.addEventListener("DOMContentLoaded", () => {
  renderizarRutas();

  // Filtrado por dificultad
  const filtroDificultad = document.getElementById("filtro-dificultad") as HTMLSelectElement;
  if (filtroDificultad) {
    filtroDificultad.addEventListener("change", async () => {
      const rutas = await cargarRutas();
      const rutasFiltradas = filtrarRutasPorDificultad(rutas, filtroDificultad.value);
      const contenedor = document.getElementById("contenedor-rutas") || document.getElementById("contenedor-api");
      if (contenedor) {
        contenedor.innerHTML = rutasFiltradas.map((ruta) => `
          <article class="ruta-card" style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 1rem; margin-bottom: 1rem; background: #fff;">
            ${ruta.imagen ? `<img src="${ruta.imagen}" alt="${ruta.nombre}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 6px; margin-bottom: 0.8rem;" />` : ''}
            <h3 style="color: #2e7d32; margin-top: 0;">${ruta.nombre}</h3>
            <p style="margin: 0.4rem 0;"><strong>Dificultad:</strong> <span class="badge-dificultad">${ruta.dificultad}</span></p>
            <p style="margin: 0.4rem 0;"><strong>Distancia:</strong> ${ruta.distancia} | <strong>Tiempo:</strong> ${ruta.tiempoEstimado}</p>
            ${ruta.inicio ? `<p style="margin: 0.4rem 0;"><strong>📍 Inicio:</strong> ${ruta.inicio} ➡️ <strong>🏁 Fin:</strong> ${ruta.fin}</p>` : ''}
            <p style="color: #555; margin-top: 0.5rem;">${ruta.descripcion}</p>
            ${ruta.ubicacion ? `<small style="color: #777;">📍 ${ruta.ubicacion}</small>` : ''}
          </article>
        `).join('');
      }
    });
  }
});
