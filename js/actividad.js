const API_URL = "https://6724eb29c39fedae05b33100.mockapi.io/api/v1/rutas";

const detalleBackup = {
  "1": {
    id: "1",
    nombre: "Sendero Cerro Ñielol",
    dificultad: "Moderada",
    distancia: "1.85 km (Total senderos)",
    desnivel: "+180 m",
    tiempoEstimado: "1 a 1.5 h",
    descripcion: "Caminata por senderos principales (Agua Santa, Despierta Tus Sentidos, Laguna Huepil, Los Copihues y Los Lingues) rodeados de bosque nativo con vista panorámica a Temuco. Altitud máxima ~330 m s.n.m. (Mirador Principal).",
    ubicacion: "Monumento Natural Cerro Ñielol, Temuco",
    mapaWikiloc: "https://www.google.com/maps/d/u/0/embed?mid=1_V34G2jycQVduIN1hsLN_wdnFvSbsqs&ehbc=2E312F",
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
    tarifa: "Entrada liberada / Gratuita",
    horario: "Mar a Vie: 09:30 a 17:00 hrs | Sáb y Dom: 10:00 a 17:00 hrs",
    descripcion: "Emblemático espacio patrimonial ubicado en la histórica Casona Thiers. Recorrido que incluye la Galería Principal de Historia Regional, la Sala de Arqueología y Cosmovisión Mapuche, y el Jardín Botánico Palacio Thiers. Tipo de ruta: Recorrido guiado / Salón y parque urbano.",
    ubicacion: "Av. Alemania 0842, Temuco",
    mapaWikiloc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.12345!2d-72.6025!3d-38.7368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d3e6d8a3b1a1%3A0x123456789abcdef!2sMuseo%20Regional%20de%20La%20Araucan%C3%ADa!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl",
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
    tarifa: "Acceso libre y gratuito para todo espectador",
    horario: "Lunes a domingo de 08:00 a 19:00 hrs.",
    descripcion: "Descubre un espacio lleno de sabores, colores y tradiciones de La Araucanía. Encuentra productos frescos de la tierra, hortalizas locales, alimentos orgánicos y artesanías con identidad regional, ofrecidos directamente por pequeños productores y emprendedores de la zona. Incluye el Paseo de Productores Agroecológicos, Sector Muestra de Artesanía en Madera y Llama, y el Patio de Comidas Tradicionales. Tipo de ruta: Paseo peatonal urbano.",
    ubicacion: "Plaza Aníbal Pinto / Mercado, Temuco",
    mapaWikiloc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.5!2d-72.5900!3d-38.7400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d3e000000000%3A0x0!2sFeria%20Pinto!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl",
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
    mapaWikiloc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.9!2d-72.5950!3d-38.7480!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614d3f000000000%3A0x0!2sParque%20Isla%20Caut%C3%ADn!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl",
    imagenes: [
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Isla_Cautin/Isla1.jpg",
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Isla_Cautin/Isla2.jpg",
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Isla_Cautin/Isla3.jpg",
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Isla_Cautin/Isla4.jpg"
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

  let actividad = detalleBackup[idURL];
  if (!actividad) {
    actividad = detalleBackup["1"];
  }

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
        
        <!-- Carrusel de imágenes -->
        <div style="position: relative; width: 100%; max-height: 420px; border-radius: 10px; overflow: hidden; margin: 1rem 0; background: #000;">
          <img id="img-carrusel" src="${listaImagenesGlobal[0]}" alt="${actividad.nombre}" style="width: 100%; height: 420px; object-fit: cover; display: block;" />
          <button onclick="cambiarImagen(-1)" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.6); color: white; border: none; padding: 0.8rem 1.1rem; border-radius: 50%; cursor: pointer; font-size: 1.2rem; font-weight: bold;">❮</button>
          <button onclick="cambiarImagen(1)" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.6); color: white; border: none; padding: 0.8rem 1.1rem; border-radius: 50%; cursor: pointer; font-size: 1.2rem; font-weight: bold;">❯</button>
          <span id="contador-carrusel" style="position: absolute; bottom: 12px; right: 15px; background: rgba(0,0,0,0.7); color: white; padding: 0.3rem 0.7rem; border-radius: 12px; font-size: 0.85rem;">
            1 / ${listaImagenesGlobal.length}
          </span>
        </div>

        <!-- Ficha de datos dinámicos -->
        <div style="background: #f4f9f4; padding: 1.25rem; border-radius: 8px; margin: 1.5rem 0; border-left: 5px solid #2e7d32; display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.8rem;">
          ${actividad.dificultad ? `<p style="margin: 0; color: #333;"><strong>Dificultad:</strong> <span style="color: #2e7d32;">${actividad.dificultad}</span></p>` : ''}
          ${actividad.tiempoEstimado ? `<p style="margin: 0; color: #333;"><strong>Duración:</strong> ${actividad.tiempoEstimado}</p>` : ''}
          ${actividad.distancia ? `<p style="margin: 0; color: #333;"><strong>Distancia:</strong> ${actividad.distancia}</p>` : ''}
          ${actividad.desnivel ? `<p style="margin: 0; color: #333;"><strong>Desnivel:</strong> ${actividad.desnivel}</p>` : ''}
          ${actividad.tarifa ? `<p style="margin: 0; color: #333; grid-column: 1 / -1;"><strong>Entrada:</strong> <span style="color: #2e7d32; font-weight: 600;">${actividad.tarifa}</span></p>` : ''}
          ${actividad.horario ? `<p style="margin: 0; color: #333; grid-column: 1 / -1;"><strong>Horario:</strong> ${actividad.horario}</p>` : ''}
          <p style="margin: 0; color: #333; grid-column: 1 / -1;"><strong>Ubicación:</strong> 📍 ${actividad.ubicacion}</p>
        </div>

        <h3 style="color: #2e7d32; margin-top: 1.5rem; font-size: 1.25rem; border-bottom: 2px solid #e8f5e9; padding-bottom: 0.5rem;">Descripción de la Experiencia</h3>
        <p style="color: #444; line-height: 1.7; font-size: 1.05rem; margin-top: 0.8rem;">${actividad.descripcion}</p>

        ${actividad.mapaWikiloc ? `
          <h3 style="color: #2e7d32; margin-top: 1.8rem; font-size: 1.25rem; border-bottom: 2px solid #e8f5e9; padding-bottom: 0.5rem;">Ruta y Mapa GPS</h3>
          <div style="width: 100%; height: 380px; border-radius: 10px; overflow: hidden; margin-top: 1rem; border: 1px solid #e0e0e0;">
            <iframe src="${actividad.mapaWikiloc}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
        ` : ''}
      </section>
    `;
  }
}

window.cambiarImagen = cambiarImagen;
document.addEventListener("DOMContentLoaded", cargarFicha);
