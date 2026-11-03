"use strict";

var rutasBase = [
  {
    id: 1,
    nombre: "Sendero Monumento Natural Cerro Ñielol",
    categoria: "Naturaleza",
    ubicacion: "Prat 01, Temuco",
    duracionMinutos: 90,
    dificultad: "Fácil",
    climaRecomendado: "Parcialmente Nublado / Soleado",
    descripcion: "Caminata por el bosque nativo dentro de Temuco.",
    personalizada: false
  }
];

function agregarRutaManual(listaActual, nombre, categoria, ubicacion, duracionMinutos, dificultad, descripcion) {
  var nuevaRuta = {
    id: Date.now(),
    nombre: nombre,
    categoria: categoria,
    ubicacion: ubicacion,
    duracionMinutos: duracionMinutos,
    dificultad: dificultad,
    climaRecomendado: "Variable",
    descripcion: descripcion,
    personalizada: true
  };
  return listaActual.concat([nuevaRuta]);
}

function formatearDetalleRuta(ruta) {
  var horas = Math.floor(ruta.duracionMinutos / 60);
  var minutos = ruta.duracionMinutos % 60;
  var tiempoTxt = horas > 0 ? horas + "h " + minutos + "m" : minutos + " min";
  return "📍 " + ruta.nombre + " (" + ruta.categoria + ") - Duración: " + tiempoTxt + " | Dificultad: " + ruta.dificultad;
}

"use strict";

var rutasBase = [
  {
    id: 1,
    nombre: "Sendero Monumento Natural Cerro Ñielol",
    categoria: "Naturaleza",
    ubicacion: "Prat 01, Temuco",
    duracionMinutos: 90,
    dificultad: "Fácil",
    climaRecomendado: "Parcialmente Nublado / Soleado",
    descripcion: "Caminata por el bosque nativo dentro de Temuco.",
    personalizada: false
  }
];

function agregarRutaManual(listaActual, nombre, categoria, ubicacion, duracionMinutos, dificultad, descripcion) {
  var nuevaRuta = {
    id: Date.now(),
    nombre: nombre,
    categoria: categoria,
    ubicacion: ubicacion,
    duracionMinutos: duracionMinutos,
    dificultad: dificultad,
    climaRecomendado: "Variable",
    descripcion: descripcion,
    personalizada: true
  };
  return listaActual.concat([nuevaRuta]);
}

function formatearDetalleRuta(ruta) {
  var horas = Math.floor(ruta.duracionMinutos / 60);
  var minutos = ruta.duracionMinutos % 60;
  var tiempoTxt = horas > 0 ? horas + "h " + minutos + "m" : minutos + " min";
  return "📍 " + ruta.nombre + " (" + ruta.categoria + ") - Duración: " + tiempoTxt + " | Dificultad: " + ruta.dificultad;
}

// =======================================================
// INTERACCIÓN DINÁMICA DE RUTAS EN EL DOM
// =======================================================
document.addEventListener('DOMContentLoaded', () => {
  const contenedorRutas = document.getElementById('contenedor-rutas');

  if (!contenedorRutas) return;

  const rutasEjemplo = [
    {
      id: "r1",
      nombre: "Ruta Senderos del Ñielol",
      dificultad: "Fácil",
      duracionMinutos: 90,
      categoria: "Naturaleza"
    },
    {
      id: "r2",
      nombre: "Ruta Ciclo-Eco Aníbal Pinto",
      dificultad: "Media",
      duracionMinutos: 45,
      categoria: "Cultura"
    }
  ];

  let htmlContenido = '<div style="display: grid; gap: 12px; margin-top: 15px;">';

  rutasEjemplo.forEach(ruta => {
    const detalle = typeof formatearDetalleRuta === 'function' 
      ? formatearDetalleRuta(ruta) 
      : `${ruta.nombre} (${ruta.duracionMinutos} min) - Dificultad: ${ruta.dificultad}`;

    htmlContenido += `
      <div style="background: #f8fafc; border-left: 4px solid #2e7d32; padding: 12px 16px; border-radius: 6px;">
        <h4 style="margin: 0 0 4px 0; color: #1a252f;">${ruta.nombre}</h4>
        <p style="margin: 0; font-size: 0.9rem; color: #475569;">${detalle}</p>
      </div>
    `;
  });

  htmlContenido += '</div>';
  contenedorRutas.innerHTML = htmlContenido;
});
