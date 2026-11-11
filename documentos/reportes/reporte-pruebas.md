# Reporte de Pruebas y Despliegue - Nexus Ecoruta

**Proyecto:** Nexus-Ecoruta  
**Fecha:** Noviembre 2026  
**Entorno:** GitHub Pages / Google Chrome DevTools  

---

## 1. Pruebas de Carga (Performance)
Se realizaron evaluaciones de rendimiento sobre la aplicación web desplegada en producción utilizando la herramienta **Google Lighthouse** y el panel DevTools.

* **Puntuación Global de Auditoría (Entorno Desktop):**
  * **Performance:** `94 / 100` (Verde 🟢)
  * **Accesibilidad:** `95 / 100` (Verde 🟢)
  * **Buenas Prácticas:** `96 / 100` (Verde 🟢)
  * **SEO:** `91 / 100` (Verde 🟢)

* **Optimizaciones Aplicadas:**
  * Inclusión de dimensiones explícitas (`width` y `height`) en el logo e imágenes del catálogo para reducir el *Layout Shift* (CLS).
  * Uso de `loading="lazy"` en las imágenes secundarias del catálogo.
  * Asignación de `fetchpriority="high"` en el banner/carrusel principal para reducir el tiempo de *Largest Contentful Paint* (LCP).

---

## 2. Pruebas de Manejo de Errores (API & Fallback)
Se verificó el comportamiento de la aplicación ante escenarios de fallo de red o indisponibilidad del servidor MockAPI (`https://6724eb29c39fedae05b33100.mockapi.io/api/v1/rutas`).

* **Escenario de Prueba:** Simulación de error de red (HTTP status `404` / `500` o falta de conexión en `fetch`).
* **Comportamiento Esperado:** El bloque `try/catch` implementado en `js/actividad.ts` captura la excepción sin romper la interfaz del usuario.
* **Resultado:** Se emite una advertencia en consola (`console.warn`) y la aplicación carga inmediatamente la base de datos de respaldo local (`detalleBackup`), manteniendo la navegación funcional y mostrando la información completa de la ficha.

---

## 3. Pruebas de Funcionamiento en GitHub Pages
Se validó la compatibilidad y el correcto despliegue de las rutas en el entorno de producción hosting **GitHub Pages**.

* **Renderizado de Fichas Dinámicas:** Se comprobó que el parámetro URL (`paginas/Actividad.html?id=X`) cargue correctamente cada una de las 4 actividades (Sendero Cerro Ñielol, Museo Regional de La Araucanía, Feria Pinto y Parque Isla Cautín).
* **Mapas e Imágenes:** Integración de `iframes` de mapas Google/Wikiloc y carrusel de imágenes adaptativo funcionando sin errores de CORS ni bloqueos de seguridad.
