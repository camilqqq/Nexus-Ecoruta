const actividades = {
  sendero: {
    nombre: 'Sendero Ñielol',
    categoria: 'Naturaleza',
    imagenes: [
      { url: 'assets/Img/Sendero/Sendero_Nielol.jpg', posicion: 'center' },
      { url: 'assets/Img/Sendero/sendero2.jpg', posicion: 'center top' },
      { url: 'assets/Img/Sendero/sendero3.jpg', posicion: 'center' },
      { url: 'assets/Img/Sendero/sendero4.jpg', posicion: 'left top' },
    ],
    actualizacion: '2026-08-10',
    descripcion:
      'Caminata guiada por la selva valdiviana dentro del Monumento Natural Cerro Ñielol. Un recorrido rodeado de flora nativa, aves locales y vistas panorámicas de Temuco desde sus miradores.',
    ubicacion: 'Monumento Natural Cerro Ñielol, Temuco',
    duracion: '1 hora 30 min (recorrido completo)',
    dificultad: 'Fácil (apto para familias y adultos mayores)',
    recomendaciones:
      'Llevar zapatillas con buen agarre, botella de agua reutilizable y cortaviento.',
    condiciones: 'Prohibido fumar, encender fuego y dejar residuos en el parque.',
    emprendimiento: 'Certificado por EcoRuta Temuco',
    labelEstado: 'Estado de ruta:',
    estadoLugar: 'Sendero habilitado y transitable.',
    avisoEspecial: 'Se recomienda ingresar antes de las 16:30 hrs para aprovechar la luz natural.',
  },

  museo: {
    nombre: 'Museo Regional de La Araucanía',
    categoria: 'Cultura',
    imagenes: [
      { url: 'assets/Img/Museo/museo.jpg', posicion: 'center' },
      { url: 'assets/Img/Museo/museo2.jpg', posicion: 'center top' },
      { url: 'assets/Img/Museo/museo3.jpg', posicion: 'center' },
      { url: 'assets/Img/Museo/museo4.jpg', posicion: 'left top' },
    ],
    actualizacion: '2026-08-06',
    descripcion:
      'Recorrido cultural por el patrimonio histórico, arqueológico y la cosmovisión del pueblo Mapuche en una casona patrimonial declarada Monumento Histórico.',
    ubicacion: 'Av. Alemania 084, Temuco',
    duracion: '45 minutos a 1 hora',
    dificultad: 'Muy fácil (acceso peatonal adaptado)',
    recomendaciones: 'Mantener el celular en silencio y no usar flash al tomar fotografías.',
    condiciones: 'Entrada gratuita. Se requiere registro voluntario en la recepción.',
    emprendimiento: 'Certificado por EcoRuta Temuco',
    labelEstado: 'Exposiciones:',
    estadoLugar: 'Salas abiertas y exposiciones temporales disponibles.',
    avisoEspecial: 'Atención de martes a viernes de 09:30 a 17:30 hrs. Cerrado los lunes.',
  },

  feria: {
    nombre: 'Feria Agroecológica',
    categoria: 'Gastronomía',
    imagenes: [
      { url: 'assets/Img/Feria/feria.jpg', posicion: 'center' },
      { url: 'assets/Img/Feria/feria2.jpg', posicion: 'center top' },
      { url: 'assets/Img/Feria/feria3.jpg', posicion: 'center' },
      { url: 'assets/Img/Feria/feria4.jpg', posicion: 'left top' },
    ],
    actualizacion: '2026-08-12',
    descripcion:
      'Espacio de intercambio directo con agricultores locales. Encuentra hortalizas orgánicas, productos del campo, artesanías regionales y gastronomía típica del sur de Chile.',
    ubicacion: 'Sector Feria Pinto / Plaza Aníbal Pinto, Temuco',
    duracion: 'Libre (se sugiere 1 a 2 horas)',
    dificultad: 'Muy fácil (paseo urbano)',
    recomendaciones: 'Llevar bolsas reutilizables o mallas para tus compras y dinero en efectivo.',
    condiciones: 'Uso de espacio público. Respetar los puestos de los productores locales.',
    emprendimiento: 'Certificado por EcoRuta Temuco',
    labelEstado: 'Disponibilidad:',
    estadoLugar: 'Puestos de venta abastecidos y atención normal.',
    avisoEspecial: 'Los mejores productos frescos se encuentran durante la mañana.',
  },
};

const parametros = new URLSearchParams(window.location.search);
const id = parametros.get('id');

const actividad = actividades[id] || actividades['sendero'];

if (actividad) {
  document.getElementById('nombreActividad').textContent = actividad.nombre;

  const imgElemento = document.getElementById('imagenActividad');

  function cambiarImagenTransicion(objImg) {
    imgElemento.style.opacity = '0';

    setTimeout(() => {
      if (typeof objImg === 'object' && objImg !== null) {
        imgElemento.src = objImg.url;
        imgElemento.style.objectPosition = objImg.posicion || 'center';
      } else {
        imgElemento.src = objImg;
        imgElemento.style.objectPosition = 'center';
      }
      imgElemento.style.opacity = '1';
    }, 400);
  }

  // Carga inicial
  cambiarImagenTransicion(actividad.imagenes[0]);
  imgElemento.alt = actividad.nombre;

  let indiceImagen = 0;
  setInterval(function () {
    indiceImagen = (indiceImagen + 1) % actividad.imagenes.length;
    cambiarImagenTransicion(actividad.imagenes[indiceImagen]);
  }, 4000);

  // Carga de textos generales
  document.getElementById('actualizacion').textContent =
    'Última actualización: ' + actividad.actualizacion;
  document.getElementById('descripcion').textContent = actividad.descripcion;
  document.getElementById('ubicacion').textContent = actividad.ubicacion;
  document.getElementById('duracion').textContent = actividad.duracion;
  document.getElementById('dificultad').textContent = actividad.dificultad;
  document.getElementById('recomendaciones').textContent = actividad.recomendaciones;
  document.getElementById('condiciones').textContent = actividad.condiciones;
  document.getElementById('emprendimiento').textContent = actividad.emprendimiento;
  document.getElementById('estado').textContent = '✓ Disponible  ⚠ Requiere reserva previa';

  // Carga de la información útil dinámica
  const elemLabel = document.getElementById('labelEstado');
  const elemEstado = document.getElementById('estadoLugar');
  const elemAviso = document.getElementById('avisoEspecial');

  if (elemLabel) elemLabel.textContent = actividad.labelEstado;
  if (elemEstado) elemEstado.textContent = actividad.estadoLugar;
  if (elemAviso) elemAviso.textContent = actividad.avisoEspecial;
}

// Función para obtener el clima real de Temuco
async function obtenerClimaReal() {
  const elementoClima = document.getElementById('climaActual');
  if (!elementoClima) return;

  const latitud = -38.7396;
  const longitud = -72.5984;
  const urlAPI = `https://api.open-meteo.com/v1/forecast?latitude=${latitud}&longitude=${longitud}&current_weather=true`;

  try {
    const respuesta = await fetch(urlAPI);
    const datos = await respuesta.json();
    const clima = datos.current_weather;

    const temperatura = Math.round(clima.temperature);
    const descripcion = traducirCodigoClima(clima.weathercode);

    elementoClima.textContent = `${descripcion}, ${temperatura} °C.`;
  } catch (error) {
    console.error('Error al obtener el clima:', error);
    elementoClima.textContent = 'Parcialmente nublado, 14 °C (Dato estimado).';
  }
}

function traducirCodigoClima(codigo) {
  if (codigo === 0) return 'Despejado';
  if (codigo >= 1 && codigo <= 3) return 'Parcialmente nublado';
  if (codigo >= 45 && codigo <= 48) return 'Niebla';
  if (codigo >= 51 && codigo <= 55) return 'Llovizna';
  if (codigo >= 61 && codigo <= 65) return 'Lluvia';
  if (codigo >= 80 && codigo <= 82) return 'Chubascos';
  if (codigo >= 95) return 'Tormenta eléctrica';
  return 'Templado';
}

obtenerClimaReal();
