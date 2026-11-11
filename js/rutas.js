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
    duracion: "1 a 1.5 h",
    dificultad: "Moderada"
  },
  {
    id: "2",
    nombre: "Museo Regional de La Araucanía",
    categoria: "Cultura",
    ubicacion: "Av. Alemania 0842, Temuco",
    duracion: "1 a 2 h",
    dificultad: "Fácil"
  },
  {
    id: "3",
    nombre: "Feria Pinto",
    categoria: "Gastronomía",
    ubicacion: "Plaza Aníbal Pinto / Mercado, Temuco",
    duracion: "45 min"
  }
];

// Cargar Clima de Temuco 
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

  contenedor.innerHTML = `
    <div style="
      background: linear-gradient(135deg, #f4f9f4 0%, #e8f5e9 100%);
      border: 1px solid #c8e6c9;
      border-radius: 16px;
      padding: 1.5rem 2rem;
      margin: 2rem 0;
      box-shadow: 0 4px 20px rgba(46, 125, 50, 0.05);
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1.5rem;
      font-family: system-ui, -apple-system, sans-serif;
    ">
      <div>
        <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.4rem;">
          <span style="
            background: #e8f5e9;
            color: #2e7d32;
            border: 1px solid #a5d6a7;
            font-size: 0.72rem;
            font-weight: 700;
            padding: 0.2rem 0.7rem;
            border-radius: 20px;
            text-transform: uppercase;
            letter-spacing: 0.8px;
          ">API Clima en Vivo</span>
          <span style="font-size: 0.85rem; color: #666; font-weight: 500;">• Open-Meteo</span>
        </div>
        
        <h3 style="margin: 0.3rem 0 0.1rem 0; font-size: 1.35rem; font-weight: 700; color: #1b5e20;">
          Estado del Tiempo en Temuco
        </h3>
        <p style="margin: 0; font-size: 1rem; color: #2e7d32; font-weight: 500;">
          ${condicion}
        </p>
      </div>
      
      <div style="
        display: flex;
        gap: 1.5rem;
        align-items: center;
        background: #ffffff;
        padding: 0.85rem 1.4rem;
        border-radius: 14px;
        border: 1px solid #e0e0e0;
        box-shadow: 0 2px 8px rgba(0,0,0,0.03);
      ">
        <div style="text-align: center;">
          <span style="font-size: 0.7rem; text-transform: uppercase; color: #777; display: block; letter-spacing: 0.5px; font-weight: 700;">Temperatura</span>
          <span style="font-size: 1.6rem; font-weight: 800; color: #1b5e20;">🌡️ ${temp}</span>
        </div>
        <div style="width: 1px; height: 35px; background: #e0e0e0;"></div>
        <div style="text-align: center;">
          <span style="font-size: 0.7rem; text-transform: uppercase; color: #777; display: block; letter-spacing: 0.5px; font-weight: 700;">Humedad</span>
          <span style="font-size: 1.6rem; font-weight: 800; color: #0288d1;">💧 ${humedad}</span>
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
