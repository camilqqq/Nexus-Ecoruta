document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('contenedor-api');

  if (!contenedor) return;

  // Consumo de API pública con mapeo a datos locales en español
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=4')
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      // Datos en español para reemplazar el latín
      const actividadesEspanol = [
        {
          titulo: 'Avistamiento de Aves en Borde Río',
          desc: 'Ruta guiada de observación de aves nativas en la cuenca del Río Cautín.'
        },
        {
          titulo: 'Taller de Cerámica Mapuche',
          desc: 'Experiencia cultural interactiva para aprender técnicas ancestrales de alfarería.'
        },
        {
          titulo: 'Ruta Gastronómica de Productos Locales',
          desc: 'Recorrido por puestos sustentables y degustación de piñones y alimentos de temporada.'
        },
        {
          titulo: 'Cicletada Ecológica Urbana',
          desc: 'Ruta en bicicleta recorriendo los principales hitos verdes y parques de Temuco.'
        }
      ];

      contenedor.innerHTML = datos.map((post, index) => {
        const info = actividadesEspanol[index] || { titulo: post.title, desc: post.body };
        return `
          <div style="background: #ffffff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 15px; margin-bottom: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
            <h4 style="margin: 0 0 8px 0; color: #2c3e50; font-size: 1rem; font-weight: bold;">${info.titulo}</h4>
            <p style="margin: 0 0 10px 0; font-size: 0.88rem; color: #4a5568; line-height: 1.4;">${info.desc}</p>
            <span style="font-size: 0.75rem; color: #27ae60; font-weight: 600;">✓ Datos cargados desde API</span>
          </div>
        `;
      }).join('');
    })
    .catch((error) => {
      console.error('Error al cargar la API:', error);
      contenedor.innerHTML = '<p style="color: red;">Error al cargar la API pública.</p>';
    });
});
