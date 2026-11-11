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

// Cargar Clima de Temuco desde API con Respaldo
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
    <div style="background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%); border: 1px solid #a5d6a7; border-radius: 12px; padding: 1.25rem 1.5rem; margin: 1.5rem 0; box-shadow: 0 4px 12px rgba(46, 125, 50, 0.08); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
      <div>
        <span style="background: #2e7d32; color: white; font-size: 0.75rem; font-weight: bold; padding: 0.25rem 0.6rem; border-radius: 20px; text-transform: uppercase; letter-spacing: 0.5px;">API Clima en Vivo</span>
        <h3 style="color: #1b5e20; margin: 0.5rem 0 0.2rem 0; font-size: 1.2rem; display: flex; align-items: center; gap: 0.4rem;">
          📍 Estado del Tiempo en Temuco
        </h3>
        <p style="color: #388e3c; margin: 0; font-size: 0.95rem; font-weight: 500;">${condicion}</p>
      </div>
      
      <div style="display: flex; gap: 1.5rem; align-items: center; background: rgba(255, 255, 255, 0.7); padding: 0.75rem 1.25rem; border-radius: 10px; backdrop-filter: blur(4px);">
        <div style="text-align: center;">
          <span style="font-size: 0.8rem; color: #555; display: block; font-weight: 600;">Temperatura</span>
          <span style="font-size: 1.5rem; font-weight: bold; color: #2e7d32;">🌡️ ${temp}</span>
        </div>
        <div style="width: 1px; height: 35px; background: #c8e6c9;"></div>
        <div style="text-align: center;">
          <span style="font-size: 0.8rem; color: #555; display: block; font-weight: 600;">Humedad</span>
          <span style="font-size: 1.5rem; font-weight: bold; color: #0288d1;">💧 ${humedad}</span>
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
