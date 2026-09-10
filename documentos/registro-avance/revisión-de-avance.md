# Documento de Revisión de Avances

**Proyecto:** EcoRuta - Desarrollo Frontend  
**Responsable de Revisión:** Francisca (Fran)  
**Fecha:** 9 de Septiembre de 2026  

---

## 1. Historia de Usuario
**Título:** Visualización del catálogo en dispositivos móviles  
**Descripción:** *"Como turista, quiero entrar al catálogo desde mi celular, para poder revisar las actividades fácilmente desde cualquier lugar."*  

---

## 2. Criterios de Aceptación y Verificación

| Criterio de Aceptación | Descripción / Prueba | Estado |
| :--- | :--- | :--- |
| **Adaptabilidad de Pantalla (Responsive)** | El diseño se adapta a pantallas menores a 768px sin desbordamiento ni scroll horizontal. | Completado |
| **Legibilidad y Navegación Mobile** | Las tarjetas de actividades se muestran en una columna con botones y texto táctiles. | Completado |
| **Optimización de Imágenes** | Las imágenes se ajustan al contenedor sin distorsionarse. | Completado |
| **Etiqueta Viewport** | Se incluyó la etiqueta meta viewport para renderizado móvil adecuado. | Completado |

---

## 3. Implementación Técnica

### Configuración HTML (`<head>`)
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">


CSS
/* Estilos responsivos para el catálogo en dispositivos móviles */
@media (max-width: 768px) {
  .catalogo-container {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  .tarjeta-actividad {
    width: 100%;
    margin-bottom: 15px;
  }

  img {
    max-width: 100%;
    height: auto;
  }
}
