// APIs
const CLIMA_API_URL = "https://api.open-meteo.com/v1/forecast?latitude=-38.7397&longitude=-72.5984&current_weather=true&relativehumidity_2m=true";

// Datos de respaldo para el clima
const climaRespaldo = {
  temperatura: "14°C",
  humedad: "85%",
  condicion: "📍 Temuco · Lluvia moderada 🌧️"
};

// Datos de respaldo para las tarjetas del catálogo
const rutasBackup = [
  {
    id: "1",
    nombre: "Sendero Ñielol",
    categoria: "Naturaleza",
    ubicacion: "Parque Ñielol, Temuco",
    duracion: "1 hr 30 min",
    dificultad: "Moderada"
  },
  {
    id: "2",
    nombre: "Museo Regional de La Araucanía",
    categoria: "Cultura",
    ubicacion: "Av. Alemania 0842, Temuco",
    duracion: "1-2 hrs",
    dificultad: "Fácil"
  },
  {
    id: "3",
    nombre: "Feria Agroecológica",
    categoria: "Gastronomía",
    ubicacion: "Plaza Aníbal Pinto, Temuco",
    duracion: "45 min",
    dificultad: "Muy fácil"
  }
];

// Cargar Clima de Temuco desde API 
async function cargarClimaTemuco() {
  const contenedor = document.getElementById("contenedor-api");
  if (!contenedor) return;

  let temp = climaRespaldo.temperatura;
  let humedad = climaRespaldo.humedad;
  let condicion = climaRespaldo.condicion;

  try {
    const res = await fetch(CLIMA_API_URL);
    if (res.ok) {
      const data = await res.json();
      if (data.current_weather) {
        temp = `${Math.round(data.current_weather.temperature)}°C`;
        condicion = `📍 Temuco · ${interpretarCodigoClima(data.current_weather.weathercode)}`;
      }
    }
  } catch (error) {
    console.log("Usando datos de clima de respaldo");
  }

  // Renderizado con diseño 
  contenedor.innerHTML = `
    <div style="
      background: linear-gradient(135deg, #1b5e20 0%, #2e7d32 60%, #388e3c 100%);
      color: #ffffff;
      border-radius: 16px;
      padding: 1.5rem 2rem;
      margin: 2rem 0;
      box-shadow: 0 8px 24px rgba(27, 94, 32, 0.2);
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1.5rem;
      font-family: system-ui, -apple-system, sans-serif;
    ">
      <div>
        <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.4rem;">
          <span style="
            background: rgba(255, 255, 255, 0.25);
            backdrop-filter: blur(8px);
            color: #ffffff;
            font-size: 0.7rem;
            font-weight: 700;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            text-transform: uppercase;
            letter-spacing: 0.8px;
          ">API Clima en Vivo</span>
          <span style="font-size: 0.85rem; opacity: 0.9;">• Open-Meteo</span>
        </div>
        
        <h3 style="margin: 0.2rem 0; font-size: 1.4rem; font-weight: 700; color: #ffffff;">
          Estado del Tiempo en Temuco
        </h3>
        <p style="margin: 0; font-size: 1.05rem; opacity: 0.95; font-weight: 500;">
          ${condicion}
        </p>
      </div>
      
      <div style="
        display: flex;
        gap: 1.8rem;
        align-items: center;
        background: rgba(255, 255, 255, 0.15);
        padding: 0.85rem 1.5rem;
        border-radius: 12px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
      ">
        <div style="text-align: center;">
          <span style="font-size: 0.75rem; text-transform: uppercase; opacity: 0.85; display: block; letter-spacing: 0.5px; font-weight: 600;">Temperatura</span>
          <span style="font-size: 1.8rem; font-weight: 800; color: #ffffff;">🌡️ ${temp}</span>
        </div>
        <div style="width: 1px; height: 40px; background: rgba(255, 255, 255, 0.25);"></div>
        <div style="text-align: center;">
          <span style="font-size: 0.75rem; text-transform: uppercase; opacity: 0.85; display: block; letter-spacing: 0.5px; font-weight: 600;">Humedad</span>
          <span style="font-size: 1.8rem; font-weight: 800; color: #e0f7fa;">💧 ${humedad}</span>
        </div>
      </div>
    </div>
  `;
}
function interpretarCodigoClima(code) {
  if (code === 0) return "Cielo despejado ☀️";
  if (code >= 1 && code <= 3) return "Parcialmente nublado ⛅";
  if (code >= 45 && code <= 48) return "Neblina 🌫️";
  if (code >= 51 && code <= 67) return "Lluvia moderada 🌧️";
  if (code >= 71 && code <= 77) return "Nieve ❄️";
  if (code >= 80 && code <= 82) return "Chubascos 🌦️";
  return "Tiempo variable 🌤️";
}

document.addEventListener("DOMContentLoaded", () => {
  cargarClimaTemuco();
});
