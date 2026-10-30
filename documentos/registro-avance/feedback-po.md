# Registro de Feedback y Revisiones del PO
**Proyecto:** EcoRuta Temuco  
**Product Owner:** Emily Jara
**Sprint:** 0 y 1
## 09-09-2026
- Se completó la sección de contacto (WhatsApp/correo/Instagram) en paginas/Actividad.html, cumpliendo el criterio de aceptación de la historia #3.
- Pendiente: fusionar el PR "vista4" (rama html → main).
- Pendiente: reestructurar el repo según 02_Estructura_carpeta_proyecto.md (carpetas paginas/, css/, js/, assets/). Se avisó al Scrum Master.
- Se crea la carpeta documentos/registro-avance/ con requerimientos, historias de usuario y backlog actualizados.
## 09-09-2026 (revisión de avance)
- Se detecta desfase entre Trello y el código real: la tarjeta #1 ("rutas con nivel de dificultad") está marcada como Done, pero no existe ningún catálogo o listado de actividades en el código — solo fichas individuales (vista2.html). Se recomienda mover la tarjeta de vuelta a "To Do" o crear una tarjeta separada para "página de catálogo".
- La historia #7 (horarios, precios, disponibilidad, condiciones) está parcialmente cubierta en vista2.html: falta agregar horarios y precios explícitamente.
- No se han subido aún los archivos CSS (style-ficha.css, style-admin.css), lo que impide validar responsividad y accesibilidad visual real.
- La accesibilidad (landmarks, aria-label) está aplicada de forma parcial y solo en algunas vistas — falta consistencia en todo el sitio.
- Se avisará al equipo para corregir el estado de Trello y priorizar la creación del catálogo de actividades.

## 17-09-2026 (Revisión de cierre de Sprint 1)
- Reorganización de carpetas finalizada exitosamente (`css/`, `paginas/`, `assets/`, `documentos/`).
- Corregida la navegación del sitio: los enlaces principales ya conectan correctamente entre el inicio (`index.html`), las actividades (`Actividad.html`) y el panel de administración.
- Verificados los indicadores de accesibilidad (`aria-label`, foco visible en botones) y enlaces a redes sociales.
- Se confirma el despliegue funcional del proyecto para la entrega de la fase 1.
## 22-09-2026 (Auditoría de Accesibilidad y Bug Bounty)
- **Ejecución Bug Bounty:** Se realizó la auditoría de accesibilidad sobre la URL de producción (GitHub Pages) aplicando WCAG 2.1 (Nivel AA) mediante Lighthouse, DevTools e inspección manual por teclado.
- **Resultados de Auditoría:** Se logró una puntuación de **100/100 en Accesibilidad en Lighthouse**.
- **Correcciones Realizadas:**
  - Se incorporaron atributos `alt` descriptivos en imágenes y etiquetas `aria-label` en elementos interactivos faltantes.
  - Se validó la navegación fluida por teclado (`Tab`, `Enter`) y el contraste visual de elementos.
  - Se corrigió la estructura del catálogo y rutas relativas de imágenes.
- **Documentación:** Se generó e integró el reporte oficial `reporte-bug-bounty.md` en la carpeta `documentos/reportes/`.

## 24-09-2026 (Consolidación de Entregables y Cierre de Documentación)
- **Corrección de Assets y GitHub:** Se solucionó la visualización de evidencias de auditoría (`evidencia-lighthouse.png` y `evidencia-axe.png`) en GitHub, asegurando la integridad de las imágenes.
- **Alineación con Feedback del Profesor:** En respuesta al comunicado del docente sobre la evaluación continua del Sprint 1, se validó que todos los commits de la semana estén reflejados en el repositorio remoto.
- **Generación de PDF Oficial:** Se exportó y validó la versión final en PDF del informe Bug Bounty (`reporte-bug-bounty.pdf`) directamente desde la estructura del repositorio, dejándolo listo para la evaluación continua y futura defensa del proyecto.
- **Estado de Cierre:** El Sprint 1 y la fase de Accesibilidad/HTML/CSS quedan **100% concluidos, desplegados y documentados**, a la espera de las pautas para la defensa y el inicio de la materia de JavaScript.

- **Product Owner:** Camila Fuentes
- **Sprint:** 2
- ##Registro de Comentarios y Revisiones del PO

### 08 y 09-10-2026 (Inicio del desarrollo de funcionalidades)

- Se incorpora el consumo de una API externa mediante `fetch()` para mostrar información climática de Temuco.
- Se implementan filtros dinámicos, búsqueda en tiempo real y manipulación del DOM para mejorar la interacción de los usuarios.
- Se desarrollan formularios interactivos con validaciones, mensajes de error y confirmaciones de envío.
- Se crea el módulo de emprendedores locales, incorporando catálogo, categorías, fichas informativas y distintivos ecológicos.
- Se mejora la navegación entre las diferentes páginas y se establecen criterios de aceptación para las nuevas funcionalidades.

### 21-10-2026 (Pruebas, integración y mejoras)

- Se realizan pruebas funcionales del consumo de API, navegación, formularios y filtros dinámicos.
- Se incorporan mejoras en la validación de formularios, incluyendo restricciones para campos vacíos, validación de correo electrónico y mensajes dinámicos de error y éxito.
- Se implementa la carga de información de actividades mediante parámetros URL, permitiendo acceder a fichas específicas.
- Se desarrollan funcionalidades para filtrar emprendimientos por rubro, mostrar distintivos ecológicos y gestionar estados sin resultados.
- Se realizan pruebas de responsividad en dispositivos móviles, tabletas y computadores.
- Se revisa la configuración de CI/CD y el despliegue en GitHub Pages.
- Se mantiene el seguimiento del trabajo mediante Trello, registrando avances, responsables y actividades del equipo.

### 27 al 29-10-2026 (Nuevos entregables y reorganización del backlog)

- Se implementa MockAPI para el manejo de información climática y su consumo desde `js/api.js`.
- Se incorporan funcionalidades de administración de solicitudes de emprendedores, permitiendo aprobar o rechazar postulaciones y actualizar la información publicada.
- Se desarrolla una vista independiente de contacto con formulario y almacenamiento de mensajes mediante `localStorage`. Su revisión funcional permanece en proceso.
- Se incorpora TypeScript mediante los archivos `js/rutas.ts` y `js/rutas.js`, definiendo una interfaz para representar rutas turísticas y dos funciones para personalizarlas y filtrarlas.
- Se registra la necesidad de verificar el funcionamiento de la API climática y los enlaces de navegación hacia la vista de contacto.
- Se inicia la reorganización del backlog tras el ajuste de integrantes del equipo, priorizando las historias relacionadas con TypeScript, el consumo de API de clima y los criterios de aceptación para el despliegue en GitHub Pages.
- La tarea de reorganización del backlog y aprobación del Sprint 2 (tarjeta #70) queda en proceso, pendiente de revisión y confirmación por parte del equipo y del Product Owner.
