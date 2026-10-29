// 1. Interface de Ruta Personalizable
export interface Ruta {
  id: number;
  nombre: string;
  categoria: 'Naturaleza' | 'Cultura' | 'Gastronomía';
  ubicacion: string;
  duracionMinutos: number;
  dificultad: 'Fácil' | 'Moderada' | 'Difícil';
  climaIdeal: string;
  personalizada: boolean; // Indica si fue creada por el usuario
}

// Lista base de rutas
export const rutasEcoRuta: Ruta[] = [
  {
    id: 1,
    nombre: "Sendero Ñielol",
    categoria: "Naturaleza",
    ubicacion: "Parque Ñielol, Temuco",
    duracionMinutos: 90,
    dificultad: "Fácil",
    climaIdeal: "Soleado / Nublado",
    personalizada: false
  },
  {
    id: 2,
    nombre: "Museo Regional de La Araucanía",
    categoria: "Cultura",
    ubicacion: "Av. Alemania 084, Temuco",
    duracionMinutos: 120,
    dificultad: "Fácil",
    climaIdeal: "Cualquiera",
    personalizada: false
  }
];

// 2. Función TS 1: Permitir al usuario crear/personalizar su propia ruta (Cumple Pauta)
export function agregarRutaPersonalizada(
  lista: Ruta[],
  nombre: string,
  categoria: 'Naturaleza' | 'Cultura' | 'Gastronomía',
  ubicacion: string,
  duracionMinutos: number,
  dificultad: 'Fácil' | 'Moderada' | 'Difícil'
): Ruta[] {
  const nuevaRuta: Ruta = {
    id: Date.now(),
    nombre,
    categoria,
    ubicacion,
    duracionMinutos,
    dificultad,
    climaIdeal: "A elección",
    personalizada: true
  };
  
  return [...lista, nuevaRuta];
}

// 3. Función TS 2: Filtrar rutas (personalizadas o por categoría) usando la Interface
export function obtenerRutasFiltradas(lista: Ruta[], categoria: string): Ruta[] {
  if (categoria.toLowerCase() === 'todas') return lista;
  if (categoria.toLowerCase() === 'personalizadas') return lista.filter(r => r.personalizada);
  return lista.filter(r => r.categoria.toLowerCase() === categoria.toLowerCase());
}
