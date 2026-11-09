// Endpoint de la API de rutas
const API_URL = "https://6724eb29c39fedae05b33100.mockapi.io/api/v1/rutas";

// Base de datos de respaldo con las 3 actividades exactas del inicio
const rutasBase = [
  {
    id: "1",
    slug: "sendero",
    nombre: "Sendero Ñielol",
    categoria: "Naturaleza",
    dificultad: "Moderada",
    distancia: "2.5 km",
    tiempoEstimado: "1h 30min",
    descripcion: "Caminata entre bosque nativo con vista panorámica a Temuco y senderos rodeados de flora silvestre.",
    ubicacion: "Monumento Natural Cerro Ñielol, Temuco",
    imagen: "https://images.unsplash.com/photo-1596328546171-77e37b5f28b0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "2",
    slug: "museo",
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
    id: "3",
    slug: "feria",
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

  let actividad = null;

  // 1. Intentar fetch a la API
  if (idParam) {
    try {
      const respuesta = await fetch(`${API_URL}/${idParam}`);
      if (respuesta.ok) {
        actividad = await respuesta.json();
      }
    } catch (error) {
      console.warn("API inaccesible, usando datos de respaldo local:", error);
    }
  }

  // 2. Búsqueda precisa en respaldo por ID o Slug sin forzar al id=1
  const respaldo = rutasBase.find(r => 
    String(r.id) === String(idParam) || 
    r.slug === idParam || 
    (idParam && r.nombre.toLowerCase().includes(idParam.toLowerCase()))
  ) || (idParam === "2" ? rutasBase[1] : idParam === "3" ? rutasBase[2] : rutasBase[0]);

  if (!actividad) {
    actividad = respaldo;
  }

  const imagenFinal = (actividad.imagen && actividad.imagen.startsWith("http")) 
    ? actividad.imagen 
    : respaldo.imagen;

  // 3. Renderizar la ficha con los datos de la ruta correspondiente
  contenedor.innerHTML = `
    <div style="background: #ffffff; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.06);">
      
      <h1 style="color: #2e7d32; margin-top: 0; margin-bottom: 1rem; font-size: 1.8rem;">
        ${actividad.nombre || respaldo.nombre}
      </h1>
      
      <img src="${imagenFinal}" 
           alt="${actividad.nombre || 'Ruta'}" 
           onerror="this.onerror=null; this.src='${respaldo.imagen}';"
           style="width: 100%; height: 320px; object-fit: cover; border-radius: 8px; margin-bottom: 1.5rem; display: block; background: #e0e0e0;" />

      <div style="background: #f4f9f4; padding: 1.2rem; border-radius: 8px; margin-bottom: 1.5rem;">
        <p style="margin: 0.4rem 0; font-size: 1rem;"><strong>Dificultad:</strong> ${actividad.dificultad || respaldo.dificultad}</p>
        <p style="margin: 0.4rem 0; font-size: 1rem;"><strong>Distancia:</strong> ${actividad.distancia || respaldo.distancia}</p>
        <p style="margin: 0.4rem 0; font-size: 1rem;"><strong>Duración estimada:</strong> ${actividad.tiempoEstimado || actividad.duracion || respaldo.tiempoEstimado}</p>
        <p style="margin: 0.4rem 0; font-size: 1rem;"><strong>Ubicación:</strong> 📍 ${actividad.ubicacion || respaldo.ubicacion}</p>
      </div>

      <h3 style="color: #333333; margin-top: 1.5rem; margin-bottom: 0.5rem; font-size: 1.2rem;">Descripción de la Experiencia</h3>
      <p style="color: #555555; line-height: 1.6; font-size: 1rem; margin: 0;">
        ${actividad.descripcion || respaldo.descripcion}
      </p>

    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  cargarDetalleActividad();
});