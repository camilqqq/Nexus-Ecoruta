const API_URL = "https://6724eb29c39fedae05b33100.mockapi.io/api/v1/rutas";

// Datos de respaldo con imágenes correspondientes a cada lugar real
const detalleBackup = {
  "1": {
    nombre: "Sendero Cerro Ñielol",
    dificultad: "Moderada",
    distancia: "2.5 km",
    tiempoEstimado: "1h 30min",
    descripcion: "Caminata entre bosque nativo con vista panorámica a Temuco y senderos rodeados de flora silvestre. Ideal para observar la biodiversidad de la Araucanía y conectarse con la naturaleza a minutos del centro de la ciudad.",
    ubicacion: "Monumento Natural Cerro Ñielol, Temuco",
    imagen: "https://conaf.cl/wp-content/uploads/2022/03/MN-Cerro-Nielol.jpg"
  },
  "2": {
    nombre: "Museo Regional de La Araucanía",
    dificultad: "Fácil",
    distancia: "1.0 km",
    tiempoEstimado: "1-2 hrs",
    descripcion: "Exhibición de historia cultural, artefactos ancestrales y patrimonio regional de La Araucanía. Recorrido apto para toda la familia con guías locales e historia viva de la zona.",
    ubicacion: "Av. Alemania 0842, Temuco",
    imagen: "https://www.patrimoniocultural.gob.cl/sites/www.patrimoniocultural.gob.cl/files/styles/flexslider_full/public/2021-03/Museo%20Regional%20de%20la%20Araucan%C3%ADa.jpg"
  },
  "3": {
    nombre: "Feria Agroecológica",
    dificultad: "Muy fácil",
    distancia: "0.5 km",
    tiempoEstimado: "45 min",
    descripcion: "Encuentro de productores locales con frutas, verduras orgánicas y artesanía regional sustentable. Una experiencia ideal para degustar productos frescos directos del campo a la ciudad.",
    ubicacion: "Plaza Aníbal Pinto, Temuco",
    imagen: "https://www.temuco.cl/wp-content/uploads/2021/11/feria-agroecologica-temuco.jpg"
  }
};

function obtenerIdURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id") || "1";
}

async function cargarFicha() {
  const id = obtenerIdURL();
  let actividad = null;

  try {
    const res = await fetch(`${API_URL}/${id}`);
    if (res.ok) {
      actividad = await res.json();
    }
  } catch (e) {
    console.log("Usando datos de respaldo");
  }

  if (!actividad || !actividad.nombre) {
    actividad = detalleBackup[id] || detalleBackup["1"];
  }

  // Si la actividad tiene la imagen vieja o vacía, asegurar que muestre la imagen real
  if (detalleBackup[id] && (!actividad.imagen || actividad.imagen.includes("unsplash"))) {
    actividad.imagen = detalleBackup[id].imagen;
  }

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
        
        ${actividad.imagen ? `<img src="${actividad.imagen}" alt="${actividad.nombre}" style="width: 100%; max-height: 380px; object-fit: cover; border-radius: 10px; margin: 1rem 0;" />` : ''}

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
