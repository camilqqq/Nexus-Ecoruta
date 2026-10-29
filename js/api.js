// ==========================================
// INTEGRACIÓN DE API MOCKAPI (CLIMA TEMUCO)
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
      // Toma el primer dato o usa un estado de respaldo si la API responde vacía
      const clima = datos[0] || {
        ciudad: "Temuco",
        temperatura: "17°C",
        condicion: "Parcialmente Nublado",
        humedad: "60%",
        viento: "10 km/h",
        recomendacion: "Excelente clima para realizar rutas al aire libre."
      };

      contenedorAPI.innerHTML = `
        <div style="background-color: #e8f5e9; border: 1px solid #a5d6a7; padding: 16px; border-radius: 8px; text-align: center;">
          <h3 style="margin: 0 0 8px 0; color: #2e7d32;">🌤️ Clima Actual en ${clima.ciudad}</h3>
          <p style="margin: 4px 0; font-size: 1.1rem; color: #1b5e20;"><strong>${clima.temperatura}</strong> - ${clima.condicion}</p>
          <p style="margin: 4px 0; font-size: 0.9rem; color: #424242;">Humedad: ${clima.humedad} | Viento: ${clima.viento}</p>
          <small style="display: block; margin-top: 8px; color: #555; font-style: italic;">💡 ${clima.recomendacion}</small>
        </div>
      `;
    })
    .catch((error) => {
      contenedorAPI.innerHTML = `
        <div style="padding: 12px; background-color: #ffebee; border: 1px solid #ffcdd2; border-radius: 8px; text-align: center; color: #c62828;">
          ⚠️ No se pudo cargar la información del clima desde MockAPI.
        </div>
      `;
    });
});
