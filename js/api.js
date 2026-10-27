document.addEventListener("DOMContentLoaded", () => {
  // URL completa y exacta fijada a tu endpoint de MockAPI
  const API_URL = "https://6ae0eeb2be3bc8fead981ad2.mockapi.io/api/v1/emprendimientos";
  
  const contenedorAPI = document.querySelector("#contenedor-api") || document.querySelector("#api-container") || document.querySelector(".api-container");

  if (!contenedorAPI) return;

  fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Datos cargados correctamente desde MockAPI:", data);

      contenedorAPI.innerHTML = `
        <div style="padding: 15px; background-color: #e8f5e9; border: 1px solid #c8e6c9; border-radius: 8px; margin-top: 15px;">
          <p style="color: #2e7d32; font-weight: bold; margin: 0 0 5px 0;">
            ✅ Datos cargados exitosamente desde MockAPI
          </p>
          <small style="color: #333;">
            Se obtuvieron <strong>${data.length}</strong> registros desde el endpoint de emprendimientos.
          </small>
        </div>
      `;
    })
    .catch((error) => {
      console.error("Error al consumir MockAPI:", error);
      contenedorAPI.innerHTML = `
        <div style="padding: 15px; background-color: #ffebee; border: 1px solid #ffcdd2; border-radius: 8px; margin-top: 15px;">
          <p style="color: #c62828; font-weight: bold; margin: 0;">
            ❌ Error al cargar datos desde MockAPI
          </p>
          <small style="color: #555;">${error.message}</small>
        </div>
      `;
    });
});
