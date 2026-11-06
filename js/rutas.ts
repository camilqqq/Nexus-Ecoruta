 //Interface que define la estructura de una Ruta
export interface Ruta {

  id?: string | number;

  nombre: string;

  dificultad: "Fácil" | "Media" | "Alta" | string;

  distancia: string;

  tiempoEstimado: string;

  descripcion: string;

  imagen?: string;

  ubicacion?: string;

}



// Endpoint de la API

const RUTAS_API_URL = "https://6724eb29c39fedae05b33100.mockapi.io/api/v1/rutas";



// Datos de respaldo

const rutasBase: Ruta[] = [

  {

    id: 1,

    nombre: "Sendero Cerro Ñielol",

    dificultad: "Fácil",

    distancia: "2.5 km",

    tiempoEstimado: "1h 30min",

    descripcion: "Caminata entre bosque nativo con vista panorámica a Temuco.",

    ubicacion: "Monumento Natural Cerro Ñielol"

  },

  {

    id: 2,

    nombre: "Ruta Eco-Etnia Ruka Mapuche",

    dificultad: "Media",

    distancia: "5.0 km",

    tiempoEstimado: "2h 45min",

    descripcion: "Recorrido cultural y gastronómico por rukas y senderos locales.",

    ubicacion: "Padre Las Casas"

  }

];



// FUNCIÓN 1: Obtener rutas desde la API (Retorna Promise<Ruta[]>)

async function cargarRutas(): Promise<Ruta[]> {

  try {

    const response = await fetch(RUTAS_API_URL);

    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);

    const data: Ruta[] = await response.json();

    return data && data.length > 0 ? data : rutasBase;

  } catch (error) {

    console.warn("No se pudo conectar con la API de rutas. Cargando datos de respaldo:", error);

    return rutasBase;

  }

}



// FUNCIÓN 2: Filtrar lista de rutas según nivel de dificultad (Trabaja con Ruta[])

export function filtrarRutasPorDificultad(listaRutas: Ruta[], dificultad: string): Ruta[] {

  if (!dificultad || dificultad === "Todas") return listaRutas;

  return listaRutas.filter(

    (ruta) => ruta.dificultad.toLowerCase() === dificultad.toLowerCase()

  );

}



// FUNCIÓN 3: Renderizar las rutas en el DOM

async function renderizarRutas(): Promise<void> {

  const contenedor = document.getElementById("contenedor-rutas");

  if (!contenedor) return;



  const rutas = await cargarRutas();



  contenedor.innerHTML = rutas.map((ruta) => `

    <article class="ruta-card" style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 1rem; margin-bottom: 1rem; background: #fff;">

      <h3 style="color: #2e7d32; margin-top: 0;">${ruta.nombre}</h3>

      <p style="margin: 0.4rem 0;"><strong>Dificultad:</strong> <span class="badge-dificultad">${ruta.dificultad}</span></p>

      <p style="margin: 0.4rem 0;"><strong>Distancia:</strong> ${ruta.distancia} | <strong>Tiempo:</strong> ${ruta.tiempoEstimado}</p>

      <p style="color: #555; margin-top: 0.5rem;">${ruta.descripcion}</p>

      ${ruta.ubicacion ? `<small style="color: #777;">📍 ${ruta.ubicacion}</small>` : ''}

    </article>

  `).join('');

}



document.addEventListener("DOMContentLoaded", () => {

  renderizarRutas();

});
