// Endpoint de la API de rutas
const RUTAS_API_URL = "https://6724eb29c39fedae05b33100.mockapi.io/api/v1/rutas";

// Datos de respaldo local por si la API tarda o no responde
const rutasBase = [
  {
    id: "1",
    nombre: "Sendero Cerro Ñielol",
    dificultad: "Fácil",
    distancia: "2.5 km",
    tiempoEstimado: "1h 30min",
    descripcion: "Caminata entre bosque nativo con vista panorámica a Temuco y senderos rodeados de flora silvestre.",
    ubicacion: "Monumento Natural Cerro Ñielol"
  },
  {
    id: "2",
    nombre: "Ruta Eco-Etnia Ruka Mapuche",
    dificultad: "Media",
    distancia: "5.0 km",
    tiempoEstimado: "2h 45min",
    descripcion: "Recorrido cultural y gastronómico por rukas y senderos locales aprendiendo de la historia ancestral.",
    ubicacion: "Padre Las Casas"
  },
  {
    id: "3",
    nombre: "Feria Agroecológica y Mercado",
    dificultad: "Fácil",
    distancia: "1.0 km",
    tiempoEstimado: "1h 00min",
    descripcion: "Visita a emprendedores locales con productos agroecológicos y artesanías regionales.",
    ubicacion: "Centro de Temuco"
  }
];

// Función para obtener el ID desde la URL (?id=1)
function obtenerIdURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id") || "1";
}

async function cargarDetalleActividad() {
  const idURL = obtenerIdURL();
  
  // Busca la sección contenedora principal o el body
  const contenedor = document.querySelector(".actividad-detalle") || 
                     document.querySelector("main") || 
                     document.body;

  let rutas = [];
  try {
    const res = await fetch(RUTAS_API_URL);
    if (res.ok) {
      rutas = await res.json();
    } else {
      rutas = rutasBase;
    }
  } catch (e) {
    rutas = rutasBase;
  }

  // Buscar coincidencia por ID
  const actividad = rutas.find((r) => String(r.id) === String(idURL)) || 
                    rutasBase.find((r) => String(r.id) === String(idURL)) || 
                    rutasBase[0];

  if (actividad && contenedor) {
    contenedor.innerHTML = `
      <section style="max-width: 800px; margin: 2rem auto; padding: 1.5rem; background: #fff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); text-align: left;">
        <a href="../index.html" style="text-decoration: none; color: #2e7d32; font-weight: bold;">← Volver al inicio</a>
        <h1 style="color: #2e7d32; margin-top: 1rem;">${actividad.nombre}</h1>
        
        ${actividad.imagen ? `<img src="${actividad.imagen}" alt="${actividad.nombre}" style="width: 100%; max-height: 350px; object-fit: cover; border-radius: 6px; margin: 1rem 0;" />` : ''}

        <div style="background: #f4f9f4; padding: 1.2rem; border-radius: 6px; margin: 1rem 0; border-left: 4px solid #2e7d32;">
          <p style="margin: 0.4rem 0;"><strong>Dificultad:</strong> ${actividad.dificultad}</p>
          <p style="margin: 0.4rem 0;"><strong>Distancia:</strong> ${actividad.distancia}</p>
          <p style="margin: 0.4rem 0;"><strong>Duración estimada:</strong> ${actividad.tiempoEstimado}</p>
          ${actividad.ubicacion ? `<p style="margin: 0.4rem 0;"><strong>Ubicación:</strong> 📍 ${actividad.ubicacion}</p>` : ''}
        </div>

        <h3 style="color: #333; margin-top: 1.5rem;">Descripción de la Experiencia</h3>
        <p style="color: #555; line-height: 1.6; font-size: 1.05rem;">${actividad.descripcion}</p>
      </section>
    `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  cargarDetalleActividad();
});
