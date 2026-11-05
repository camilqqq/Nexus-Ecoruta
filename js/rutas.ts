export interface Ruta {
  id: number | string;
  nombre: string;
  dificultad?: string;
  distancia: string;
  kilometros: number;
  tiempoEstimado: string;
  descripcion: string;
  inicio: string;
  fin: string;
  imagen?: string;
  mapaRutaImg?: string; // Imagen directa del trazado/mapa tipo Wikiloc
  ubicacion?: string;
  desnivel?: string;
}

const rutasBase: Ruta[] = [
  {
    id: 1,
    nombre: "Sendero Cerro Ñielol",
    dificultad: "Moderada (apta para familias)",
    distancia: "4.2 km",
    kilometros: 4.2,
    tiempoEstimado: "1 a 1,5 horas",
    descripcion: "Caminata por el sendero principal del Monumento Natural Cerro Ñielol con vistas panorámicas a la ciudad de Temuco.",
    inicio: "Acceso peatonal Av. Arturo Prat (Gral. Carrera 267)",
    fin: "Mirador Panorámico / Los Copihues",
    ubicacion: "Monumento Natural Cerro Ñielol, Temuco",
    desnivel: "~162 m a 204 m",
    imagen: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=600&q=80",
    mapaRutaImg: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=700&q=80"
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
    imagen: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80",
    mapaRutaImg: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 3,
    nombre: "Recorrido Patrimonial Feria Pinto",
    dificultad: "Fácil",
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

function obtenerRutaPorParametro(): Ruta | null {
  const urlParams = new URLSearchParams(window.location.search);
  const idParam = urlParams.get('id');
  if (!idParam) return null;

  const busqueda = idParam.toLowerCase();

  return rutasBase.find(r => {
    if (busqueda === 'sendero' && r.id === 1) return true;
    if (busqueda === 'feria' && r.id === 3) return true;
    if (busqueda === 'museo' && r.id === 4) return true;
    return r.id.toString() === busqueda;
  }) || null;
}

async function renderizarRutas(): Promise<void> {
  const contenedor = document.getElementById("contenedor-rutas");
  if (!contenedor) return;

  const rutaUnica = obtenerRutaPorParametro();
  const listaMostrar = rutaUnica ? [rutaUnica] : rutasBase;

  const tituloEl = document.getElementById("nombreActividad");
  if (tituloEl && rutaUnica) {
    tituloEl.textContent = rutaUnica.nombre;
  }

  contenedor.innerHTML = listaMostrar.map((ruta) => `
    <article class="ruta-card" style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 1.2rem; margin-bottom: 1.5rem; background: #fff; box-shadow: 0 2px 5px rgba(0,0,0,0.06);">
      ${ruta.imagen ? `<img src="${ruta.imagen}" alt="${ruta.nombre}" style="width: 100%; height: 220px; object-fit: cover; border-radius: 6px; margin-bottom: 1rem;" />` : ''}
      <h2 style="color: #2e7d32; margin-top: 0;">${ruta.nombre}</h2>
      <p><strong>Dificultad:</strong> <span style="background: #e8f5e9; color: #2e7d32; padding: 2px 8px; border-radius: 4px;">${ruta.dificultad || 'General'}</span></p>
      <p><strong>Distancia:</strong> ${ruta.distancia} (${ruta.kilometros} km) | <strong>Duración:</strong> ${ruta.tiempoEstimado}</p>
      <p style="color: #222;"><strong>📍 Inicio:</strong> ${ruta.inicio} ➡️ <strong>🏁 Fin:</strong> ${ruta.fin}</p>
      ${ruta.desnivel ? `<p style="color: #555;"><strong>⛰️ Desnivel:</strong> ${ruta.desnivel}</p>` : ''}
      <p style="color: #444; margin-top: 0.6rem; line-height: 1.5;">${ruta.descripcion}</p>
      
      <!-- Visualizador de Mapa de Trazado de la Ruta sin bloqueos de iframe -->
      ${ruta.mapaRutaImg ? `
        <div style="margin-top: 1.2rem; background: #f9f9f9; padding: 10px; border-radius: 6px; border: 1px dashed #ccc;">
          <h4 style="margin: 0 0 0.5rem 0; color: #2e7d32;">🗺️ Trazado y Mapa del Recorrido (Estilo Wikiloc):</h4>
          <img src="${ruta.mapaRutaImg}" alt="Mapa de la ruta ${ruta.nombre}" style="width: 100%; height: 240px; object-fit: cover; border-radius: 6px;" />
        </div>
      ` : ''}
      
      <small style="color: #666; display: block; margin-top: 0.8rem;">📍 ${ruta.ubicacion}</small>
    </article>
  `).join('');
}

document.addEventListener("DOMContentLoaded", () => {
  renderizarRutas();
});
