# Informe de Aseguramiento de Calidad (QA) – Auditoría de Accesibilidad (WCAG 2.1)
**Proyecto:** EcoRuta Temuco  
**Fecha:** 22 de Septiembre de 2026  
**Responsable de QA:** Francisca Salazar  

---

## 1. Resultado de Herramientas Automatizadas
- **Herramienta:** Google Lighthouse (DevTools)
- **Puntaje de Accesibilidad:** 100/100
- **Observación de QA:** Se obtuvo el puntaje máximo en la prueba automatizada; sin embargo, complementando la auditoría según las pautas WCAG 2.1, se realizaron pruebas manuales para corregir fallos que las herramientas automáticas no detectan.

---

## 2. Hallazgos de Pruebas Manuales y Correcciones Realizadas

### Hallazgo 1: Enriquecimiento de contexto en Lectores de Pantalla (VoiceOver / NVDA / Narrador)
- **Vista / Archivo afectado:** `index.html` (Tarjetas de actividades)
- **Componente:** Enlaces de "Ver ficha"
- **Problema identificado por QA:** Al navegar con un lector de pantalla en lista de enlaces, la etiqueta "Ver ficha" resultaba vaga y no especificaba a cuál actividad pertenecía.
- **Solución implementada:** Se incorporaron atributos `aria-label` descriptivos en los enlaces de las tarjetas de actividades.
- **Responsable de la solución:** Francisca Salazar
- **Evidencia Commit GitHub:** https://github.com/camilqqq/Nexus-Ecoruta/commit/64734ff4aece4bd3bb008f76a494546f0919f7e3

### Hallazgo 2: Visibilidad del indicador de foco en Navegación por Teclado
- **Vista / Archivo afectado:** `index.css`
- **Componente:** Botones de filtro y navegación
- **Problema identificado por QA:** El contorno de foco por defecto al presionar la tecla TAB perdía contraste sobre fondos de color.
- **Solución implementada:** Se configuró la pseudo-clase `:focus-visible` con un contorno de alto contraste (outline de 3px).
- **Responsable de la solución:** Joaquín Baeza

---

## 3. Estado de Entrega
- **Pruebas de QA aprobadas:** SÍ
- **Tarjetas de Trello sincronizadas en "Hecho":** SÍ
