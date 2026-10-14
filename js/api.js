document.addEventListener('DOMContentLoaded', () => {
  const contenedor = document.getElementById('contenedor-api');

  if (!contenedor) return;

  // API pública y gratuita de clima/tiempo real para Temuco (sin API Key)
  const urlApi = 'https://api.open-meteo.com/v1/forecast?latitude=-38.7392&longitude=-72.5984&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=America%2FSantiago';

  fetch(urlApi)
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      const clima = datos.current;
      const temp = clima.temperature_2m;
      const humedad = clima.relative_humidity_2m;
      const viento = clima.wind_speed_10m;

      // Estado de las rutas según la temperatura
      let estadoRuta = 'Condiciones óptimas para senderismo y recorridos al aire libre.';
      if (temp > 25) {
        estadoRuta = 'Día caluroso: Se recomienda llevar hidratación adecuada en las rutas.';
      } else if (temp < 10) {
        estadoRuta = 'Día frío: Se recomienda abrigo adecuado para el recorrido.';
      }

      contenedor.innerHTML = `
        <div style="background: #ffffff; border: 1px solid #d8f3dc; border-radius: 10px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 10px;">
            <h3 style="margin: 0; color: #1b4332; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
              🌱 Estado Ambiental en Tiempo Real — Temuco
            </h3>
            <span style="background: #e8f5e9; color: #2e7d32; font-size: 0.75rem; font-weight: bold; padding: 4px 10px; border-radius: 12px;">
              ✓ Datos en vivo desde Open-Meteo API
            </span>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin-bottom: 15px;">
            <div style="background: #f8faf8; padding: 12px; border-radius: 8px; border-left: 4px solid #2d6a4f;">
              <span style="font-size: 0.8rem; color: #666; display: block;">Temperatura Actual</span>
              <strong style="font-size: 1.3rem; color: #1b4332;">${temp} °C</strong>
            </div>

            <div style="background: #f8faf8; padding: 12px; border-radius: 8px; border-left: 4px solid #52b788;">
              <span style="font-size: 0.8rem; color: #666; display: block;">Humedad Relativa</span>
              <strong style="font-size: 1.3rem; color: #1b4332;">${humedad}%</strong>
            </div>

            <div style="background: #f8faf8; padding: 12px; border-radius: 8px; border-left: 4px solid #74c69d;">
              <span style="font-size: 0.8rem; color: #666; display: block;">Viento</span>
              <strong style="font-size: 1.3rem; color: #1b4332;">${viento} km/h</strong>
            </div>
          </div>

          <p style="margin: 0; font-size: 0.88rem; color: #2d6a4f; background: #e8f5e9; padding: 10px; border-radius: 6px;">
            <strong>Reporte para Ecorutas:</strong> ${estadoRuta}
          </p>
        </div>
      `;
    })
    .catch((error) => {
      console.error('Error al cargar la API del clima:', error);
      contenedor.innerHTML = `
        <div style="padding: 15px; border: 1px solid #ffcdd2; background: #ffebee; border-radius: 8px; color: #c62828;">
          <p style="margin: 0; font-size: 0.9rem;">⚠️ No se pudo obtener la información ambiental en tiempo real.</p>
        </div>
      `;
    });
});
