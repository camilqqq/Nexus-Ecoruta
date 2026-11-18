# Nexus: EcoRuta Temuco — Catálogo de Turismo Sustentable

Bienvenido al repositorio oficial de **EcoRuta Temuco**, una plataforma web diseñada para conectar a turistas con rutas, actividades y emprendimientos de turismo sustentable en Temuco y sus alrededores.

🌐 **Enlace del sitio en producción (GitHub Pages):** [https://camilqqq.github.io/Nexus-Ecoruta/](https://camilqqq.github.io/Nexus-Ecoruta/)

---

## Descripción del Proyecto

El proyecto busca visibilizar la oferta turística local y ecológica de la región de La Araucanía, ofreciendo una experiencia accesible, adaptativa e intuitiva sin necesidad de registro previo.

---

## Estructura del Repositorio

```text
nexus-ecoruta/
├── assets/                  # Imágenes, íconos y recursos multimedia
├── css/                     # Hojas de estilo por página (index.css, etc.)
├── data/                    # Archivos de datos o respaldos del catálogo en formato JSON
├── documentos/              # Gestión y registros del proyecto
│   ├── diseno/              # Prototipos y wireframes
│   ├── registro-avance/     # Backlog, historias de usuario, feedback PO
│   ├── reportes/            # Reportes de accesibilidad y pruebas
│   └── reuniones/           # Actas de seguimiento del equipo
├── paginas/                 # Vistas adicionales (Actividad.html, etc.)
├── administracion/          # Acceso al panel de administración
│   └── index.html           # Redirección hacia paginas/vista4.html
├── js/                      # Scripts JavaScript y TypeScript
│   ├── api.js               # Consulta de información climática mediante Open-Meteo
│   ├── rutas.js             # Funcionalidades de clima y datos de respaldo del catálogo
│   └── rutas.ts             # Tipado, carga, filtrado y visualización de rutas turísticas
├── index.html               # Página principal / Catálogo
├── tsconfig.json            # Configuración del compilador TypeScript
└── README.md                # Documentación general del repositorio
```

---

## Tecnologías Utilizadas

- **HTML:** Estructuración semántica con soporte de accesibilidad (ARIA, landmarks).
- **CSS:** Diseño responsivo mediante Flexbox, CSS Grid y variables CSS (*Mobile-First*), incluyendo soporte de temas (normal, oscuro y daltónico).
- **JavaScript:** Implementación de funcionalidades interactivas, manipulación del DOM, validación de formularios, almacenamiento mediante localStorage y consumo de APIs externas.
- **TypeScript:** Definición de interfaces y estructuras de datos para representar rutas turísticas, implementar funciones de carga y filtrado por dificultad.
- **Git / GitHub:** Control de versiones colaborativo y despliegue continuo con GitHub Pages.

---

## Accesibilidad y Estándares

El sitio cumple con buenas prácticas de accesibilidad web (WCAG):
- Contraste adecuado de colores en texto y botones.
- Atributos `alt` explicativos en todas las imágenes.
- Indicadores de foco visibles (`:focus-visible`) para navegación por teclado.
- Etiquetas `aria-label` en controles interactivos y menús.

---

## Instrucciones de Instalación y Compilación

Si deseas clonar y ejecutar este proyecto de manera local en tu entorno de desarrollo, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/camilqqq/Nexus-Ecoruta.git](https://github.com/camilqqq/Nexus-Ecoruta.git)
   ```

2. **Entrar al directorio del proyecto:**
   ```bash
   cd Nexus-Ecoruta
   ```

3. **Instalación de dependencias (si aplica):**
   ```bash
   npm install
   ```

4. **Compilación de TypeScript (`tsc`):**
   El proyecto utiliza `tsconfig.json` para compilar los archivos desde `./js` hacia JavaScript plano. Para compilar de forma automática, ejecuta:
   ```bash
   tsc
   ```

5. **Ejecutar el proyecto:**
   Puedes abrir el archivo `index.html` directamente en tu navegador o levantar un servidor local (como *Live Server* en Visual Studio Code).

---

## Configuración de TypeScript (`tsconfig.json`)

- El proyecto utiliza el archivo `tsconfig.json` para configurar el compilador de TypeScript.
- `target: ES2020`, define la versión de JavaScript de destino.
- `module: ESNext`, establece el sistema de módulos.
- `strict: false`, desactiva la comprobación estricta de tipos.
- `rootDir: ./js`, establece la carpeta de origen de los archivos TypeScript.
- `outDir: ./js`, define la carpeta de salida de los archivos compilados.
- `include: js/*.ts`, indica los archivos TypeScript que serán incluidos.
- `exclude: node_modules`, excluye las dependencias del proceso de compilación.

---

## Equipo de Trabajo

- Camila Fuentes
- Emily Jara
- Francisca Salazar
- Joaquín Baeza
- Matias Queupumil
- Miguel Obando