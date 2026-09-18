(() => {
  const CATALOGO_ACTIVIDADES = {
    sendero: {
      nombre: 'Sendero Ñielol',
      categoria: 'Naturaleza',
      imagenes: [
        { url: '../assets/imagenes/Sendero/Sendero_Nielol.jpg', posicion: 'center' },
        { url: '../assets/imagenes/Sendero/sendero2.jpg', posicion: 'center top' },
        { url: '../assets/imagenes/Sendero/sendero3.jpg', posicion: 'center' },
        { url: '../assets/imagenes/Sendero/sendero4.jpg', posicion: 'left top' },
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
      avisoEspecial:
        'Se recomienda ingresar antes de las 16:30 hrs para aprovechar la luz natural.',
    },
    museo: {
      nombre: 'Museo Regional de La Araucanía',
      categoria: 'Cultura',
      imagenes: [
        { url: '../assets/imagenes/Museo/museo.jpg', posicion: 'center' },
        { url: '../assets/imagenes/Museo/museo2.jpg', posicion: 'center top' },
        { url: '../assets/imagenes/Museo/museo3.jpg', posicion: 'center' },
        { url: '../assets/imagenes/Museo/museo4.jpg', posicion: 'left top' },
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
        { url: '../assets/imagenes/Feria/feria.jpg', posicion: 'center' },
        { url: '../assets/imagenes/Feria/feria2.jpg', posicion: 'center top' },
        { url: '../assets/imagenes/Feria/feria3.jpg', posicion: 'center' },
        { url: '../assets/imagenes/Feria/feria4.jpg', posicion: 'left top' },
  ],
      actualizacion: '2026-08-12',
      descripcion:
        'Espacio de intercambio directo con agricultores locales. Encuentra hortalizas orgánicas, productos del campo, artesanías regionales y gastronomía típica del sur de Chile.',
      ubicacion: 'Sector Feria Pinto / Plaza Aníbal Pinto, Temuco',
      duracion: 'Libre (se sugiere 1 a 2 horas)',
      dificultad: 'Muy fácil (paseo urbano)',
      recomendaciones:
        'Llevar bolsas reutilizables o mallas para tus compras y dinero en efectivo.',
      condiciones: 'Uso de espacio público. Respetar los puestos de los productores locales.',
      emprendimiento: 'Certificado por EcoRuta Temuco',
      labelEstado: 'Disponibilidad:',
      estadoLugar: 'Puestos de venta abastecidos y atención normal.',
      avisoEspecial: 'Los mejores productos frescos se encuentran durante la mañana.',
    },
  };

  const urlParams = new URLSearchParams(window.location.search);
  const actividadId = urlParams.get('id');
  const datosActividad = CATALOGO_ACTIVIDADES[actividadId] || CATALOGO_ACTIVIDADES.sendero;

  const asignarTexto = (id, contenido) => {
    const el = document.getElementById(id);
    if (el && contenido) el.textContent = contenido;
  };

  const cargarInformacion = () => {
    asignarTexto('nombreActividad', datosActividad.nombre);
    asignarTexto('descripcion', datosActividad.descripcion);
    asignarTexto('descripcionHero', datosActividad.descripcion);
    asignarTexto('ubicacion', datosActividad.ubicacion);
    asignarTexto('duracion', datosActividad.duracion);
    asignarTexto('dificultad', datosActividad.dificultad);
    asignarTexto('recomendaciones', datosActividad.recomendaciones);
    asignarTexto('condiciones', datosActividad.condiciones);
    asignarTexto('actualizacion', `Última actualización: ${datosActividad.actualizacion}`);
    asignarTexto('estado', '✓ Disponible  ⚠ Requiere reserva previa');
    asignarTexto('avisoEspecial', datosActividad.avisoEspecial);
  };

  const inicializarCarrusel = () => {
    const imgElemento = document.getElementById('imagenActividad');
    if (!imgElemento || !datosActividad.imagenes?.length) return;

    let indiceActual = 0;

    const actualizarImagen = item => {
      imgElemento.style.opacity = '0';
      setTimeout(() => {
        imgElemento.src = typeof item === 'object' ? item.url : item;
        imgElemento.style.objectPosition =
          typeof item === 'object' ? item.posicion || 'center' : 'center';
        imgElemento.alt = datosActividad.nombre;
        imgElemento.style.opacity = '1';
      }, 400);
    };

    actualizarImagen(datosActividad.imagenes[0]);

    setInterval(() => {
      indiceActual = (indiceActual + 1) % datosActividad.imagenes.length;
      actualizarImagen(datosActividad.imagenes[indiceActual]);
    }, 4000);
  };

  document.addEventListener('DOMContentLoaded', () => {
    cargarInformacion();
    inicializarCarrusel();
  });
})();