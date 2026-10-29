// Interface que define los datos de una ruta
export interface Ruta {
  id: number;
  nombre: string;
  categoria: 'Naturaleza' | 'Cultura' | 'Gastronomía' | 'Sustentable';
  ubicacion: string;
  duracionMinutos: number;
  dificultad: 'Fácil' | 'Moderada' | 'Difícil';
  climaRecomendado: string;
  descripcion: string;
  personalizada: boolean;
}

// Lista base de rutas
export const rutasBase: Ruta[] = [
  {
    id: 1,
    nombre: "Sendero Monumento Natural Cerro Ñielol",
    categoria: "Naturaleza",
    ubicacion: "Prat 01, Temuco",
    duracionMinutos: 90,
    dificultad: "Fácil",
    climaRecomendado: "Parcialmente Nublado / Soleado",
    descripcion: "Caminata por el bosque nativo dentro de Temuco.",
    personalizada: false
  }
];

// Función 1: Agregar ruta manual
export function agregarRutaManual(
  listaActual: Ruta[],
  nombre: string,
  categoria: 'Naturaleza' | 'Cultura' | 'Gastronomía' | 'Sustentable',
  ubicacion: string,
  duracionMinutos: number,
  dificultad: 'Fácil' | 'Moderada' | 'Difícil',
  descripcion: string
): Ruta[] {
  const nuevaRuta: Ruta = {
    id: Date.now(),
    nombre,
    categoria,
    ubicacion,
    duracionMinutos,
    dificultad,
    climaRecomendado: "Variable",
    descripcion,
    personalizada: true
  };
  return [...listaActual, nuevaRuta];
}

// Función 2: Formatear detalle
export function formatearDetalleRuta(ruta: Ruta): string {
  const horas = Math.floor(ruta.duracionMinutos / 60);
  const minutos = ruta.duracionMinutos % 60;
  const tiempoTxt = horas > 0 ? `${horas}h ${minutos}m` : `${minutos} min`;
  return `📍 ${ruta.nombre} (${ruta.categoria}) - Duración: ${tiempoTxt} | Dificultad: ${ruta.dificultad}`;
}
