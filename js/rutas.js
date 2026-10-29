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
