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