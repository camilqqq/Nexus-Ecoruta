// 1. Interfaz Ruta con campos técnicos (Diferencia Ruta de Actividad)
export interface Ruta {
  id?: string | number;
  nombre: string;
  dificultad?: "Fácil" | "Moderada" | "Media" | "Alta" | string;
  distancia: string;
  kilometros: number;     // Distancia exacta en km
  tiempoEstimado: string;
  descripcion: string;
  inicio: string;         // Punto de inicio del trayecto
  fin: string;            // Punto de término
  imagen?: string;        // URL de la imagen/mapa tipo Wikiloc
  ubicacion?: string;
  desnivel?: string;
}

// Endpoint de la API de rutas
const RUTAS_API_URL = "https://6724eb29c39fedae05b33100.mockapi.io/api/v1/rutas";

// 2. Catálogo Actualizado y Curado según indicaciones
const rutasBase: Ruta[] = [
  {
    id: 1,
    nombre: "Sendero Cerro Ñielol (Ruta Principal)",
    dificultad: "Moderada (apta para familias y niños)",
    distancia: "4.2 km",
    kilometros: 4.2,
    tiempoEstimado: "1 a 1,5 horas",
    descripcion: "Caminata por el sendero principal del Monumento Natural Cerro Ñielol con vistas a la ciudad de Temuco.",
    inicio: "Acceso peatonal Av. Arturo Prat (Gral. Carrera 267)",
    fin: "Mirador Panorámico / Los Copihues",
    ubicacion: "Monumento Natural Cerro Ñielol, Temuco",
    desnivel: "~162 m a 204 m",
    imagen: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    nombre: "Sendero Sierra Nevada - Parque Nacional Conguillío",
    dificultad: "Media - Alta",
    distancia: "12.0 km",
    kilometros: 12.0,
    tiempoEstimado: "5 a 6 horas",
    descripcion: "Ruta emblemática de trekking entre bosques de Araucarias milenarias, vistas al Volcán Llaima y el Lago Conguillío.",
    inicio: "Caseta de Control Playa Linda",
    fin: "Mirador Sierra Nevada (Cumbres)",
    ubicacion: "Parque Nacional Conguillío, Melipeuco",
    desnivel: "450 m a 1.250 m",
    imagen: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    nombre: "Recorrido Patrimonial Feria Pinto",
    distancia: "1.5 km",
    kilometros: 1.5,
    tiempoEstimado: "45 min",
    descripcion: "Ruta cultural y gastronómica para descubrir la historia local, productos típicos y artesanía de la zona.",
    inicio: "Estación de Trenes de Temuco",
    fin: "Sector Pabellones Feria Pinto",
    ubicacion: "Feria Pinto, Temuco",
    imagen: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    nombre: "Circuito Histórico Museo Regional",
    dificultad: "Fácil",
    distancia: "2.0 km",
    kilometros: 2.0,
    tiempoEstimado: "1 hora",
    descripcion: "Recorrido patrimonial por las salas de exhibición de la historia de La Araucanía y sus jardines botánicos.",
    inicio: "Acceso Principal Museo Regional",
    fin: "Jardines del Museo",
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

// FUNCIÓN 2: Filtrar rutas por dificultad
export function filtrarRutasPorDificultad(listaRutas: Ruta[], dificultad: string): Ruta[] {
  if (!dificultad || dificultad === "Todas") return listaRutas;
  return listaRutas.filter(
    (ruta) => ruta.dificultad && ruta.dificultad.toLowerCase().includes(dificultad.toLowerCase())
  );
}

// FUNCIÓN 3: Renderizar nuevos atributos en el DOM
async function renderizarRutas(): Promise<void> {
  const contenedor = document.getElementById("contenedor-rutas");
  if (!contenedor) return;

  const rutas = await cargarRutas();

  contenedor.innerHTML = rutas.map((ruta) => `
    <article class="ruta-card" style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 1.2rem; margin-bottom: 1.5rem; background: #fff; box-shadow: 0 2px 5px rgba(0,0,0,0.06);">
      ${ruta.imagen ? `<img src="${ruta.imagen}" alt="${ruta.nombre}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 6px; margin-bottom: 1rem;" />` : ''}
      <h3 style="color: #2e7d32; margin-top: 0; font-size: 1.3rem;">${ruta.nombre}</h3>
      ${ruta.dificultad ? `<p style="margin: 0.4rem 0;"><strong>Dificultad:</strong> <span style="background: #e8f5e9; color: #2e7d32; padding: 2px 8px; border-radius: 4px; font-weight: 500;">${ruta.dificultad}</span></p>` : ''}
      <p style="margin: 0.4rem 0;"><strong>Distancia:</strong> ${ruta.distancia} (${ruta.kilometros} km) | <strong>Duración:</strong> ${ruta.tiempoEstimado}</p>
      <p style="margin: 0.4rem 0; color: #222;"><strong>📍 Inicio:</strong> ${ruta.inicio} ➡️ <strong>🏁 Fin:</strong> ${ruta.fin}</p>
      ${ruta.desnivel ? `<p style="margin: 0.4rem 0; color: #555;"><strong>⛰️ Desnivel:</strong> ${ruta.desnivel}</p>` : ''}
      <p style="color: #444; margin-top: 0.6rem; line-height: 1.4;">${ruta.descripcion}</p>
      ${ruta.ubicacion ? `<small style="color: #666; display: block; margin-top: 0.5rem;">📍 ${ruta.ubicacion}</small>` : ''}
    </article>
  `).join('');
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarRutas();
});
