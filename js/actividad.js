// Objeto de respaldo con las actividades (1 a 5)
const detalleBackup = {
  "1": {
    id: "1",
    nombre: "Sendero Ñielol",
    categoria: "Naturaleza",
    ubicacion: "Parque Nacional Cerro Ñielol, Temuco",
    descripcion: "Hermoso sendero natural rodeado de flora y fauna nativa de la Región de La Araucanía. Ideal para caminatas familiares y observación de aves.",
    imagenes: [
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Sendero/Sendero_Nielol.jpg",
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Sendero/Sendero2.jpg",
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Sendero/Sendero3.jpg"
    ],
    detalles: {
      duracion: "1 hr 30 min",
      dificultad: "Moderada",
      distancia: "2.5 km",
      desnivel: "+120 m",
      accesibilidad: "Apto para personas con movilidad reducida en tramos iniciales.",
      horarios: "Martes a Domingo: 08:30 - 17:30 hrs",
      contacto: {
        telefono: "+56 45 229 8210",
        email: "contacto@nielol.cl",
        web: "https://www.conaf.cl"
      }
    },
    mapaIframe: '<iframe src="https://www.google.com/maps/d/embed?mid=1vX88s9-9Zg6-x4Z-58xZ-58xZ-58" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
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
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Museo/museo.jpg",
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Museo/museo2.jpg",
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Museo/museo3.jpg"
    ],
    detalles: {
      duracion: "1 hr",
      dificultad: "Baja",
      distancia: "N/A",
      accesibilidad: "Rampas y ascensores totalmente habilitados.",
      horarios: "Martes a Viernes: 09:30 - 17:30 hrs",
      contacto: {
        telefono: "+56 45 274 0577",
        email: "museo.araucania@museospatrimonio.gob.cl",
        web: "https://www.museoregionalaraucania.gob.cl"
      }
    },
    mapaIframe: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3112.55!2d-72.60!3d-38.74" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  },
  "3": {
    id: "3",
    nombre: "Feria Agroecológica",
    categoria: "Gastronomía",
    ubicacion: "Plaza Aníbal Pinto, Temuco",
    descripcion: "Encuentro de hortaliceras y productores locales que ofrecen alimentos orgánicos, mermeladas artesanales y hierbas medicinales.",
    imagenes: [
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Feria/feria.jpg",
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Feria/feria2.jpg",
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Feria/feria3.jpg"
    ],
    detalles: {
      duracion: "45 min",
      dificultad: "Baja",
      distancia: "N/A",
      accesibilidad: "Acceso a nivel de calle totalmente accesible.",
      horarios: "Viernes: 09:00 - 14:00 hrs",
      contacto: {
        telefono: "+56 9 1234 5678",
        email: "contacto@feriaagroecologica.cl",
        web: "https://www.temuco.cl"
      }
    }
  },
  "4": {
    id: "4",
    nombre: "Parque Isla Cautín",
    categoria: "Naturaleza",
    ubicacion: "Av. Los Poetas, Temuco",
    descripcion: "Gran pulmón verde urbano a orillas del Río Cautín con ciclovías, plazas de juegos, zonas de picnic y áreas de conservación vegetal.",
    imagenes: [
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Isla_Cautin/Isla1.jpg",
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Isla_Cautin/Isla2.jpg",
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Isla_Cautin/Isla3.jpg",
      "https://raw.githubusercontent.com/camilqqq/Nexus-Ecoruta/main/assets/imagenes/Isla_Cautin/Isla4.jpg"
    ],
    detalles: {
      duracion: "2 hrs",
      dificultad: "Baja",
      distancia: "3.0 km",
      accesibilidad: "Rutas pavimentadas y baños adaptados.",
      horarios: "Lunes a Domingo: 08:30 - 20:00 hrs",
      contacto: {
        telefono: "+56 45 297 3000",
        email: "parqueislacautin@temuco.cl",
        web: "https://www.temuco.cl"
      }
    }
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
      duracion: "Día completo (4 a 6 horas de recorrido)",
      dificultad: "Moderada",
      distancia: "Según sendero (Sierra Nevada: 10 km / Los Carpinteros: 6 km)",
      desnivel: "+450 m (Sendero Sierra Nevada)",
      accesibilidad: "Sendero inclusivo adaptado en sector Laguna Captrén y Centro de Visitantes.",
      horarios: "Ingreso: 08:30 a 14:00 hrs. Salida obligatoria: hasta las 18:00 hrs. (Lunes cerrado por mantenimiento).",
      contacto: {
        telefono: "+56 45 229 8210",
        email: "parque.conguillio@conaf.cl",
        web: "https://www.aspticket.cl"
      }
    },
    tarifas: [
      { tipo: "Niños/as (hasta 11 años) y Adulto Mayor (+60 años)", precio: "Gratis" },
      { tipo: "Jóvenes chilenos (12 a 17 años)", precio: "$2.700" },
      { tipo: "Adulto chileno (18 a 59 años)", precio: "$4.700" },
      { tipo: "Jóvenes extranjeros (12 a 17 años)", precio: "$4.700" },
      { tipo: "Adulto extranjero / Senior extranjero", precio: "$9.300" }
    ],
    mapaIframe: '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1J9507tFzl7qB0ZLBeSsNB4FFUjDWfGk&ehbc=2E312F" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    itinerario: [
      { hora: "08:30", actividad: "Ingreso por Caseta de Control CONAF (Sector Captrén o Truful-Truful) y control de entradas ASPTicket." },
      { hora: "09:30", actividad: "Caminata por Sendero Sierra Nevada o Los Carpinteros entre araucarias milenarias." },
      { hora: "12:30", actividad: "Mirador Laguna Conguillío y avistamiento del Volcán Llaima." },
      { hora: "14:00", actividad: "Almuerzo/Picnic en áreas habilitadas (Sector Playa Linda)." },
      { hora: "16:00", actividad: "Visita al Centro de Información Ambiental y Sendero Inclusivo Captrén." },
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

  let actividad = null;

  try {
    const respuesta = await fetch(`https://6724eb29c39fedae05b33100.mockapi.io/api/v1/rutas/${id}`);
    if (respuesta.ok) {
      actividad = await respuesta.json();
    } else {
      throw new Error("Respuesta no OK de la API");
    }
  } catch (error) {
    console.warn("Fallo en la API. Cargando desde el objeto de respaldo local...", error);
    actividad = detalleBackup[id] || detalleBackup["1"];
  }

  if (actividad) {
    const tieneMetricas = actividad.dificultad || actividad.tiempoEstimado || actividad.distancia || actividad.desnivel || actividad.detalles;

    contenedor.innerHTML = `
      <section style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
        <h1 style="color: #2e7d32; font-size: 2rem; margin-bottom: 0.5rem;">${actividad.nombre}</h1>
        <span style="background: #e8f5e9; color: #2e7d32; padding: 0.3rem 0.8rem; border-radius: 20px; font-size: 0.9rem; font-weight: bold;">
          ${actividad.categoria}
        </span>

        <!-- Galería / Carrusel -->
        <div style="margin-top: 1.5rem;">
          <img id="imagen-principal" src="${actividad.imagenes[0]}" alt="${actividad.nombre}" style="width: 100%; height: 400px; object-fit: cover; border-radius: 8px;" />
          
          <div style="display: flex; gap: 0.5rem; margin-top: 0.8rem; overflow-x: auto;">
            ${actividad.imagenes.map(img => `
              <img src="${img}" alt="Miniatura" onclick="cambiarImagen('${img}')" style="width: 80px; height: 60px; object-fit: cover; border-radius: 4px; cursor: pointer; border: 2px solid #ddd;" />
            `).join('')}
          </div>
        </div>

        <!-- Métricas / Resumen -->
        ${tieneMetricas ? `
          <div style="background: #f4f9f4; padding: 1.25rem; border-radius: 8px; margin: 1.5rem 0; border-left: 5px solid #2e7d32; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.8rem;">
            ${actividad.detalles?.dificultad ? `<p style="margin: 0;"><strong>Dificultad:</strong> <span style="color: #2e7d32;">${actividad.detalles.dificultad}</span></p>` : ''}
            ${actividad.detalles?.duracion ? `<p style="margin: 0;"><strong>Duración:</strong> ${actividad.detalles.duracion}</p>` : ''}
            ${actividad.detalles?.distancia ? `<p style="margin: 0;"><strong>Distancia:</strong> ${actividad.detalles.distancia}</p>` : ''}
            ${actividad.detalles?.desnivel ? `<p style="margin: 0;"><strong>Desnivel:</strong> ${actividad.detalles.desnivel}</p>` : ''}
            <p style="margin: 0; grid-column: 1 / -1;"><strong>Ubicación:</strong> 📍 ${actividad.ubicacion}</p>
          </div>
        ` : ''}

        <!-- Descripción y Contenido -->
        <div style="line-height: 1.6; font-size: 1.05rem; margin-top: 1.5rem;">
          <p style="margin-bottom: 1.5rem; color: #444;">${actividad.descripcion || ''}</p>

          ${actividad.detalles?.horarios ? `
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem; color: #111;">Horarios de atención</h3>
            <p style="margin-bottom: 1.5rem; color: #333;">${actividad.detalles.horarios}</p>
          ` : ''}

          ${actividad.detalles?.accesibilidad ? `
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem; color: #111;">Accesibilidad</h3>
            <p style="margin-bottom: 1.5rem; color: #333;">${actividad.detalles.accesibilidad}</p>
          ` : ''}

          <!-- Tarifas de acceso -->
          ${actividad.tarifas && actividad.tarifas.length > 0 ? `
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem; color: #111;">Tarifas de acceso</h3>
            <ul style="margin-top: 0.4rem; margin-bottom: 1.5rem; padding-left: 1.5rem; color: #333;">
              ${actividad.tarifas.map(t => `<li style="margin-bottom: 0.4rem;"><strong>${t.tipo}:</strong> ${t.precio}</li>`).join('')}
            </ul>
          ` : ''}

          <!-- Itinerario -->
          ${actividad.itinerario && actividad.itinerario.length > 0 ? `
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem; color: #111;">Itinerario sugerido</h3>
            <ul style="margin-top: 0.4rem; margin-bottom: 1.5rem; padding-left: 1.5rem; color: #333;">
              ${actividad.itinerario.map(it => `<li style="margin-bottom: 0.4rem;"><strong>${it.hora}:</strong> ${it.actividad}</li>`).join('')}
            </ul>
          ` : ''}
        </div>

        <!-- Mapa interactivo -->
        ${actividad.mapaIframe ? `
          <h3 style="color: #2e7d32; margin-top: 2rem; font-size: 1.25rem; border-bottom: 2px solid #e8f5e9; padding-bottom: 0.5rem;">Ruta y Mapa GPS</h3>
          <div style="width: 100%; height: 450px; border-radius: 10px; overflow: hidden; margin-top: 1rem; border: 1px solid #e0e0e0;">
            ${actividad.mapaIframe}
          </div>
        ` : ''}
      </section>
    `;
  }
}

window.cambiarImagen = cambiarImagen;
document.addEventListener("DOMContentLoaded", cargarFicha);
