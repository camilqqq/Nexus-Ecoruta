const detalleBackup = {
  "1": {
    id: "1",
    nombre: { es: "Sendero Ñielol", en: "Ñielol Trail" },
    categoria: { es: "Naturaleza", en: "Nature" },
    tipo: { es: "RUTA", en: "ROUTE" },
    ubicacion: { es: "Parque Nacional Cerro Ñielol, Temuco", en: "Cerro Ñielol National Park, Temuco" },
    descripcion: { 
      es: "Hermoso sendero natural rodeado de flora y fauna nativa de la Región de La Araucanía. Ideal para caminatas familiares y observación de aves.", 
      en: "Beautiful natural trail surrounded by native flora and fauna of the La Araucanía Region. Ideal for family hikes and bird watching." 
    },
    imagenes: [
      "../assets/imagenes/Sendero/Sendero_Nielol.jpg",
      "../assets/imagenes/Sendero/Sendero_Nielol2.jpg",
      "../assets/imagenes/Sendero/Sendero_Nielol3.jpg",
      "../assets/imagenes/Sendero/Sendero_Nielol4.jpg"
    ],
    detalles: {
      duracion: "1 hr 30 min",
      dificultad: { es: "Moderada", en: "Moderate" },
      distancia: "2.5 km",
      desnivel: "+120 m",
      accesibilidad: { 
        es: "Apto para personas con movilidad reducida en tramos iniciales.", 
        en: "Suitable for people with reduced mobility in initial sections." 
      },
      horarios: { es: "Martes a Domingo: 08:30 - 17:30 hrs", en: "Tuesday to Sunday: 08:30 - 17:30 hrs" }
    },
    rutaGps: {
      puntos: [
        { nombre: { es: "Acceso Principal Portería CONAF", en: "Main CONAF Gate Access" }, coords: [-38.7294, -72.5892] },
        { nombre: { es: "Curva Sendero Los Copihues", en: "Los Copihues Trail Curve" }, coords: [-38.7285, -72.5912] },
        { nombre: { es: "Centro de Informaciones Ambientales", en: "Environmental Information Center" }, coords: [-38.7279, -72.5924] },
        { nombre: { es: "Escultura Chemamüll Ñielol", en: "Chemamüll Ñielol Sculpture" }, coords: [-38.7263, -72.5931] },
        { nombre: { es: "Mirador Agua Santa", en: "Agua Santa Viewpoint" }, coords: [-38.7254, -72.5906] },
        { nombre: { es: "Laguna Huesqueque", en: "Huesqueque Lagoon" }, coords: [-38.7244, -72.5900] },
        { nombre: { es: "Cumbre Monumento Natural Cerro Ñielol", en: "Cerro Ñielol Natural Monument Summit" }, coords: [-38.7235, -72.5894] },
        { nombre: { es: "Descenso Sendero Los Pataguas", en: "Los Pataguas Trail Descent" }, coords: [-38.7264, -72.5880] },
        { nombre: { es: "Salida Portería", en: "Gate Exit" }, coords: [-38.7294, -72.5892] }
      ]
    },
    itinerario: [
      { hora: "08:30", actividad: { es: "Registro en portería e inicio de caminata.", en: "Gate registration and start of hike." } },
      { hora: "09:15", actividad: { es: "Llegada al Mirador Agua Santa.", en: "Arrival at Agua Santa Viewpoint." } },
      { hora: "10:00", actividad: { es: "Retorno por el sendero los Patagua.", en: "Return via Los Pataguas trail." } }
    ]
  },
  "2": {
    id: "2",
    nombre: { es: "Museo Regional de La Araucanía", en: "Regional Museum of La Araucanía" },
    categoria: { es: "Cultura", en: "Culture" },
    tipo: { es: "ACTIVIDAD", en: "ACTIVITY" },
    ubicacion: { es: "Av. Alemania 0842, Temuco", en: "Av. Alemania 0842, Temuco" },
    descripcion: { 
      es: "Espacio cultural que resguarda la historia, arqueología y etnografía de los pueblos originarios y la colonización en La Araucanía.", 
      en: "Cultural space that safeguards the history, archaeology, and ethnography of indigenous peoples and colonization in La Araucanía." 
    },
    imagenes: [
      "../assets/imagenes/Museo/museo.jpg",
      "../assets/imagenes/Museo/museo2.jpg",
      "../assets/imagenes/Museo/museo3.jpg",
      "../assets/imagenes/Museo/museo4.jpg"
    ],
    detalles: {
      accesibilidad: { es: "Rampas y ascensores totalmente habilitados.", en: "Fully enabled ramps and elevators." },
      horarios: { es: "Martes a viernes de 09:30 a 17:30 hrs. Sábados y domingos de 10:00 a 17:00 hrs.", en: "Tuesday to Friday from 09:30 to 17:30 hrs. Saturdays and Sundays from 10:00 to 17:00 hrs." },
      tipoTerreno: { es: "Piso cerámico, parqué y senderos adosados de piedra", en: "Ceramic tile, parquet floor, and stone-paved paths" },
      tipoRuta: { es: "Recorrido guiado / Salón y parque urbano", en: "Guided tour / Hall and urban park" }
    },
    sectores: [
      { es: "Galería Principal de Historia Regional", en: "Main Regional History Gallery" },
      { es: "Sala de Arqueología y Cosmovisión Mapuche", en: "Archaeology and Mapuche Cosmovision Room" },
      { es: "Jardín Botánico Palacio Thiers", en: "Thiers Palace Botanical Garden" }
    ],
    tarifas: [
      { tipo: { es: "Público General", en: "General Public" }, precio: { es: "Entrada liberada / Gratuita", en: "Free admission" } },
      { tipo: { es: "Delegaciones Escolares", en: "School Delegations" }, precio: { es: "Gratuito previa reserva previa", en: "Free with prior reservation" } }
    ],
    rutaGps: {
      puntos: [
        { nombre: { es: "Acceso Av. Alemania 0842", en: "Av. Alemania 0842 Access" }, coords: [-38.73808, -72.60785] },
        { nombre: { es: "Casona Monumento Nacional Palacio Thiers", en: "Thiers Palace National Monument Mansion" }, coords: [-38.73772, -72.60828] },
        { nombre: { es: "Salas de Arqueología y Etnohistoria", en: "Archaeology and Ethnohistory Rooms" }, coords: [-38.73755, -72.60855] },
        { nombre: { es: "Jardín Botánico y Ruka Exterior", en: "Botanical Garden and Exterior Ruka" }, coords: [-38.73738, -72.60885] }
      ]
    }
  },
  "3": {
    id: "3",
    nombre: { es: "Feria Agroecológica", en: "Agroecological Fair" },
    categoria: { es: "Gastronomía", en: "Gastronomy" },
    tipo: { es: "ACTIVIDAD", en: "ACTIVITY" },
    ubicacion: { es: "Feria Pinto, Av. Balmaceda, Temuco", en: "Feria Pinto, Av. Balmaceda, Temuco" },
    descripcion: { 
      es: "Descubre un espacio lleno de sabores, colores y tradiciones de La Araucanía. Encuentra productos frescos de la tierra, hortalizas locales, alimentos orgánicos y artesanías con identidad regional, ofrecidos directamente por pequeños productores y emprendedores de la zona. Una experiencia para disfrutar, conocer y valorar lo nuestro.", 
      en: "Discover a space full of flavors, colors, and traditions of La Araucanía. Find fresh land products, local vegetables, organic foods, and crafts with regional identity, offered directly by small local producers and entrepreneurs. An experience to enjoy, learn about, and value our heritage." 
    },
    imagenes: [
      "../assets/imagenes/Feria/feria.jpg",
      "../assets/imagenes/Feria/feria2.jpg",
      "../assets/imagenes/Feria/feria3.jpg",
      "../assets/imagenes/Feria/feria4.jpg"
    ],
    detalles: {
      accesibilidad: { es: "Acceso a nivel de calle totalmente accesible.", en: "Fully accessible street-level access." },
      horarios: { es: "Lunes a domingo de 08:00 a 19:00 hrs.", en: "Monday to Sunday from 08:00 to 19:00 hrs." },
      tipoTerreno: { es: "Baldosa cívica, adoquines y pasajes techados", en: "Civic tile, cobblestones, and covered walkways" },
      tipoRuta: { es: "Paseo peatonal urbano", en: "Urban pedestrian promenade" },
      desnivelExtra: "0 m",
      altitudMaxima: "~115 m s.n.m"
    },
    sectores: [
      { es: "Paseo de Productores Agroecológicos", en: "Agroecological Producers Promenade" },
      { es: "Sector Muestra de Artesanía en Madera y Llama", en: "Wood and Llama Craft Exhibition Sector" },
      { es: "Patio de Comidas Tradicionales", en: "Traditional Food Court" }
    ],
    tarifas: [
      { tipo: { es: "Acceso", en: "Access" }, precio: { es: "Acceso libre y gratuito para todo espectador", en: "Free admission for all audiences" } }
    ],
    rutaGps: {
      puntos: [
        { nombre: { es: "Inicio Bandejón Av. Balmaceda / Pinto", en: "Start of Av. Balmaceda / Pinto Median" }, coords: [-38.73362, -72.58095] },
        { nombre: { es: "Pabellón Productores Agroecológicos", en: "Agroecological Producers Pavilion" }, coords: [-38.73335, -72.57945] },
        { nombre: { es: "Sector Artesanía Mapuche en Madera", en: "Mapuche Wood Craft Sector" }, coords: [-38.73308, -72.57785] },
        { nombre: { es: "Patio de Comidas Tradicionales", en: "Traditional Food Court" }, coords: [-38.73275, -72.57595] }
      ]
    }
  },
  "4": {
    id: "4",
    nombre: { es: "Parque Isla Cautín", en: "Isla Cautín Park" },
    categoria: { es: "Naturaleza", en: "Nature" },
    tipo: { es: "RUTA", en: "ROUTE" },
    ubicacion: { es: "Av. Los Poetas, Temuco", en: "Av. Los Poetas, Temuco" },
    descripcion: { 
      es: "Gran pulmón verde urbano a orillas del Río Cautín con ciclovías, plazas de juegos, zonas de picnic y áreas de conservación vegetal.", 
      en: "Large urban green lung on the banks of the Cautín River with bike lanes, playgrounds, picnic areas, and plant conservation zones." 
    },
    imagenes: [
      "../assets/imagenes/Isla_Cautin/Isla1.jpg",
      "../assets/imagenes/Isla_Cautin/Isla2.jpg",
      "../assets/imagenes/Isla_Cautin/Isla3.jpg",
      "../assets/imagenes/Isla_Cautin/Isla4.jpg"
    ],
    detalles: {
      duracion: "1-2 hrs",
      dificultad: { es: "Fácil", en: "Easy" },
      distancia: "3.0 km",
      accesibilidad: { es: "Rutas pavimentadas y baños adaptados.", en: "Paved routes and adapted restrooms." },
      horarios: { es: "Lunes a Domingo: 08:30 - 20:00 hrs", en: "Monday to Sunday: 08:30 - 20:00 hrs" }
    },
    rutaGps: {
      puntos: [
        { nombre: { es: "Acceso Principal Av. Los Poetas", en: "Main Av. Los Poetas Access" }, coords: [-38.7495, -72.5872] },
        { nombre: { es: "Plaza Cívica y Memorial", en: "Civic Plaza and Memorial" }, coords: [-38.7514, -72.5858] },
        { nombre: { es: "Mirador Humedal Río Cautín", en: "Cautín River Wetland Viewpoint" }, coords: [-38.7536, -72.5835] },
        { nombre: { es: "Bosque Nativo Isla Cautín", en: "Isla Cautín Native Forest" }, coords: [-38.7521, -72.5812] },
        { nombre: { es: "Ciclovía Central y Juegos", en: "Central Bike Lane and Playgrounds" }, coords: [-38.7506, -72.5842] },
        { nombre: { es: "Salida Av. Los Poetas", en: "Av. Los Poetas Exit" }, coords: [-38.7495, -72.5872] }
      ]
    }
  },
  "5": {
    id: "5",
    nombre: { es: "Parque Nacional Conguillío", en: "Conguillío National Park" },
    categoria: { es: "Naturaleza", en: "Nature" },
    tipo: { es: "RUTA", en: "ROUTE" },
    ubicacion: { es: "Melipeuco / Curacautín, Región de La Araucanía", en: "Melipeuco / Curacautín, La Araucanía Region" },
    descripcion: { 
      es: "Reconocido mundialmente por sus bosques milenarios de araucarias, lagunas cordilleranas y la imponente presencia del Volcán Llaima. Un imperdible del turismo sustentable en La Araucanía.", 
      en: "World-renowned for its ancient araucaria forests, Andean lagoons, and the imposing presence of the Llaima Volcano. A must-see for sustainable tourism in La Araucanía." 
    },
    imagenes: [
      "../assets/imagenes/Conguillio/Conguillio1.jpg",
      "../assets/imagenes/Conguillio/Conguillio2.jpg",
      "../assets/imagenes/Conguillio/Conguillio3.jpg",
      "../assets/imagenes/Conguillio/Conguillio4.jpg"
    ],
    detalles: {
      duracion: { es: "Día completo", en: "Full day" },
      dificultad: { es: "Moderada", en: "Moderate" },
      distancia: "10 km (Sendero Sierra Nevada)",
      desnivel: "+450 m",
      accesibilidad: { es: "Sendero inclusivo adaptado en sector Laguna Captrén.", en: "Adapted inclusive trail in the Laguna Captrén sector." },
      horarios: { es: "Ingreso: 08:30 a 14:00 hrs. Salida: hasta las 18:00 hrs.", en: "Entry: 08:30 to 14:00 hrs. Exit: until 18:00 hrs." }
    },
    tarifas: [
      { tipo: { es: "Niños/as (-11 años) y Adulto Mayor (+60 años)", en: "Children (-11 years) & Seniors (+60 years)" }, precio: { es: "Gratis", en: "Free" } },
      { tipo: { es: "Jóvenes chilenos (12 a 17 años)", en: "Chilean Youth (12 to 17 years)" }, precio: "$2.700" },
      { tipo: { es: "Adulto chileno (18 a 59 años)", en: "Chilean Adult (18 to 59 years)" }, precio: "$4.700" },
      { tipo: { es: "Extranjeros", en: "Foreigners" }, precio: "$9.300" }
    ],
    rutaGps: {
      puntos: [
        { nombre: { es: "Playa Linda - Inicio Sendero Sierra Nevada", en: "Playa Linda - Sierra Nevada Trail Start" }, coords: [-38.6489, -71.6228] },
        { nombre: { es: "Primer Mirador Laguna Conguillío", en: "First Conguillío Lagoon Viewpoint" }, coords: [-38.6455, -71.6152] },
        { nombre: { es: "Bosque de Araucarias Milenarias", en: "Ancient Araucaria Forest" }, coords: [-38.6412, -71.6085] },
        { nombre: { es: "Segundo Mirador Glaciar Sierra Nevada", en: "Second Sierra Nevada Glacier Viewpoint" }, coords: [-38.6368, -71.6022] },
        { nombre: { es: "Mirador Cumbre Sierra Nevada (Vista Volcán Llaima)", en: "Sierra Nevada Summit Viewpoint (Llaima Volcano View)" }, coords: [-38.6328, -71.5965] }
      ]
    },
    itinerario: [
      { hora: "08:30", actividad: { es: "Ingreso por Caseta de Control CONAF.", en: "Entry through CONAF Control Booth." } },
      { hora: "09:30", actividad: { es: "Caminata por Sendero Sierra Nevada entre araucarias.", en: "Hike along Sierra Nevada Trail among araucarias." } },
      { hora: "12:30", actividad: { es: "Mirador Laguna Conguillío y Volcán Llaima.", en: "Conguillío Lagoon and Llaima Volcano Viewpoint." } },
      { hora: "14:00", actividad: { es: "Almuerzo en área habilitada.", en: "Lunch in designated area." } },
      { hora: "17:30", actividad: { es: "Retorno y salida del parque.", en: "Return and exit from the park." } }
    ]
  },
  "6": {
    id: "6",
    nombre: { es: "Parque Nacional Villarrica", en: "Villarrica National Park" },
    categoria: { es: "Naturaleza", en: "Nature" },
    tipo: { es: "RUTA", en: "ROUTE" },
    ubicacion: { es: "Pucón / Villarrica, Región de La Araucanía", en: "Pucón / Villarrica, La Araucanía Region" },
    descripcion: { 
      es: "Dominado por el imponente Volcán Villarrica (Rukapillán), ofrece senderos entre escoriales volcánicos, bosques de lengas y araucarias, cuevas volcánicas y vistas panorámicas a los lagos cordilleranos.", 
      en: "Dominated by the imposing Villarrica Volcano (Rukapillán), it offers trails through volcanic scoria, lenga and araucaria forests, volcanic caves, and panoramic views of Andean lakes." 
    },
    imagenes: [
      "../assets/imagenes/Villarrica/villarrica.jpg",
      "../assets/imagenes/Villarrica/villarrica2.jpg",
      "../assets/imagenes/Villarrica/villarrica3.jpg",
      "../assets/imagenes/Villarrica/villarrica4.jpg"
    ],
    detalles: {
      duracion: "4-5 hrs",
      dificultad: { es: "Moderada", en: "Moderate" },
      distancia: "8.5 km (Sendero Los Cráteres)",
      desnivel: "+420 m",
      accesibilidad: { es: "Acceso vehicular hasta sector Rucapillán; senderos de montaña con pendiente.", en: "Vehicular access to the Rucapillán sector; sloped mountain trails." },
      horarios: { es: "Lunes a Domingo: 08:30 - 18:00 hrs", en: "Monday to Sunday: 08:30 - 18:00 hrs" }
    },
    tarifas: [
      { tipo: { es: "Niños/as (-11 años) y Adulto Mayor (+60 años)", en: "Children (-11 years) & Seniors (+60 years)" }, precio: { es: "Gratis", en: "Free" } },
      { tipo: { es: "Jóvenes chilenos (12 a 17 años)", en: "Chilean Youth (12 to 17 years)" }, precio: "$2.700" },
      { tipo: { es: "Adulto chileno (18 a 59 años)", en: "Chilean Adult (18 to 59 years)" }, precio: "$4.700" },
      { tipo: { es: "Extranjeros", en: "Foreigners" }, precio: "$9.300" }
    ],
    rutaGps: {
      puntos: [
        { nombre: { es: "Guardaparques CONAF Sector Rucapillán", en: "CONAF Rangers Rucapillán Sector" }, coords: [-39.3812, -71.9585] },
        { nombre: { es: "Cuevas Volcánicas Villarrica", en: "Villarrica Volcanic Caves" }, coords: [-39.3868, -71.9535] },
        { nombre: { es: "Base Centro de Esquí Volcán Villarrica", en: "Villarrica Volcano Ski Center Base" }, coords: [-39.3915, -71.9492] },
        { nombre: { es: "Sendero Escorial Volcánico", en: "Volcanic Scoria Trail" }, coords: [-39.3958, -71.9445] },
        { nombre: { es: "Mirador Los Cráteres", en: "Los Cráteres Viewpoint" }, coords: [-39.3995, -71.9398] }
      ]
    },
    itinerario: [
      { hora: "08:30", actividad: { es: "Registro en guardaparques sector Rucapillán.", en: "Registration at Rucapillán sector rangers." } },
      { hora: "09:30", actividad: { es: "Inicio de caminata por Sendero Mirador Los Cráteres.", en: "Start of hike along Los Cráteres Viewpoint Trail." } },
      { hora: "11:30", actividad: { es: "Observación panorámica de volcanes Lanín, Quetrupillán y Llaima.", en: "Panoramic observation of Lanín, Quetrupillán, and Llaima volcanoes." } },
      { hora: "13:30", actividad: { es: "Descenso y retorno a la base.", en: "Descent and return to base." } }
    ]
  },
  "7": {
    id: "7",
    nombre: { es: "Parque Nacional Huerquehue", en: "Huerquehue National Park" },
    categoria: { es: "Naturaleza", en: "Nature" },
    tipo: { es: "RUTA", en: "ROUTE" },
    ubicacion: { es: "Sector Paillaco, Pucón, Región de La Araucanía", en: "Paillaco Sector, Pucón, La Araucanía Region" },
    descripcion: { 
      es: "Famoso por su circuito de lagunas cristalinas de altura (Chico, Toro y Verde) rodeadas de bosques milenarios de araucarias, coihues y cascadas escondidas en la precordillera andina.", 
      en: "Famous for its high-altitude crystal-clear lagoon circuit (Chico, Toro, and Verde) surrounded by ancient araucaria and coihue forests, and hidden waterfalls in the Andean foothills." 
    },
    imagenes: [
      "../assets/imagenes/Huerquehue/huerquehue.jpg",
      "../assets/imagenes/Huerquehue/huerquehue2.jpg",
      "../assets/imagenes/Huerquehue/huerquehue3.jpg",
      "../assets/imagenes/Huerquehue/huerquehue4.jpg"
    ],
    detalles: {
      duracion: "5-6 hrs",
      dificultad: { es: "Moderada", en: "Moderate" },
      distancia: "11.5 km (Sendero Los Lagos)",
      desnivel: "+580 m",
      accesibilidad: { es: "Sendero de montaña con escalones de madera y pendientes pronunciadas.", en: "Mountain trail with wooden steps and steep slopes." },
      horarios: { es: "Lunes a Domingo: 08:30 - 17:30 hrs (Ingreso hasta las 14:00 hrs)", en: "Monday to Sunday: 08:30 - 17:30 hrs (Entry until 14:00 hrs)" }
    },
    tarifas: [
      { tipo: { es: "Niños/as (-11 años) y Adulto Mayor (+60 años)", en: "Children (-11 years) & Seniors (+60 years)" }, precio: { es: "Gratis", en: "Free" } },
      { tipo: { es: "Jóvenes chilenos (12 a 17 años)", en: "Chilean Youth (12 to 17 years)" }, precio: "$2.700" },
      { tipo: { es: "Adulto chileno (18 a 59 años)", en: "Chilean Adult (18 to 59 years)" }, precio: "$4.700" },
      { tipo: { es: "Extranjeros", en: "Foreigners" }, precio: "$9.300" }
    ],
    rutaGps: {
      puntos: [
        { nombre: { es: "Administración CONAF Lago Tinquilco", en: "CONAF Administration Lago Tinquilco" }, coords: [-39.1588, -71.7245] },
        { nombre: { es: "Mirador Lago Tinquilco", en: "Lago Tinquilco Viewpoint" }, coords: [-39.1560, -71.7198] },
        { nombre: { es: "Salto Nido de Águila", en: "Nido de Águila Waterfall" }, coords: [-39.1534, -71.7168] },
        { nombre: { es: "Lago Chico", en: "Lago Chico" }, coords: [-39.1475, -71.7112] },
        { nombre: { es: "Lago Toro", en: "Lago Toro" }, coords: [-39.1432, -71.7065] },
        { nombre: { es: "Lago Verde", en: "Lago Verde" }, coords: [-39.1396, -71.7024] }
      ]
    },
    itinerario: [
      { hora: "08:30", actividad: { es: "Ingreso y registro en administración Lago Tinquilco.", en: "Entry and registration at Lago Tinquilco administration." } },
      { hora: "10:00", actividad: { es: "Mirador Lago Tinquilco y Salto Nido de Águila.", en: "Lago Tinquilco Viewpoint and Nido de Águila Waterfall." } },
      { hora: "11:30", actividad: { es: "Recorrido por Lago Chico, Lago Toro y Lago Verde.", en: "Tour of Lago Chico, Lago Toro, and Lago Verde." } },
      { hora: "14:30", actividad: { es: "Retorno hacia portería.", en: "Return toward the gate." } }
    ]
  },
  "8": {
    id: "8",
    nombre: { es: "Reserva Nacional Malalcahuello", en: "Malalcahuello National Reserve" },
    categoria: { es: "Naturaleza", en: "Nature" },
    tipo: { es: "RUTA", en: "ROUTE" },
    ubicacion: { es: "Curacautín, Región de La Araucanía", en: "Curacautín, La Araucanía Region" },
    descripcion: { 
      es: "Ubicada en las laderas del Volcán Lonquimay y dentro del Geoparque Kütralkura, combina escoriales volcánicos recientes, cráteres como el Navidad y extensos bosques de araucarias.", 
      en: "Located on the slopes of the Lonquimay Volcano and within the Kütralkura Geopark, it combines recent volcanic scoria, craters like Navidad, and extensive araucaria forests." 
    },
    imagenes: [
      "../assets/imagenes/Malalcahuello/malalcahuello.jpg",
      "../assets/imagenes/Malalcahuello/malalcahuello2.jpg",
      "../assets/imagenes/Malalcahuello/malalcahuello3.jpg",
      "../assets/imagenes/Malalcahuello/malalcahuello4.jpg"
    ],
    detalles: {
      duracion: "3-4 hrs",
      dificultad: { es: "Moderada", en: "Moderate" },
      distancia: "7.0 km (Sendero Cráter Navidad)",
      desnivel: "+350 m",
      accesibilidad: { es: "Acceso vehicular hasta base Corralco; sendero volcánico de arena y roca.", en: "Vehicular access to Corralco base; volcanic sand and rock trail." },
      horarios: { es: "Lunes a Domingo: 08:30 - 18:00 hrs", en: "Monday to Sunday: 08:30 - 18:00 hrs" }
    },
    tarifas: [
      { tipo: { es: "Niños/as (-11 años) y Adulto Mayor (+60 años)", en: "Children (-11 years) & Seniors (+60 years)" }, precio: { es: "Gratis", en: "Free" } },
      { tipo: { es: "Adulto chileno (18 a 59 años)", en: "Chilean Adult (18 to 59 years)" }, precio: "$3.700" },
      { tipo: { es: "Extranjeros", en: "Foreigners" }, precio: "$7.300" }
    ],
    rutaGps: {
      puntos: [
        { nombre: { es: "Portería CONAF Sector Piedra Santa", en: "CONAF Gate Piedra Santa Sector" }, coords: [-38.4235, -71.5642] },
        { nombre: { es: "Base Volcán Lonquimay (Corralco)", en: "Lonquimay Volcano Base (Corralco)" }, coords: [-38.4048, -71.5615] },
        { nombre: { es: "Escorial Volcánico 1988", en: "1988 Volcanic Scoria" }, coords: [-38.3935, -71.5568] },
        { nombre: { es: "Mirador Cráter Navidad", en: "Navidad Crater Viewpoint" }, coords: [-38.3842, -71.5512] }
      ]
    },
    itinerario: [
      { hora: "09:00", actividad: { es: "Ingreso por sector Piedra Santa.", en: "Entry through Piedra Santa sector." } },
      { hora: "10:00", actividad: { es: "Ascenso por sendero volcánico hacia Cráter Navidad.", en: "Ascent via volcanic trail toward Navidad Crater." } },
      { hora: "11:30", actividad: { es: "Vista panorámica del valle de Malalcahuello y Sierra Nevada.", en: "Panoramic view of the Malalcahuello valley and Sierra Nevada." } },
      { hora: "13:00", actividad: { es: "Regreso a zona de picnic.", en: "Return to picnic area." } }
    ]
  },
  "9": {
    id: "9",
    nombre: { es: "Parque Nacional Nahuelbuta", en: "Nahuelbuta National Park" },
    categoria: { es: "Naturaleza", en: "Nature" },
    tipo: { es: "RUTA", en: "ROUTE" },
    ubicacion: { es: "Cordillera de Nahuelbuta, Angol, Malleco", en: "Nahuelbuta Mountain Range, Angol, Malleco" },
    descripcion: { 
      es: "El punto más alto de la Cordillera de la Costa en La Araucanía, hogar de araucarias milenarias costeras y el emblemático mirador Piedra del Águila, desde donde se divisa desde el océano Pacífico hasta los volcanes andinos.", 
      en: "The highest point of the Coastal Mountain Range in La Araucanía, home to ancient coastal araucarias and the emblematic Piedra del Águila viewpoint, offering views from the Pacific Ocean to the Andean volcanoes." 
    },
    imagenes: [
      "../assets/imagenes/Nahuelbuta/nahuelbuta.jpg",
      "../assets/imagenes/Nahuelbuta/nahuelbuta2.jpg",
      "../assets/imagenes/Nahuelbuta/nahuelbuta3.jpg",
      "../assets/imagenes/Nahuelbuta/nahuelbuta4.jpg"
    ],
    detalles: {
      duracion: "2-3 hrs",
      dificultad: { es: "Fácil", en: "Easy" },
      distancia: "4.5 km (Sendero Piedra del Águila)",
      desnivel: "+180 m",
      accesibilidad: { es: "Sendero amplio entre bosques de lenga, coihue y araucaria.", en: "Wide trail among lenga, coihue, and araucaria forests." },
      horarios: { es: "Lunes a Domingo: 08:30 - 18:00 hrs", en: "Monday to Sunday: 08:30 - 18:00 hrs" }
    },
    tarifas: [
      { tipo: { es: "Niños/as (-11 años) y Adulto Mayor (+60 años)", en: "Children (-11 years) & Seniors (+60 years)" }, precio: { es: "Gratis", en: "Free" } },
      { tipo: { es: "Adulto chileno (18 a 59 años)", en: "Chilean Adult (18 to 59 years)" }, precio: "$3.700" },
      { tipo: { es: "Extranjeros", en: "Foreigners" }, precio: "$7.300" }
    ],
    rutaGps: {
      puntos: [
        { nombre: { es: "Guardaparques CONAF Sector Pehuenco", en: "CONAF Rangers Pehuenco Sector" }, coords: [-37.8265, -73.0112] },
        { nombre: { es: "Bosque de Araucarias Costeras", en: "Coastal Araucaria Forest" }, coords: [-37.8218, -73.0215] },
        { nombre: { es: "Mirador Piedra del Águila (1.379 m)", en: "Piedra del Águila Viewpoint (1,379 m)" }, coords: [-37.8174, -73.0308] },
        { nombre: { es: "Circuito Casa de Piedra", en: "Casa de Piedra Circuit" }, coords: [-37.8224, -73.0245] },
        { nombre: { es: "Retorno Sector Pehuenco", en: "Pehuenco Sector Return" }, coords: [-37.8265, -73.0112] }
      ]
    },
    itinerario: [
      { hora: "09:30", actividad: { es: "Registro en guardaparques sector Pehuenco.", en: "Registration at Pehuenco sector rangers." } },
      { hora: "10:15", actividad: { es: "Caminata interpretativa entre araucarias costeras.", en: "Interpretive hike among coastal araucarias." } },
      { hora: "11:30", actividad: { es: "Llegada al mirador rocoso Piedra del Águila (1.379 m s.n.m.).", en: "Arrival at the rocky Piedra del Águila viewpoint (1,379 m a.s.l.)." } },
      { hora: "12:30", actividad: { es: "Retorno por circuito circular.", en: "Return via circular circuit." } }
    ]
  },
  "10": {
    id: "10",
    nombre: { es: "Parque Nacional Tolhuaca", en: "Tolhuaca National Park" },
    categoria: { es: "Naturaleza", en: "Nature" },
    tipo: { es: "RUTA", en: "ROUTE" },
    ubicacion: { es: "Victoria / Curacautín, Región de La Araucanía", en: "Victoria / Curacautín, La Araucanía Region" },
    descripcion: { 
      es: "Santuario precordillerano caracterizado por la tranquila Laguna Malleco, el imponente Salto de la Culebra y bosques vírgenes de robles, raulíes y araucarias con escasa intervención humana.", 
      en: "Pre-Andean sanctuary characterized by the peaceful Malleco Lagoon, the imposing Salto de la Culebra waterfall, and virgin forests of oak, raulí, and araucaria with minimal human intervention." 
    },
    imagenes: [
      "../assets/imagenes/Tolhuaca/tolhuaca.jpg",
      "../assets/imagenes/Tolhuaca/tolhuaca2.jpg",
      "../assets/imagenes/Tolhuaca/tolhuaca3.jpg",
      "../assets/imagenes/Tolhuaca/tolhuaca4.jpg"
    ],
    detalles: {
      duracion: "3 hrs",
      dificultad: { es: "Fácil", en: "Easy" },
      distancia: "5.2 km (Sendero Laguna Verde y Salto de la Culebra)",
      desnivel: "+210 m",
      accesibilidad: { es: "Tramos planos bordeando la Laguna Malleco aptos para toda la familia.", en: "Flat sections bordering Malleco Lagoon suitable for the whole family." },
      horarios: { es: "Lunes a Domingo: 08:30 - 17:30 hrs", en: "Monday to Sunday: 08:30 - 17:30 hrs" }
    },
    tarifas: [
      { tipo: { es: "Niños/as (-11 años) y Adulto Mayor (+60 años)", en: "Children (-11 years) & Seniors (+60 years)" }, precio: { es: "Gratis", en: "Free" } },
      { tipo: { es: "Adulto chileno (18 a 59 años)", en: "Chilean Adult (18 to 59 years)" }, precio: "$3.700" },
      { tipo: { es: "Extranjeros", en: "Foreigners" }, precio: "$7.300" }
    ],
    rutaGps: {
      puntos: [
        { nombre: { es: "Administración CONAF Laguna Malleco", en: "CONAF Administration Laguna Malleco" }, coords: [-38.2156, -71.8165] },
        { nombre: { es: "Ribera Norte Laguna Malleco", en: "Malleco Lagoon North Shore" }, coords: [-38.2122, -71.8095] },
        { nombre: { es: "Mirador Salto de la Culebra", en: "Salto de la Culebra Viewpoint" }, coords: [-38.2085, -71.8012] },
        { nombre: { es: "Sendero Bosque de Araucarias", en: "Araucaria Forest Trail" }, coords: [-38.2052, -71.7955] },
        { nombre: { es: "Laguna Verde Tolhuaca", en: "Tolhuaca Green Lagoon" }, coords: [-38.2025, -71.7918] }
      ]
    },
    itinerario: [
      { hora: "09:00", actividad: { es: "Ingreso y paseo por orilla de Laguna Malleco.", en: "Entry and walk along the shore of Malleco Lagoon." } },
      { hora: "10:15", actividad: { es: "Caminata hacia mirador Salto de la Culebra.", en: "Hike toward Salto de la Culebra viewpoint." } },
      { hora: "11:30", actividad: { es: "Avistamiento de aves acuáticas y carpinteros negros.", en: "Birdwatching for water birds and Magellanic woodpeckers." } },
      { hora: "12:30", actividad: { es: "Retorno a sector de merienda.", en: "Return to snack area." } }
    ]
  },
  "11": {
    id: "11",
    nombre: { es: "Valle de la Luna", en: "Moon Valley" },
    categoria: { es: "Naturaleza", en: "Nature" },
    tipo: { es: "RUTA", en: "ROUTE" },
    ubicacion: { es: "Reserva Nacional Los Flamencos, San Pedro de Atacama, Antofagasta", en: "Los Flamencos National Reserve, San Pedro de Atacama, Antofagasta" },
    descripcion: { 
      es: "Paisaje desértico único moldeado durante milenios por el viento y el agua en la Cordillera de la Sal, con dunas gigantes, anfiteatros naturales y afloramientos salinos de aspecto lunar.", 
      en: "Unique desert landscape molded over millennia by wind and water in the Cordillera de la Sal, featuring giant dunes, natural amphitheaters, and lunar-like saline outcrops." 
    },
    imagenes: [
      "../assets/imagenes/Valle_Luna/valle_luna.jpg",
      "../assets/imagenes/Valle_Luna/valle_luna2.jpg",
      "../assets/imagenes/Valle_Luna/valle_luna3.jpg",
      "../assets/imagenes/Valle_Luna/valle_luna4.jpg"
    ],
    detalles: {
      duracion: "3-4 hrs",
      dificultad: { es: "Fácil", en: "Easy" },
      distancia: "6.0 km (Circuito Duna Mayor y Mirador Achaches)",
      desnivel: "+150 m",
      accesibilidad: { es: "Acceso vehicular por ruta interior demarcada; senderos peatonales señalizados.", en: "Vehicular access via marked interior route; signposted walking trails." },
      horarios: { es: "Lunes a Domingo: 08:00 - 18:00 hrs", en: "Monday to Sunday: 08:00 - 18:00 hrs" }
    },
    tarifas: [
      { tipo: { es: "Público General Nacional", en: "General National Public" }, precio: "$5.400" },
      { tipo: { es: "Estudiantes / Adulto Mayor Nacional", en: "National Students / Seniors" }, precio: "$2.700" },
      { tipo: { es: "Extranjeros", en: "Foreigners" }, precio: "$10.800" }
    ],
    rutaGps: {
      puntos: [
        { nombre: { es: "Control Acceso Cordillera de la Sal", en: "Cordillera de la Sal Access Control" }, coords: [-22.9125, -68.2685] },
        { nombre: { es: "Mirador Duna Mayor", en: "Duna Mayor Viewpoint" }, coords: [-22.9228, -68.2812] },
        { nombre: { es: "El Anfiteatro", en: "The Amphitheater" }, coords: [-22.9295, -68.2915] },
        { nombre: { es: "Formación Las Tres Marías", en: "Las Tres Marías Formation" }, coords: [-22.9372, -68.3018] }
      ]
    },
    itinerario: [
      { hora: "15:00", actividad: { es: "Ingreso por control sector Cordillera de la Sal.", en: "Entry through Cordillera de la Sal sector control." } },
      { hora: "15:45", actividad: { es: "Caminata por sendero Duna Mayor y Anfiteatro.", en: "Hike along Duna Mayor trail and Amphitheater." } },
      { hora: "17:00", actividad: { es: "Visita a formación Tres Marías y mina de sal.", en: "Visit to Tres Marías formation and salt mine." } },
      { hora: "18:00", actividad: { es: "Contemplación del atardecer sobre los volcanes Licancabur y Lascar.", en: "Sunset contemplation over the Licancabur and Lascar volcanoes." } }
    ]
  },
  "12": {
    id: "12",
    nombre: { es: "Parque Nacional La Campana", en: "La Campana National Park" },
    categoria: { es: "Naturaleza", en: "Nature" },
    tipo: { es: "RUTA", en: "ROUTE" },
    ubicacion: { es: "Granizo / Cajón Grande, Olmué, Región de Valparaíso", en: "Granizo / Cajón Grande, Olmué, Valparaíso Region" },
    descripcion: { 
      es: "Reserva de la Biósfera que protege uno de los últimos bosques naturales de palma chilena (Jubaea chilensis) y el histórico sendero recorrido por Charles Darwin hasta la cumbre del Cerro La Campana.", 
      en: "Biosphere Reserve protecting one of the last natural forests of Chilean palm (Jubaea chilensis) and the historic trail traveled by Charles Darwin to the summit of Cerro La Campana." 
    },
    imagenes: [
      "../assets/imagenes/La_Campana/campana.jpg",
      "../assets/imagenes/La_Campana/campana2.jpg",
      "../assets/imagenes/La_Campana/campana3.jpg",
      "../assets/imagenes/La_Campana/campana4.jpg"
    ],
    detalles: {
      duracion: "4-5 hrs",
      dificultad: { es: "Moderada", en: "Moderate" },
      distancia: "9.0 km (Sendero El Andinista / Palmar de Ocoa)",
      desnivel: "+620 m",
      accesibilidad: { es: "Sendero inclusivo corto en sector Granizo; ruta de cumbre exige buen calzado.", en: "Short inclusive trail in Granizo sector; summit route requires good footwear." },
      horarios: { es: "Martes a Domingo: 08:30 - 17:30 hrs", en: "Tuesday to Sunday: 08:30 - 17:30 hrs" }
    },
    tarifas: [
      { tipo: { es: "Niños/as (-11 años) y Adulto Mayor (+60 años)", en: "Children (-11 years) & Seniors (+60 years)" }, precio: { es: "Gratis", en: "Free" } },
      { tipo: { es: "Adulto chileno (18 a 59 años)", en: "Chilean Adult (18 to 59 years)" }, precio: "$3.700" },
      { tipo: { es: "Extranjeros", en: "Foreigners" }, precio: "$7.300" }
    ],
    rutaGps: {
      puntos: [
        { nombre: { es: "Portería CONAF Sector Granizo", en: "CONAF Gate Granizo Sector" }, coords: [-32.9785, -71.1325] },
        { nombre: { es: "Sector La Mina y Placa Charles Darwin", en: "La Mina Sector and Charles Darwin Plaque" }, coords: [-32.9652, -71.1248] },
        { nombre: { es: "Portezuelo Ocoa", en: "Ocoa Pass" }, coords: [-32.9574, -71.1212] },
        { nombre: { es: "Cumbre Cerro La Campana (1.880 m)", en: "Cerro La Campana Summit (1,880 m)" }, coords: [-32.9536, -71.1195] }
      ]
    },
    itinerario: [
      { hora: "08:30", actividad: { es: "Ingreso por sector Granizo o Palmar de Ocoa.", en: "Entry through Granizo or Palmar de Ocoa sector." } },
      { hora: "10:00", actividad: { es: "Recorrido entre palmas chilenas centenarias y bosque esclerófilo.", en: "Tour among centuries-old Chilean palms and sclerophyllous forest." } },
      { hora: "11:45", actividad: { es: "Descanso en sector La Mina / Mirador del Valle.", en: "Rest at La Mina sector / Valley Viewpoint." } },
      { hora: "13:30", actividad: { es: "Descenso hacia portería.", en: "Descent toward the gate." } }
    ]
  },
  "13": {
    id: "13",
    nombre: { es: "Parque Nacional Radal Siete Tazas", en: "Radal Siete Tazas National Park" },
    categoria: { es: "Naturaleza", en: "Nature" },
    tipo: { es: "RUTA", en: "ROUTE" },
    ubicacion: { es: "Parque Inglés, Molina, Región del Maule", en: "Parque Inglés, Molina, Maule Region" },
    descripcion: { 
      es: "Espectacular sucesión de siete pozones y cascadas de aguas turquesas esculpidas en roca basáltica por el río Claro, acompañado de los saltos La Leona y Velo de la Novia.", 
      en: "Spectacular succession of seven turquoise pools and waterfalls sculpted in basaltic rock by the Claro River, accompanied by La Leona and Velo de la Novia waterfalls." 
    },
    imagenes: [
      "../assets/imagenes/Siete_Tazas/siete_tazas.jpg",
      "../assets/imagenes/Siete_Tazas/siete_tazas2.jpg",
      "../assets/imagenes/Siete_Tazas/siete_tazas3.jpg",
      "../assets/imagenes/Siete_Tazas/siete_tazas4.jpg"
    ],
    detalles: {
      duracion: "2-3 hrs",
      dificultad: { es: "Fácil", en: "Easy" },
      distancia: "3.5 km (Circuito Miradores Siete Tazas y Salto La Leona)",
      desnivel: "+140 m",
      accesibilidad: { es: "Pasarelas de madera universales hasta el mirador principal de las Siete Tazas.", en: "Universal wooden walkways to the main Siete Tazas viewpoint." },
      horarios: { es: "Lunes a Domingo: 08:30 - 18:00 hrs", en: "Monday to Sunday: 08:30 - 18:00 hrs" }
    },
    tarifas: [
      { tipo: { es: "Niños/as (-11 años) y Adulto Mayor (+60 años)", en: "Children (-11 years) & Seniors (+60 years)" }, precio: { es: "Gratis", en: "Free" } },
      { tipo: { es: "Adulto chileno (18 a 59 años)", en: "Chilean Adult (18 to 59 years)" }, precio: "$4.700" },
      { tipo: { es: "Extranjeros", en: "Foreigners" }, precio: "$9.300" }
    ],
    rutaGps: {
      puntos: [
        { nombre: { es: "Mirador Salto Velo de la Novia", en: "Velo de la Novia Waterfall Viewpoint" }, coords: [-35.4518, -71.0312] },
        { nombre: { es: "Pasarelas Mirador Siete Tazas", en: "Siete Tazas Viewpoint Walkways" }, coords: [-35.4584, -71.0235] },
        { nombre: { es: "Sendero Bosque Río Claro", en: "Río Claro Forest Trail" }, coords: [-35.4622, -71.0168] },
        { nombre: { es: "Salto La Leona", en: "La Leona Waterfall" }, coords: [-35.4655, -71.0115] }
      ]
    },
    itinerario: [
      { hora: "09:30", actividad: { es: "Mirador Salto Velo de la Novia.", en: "Velo de la Novia Waterfall Viewpoint." } },
      { hora: "10:15", actividad: { es: "Recorrido por pasarelas de las Siete Tazas.", en: "Tour of the Siete Tazas walkways." } },
      { hora: "11:15", actividad: { es: "Sendero hacia Salto La Leona.", en: "Trail toward La Leona Waterfall." } },
      { hora: "12:30", actividad: { es: "Retorno a sector Parque Inglés.", en: "Return to Parque Inglés sector." } }
    ]
  },
  "14": {
    id: "14",
    nombre: { es: "Saltos del Petrohué", en: "Petrohué Waterfalls" },
    categoria: { es: "Naturaleza", en: "Nature" },
    tipo: { es: "RUTA", en: "ROUTE" },
    ubicacion: { es: "Parque Nacional Vicente Pérez Rosales, Puerto Varas, Los Lagos", en: "Vicente Pérez Rosales National Park, Puerto Varas, Los Lagos" },
    descripcion: { 
      es: "Impresionantes caídas de agua color esmeralda que fluyen sobre antiguos cauces de lava volcánica, con el cono nevado del Volcán Osorno como telón de fondo.", 
      en: "Stunning emerald waterfalls flowing over ancient volcanic lava beds, with the snow-capped cone of the Osorno Volcano as a backdrop." 
    },
    imagenes: [
      "../assets/imagenes/Petrohue/petrohue.jpg",
      "../assets/imagenes/Petrohue/petrohue2.jpg",
      "../assets/imagenes/Petrohue/petrohue3.jpg",
      "../assets/imagenes/Petrohue/petrohue4.jpg"
    ],
    detalles: {
      duracion: "1 hr 30 min",
      dificultad: { es: "Fácil", en: "Easy" },
      distancia: "1.8 km (Sendero Los Enamorados y Miradores)",
      desnivel: "+45 m",
      accesibilidad: { es: "Pasarelas completamente accesibles para sillas de ruedas y coches.", en: "Walkways fully accessible for wheelchairs and strollers." },
      horarios: { es: "Lunes a Domingo: 09:00 - 18:30 hrs", en: "Monday to Sunday: 09:00 - 18:30 hrs" }
    },
    tarifas: [
      { tipo: { es: "Niños/as (-11 años) y Adulto Mayor (+60 años)", en: "Children (-11 years) & Seniors (+60 years)" }, precio: { es: "Gratis", en: "Free" } },
      { tipo: { es: "Adulto chileno (18 a 59 años)", en: "Chilean Adult (18 to 59 years)" }, precio: "$4.700" },
      { tipo: { es: "Extranjeros", en: "Foreigners" }, precio: "$9.300" }
    ],
    rutaGps: {
      puntos: [
        { nombre: { es: "Acceso CONAF Saltos del Petrohué", en: "CONAF Access Petrohué Waterfalls" }, coords: [-41.1738, -72.4485] },
        { nombre: { es: "Pasarela Rápidos Río Petrohué", en: "Petrohué River Rapids Walkway" }, coords: [-41.1722, -72.4452] },
        { nombre: { es: "Mirador Principal (Vista Volcán Osorno)", en: "Main Viewpoint (Osorno Volcano View)" }, coords: [-41.1708, -72.4428] },
        { nombre: { es: "Sendero Los Enamorados", en: "Los Enamorados Trail" }, coords: [-41.1685, -72.4412] }
      ]
    },
    itinerario: [
      { hora: "10:00", actividad: { es: "Ingreso y recorrido por pasarelas sobre los rápidos del río Petrohué.", en: "Entry and tour along walkways over the Petrohué river rapids." } },
      { hora: "10:40", actividad: { es: "Mirador principal con vista al Volcán Osorno.", en: "Main viewpoint overlooking the Osorno Volcano." } },
      { hora: "11:10", actividad: { es: "Caminata suave por Sendero Los Enamorados entre bosque siempreverde.", en: "Gentle walk along Los Enamorados Trail among evergreen forest." } }
    ]
  },
  "15": {
    id: "15",
    nombre: { es: "Parque Nacional Chiloé", en: "Chiloé National Park" },
    categoria: { es: "Naturaleza", en: "Nature" },
    tipo: { es: "RUTA", en: "ROUTE" },
    ubicacion: { es: "Sector Chanquín, Cucao, Chonchi, Región de Los Lagos", en: "Chanquín Sector, Cucao, Chonchi, Los Lagos Region" },
    descripcion: { 
      es: "Bosque templado lluvioso siempreverde que se encuentra con las playas abiertas del océano Pacífico, destacando el místico Sendero El Tepual sobre pasarelas de madera entre tepúes y helechos.", 
      en: "Evergreen temperate rainforest meeting the open beaches of the Pacific Ocean, highlighting the mystical El Tepual Trail on wooden walkways among tepu trees and ferns." 
    },
    imagenes: [
      "../assets/imagenes/Chiloe/chiloe.jpg",
      "../assets/imagenes/Chiloe/chiloe2.jpg",
      "../assets/imagenes/Chiloe/chiloe3.jpg",
      "../assets/imagenes/Chiloe/chiloe4.jpg"
    ],
    detalles: {
      duracion: "2 hrs",
      dificultad: { es: "Fácil", en: "Easy" },
      distancia: "2.4 km (Sendero El Tepual + Dunas de Cucao)",
      desnivel: "+35 m",
      accesibilidad: { es: "Pasarelas de madera elevadas sobre el bosque húmedo.", en: "Raised wooden walkways over the humid forest." },
      horarios: { es: "Lunes a Domingo: 09:00 - 17:30 hrs", en: "Monday to Sunday: 09:00 - 17:30 hrs" }
    },
    tarifas: [
      { tipo: { es: "Niños/as (-11 años) y Adulto Mayor (+60 años)", en: "Children (-11 years) & Seniors (+60 years)" }, precio: { es: "Gratis", en: "Free" } },
      { tipo: { es: "Adulto chileno (18 a 59 años)", en: "Chilean Adult (18 to 59 years)" }, precio: "$3.700" },
      { tipo: { es: "Extranjeros", en: "Foreigners" }, precio: "$7.300" }
    ],
    rutaGps: {
      puntos: [
        { nombre: { es: "Centro Ambiental Chanquín", en: "Chanquín Environmental Center" }, coords: [-42.6258, -74.1045] },
        { nombre: { es: "Pasarelas Sendero El Tepual", en: "El Tepual Trail Walkways" }, coords: [-42.6242, -74.1112] },
        { nombre: { es: "Mirador Dunas de Cucao", en: "Cucao Dunes Viewpoint" }, coords: [-42.6235, -74.1178] },
        { nombre: { es: "Playa Pacífico Cucao", en: "Cucao Pacific Beach" }, coords: [-42.6232, -74.1225] }
      ]
    },
    itinerario: [
      { hora: "10:00", actividad: { es: "Centro de Información Ambiental en Chanquín.", en: "Environmental Information Center in Chanquín." } },
      { hora: "10:30", actividad: { es: "Recorrido por pasarelas de Sendero El Tepual.", en: "Tour of El Tepual Trail walkways." } },
      { hora: "11:30", actividad: { es: "Caminata hacia el mirador de dunas y playa de Cucao.", en: "Hike toward the dunes viewpoint and Cucao beach." } }
    ]
  },
  "16": {
    id: "16",
    nombre: { es: "Parque Nacional Queulat", en: "Queulat National Park" },
    categoria: { es: "Naturaleza", en: "Nature" },
    tipo: { es: "RUTA", en: "ROUTE" },
    ubicacion: { es: "Carretera Austral, Puyuhuapi, Región de Aysén", en: "Carretera Austral, Puyuhuapi, Aysén Region" },
    descripcion: { 
      es: "Joya de la Carretera Austral famoso por su Ventisquero Colgante, cuyas cascadas de deshielo caen cientos de metros hacia una laguna glaciar rodeada de selva fría patagónica.", 
      en: "Jewel of the Carretera Austral famous for its Hanging Snowdrift, whose meltwater waterfalls plunge hundreds of meters into a glacial lagoon surrounded by cold Patagonian rainforest." 
    },
    imagenes: [
      "../assets/imagenes/Queulat/queulat.jpg",
      "../assets/imagenes/Queulat/queulat2.jpg",
      "../assets/imagenes/Queulat/queulat3.jpg",
      "../assets/imagenes/Queulat/queulat4.jpg"
    ],
    detalles: {
      duracion: "3-4 hrs",
      dificultad: { es: "Moderada", en: "Moderate" },
      distancia: "6.6 km (Sendero Mirador Panorámico Ventisquero Colgante)",
      desnivel: "+310 m",
      accesibilidad: { es: "Sendero accesible corto hasta mirador Laguna Témpanos; mirador alto con pendiente.", en: "Short accessible trail to Laguna Témpanos viewpoint; high sloped viewpoint." },
      horarios: { es: "Martes a Domingo: 09:00 - 17:00 hrs", en: "Tuesday to Sunday: 09:00 - 17:00 hrs" }
    },
    tarifas: [
      { tipo: { es: "Niños/as (-11 años) y Adulto Mayor (+60 años)", en: "Children (-11 years) & Seniors (+60 years)" }, precio: { es: "Gratis", en: "Free" } },
      { tipo: { es: "Adulto chileno (18 a 59 años)", en: "Chilean Adult (18 to 59 years)" }, precio: "$5.400" },
      { tipo: { es: "Extranjeros", en: "Foreigners" }, precio: "$10.800" }
    ],
    rutaGps: {
      puntos: [
        { nombre: { es: "Portería y Puente Colgante Río Ventisquero", en: "Ventisquero River Gate and Suspension Bridge" }, coords: [-44.4135, -72.5592] },
        { nombre: { es: "Mirador Laguna Témpanos", en: "Laguna Témpanos Viewpoint" }, coords: [-44.4148, -72.5465] },
        { nombre: { es: "Ascenso Selva Fría Patagónica", en: "Cold Patagonian Rainforest Ascent" }, coords: [-44.4112, -72.5398] },
        { nombre: { es: "Mirador Panorámico Ventisquero Colgante", en: "Hanging Snowdrift Panoramic Viewpoint" }, coords: [-44.4085, -72.5342] }
      ]
    },
    itinerario: [
      { hora: "09:30", actividad: { es: "Cruce del puente colgante sobre el río Ventisquero.", en: "Crossing the suspension bridge over the Ventisquero River." } },
      { hora: "10:30", actividad: { es: "Ascenso a través del bosque siempreverde patagónico.", en: "Ascent through the Patagonian evergreen forest." } },
      { hora: "11:45", actividad: { es: "Llegada al Mirador Panorámico frente al Ventisquero Colgante.", en: "Arrival at the Panoramic Viewpoint facing the Hanging Snowdrift." } },
      { hora: "13:00", actividad: { es: "Retorno hacia Laguna Témpanos.", en: "Return toward Laguna Témpanos." } }
    ]
  },
  "17": {
    id: "17",
    nombre: { es: "Parque Nacional Torres del Paine", en: "Torres del Paine National Park" },
    categoria: { es: "Naturaleza", en: "Nature" },
    tipo: { es: "RUTA", en: "ROUTE" },
    ubicacion: { es: "Provincia de Última Esperanza, Región de Magallanes", en: "Última Esperanza Province, Magallanes Region" },
    descripcion: { 
      es: "Octava maravilla natural del mundo y Reserva de la Biósfera, reconocido por sus agujas de granito, glaciares milenarios, lagos turquesa y fauna patagónica como guanacos y cóndores.", 
      en: "Eighth natural wonder of the world and Biosphere Reserve, renowned for its granite spires, ancient glaciers, turquoise lakes, and Patagonian wildlife such as guanacos and condors." 
    },
    imagenes: [
      "../assets/imagenes/Torres_Paine/torres_paine.jpg",
      "../assets/imagenes/Torres_Paine/torres_paine2.jpg",
      "../assets/imagenes/Torres_Paine/torres_paine3.jpg",
      "../assets/imagenes/Torres_Paine/torres_paine4.jpg"
    ],
    detalles: {
      duracion: { es: "Día completo", en: "Full day" },
      dificultad: { es: "Alta", en: "High" },
      distancia: "18 km ida y vuelta (Sendero Mirador Base Las Torres)",
      desnivel: "+870 m",
      accesibilidad: { es: "Miradores vehiculares accesibles en Laguna Amarga y Salto Grande; trekking de alta montaña.", en: "Accessible vehicular viewpoints at Laguna Amarga and Salto Grande; high mountain trekking." },
      horarios: { es: "Lunes a Domingo: 08:00 - 20:00 hrs", en: "Monday to Sunday: 08:00 - 20:00 hrs" }
    },
    tarifas: [
      { tipo: { es: "Niños/as (-11 años) y Adulto Mayor (+60 años)", en: "Children (-11 years) & Seniors (+60 years)" }, precio: { es: "Gratis", en: "Free" } },
      { tipo: { es: "Adulto chileno (hasta 3 días)", en: "Chilean Adult (up to 3 days)" }, precio: "$11.400" },
      { tipo: { es: "Extranjeros (hasta 3 días)", en: "Foreigners (up to 3 days)" }, precio: "$32.400" }
    ],
    rutaGps: {
      puntos: [
        { nombre: { es: "Inicio Sendero Sector Central", en: "Central Sector Trail Start" }, coords: [-50.9715, -72.8742] },
        { nombre: { es: "Paso de los Vientos (Valle Ascencio)", en: "Winds Pass (Ascencio Valley)" }, coords: [-50.9582, -72.9015] },
        { nombre: { es: "Refugio y Campamento El Chileno", en: "El Chileno Refuge and Campsite" }, coords: [-50.9518, -72.9195] },
        { nombre: { es: "Mirador Base Las Torres", en: "Base Las Torres Viewpoint" }, coords: [-50.9422, -72.9488] }
      ]
    },
    itinerario: [
      { hora: "08:00", actividad: { es: "Inicio de caminata desde Sector Central hacia Valle Ascencio.", en: "Start of hike from Central Sector toward Ascencio Valley." } },
      { hora: "10:00", actividad: { es: "Paso por Campamento El Chileno entre bosque de lengas.", en: "Pass through El Chileno Campsite among lenga forests." } },
      { hora: "12:00", actividad: { es: "Ascenso por la morrena glaciar hasta Mirador Base Las Torres.", en: "Ascent through the glacial moraine to Base Las Torres Viewpoint." } },
      { hora: "16:30", actividad: { es: "Retorno a la base.", en: "Return to base." } }
    ]
  },
  "18": {
    id: "18",
    nombre: { es: "Fuerte de Niebla (Castillo de Niebla)", en: "Niebla Fort (Niebla Castle)" },
    categoria: { es: "Cultura", en: "Culture" },
    tipo: { es: "RUTA", en: "ROUTE" },
    ubicacion: { es: "Camino a Niebla s/n, Bahía de Corral, Valdivia, Región de Los Ríos", en: "Camino a Niebla s/n, Corral Bay, Valdivia, Los Ríos Region" },
    descripcion: { 
      es: "Monumento Histórico Nacional construido en el siglo XVII sobre el acantilado costero de Niebla. Forma parte del sistema defensivo español más importante del Pacífico Sur, con vistas panorámicas a la desembocadura del río Valdivia.", 
      en: "National Historic Monument built in the 17th century on the coastal cliff of Niebla. It is part of the most important Spanish defensive system in the South Pacific, with panoramic views of the mouth of the Valdivia River." 
    },
    imagenes: [
      "../assets/imagenes/Valdivia/Valdivia.jpg",
      "../assets/imagenes/Valdivia/Valdivia2.jpg",
      "../assets/imagenes/Valdivia/Valdivia3.jpg",
      "../assets/imagenes/Valdivia/Valdivia4.jpg"
    ],
    detalles: {
      duracion: "1 hr 30 min",
      dificultad: { es: "Fácil", en: "Easy" },
      distancia: "1.5 km",
      desnivel: "+30 m",
      accesibilidad: { es: "Pasarelas de madera y miradores habilitados en gran parte del recinto.", en: "Wooden walkways and viewpoints enabled throughout most of the site." },
      horarios: { es: "Martes a Domingo: 10:00 - 17:30 hrs", en: "Tuesday to Sunday: 10:00 - 17:30 hrs" }
    },
    sectores: [
      { es: "Batería de Cañones y Foso Defensivo", en: "Cannon Battery and Defensive Moat" },
      { es: "Polvorín y Salas Museográficas del Sitio", en: "Powder Keg and Site Museum Rooms" },
      { es: "Mirador Panorámico Bahía de Corral e Isla Mancera", en: "Corral Bay and Mancera Island Panoramic Viewpoint" }
    ],
    tarifas: [
      { tipo: { es: "Público General", en: "General Public" }, precio: { es: "Entrada liberada / Gratuita", en: "Free admission" } }
    ],
    rutaGps: {
      puntos: [
        { nombre: { es: "Acceso Museo de Sitio Castillo de Niebla", en: "Niebla Castle Site Museum Access" }, coords: [-39.8665, -73.3958] },
        { nombre: { es: "Foso Defensivo Tallado en Cancagua", en: "Defensive Moat Carved in Cancagua" }, coords: [-39.8670, -73.3965] },
        { nombre: { es: "Polvorín y Salas Museográficas", en: "Powder Keg and Museum Rooms" }, coords: [-39.8675, -73.3974] },
        { nombre: { es: "Batería de Cañones", en: "Cannon Battery" }, coords: [-39.8682, -73.3988] },
        { nombre: { es: "Garita de Vigilancia Costera", en: "Coastal Guard Post" }, coords: [-39.8686, -73.3992] },
        { nombre: { es: "Mirador Bahía de Corral e Isla Mancera", en: "Corral Bay and Mancera Island Viewpoint" }, coords: [-39.8689, -73.3996] }
      ]
    },
    itinerario: [
      { hora: "10:30", actividad: { es: "Ingreso al Museo de Sitio Castillo de Niebla.", en: "Entry to Niebla Castle Site Museum." } },
      { hora: "11:00", actividad: { es: "Recorrido por la batería de cañones mirando la bahía de Corral.", en: "Tour of the cannon battery overlooking Corral Bay." } },
      { hora: "11:45", actividad: { es: "Visita a las salas históricas y cierre en el mirador costero.", en: "Visit to the historical rooms and closing at the coastal viewpoint." } }
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

async function inicializarMapaSatelite(actividad, lang) {
  const contenedorMapa = document.getElementById("mapa-satelite-ruta");
  if (!contenedorMapa || !actividad.rutaGps) return;

  try {
    const L = await cargarLibreriaLeaflet();
    const puntos = actividad.rutaGps.puntos;
    const coordenadas = puntos.map(p => p.coords);

    const mapa = L.map("mapa-satelite-ruta", {
      scrollWheelZoom: false
    });

    const capaSatelite = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution: "Imágenes satélite © Esri, Maxar, Earthstar Geographics",
        maxZoom: 18
      }
    ).addTo(mapa);

    const capaEtiquetas = L.tileLayer(
      "https://services.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
      { maxZoom: 18 }
    ).addTo(mapa);

    const capaMapa = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 18
      }
    );

    const grupoSatelite = L.layerGroup([capaSatelite, capaEtiquetas]);
    L.control.layers(
      { "Vista Satélite": grupoSatelite, "Mapa Estándar": capaMapa },
      null,
      { position: "topright" }
    ).addTo(mapa);

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
      const nombrePunto = typeof punto.nombre === 'object' ? (punto.nombre[lang] || punto.nombre.es) : punto.nombre;

      const icono = L.divIcon({
        className: "marcador-ruta-gps",
        html: `<div style="background:${colorPin}; color:white; width:26px; height:26px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:12px; border:2px solid white; box-shadow:0 2px 6px rgba(0,0,0,0.45);">${letra}</div>`,
        iconSize: [26, 26],
        iconAnchor: [13, 13]
      });

      const marcador = L.marker(punto.coords, { icon: icono }).addTo(mapa);
      marcador.bindPopup(`<strong>${nombrePunto}</strong>`);
      if (esInicio || esFin) {
        marcador.bindTooltip(nombrePunto, { permanent: false, direction: "top" });
      }
    });

    mapa.fitBounds(lineaRuta.getBounds(), { padding: [45, 45] });
  } catch (error) {
    console.error("Error al cargar el mapa satélite:", error);
  }
}

async function cargarFicha() {
  const lang = localStorage.getItem("selectedLang") || "es";
  const id = obtenerParametroUrl("id") || "1";
  const contenedor = document.getElementById("detalle-actividad");

  if (!contenedor) return;

  const actividad = detalleBackup[id] || detalleBackup["1"];

  const t = (key) => {
    const dict = (typeof translations !== 'undefined' && translations[lang]) ? translations[lang] : {};
    return dict[key] || key;
  };

  const nombreAct = typeof actividad.nombre === 'object' ? (actividad.nombre[lang] || actividad.nombre.es) : actividad.nombre;
  const tipoAct = typeof actividad.tipo === 'object' ? (actividad.tipo[lang] || actividad.tipo.es) : actividad.tipo;
  const catAct = typeof actividad.categoria === 'object' ? (actividad.categoria[lang] || actividad.categoria.es) : actividad.categoria;
  const descAct = typeof actividad.descripcion === 'object' ? (actividad.descripcion[lang] || actividad.descripcion.es) : actividad.descripcion;
  const ubicAct = typeof actividad.ubicacion === 'object' ? (actividad.ubicacion[lang] || actividad.ubicacion.es) : actividad.ubicacion;
  const difAct = typeof actividad.detalles.dificultad === 'object' ? (actividad.detalles.dificultad[lang] || actividad.detalles.dificultad.es) : actividad.detalles.dificultad;
  const durAct = typeof actividad.detalles.duracion === 'object' ? (actividad.detalles.duracion[lang] || actividad.detalles.duracion.es) : actividad.detalles.duracion;
  const accAct = typeof actividad.detalles.accesibilidad === 'object' ? (actividad.detalles.accesibilidad[lang] || actividad.detalles.accesibilidad.es) : actividad.detalles.accesibilidad;
  const horAct = typeof actividad.detalles.horarios === 'object' ? (actividad.detalles.horarios[lang] || actividad.detalles.horarios.es) : actividad.detalles.horarios;

  contenedor.innerHTML = `
    <section style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
      <h1 style="color: #2e7d32; font-size: 2rem; margin-bottom: 0.5rem;">${nombreAct}</h1>
      <div style="display:flex; gap:0.6rem; flex-wrap:wrap; margin-bottom:1rem;">
        <span style="background:#e8f5e9; color:#1b5e20; padding:0.4rem 1rem; border-radius:20px; font-size:0.9rem; font-weight:bold;">
          ${tipoAct}
        </span>
        <span style="background:#e3f2fd; color:#1565c0; padding:0.4rem 1rem; border-radius:20px; font-size:0.9rem; font-weight:bold;">
          ${catAct}
        </span>
      </div>

      <!-- Galería de imágenes -->
      <div>
        <img id="imagen-principal" src="${actividad.imagenes[0]}" alt="${nombreAct}" style="width: 100%; height: 400px; object-fit: cover; border-radius: 8px;" />
        <div style="display: flex; gap: 0.5rem; margin-top: 0.8rem; overflow-x: auto;">
          ${actividad.imagenes.map(img => `
            <img src="${img}" alt="Miniatura" onerror="this.style.display='none'" onclick="cambiarImagen('${img}')" style="width: 80px; height: 60px; object-fit: cover; border-radius: 4px; cursor: pointer; border: 2px solid #ddd;" />
          `).join('')}
        </div>
      </div>

      <!-- Cuadro de métricas -->
      <div style="background: #f4f9f4; padding: 1.25rem; border-radius: 8px; margin: 1.5rem 0; border-left: 5px solid #2e7d32; display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.8rem;">
        ${difAct ? `<p style="margin: 0;"><strong>${t('etiqueta.dificultad')}</strong> <span style="color: #2e7d32;">${difAct}</span></p>` : ''}
        ${durAct ? `<p style="margin: 0;"><strong>${t('etiqueta.duracion')}</strong> ${durAct}</p>` : ''}
        ${actividad.detalles.distancia ? `<p style="margin: 0;"><strong>${t('etiqueta.distancia')}</strong> ${actividad.detalles.distancia}</p>` : ''}
        ${actividad.detalles.desnivel ? `<p style="margin: 0;"><strong>${t('etiqueta.desnivel')}</strong> ${actividad.detalles.desnivel}</p>` : ''}
        <p style="margin: 0; grid-column: 1 / -1;"><strong>${t('etiqueta.ubicacion')}</strong> 📍 ${ubicAct}</p>
      </div>

      <!-- Información y detalles -->
      <div style="line-height: 1.6; font-size: 1.05rem; margin-top: 1.5rem;">
        <p style="margin-bottom: 1.5rem; color: #444;">${descAct}</p>

        <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem; color: #111;">${t('titulo.horarios')}</h3>
        <p style="margin-bottom: 1.5rem; color: #333;">${horAct}</p>

        ${actividad.sectores ? `
          <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem; color: #111;">${t('titulo.sectores')}</h3>
          <ul style="margin-top: 0.4rem; margin-bottom: 1.5rem; padding-left: 1.5rem; color: #333;">
            ${actividad.sectores.map(s => {
              const textoSec = typeof s === 'object' ? (s[lang] || s.es) : s;
              return `<li style="margin-bottom: 0.4rem;">${textoSec}</li>`;
            }).join('')}
          </ul>
        ` : ''}

        ${actividad.tarifas ? `
          <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem; color: #111;">${t('titulo.tarifas')}</h3>
          <ul style="margin-top: 0.4rem; margin-bottom: 1.5rem; padding-left: 1.5rem; color: #333;">
            ${actividad.tarifas.map(tData => {
              const tipoTarifa = typeof tData.tipo === 'object' ? (tData.tipo[lang] || tData.tipo.es) : tData.tipo;
              const precioTarifa = typeof tData.precio === 'object' ? (tData.precio[lang] || tData.precio.es) : tData.precio;
              return `<li style="margin-bottom: 0.4rem;"><strong>${tipoTarifa}:</strong> ${precioTarifa}</li>`;
            }).join('')}
          </ul>
        ` : ''}

        ${actividad.detalles.tipoTerreno ? `
          <p style="margin-bottom: 0.8rem; color: #333;"><strong>Terrain type:</strong> ${actividad.detalles.tipoTerreno}</p>
        ` : ''}

        ${actividad.detalles.tipoRuta ? `
          <p style="margin-bottom: 0.8rem; color: #333;"><strong>Route type:</strong> ${actividad.detalles.tipoRuta}</p>
        ` : ''}

        ${actividad.detalles.desnivelExtra ? `
          <p style="margin-bottom: 0.8rem; color: #333;"><strong>Elevation:</strong> ${actividad.detalles.desnivelExtra}</p>
        ` : ''}

        ${actividad.detalles.altitudMaxima ? `
          <p style="margin-bottom: 1.5rem; color: #333;"><strong>Maximum altitude:</strong> ${actividad.detalles.altitudMaxima}</p>
        ` : ''}

        <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem; color: #111;">${t('titulo.accesibilidad')}</h3>
        <p style="margin-bottom: 1.5rem; color: #333;">${accAct}</p>

        ${actividad.itinerario ? `
          <h3 style="font-size: 1.25rem; font-weight: 700; margin-top: 1.8rem; margin-bottom: 0.6rem; color: #111;">${t('titulo.itinerario')}</h3>
          <ul style="margin-top: 0.4rem; margin-bottom: 1.5rem; padding-left: 1.5rem; color: #333;">
            ${actividad.itinerario.map(it => {
              const actIti = typeof it.actividad === 'object' ? (it.actividad[lang] || it.actividad.es) : it.actividad;
              return `<li style="margin-bottom: 0.4rem;"><strong>${it.hora}:</strong> ${actIti}</li>`;
            }).join('')}
          </ul>
        ` : ''}
      </div>

      <!-- Mapa GPS Satelital Interactivo -->
      ${actividad.rutaGps ? `
        <h3 style="color: #2e7d32; margin-top: 2rem; font-size: 1.25rem; border-bottom: 2px solid #e8f5e9; padding-bottom: 0.5rem;">${t('titulo.mapa')}</h3>
        <p style="font-size: 0.9rem; color: #555; margin: 0.5rem 0 0.8rem 0;">${t('mapa.leyenda')}</p>
        <div id="mapa-satelite-ruta" style="width: 100%; height: 450px; border-radius: 10px; overflow: hidden; border: 1px solid #e0e0e0; z-index: 1;"></div>
      ` : ''}
    </section>
  `;

  if (actividad.rutaGps) {
    inicializarMapaSatelite(actividad, lang);
  }
}

window.cambiarImagen = cambiarImagen;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", cargarFicha);
} else {
  cargarFicha();
}

// Escuchar cambios en el selector de idioma para recargar la ficha sin refrescar la página
document.addEventListener("DOMContentLoaded", () => {
  const selector = document.getElementById("language-selector");
  if (selector) {
    selector.addEventListener("change", () => {
      setTimeout(cargarFicha, 50);
    });
  }
});