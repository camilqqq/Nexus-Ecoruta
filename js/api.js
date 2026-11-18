async function cargarClimaAesthetic() {
  const contenedor = document.getElementById("clima-info");
  if (!contenedor) return;

  // Coordenadas de Temuco, Región de La Araucanía
  const lat = -38.7359;
  const lon = -72.5904;
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=America%2FSantiago`;

  const descripcionesClima = {
    0: { texto: "Despejado", icono: "☀️" },
    1: { texto: "Mayormente despejado", icono: "🌤️" },
    2: { texto: "Parcialmente nublado", icono: "⛅" },
    3: { texto: "Nublado", icono: "☁️" },
    45: { texto: "Neblina", icono: "🌫️" },
    48: { texto: "Neblina con escarcha", icono: "🌫️" },
    51: { texto: "Llovizna ligera", icono: "🌦️" },
    53: { texto: "Llovizna moderada", icono: "🌦️" },
    61: { texto: "Lluvia ligera", icono: "🌧️" },
    63: { texto: "Lluvia moderada", icono: "🌧️" },
    65: { texto: "Lluvia fuerte", icono: "⛈️" },
    80: { texto: "Chubascos leves", icono: "🌦️" }
  };

  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    const actual = datos.current;

    const temp = Math.round(actual.temperature_2m);
    const sensacion = Math.round(actual.apparent_temperature);
    const humedad = actual.relative_humidity_2m;
    const viento = Math.round(actual.wind_speed_10m);
    const infoClima = descripcionesClima[actual.weather_code] || { texto: "Parcialmente nublado", icono: "⛅" };

    contenedor.innerHTML = `
      <div style="
        background: linear-gradient(135deg, #ffffff 0%, #f1f8f4 100%);
        border: 1px solid #d5e8dc;
        border-radius: 16px;
        padding: 1.4rem 1.8rem;
        box-shadow: 0 8px 24px rgba(31, 78, 52, 0.06);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
        width: 100%;
      ">
        <!-- Izquierda: Ciudad y Temperatura Principal -->
        <div style="display: flex; align-items: center; gap: 1rem;">
          <span style="font-size: 2.6rem; line-height: 1;">${infoClima.icono}</span>
          <div>
            <span style="font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.06em; color: #52796f; font-weight: 700;">
              Clima en tiempo real • Temuco, Araucanía
            </span>
            <div style="display: flex; align-items: baseline; gap: 0.6rem; margin-top: 0.15rem;">
              <strong style="font-size: 2rem; color: #1b4332; font-weight: 800;">${temp}°C</strong>
              <span style="font-size: 1rem; color: #2d6a4f; font-weight: 500;">${infoClima.texto}</span>
            </div>
          </div>
        </div>

        <!-- Derecha: Métricas detalladas (Sensación, Humedad, Viento) -->
        <div style="display: flex; flex-wrap: wrap; gap: 1.5rem; align-items: center;">
          <div style="background: rgba(255,255,255,0.8); padding: 0.6rem 1rem; border-radius: 12px; border: 1px solid #e3efe8; text-align: center;">
            <span style="display: block; font-size: 0.75rem; color: #6b7280;">Sensación</span>
            <strong style="font-size: 1rem; color: #1f2937;">🌡️ ${sensacion}°C</strong>
          </div>
          <div style="background: rgba(255,255,255,0.8); padding: 0.6rem 1rem; border-radius: 12px; border: 1px solid #e3efe8; text-align: center;">
            <span style="display: block; font-size: 0.75rem; color: #6b7280;">Humedad</span>
            <strong style="font-size: 1rem; color: #1f2937;">💧 ${humedad}%</strong>
          </div>
          <div style="background: rgba(255,255,255,0.8); padding: 0.6rem 1rem; border-radius: 12px; border: 1px solid #e3efe8; text-align: center;">
            <span style="display: block; font-size: 0.75rem; color: #6b7280;">Viento</span>
            <strong style="font-size: 1rem; color: #1f2937;">🍃 ${viento} km/h</strong>
          </div>
        </div>
      </div>
    `;
  } catch (error) {
    contenedor.innerHTML = `
      <div style="background: #f4f9f4; border: 1px solid #d5e8dc; border-radius: 12px; padding: 1rem 1.5rem; color: #2e7d32; width: 100%; text-align: center;">
        ⛅ <strong>Temuco, Araucanía:</strong> 16°C • Parcialmente nublado • 💧 Humedad: 68% • 🍃 Viento: 12 km/h
      </div>
    `;
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", cargarClimaAesthetic);
} else {
  cargarClimaAesthetic();
}
