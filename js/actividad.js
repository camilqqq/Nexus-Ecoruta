// Endpoint de la API de rutas
const API_URL = "https://6724eb29c39fedae05b33100.mockapi.io/api/v1/rutas";

// Base de datos de respaldo asociando los distintos IDs enviados por la API/index
const rutasBase = [
  {
    ids: ["1", "sendero"],
    nombre: "Sendero Ñielol",
    categoria: "Naturaleza",
    dificultad: "Moderada",
    distancia: "2.5 km",
    tiempoEstimado: "1h 30min",
    descripcion: "Caminata entre bosque nativo con vista panorámica a Temuco y senderos rodeados de flora silvestre.",
    ubicacion: "Monumento Natural Cerro Ñielol, Temuco",
    imagen: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80"
  },
  {
    ids: ["2", "4", "museo"], // Asocia el ID 4 generado por la API al Museo Regional
    nombre: "Museo Regional de La Araucanía",
    categoria: "Cultura",
    dificultad: "Fácil",
    distancia: "1.0 km",
    tiempoEstimado: "1-2 hrs",
    descripcion: "Exposición histórica y patrimonial que rescata la memoria cultural del pueblo Mapuche y la historia regional de La Araucanía.",
    ubicacion: "Av. Alemania 0842, Temuco",
    imagen: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&w=800&q=80"
  },
  {
    ids: ["3", "feria"],
    nombre: "Feria Agroecológica",
    categoria: "Gastronomía",
    dificultad: "Muy fácil",
    distancia: "1.0 km",
    tiempoEstimado: "45 min",
    descripcion: "Muestra de hortalizas, productos orgánicos locales y artesanía tradicional atendida por emprendedores locales.",
    ubicacion: "Plaza Aníbal Pinto, Temuco",
    imagen: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80"
  }
];

async function cargarDetalleActividad() {
  const params = new URLSearchParams(window.location.search);
  const idParam = params.get("id");
  const contenedor = document.getElementById("contenedor-rutas") || document.querySelector("main");

  if (!contenedor) return;

  let actividadAPI = null;

  // 1. Fetch a MockAPI
  if (idParam) {
    try {
      const respuesta = await fetch(`${API_URL}/${idParam}`);
      if (respuesta.ok) {
        actividadAPI = await respuesta.json();
      }
    } catch (error) {
      console.warn("API inaccesible, usando respaldo:", error);
    }
  }

  // 2. Coincidencia en datos locales por array de IDs o coincidencia de nombre
  let respaldo = rutasBase.find(r => 
    r.ids.includes(String(idParam)) || 
    (actividadAPI && actividadAPI.nombre && r.nombre.toLowerCase().includes(actividadAPI.nombre.toLowerCase()))
  );

  // Si idParam es 4 o contiene la palabra museo, fuerza la referencia al Museo Regional
  if (!respaldo && String(idParam) === "4") {
    respaldo = rutasBase[1];
  } else if (!respaldo) {
    respaldo = rutasBase[0];
  }

  const nombre = actividadAPI?.nombre || respaldo.nombre;
  const descripcion = actividadAPI?.descripcion || respaldo.descripcion;
  const ubicacion = actividadAPI?.ubicacion || respaldo.ubicacion;
  const dificultad = actividadAPI?.dificultad || respaldo.dificultad;
  const distancia = actividadAPI?.distancia || respaldo.distancia;
  const duracion = actividadAPI?.tiempoEstimado || actividadAPI?.duracion || respaldo.tiempoEstimado;
  
  const imagenFinal = (actividadAPI?.imagen && actividadAPI.imagen.startsWith("http")) 
    ? actividadAPI.imagen 
    : respaldo.imagen;

  // 3. Renderizar vista de detalle
  contenedor.innerHTML = `
    <div style="background: #ffffff; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
      
      <h1 style="color: #2e7d32; margin-top: 0; margin-bottom: 1rem; font-size: 1.8rem;">
        ${nombre}
      </h1>
      
      <img src="${imagenFinal}" 
           alt="${nombre}" 
           onerror="this.onerror=null; this.src='${respaldo.imagen}';"
           style="width: 100%; height: 320px; object-fit: cover; border-radius: 8px; margin-bottom: 1.5rem; display: block; background: #e0e0e0;" />

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