"use strict";

const DESTINOS_CLIMA = [
  { nombre: "Temuco", subtitulo: "Parque Ñielol / Isla Cautín", lat: -38.7359, lon: -72.5904 },
  { nombre: "Pucón", subtitulo: "Parque Nacional Villarrica / Huerquehue", lat: -39.2822, lon: -71.9543 },
  { nombre: "Melipeuco", subtitulo: "Parque Nacional Conguillío", lat: -38.8547, lon: -71.6967 },
  { nombre: "Curacautín", subtitulo: "Malalcahuello / Tolhuaca", lat: -38.4369, lon: -71.8878 },
  { nombre: "Angol", subtitulo: "Parque Nacional Nahuelbuta", lat: -37.7989, lon: -72.7086 },
  { nombre: "San Pedro de Atacama", subtitulo: "Valle de la Luna", lat: -22.9087, lon: -68.1997 },
  { nombre: "Olmué", subtitulo: "Parque Nacional La Campana", lat: -32.9953, lon: -71.1856 },
  { nombre: "Molina", subtitulo: "Parque Nacional Radal Siete Tazas", lat: -35.4589, lon: -71.0289 },
  { nombre: "Puerto Varas", subtitulo: "Saltos del Petrohué", lat: -41.1394, lon: -72.4044 },
  { nombre: "Chiloé", subtitulo: "Parque Nacional Chiloé", lat: -42.6231, lon: -73.7728 },
  { nombre: "Puyuhuapi", subtitulo: "Parque Nacional Queulat", lat: -44.3250, lon: -72.5583 },
  { nombre: "Torres del Paine", subtitulo: "Parque Nacional Torres del Paine", lat: -50.9423, lon: -73.4068 },
  { nombre: "Valdivia", subtitulo: "Castillo de Niebla", lat: -39.8694, lon: -73.3972 }
];

let destinoUbicacionActual = null;

function interpretarCodigoWMO(code) {
  if (code === 0) {
    return { texto: "Despejado", icono: "☀️", consejo: "Ideal para senderismo y miradores. Usa bloqueador solar." };
  }
  if (code === 1 || code === 2) {
    return { texto: "Parcialmente nublado", icono: "⛅", consejo: "Excelente clima para caminar al aire libre." };
  }
  if (code === 3) {
    return { texto: "Nublado", icono: "☁️", consejo: "Temperatura fresca; lleva una capa abrigada ligera." };
  }
  if (code === 45 || code === 48) {
    return { texto: "Neblina matinal", icono: "🌫️", consejo: "Precaución en rutas de altura y caminos rurales." };
  }
  if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82)) {
    return { texto: "Lluvia / Chubascos", icono: "🌧️", consejo: "Lleva chaqueta impermeable y calzado con buen agarre." };
  }
  if (code >= 71 && code <= 77) {
    return { texto: "Nieve en altura", icono: "❄️", consejo: "Consulta estado de senderos cordilleranos antes de subir." };
  }
  if (code >= 95) {
    return { texto: "Tormenta eléctrica", icono: "⛈️", consejo: "Evita cumbres y zonas boscosas abiertas." };
  }
  return { texto: "Variable", icono: "🌤️", consejo: "Clima cambiante típico de la zona." };
}

function formatearDiaCorto(fechaIso) {
  const dias = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const [anio, mes, dia] = fechaIso.split("-").map(Number);
  const fecha = new Date(anio, mes - 1, dia);
  return `${dias[fecha.getDay()]} ${dia}`;
}

function obtenerListaDestinos() {
  return destinoUbicacionActual ? [destinoUbicacionActual, ...DESTINOS_CLIMA] : DESTINOS_CLIMA;
}

function detectarUbicacionInicial() {
  return new Promise((resolve) => {
    if (!("geolocation" in navigator)) {
      resolve(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        destinoUbicacionActual = {
          nombre: "📍 Tu ubicación",
          subtitulo: `Ubicación actual (${pos.coords.latitude.toFixed(2)}, ${pos.coords.longitude.toFixed(2)})`,
          lat: Number(pos.coords.latitude.toFixed(4)),
          lon: Number(pos.coords.longitude.toFixed(4))
        };
        resolve(true);
      },
      () => {
        resolve(false);
      },
      { timeout: 5000 }
    );
  });
}

async function cargarClimaDestino(contenedor, idxDestino) {
  const listaDestinos = obtenerListaDestinos();
  const total = listaDestinos.length;
  const indiceSeguro = ((idxDestino % total) + total) % total;
  const destino = listaDestinos[indiceSeguro];

  contenedor.innerHTML = `
    <div style="width: 100%; box-sizing: border-box; background: linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%); color: #fff; border-radius: 16px; padding: 1.5rem; box-shadow: 0 10px 25px rgba(27, 67, 50, 0.16); text-align: center;">
      <p style="margin: 0; font-weight: 600; opacity: 0.9;">Consultando estación meteorológica en ${destino.nombre}...</p>
    </div>
  `;

  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${destino.lat}&longitude=${destino.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=America%2FSantiago&forecast_days=4`;
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);

    const data = await resp.json();
    const actual = data.current;
    const diario = data.daily;

    const temp = Math.round(actual.temperature_2m);
    const sensacion = Math.round(actual.apparent_temperature);
    const humedad = Math.round(actual.relative_humidity_2m);
    const viento = Math.round(actual.wind_speed_10m);
    const estado = interpretarCodigoWMO(actual.weather_code);

    const opcionesDestinos = listaDestinos
      .map(
        (d, i) =>
          `<option value="${i}" ${i === indiceSeguro ? "selected" : ""} style="color:#1b4332; background:#ffffff;">${d.nombre}</option>`
      )
      .join("");

    let pronosticoHtml = "";
    if (diario && Array.isArray(diario.time)) {
      pronosticoHtml = diario.time
        .slice(1, 4)
        .map((fecha, idx) => {
          const i = idx + 1;
          const infoDia = interpretarCodigoWMO(diario.weather_code[i]);
          const max = Math.round(diario.temperature_2m_max[i]);
          const min = Math.round(diario.temperature_2m_min[i]);

          return `
            <div style="flex: 1 1 95px; background: rgba(255,255,255,0.13); border: 1px solid rgba(255,255,255,0.2); border-radius: 12px; padding: 0.75rem 0.9rem; text-align: center;">
              <div style="font-size: 0.8rem; font-weight: 700; opacity: 0.9;">${formatearDiaCorto(fecha)}</div>
              <div style="font-size: 1.5rem; margin: 0.25rem 0;">${infoDia.icono}</div>
              <div style="font-size: 0.88rem; font-weight: 700;">${max}° <span style="opacity: 0.75; font-weight: 500;">/ ${min}°</span></div>
            </div>
          `;
        })
        .join("");
    }

    contenedor.innerHTML = `
      <div style="width: 100%; box-sizing: border-box; text-align: left; background: linear-gradient(135deg, #1b4332 0%, #2d6a4f 58%, #40916c 100%); color: #ffffff; border-radius: 18px; padding: 1.5rem 2rem; box-shadow: 0 12px 28px rgba(27, 67, 50, 0.16); display: flex; flex-direction: column; gap: 1.15rem;">
        
        <div style="width: 100%; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem;">
          <div>
            <span style="display: inline-block; font-size: 0.7rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; background: rgba(255,255,255,0.18); padding: 0.22rem 0.65rem; border-radius: 999px; margin-bottom: 0.4rem;">
              ● Clima en vivo • Destinos EcoRuta
            </span>
            <h3 style="margin: 0; font-size: 1.35rem; font-weight: 800; color: #ffffff;">${destino.nombre}</h3>
            <p style="margin: 0.15rem 0 0 0; font-size: 0.86rem; opacity: 0.88;">${destino.subtitulo}</p>
          </div>

          <div style="display: inline-flex; align-items: center; gap: 0.4rem; background: rgba(255,255,255,0.14); border: 1px solid rgba(255,255,255,0.28); border-radius: 999px; padding: 0.3rem 0.5rem;">
            <button
              type="button"
              id="btn-clima-anterior"
              aria-label="Destino anterior"
              style="width: 32px; height: 32px; border-radius: 50%; border: none; background: rgba(255,255,255,0.18); color: #ffffff; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center;"
            >
              ‹
            </button>
            <select
              id="select-destino-clima"
              aria-label="Seleccionar destino para ver el clima"
              style="background: transparent; border: none; color: #ffffff; font-size: 0.9rem; font-weight: 700; padding: 0.25rem 0.5rem; cursor: pointer; outline: none;"
            >
              ${opcionesDestinos}
            </select>
            <button
              type="button"
              id="btn-clima-siguiente"
              aria-label="Destino siguiente"
              style="width: 32px; height: 32px; border-radius: 50%; border: none; background: rgba(255,255,255,0.18); color: #ffffff; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center;"
            >
              ›
            </button>
          </div>
        </div>

        <div style="width: 100%; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1.5rem; border-top: 1px solid rgba(255,255,255,0.18); padding-top: 1.1rem;">
          <div style="display: flex; align-items: center; gap: 1.1rem; flex: 1 1 260px;">
            <span style="font-size: 3.4rem; line-height: 1; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.22));">${estado.icono}</span>
            <div>
              <div style="font-size: 2.5rem; font-weight: 800; line-height: 1;">${temp}°C</div>
              <div style="font-size: 1rem; font-weight: 600; margin-top: 0.2rem;">${estado.texto}</div>
              <div style="font-size: 0.84rem; opacity: 0.88; margin-top: 0.15rem;">
                Sensación ${sensacion}°C · 💧 ${humedad}% · 💨 ${viento} km/h
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 0.75rem; flex: 1 1 320px; justify-content: flex-end;">
            ${pronosticoHtml}
          </div>
        </div>

        <div style="width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.18); border-radius: 12px; padding: 0.7rem 1rem; font-size: 0.86rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>🥾</span>
          <span><strong>Recomendación de ruta:</strong> ${estado.consejo}</span>
        </div>
      </div>
    `;

    const selectDestino = document.getElementById("select-destino-clima");
    if (selectDestino) {
      selectDestino.addEventListener("change", (e) => {
        cargarClimaDestino(contenedor, Number(e.target.value || "0"));
      });
    }

    document.getElementById("btn-clima-anterior")?.addEventListener("click", () => {
      cargarClimaDestino(contenedor, indiceSeguro - 1);
    });

    document.getElementById("btn-clima-siguiente")?.addEventListener("click", () => {
      cargarClimaDestino(contenedor, indiceSeguro + 1);
    });
  } catch (error) {
    console.warn("Error al obtener clima en vivo:", error);
    contenedor.innerHTML = `
      <div style="width: 100%; box-sizing: border-box; text-align: left; background: linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%); color: #fff; border-radius: 16px; padding: 1.25rem 1.75rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.85rem;">
        <div style="display: flex; align-items: center; gap: 0.85rem;">
          <span style="font-size: 2.2rem;">⛅</span>
          <div>
            <div style="font-size: 0.72rem; text-transform: uppercase; letter-spacing: 0.06em; opacity: 0.85;">Clima en ${destino.nombre} • Referencial</div>
            <div style="font-size: 1.35rem; font-weight: 800;">16°C · Parcialmente nublado</div>
          </div>
        </div>
        <button type="button" id="btn-reintentar-clima" style="padding: 0.45rem 1rem; border-radius: 999px; border: 1px solid rgba(255,255,255,0.4); background: rgba(255,255,255,0.15); color: #fff; font-weight: 700; cursor: pointer;">
          Actualizar clima
        </button>
      </div>
    `;

    document.getElementById("btn-reintentar-clima")?.addEventListener("click", () => {
      cargarClimaDestino(contenedor, indiceSeguro);
    });
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const contenedorClima = document.getElementById("clima-info");
  if (contenedorClima) {
    await detectarUbicacionInicial();
    cargarClimaDestino(contenedorClima, 0);
  }
});
