const CATALOGO_ACTIVIDADES = {
  sendero: {
    nombre: "Sendero Ñielol",
    categoria: "Naturaleza",
    imagen: "assets/Img/Sendero/Sendero_Nielol.jpg",
    ubicacion: "Parque Ñielol, Temuco",
    actualizacion: "2026-08-10",
    duracion: "2 hrs",
    dificultad: "Fácil"
  },

  museo: {
    nombre: "Museo Regional de La Araucanía",
    categoria: "Cultura",
    imagen: "assets/Img/Museo/museo.jpg",
    ubicacion: "Museo Regional de La Araucanía",
    actualizacion: "2026-08-06",
    duracion: "1-2 hrs",
    dificultad: "Fácil"
  },

  feria: {
    nombre: "Feria Agroecológica",
    categoria: "Gastronomía",
    imagen: "assets/Img/Feria/feria.jpg",
    ubicacion: "Plaza Aníbal Pinto",
    actualizacion: "2026-08-12",
    duracion: "4 hrs",
    dificultad: "Muy fácil"
  }
};


// Crear tarjeta
function crearTarjeta(id, actividad) {

  return `
    <article class="activity">

      <div class="image">
        <img 
          src="${actividad.imagen}" 
          alt="${actividad.nombre}"
        >
      </div>

      <div class="info">

        <div class="activity-header">
          <div>
            <h3>${actividad.nombre}</h3>
            <p>
              ${actividad.categoria} • ${actividad.ubicacion}
            </p>
          </div>

          <small>
            Actualizado: ${actividad.actualizacion}
          </small>
        </div>


        <p>
          Duración: ${actividad.duracion}
          · Dificultad: ${actividad.dificultad}
        </p>


        <div class="buttons">

          <a 
            href="paginas/Actividad.html?id=${id}" 
            class="primary">
            Ver ficha
          </a>

          <a href="#">
            Contactar
          </a>

        </div>

      </div>

    </article>
  `;
}


// Mostrar tarjetas
function mostrarActividades(lista) {

  const contenedor = document.getElementById("listaActividades");

  if (!contenedor) return;

  contenedor.innerHTML = "";

  lista.forEach(([id, actividad]) => {

    contenedor.innerHTML += crearTarjeta(id, actividad);

  });
}


// Cargar todas al iniciar
document.addEventListener("DOMContentLoaded", () => {

  const actividades = Object.entries(CATALOGO_ACTIVIDADES);

  mostrarActividades(actividades);

});