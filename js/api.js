"use strict";
const DESTINOS_CLIMA = [
    { nombre: "Temuco", subtitulo: "Parque Ñielol / Isla Cautín", lat: -38.7359, lon: -72.5904 },
    { nombre: "Pucón", subtitulo: "Parque Nacional Villarrica / Huerquehue", lat: -39.2822, lon: -71.9543 },
    { nombre: "Melipeuco", subtitulo: "Parque Nacional Conguillío", lat: -38.8547, lon: -71.6967 },
    { nombre: "Curacautín", subtitulo: "Malalcahuello / Tolhuaca", lat: -38.4369, lon: -71.8878 }
];
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
    return { texto: "Variable", icono: "🌤️", consejo: "Clima cambiante típico de La Araucanía." };
}
function formatearDiaCorto(fechaIso) {
    const dias = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
    const [anio, mes, dia] = fechaIso.split("-").map(Number);
    const fecha = new Date(anio, mes - 1, dia);
    return `${dias[fecha.getDay()]} ${dia}`;
}
async function cargarClimaDestino(contenedor, idxDestino) {
    const destino = DESTINOS_CLIMA[idxDestino] || DESTINOS_CLIMA[0];
    contenedor.innerHTML = `
    <div style="background: linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%); color: #fff; border-radius: 16px; padding: 1.5rem; box-shadow: 0 10px 25px rgba(27, 67, 50, 0.16); text-align: center;">
      <p style="margin: 0; font-weight: 600; opacity: 0.9;">Consultando estación meteorológica en ${destino.nombre}...</p>
    </div>
  `;
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${destino.lat}&longitude=${destino.lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=America%2FSantiago&forecast_days=4`;
        const resp = await fetch(url);
        if (!resp.ok)
            throw new Error(`HTTP ${resp.status}`);
        const data = await resp.json();
        const actual = data.current;
        const diario = data.daily;
        const temp = Math.round(actual.temperature_2m);
        const sensacion = Math.round(actual.apparent_temperature);
        const humedad = Math.round(actual.relative_humidity_2m);
        const viento = Math.round(actual.wind_speed_10m);
        const estado = interpretarCodigoWMO(actual.weather_code);
        const botonesDestinos = DESTINOS_CLIMA.map((d, i) => `
        <button
          type="button"
          class="btn-destino-clima"
          data-idx="${i}"
          style="padding: 0.35rem 0.8rem; border-radius: 999px; border: 1px solid ${i === idxDestino ? "#ffffff" : "rgba(255,255,255,0.28)"}; background: ${i === idxDestino ? "#ffffff" : "rgba(255,255,255,0.12)"}; color: ${i === idxDestino ? "#1b4332" : "#ffffff"}; font-size: 0.8rem; font-weight: 700; cursor: pointer; transition: all 0.2s;"
        >
          ${d.nombre}
        </button>
      `).join("");
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
            <div style="background: rgba(255,255,255,0.12); border: 1px solid rgba(255,255,255,0.16); border-radius: 12px; padding: 0.65rem 0.9rem; text-align: center; min-width: 86px;">
              <div style="font-size: 0.78rem; font-weight: 700; opacity: 0.9;">${formatearDiaCorto(fecha)}</div>
              <div style="font-size: 1.35rem; margin: 0.2rem 0;">${infoDia.icono}</div>
              <div style="font-size: 0.85rem; font-weight: 700;">${max}° <span style="opacity: 0.72; font-weight: 500;">/ ${min}°</span></div>
            </div>
          `;
            })
                .join("");
        }
        contenedor.innerHTML = `
      <div style="background: linear-gradient(135deg, #1b4332 0%, #2d6a4f 60%, #40916c 100%); color: #ffffff; border-radius: 18px; padding: 1.5rem 1.75rem; box-shadow: 0 12px 28px rgba(27, 67, 50, 0.18); display: flex; flex-direction: column; gap: 1.15rem;">
        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 0.75rem;">
          <div>
            <span style="display: inline-block; font-size: 0.72rem; font-weight: 800; letter-spacing: 0.08em; text-transform: uppercase; background: rgba(255,255,255,0.18); padding: 0.22rem 0.65rem; border-radius: 999px; margin-bottom: 0.35rem;">
              ● Clima en vivo • La Araucanía
            </span>
            <h3 style="margin: 0; font-size: 1.25rem; font-weight: 800; color: #ffffff;">${destino.nombre}</h3>
            <p style="margin: 0.15rem 0 0 0; font-size: 0.85rem; opacity: 0.85;">${destino.subtitulo}</p>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem;">
            ${botonesDestinos}
          </div>
        </div>

        <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1.25rem; border-top: 1px solid rgba(255,255,255,0.16); padding-top: 1rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span style="font-size: 3.1rem; line-height: 1; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));">${estado.icono}</span>
            <div>
              <div style="font-size: 2.4rem; font-weight: 800; line-height: 1;">${temp}°C</div>
              <div style="font-size: 0.98rem; font-weight: 600; margin-top: 0.2rem;">${estado.texto}</div>
              <div style="font-size: 0.82rem; opacity: 0.85; margin-top: 0.15rem;">
                Sensación ${sensacion}°C · 💧 ${humedad}% · 💨 ${viento} km/h
              </div>
            </div>
          </div>

          <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
            ${pronosticoHtml}
          </div>
        </div>

        <div style="background: rgba(0,0,0,0.16); border-radius: 10px; padding: 0.6rem 0.9rem; font-size: 0.84rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>🥾</span>
          <span><strong>Recomendación de ruta:</strong> ${estado.consejo}</span>
        </div>
      </div>
    `;
        contenedor.querySelectorAll(".btn-destino-clima").forEach((btn) => {
            btn.addEventListener("click", () => {
                const nuevoIdx = Number(btn.dataset.idx || "0");
                cargarClimaDestino(contenedor, nuevoIdx);
            });
        });
    }
    catch (error) {
        console.warn("Error al obtener clima en vivo:", error);
        contenedor.innerHTML = `
      <div style="background: linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%); color: #fff; border-radius: 16px; padding: 1.25rem 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <div style="display: flex; align-items: center; gap: 0.9rem;">
          <span style="font-size: 2.3rem;">⛅</span>
          <div>
            <div style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.06em; opacity: 0.85;">Clima en Temuco • Referencial</div>
            <div style="font-size: 1.4rem; font-weight: 800;">16°C · Parcialmente nublado</div>
          </div>
        </div>
        <button type="button" id="btn-reintentar-clima" style="padding: 0.45rem 0.95rem; border-radius: 999px; border: 1px solid rgba(255,255,255,0.4); background: rgba(255,255,255,0.15); color: #fff; font-weight: 700; cursor: pointer;">
          Actualizar clima
        </button>
      </div>
    `;
        document.getElementById("btn-reintentar-clima")?.addEventListener("click", () => {
            cargarClimaDestino(contenedor, idxDestino);
        });
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const contenedorClima = document.getElementById("clima-info");
    if (contenedorClima) {
        cargarClimaDestino(contenedorClima, 0);
    }
});
