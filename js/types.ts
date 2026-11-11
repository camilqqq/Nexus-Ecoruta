// Interfaz oficial para la estructura de una Actividad / Ruta
export interface Actividad {
  id: string;
  nombre: string;
  dificultad?: string;
  distancia?: string;
  desnivel?: string;
  tiempoEstimado?: string;
  introduccion?: string;
  horarioAtencion?: string;
  sectores?: string[];
  tarifas?: string[];
  tipoTerreno?: string;
  tipoRuta?: string;
  altitudMaxima?: string;
  ubicacion: string;
  mapaWikiloc?: string;
  imagenes: string[];
}
