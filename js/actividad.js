const API_URL = "https://6724eb29c39fedae05b33100.mockapi.io/api/v1/rutas";

// Curaduría de datos actualizada
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
    tiempoEstimado: "1 a 2 h",
    descripcion: "Emblemático espacio patrimonial ubicado en la histórica Casona Thiers. Ofrece exposiciones sobre la historia prehispánica, patrimonio e historia de la región de La Araucanía.",
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
    nombre: "Feria Pinto",
    tiempoEstimado: "45 min",
    descripcion: "Punto de encuentro de productores y agricultores locales en Temuco. Ofrece hortalizas frescas, productos orgánicos, gastronomía típica y artesanías locales de la Araucanía.",
    ubicacion: "Plaza Aníbal Pinto / Mercado, Temuco",
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
  let idURL = obtenerIdURL();

  if (!detalleBackup[idURL] || idURL === "4") {
    if (idURL === "4" || document.referrer.toLowerCase().includes("museo")) {
      idURL = "2";
    } else if (document.referrer.toLowerCase().includes("feria")) {
