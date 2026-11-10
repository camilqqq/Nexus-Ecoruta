export interface Ruta {
  id: string;
  nombre: string;
  categoria: string;
  duracion: string;
  dificultad: string;
  distancia: string;
  descripcion: string;
  imagen: string;
  tipoRuta: string;
  terreno: string;
  altitudMax: string;
  desnivel: string;
  ubicacion: string;
  horarios: string;
  senderos: string[];
  tarifas: string[];
}

const LOCAL_API_URL = "../api/rutas.json";

async function cargarDetalleActividad(): Promise<void> {
  const params = new URLSearchParams(window.location.search);
  const idParam = params.get("id") || "1";
  const contenedor = document.getElementById("contenedor-rutas") || document.querySelector("main");

  if (!contenedor) return;

  try {
    const res = await fetch(LOCAL_API_URL);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    
    const rutas: Ruta[] = await res.json();
    
    // Mapear id=4 al Museo Regional (id="2") si viene desde index.html
    let actividad = rutas.find(r => r.id === idParam);
    if (!actividad && idParam === "4") {
      actividad = rutas.find(r => r.id === "2");
    }
    if (!actividad) {
      actividad = rutas[0];
    }

    renderizarMaqueta(contenedor, actividad);
  } catch (err) {
    console.error("Error al cargar la API local de rutas:", err);
  }
}

function renderizarMaqueta(contenedor: HTMLElement, r: Ruta): void {
  const senderosLi = r.senderos.map(s => `<li style="margin-bottom: 4px;">${s}</li>`).join("");
  const tarifasLi = r.tarifas.map(t => `<li style="margin-bottom: 4px;">${t}</li>`).join("");

  contenedor.innerHTML = `
    <div style="background: #e2e7ec; padding: 2.5rem; border-radius: 8px; font-family: Arial, sans-serif; color: #2d3748; max-width: 900px; margin: 0 auto; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
      
      <!-- Título Principal -->
      <h1 style="font-size: 1.8rem; color: #1a202c; font-weight: bold; margin-top: 0; margin-bottom: 0.8rem;">
        ${r.nombre}
      </h1>

      <!-- Subtítulo formativo -->
      <p style="font-size: 0.95rem; color: #4a5568; margin-bottom: 1.2rem; font-weight: 500;">
        ${r.nombre} (${r.categoria}) - Duración: ${r.duracion} | Dificultad: ${r.dificultad} | ${r.distancia}
      </p>

      <!-- Descripción general -->
      <p style="font-size: 0.95rem; color: #4a5568; line-height: 1.5; margin-bottom: 1.8rem;">
        ${r.descripcion}
      </p>

      <!-- Cuadrícula técnica de 3 columnas -->
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.2rem 1.5rem; font-size: 0.88rem; color: #4a5568; margin-bottom: 2rem;">
        <div>
          <strong style="color: #1a202c;">Tipo de ruta:</strong> ${r.tipoRuta}
        </div>
        <div>
          <strong style="color: #1a202c;">Terreno:</strong> ${r.terreno}
        </div>
        <div>
          <strong style="color: #1a202c;">Altitud máx.:</strong> ${r.altitudMax}
        </div>
        <div>
          <strong style="color: #1a202c;">Desnivel:</strong> ${r.desnivel}
        </div>
        <div>
          <strong style="color: #1a202c;">Ubicación:</strong> ${r.ubicacion}
        </div>
        <div>
          <strong style="color: #1a202c;">Horarios:</strong> ${r.horarios}
        </div>
      </div>

      <!-- Sección 1: Senderos y atractivos -->
      <h3 style="font-size: 1.05rem; color: #1a202c; font-weight: bold; margin-bottom: 0.6rem;">
        Senderos y atractivos del parque:
      </h3>
      <ul style="font-size: 0.9rem; color: #4a5568; padding-left: 1.2rem; margin-top: 0; margin-bottom: 1.8rem;">
        ${senderosLi}
      </ul>

      <!-- Sección 2: Tarifas y accesos -->
      <h3 style="font-size: 1.05rem; color: #1a202c; font-weight: bold; margin-bottom: 0.6rem;">
        Tarifas y accesos:
      </h3>
      <ul style="font-size: 0.9rem; color: #4a5568; padding-left: 1.2rem; margin-top: 0; margin: 0;">
        ${tarifasLi}
      </ul>

    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  cargarDetalleActividad();
});