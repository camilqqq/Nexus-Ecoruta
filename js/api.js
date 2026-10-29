// ==========================================
// INTEGRACIÓN DE API MOCKAPI (CLIMA EN VIVO)
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  const API_URL = "https://6ae0eeb2be3bc8fead981ad1.mockapi.io/api/v1/clima";
  const contenedorAPI = document.querySelector("#contenedor-api");

  if (!contenedorAPI) return;

  fetch(API_URL)
    .then((respuesta) => {
      if (!respuesta.ok) throw new Error(`Error HTTP: ${respuesta.status}`);
      return respuesta.json();
    })
    .then((datos) => {
      // Datos por defecto si la API viene vacía
      const clima = datos[0] || {
        ciudad: "Temuco",
        temperatura: "18°C",
        condicion: "Parcialmente Nublado",
        humedad: "65%",
        viento: "12 km/h",
        recomendacion: "Día ideal para realizar trekking en el Parque Ñielol o recorridos gastronómicos."
      };

      // Inyección con tarjeta estilizada
      contenedorAPI.innerHTML = `
        <div style="
          background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
          border: 1px solid #a5d6a7;
          border-radius: 12px;
          padding: 20px 25px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          max-width: 600px;
          margin: 0 auto;
          font-family: system-ui, -apple-system, sans-serif;
        ">
          <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #a5d6a7; padding-bottom: 10px; margin-bottom: 12px;">
            <h3 style="margin: 0; color: #1b5e20; font-size: 1.25rem; display: flex; align-items: center; gap: 8px;">
              ⛅ Clima en ${clima.ciudad}
            </h3>
            <span style="font-size: 1.5rem; font-weight: bold; color: #2e7d32;">${clima.temperatura}</span>
          </div>

          <p style="margin: 6px 0; color: #2e7d32; font-weight: 600; font-size: 1rem;">
            Estado: <span style="font-weight: normal; color: #333;">${clima.condicion}</span>
          </p>

          <div style="display: flex; gap: 15px; margin: 10px 0; font-size: 0.9rem; color: #444;">
            <span>💧 <strong>Humedad:</strong> ${clima.humedad || '65%'}</span>
            <span>💨 <strong>Viento:</strong> ${clima.viento || '12 km/h'}</span>
          </div>

          <div style="margin-top: 12px; padding-top: 10px; border-top: 1px dashed #a5d6a7; font-size: 0.88rem; color: #1b5e20;">
            💡 <strong>Recomendación EcoRuta:</strong> ${clima.recomendacion}
          </div>
        </div>
      `;
    })
    .catch((error) => {
      contenedorAPI.innerHTML = `
        <div style="background-color: #ffebee; border: 1px solid #ffcdd2; color: #c62828; padding: 12px 20px; border-radius: 8px; text-align: center; max-width: 500px; margin: 0 auto;">
          ⚠️ No se pudo obtener la información meteorológica. Por favor reintenta más tarde.
        </div>
      `;
    });
});
