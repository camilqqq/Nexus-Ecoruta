// =======================================================
// INTEGRACIÓN DE CLIMA REAL (Modelo ICON de alta precisión)
// =======================================================
document.addEventListener("DOMContentLoaded", () => {
  const contenedorAPI = document.querySelector("#contenedor-api");
  if (!contenedorAPI) return;

  // Usa el modelo meteorológico ICON (la misma base de datos de precisión que usa Meteored para Temuco)
  const API_URL = "https://api.open-meteo.com/v1/forecast?latitude=-38.7397&longitude=-72.5984&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&models=icon_seamless&timezone=America%2FSantiago";

  const obtenerCondicion = (code) => {
    if (code === 0) return "Despejado";
    if (code >= 1 && code <= 3) return "Parcialmente Nublado";
    if (code >= 45 && code <= 48) return "Niebla / Neblina";
    if (code >= 51 && code <= 67) return "Lluvia Ligera";
    if (code >= 80 && code <= 82) return "Chubascos";
    if (code >= 95) return "Tormenta Eléctrica";
    return "Nublado";
  };

  const pintarTarjeta = (clima) => {
    contenedorAPI.innerHTML = `
      <div style="
        background: #ffffff;
        border: 1px solid #e0e6ed;
        border-radius: 10px;
        padding: 20px 28px;
        max-width: 650px;
        margin: 25px auto;
        box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
        font-family: system-ui, -apple-system, sans-serif;
        color: #2c3e50;
      ">
        <div style="
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid #f0f4f8;
          padding-bottom: 12px;
          margin-bottom: 16px;
        ">
          <div>
            <span style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: #2e7d32;">Pronóstico en Tiempo Real</span>
            <h3 style="margin: 2px 0 0 0; font-size: 1.35rem; color: #1a252f; font-weight: 600;">Temuco (Estación Maquehue)</h3>
          </div>
          <div style="font-size: 2rem; font-weight: 700; color: #2e7d32;">
            ${clima.temperatura}
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; margin-bottom: 16px;">
          <div style="background: #f8fafc; padding: 10px 14px; border-radius: 6px; border-left: 3px solid #2e7d32;">
            <span style="display: block; font-size: 0.75rem; color: #64748b; font-weight: 600; text-transform: uppercase;">Estado</span>
            <span style="font-size: 0.95rem; font-weight: 600; color: #334155;">${clima.condicion}</span>
          </div>
          <div style="background: #f8fafc; padding: 10px 14px; border-radius: 6px; border-left: 3px solid #2e7d32;">
            <span style="display: block; font-size: 0.75rem; color: #64748b; font-weight: 600; text-transform: uppercase;">Humedad</span>
            <span style="font-size: 0.95rem; font-weight: 600; color: #334155;">${clima.humedad}</span>
          </div>
          <div style="background: #f8fafc; padding: 10px 14px; border-radius: 6px; border-left: 3px solid #2e7d32;">
            <span style="display: block; font-size: 0.75rem; color: #64748b; font-weight: 600; text-transform: uppercase;">Viento</span>
            <span style="font-size: 0.95rem; font-weight: 600; color: #334155;">${clima.viento}</span>
          </div>
        </div>

        <div style="
          background: #f0fdf4;
          border: 1px solid #dcfce7;
          border-radius: 6px;
          padding: 12px 16px;
          font-size: 0.9rem;
          color: #166534;
        ">
          <strong>Recomendación EcoRuta:</strong> ${clima.recomendacion}
        </div>
      </div>
    `;
  };

  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      const actual = data.current;
      const datosClimaReales = {
        temperatura: `${Math.round(actual.temperature_2m)}°C`,
        condicion: obtenerCondicion(actual.weather_code),
        humedad: `${actual.relative_humidity_2m}%`,
        viento: `${Math.round(actual.wind_speed_10m)} km/h`,
        recomendacion: actual.weather_code <= 3 
          ? "Condiciones ideales para recorridos al aire libre y visitas a senderos naturales."
          : "Se sugiere llevar equipamiento adecuado para clima variable."
      };
      pintarTarjeta(datosClimaReales);
    });
});
