// Endpoint de la API de rutas
const API_URL = "https://6724eb29c39fedae05b33100.mockapi.io/api/v1/rutas";

// Base de datos de respaldo con URLs de imagen comprobadas
const rutasBase = [
  {
    id: "1",
    nombre: "Sendero Cerro Ñielol",
    dificultad: "Fácil",
    distancia: "2.5 km",
    tiempoEstimado: "1h 30min",
    descripcion: "Caminata entre bosque nativo con vista panorámica a Temuco y senderos rodeados de flora silvestre.",
    ubicacion: "Monumento Natural Cerro Ñielol",
    imagen: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "2",
    nombre: "Ruta Eco-Etnia Ruka Mapuche",
    dificultad: "Moderada",
    distancia: "5.0 km",
    tiempoEstimado: "2h 45min",
    descripcion: "Recorrido cultural y gastronómico por rukas y senderos locales aprendiendo de la cosmovisión Mapuche.",
    ubicacion: "Padre Las Casas",
    imagen: "https://images.unsplash.com/photo-1511497584788-8767611136f6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "3",
    nombre: "Feria Agroecológica y Mercado",
    dificultad: "Fácil",
    distancia: "1.0 km",
    tiempoEstimado: "1h 00min",
    descripcion: "Muestra de productos locales, hortalizas orgánicas y artesanía tradicional atendida por productores locales.",
    ubicacion: "Plaza Aníbal Pinto",
    imagen: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80"
  }
];

async function cargarDetalleActividad() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const contenedor = document.getElementById("contenedor-rutas");

  if (!contenedor) return;

  let actividad = null;

  // 1. Consultar MockAPI
  try {
    const respuesta = await fetch(`${API_URL}/${id}`);
    if (respuesta.ok) {
      actividad = await respuesta.json();
    }
  } catch (error) {
    console.warn("API inaccesible, usando datos de respaldo local:", error);
  }

  // 2. Fallback a datos locales si la API falla o devuelve 404
  const respaldo = rutasBase.find(r => r.id === id) || rutasBase[0];
  if (!actividad) {
    actividad = respaldo;
  }

  // Determinar la imagen a usar
  const imagenFinal = (actividad.imagen && actividad.imagen.startsWith("http")) 
    ? actividad.imagen 
    : respaldo.imagen;

  // 3. Inyectar únicamente la ficha técnica dentro del contenedor
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