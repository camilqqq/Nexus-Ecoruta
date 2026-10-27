document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.querySelector("#contenedor-emprendimientos");
  const botonesFiltro = document.querySelectorAll(".btn-filtro");

  // Datos de ejemplo para renderizar las tarjetas dinámicamente
  const emprendimientos = [
    {
      nombre: "Eco-Artesanías Temuco",
      rubro: "artesania",
      badge: "Sello Verde",
      descripcion: "Productos tallados en madera con madera nativa reutilizada."
    },
    {
      nombre: "Sabores del Cautín",
      rubro: "gastronomia",
      badge: "Comercio Justo",
      descripcion: "Mermeladas orgánicas y gastronomía típica local."
    },
    {
      nombre: "Senderos Araucanía",
      rubro: "turismo",
      badge: "Ecoturismo Certificado",
      descripcion: "Guías locales para trekking y avistamiento de aves."
    }
  ];

  // Función para renderizar las tarjetas
  function renderizarEmprendimientos(lista) {
    if (!contenedor) return;
    contenedor.innerHTML = "";

    if (lista.length === 0) {
      contenedor.innerHTML = "<p class='mensaje-vacio'>No se encontraron emprendimientos en esta categoría.</p>";
      return;
    }

    lista.forEach(item => {
      const card = document.createElement("div");
      card.className = "card-emprendimiento";
      card.innerHTML = `
        <h3>${item.nombre}</h3>
        <span class="badge-eco">${item.badge}</span>
        <p>${item.descripcion}</p>
      `;
      contenedor.appendChild(card);
    });
  }

  // Render inicial
  renderizarEmprendimientos(emprendimientos);

  // Event listener para los botones de filtro
  botonesFiltro.forEach(boton => {
    boton.addEventListener("click", (e) => {
      const rubroSeleccionado = e.target.dataset.rubro;

      if (rubroSeleccionado === "todos") {
        renderizarEmprendimientos(emprendimientos);
      } else {
        const filtrados = emprendimientos.filter(item => item.rubro === rubroSeleccionado);
        renderizarEmprendimientos(filtrados);
      }
    });
  });
});
