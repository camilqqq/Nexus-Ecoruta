document.addEventListener("DOMContentLoaded", () => {
  // Capturar el parámetro 'id' desde la URL (ej: Actividad.html?id=1)
  const params = new URLSearchParams(window.location.search);
  const actividadId = params.get("id");

  // Base de datos local de actividades para renderizado dinámico
  const actividades = {
    "1": {
      titulo: "Trekking Cerro Ñielol",
      descripcion: "Recorrido por senderos naturales con vista panorámica a la ciudad de Temuco.",
      ubicacion: "Monumento Natural Cerro Ñielol"
    },
    "2": {
      titulo: "Ruta Gastronómica Mapuche",
      descripcion: "Degustación de platos tradicionales y aprendizaje sobre la cultura ancestral.",
      ubicacion: "Sector Boroa / Padre Las Casas"
    }
  };

  const tituloEl = document.querySelector("#titulo-actividad");
  const descEl = document.querySelector("#descripcion-actividad");
  const ubicaEl = document.querySelector("#ubicacion-actividad");

  // Si existe el ID en la URL, inyectar los datos dinámicamente
  if (actividadId && actividades[actividadId]) {
    const data = actividades[actividadId];
    if (tituloEl) tituloEl.textContent = data.titulo;
    if (descEl) descEl.textContent = data.descripcion;
    if (ubicaEl) ubicaEl.textContent = data.ubicacion;
  }
});
