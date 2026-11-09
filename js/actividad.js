// Endpoint de la API de rutas
const API_URL = "https://6724eb29c39fedae05b33100.mockapi.io/api/v1/rutas";

// Datos de respaldo local con imágenes y detalles completos
const rutasBase = [
  {
    id: "1",
    nombre: "Sendero Cerro Ñielol",
    dificultad: "Fácil",
    distancia: "2.5 km",
    tiempoEstimado: "1h 30min",
    descripcion: "Caminata entre bosque nativo con vista panorámica a Temuco y senderos rodeados de flora silvestre.",
    ubicacion: "Monumento Natural Cerro Ñielol",
    imagen: "https://images.unsplash.com/photo-1596328546171-77e37b5f28b0?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "2",
    nombre: "Ruta Eco-Etnia Ruka Mapuche",
    dificultad: "Moderada",
    distancia: "5.0 km",
    tiempoEstimado: "2h 45min",
    descripcion: "Recorrido cultural y gastronómico por rukas y senderos locales aprendiendo de la cosmovisión Mapuche.",
    ubicacion: "Padre Las Casas",
    imagen: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "3",
    nombre: "Feria Agroecológica y Mercado",
    dificultad: "Fácil",
    distancia: "1.0 km",
    tiempoEstimado: "1h 00min",
    descripcion: "Muestra de productos locales, hortalizas orgánicas y artesanía tradicional atendida por productores locales.",
    ubicacion: "Plaza Aníbal Pinto",
    imagen: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&w=800&auto=format&fit=crop"
  }
];

async function cargarDetalleActividad() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const contenedor = document.getElementById("contenedor-rutas") || document.querySelector("main");

  if (!contenedor) return;

  let actividad = null;

  try {
    const respuesta = await fetch(`${API_URL}/${id}`);
    if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
    actividad = await respuesta.json();
  } catch (error) {
    console.warn("Cargando datos de respaldo local:", error);
    actividad = rutasBase.find(r => r.id === id) || rutasBase[0];
  }

  if (actividad) {
    contenedor.innerHTML = `
      <section style="max-width: 800px; margin: 2rem auto; padding: 1.5rem; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
        <a href="../index.html" style="text-decoration: none; color: #4e7d32; font-weight: bold;">← Volver al inicio</a>
        <h1 style="color: #2c7d32; margin-top: 1rem;">${actividad.nombre}</h1>
        
        ${actividad.imagen ? `<img src="${actividad.imagen}" alt="${actividad.nombre}" style="width: 100%; max-height: 400px; object-fit: cover; border-radius: 8px; margin: 1rem 0;">` : ''}

        <div style="background: #f4f9f4; padding: 1.2rem; border-radius: 6px; margin: 1rem 0;">
          <p style="margin: 0.4rem 0;"><strong>Dificultad:</strong> ${actividad.dificultad || 'Fácil'}</p>
          <p style="margin: 0.4rem 0;"><strong>Distancia:</strong> ${actividad.distancia || '2.5 km'}</p>
          <p style="margin: 0.4rem 0;"><strong>Duración estimada:</strong> ${actividad.tiempoEstimado || '1h 30min'}</p>
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
