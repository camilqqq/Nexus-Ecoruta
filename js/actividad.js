const API_URL = "https://6724eb29c39fedae05b33100.mockapi.io/api/v1/rutas";

// Base de datos local usando TUS IMÁGENES de la carpeta assets/imagenes
const detalleBackup = {
  "1": {
    id: "1",
    nombre: "Sendero Cerro Ñielol",
    dificultad: "Moderada",
    distancia: "2.5 km",
    tiempoEstimado: "1h 30min",
    descripcion: "Caminata entre bosque nativo con vista panorámica a Temuco y senderos rodeados de flora silvestre. Ideal para observar la biodiversidad de la Araucanía y conectarse con la naturaleza a minutos del centro de la ciudad.",
    ubicacion: "Monumento Natural Cerro Ñielol, Temuco",
    imagenes: [
      "../assets/imagenes/Sendero/Sendero_Nielol.jpg",
      "../assets/imagenes/Sendero/sendero2.jpg",
      "../assets/imagenes/Sendero/sendero3.jpg",
      "../assets/imagenes/Sendero/sendero4.jpg"
    ]
  },
  "2": {
    id: "2",
    nombre: "Museo Regional de La Araucanía",
    dificultad: "Fácil",
    distancia: "1.0 km",
    tiempoEstimado: "1-2 hrs",
    descripcion: "Exhibición de historia cultural, artefactos ancestrales y patrimonio regional de La Araucanía. Recorrido apto para toda la familia con guías locales e historia viva de la zona.",
    ubicacion: "Av. Alemania 0842, Temuco",
    imagenes: [
      "../assets/imagenes/Museo/museo.jpg",
      "../assets/imagenes/Museo/museo2.jpg",
      "../assets/imagenes/Museo/museo3.jpg",
      "../assets/imagenes/Museo/museo4.jpg"
    ]
  },
  "3": {
    id: "3",
    nombre: "Feria Agroecológica",
    dificultad: "Muy fácil",
    distancia: "0.5 km",
    tiempoEstimado: "45 min",
    descripcion: "Encuentro de productores locales con frutas, verduras orgánicas y artesanía regional sustentable. Una experiencia ideal para degustar productos frescos directos del campo a la ciudad.",
    ubicacion: "Plaza Aníbal Pinto, Temuco",
    imagenes: [
      "../assets/imagenes/Feria/feria.jpg",
      "../assets/imagenes/Feria/feria2.jpg",
      "../assets/imagenes/Feria/feria3.jpg",
      "../assets/imagenes/Feria/feria4.jpg"
    ]
  }
};

let indiceImagenActual = 0;
let listaImagenesGlobal = [];

function obtenerIdURL() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return id ? String(id).trim() : "1";
}

function cambiarImagen(direccion) {
  if (!listaImagenesGlobal || listaImagenesGlobal.length === 0) return;
  
  indiceImagenActual += direccion;
  if (indiceImagenActual >= listaImagenesGlobal.length) indiceImagenActual = 0;
  if (indiceImagenActual < 0) indiceImagenActual = listaImagenesGlobal.length - 1;

  const imgElem = document.getElementById("img-carrusel");
  const contadorElem = document.getElementById("contador-carrusel");
  
  if (imgElem) imgElem.src = listaImagenesGlobal[indiceImagenActual];
  if (contadorElem) contadorElem.textContent = `${indiceImagenActual + 1} / ${listaImagenesGlobal.length}`;
}

async function cargarFicha() {
  const idURL = obtenerIdURL();
  
  // Seleccionar la actividad correcta por ID
  let actividad = detalleBackup[idURL] || detalleBackup["1"];
  listaImagenesGlobal = actividad.imagenes || [];
  indiceImagenActual = 0;

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
        
        <!-- Carrusel con tus imágenes de la carpeta assets -->
        <div style="position: relative; width: 100%; max-height: 420px; border-radius: 10px; overflow: hidden; margin: 1rem 0; background: #000;">
          <img id="img-carrusel" src="${listaImagenesGlobal[0]}" alt="${actividad.nombre}" style="width: 100%; height: 420px; object-fit: cover; display: block;" />
          
          <button onclick="cambiarImagen(-1)" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.6); color: white; border: none; padding: 0.8rem 1.1rem; border-radius: 50%; cursor: pointer; font-size: 1.2rem; font-weight: bold;">❮</button>
          <button onclick="cambiarImagen(1)" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.6); color: white; border: none; padding: 0.8rem 1.1rem; border-radius: 50%; cursor: pointer; font-size: 1.2rem; font-weight: bold;">❯</button>
          
          <span id="contador-carrusel" style="position: absolute; bottom: 12px; right: 15px; background: rgba(0,0,0,0.7); color: white; padding: 0.3rem 0.7rem; border-radius: 12px; font-size: 0.85rem;">
            1 / ${listaImagenesGlobal.length}
          </span>
        </div>

        <div style="background: #f4f9f4; padding: 1.25rem; border-radius: 8px; margin: 1.5rem 0; border-left: 5px solid #2e7d32; display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.8rem;">
          <p style="margin: 0; color: #333;"><strong>Dificultad:</strong> <span style="color: #2e7d32;">${actividad.dificultad}</span></p>
          <p style="margin: 0; color: #333;"><strong>Duración:</strong> ${actividad.tiempoEstimado}</p>
          <p style="margin: 0; color: #333;"><strong>Distancia:</strong> ${actividad.distancia}</p>
          <p style="margin: 0; color: #333; grid-column: 1 / -1;"><strong>Ubicación:</strong> 📍 ${actividad.ubicacion}</p>
        </div>

        <h3 style="color: #2e7d32; margin-top: 1.5rem; font-size: 1.25rem; border-bottom: 2px solid #e8f5e9; padding-bottom: 0.5rem;">Descripción de la Experiencia</h3>
        <p style="color: #444; line-height: 1.7; font-size: 1.05rem; margin-top: 0.8rem;">${actividad.descripcion}</p>
      </section>
    `;
  }
}

// Hacer la función accesible globalmente para las flechas
window.cambiarImagen = cambiarImagen;

document.addEventListener("DOMContentLoaded", cargarFicha);
