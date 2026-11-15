const detalleBackup = {
  "1": {
    id: "1",
    nombre: "Sendero Ñielol",
    categoria: "Naturaleza",
    tipo:"RUTA",
    ubicacion: "Parque Nacional Cerro Ñielol, Temuco",
    descripcion: "Hermoso sendero natural rodeado de flora y fauna nativa de la Región de La Araucanía. Ideal para caminatas familiares y observación de aves.",
    imagenes: [
      "../assets/imagenes/Sendero/Sendero_Nielol.jpg",
      "../assets/imagenes/Sendero/Sendero_Nielol2.jpg",
      "../assets/imagenes/Sendero/Sendero_Nielol3.jpg",
      "../assets/imagenes/Sendero/Sendero_Nielol4.jpg"
    ],
    detalles: {
      duracion: "1 hr 30 min",
      dificultad: "Moderada",
      distancia: "2.5 km",
      desnivel: "+120 m",
      accesibilidad: "Apto para personas con movilidad reducida en tramos iniciales.",
      horarios: "Martes a Domingo: 08:30 - 17:30 hrs"
    },
    mapaIframe: '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1_V34G2jycQVduIN1hsLN_wdnFvSbsqs&ehbc=2E312F" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    itinerario: [
      { hora: "08:30", actividad: "Registro en portería e inicio de caminata." },
      { hora: "09:15", actividad: "Llegada al Mirador Agua Santa." },
      { hora: "10:00", actividad: "Retorno por el sendero los Patagua." }
    ]
  },
  "2": {
    id: "2",
    nombre: "Museo Regional de La Araucanía",
    categoria: "Cultura",
    tipo: "ACTIVIDAD",
    ubicacion: "Av. Alemania 0842, Temuco",
    descripcion: "Espacio cultural que resguarda la historia, arqueología y etnografía de los pueblos originarios y la colonización en La Araucanía.",
    imagenes: [
      "../assets/imagenes/Museo/museo.jpg",
      "../assets/imagenes/Museo/museo2.jpg",
      "../assets/imagenes/Museo/museo3.jpg",
      "../assets/imagenes/Museo/museo4.jpg"
    ],
    detalles: {
      accesibilidad: "Rampas y ascensores totalmente habilitados.",
      horarios: "Martes a viernes de 09:30 a 17:30 hrs. Sábados y domingos de 10:00 a 17:00 hrs.",
      tipoTerreno: "Piso cerámico, parqué y senderos adosados de piedra",
      tipoRuta: "Recorrido guiado / Salón y parque urbano"
    },
    sectors: [
      "Galería Principal de Historia Regional",
      "Sala de Arqueología y Cosmovisión Mapuche",
      "Jardín Botánico Palacio Thiers"
    ],
    tarifas: [
      { tipo: "Público General", precio: "Entrada liberada / Gratuita" },
      { tipo: "Delegaciones Escolares", precio: "Gratuito previa reserva previa" }
    ],
    mapaIframe: '<iframe src="https://maps.google.com/maps?saddr=Plaza+Anibal+Pinto+Temuco&daddr=Avenida+Alemania+Temuco+to:Museo+Regional+de+La+Araucania+Av+Alemania+0842+Temuco&dirflg=w&output=embed" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  },
  "3": {
    id: "3",
    nombre: "Feria Agroecológica",
    categoria: "Gastronomía",
    tipo: "ACTIVIDAD",
    ubicacion: "Feria Pinto, Av. Balmaceda, Temuco",
    descripcion: "Descubre un espacio lleno de sabores, colores y tradiciones de La Araucanía. Encuentra productos frescos de la tierra, hortalizas locales, alimentos orgánicos y artesanías con identidad regional, ofrecidos directamente por pequeños productores y emprendedores de la zona. Una experiencia para disfrutar, conocer y valorar lo nuestro.",
    imagenes: [
      "../assets/imagenes/Feria/feria.jpg",
      "../assets/imagenes/Feria/feria2.jpg",
      "../assets/imagenes/Feria/feria3.jpg",
      "../assets/imagenes/Feria/feria4.jpg"
    ],
    detalles: {
      accesibilidad: "Acceso a nivel de calle totalmente accesible.",
      horarios: "Lunes a domingo de 08:00 a 19:00 hrs.",
      tipoTerreno: "Baldosa cívica, adoquines y pasajes techados",
      tipoRuta: "Paseo peatonal urbano",
      desnivelExtra: "0 m",
      altitudMaxima: "~115 m s.n.m"
    },
    sectores: [
      "Paseo de Productores Agroecológicos",
      "Sector Muestra de Artesanía en Madera y Llama",
      "Patio de Comidas Tradicionales"
    ],
    tarifas: [
      { tipo: "Acceso", precio: "Acceso libre y gratuito para todo espectador" }
    ],
    mapaIframe: '<iframe src="https://maps.google.com/maps?saddr=Estacion+de+Ferrocarriles+Temuco&daddr=Feria+Pinto+Balmaceda+Temuco+to:Mercado+Modelo+Temuco&dirflg=w&output=embed" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  },
  "4": {
    id: "4",
    nombre: "Parque Isla Cautín",
    categoria: "Naturaleza",
    tipo: "RUTA",
    ubicacion: "Av. Los Poetas, Temuco",
    descripcion: "Gran pulmón verde urbano a orillas del Río Cautín con ciclovías, plazas de juegos, zonas de picnic y áreas de conservación vegetal.",
    imagenes: [
      "../assets/imagenes/Isla_Cautin/Isla1.jpg",
      "../assets/imagenes/Isla_Cautin/Isla2.jpg",
      "../assets/imagenes/Isla_Cautin/Isla3.jpg",
      "../assets/imagenes/Isla_Cautin/Isla4.jpg"
    ],
    detalles: {
      duracion: "1-2 hrs",
      dificultad: "Fácil",
      distancia: "3.0 km",
      accesibilidad: "Rutas pavimentadas y baños adaptados.",
      horarios: "Lunes a Domingo: 08:30 - 20:00 hrs"
    },
    mapaIframe: '<iframe src="https://maps.google.com/maps?saddr=Acceso+Parque+Isla+Cautin+Temuco&daddr=Memorial+Derechos+Humanos+Isla+Cautin+to:Humedal+Parque+Isla+Cautin+Temuco&dirflg=w&output=embed" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>'
  },
  "5": {
    id: "5",
    nombre: "Parque Nacional Conguillío",
    categoria: "Naturaleza",
    tipo: "RUTA",
    ubicacion: "Melipeuco / Curacautín, Región de La Araucanía",
    descripcion: "Reconocido mundialmente por sus bosques milenarios de araucarias, lagunas cordilleranas y la imponente presencia del Volcán Llaima. Un imperdible del turismo sustentable en La Araucanía.",
    imagenes: [
      "../assets/imagenes/Conguillio/Conguillio1.jpg",
      "../assets/imagenes/Conguillio/Conguillio2.jpg",
      "../assets/imagenes/Conguillio/Conguillio3.jpg",
      "../assets/imagenes/Conguillio/Conguillio4.jpg"
    ],
    detalles: {
      duracion: "Día completo",
      dificultad: "Moderada",
      distancia: "10 km (Sendero Sierra Nevada)",
      desnivel: "+450 m",
      accesibilidad: "Sendero inclusivo adaptado en sector Laguna Captrén.",
      horarios: "Ingreso: 08:30 a 14:00 hrs. Salida: hasta las 18:00 hrs."
    },
    tarifas: [
      { tipo: "Niños/as (-11 años) y Adulto Mayor (+60 años)", precio: "Gratis" },
      { tipo: "Jóvenes chilenos (12 a 17 años)", precio: "$2.700" },
      { tipo: "Adulto chileno (18 a 59 años)", precio: "$4.700" },
      { tipo: "Extranjeros", precio: "$9.300" }
    ],
    mapaIframe: '<iframe src="https://www.google.com/maps/d/u/0/embed?mid=1J9507tFzl7qB0ZLBeSsNB4FFUjDWfGk&ehbc=2E312F" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    itinerario: [
      { hora: "08:30", actividad: "Ingreso por Caseta de Control CONAF." },
      { hora: "09:30", actividad: "Caminata por Sendero Sierra Nevada entre araucarias." },
      { hora: "12:30", actividad: "Mirador Laguna Conguillío y Volcán Llaima." },
      { hora: "14:00", actividad: "Almuerzo en área habilitada." },
      { hora: "17:30", actividad: "Retorno y salida del parque." }
    ]
  },
  "6": {
    id: "6",
    nombre: "Parque Nacional Villarrica",
    categoria: "Naturaleza",
    tipo: "RUTA",
    ubicacion: "Pucón / Villarrica, Región de La Araucanía",
    descripcion: "Dominado por el imponente Volcán Villarrica (Rukapillán), ofrece senderos entre escoriales volcánicos, bosques de lengas y araucarias, cuevas volcánicas y vistas panorámicas a los lagos cordilleranos.",
    imagenes: [
      "../assets/imagenes/Villarrica/villarrica.jpg",
      "../assets/imagenes/Villarrica/villarrica2.jpg",
      "../assets/imagenes/Villarrica/villarrica3.jpg",
      "../assets/imagenes/Villarrica/villarrica4.jpg"
    ],
    detalles: {
      duracion: "4-5 hrs",
      dificultad: "Moderada",
      distancia: "8.5 km (Sendero Los Cráteres)",
      desnivel: "+420 m",
      accesibilidad: "Acceso vehicular hasta sector Rucapillán; senderos de montaña con pendiente.",
      horarios: "Lunes a Domingo: 08:30 - 18:00 hrs"
    },
    tarifas: [
      { tipo: "Niños/as (-11 años) y Adulto Mayor (+60 años)", precio: "Gratis" },
      { tipo: "Jóvenes chilenos (12 a 17 años)", precio: "$2.700" },
      { tipo: "Adulto chileno (18 a 59 años)", precio: "$4.700" },
      { tipo: "Extranjeros", precio: "$9.300" }
    ],
    mapaIframe: '<iframe src="https://maps.google.com/maps?saddr=Porteria+Rucapillan+Parque+Nacional+Villarrica&daddr=Cuevas+Volcanicas+Pucon+to:Sendero+Mirador+Los+Crateres+Villarrica&dirflg=w&output=embed" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    itinerario: [
      { hora: "08:30", actividad: "Registro en guardaparques sector Rucapillán." },
      { hora: "09:30", actividad: "Inicio de caminata por Sendero Mirador Los Cráteres." },
      { hora: "11:30", actividad: "Observación panorámica de volcanes Lanín, Quetrupillán y Llaima." },
      { hora: "13:30", actividad: "Descenso y retorno a la base." }
    ]
  },
  "7": {
    id: "7",
    nombre: "Parque Nacional Huerquehue",
    categoria: "Naturaleza",
    tipo: "RUTA",
    ubicacion: "Sector Paillaco, Pucón, Región de La Araucanía",
    descripcion: "Famoso por su circuito de lagunas cristalinas de altura (Chico, Toro y Verde) rodeadas de bosques milenarios de araucarias, coihues y cascadas escondidas en la precordillera andina.",
    imagenes: [
      "../assets/imagenes/Huerquehue/huerquehue.jpg",
      "../assets/imagenes/Huerquehue/huerquehue2.jpg",
      "../assets/imagenes/Huerquehue/huerquehue3.jpg",
      "../assets/imagenes/Huerquehue/huerquehue4.jpg"
    ],
    detalles: {
      duracion: "5-6 hrs",
      dificultad: "Moderada",
      distancia: "11.5 km (Sendero Los Lagos)",
      desnivel: "+580 m",
      accesibilidad: "Sendero de montaña con escalones de madera y pendientes pronunciadas.",
      horarios: "Lunes a Domingo: 08:30 - 17:30 hrs (Ingreso hasta las 14:00 hrs)"
    },
    tarifas: [
      { tipo: "Niños/as (-11 años) y Adulto Mayor (+60 años)", precio: "Gratis" },
      { tipo: "Jóvenes chilenos (12 a 17 años)", precio: "$2.700" },
      { tipo: "Adulto chileno (18 a 59 años)", precio: "$4.700" },
      { tipo: "Extranjeros", precio: "$9.300" }
    ],
    mapaIframe: '<iframe src="https://maps.google.com/maps?saddr=Porteria+Parque+Nacional+Huerquehue+Pucon&daddr=Lago+Tinquilco+Pucon+to:Lago+Chico+Huerquehue+to:Lago+Toro+Huerquehue+to:Lago+Verde+Huerquehue&dirflg=w&output=embed" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    itinerario: [
      { hora: "08:30", actividad: "Ingreso y registro en administración Lago Tinquilco." },
      { hora: "10:00", actividad: "Mirador Lago Tinquilco y Salto Nido de Águila." },
      { hora: "11:30", actividad: "Recorrido por Lago Chico, Lago Toro y Lago Verde." },
      { hora: "14:30", actividad: "Retorno hacia portería." }
    ]
  },
  "8": {
    id: "8",
    nombre: "Reserva Nacional Malalcahuello",
    categoria: "Naturaleza",
    tipo: "RUTA",
    ubicacion: "Curacautín, Región de La Araucanía",
    descripcion: "Ubicada en las laderas del Volcán Lonquimay y dentro del Geoparque Kütralkura, combina escoriales volcánicos recientes, cráteres como el Navidad y extensos bosques de araucarias.",
    imagenes: [
      "../assets/imagenes/Malalcahuello/malalcahuello.jpg",
      "../assets/imagenes/Malalcahuello/malalcahuello2.jpg",
      "../assets/imagenes/Malalcahuello/malalcahuello3.jpg",
      "../assets/imagenes/Malalcahuello/malalcahuello4.jpg"
    ],
    detalles: {
      duracion: "3-4 hrs",
      dificultad: "Moderada",
      distancia: "7.0 km (Sendero Cráter Navidad)",
      desnivel: "+350 m",
      accesibilidad: "Acceso vehicular hasta base Corralco; sendero volcánico de arena y roca.",
      horarios: "Lunes a Domingo: 08:30 - 18:00 hrs"
    },
    tarifas: [
      { tipo: "Niños/as (-11 años) y Adulto Mayor (+60 años)", precio: "Gratis" },
      { tipo: "Adulto chileno (18 a 59 años)", precio: "$3.700" },
      { tipo: "Extranjeros", precio: "$7.300" }
    ],
    mapaIframe: '<iframe src="https://maps.google.com/maps?saddr=Administracion+CONAF+Reserva+Nacional+Malalcahuello&daddr=Centro+de+Esqui+Corralco+to:Crater+Navidad+Lonquimay&dirflg=w&output=embed" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    itinerario: [
      { hora: "09:00", actividad: "Ingreso por sector Piedra Santa." },
      { hora: "10:00", actividad: "Ascenso por sendero volcánico hacia Cráter Navidad." },
      { hora: "11:30", actividad: "Vista panorámica del valle de Malalcahuello y Sierra Nevada." },
      { hora: "13:00", actividad: "Regreso a zona de picnic." }
    ]
  },
  "9": {
    id: "9",
    nombre: "Parque Nacional Nahuelbuta",
    categoria: "Naturaleza",
    tipo: "RUTA",
    ubicacion: "Cordillera de Nahuelbuta, Angol, Malleco",
    descripcion: "El punto más alto de la Cordillera de la Costa en La Araucanía, hogar de araucarias milenarias costeras y el emblemático mirador Piedra del Águila, desde donde se divisa desde el océano Pacífico hasta los volcanes andinos.",
    imagenes: [
      "../assets/imagenes/Nahuelbuta/nahuelbuta.jpg",
      "../assets/imagenes/Nahuelbuta/nahuelbuta2.jpg",
      "../assets/imagenes/Nahuelbuta/nahuelbuta3.jpg",
      "../assets/imagenes/Nahuelbuta/nahuelbuta4.jpg"
    ],
    detalles: {
      duracion: "2-3 hrs",
      dificultad: "Fácil",
      distancia: "4.5 km (Sendero Piedra del Águila)",
      desnivel: "+180 m",
      accesibilidad: "Sendero amplio entre bosques de lenga, coihue y araucaria.",
      horarios: "Lunes a Domingo: 08:30 - 18:00 hrs"
    },
    tarifas: [
      { tipo: "Niños/as (-11 años) y Adulto Mayor (+60 años)", precio: "Gratis" },
      { tipo: "Adulto chileno (18 a 59 años)", precio: "$3.700" },
      { tipo: "Extranjeros", precio: "$7.300" }
    ],
    mapaIframe: '<iframe src="https://maps.google.com/maps?saddr=Administracion+Pehuenco+Parque+Nacional+Nahuelbuta&daddr=Sendero+Casa+de+Piedra+Nahuelbuta+to:Piedra+del+Aguila+Nahuelbuta&dirflg=w&output=embed" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    itinerario: [
      { hora: "09:30", actividad: "Registro en guardaparques sector Pehuenco." },
      { hora: "10:15", actividad: "Caminata interpretativa entre araucarias costeras." },
      { hora: "11:30", actividad: "Llegada al mirador rocoso Piedra del Águila (1.379 m s.n.m.)." },
      { hora: "12:30", actividad: "Retorno por circuito circular." }
    ]
  },
  "10": {
    id: "10",
    nombre: "Parque Nacional Tolhuaca",
    categoria: "Naturaleza",
    tipo: "RUTA",
    ubicacion: "Victoria / Curacautín, Región de La Araucanía",
    descripcion: "Santuario precordillerano caracterizado por la tranquila Laguna Malleco, el imponente Salto de la Culebra y bosques vírgenes de robles, raulíes y araucarias con escasa intervención humana.",
    imagenes: [
      "../assets/imagenes/Tolhuaca/tolhuaca.jpg",
      "../assets/imagenes/Tolhuaca/tolhuaca2.jpg",
      "../assets/imagenes/Tolhuaca/tolhuaca3.jpg",
      "../assets/imagenes/Tolhuaca/tolhuaca4.jpg"
    ],
    detalles: {
      duracion: "3 hrs",
      dificultad: "Fácil",
      distancia: "5.2 km (Sendero Laguna Verde y Salto de la Culebra)",
      desnivel: "+210 m",
      accesibilidad: "Tramos planos bordeando la Laguna Malleco aptos para toda la familia.",
      horarios: "Lunes a Domingo: 08:30 - 17:30 hrs"
    },
    tarifas: [
      { tipo: "Niños/as (-11 años) y Adulto Mayor (+60 años)", precio: "Gratis" },
      { tipo: "Adulto chileno (18 a 59 años)", precio: "$3.700" },
      { tipo: "Extranjeros", precio: "$7.300" }
    ],
    mapaIframe: '<iframe src="https://maps.google.com/maps?saddr=Laguna+Malleco+Parque+Nacional+Tolhuaca&daddr=Salto+de+la+Culebra+Tolhuaca+to:Laguna+Verde+Tolhuaca&dirflg=w&output=embed" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    itinerario: [
      { hora: "09:00", actividad: "Ingreso y paseo por orilla de Laguna Malleco." },
      { hora: "10:15", actividad: "Caminata hacia mirador Salto de la Culebra." },
      { hora: "11:30", actividad: "Avistamiento de aves acuáticas y carpinteros negros." },
      { hora: "12:30", actividad: "Retorno a sector de merienda." }
    ]
  },
  "11": {
    id: "11",
    nombre: "Valle de la Luna",
    categoria: "Naturaleza",
    tipo: "RUTA",
    ubicacion: "Reserva Nacional Los Flamencos, San Pedro de Atacama, Antofagasta",
    descripcion: "Paisaje desértico único moldeado durante milenios por el viento y el agua en la Cordillera de la Sal, con dunas gigantes, anfiteatros naturales y afloramientos salinos de aspecto lunar.",
    imagenes: [
      "../assets/imagenes/Valle_Luna/valle_luna.jpg",
      "../assets/imagenes/Valle_Luna/valle_luna2.jpg",
      "../assets/imagenes/Valle_Luna/valle_luna3.jpg",
      "../assets/imagenes/Valle_Luna/valle_luna4.jpg"
    ],
    detalles: {
      duracion: "3-4 hrs",
      dificultad: "Fácil",
      distancia: "6.0 km (Circuito Duna Mayor y Mirador Achaches)",
      desnivel: "+150 m",
      accesibilidad: "Acceso vehicular por ruta interior demarcada; senderos peatonales señalizados.",
      horarios: "Lunes a Domingo: 08:00 - 18:00 hrs"
    },
    tarifas: [
      { tipo: "Público General Nacional", precio: "$5.400" },
      { tipo: "Estudiantes / Adulto Mayor Nacional", precio: "$2.700" },
      { tipo: "Extranjeros", precio: "$10.800" }
    ],
    mapaIframe: '<iframe src="https://maps.google.com/maps?saddr=Acceso+Valle+de+la+Luna+San+Pedro+de+Atacama&daddr=Duna+Mayor+Valle+de+la+Luna+to:Anfiteatro+Valle+de+la+Luna+to:Tres+Marias+Valle+de+la+Luna&dirflg=w&output=embed" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    itinerario: [
      { hora: "15:00", actividad: "Ingreso por control sector Cordillera de la Sal." },
      { hora: "15:45", actividad: "Caminata por sendero Duna Mayor y Anfiteatro." },
      { hora: "17:00", actividad: "Visita a formación Tres Marías y mina de sal." },
      { hora: "18:00", actividad: "Contemplación del atardecer sobre los volcanes Licancabur y Lascar." }
    ]
  },
  "12": {
    id: "12",
    nombre: "Parque Nacional La Campana",
    categoria: "Naturaleza",
    tipo: "RUTA",
    ubicacion: "Granizo / Cajón Grande, Olmué, Región de Valparaíso",
    descripcion: "Reserva de la Biósfera que protege uno de los últimos bosques naturales de palma chilena (Jubaea chilensis) y el histórico sendero recorrido por Charles Darwin hasta la cumbre del Cerro La Campana.",
    imagenes: [
      "../assets/imagenes/La_Campana/campana.jpg",
      "../assets/imagenes/La_Campana/campana2.jpg",
      "../assets/imagenes/La_Campana/campana3.jpg",
      "../assets/imagenes/La_Campana/campana4.jpg"
    ],
    detalles: {
      duracion: "4-5 hrs",
      dificultad: "Moderada",
      distancia: "9.0 km (Sendero El Andinista / Palmar de Ocoa)",
      desnivel: "+620 m",
      accesibilidad: "Sendero inclusivo corto en sector Granizo; ruta de cumbre exige buen calzado.",
      horarios: "Martes a Domingo: 08:30 - 17:30 hrs"
    },
    tarifas: [
      { tipo: "Niños/as (-11 años) y Adulto Mayor (+60 años)", precio: "Gratis" },
      { tipo: "Adulto chileno (18 a 59 años)", precio: "$3.700" },
      { tipo: "Extranjeros", precio: "$7.300" }
    ],
    mapaIframe: '<iframe src="https://maps.google.com/maps?saddr=Sector+Granizo+Parque+Nacional+La+Campana&daddr=Sector+La+Mina+La+Campana+to:Cumbre+Cerro+La+Campana+Olmue&dirflg=w&output=embed" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    itinerario: [
      { hora: "08:30", actividad: "Ingreso por sector Granizo o Palmar de Ocoa." },
      { hora: "10:00", actividad: "Recorrido entre palmas chilenas centenarias y bosque esclerófilo." },
      { hora: "11:45", actividad: "Descanso en sector La Mina / Mirador del Valle." },
      { hora: "13:30", actividad: "Descenso hacia portería." }
    ]
  },
  "13": {
    id: "13",
    nombre: "Parque Nacional Radal Siete Tazas",
    categoria: "Naturaleza",
    tipo: "RUTA",
    ubicacion: "Parque Inglés, Molina, Región del Maule",
    descripcion: "Espectacular sucesión de siete pozones y cascadas de aguas turquesas esculpidas en roca basáltica por el río Claro, acompañado de los saltos La Leona y Velo de la Novia.",
    imagenes: [
      "../assets/imagenes/Siete_Tazas/siete_tazas.jpg",
      "../assets/imagenes/Siete_Tazas/siete_tazas2.jpg",
      "../assets/imagenes/Siete_Tazas/siete_tazas3.jpg",
      "../assets/imagenes/Siete_Tazas/siete_tazas4.jpg"
    ],
    detalles: {
      duracion: "2-3 hrs",
      dificultad: "Fácil",
      distancia: "3.5 km (Circuito Miradores Siete Tazas y Salto La Leona)",
      desnivel: "+140 m",
      accesibilidad: "Pasarelas de madera universales hasta el mirador principal de las Siete Tazas.",
      horarios: "Lunes a Domingo: 08:30 - 18:00 hrs"
    },
    tarifas: [
      { tipo: "Niños/as (-11 años) y Adulto Mayor (+60 años)", precio: "Gratis" },
      { tipo: "Adulto chileno (18 a 59 años)", precio: "$4.700" },
      { tipo: "Extranjeros", precio: "$9.300" }
    ],
    mapaIframe: '<iframe src="https://maps.google.com/maps?saddr=Salto+Velo+de+la+Novia+Molina&daddr=Mirador+Siete+Tazas+Molina+to:Salto+La+Leona+Radal+Siete+Tazas&dirflg=w&output=embed" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    itinerario: [
      { hora: "09:30", actividad: "Mirador Salto Velo de la Novia." },
      { hora: "10:15", actividad: "Recorrido por pasarelas de las Siete Tazas." },
      { hora: "11:15", actividad: "Sendero hacia Salto La Leona." },
      { hora: "12:30", actividad: "Retorno a sector Parque Inglés." }
    ]
  },
  "14": {
    id: "14",
    nombre: "Saltos del Petrohué",
    categoria: "Naturaleza",
    tipo: "RUTA",
    ubicacion: "Parque Nacional Vicente Pérez Rosales, Puerto Varas, Los Lagos",
    descripcion: "Impresionantes caídas de agua color esmeralda que fluyen sobre antiguos cauces de lava volcánica, con el cono nevado del Volcán Osorno como telón de fondo.",
    imagenes: [
      "../assets/imagenes/Petrohue/petrohue.jpg",
      "../assets/imagenes/Petrohue/petrohue2.jpg",
      "../assets/imagenes/Petrohue/petrohue3.jpg",
      "../assets/imagenes/Petrohue/petrohue4.jpg"
    ],
    detalles: {
      duracion: "1 hr 30 min",
      dificultad: "Fácil",
      distancia: "1.8 km (Sendero Los Enamorados y Miradores)",
      desnivel: "+45 m",
      accesibilidad: "Pasarelas completamente accesibles para sillas de ruedas y coches.",
      horarios: "Lunes a Domingo: 09:00 - 18:30 hrs"
    },
    tarifas: [
      { tipo: "Niños/as (-11 años) y Adulto Mayor (+60 años)", precio: "Gratis" },
      { tipo: "Adulto chileno (18 a 59 años)", precio: "$4.700" },
      { tipo: "Extranjeros", precio: "$9.300" }
    ],
    mapaIframe: '<iframe src="https://maps.google.com/maps?saddr=Acceso+Saltos+del+Petrohue+Puerto+Varas&daddr=Mirador+Saltos+del+Petrohue+to:Sendero+Los+Enamorados+Petrohue&dirflg=w&output=embed" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    itinerario: [
      { hora: "10:00", actividad: "Ingreso y recorrido por pasarelas sobre los rápidos del río Petrohué." },
      { hora: "10:40", actividad: "Mirador principal con vista al Volcán Osorno." },
      { hora: "11:10", actividad: "Caminata suave por Sendero Los Enamorados entre bosque siempreverde." }
    ]
  },
  "15": {
    id: "15",
    nombre: "Parque Nacional Chiloé",
    categoria: "Naturaleza",
    tipo: "RUTA",
    ubicacion: "Sector Chanquín, Cucao, Chonchi, Región de Los Lagos",
    descripcion: "Bosque templado lluvioso siempreverde que se encuentra con las playas abiertas del océano Pacífico, destacando el místico Sendero El Tepual sobre pasarelas de madera entre tepúes y helechos.",
    imagenes: [
      "../assets/imagenes/Chiloe/chiloe.jpg",
      "../assets/imagenes/Chiloe/chiloe2.jpg",
      "../assets/imagenes/Chiloe/chiloe3.jpg",
      "../assets/imagenes/Chiloe/chiloe4.jpg"
    ],
    detalles: {
      duracion: "2 hrs",
      dificultad: "Fácil",
      distancia: "2.4 km (Sendero El Tepual + Dunas de Cucao)",
      desnivel: "+35 m",
      accesibilidad: "Pasarelas de madera elevadas sobre el bosque húmedo.",
      horarios: "Lunes a Domingo: 09:00 - 17:30 hrs"
    },
    tarifas: [
      { tipo: "Niños/as (-11 años) y Adulto Mayor (+60 años)", precio: "Gratis" },
      { tipo: "Adulto chileno (18 a 59 años)", precio: "$3.700" },
      { tipo: "Extranjeros", precio: "$7.300" }
    ],
    mapaIframe: '<iframe src="https://maps.google.com/maps?saddr=Administracion+Chanquin+Parque+Nacional+Chiloe&daddr=Sendero+El+Tepual+Chiloe+to:Playa+de+Cucao+Chiloe&dirflg=w&output=embed" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    itinerario: [
      { hora: "10:00", actividad: "Centro de Información Ambiental en Chanquín." },
      { hora: "10:30", actividad: "Recorrido por pasarelas de Sendero El Tepual." },
      { hora: "11:30", actividad: "Caminata hacia el mirador de dunas y playa de Cucao." }
    ]
  },
  "16": {
    id: "16",
    nombre: "Parque Nacional Queulat",
    categoria: "Naturaleza",
    tipo: "RUTA",
    ubicacion: "Carretera Austral, Puyuhuapi, Región de Aysén",
    descripcion: "Joya de la Carretera Austral famoso por su Ventisquero Colgante, cuyas cascadas de deshielo caen cientos de metros hacia una laguna glaciar rodeada de selva fría patagónica.",
    imagenes: [
      "../assets/imagenes/Queulat/queulat.jpg",
      "../assets/imagenes/Queulat/queulat2.jpg",
      "../assets/imagenes/Queulat/queulat3.jpg",
      "../assets/imagenes/Queulat/queulat4.jpg"
    ],
    detalles: {
      duracion: "3-4 hrs",
      dificultad: "Moderada",
      distancia: "6.6 km (Sendero Mirador Panorámico Ventisquero Colgante)",
      desnivel: "+310 m",
      accesibilidad: "Sendero accesible corto hasta mirador Laguna Témpanos; mirador alto con pendiente.",
      horarios: "Martes a Domingo: 09:00 - 17:00 hrs"
    },
    tarifas: [
      { tipo: "Niños/as (-11 años) y Adulto Mayor (+60 años)", precio: "Gratis" },
      { tipo: "Adulto chileno (18 a 59 años)", precio: "$5.400" },
      { tipo: "Extranjeros", precio: "$10.800" }
    ],
    mapaIframe: '<iframe src="https://maps.google.com/maps?saddr=Porteria+Ventisquero+Colgante+Parque+Nacional+Queulat&daddr=Laguna+Tempanos+Queulat+to:Mirador+Ventisquero+Colgante+Queulat&dirflg=w&output=embed" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    itinerario: [
      { hora: "09:30", actividad: "Cruce del puente colgante sobre el río Ventisquero." },
      { hora: "10:30", actividad: "Ascenso a través del bosque siempreverde patagónico." },
      { hora: "11:45", actividad: "Llegada al Mirador Panorámico frente al Ventisquero Colgante." },
      { hora: "13:00", actividad: "Retorno hacia Laguna Témpanos." }
    ]
  },
  "17": {
    id: "17",
    nombre: "Parque Nacional Torres del Paine",
    categoria: "Naturaleza",
    tipo: "RUTA",
    ubicacion: "Provincia de Última Esperanza, Región de Magallanes",
    descripcion: "Octava maravilla natural del mundo y Reserva de la Biósfera, reconocido por sus agujas de granito, glaciares milenarios, lagos turquesa y fauna patagónica como guanacos y cóndores.",
    imagenes: [
      "../assets/imagenes/Torres_Paine/torres_paine.jpg",
      "../assets/imagenes/Torres_Paine/torres_paine2.jpg",
      "../assets/imagenes/Torres_Paine/torres_paine3.jpg",
      "../assets/imagenes/Torres_Paine/torres_paine4.jpg"
    ],
    detalles: {
      duracion: "Día completo",
      dificultad: "Alta",
      distancia: "18 km ida y vuelta (Sendero Mirador Base Las Torres)",
      desnivel: "+870 m",
      accesibilidad: "Miradores vehiculares accesibles en Laguna Amarga y Salto Grande; trekking de alta montaña.",
      horarios: "Lunes a Domingo: 08:00 - 20:00 hrs"
    },
    tarifas: [
      { tipo: "Niños/as (-11 años) y Adulto Mayor (+60 años)", precio: "Gratis" },
      { tipo: "Adulto chileno (hasta 3 días)", precio: "$11.400" },
      { tipo: "Extranjeros (hasta 3 días)", precio: "$32.400" }
    ],
    mapaIframe: '<iframe src="https://maps.google.com/maps?saddr=Sector+Central+Torres+del+Paine&daddr=Refugio+El+Chileno+Torres+del+Paine+to:Mirador+Base+Las+Torres+Magallanes&dirflg=w&output=embed" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    itinerario: [
      { hora: "08:00", actividad: "Inicio de caminata desde Sector Central hacia Valle Ascencio." },
      { hora: "10:00", actividad: "Paso por Campamento El Chileno entre bosque de lengas." },
      { hora: "12:00", actividad: "Ascenso por la morrena glaciar hasta Mirador Base Las Torres." },
      { hora: "16:30", actividad: "Retorno a la base." }
    ]
  },
  "18": {
    id: "18",
    nombre: "Castillo de Niebla (Valdivia)",
    categoria: "Cultura",
    tipo: "RUTA",
    ubicacion: "Camino a Niebla s/n, Bahía de Corral, Valdivia, Región de Los Ríos",
    descripcion: "Monumento Histórico Nacional construido en el siglo XVII sobre el acantilado costero de Niebla. Forma parte del sistema defensivo español más importante del Pacífico Sur, con vistas panorámicas a la desembocadura del río Valdivia.",
    imagenes: [
      "../assets/imagenes/Valdivia/mercado_valdivia.jpg",
      "../assets/imagenes/Valdivia/mercado_valdivia2.jpg",
      "../assets/imagenes/Valdivia/mercado_valdivia3.jpg",
      "../assets/imagenes/Valdivia/mercado_valdivia4.jpg"
    ],
    detalles: {
      duracion: "1 hr 30 min",
      dificultad: "Fácil",
      distancia: "1.5 km",
      desnivel: "+30 m",
      accesibilidad: "Pasarelas de madera y miradores habilitados en gran parte del recinto.",
      horarios: "Martes a Domingo: 10:00 - 17:30 hrs"
    },
    sectores: [
      "Batería de Cañones y Foso Defensivo",
      "Polvorín y Salas Museográficas del Sitio",
      "Mirador Panorámico Bahía de Corral e Isla Mancera"
    ],
    tarifas: [
      { tipo: "Público General", precio: "Entrada liberada / Gratuita" }
    ],
    mapaIframe: '<iframe src="https://maps.google.com/maps?saddr=Feria+Fluvial+de+Valdivia&daddr=Costanera+de+Valdivia+to:Muelle+Niebla+Valdivia+to:Castillo+de+Niebla+Valdivia&dirflg=d&output=embed" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',
    itinerario: [
      { hora: "10:30", actividad: "Ingreso al Museo de Sitio Castillo de Niebla." },
      { hora: "11:00", actividad: "Recorrido por la batería de cañones mirando la bahía de Corral." },
      { hora: "11:45", actividad: "Visita a las salas históricas y cierre en el mirador costero." }
    ]
  }
};

function obtenerParametroUrl(nombre) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nombre);
}

function cambiarImagen(src) {
  const imgPrincipal = document.getElementById("imagen-principal");
  if (imgPrincipal) {
    imgPrincipal.src = src;
  }
}

async function cargarFicha() {
  const id = obtenerParametroUrl("id") || "1";
  const contenedor = document.getElementById("detalle-actividad");

  if (!contenedor) return;

  const actividad = detalleBackup[id] || detalleBackup["1"];

  contenedor.innerHTML = `
    <section style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
      <h1 style="color: #2e7d32; font-size: 2rem; margin-bottom: 0.5rem;">${actividad.nombre}</h1>
      <div style="display:flex; gap:0.6rem; flex-wrap:wrap; margin-bottom:1rem;">
  <span style="background:#e8f5e9; color:#1b5e20; padding:0.4rem 1rem; border-radius:20px; font-size:0.9rem; font-weight:bold;">
    ${actividad.tipo}
  </span>
  <span style="background:#e3f2fd; color:#1565c0; padding:0.4rem 1rem; border-radius:20px; font-size:0.9rem; font-weight:bold;">
    ${actividad.categoria}
  </span>
</div>

      <!-- Galería de imágenes -->
      <div>
        <img id="imagen-principal" src="${actividad.imagenes[0]}" alt="${actividad.nombre}" style="width: 100%; height: 400px; object-fit: cover; border-radius: 8px;" />
        <div style="display: flex; gap: 0.5rem; margin-top: 0.8rem; overflow-x: auto;">
          ${actividad.imagenes.map(img => `
            <img src="${img}" alt="Miniatura" onerror="this.style.display='none'" onclick="cambiarImagen('${img}')" style="width: 80px; height: 60px; object-fit: cover; border-radius: 4px; cursor: pointer; border: 2px solid #ddd;" />
          `).join('')}
        </div>
      </div>

      <!-- Cuadro de métricas -->
      <div style="background: #f4f9f4; padding: 1.25rem; border-radius: 8px; margin: 1.5rem 0; border-left: 5px solid #2e7d32; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.8rem;">
        ${actividad.detalles.dificultad ? `<p style="margin: 0;"><strong>Dificultad:</strong> <span style="color: #2e7d32;">${actividad.detalles.dificultad}</span></p>` : ''}
        ${actividad.detalles.duracion ? `<p style="margin: 0;"><strong>Duración:</strong> ${actividad.detalles.duracion}</p>` : ''}
        ${actividad.detalles.distancia ? `<p style="margin: 0;"><strong>Distancia:</strong> ${actividad.detalles.distancia}</p>` : ''}
        ${actividad.detalles.desnivel ? `<p style="margin: 0;"><strong>Desnivel:</strong> ${actividad.detalles.desnivel}</p>` : ''}
        <p style="margin: 0; grid-column: 1 / -1;"><strong>Ubicación:</strong> 📍 ${actividad.ubicacion}</p>
      </div>

      <!-- Información y detalles -->
      <div style="line-height: 1.6; font-size: 1.05rem; margin-top: 1.5rem;">
        <p style="margin-bottom: 1.5rem; color: #444;">${actividad.descripcion}</p>

        <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem; color: #111;">Horarios de atención</h3>
        <p style="margin-bottom: 1.5rem; color: #333;">${actividad.detalles.horarios}</p>

        ${actividad.sectores ? `
          <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem; color: #111;">Sectores y recorridos</h3>
          <ul style="margin-top: 0.4rem; margin-bottom: 1.5rem; padding-left: 1.5rem; color: #333;">
            ${actividad.sectores.map(s => `<li style="margin-bottom: 0.4rem;">${s}</li>`).join('')}
          </ul>
        ` : ''}

        ${actividad.tarifas ? `
          <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem; color: #111;">Tarifas de acceso</h3>
          <ul style="margin-top: 0.4rem; margin-bottom: 1.5rem; padding-left: 1.5rem; color: #333;">
            ${actividad.tarifas.map(t => `<li style="margin-bottom: 0.4rem;"><strong>${t.tipo}:</strong> ${t.precio}</li>`).join('')}
          </ul>
        ` : ''}

        ${actividad.detalles.tipoTerreno ? `
          <p style="margin-bottom: 0.8rem; color: #333;"><strong>Tipo de terreno:</strong> ${actividad.detalles.tipoTerreno}</p>
        ` : ''}

        ${actividad.detalles.tipoRuta ? `
          <p style="margin-bottom: 0.8rem; color: #333;"><strong>Tipo de ruta:</strong> ${actividad.detalles.tipoRuta}</p>
        ` : ''}

        ${actividad.detalles.desnivelExtra ? `
          <p style="margin-bottom: 0.8rem; color: #333;"><strong>Desnivel:</strong> ${actividad.detalles.desnivelExtra}</p>
        ` : ''}

        ${actividad.detalles.altitudMaxima ? `
          <p style="margin-bottom: 1.5rem; color: #333;"><strong>Altitud máxima:</strong> ${actividad.detalles.altitudMaxima}</p>
        ` : ''}

        <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem; color: #111;">Accesibilidad</h3>
        <p style="margin-bottom: 1.5rem; color: #333;">${actividad.detalles.accesibilidad}</p>

        ${actividad.itinerario ? `
          <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem; color: #111;">Itinerario sugerido</h3>
          <ul style="margin-top: 0.4rem; margin-bottom: 1.5rem; padding-left: 1.5rem; color: #333;">
            ${actividad.itinerario.map(it => `<li style="margin-bottom: 0.4rem;"><strong>${it.hora}:</strong> ${it.actividad}</li>`).join('')}
          </ul>
        ` : ''}
      </div>

      <!-- Mapa GPS -->
      ${actividad.mapaIframe ? `
        <h3 style="color: #2e7d32; margin-top: 2rem; font-size: 1.25rem; border-bottom: 2px solid #e8f5e9; padding-bottom: 0.5rem;">Ruta y Mapa GPS</h3>
        <div style="width: 100%; height: 450px; border-radius: 10px; overflow: hidden; margin-top: 1rem; border: 1px solid #e0e0e0;">
          ${actividad.mapaIframe}
        </div>
      ` : ''}
    </section>
  `;
}

window.cambiarImagen = cambiarImagen;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", cargarFicha);
} else {
  cargarFicha();
}
