import { Actividad } from './types';

const API_URL = "https://6724eb29c39fedae05b33100.mockapi.io/api/v1/rutas";

// Base de datos local de respaldo tipada
const detalleBackup: Record<string, Actividad> = {
  "1": {
    id: "1",
    nombre: "Sendero Cerro Ñielol",
    dificultad: "Moderada",
    distancia: "1.85 km (Total senderos)",
    desnivel: "+180 m",
    tiempoEstimado: "1 a 1.5 h",
    introduccion: "Caminata por senderos principales rodeados de bosque nativo con vista panorámica a la ciudad de Temuco.",
    horarioAtencion: "Martes a domingo de 08:30 a 17:30 hrs (último ingreso a las 17:00 hrs)",
    sectores: [
      "Sendero Agua Santa: 648 m",
      "Sendero Despierta Tus Sentidos: 188 m (sendero inclusivo)",
      "Sendero Laguna Huepil: 194 m",
      "Sendero Los Copihues: 450 m",
      "Sendero Los Lingues: 370 m"
    ],
    tarifas: [
      "Adultos: $2.500 CLP",
      "Jóvenes: $2.000 CLP (13 a 17 años)",
      "Preferencial: Gratis (Niños 12 años o menos, adultos mayores 60 años o más y personas con discapacidad)"
    ],
    tipoTerreno: "Tierra, pasarelas de madera y escalones de piedra",
    tipoRuta: "Circular o Solo ida / Punto a punto",
    altitudMaxima: "~330 m s.n.m (Mirador Principal)",
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
    introduccion: "Emblemático espacio patrimonial ubicado en la histórica Casona Thiers. Ofrece exposiciones sobre la historia prehispánica, patrimonio e historia de la región de La Araucanía.",
    horarioAtencion: "Martes a viernes de 09:30 a 17:00 hrs. Sábados y domingos de 10:00 a 17:00 hrs.",
    sectores: [
      "Galería Principal de Historia Regional",
      "Sala de Arqueología y Cosmovisión Mapuche",
      "Jardín Botánico Palacio Thiers"
    ],
    tarifas: [
      "Público General: Entrada liberada / Gratuita",
      "Delegaciones Escolares: Gratuito previa reserva previa"
    ],
    tipoTerreno: "Piso cerámico, parqué y senderos adosados de piedra",
    tipoRuta: "Recorrido guiado / Salón y parque urbano",
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
    introduccion: "Descubre un espacio lleno de sabores, colores y tradiciones de La Araucanía. Encuentra productos frescos de la tierra, hortalizas locales, alimentos orgánicos y artesanías con identidad regional, ofrecidos directamente por pequeños productores y emprendedores de la zona. Una experiencia para disfrutar, conocer y valorar lo nuestro.",
    horarioAtencion: "Lunes a domingo de 08:00 a 19:00 hrs.",
    sectores: [
      "Paseo de Productores Agroecológicos",
      "Sector Muestra de Artesanía en Madera y Llama",
      "Patio de Comidas Tradicionales"
    ],
    tarifas: [
      "Acceso libre y gratuito para todo espectador"
    ],
    tipoTerreno: "Baldosa cívica, adoquines y pasajes techados",
    tipoRuta: "Paseo peatonal urbano",
    desnivel: "0 m",
    altitudMaxima: "~115 m s.n.m",
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
    introduccion: "Gran parque urbano a orillas del río Cautín. Cuenta con amplias áreas verdes, plazas temáticas, juegos infantiles, ciclovías y espacios ideales para el esparcimiento familiar y la conexión con la naturaleza.",
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

let indiceImagenActual: number = 0;
let listaImagenesGlobal: string[] = [];

function obtenerIdURL(): string {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return id ? String(id).trim() : "1";
}

export async function obtenerDatosActividad(id: string): Promise<Actividad> {
  try {
    const respuesta = await fetch(`${API_URL}/${id}`);
    if (!respuesta.ok) throw new Error("Error en la respuesta del servidor");
    const datosAPI: Actividad = await respuesta.json();
    return datosAPI;
  } catch (error) {
    console.warn("API no alcanzable. Usando respaldo local tipado.", error);
    return detalleBackup[id] || detalleBackup["1"];
  }
}

export function cambiarImagen(direccion: number): void {
  if (!listaImagenesGlobal || listaImagenesGlobal.length === 0) return;
  indiceImagenActual += direccion;
  if (indiceImagenActual >= listaImagenesGlobal.length) indiceImagenActual = 0;
  if (indiceImagenActual < 0) indiceImagenActual = listaImagenesGlobal.length - 1;

  const imgElem = document.getElementById("img-carrusel") as HTMLImageElement | null;
  const contadorElem = document.getElementById("contador-carrusel");
  if (imgElem) imgElem.src = listaImagenesGlobal[indiceImagenActual];
  if (contadorElem) contadorElem.textContent = `${indiceImagenActual + 1} / ${listaImagenesGlobal.length}`;
}

export async function cargarFicha(): Promise<void> {
  const idURL = obtenerIdURL();
  const actividad: Actividad = await obtenerDatosActividad(idURL);

  listaImagenesGlobal = actividad.imagenes || [];
  indiceImagenActual = 0;

  const contenedor = document.querySelector(".actividad-detalle") || document.querySelector("main") || document.body;

  if (contenedor) {
    const tieneMetricas = Boolean(actividad.dificultad || actividad.tiempoEstimado || actividad.distancia);

    contenedor.innerHTML = `
      <section style="max-width: 1100px; width: 92%; margin: 1.5rem auto; padding: 2rem; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.08); font-family: system-ui, -apple-system, sans-serif; color: #222;">
        
        <h1 style="color: #1b5e20; font-size: 2.2rem; margin: 0.5rem 0 1rem 0; font-weight: 700;">${actividad.nombre}</h1>
        
        <!-- Carrusel de imágenes -->
        <div style="position: relative; width: 100%; max-height: 480px; border-radius: 10px; overflow: hidden; margin: 1rem 0; background: #000;">
          <img id="img-carrusel" src="${listaImagenesGlobal[0]}" alt="${actividad.nombre}" width="1100" height="480" fetchpriority="high" style="width: 100%; height: 480px; object-fit: cover; display: block;" />
          <button onclick="cambiarImagen(-1)" style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.6); color: white; border: none; padding: 0.8rem 1.1rem; border-radius: 50%; cursor: pointer; font-size: 1.2rem; font-weight: bold;">❮</button>
          <button onclick="cambiarImagen(1)" style="position: absolute; right: 10px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.6); color: white; border: none; padding: 0.8rem 1.1rem; border-radius: 50%; cursor: pointer; font-size: 1.2rem; font-weight: bold;">❯</button>
          <span id="contador-carrusel" style="position: absolute; bottom: 12px; right: 15px; background: rgba(0,0,0,0.7); color: white; padding: 0.3rem 0.7rem; border-radius: 12px; font-size: 0.85rem;">
            1 / ${listaImagenesGlobal.length}
          </span>
        </div>

        ${tieneMetricas ? `
        <div style="background: #f4f9f4; padding: 1.25rem; border-radius: 8px; margin: 1.5rem 0; border-left: 5px solid #2e7d32; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.8rem;">
          ${actividad.dificultad ? `<p style="margin: 0;"><strong>Dificultad:</strong> <span style="color: #2e7d32;">${actividad.dificultad}</span></p>` : ''}
          ${actividad.tiempoEstimado ? `<p style="margin: 0;"><strong>Duración:</strong> ${actividad.tiempoEstimado}</p>` : ''}
          ${actividad.distancia ? `<p style="margin: 0;"><strong>Distancia:</strong> ${actividad.distancia}</p>` : ''}
          ${actividad.desnivel ? `<p style="margin: 0;"><strong>Desnivel:</strong> ${actividad.desnivel}</p>` : ''}
          <p style="margin: 0; grid-column: 1 / -1;"><strong>Ubicación:</strong> 📍 ${actividad.ubicacion}</p>
        </div>
        ` : ''}

        <div style="line-height: 1.6; font-size: 1.05rem; margin-top: 1.5rem;">
          ${actividad.introduccion ? `<p style="margin-bottom: 1.5rem; color: #444;">${actividad.introduccion}</p>` : ''}

          ${actividad.horarioAtencion ? `
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem; color: #111;">Horarios de atención</h3>
            <p style="margin-bottom: 1.5rem; color: #333;">${actividad.horarioAtencion}</p>
          ` : ''}

          ${actividad.sectores && actividad.sectores.length > 0 ? `
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem; color: #111;">Sectores y recorridos</h3>
            <ul style="margin-top: 0.4rem; margin-bottom: 1.5rem; padding-left: 1.5rem; color: #333;">
              ${actividad.sectores.map(s => `<li style="margin-bottom: 0.4rem;">${s}</li>`).join('')}
            </ul>
          ` : ''}

          ${actividad.tarifas && actividad.tarifas.length > 0 ? `
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem; color: #111;">Tarifas de acceso</h3>
            <ul style="margin-top: 0.4rem; margin-bottom: 1.5rem; padding-left: 1.5rem; color: #333;">
              ${actividad.tarifas.map(t => `<li style="margin-bottom: 0.4rem;">${t}</li>`).join('')}
            </ul>
          ` : ''}

          ${actividad.tipoTerreno ? `<p style="margin: 0.6rem 0; color: #333;"><strong>Tipo de terreno:</strong> ${actividad.tipoTerreno}</p>` : ''}
          ${actividad.tipoRuta ? `<p style="margin: 0.6rem 0; color: #333;"><strong>Tipo de ruta:</strong> ${actividad.tipoRuta}</p>` : ''}
          ${!tieneMetricas && actividad.desnivel ? `<p style="margin: 0.6rem 0; color: #333;"><strong>Desnivel:</strong> ${actividad.desnivel}</p>` : ''}
          ${actividad.altitudMaxima ? `<p style="margin: 0.6rem 0; color: #333;"><strong>Altitud máxima:</strong> ${actividad.altitudMaxima}</p>` : ''}
          
          ${!tieneMetricas && actividad.ubicacion ? `<p style="margin-top: 1.2rem; color: #333;"><strong>Ubicación:</strong> 📍 ${actividad.ubicacion}</p>` : ''}
        </div>

        ${actividad.mapaWikiloc ? `
          <h3 style="color: #2e7d32; margin-top: 2rem; font-size: 1.25rem; border-bottom: 2px solid #e8f5e9; padding-bottom: 0.5rem;">Ruta y Mapa GPS</h3>
          <div style="width: 100%; height: 420px; border-radius: 10px; overflow: hidden; margin-top: 1rem; border: 1px solid #e0e0e0;">
            <iframe src="${actividad.mapaWikiloc}" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
        ` : ''}
      </section>
    `;
  }
}

(window as any).cambiarImagen = cambiarImagen;
document.addEventListener("DOMContentLoaded", cargarFicha);
