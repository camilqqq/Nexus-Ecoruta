// Consumo de API pública (jsonplaceholder)
const API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=4';

async function cargarDatosAPI() {
  const contenedor = document.querySelector('#contenedor-api');
  if (!contenedor) return;

  try {
    const respuesta = await fetch(API_URL);
    if (!respuesta.ok) throw new Error('Error en la solicitud');
    
    const datos = await respuesta.json();
    contenedor.innerHTML = ''; // Limpiar mensaje de carga

    datos.forEach(item => {
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('tarjeta-item');
      tarjeta.style.border = '1px solid #ccc';
      tarjeta.style.padding = '10px';
      tarjeta.style.margin = '10px 0';
      tarjeta.style.borderRadius = '5px';

      tarjeta.innerHTML = `
        <h4 style="color: #2c3e50;">${item.title}</h4>
        <p>${item.body}</p>
        <span style="font-size: 12px; color: green;">✓ Datos cargados desde API</span>
      `;
      contenedor.appendChild(tarjeta);
    });
  } catch (error) {
    console.error('Error al cargar la API:', error);
    contenedor.innerHTML = '<p>Error al cargar datos dinámicos.</p>';
  }
}

document.addEventListener('DOMContentLoaded', cargarDatosAPI);
