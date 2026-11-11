const API_URL = "https://6724eb29c39fedae05b33100.mockapi.io/api/v1/rutas";

// Curaduría de datos de las fichas
const detalleBackup = {
  "1": {
    id: "1",
    nombre: "Sendero Cerro Ñielol",
    dificultad: "Moderada",
    distancia: "6.2 km",
    desnivel: "62 m a 204 m",
    tiempoEstimado: "1 a 1.5 h",
    descripcion: "Caminata por sendero principal rodeado de bosque nativo con vista panorámica a la ciudad de Temuco. Ideal para el avistamiento de flora y fauna silvestre de la Araucanía.",
    ubicacion: "Monumento Natural Cerro Ñielol, Temuco",
    mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12451.350325178652!2d-72.5938!3d-38.7302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d3e8e2d44933%3A0x6b3b27b9982420f8!2sMonumento%20Natural%20Cerro%20%C3%91ielol!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl",
    imagenes: [
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Sendero/Sendero_Nielol.jpg",
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Sendero/sendero2.jpg",
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Sendero/sendero3.jpg",
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Sendero/sendero4.jpg"
    ]
  },
  "2": {
    id: "2",
    nombre: "Museo Regional de La Araucanía",
    // Dificultad y Duración eliminadas según indicación
    distancia: "1.0 km",
    descripcion: "Emblemático espacio patrimonial ubicado en la histórica Casona Thiers. Ofrece exposiciones sobre la historia prehispánica, patrimonio e historia de la región de La Araucanía.",
    ubicacion: "Av. Alemania 0842, Temuco",
    mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.12345!2d-72.6025!3d-38.7368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d3e6d8a3b1a1%3A0x123456789abcdef!2sMuseo%20Regional%20de%20La%20Araucan%C3%ADa!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl",
    imagenes: [
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Museo/museo.jpg",
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Museo/museo2.jpg",
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Museo/museo3.jpg",
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Museo/museo4.jpg"
    ]
  },
  "3": {
    id: "3",
    nombre: "Feria Pinto",
    // Dificultad y Duración eliminadas según indicación
    descripcion: "Punto de encuentro de productores y agricultores locales en Temuco. Ofrece hortalizas frescas, productos orgánicos, gastronomía típica y artesanías locales de la Araucanía.",
    ubicacion: "Plaza Aníbal Pinto / Mercado, Temuco",
    mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.5!2d-72.5900!3d-38.7400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d3e000000000%3A0x0!2sFeria%20Pinto!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl",
    imagenes: [
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Feria/feria.jpg",
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Feria/feria2.jpg",
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Feria/feria3.jpg",
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Feria/feria4.jpg"
    ]
  },
  "4": {
    id: "4",
    nombre: "Parque Isla Cautín",
    dificultad: "Fácil",
    distancia: "3.5 km",
    tiempoEstimado: "1 a 2 h",
    descripcion: "Gran parque urbano a orillas del río Cautín. Cuenta con amplias áreas verdes, plazas temáticas, juegos infantiles, ciclovías y espacios ideales para el esparcimiento familiar y la conexión con la naturaleza.",
    ubicacion: "Av. los Poetas, Temuco",
    mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.9!2d-72.5950!3d-38.7480!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d3f000000000%3A0x0!2sParque%20Isla%20Caut%C3%ADn!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl",
    imagenes: [
      "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=1000&auto=format&fit=crop"
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
  let idURL = obtenerIdURL();
  let actividad = detalleBackup[idURL] || detalleBackup["1"];
  listaImagenesGlobal = actividad.imagenes || [];
  indiceImagenActual = 0;

  const contenedor = document.querySelector(".actividad-detalle") || document.querySelector("main") || document.body;

  if (contenedor) {
    contenedor.innerHTML = `
      <section style="max-width: 800px; margin: 2rem auto; padding: 2rem; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); font-family: system-ui, -apple-system, sans-serif;">
        <a href="../index.html" style="display: inline-flex; align-items: center; gap: 0.4rem; text-decoration: none; color: #2e7d32; font-weight: 600; font-size: 1rem; margin-bottom: 1rem; padding: 0.4rem 0.8rem; background: #f4f9f4; border-radius: 6px;">
          ← Volver al catálogo
        </a>
        
        <h1 style="color: #1b5e20; font-size: 2rem; margin: 0.8rem 0; font-weight: 700;">${actividad.nombre}</h1>
        
        <div style="position: relative; width: 100%; max-height: 420px; border-radius: 10px; overflow: hidden; margin: 1rem 0; background: #000;">
          <img id="img-carrusel" src="${listaImagenesGlobal[0]}" alt="${actividad.nombre}" style="width: 100%; height: 420px; object-fit: cover; display: block;" />
          <button onclick="cambiarImagen(-1)" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.6); color: white; border: none; padding: 0.8rem 1.1rem; border-radius: 50%; cursor: pointer; font-size: 1.2rem; font-weight: bold;">❮</button>
          <button onclick="cambiarImagen(1)" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.6); color: white; border: none; padding: 0.8rem 1.1rem; border-radius: 50%; cursor: pointer; font-size: 1.2rem; font-weight: bold;">❯</button>
          <span id="contador-carrusel" style="position: absolute; bottom: 12px; right: 15px; background: rgba(0,0,0,0.7); color: white; padding: 0.3rem 0.7rem; border-radius: 12px; font-size: 0.85rem;">
            1 / ${listaImagenesGlobal.length}
          </span>
        </div>

        <div style="background: #f4f9f4; padding: 1.25rem; border-radius: 8px; margin: 1.5rem 0; border-left: 5px solid #2e7d32; display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.8rem;">
          ${actividad.dificultad ? `<p style="margin: 0; color: #333;"><strong>Dificultad:</strong> <span style="color: #2e7d32;">${actividad.dificultad}</span></p>` : ''}
          ${actividad.tiempoEstimado ? `<p style="margin: 0; color: #333;"><strong>Duración:</strong> ${actividad.tiempoEstimado}</p>` : ''}
          ${actividad.distancia ? `<p style="margin: 0; color: #333;"><strong>Distancia:</strong> ${actividad.distancia}</p>` : ''}
          ${actividad.desnivel ? `<p style="margin: 0; color: #333;"><strong>Desnivel:</strong> ${actividad.desnivel}</p>` : ''}
          <p style="margin: 0; color: #333; grid-column: 1 / -1;"><strong>Ubicación:</strong> 📍 ${actividad.ubicacion}</p>
        </div>

        <h3 style="color: #2e7d32; margin-top: 1.5rem; font-size: 1.25rem; border-bottom: 2px solid #e8f5e9; padding-bottom: 0.5rem;">Descripción de la Experiencia</h3>
        <p style="color: #444; line-height: 1.7; font-size: 1.05rem; margin-top: 0.8rem;">${actividad.descripcion}</p>

        ${actividad.mapaUrl ? `
          <h3 style="color: #2e7d32; margin-top: 1.8rem; font-size: 1.25rem; border-bottom: 2px solid #e8f5e9; padding-bottom: 0.5rem;">Mapa del Recorrido</h3>
          <div style="width: 100%; height: 300px; border-radius: 10px; overflow: hidden; margin-top: 1rem; border: 1px solid #e0e0e0;">
            <iframe src="${actividad.mapaUrl}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
        ` : ''}
      </section>
    `;
  }
}

window.cambiarImagen = cambiarImagen;
document.addEventListener("DOMContentLoaded", cargarFicha);
