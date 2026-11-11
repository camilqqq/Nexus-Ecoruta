const API_URL = "https://6724eb29c39fedae05b33100.mockapi.io/api/v1/rutas";

// Base de datos local con las FOTOS REALES de cada lugar en Temuco
const detalleBackup = {
  "1": {
    id: "1",
    nombre: "Sendero Cerro Ñielol",
    dificultad: "Moderada",
    distancia: "2.5 km",
    tiempoEstimado: "1h 30min",
    descripcion: "Caminata entre bosque nativo con vista panorámica a Temuco y senderos rodeados de flora silvestre. Ideal para observar la biodiversidad de la Araucanía y conectarse con la naturaleza a minutos del centro de la ciudad.",
    ubicacion: "Monumento Natural Cerro Ñielol, Temuco",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Cerro_%C3%91ielol_Temuco.jpg/1280px-Cerro_%C3%91ielol_Temuco.jpg"
  },
  "2": {
    id: "2",
    nombre: "Museo Regional de La Araucanía",
    dificultad: "Fácil",
    distancia: "1.0 km",
    tiempoEstimado: "1-2 hrs",
    descripcion: "Exhibición de historia cultural, artefactos ancestrales y patrimonio regional de La Araucanía. Recorrido apto para toda la familia con guías locales e historia viva de la zona.",
    ubicacion: "Av. Alemania 0842, Temuco",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Museo_Regional_de_la_Araucan%C3%ADa_01.jpg/1280px-Museo_Regional_de_la_Araucan%C3%ADa_01.jpg"
  },
  "3": {
    id: "3",
    nombre: "Feria Agroecológica",
    dificultad: "Muy fácil",
    distancia: "0.5 km",
    tiempoEstimado: "45 min",
    descripcion: "Encuentro de productores locales con frutas, verduras orgánicas y artesanía regional sustentable. Una experiencia ideal para degustar productos frescos directos del campo a la ciudad.",
    ubicacion: "Plaza Aníbal Pinto, Temuco",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Plaza_Anibal_Pinto_Temuco_Chile.jpg/1280px-Plaza_Anibal_Pinto_Temuco_Chile.jpg"
  }
};

// Obtener el ID dinámico de la URL (?id=1, ?id=2, ?id=3)
function obtenerIdURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

async function cargarFicha() {
  const idURL = obtenerIdURL() || "1";
  let actividad = null;

  // 1. Consultar API si existe
  try {
    const res = await fetch(`${API_URL}/${idURL}`);
    if (res.ok) {
      actividad = await res.json();
    }
  } catch (e) {
    console.log("Usando datos de respaldo con fotos reales");
  }

  // 2. Si no hay datos de la API o viene sin nombre, usar respaldo por ID exacta
  if (!actividad || !actividad.nombre) {
    actividad = detalleBackup[idURL] || detalleBackup["1"];
  }

  // Asegurar siempre la foto real del lugar
  if (detalleBackup[idURL]) {
    actividad.imagen = detalleBackup[idURL].imagen;
  }

  // Contenedor principal de renderizado
  const contenedor = document.querySelector(".actividad-detalle") || 
                     document.querySelector("main") || 
                     document.body;

  if (contenedor) {
    contenedor.innerHTML = `
      <section style="max-width: 800px; margin: 2rem auto; padding: 2rem; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); font-family: system-ui, -apple-system, sans-serif;">
        <a href="../index.html" style="display: inline-flex; align-items: center; gap: 0.4rem; text-decoration: none; color: #2e7d32; font-weight: 600; font-size: 1rem; margin-bottom: 1rem; padding: 0.4rem 0.8rem; background: #f4f9f4; border-radius: 6px;">
          ← Volver al catálogo
        </a>
        
        <h1 style="color: #1b5e20; font-size: 2rem; margin: 0.8rem 0; font-weight: 700;">${actividad.nombre}</h1>
        
        <img src="${actividad.imagen}" alt="${actividad.nombre}" style="width: 100%; max-height: 400px; object-fit: cover; border-radius: 10px; margin: 1rem 0; display: block;" />

        <div style="background: #f4f9f4; padding: 1.25rem; border-radius: 8px; margin: 1.5rem 0; border-left: 5px solid #2e7d32; display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.8rem;">
          <p style="margin: 0; color: #333;"><strong>Dificultad:</strong> <span style="color: #2e7d32;">${actividad.dificultad || 'Moderada'}</span></p>
          <p style="margin: 0; color: #333;"><strong>Duración:</strong> ${actividad.duracion || actividad.tiempoEstimado || '1h 30min'}</p>
          ${actividad.distancia ? `<p style="margin: 0; color: #333;"><strong>Distancia:</strong> ${actividad.distancia}</p>` : ''}
          <p style="margin: 0; color: #333; grid-column: 1 / -1;"><strong>Ubicación:</strong> 📍 ${actividad.ubicacion || 'Temuco'}</p>
        </div>

        <h3 style="color: #2e7d32; margin-top: 1.5rem; font-size: 1.25rem; border-bottom: 2px solid #e8f5e9; padding-bottom: 0.5rem;">Descripción de la Experiencia</h3>
        <p style="color: #444; line-height: 1.7; font-size: 1.05rem; margin-top: 0.8rem;">${actividad.descripcion || 'Disfruta de esta experiencia turística sustentable en la región.'}</p>
      </section>
    `;
  }
}

document.addEventListener("DOMContentLoaded", cargarFicha);
