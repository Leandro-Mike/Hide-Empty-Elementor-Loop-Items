# Hide Empty Elementor Loop Items

Este es un simple script en JavaScript para ocultar los elementos vacíos en los **Loop Grids** de **Elementor**. A veces, los items dentro del Loop Grid pueden tener un espacio vacío sin contenido visible, lo cual puede afectar la apariencia de tu página. Este script asegura que esos elementos vacíos no se muestren, mejorando la visualización y la experiencia de usuario.

## Características

- Oculta los elementos vacíos en los Loop Grids de Elementor.
- Se ejecuta automáticamente cuando el DOM está completamente cargado.
- No requiere configuraciones adicionales ni modificaciones complicadas en el código.

## ¿Cómo Funciona?

Este script detecta todos los elementos dentro del Loop Grid de Elementor y revisa si el contenido está vacío (sin texto o contenido visual). Si un elemento está vacío, se oculta utilizando `display: none`.

## Instalación

1. **Copia el Código JavaScript**  
   Copia el siguiente código JavaScript:

   ```javascript
   document.addEventListener("DOMContentLoaded", function () {
       document.querySelectorAll('.e-loop-item').forEach(function (item) {
           if (!item.textContent.trim()) {
               item.style.display = 'none';
           }
       });
   });
