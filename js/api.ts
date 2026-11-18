interface ClimaData {
  temperatura: number | string;
  condicion: string;
}

const API_URL = "https://6724eb29c39fedae05b33100.mockapi.io/api/v1/clima";

function obtenerIconoClima(condicion: string): string {
  const texto = condicion.toLowerCase();
  if (texto.includes("lluvia") || texto.includes("llovizna")) return "🌧️";
  if (texto.includes("tormenta")) return "⛈️";
  if (texto.includes("nieve")) return "❄️";
  if (texto.includes("despejado") || texto.includes("soleado")) return "☀️";
  if (texto.includes("nublado") || texto.includes("nube")) return "⛅";
  return "🌤️";
}

function renderizarTarjetaClima(contenedor: HTMLElement, temp: number | string, condicion: string, esRespaldo = false): void {
  const icono = obtenerIconoClima(condicion);
  contenedor.innerHTML = `
    <div style="
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;
      background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%);
      border: 1px solid #bbf7d0;
      border-radius: 12px;
      padding: 0.65rem 1.1rem;
      margin: 1rem auto;
      box-shadow: 0 2px 6px rgba(22, 101, 52, 0.08);
      font-family: inherit;
    ">
      <span style="font-size: 1.65rem; line-height: 1;" aria-hidden="true">${icono}</span>
      <div style="text-align: left;">
        <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; color: #166534;">
          Clima en Temuco ${esRespaldo ? "• Referencial" : "• En vivo"}
        </div>
        <div style="display: flex; align-items: baseline; gap: 0.45rem;">
          <span class="clima-temp" style="font-size: 1.15rem; font-weight: 800; color: #14532d;">${temp}°C</span>
          <span class="clima-desc" style="font-size: 0.9rem; font-weight: 500; color: #15803d;">${condicion}</span>
        </div>
      </div>
    </div>
  `;
}

async function obtenerClima(): Promise<void> {
  const contenedorClima = document.getElementById("clima-info");
  if (!contenedorClima) return;

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    const data: ClimaData[] = await response.json();

    if (data && data.length > 0) {
      const clima = data[0];
      renderizarTarjetaClima(contenedorClima, clima.temperatura, clima.condicion, false);
    }
  } catch (error) {
    console.warn("No se pudo cargar el clima en vivo, usando datos de respaldo:", error);
    renderizarTarjetaClima(contenedorClima, 16, "Parcialmente nublado", true);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  obtenerClima();
});