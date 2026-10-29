// ==========================================
// INTEGRACIÓN Y MAQUETACIÓN DEL CLIMA
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  const API_URL = "https://6ae0eeb2be3bc8fead981ad1.mockapi.io/api/v1/clima";
  const contenedorAPI = document.querySelector("#contenedor-api");

  if (!contenedorAPI) return;

  // Datos meteorológicos de respaldo
  const climaBackup = {
    ciudad: "Temuco",
    temperatura: "18°C",
    condicion: "Parcialmente Nublado",
    humedad: "65%",
    viento: "12 km/h",
    recomendacion: "Condiciones ideales para recorridos al aire libre y visitas a senderos naturales."
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
            <span style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: #2e7d32;">Pronóstico del Tiempo</span>
            <h3 style="margin: 2px 0 0 0; font-size: 1.35rem; color: #1a252f; font-weight: 600;">${clima.ciudad || climaBackup.ciudad}</h3>
          </div>
          <div style="font-size: 2rem; font-weight: 700; color: #2e7d32;">
            ${clima.temperatura || climaBackup.temperatura}
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; margin-bottom: 16px;">
          <div style="background: #f8fafc; padding: 10px 14px; border-radius: 6px; border-left: 3px solid #2e7d32;">
            <span style="display: block; font-size: 0.75rem; color: #64748b; font-weight: 600; text-transform: uppercase;">Estado</span>
            <span style="font-size: 0.95rem; font-weight: 600; color: #334155;">${clima.condicion || climaBackup.condicion}</span>
          </div>

          <div style="background: #f8fafc; padding: 10px 14px; border-radius: 6px; border-left: 3px solid #2e7d32;">
            <span style="display: block; font-size: 0.75rem; color: #64748b; font-weight: 600; text-transform: uppercase;">Humedad</span>
            <span style="font-size: 0.95rem; font-weight: 600; color: #334155;">${clima.humedad || climaBackup.humedad}</span>
          </div>

          <div style="background: #f8fafc; padding: 10px 14px; border-radius: 6px; border-left: 3px solid #2e7d32;">
            <span style="display: block; font-size: 0.75rem; color: #64748b; font-weight: 600; text-transform: uppercase;">Viento</span>
            <span style="font-size: 0.95rem; font-weight: 600; color: #334155;">${clima.viento || climaBackup.viento}</span>
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
          <strong>Recomendación EcoRuta:</strong> ${clima.recomendacion || climaBackup.recomendacion}
        </div>
      </div>
    `;
  };

  fetch(API_URL)
    .then((res) => res.json())
    .then((datos) => {
      const objetoClima = (Array.isArray(datos) && datos.length > 0) ? datos[0] : climaBackup;
      pintarTarjeta(objetoClima);
    })
    .catch(() => {
      pintarTarjeta(climaBackup);
    });
});
