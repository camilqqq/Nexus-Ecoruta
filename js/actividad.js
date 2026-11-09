// Endpoint de la API de rutas
const API_URL = "https://6724eb29c39fedae05b33100.mockapi.io/api/v1/rutas";

// Base de datos de respaldo completa (con imágenes y todos los atributos)
const rutasBase = [
  {
    id: "1",
    slug: "sendero",
    nombre: "Sendero Cerro Ñielol",
    categoria: "Naturaleza",
    dificultad: "Moderada",
    distancia: "2.5 km",
    tiempoEstimado: "1h 30min",
    ubicacion: "Monumento Natural Cerro Ñielol, Temuco",
    descripcion: "Caminata entre bosque nativo valdiviano con vista panorámica a Temuco y senderos rodeados de flora y fauna silvestre.",
    imagen: "https://images.unsplash.com/photo-1596328546171-77e37b5f28b0?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "2",
    slug: "museo",
    nombre: "Museo Regional de La Araucanía",
    categoria: "Cultura",
    dificultad: "Fácil",
    distancia: "1.0 km",
    tiempoEstimado: "1-2 hrs",
    ubicacion: "Av. Alemania 0842, Temuco",
    descripcion: "Exposición histórica y patrimonial que rescata la memoria cultural del pueblo Mapuche y la historia regional de La Araucanía.",
    imagen: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: "3",
    slug: "feria",
    nombre: "Feria Agroecológica y Mercado",
    categoria: "Gastronomía",
    dificultad: "Muy fácil",
    distancia: "1.0 km",
    tiempoEstimado: "45 min",
    ubicacion: "Plaza Aníbal Pinto, Temuco",
    descripcion: "Muestra de hortalizas, productos orgánicos locales y artesanía tradicional atendida por emprendedores y productores locales.",
    imagen: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=1000&auto=format&fit=crop"
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
      console.warn("API inaccesible, utilizando datos locales de respaldo:", error);
    }
  }

  // 2. Fallback local si la API no encuentra la ruta o da 404
  if (!actividad) {
    actividad = rutasBase.find(r => r.id === idParam || r.slug === idParam) || rutasBase[0];
  }

  // 3. Renderizar la ficha técnica completa
  contenedor.innerHTML = `
    <article style="background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.08); margin-bottom: 2rem;">
      
      <img src="${actividad.imagen || 'https://images.unsplash.com/photo-1596328546171-77e37b5f28b0?q=80&w=1000&auto=format&fit=crop'}" 
           alt="${actividad.nombre}" 
           style="width: 100%; height: 360px; object-fit: cover; display: block;" />

      <div style="padding: 2rem;">
        <span style="background: #e8f5e9; color: #2e7d32; padding: 4px 12px; border-radius: 20px; font-weight: bold; font-size: 0.85rem; text-transform: uppercase;">
          ${actividad.categoria || 'Turismo Local'}
        </span>

        <h1 style="color: #1b4332; font-size: 2rem; margin: 0.8rem 0 1.2rem 0;">${actividad.nombre}</h1>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1rem; background: #f8f9fa; padding: 1.2rem; border-radius: 8px; border-left: 4px solid #2e7d32; margin-bottom: 1.8rem;">
          <div><strong style="color: #555; font-size: 0.9rem;">Dificultad</strong><br><span style="color: #222; font-weight: 600;">${actividad.dificultad || 'Fácil'}</span></div>
          <div><strong style="color: #555; font-size: 0.9rem;">Distancia</strong><br><span style="color: #222; font-weight: 600;">${actividad.distancia || '2.5 km'}</span></div>
          <div><strong style="color: #555; font-size: 0.9rem;">Duración</strong><br><span style="color: #222; font-weight: 600;">${actividad.tiempoEstimado || actividad.duracion || '1h 30min'}</span></div>
          <div><strong style="color: #555; font-size: 0.9rem;">Ubicación</strong><br><span style="color: #222; font-weight: 600;">📍 ${actividad.ubicacion || 'Temuco'}</span></div>
        </div>

        <h3 style="color: #1b4332; margin-bottom: 0.5rem; font-size: 1.3rem;">Descripción de la Experiencia</h3>
        <p style="color: #4a5568; line-height: 1.7; font-size: 1.05rem; margin: 0;">
          ${actividad.descripcion}
        </p>
      </div>
    </article>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  cargarDetalleActividad();
});
