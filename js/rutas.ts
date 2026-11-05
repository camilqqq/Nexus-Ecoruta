// 1. Interfaz Ruta ampliada con campos técnicos de senderos
export interface Ruta {
  id?: string | number;
  nombre: string;
  dificultad?: "Fácil" | "Moderada" | "Media" | "Alta" | string;
  distancia: string;
  kilometros: number;     // Distancia exacta
  tiempoEstimado: string;
  descripcion: string;
  inicio: string;         // Punto de inicio del trayecto
  fin: string;            // Punto de término
  imagen?: string;        // URL de la imagen del recorrido
  ubicacion?: string;
  desnivel?: string;
}

// Endpoint de la API de rutas
const RUTAS_API_URL = "https://6724eb29c39fedae05b33100.mockapi.io/api/v1/rutas";

// 2. Datos Curados del Catálogo (Cerro Ñielol, Feria Pinto y Museo)
const rutasBase: Ruta[] = [
  {
    id: 1,
    nombre: "Sendero Cerro Ñielol",
    dificultad: "Moderada",
    distancia: "6.2 km",
    kilometros: 6.2,
    tiempoEstimado: "1h - 1.5h",
    descripcion: "Caminata por sendero principal rodeado de bosque nativo con desnivel positivo de 62m a 204m.",
    inicio: "Entrada Principal Cerro Ñielol",
    fin: "Mirador Panorámico Temuco",
    ubicacion: "Monumento Natural Cerro Ñielol",
    desnivel: "62 m a 204 m",
    imagen: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    nombre: "Recorrido Patrimonial Feria Pinto",
    distancia: "1.5 km",
    kilometros: 1.5,
    tiempoEstimado: "45 min",
    descripcion: "Ruta cultural y gastronómica para descubrir la historia local, productos típicos y gastronomía mapuche.",
    inicio: "Estación de Trenes de Temuco",
    fin: "Sector Pabellones Feria Pinto",
    ubicacion: "Feria Pinto, Temuco",
    imagen: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    nombre: "Circuito Histórico Museo Regional",
    dificultad: "Fácil",
    distancia: "2.0 km",
    kilometros: 2.0,
    tiempoEstimado: "1h",
    descripcion: "Recorrido por las salas de exhibición del patrimonio histórico de la Araucanía y sus jardines.",
    inicio: "Acceso Principal Museo Regional",
    fin: "Sala Arqueológica y Jardines",
    ubicacion: "Av. Alemania 084, Temuco",
    imagen: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&w=600&q=80"
  }
];

// FUNCIÓN 1: Cargar rutas desde la API
async function cargarRutas(): Promise<Ruta[]> {
  try {
    const response = await fetch(RUTAS_API_URL);
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    const data: Ruta[] = await response.json();
    return data && data.length > 0 ? data : rutasBase;
  } catch (error) {
    console.warn("No se pudo conectar con la API de rutas. Cargando datos curados de respaldo:", error);
    return rutasBase;
  }
}

// FUNCIÓN 2: Filtrar rutas por dificultad (Manejo de Interface Ruta)
export function filtrarRutasPorDificultad(listaRutas: Ruta[], dificultad: string): Ruta[] {
  if (!dificultad || dificultad === "Todas") return listaRutas;
  return listaRutas.filter(
    (ruta) => ruta.dificultad && ruta.dificultad.toLowerCase() === dificultad.toLowerCase()
  );
}

// FUNCIÓN 3: Renderizar nuevos atributos (inicio, fin, km, imagen) en el DOM
async function renderizarRutas(): Promise<void> {
  const contenedor = document.getElementById("contenedor-rutas");
  if (!contenedor) return;

  const rutas = await cargarRutas();

  contenedor.innerHTML = rutas.map((ruta) => `
    <article class="ruta-card" style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 1rem; margin-bottom: 1.5rem; background: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      ${ruta.imagen ? `<img src="${ruta.imagen}" alt="${ruta.nombre}" style="width: 100%; height: 180px; object-fit: cover; border-radius: 6px; margin-bottom: 0.8rem;" />` : ''}
      <h3 style="color: #2e7d32; margin-top: 0;">${ruta.nombre}</h3>
      ${ruta.dificultad ? `<p style="margin: 0.4rem 0;"><strong>Dificultad:</strong> <span class="badge-dificultad">${ruta.dificultad}</span></p>` : ''}
      <p style="margin: 0.4rem 0;"><strong>Distancia:</strong> ${ruta.distancia} (${ruta.kilometros} km) | <strong>Tiempo:</strong> ${ruta.tiempoEstimado}</p>
      <p style="margin: 0.4rem 0; color: #333;"><strong>📍 Inicio:</strong> ${ruta.inicio} ➡️ <strong>🏁 Fin:</strong> ${ruta.fin}</p>
      ${ruta.desnivel ? `<p style="margin: 0.4rem 0; color: #666;"><strong>⛰️ Desnivel:</strong> ${ruta.desnivel}</p>` : ''}
      <p style="color: #555; margin-top: 0.5rem;">${ruta.descripcion}</p>
      ${ruta.ubicacion ? `<small style="color: #777;">📍 ${ruta.ubicacion}</small>` : ''}
    </article>
  `).join('');
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarRutas();
});
