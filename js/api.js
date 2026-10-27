document.addEventListener("DOMContentLoaded", () => {
  const API_URL = "https://6ae0eeb2be3bc8fead981ad1.mockapi.io/api/v1/emprendimientos";

  fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log("Datos cargados correctamente desde MockAPI:", data);
      // Aquí se renderizan los datos en el HTML si corresponde
    })
    .catch(error => {
      console.error("Error al consumir MockAPI:", error);
    });
});
