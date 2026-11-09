"use strict";
const API_URL = "https://6724eb29c39fedae05b33100.mockapi.io/api/v1/clima";
async function obtenerClima() {
    const contenedorClima = document.getElementById("clima-info");
    if (!contenedorClima)
        return;
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        if (data && data.length > 0) {
            const clima = data[0];
            contenedorClima.innerHTML = `
        <span class="clima-temp">${clima.temperatura}°C</span>
        <span class="clima-desc">${clima.condicion}</span>
      `;
        }
    }
    catch (error) {
        console.warn("No se pudo cargar el clima en vivo, usando datos de respaldo:", error);
        contenedorClima.innerHTML = `
      <span class="clima-temp">16°C</span>
      <span class="clima-desc">Parcialmente nublado</span>
    `;
    }
}
document.addEventListener("DOMContentLoaded", () => {
    obtenerClima();
});
