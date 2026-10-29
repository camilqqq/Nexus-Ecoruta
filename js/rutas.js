"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rutasEcoRuta = void 0;
exports.agregarRutaPersonalizada = agregarRutaPersonalizada;
exports.obtenerRutasFiltradas = obtenerRutasFiltradas;

exports.rutasEcoRuta = [
  {
    id: 1,
    nombre: "Sendero Ñielol",
    categoria: "Naturaleza",
    ubicacion: "Parque Ñielol, Temuco",
    duracionMinutos: 90,
    dificultad: "Fácil",
    climaIdeal: "Soleado / Nublado",
    personalizada: false
  },
  {
    id: 2,
    nombre: "Museo Regional de La Araucanía",
    categoria: "Cultura",
    ubicacion: "Av. Alemania 084, Temuco",
    duracionMinutos: 120,
    dificultad: "Fácil",
    climaIdeal: "Cualquiera",
    personalizada: false
  }
];

function agregarRutaPersonalizada(lista, nombre, categoria, ubicacion, duracionMinutos, dificultad) {
  var nuevaRuta = {
    id: Date.now(),
    nombre: nombre,
    categoria: categoria,
    ubicacion: ubicacion,
    duracionMinutos: duracionMinutos,
    dificultad: dificultad,
    climaIdeal: "A elección",
    personalizada: true
  };
  return lista.concat([nuevaRuta]);
}

function obtenerRutasFiltradas(lista, categoria) {
  if (categoria.toLowerCase() === 'todas') return lista;
  if (categoria.toLowerCase() === 'personalizadas') return lista.filter(function (r) { return r.personalizada; });
  return lista.filter(function (r) { return r.categoria.toLowerCase() === categoria.toLowerCase(); });
}
