"use strict";

var rutasBase = [
  {
    id: 1,
    nombre: "Ruta Senderos Cerro Ñielol",
    categoria: "Naturaleza",
    tipoActividad: "trekking", // Identificador para mostrar datos de senderismo
    ubicacion: "Caseta de acceso CONAF (Calle Arturo Prat, Gral. Carrera 267), Temuco",
    duracionMinutos: 90,
    dificultad: "Moderada (apta para familias y niños)",
    tipoCircuito: "Circular o Solo ida / Punto a punto",
    terreno: "Tierra, pasarelas de madera y escalones de piedra",
    altitudMaxima: "~330 m s.n.m. (Mirador Principal)",
    distanciaKm: 4.2,
    desnivelPositivoM: 180,
    descripcion: "Caminata guiada por la selva valdiviana dentro del Monumento Natural Cerro Ñielol. Un recorrido rodeado de flora nativa, aves locales y vistas panorámicas de Temuco desde sus miradores.",
    elementosIncluidos: [
      "Sendero Agua Santa: 648 m",
      "Sendero Despierta Tus Sentidos: 188 m (sendero inclusivo)",
      "Sendero Laguna Huepil: 194 m",
      "Sendero Los Copihues: 450 m",
      "Sendero Los Lingues: 370 m"
    ],
    horarios: "Martes a domingo de 08:30 a 17:30 hrs (último ingreso a las 17:00 hrs)",
    tarifas: {
      adultos: "$2.500 CLP",
      jovenes: "$2.000 CLP (13 a 17 años)",
      preferencial: "Gratis (Niños 12 años o menos, adultos mayores 60 años o más y personas con discapacidad)"
    },
    requisitos: [
      "Reserva y compra previa de entradas en pases.parquesnacionales.cl",
      "Prohibido el ingreso con mascotas",
      "Prohibido fumar, encender fuego y dejar residuos en el parque",
      "Llevar zapatillas con buen agarre, botella de agua reutilizable y cortaviento"
    ]
  },
  {
    id: "4",
    nombre: "Museo Regional de La Araucanía",
    categoria: "Cultura",
    tipoActividad: "cultural", // Identificador para visitas culturales
    ubicacion: "Av. Alemania 084, Temuco",
    duracionMinutos: 90,
    dificultad: "Fácil",
    descripcion: "Espacio cultural enfocado en la historia, el patrimonio y las tradiciones de los pueblos originarios y la colonización de la Región de La Araucanía.",
    elementosIncluidos: [
      "Sala de exposición histórica regional",
      "Colección de platería mapuche",
      "Patio central y muestras temporales"
    ],
    horarios: "Martes a sábado de 10:00 a 17:00 hrs",
    tarifas: {
      adultos: "Entrada liberada / Gratuita",
      jovenes: "Entrada liberada / Gratuita",
      preferencial: "Entrada liberada para todo público"
    },
    requisitos: [
      "Respetar el silencio en las salas de exhibición",
      "Prohibido el uso de flash en las fotografías",
      "No ingresar con alimentos ni bebidas"
    ]
  },
  {
    id: "3",
    nombre: "Feria Agroecológica",
    categoria: "Gastronomía",
    tipoActividad: "mercado", // Identificador para ferias o mercados
    ubicacion: "Plaza Aníbal Pinto, Temuco",
    dificultad: "Muy fácil",
    descripcion: "Mercado local enfocado en la venta de productos agrícolas orgánicos, artesanías locales, plantas y gastronomía típica de productores de la zona.",
    elementosIncluidos: [
      "Puestos de verduras y frutas orgánicas",
      "Stands de artesanía en madera y greda",
      "Comida tradicional y repostería local"
    ],
    horarios: "Lunea a Domingo de 08:00 a 19:00 hrs.",
    tarifas: {
      adultos: "Acceso gratuito al recinto",
      jovenes: "Acceso gratuito al recinto",
      preferencial: "Acceso gratuito"
    },
    requisitos: [
      "Llevar bolsa reutilizable para compras",
      "Moneda local o efectivo sugerido para los puestos",
      "Respetar el distanciamiento en horarios de alta afluencia"
    ]
  }
];

function formatearDetalleRuta(ruta) {
  var duracionTxt = "";

  // Solo si tiene minutos asignados muestra el texto de duración
  if (ruta.duracionMinutos && ruta.duracionMinutos > 0) {
    var horas = Math.floor(ruta.duracionMinutos / 60);
    var minutos = ruta.duracionMinutos % 60;
    var tiempo = horas > 0 ? horas + "h " + minutos + "m" : minutos + " min";
    duracionTxt = " - Duración: " + tiempo;
  }

  var distanciaTxt = ruta.distanciaKm ? " | " + ruta.distanciaKm + " km" : "";

  return ruta.nombre + " (" + ruta.categoria + ")" + duracionTxt + " | Dificultad: " + ruta.dificultad + distanciaTxt;
}

// =======================================================
// INTERACCIÓN DINÁMICA SEGÚN EL TIPO DE ACTIVIDAD
// =======================================================
document.addEventListener('DOMContentLoaded', () => {
  const contenedorRutas = document.getElementById('contenedor-rutas');
  if (!contenedorRutas) return;

  const params = new URLSearchParams(window.location.search);
  const idRuta = params.get('id');

  let rutaAMostrar = rutasBase[0]; 
  if (idRuta) {
    const encontrada = rutasBase.find(r => r.id.toString() === idRuta.toString());
    if (encontrada) {
      rutaAMostrar = encontrada;
    }
  }

  const detalle = formatearDetalleRuta(rutaAMostrar);

  let htmlElementos = '';
  if (rutaAMostrar.elementosIncluidos && rutaAMostrar.elementosIncluidos.length > 0) {
    let tituloSeccion = rutaAMostrar.tipoActividad === 'trekking' ? "Senderos y atractivos del parque:" : "Zonas o espacios de la visita:";
    htmlElementos += '<h4 style="margin: 15px 0 5px 0; font-size: 1rem; color: #1e293b;">' + tituloSeccion + '</h4>';
    htmlElementos += '<ul style="margin: 5px 0 10px 20px; font-size: 0.9rem; color: #334155;">';
    rutaAMostrar.elementosIncluidos.forEach(el => {
      htmlElementos += '<li>' + el + '</li>';
    });
    htmlElementos += '</ul>';
  }

  let htmlRequisitos = '';
  if (rutaAMostrar.requisitos && rutaAMostrar.requisitos.length > 0) {
    htmlRequisitos = '<h4 style="margin: 15px 0 5px 0; font-size: 1rem; color: #1e293b;">Recomendaciones y requisitos:</h4>';
    htmlRequisitos += '<ul style="margin: 5px 0 10px 20px; font-size: 0.9rem; color: #334155;">';
    rutaAMostrar.requisitos.forEach(req => {
      htmlRequisitos += '<li>' + req + '</li>';
    });
    htmlRequisitos += '</ul>';
  }

  let htmlContenido = '<div style="background: #ffffff; border: 1px solid #e2e8f0; border-left: 5px solid #2e7d32; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">';
  htmlContenido += '<h3 style="margin: 0 0 8px 0; color: #1e293b;">' + rutaAMostrar.nombre + '</h3>';
  htmlContenido += '<p style="margin: 0 0 10px 0; font-weight: 500; color: #0f766e;">' + detalle + '</p>';
  htmlContenido += '<p style="margin: 0 0 10px 0; color: #475569; line-height: 1.5;">' + rutaAMostrar.descripcion + '</p>';

  // Solo si es trekking muestra la caja con datos técnicos de cerro
  if (rutaAMostrar.tipoActividad === 'trekking') {
    htmlContenido += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 10px; background: #f8fafc; padding: 12px; border-radius: 6px; margin-bottom: 12px; font-size: 0.9rem;">';
    htmlContenido += '<div><strong>Tipo de ruta:</strong> ' + rutaAMostrar.tipoCircuito + '</div>';
    htmlContenido += '<div><strong>Terreno:</strong> ' + rutaAMostrar.terreno + '</div>';
    htmlContenido += '<div><strong>Altitud máx.:</strong> ' + rutaAMostrar.altitudMaxima + '</div>';
    htmlContenido += '<div><strong>Desnivel:</strong> +' + rutaAMostrar.desnivelPositivoM + ' m</div>';
    htmlContenido += '<div><strong>Ubicación:</strong> ' + rutaAMostrar.ubicacion + '</div>';
    htmlContenido += '<div><strong>Horarios:</strong> ' + rutaAMostrar.horarios + '</div>';
    htmlContenido += '</div>';
  } else {
    // Si es museo o feria, muestra una caja más simple solo con ubicación y horarios
    htmlContenido += '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 10px; background: #f8fafc; padding: 12px; border-radius: 6px; margin-bottom: 12px; font-size: 0.9rem;">';
    htmlContenido += '<div><strong>Ubicación:</strong> ' + rutaAMostrar.ubicacion + '</div>';
    htmlContenido += '<div><strong>Horarios:</strong> ' + rutaAMostrar.horarios + '</div>';
    htmlContenido += '</div>';
  }

  htmlContenido += htmlElementos;

  if (rutaAMostrar.tarifas) {
    htmlContenido += '<h4 style="margin: 15px 0 5px 0; font-size: 1rem; color: #1e293b;">Tarifas y accesos:</h4>';
    htmlContenido += '<ul style="margin: 5px 0 10px 20px; font-size: 0.9rem; color: #334155;">';
    htmlContenido += '<li><strong>Adultos:</strong> ' + rutaAMostrar.tarifas.adultos + '</li>';
    htmlContenido += '<li><strong>Jóvenes:</strong> ' + rutaAMostrar.tarifas.jovenes + '</li>';
    htmlContenido += '<li><strong>Preferencial:</strong> ' + rutaAMostrar.tarifas.preferencial + '</li>';
    htmlContenido += '</ul>';
  }

  htmlContenido += htmlRequisitos;
  htmlContenido += '</div>';
  contenedorRutas.innerHTML = htmlContenido;
});