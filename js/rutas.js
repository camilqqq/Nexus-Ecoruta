const API_URL = "https://6724eb29c39fedae05b33100.mockapi.io/api/v1/rutas";

const rutasBackup = [
  {
    id: "1",
    nombre: "Sendero Ñielol",
    categoria: "Naturaleza",
    ubicacion: "Parque Ñielol, Temuco",
    duracion: "1 hr 30 min",
    dificultad: "Moderada",
    imagen: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=500"
  },
  {
    id: "2",
    nombre: "Museo Regional de La Araucanía",
    categoria: "Cultura",
    ubicacion: "Museo Regional de La Araucanía",
    duracion: "1-2 hrs",
    dificultad: "Fácil",
    imagen: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=500"
  },
  {
    id: "3",
    nombre: "Feria Agroecológica",
    categoria: "Gastronomía",
    ubicacion: "Plaza Aníbal Pinto",
    duracion: "45 min",
    dificultad: "Muy fácil",
    imagen: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=500"
  }
];

async function obtenerRutas() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Error API");
    const datos = await res.json();
    mostrarRutas(datos);
  } catch (err) {
    mostrarRutas(rutasBackup);
  }
}

function mostrarRutas(rutas) {
  const contenedor = document.getElementById("contenedor-api") || document.getElementById("contenedor-rutas");
  if (!contenedor) return;

  // Limpia el mensaje "Cargando información desde la API..."
  contenedor.innerHTML = "";

  rutas.forEach((ruta) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "ruta-card";
    tarjeta.innerHTML = `
      <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 1rem; margin-bottom: 1rem; background: #fff;">
        <h3>${ruta.nombre}</h3>
        <p><strong>Categoría:</strong> ${ruta.categoria || 'Naturaleza'} · <strong>Dificultad:</strong> ${ruta.dificultad}</p>
        <p>📍 ${ruta.ubicacion || 'Temuco'}</p>
        <a href="paginas/Actividad.html?id=${ruta.id}" style="display: inline-block; padding: 0.5rem 1rem; background: #2e7d32; color: white; text-decoration: none; border-radius: 4px;">Ver ficha</a>
      </div>
    `;
    contenedor.appendChild(tarjeta);
  });
}

document.addEventListener("DOMContentLoaded", obtenerRutas);
