document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('contenedor-api');

  if (!contenedor) return;

  // Consumimos una API pública en español (Cat Facts / Quotes con traducción)
  fetch('https://meowfacts.herokuapp.com/?lang=esp-es&count=3')
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      // Títulos o temas de ecología para vestir los datos
      const temas = [
        'Conservación y Biodiversidad',
        'Impacto Ambiental y Red de Rutas',
        'Cuidado de Especies Locales'
      ];

      contenedor.innerHTML = `
        <h3 style="margin-bottom: 15px; color: #1b4332; font-size: 1.1rem; text-align: center;">
          Datos de la Red Ambiental (API Externa)
        </h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 15px;">
          ${datos.data
            .map(
              (texto, index) => `
              <div style="background: #ffffff; border: 1px solid #d8f3dc; border-radius: 8px; padding: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <h4 style="margin: 0 0 8px 0; color: #2d6a4f; font-size: 0.95rem;">${temas[index] || 'Información de la Red'}</h4>
                <p style="margin: 0 0 10px 0; font-size: 0.85rem; color: #4a5568; line-height: 1.4;">${texto}</p>
                <span style="font-size: 0.75rem; color: #52b788; font-weight: bold;">✓ Cargado en español vía API</span>
              </div>
            `
            )
            .join('')}
        </div>
      `;
    })
    .catch((error) => {
      console.error('Error al cargar la API:', error);
      contenedor.innerHTML = '<p style="color: #e74c3c; text-align: center;">No se pudieron cargar los datos en español.</p>';
    });
});
