const detalleBackup = {
  "1": {
    id: "1",
    nombre: "Sendero Ñielol",
    categoria: "Naturaleza",
    ubicacion: "Parque Nacional Cerro Ñielol, Temuco",
    descripcion: "Hermoso sendero natural rodeado de flora y fauna nativa de la Región de La Araucanía. Ideal para caminatas familiares y observación de aves.",
    imagenes: [
      "../assets/imagenes/Sendero/Sendero_Nielol.jpg",
      "../assets/imagenes/Sendero/sendero2.jpg",
      "../assets/imagenes/Sendero/sendero3.jpg",
      "../assets/imagenes/Sendero/sendero4.jpg"
    ],
    detalles: {
      duracion: "1 hr 30 min",
      dificultad: "Moderada",
      distancia: "2.5 km",
      desnivel: "+120 m",
      accesibilidad: "Apto para personas con movilidad reducida en tramos iniciales.",
      horarios: "Martes a Domingo: 08:30 - 17:30 hrs"
    },
    mapaIframe: '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1_V34G2jycQVduIN1hsLN_wdnFvSbsqs&ehbc=2E312F" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    itinerario: [
      { hora: "08:30", actividad: "Registro en portería e inicio de caminata." },
      { hora: "09:15", actividad: "Llegada al Mirador Agua Santa." },
      { hora: "10:00", actividad: "Retorno por el sendero los Patagua." }
    ]
  },
  "2": {
    id: "2",
    nombre: "Museo Regional de La Araucanía",
    categoria: "Cultura",
    ubicacion: "Av. Alemania 0842, Temuco",
    descripcion: "Espacio cultural que resguarda la historia, arqueología y etnografía de los pueblos originarios y la colonización en La Araucanía.",
    imagenes: [
      "../assets/imagenes/Museo/museo.jpg",
      "../assets/imagenes/Museo/museo2.jpg",
      "../assets/imagenes/Museo/museo3.jpg"
    ],
    detalles: {
      accesibilidad: "Rampas y ascensores totalmente habilitados.",
      horarios: "Martes a viernes de 09:30 a 17:30 hrs. Sábados y domingos de 10:00 a 17:00 hrs.",
      tipoTerreno: "Piso cerámico, parqué y senderos adosados de piedra",
      tipoRuta: "Recorrido guiado / Salón y parque urbano"
    },
    sectores: [
      "Galería Principal de Historia Regional",
      "Sala de Arqueología y Cosmovisión Mapuche",
      "Jardín Botánico Palacio Thiers"
    ],
    tarifas: [
      { tipo: "Público General", precio: "Entrada liberada / Gratuita" },
      { tipo: "Delegaciones Escolares", precio: "Gratuito previa reserva previa" }
    ],
    mapaIframe: '<iframe src="https://maps.google.com/maps?q=Museo+Regional+de+La+Araucania+Av+Alemania+0842+Temuco&t=&z=16&ie=UTF8&iwloc=&output=embed" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  },
  "3": {
    id: "3",
    nombre: "Feria Agroecológica",
    categoria: "Gastronomía",
    ubicacion: "Feria Pinto, Av. Balmaceda, Temuco",
    descripcion: "Descubre un espacio lleno de sabores, colores y tradiciones de La Araucanía. Encuentra productos frescos de la tierra, hortalizas locales, alimentos orgánicos y artesanías con identidad regional, ofrecidos directamente por pequeños productores y emprendedores de la zona. Una experiencia para disfrutar, conocer y valorar lo nuestro.",
    imagenes: [
      "../assets/imagenes/Feria/feria.jpg",
      "../assets/imagenes/Feria/feria2.jpg",
      "../assets/imagenes/Feria/feria3.jpg"
    ],
    detalles: {
      accesibilidad: "Acceso a nivel de calle totalmente accesible.",
      horarios: "Lunes a domingo de 08:00 a 19:00 hrs.",
      tipoTerreno: "Baldosa cívica, adoquines y pasajes techados",
      tipoRuta: "Paseo peatonal urbano",
      desnivelExtra: "0 m",
      altitudMaxima: "~115 m s.n.m"
    },
    sectores: [
      "Paseo de Productores Agroecológicos",
      "Sector Muestra de Artesanía en Madera y Llama",
      "Patio de Comidas Tradicionales"
    ],
    tarifas: [
      { tipo: "Acceso", precio: "Acceso libre y gratuito para todo espectador" }
    ],
    mapaIframe: '<iframe src="https://maps.google.com/maps?q=Feria+Pinto+Balmaceda+Temuco&t=&z=16&ie=UTF8&iwloc=&output=embed" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  },
  "4": {
    id: "4",
    nombre: "Parque Isla Cautín",
    categoria: "Naturaleza",
    ubicacion: "Av. Los Poetas, Temuco",
    descripcion: "Gran pulmón verde urbano a orillas del Río Cautín con ciclovías, plazas de juegos, zonas de picnic y áreas de conservación vegetal.",
    imagenes: [
      "../assets/imagenes/Isla_Cautin/Isla1.jpg",
      "../assets/imagenes/Isla_Cautin/Isla2.jpg",
      "../assets/imagenes/Isla_Cautin/Isla3.jpg",
      "../assets/imagenes/Isla_Cautin/Isla4.jpg"
    ],
    detalles: {
      duracion: "1-2 hrs",
      dificultad: "Fácil",
      distancia: "3.0 km",
      accesibilidad: "Rutas pavimentadas y baños adaptados.",
      horarios: "Lunes a Domingo: 08:30 - 20:00 hrs"
    },
    mapaIframe: '<iframe src="https://maps.google.com/maps?q=Parque+Isla+Cautin+Temuco&t=&z=15&ie=UTF8&iwloc=&output=embed" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  },
  "5": {
    id: "5",
    nombre: "Parque Nacional Conguillío",
    categoria: "Naturaleza",
    ubicacion: "Melipeuco / Curacautín, Región de La Araucanía",
    descripcion: "Reconocido mundialmente por sus bosques milenarios de araucarias, lagunas cordilleranas y la imponente presencia del Volcán Llaima. Un imperdible del turismo sustentable en La Araucanía.",
    imagenes: [
      "../assets/imagenes/Conguillio/Conguillio1.jpg",
      "../assets/imagenes/Conguillio/Conguillio2.jpg",
      "../assets/imagenes/Conguillio/Conguillio3.jpg",
      "../assets/imagenes/Conguillio/Conguillio4.jpg"
    ],
    detalles: {
      duracion: "Día completo",
      dificultad: "Moderada",
      distancia: "10 km (Sendero Sierra Nevada)",
      desnivel: "+450 m",
      accesibilidad: "Sendero inclusivo adaptado en sector Laguna Captrén.",
      horarios: "Ingreso: 08:30 a 14:00 hrs. Salida: hasta las 18:00 hrs."
    },
    tarifas: [
      { tipo: "Niños/as (-11 años) y Adulto Mayor (+60 años)", precio: "Gratis" },
      { tipo: "Jóvenes chilenos (12 a 17 años)", precio: "$2.700" },
      { tipo: "Adulto chileno (18 a 59 años)", precio: "$4.700" },
      { tipo: "Extranjeros", precio: "$9.300" }
    ],
    mapaIframe: '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1J9507tFzl7qB0ZLBeSsNB4FFUjDWfGk&ehbc=2E312F" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    itinerario: [
      { hora: "08:30", actividad: "Ingreso por Caseta de Control CONAF." },
      { hora: "09:30", actividad: "Caminata por Sendero Sierra Nevada entre araucarias." },
      { hora: "12:30", actividad: "Mirador Laguna Conguillío y Volcán Llaima." },
      { hora: "14:00", actividad: "Almuerzo en área habilitada." },
      { hora: "17:30", actividad: "Retorno y salida del parque." }
    ]
  }
};

function obtenerParametroUrl(nombre) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nombre);
}

function cambiarImagen(src) {
  const imgPrincipal = document.getElementById("imagen-principal");
  if (imgPrincipal) {
    imgPrincipal.src = src;
  }
}

async function cargarFicha() {
  const id = obtenerParametroUrl("id") || "1";
  const contenedor = document.getElementById("detalle-actividad");

  if (!contenedor) return;

  const actividad = detalleBackup[id] || detalleBackup["1"];

  contenedor.innerHTML = `
    <section style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
      <h1 style="color: #2e7d32; font-size: 2rem; margin-bottom: 0.5rem;">${actividad.nombre}</h1>
      <span style="background: #e8f5e9; color: #2e7d32; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.9rem; font-weight: bold; display: inline-block; margin-bottom: 1rem;">
        ${actividad.categoria}
      </span>

      <!-- Galería de imágenes -->
      <div>
        <img id="imagen-principal" src="${actividad.imagenes[0]}" alt="${actividad.nombre}" style="width: 100%; height: 400px; object-fit: cover; border-radius: 8px;" />
        <div style="display: flex; gap: 0.5rem; margin-top: 0.8rem; overflow-x: auto;">
          ${actividad.imagenes.map(img => `
            <img src="${img}" alt="Miniatura" onerror="this.style.display='none'" onclick="cambiarImagen('${img}')" style="width: 80px; height: 60px; object-fit: cover; border-radius: 4px; cursor: pointer; border: 2px solid #ddd;" />
          `).join('')}
        </div>
      </div>

      <!-- Cuadro de métricas -->
      <div style="background: #f4f9f4; padding: 1.25rem; border-radius: 8px; margin: 1.5rem 0; border-left: 5px solid #2e7d32; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.8rem;">
        ${actividad.detalles.dificultad ? `<p style="margin: 0;"><strong>Dificultad:</strong> <span style="color: #2e7d32;">${actividad.detalles.dificultad}</span></p>` : ''}
        ${actividad.detalles.duracion ? `<p style="margin: 0;"><strong>Duración:</strong> ${actividad.detalles.duracion}</p>` : ''}
        ${actividad.detalles.distancia ? `<p style="margin: 0;"><strong>Distancia:</strong> ${actividad.detalles.distancia}</p>` : ''}
        ${actividad.detalles.desnivel ? `<p style="margin: 0;"><strong>Desnivel:</strong> ${actividad.detalles.desnivel}</p>` : ''}
        <p style="margin: 0; grid-column: 1 / -1;"><strong>Ubicación:</strong> 📍 ${actividad.ubicacion}</p>
      </div>

      <!-- Información y detalles -->
      <div style="line-height: 1.6; font-size: 1.05rem; margin-top: 1.5rem;">
        <p style="margin-bottom: 1.5rem; color: #444;">${actividad.descripcion}</p>

        <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem; color: #111;">Horarios de atención</h3>
        <p style="margin-bottom: 1.5rem; color: #333;">${actividad.detalles.horarios}</p>

        ${actividad.sectores ? `
          <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem; color: #111;">Sectores y recorridos</h3>
          <ul style="margin-top: 0.4rem; margin-bottom: 1.5rem; padding-left: 1.5rem; color: #333;">
            ${actividad.sectores.map(s => `<li style="margin-bottom: 0.4rem;">${s}</li>`).join('')}
          </ul>
        ` : ''}

        ${actividad.tarifas ? `
          <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem; color: #111;">Tarifas de acceso</h3>
          <ul style="margin-top: 0.4rem; margin-bottom: 1.5rem; padding-left: 1.5rem; color: #333;">
            ${actividad.tarifas.map(t => `<li style="margin-bottom: 0.4rem;"><strong>${t.tipo}:</strong> ${t.precio}</li>`).join('')}
          </ul>
        ` : ''}

        ${actividad.detalles.tipoTerreno ? `
          <p style="margin-bottom: 0.8rem; color: #333;"><strong>Tipo de terreno:</strong> ${actividad.detalles.tipoTerreno}</p>
        ` : ''}

        ${actividad.detalles.tipoRuta ? `
          <p style="margin-bottom: 0.8rem; color: #333;"><strong>Tipo de ruta:</strong> ${actividad.detalles.tipoRuta}</p>
        ` : ''}

        ${actividad.detalles.desnivelExtra ? `
          <p style="margin-bottom: 0.8rem; color: #333;"><strong>Desnivel:</strong> ${actividad.detalles.desnivelExtra}</p>
        ` : ''}

        ${actividad.detalles.altitudMaxima ? `
          <p style="margin-bottom: 1.5rem; color: #333;"><strong>Altitud máxima:</strong> ${actividad.detalles.altitudMaxima}</p>
        ` : ''}

        <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem; color: #111;">Accesibilidad</h3>
        <p style="margin-bottom: 1.5rem; color: #333;">${actividad.detalles.accesibilidad}</p>

        ${actividad.itinerario ? `
          <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem; color: #111;">Itinerario sugerido</h3>
          <ul style="margin-top: 0.4rem; margin-bottom: 1.5rem; padding-left: 1.5rem; color: #333;">
            ${actividad.itinerario.map(it => `<li style="margin-bottom: 0.4rem;"><strong>${it.hora}:</strong> ${it.actividad}</li>`).join('')}
          </ul>
        ` : ''}
      </div>

      <!-- Mapa GPS -->
      ${actividad.mapaIframe ? `
        <h3 style="color: #2e7d32; margin-top: 2rem; font-size: 1.25rem; border-bottom: 2px solid #e8f5e9; padding-bottom: 0.5rem;">Ruta y Mapa GPS</h3>
        <div style="width: 100%; height: 450px; border-radius: 10px; overflow: hidden; margin-top: 1rem; border: 1px solid #e0e0e0;">
          ${actividad.mapaIframe}
        </div>
      ` : ''}
    </section>
  `;
}

window.cambiarImagen = cambiarImagen;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", cargarFicha);
} else {
  cargarFicha();
}
