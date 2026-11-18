const detalleBackup = {
    "1": {
        id: "1",
        nombre: "Sendero Ñielol",
        categoria: "Naturaleza",
        tipo: "RUTA",
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
        rutaGps: {
            puntos: [
                { nombre: "Acceso Principal Portería CONAF", coords: [-38.7294, -72.5892] },
                { nombre: "Curva Sendero Los Copihues", coords: [-38.7285, -72.5912] },
                { nombre: "Centro de Informaciones Ambientales", coords: [-38.7279, -72.5924] },
                { nombre: "Escultura Chemamüll Ñielol", coords: [-38.7263, -72.5931] },
                { nombre: "Mirador Agua Santa", coords: [-38.7254, -72.5906] },
                { nombre: "Laguna Huesqueque", coords: [-38.7244, -72.5900] },
                { nombre: "Cumbre Monumento Natural Cerro Ñielol", coords: [-38.7235, -72.5894] },
                { nombre: "Descenso Sendero Los Pataguas", coords: [-38.7264, -72.5880] },
                { nombre: "Salida Portería", coords: [-38.7294, -72.5892] }
            ]
        },
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
        sectores: [
            "Galería Principal de Historia Regional",
            "Sala de Arqueología y Cosmovisión Mapuche",
            "Jardín Botánico Palacio Thiers"
        ],
        tarifas: [
            { tipo: "Público General", precio: "Entrada liberada / Gratuita" },
            { tipo: "Delegaciones Escolares", precio: "Gratuito previa reserva previa" }
        ],
        rutaGps: {
            puntos: [
                { nombre: "Acceso Av. Alemania 0842", coords: [-38.73808, -72.60785] },
                { nombre: "Casona Monumento Nacional Palacio Thiers", coords: [-38.73772, -72.60828] },
                { nombre: "Salas de Arqueología y Etnohistoria", coords: [-38.73755, -72.60855] },
                { nombre: "Jardín Botánico y Ruka Exterior", coords: [-38.73738, -72.60885] }
            ]
        }
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
        rutaGps: {
            puntos: [
                { nombre: "Inicio Bandejón Av. Balmaceda / Pinto", coords: [-38.73362, -72.58095] },
                { nombre: "Pabellón Productores Agroecológicos", coords: [-38.73335, -72.57945] },
                { nombre: "Sector Artesanía Mapuche en Madera", coords: [-38.73308, -72.57785] },
                { nombre: "Patio de Comidas Tradicionales", coords: [-38.73275, -72.57595] }
            ]
        }
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
        rutaGps: {
            puntos: [
                { nombre: "Acceso Principal Av. Los Poetas", coords: [-38.7495, -72.5872] },
                { nombre: "Plaza Cívica y Memorial", coords: [-38.7514, -72.5858] },
                { nombre: "Mirador Humedal Río Cautín", coords: [-38.7536, -72.5835] },
                { nombre: "Bosque Nativo Isla Cautín", coords: [-38.7521, -72.5812] },
                { nombre: "Ciclovía Central y Juegos", coords: [-38.7506, -72.5842] },
                { nombre: "Salida Av. Los Poetas", coords: [-38.7495, -72.5872] }
            ]
        }
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
        rutaGps: {
            puntos: [
                { nombre: "Playa Linda - Inicio Sendero Sierra Nevada", coords: [-38.6489, -71.6228] },
                { nombre: "Primer Mirador Laguna Conguillío", coords: [-38.6455, -71.6152] },
                { nombre: "Bosque de Araucarias Milenarias", coords: [-38.6412, -71.6085] },
                { nombre: "Segundo Mirador Glaciar Sierra Nevada", coords: [-38.6368, -71.6022] },
                { nombre: "Mirador Cumbre Sierra Nevada (Vista Volcán Llaima)", coords: [-38.6328, -71.5965] }
            ]
        },
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
        rutaGps: {
            puntos: [
                { nombre: "Guardaparques CONAF Sector Rucapillán", coords: [-39.3812, -71.9585] },
                { nombre: "Cuevas Volcánicas Villarrica", coords: [-39.3868, -71.9535] },
                { nombre: "Base Centro de Esquí Volcán Villarrica", coords: [-39.3915, -71.9492] },
                { nombre: "Sendero Escorial Volcánico", coords: [-39.3958, -71.9445] },
                { nombre: "Mirador Los Cráteres", coords: [-39.3995, -71.9398] }
            ]
        },
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
        rutaGps: {
            puntos: [
                { nombre: "Administración CONAF Lago Tinquilco", coords: [-39.1588, -71.7245] },
                { nombre: "Mirador Lago Tinquilco", coords: [-39.1560, -71.7198] },
                { nombre: "Salto Nido de Águila", coords: [-39.1534, -71.7168] },
                { nombre: "Lago Chico", coords: [-39.1475, -71.7112] },
                { nombre: "Lago Toro", coords: [-39.1432, -71.7065] },
                { nombre: "Lago Verde", coords: [-39.1396, -71.7024] }
            ]
        },
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
        rutaGps: {
            puntos: [
                { nombre: "Portería CONAF Sector Piedra Santa", coords: [-38.4235, -71.5642] },
                { nombre: "Base Volcán Lonquimay (Corralco)", coords: [-38.4048, -71.5615] },
                { nombre: "Escorial Volcánico 1988", coords: [-38.3935, -71.5568] },
                { nombre: "Mirador Cráter Navidad", coords: [-38.3842, -71.5512] }
            ]
        },
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
        rutaGps: {
            puntos: [
                { nombre: "Guardaparques CONAF Sector Pehuenco", coords: [-37.8265, -73.0112] },
                { nombre: "Bosque de Araucarias Costeras", coords: [-37.8218, -73.0215] },
                { nombre: "Mirador Piedra del Águila (1.379 m)", coords: [-37.8174, -73.0308] },
                { nombre: "Circuito Casa de Piedra", coords: [-37.8224, -73.0245] },
                { nombre: "Retorno Sector Pehuenco", coords: [-37.8265, -73.0112] }
            ]
        },
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
        rutaGps: {
            puntos: [
                { nombre: "Administración CONAF Laguna Malleco", coords: [-38.2156, -71.8165] },
                { nombre: "Ribera Norte Laguna Malleco", coords: [-38.2122, -71.8095] },
                { nombre: "Mirador Salto de la Culebra", coords: [-38.2085, -71.8012] },
                { nombre: "Sendero Bosque de Araucarias", coords: [-38.2052, -71.7955] },
                { nombre: "Laguna Verde Tolhuaca", coords: [-38.2025, -71.7918] }
            ]
        },
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
        rutaGps: {
            puntos: [
                { nombre: "Control Acceso Cordillera de la Sal", coords: [-22.9125, -68.2685] },
                { nombre: "Mirador Duna Mayor", coords: [-22.9228, -68.2812] },
                { nombre: "El Anfiteatro", coords: [-22.9295, -68.2915] },
                { nombre: "Formación Las Tres Marías", coords: [-22.9372, -68.3018] }
            ]
        },
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
        rutaGps: {
            puntos: [
                { nombre: "Portería CONAF Sector Granizo", coords: [-32.9785, -71.1325] },
                { nombre: "Sector La Mina y Placa Charles Darwin", coords: [-32.9652, -71.1248] },
                { nombre: "Portezuelo Ocoa", coords: [-32.9574, -71.1212] },
                { nombre: "Cumbre Cerro La Campana (1.880 m)", coords: [-32.9536, -71.1195] }
            ]
        },
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
        rutaGps: {
            puntos: [
                { nombre: "Mirador Salto Velo de la Novia", coords: [-35.4518, -71.0312] },
                { nombre: "Pasarelas Mirador Siete Tazas", coords: [-35.4584, -71.0235] },
                { nombre: "Sendero Bosque Río Claro", coords: [-35.4622, -71.0168] },
                { nombre: "Salto La Leona", coords: [-35.4655, -71.0115] }
            ]
        },
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
        rutaGps: {
            puntos: [
                { nombre: "Acceso CONAF Saltos del Petrohué", coords: [-41.1738, -72.4485] },
                { nombre: "Pasarela Rápidos Río Petrohué", coords: [-41.1722, -72.4452] },
                { nombre: "Mirador Principal (Vista Volcán Osorno)", coords: [-41.1708, -72.4428] },
                { nombre: "Sendero Los Enamorados", coords: [-41.1685, -72.4412] }
            ]
        },
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
        rutaGps: {
            puntos: [
                { nombre: "Centro Ambiental Chanquín", coords: [-42.6258, -74.1045] },
                { nombre: "Pasarelas Sendero El Tepual", coords: [-42.6242, -74.1112] },
                { nombre: "Mirador Dunas de Cucao", coords: [-42.6235, -74.1178] },
                { nombre: "Playa Pacífico Cucao", coords: [-42.6232, -74.1225] }
            ]
        },
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
        rutaGps: {
            puntos: [
                { nombre: "Portería y Puente Colgante Río Ventisquero", coords: [-44.4135, -72.5592] },
                { nombre: "Mirador Laguna Témpanos", coords: [-44.4148, -72.5465] },
                { nombre: "Ascenso Selva Fría Patagónica", coords: [-44.4112, -72.5398] },
                { nombre: "Mirador Panorámico Ventisquero Colgante", coords: [-44.4085, -72.5342] }
            ]
        },
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
        rutaGps: {
            puntos: [
                { nombre: "Inicio Sendero Sector Central", coords: [-50.9715, -72.8742] },
                { nombre: "Paso de los Vientos (Valle Ascencio)", coords: [-50.9582, -72.9015] },
                { nombre: "Refugio y Campamento El Chileno", coords: [-50.9518, -72.9195] },
                { nombre: "Mirador Base Las Torres", coords: [-50.9422, -72.9488] }
            ]
        },
        itinerario: [
            { hora: "08:00", actividad: "Inicio de caminata desde Sector Central hacia Valle Ascencio." },
            { hora: "10:00", actividad: "Paso por Campamento El Chileno entre bosque de lengas." },
            { hora: "12:00", actividad: "Ascenso por la morrena glaciar hasta Mirador Base Las Torres." },
            { hora: "16:30", actividad: "Retorno a la base." }
        ]
    },
    "18": {
        id: "18",
        nombre: "Fuerte de Niebla (Castillo de Niebla)",
        categoria: "Cultura",
        tipo: "RUTA",
        ubicacion: "Camino a Niebla s/n, Bahía de Corral, Valdivia, Región de Los Ríos",
        descripcion: "Monumento Histórico Nacional construido en el siglo XVII sobre el acantilado costero de Niebla. Forma parte del sistema defensivo español más importante del Pacífico Sur, con vistas panorámicas a la desembocadura del río Valdivia.",
        imagenes: [
            "../assets/imagenes/Valdivia/Valdivia.jpg",
            "../assets/imagenes/Valdivia/Valdivia2.jpg",
            "../assets/imagenes/Valdivia/Valdivia3.jpg",
            "../assets/imagenes/Valdivia/Valdivia4.jpg"
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
        rutaGps: {
            puntos: [
                { nombre: "Acceso Museo de Sitio Castillo de Niebla", coords: [-39.8665, -73.3958] },
                { nombre: "Foso Defensivo Tallado en Cancagua", coords: [-39.8670, -73.3965] },
                { nombre: "Polvorín y Salas Museográficas", coords: [-39.8675, -73.3974] },
                { nombre: "Batería de Cañones", coords: [-39.8682, -73.3988] },
                { nombre: "Garita de Vigilancia Costera", coords: [-39.8686, -73.3992] },
                { nombre: "Mirador Bahía de Corral e Isla Mancera", coords: [-39.8689, -73.3996] }
            ]
        },
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
function cargarLibreriaLeaflet() {
    return new Promise((resolve, reject) => {
        if (window.L) {
            resolve(window.L);
            return;
        }
        if (!document.getElementById("leaflet-css")) {
            const link = document.createElement("link");
            link.id = "leaflet-css";
            link.rel = "stylesheet";
            link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
            document.head.appendChild(link);
        }
        const script = document.createElement("script");
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        script.onload = () => resolve(window.L);
        script.onerror = reject;
        document.head.appendChild(script);
    });
}
async function inicializarMapaSatelite(actividad) {
    const contenedorMapa = document.getElementById("mapa-satelite-ruta");
    if (!contenedorMapa || !actividad.rutaGps)
        return;
    try {
        const L = await cargarLibreriaLeaflet();
        const puntos = actividad.rutaGps.puntos;
        const coordenadas = puntos.map((p) => p.coords);
        const mapa = L.map("mapa-satelite-ruta", {
            scrollWheelZoom: false
        });
        const capaSatelite = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
            attribution: "Imágenes satélite © Esri, Maxar, Earthstar Geographics",
            maxZoom: 18
        }).addTo(mapa);
        const capaEtiquetas = L.tileLayer("https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}", { maxZoom: 18 }).addTo(mapa);
        const capaMapa = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "© OpenStreetMap contributors",
            maxZoom: 18
        });
        const grupoSatelite = L.layerGroup([capaSatelite, capaEtiquetas]);
        L.control.layers({ "Vista Satélite": grupoSatelite, "Mapa Estándar": capaMapa }, null, { position: "topright" }).addTo(mapa);
        L.polyline(coordenadas, {
            color: "#ffffff",
            weight: 8,
            opacity: 0.75
        }).addTo(mapa);
        const lineaRuta = L.polyline(coordenadas, {
            color: "#1e88e5",
            weight: 5,
            opacity: 0.95
        }).addTo(mapa);
        puntos.forEach((punto, idx) => {
            const esInicio = idx === 0;
            const esFin = idx === puntos.length - 1;
            const colorPin = esInicio ? "#2e7d32" : esFin ? "#d32f2f" : "#1e88e5";
            const letra = esInicio ? "A" : esFin ? "B" : idx;
            const icono = L.divIcon({
                className: "marcador-ruta-gps",
                html: `<div style="background:${colorPin}; color:white; width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:12px; border:2px solid white; box-shadow:0 2px 6px rgba(0,0,0,0.45);">${letra}</div>`,
                iconSize: [26, 26],
                iconAnchor: [13, 13]
            });
            const marcador = L.marker(punto.coords, { icon: icono }).addTo(mapa);
            marcador.bindPopup(`<strong>${punto.nombre}</strong>`);
            if (esInicio || esFin) {
                marcador.bindTooltip(punto.nombre, { permanent: false, direction: "top" });
            }
        });
        mapa.fitBounds(lineaRuta.getBounds(), { padding: [45, 45] });
    }
    catch (error) {
        console.error("Error al cargar el mapa satélite:", error);
    }
}
const STORAGE_FAVORITOS = "ecoruta_favoritos";
function obtenerFavoritos() {
    try {
        const raw = localStorage.getItem(STORAGE_FAVORITOS);
        if (!raw)
            return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed.filter((id) => typeof id === "number") : [];
    }
    catch {
        return [];
    }
}
function alternarFavorito(id) {
    const favoritos = obtenerFavoritos();
    const existe = favoritos.includes(id);
    const actualizados = existe ? favoritos.filter((item) => item !== id) : [...favoritos, id];
    localStorage.setItem(STORAGE_FAVORITOS, JSON.stringify(actualizados));
    return !existe;
}
async function obtenerActividadSincronizada(id) {
    const base = detalleBackup[id] || detalleBackup["1"];
    try {
        const resp = await fetch("../data/rutas.json");
        if (!resp.ok)
            return base;
        const lista = await resp.json();
        const rutaJson = lista.find((item) => String(item.id) === id);
        if (!rutaJson)
            return base;
        const imgPrincipalJson = `../${rutaJson.imagen}`;
        const imagenesSincronizadas = [
            imgPrincipalJson,
            ...base.imagenes.filter((img) => img !== imgPrincipalJson)
        ];
        return {
            ...base,
            id: String(rutaJson.id),
            nombre: rutaJson.nombre,
            categoria: rutaJson.categoria,
            ubicacion: rutaJson.ubicacion,
            imagenes: imagenesSincronizadas,
            detalles: {
                ...base.detalles,
                dificultad: rutaJson.dificultad || base.detalles.dificultad
            }
        };
    }
    catch {
        return base;
    }
}
async function cargarFicha() {
    const id = obtenerParametroUrl("id") || "1";
    const idNumerico = Number(id) || 1;
    const contenedor = document.getElementById("detalle-actividad");
    if (!contenedor)
        return;
    const actividad = await obtenerActividadSincronizada(id);
    const esFavInicial = obtenerFavoritos().includes(idNumerico);
    contenedor.innerHTML = `
    <section style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; gap:1rem; flex-wrap:wrap; margin-bottom:0.5rem;">
        <h1 style="color: #2e7d32; font-size: 2rem; margin: 0;">${actividad.nombre}</h1>
        <button
          type="button"
          id="btn-favorito-ficha"
          aria-pressed="${esFavInicial}"
          style="padding: 0.55rem 1.1rem; border-radius: 8px; border: 1px solid ${esFavInicial ? "#e53e3e" : "#cbd5e0"}; background: ${esFavInicial ? "#fff5f5" : "#ffffff"}; color: ${esFavInicial ? "#c53030" : "#2d3748"}; font-weight: 600; cursor: pointer; font-size: 0.95rem;"
        >
          ${esFavInicial ? "❤️ Guardado en Favoritos" : "🤍 Guardar en Favoritos"}
        </button>
      </div>
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
          ${actividad.imagenes.map((img) => `
            <img src="${img}" alt="Miniatura" onerror="this.style.display='none'" onclick="cambiarImagen('${img}')" style="width: 80px; height: 60px; object-fit: cover; border-radius: 4px; cursor: pointer; border: 2px solid #ddd;" />
          `).join("")}
        </div>
      </div>

      <!-- Cuadro de métricas -->
      <div style="background: #f4f9f4; padding: 1.25rem; border-radius: 8px; margin: 1.5rem 0; border-left: 5px solid #2e7d32; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.8rem;">
        ${actividad.detalles.dificultad ? `<p style="margin: 0;"><strong>Dificultad:</strong> <span style="color: #2e7d32;">${actividad.detalles.dificultad}</span></p>` : ""}
        ${actividad.detalles.duracion ? `<p style="margin: 0;"><strong>Duración:</strong> ${actividad.detalles.duracion}</p>` : ""}
        ${actividad.detalles.distancia ? `<p style="margin: 0;"><strong>Distancia:</strong> ${actividad.detalles.distancia}</p>` : ""}
        ${actividad.detalles.desnivel ? `<p style="margin: 0;"><strong>Desnivel:</strong> ${actividad.detalles.desnivel}</p>` : ""}
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
            ${actividad.sectores.map((s) => `<li style="margin-bottom: 0.4rem;">${s}</li>`).join("")}
          </ul>
        ` : ""}

        ${actividad.tarifas ? `
          <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem; color: #111;">Tarifas de acceso</h3>
          <ul style="margin-top: 0.4rem; margin-bottom: 1.5rem; padding-left: 1.5rem; color: #333;">
            ${actividad.tarifas.map((t) => `<li style="margin-bottom: 0.4rem;"><strong>${t.tipo}:</strong> ${t.precio}</li>`).join("")}
          </ul>
        ` : ""}

        ${actividad.detalles.tipoTerreno ? `<p style="margin-bottom: 0.8rem; color: #333;"><strong>Tipo de terreno:</strong> ${actividad.detalles.tipoTerreno}</p>` : ""}
        ${actividad.detalles.tipoRuta ? `<p style="margin-bottom: 0.8rem; color: #333;"><strong>Tipo de ruta:</strong> ${actividad.detalles.tipoRuta}</p>` : ""}
        ${actividad.detalles.desnivelExtra ? `<p style="margin-bottom: 0.8rem; color: #333;"><strong>Desnivel:</strong> ${actividad.detalles.desnivelExtra}</p>` : ""}
        ${actividad.detalles.altitudMaxima ? `<p style="margin-bottom: 1.5rem; color: #333;"><strong>Altitud máxima:</strong> ${actividad.detalles.altitudMaxima}</p>` : ""}

        <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem; color: #111;">Accesibilidad</h3>
        <p style="margin-bottom: 1.5rem; color: #333;">${actividad.detalles.accesibilidad}</p>

        ${actividad.itinerario ? `
          <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem; color: #111;">Itinerario sugerido</h3>
          <ul style="margin-top: 0.4rem; margin-bottom: 1.5rem; padding-left: 1.5rem; color: #333;">
            ${actividad.itinerario.map((it) => `<li style="margin-bottom: 0.4rem;"><strong>${it.hora}:</strong> ${it.actividad}</li>`).join("")}
          </ul>
        ` : ""}
      </div>

      <!-- Mapa GPS Satelital Interactivo -->
      ${actividad.rutaGps ? `
        <h3 style="color: #2e7d32; margin-top: 2rem; font-size: 1.25rem; border-bottom: 2px solid #e8f5e9; padding-bottom: 0.5rem;">Ruta y Mapa GPS Satelital</h3>
        <p style="font-size: 0.9rem; color: #555; margin: 0.5rem 0 0.8rem 0;">🟢 <strong>A:</strong> Inicio del recorrido &nbsp;·&nbsp; 🔵 <strong>Puntos:</strong> Miradores e hitos &nbsp;·&nbsp; 🔴 <strong>B:</strong> Destino / Retorno (haz clic en cada marcador para ver su nombre)</p>
        <div id="mapa-satelite-ruta" style="width: 100%; height: 450px; border-radius: 10px; overflow: hidden; border: 1px solid #e0e0e0; z-index: 1;"></div>
      ` : ""}
    </section>
  `;
    const btnFavFicha = document.getElementById("btn-favorito-ficha");
    if (btnFavFicha) {
        btnFavFicha.addEventListener("click", () => {
            const esFavAhora = alternarFavorito(idNumerico);
            btnFavFicha.textContent = esFavAhora ? "❤️ Guardado en Favoritos" : "🤍 Guardar en Favoritos";
            btnFavFicha.setAttribute("aria-pressed", String(esFavAhora));
            btnFavFicha.style.borderColor = esFavAhora ? "#e53e3e" : "#cbd5e0";
            btnFavFicha.style.background = esFavAhora ? "#fff5f5" : "#ffffff";
            btnFavFicha.style.color = esFavAhora ? "#c53030" : "#2d3748";
        });
    }
    if (actividad.rutaGps) {
        inicializarMapaSatelite(actividad);
    }
}
window.cambiarImagen = cambiarImagen;
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", cargarFicha);
}
else {
    cargarFicha();
}
export {};
