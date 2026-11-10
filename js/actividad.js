// Archivo: js/actividad.js

const API_URL = "https://6724eb29c39fedae05b33100.mockapi.io/api/v1/rutas";

// Fotografías reales de los atractivos turísticos de Temuco
const DATOS_LOCALES = {
  "1": {
    nombre: "Sendero Ñielol",
    categoria: "Naturaleza",
    dificultad: "Moderada",
    distancia: "2.5 km",
    duracion: "1 hr 30 min",
    ubicacion: "Monumento Natural Cerro Ñielol, Temuco",
    descripcion: "Caminata guiada entre bosque nativo valdiviano con vista panorámica a la ciudad de Temuco y senderos rodeados de flora silvestre.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Cerro_%C3%91ielol_Temuco.jpg/800px-Cerro_%C3%91ielol_Temuco.jpg"
  },
  "2": {
    nombre: "Museo Regional de La Araucanía",
    categoria: "Cultura",
    dificultad: "Fácil",
    distancia: "1.0 km",
    duracion: "1-2 hrs",
    ubicacion: "Av. Alemania 0842, Temuco",
    descripcion: "Exposición histórica y patrimonial que rescata la memoria cultural del pueblo Mapuche y la historia regional en el edificio histórico Palacio Thiers.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Museo_Regional_de_la_Araucan%C3%ADa_01.jpg/800px-Museo_Regional_de_la_Araucan%C3%ADa_01.jpg"
  },
  "4": {
    nombre: "Museo Regional de La Araucanía",
    categoria: "Cultura",
    dificultad: "Fácil",
    distancia: "1.0 km",
    duracion: "1-2 hrs",
    ubicacion: "Av. Alemania 0842, Temuco",
    descripcion: "Exposición histórica y patrimonial que rescata la memoria cultural del pueblo Mapuche y la historia regional en el edificio histórico Palacio Thiers.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Museo_Regional_de_la_Araucan%C3%ADa_01.jpg/800px-Museo_Regional_de_la_Araucan%C3%ADa_01.jpg"
  },
  "3": {
    nombre: "Feria Agroecológica",
    categoria: "Gastronomía",
    dificultad: "Muy fácil",
    distancia: "1.0 km",
    duracion: "45 min",
    ubicacion: "Plaza Aníbal Pinto, Temuco",
    descripcion: "Muestra de hortalizas, productos orgánicos locales y artesanía tradicional atendida directamente por emprendedores locales de la zona.",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Plaza_Anibal_Pinto_Temuco.jpg/800px-Plaza_Anibal_Pinto_Temuco.jpg"
  }
};

async function cargarDetalleActividad() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "1";
  const contenedor = document.getElementById("contenedor-rutas") || document.querySelector("main");

  if (!contenedor) return;

  let datosAPI = null;

  try {
    const res = await fetch(`${API_URL}/${id}`);
    if (res.ok) {
      datosAPI = await res.json();
    }
  } catch (err) {
    console.warn("API inaccesible, usando respaldo local:", err);
  }

  const local = DATOS_LOCALES[id] || DATOS_LOCALES["1"];

  const nombre = (datosAPI && datosAPI.nombre) ? datosAPI.nombre : local.nombre;
  const dificultad = (datosAPI && datosAPI.dificultad) ? datosAPI.dificultad : local.dificultad;
  const distancia = (datosAPI && datosAPI.distancia) ? datosAPI.distancia : local.distancia;
  const duracion = (datosAPI && (datosAPI.duracion || datosAPI.tiempoEstimado)) ? (datosAPI.duracion || datosAPI.tiempoEstimado) : local.duracion;
  const ubicacion = (datosAPI && datosAPI.ubicacion) ? datosAPI.ubicacion : local.ubicacion;
  const descripcion = (datosAPI && datosAPI.descripcion) ? datosAPI.descripcion : local.descripcion;

  // Garantizar el uso de imágenes comprobadas si la API entrega un enlace roto o relativo
  const imagenSrc = (datosAPI && datosAPI.imagen && datosAPI.imagen.startsWith("http")) 
    ? datosAPI.imagen 
    : local.imagen;

  contenedor.innerHTML = `
    <div style="background: #ffffff; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
      
      <h1 style="color: #2e7d32; margin-top: 0; margin-bottom: 1rem; font-size: 1.8rem;">
        ${nombre}
      </h1>
      
      <div style="width: 100%; height: 360px; overflow: hidden; border-radius: 8px; margin-bottom: 1.5rem; background: #e2e8f0;">
        <img src="${imagenSrc}" 
             alt="${nombre}" 
             onerror="this.onerror=null; this.src='${local.imagen}';"
             style="width: 100%; height: 100%; object-fit: cover; display: block;" />
      </div>

      <div style="background: #f4f9f4; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <p style="margin: 0.4rem 0; font-size: 1rem;"><strong>Dificultad:</strong> ${dificultad}</p>
        <p style="margin: 0.4rem 0; font-size: 1rem;"><strong>Distancia:</strong> ${distancia}</p>
        <p style="margin: 0.4rem 0; font-size: 1rem;"><strong>Duración estimada:</strong> ${duracion}</p>
        <p style="margin: 0.4rem 0; font-size: 1rem;"><strong>Ubicación:</strong> 📍 ${ubicacion}</p>
      </div>

      <h3 style="color: #333333; margin-top: 1.5rem; margin-bottom: 0.5rem; font-size: 1.2rem;">Descripción de la Experiencia</h3>
      <p style="color: #555555; line-height: 1.6; font-size: 1rem; margin: 0;">
        ${descripcion}
      </p>

    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  cargarDetalleActividad();
});