// Archivo: js/formulario.js
document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. FORMULARIO DE EMPRENDEDORES (emprendedores.html)
       ========================================================================== */
    const formEmprendedor = document.getElementById('form-emprendedor');
    const selectServicio = document.getElementById('tipo-servicio');
    const linkRequisitos = document.getElementById('link-requisitos');
    const emailEmprendedor = document.getElementById('email-contacto');

    // Cambiar texto del enlace dinámico según categoría
    if (selectServicio && linkRequisitos) {
        selectServicio.addEventListener('change', (e) => {
            const textoSeleccionado = e.target.options[e.target.selectedIndex].text;
            linkRequisitos.textContent = textoSeleccionado;
        });
    }

    // Quitar alerta de error visual cuando el usuario escribe
    if (emailEmprendedor) {
        emailEmprendedor.addEventListener('input', function() {
            if (this.classList.contains('input-error')) {
                this.classList.remove('input-error');
            }
        });
    }

    // Validación interactiva del formulario de emprendedores
    if (formEmprendedor) {
        formEmprendedor.addEventListener('submit', (e) => {
            e.preventDefault(); // Detiene el envío predeterminado

            const emailValue = emailEmprendedor ? emailEmprendedor.value.trim() : '';
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!regexEmail.test(emailValue)) {
                if (emailEmprendedor) emailEmprendedor.classList.add('input-error');
                alert("Por favor, ingresa un correo electrónico válido para continuar.");
            } else {
                if (emailEmprendedor) emailEmprendedor.classList.remove('input-error');
                alert("¡Postulación enviada con éxito! Revisaremos tu solicitud.");
                formEmprendedor.reset();
            }
        });
    }

    /* ==========================================================================
       2. FORMULARIO DE CONTACTO GENERAL
       ========================================================================== */
    const formContacto = document.getElementById('form-contacto');

    if (formContacto) {
        formContacto.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombreInput = document.getElementById('nombre-contacto');
            const emailInput = document.getElementById('email-contacto-general');
            const mensajeInput = document.getElementById('mensaje-contacto');

            const nombre = nombreInput ? nombreInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const mensaje = mensajeInput ? mensajeInput.value.trim() : '';

            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            let errores = [];

            if (nombre.length < 3) {
                errores.push("El nombre debe tener al menos 3 caracteres.");
            }
            if (!regexEmail.test(email)) {
                errores.push("Ingresa un correo electrónico válido.");
            }
            if (mensaje.length < 10) {
                errores.push("El mensaje debe contener al menos 10 caracteres.");
            }

            if (errores.length > 0) {
                alert("Por favor corrige los siguientes datos:\n- " + errores.join("\n- "));
            } else {
                alert("¡Gracias, " + nombre + "! Mensaje enviado con éxito.");
                formContacto.reset();
            }
        });
    }

    /* ==========================================================================
       3. ENLACES Y TARJETAS DINÁMICAS (Paso de parámetros URL)
       ========================================================================== */
    const botonesFicha = document.querySelectorAll('.btn-ver-ficha');

    if (botonesFicha.length > 0) {
        botonesFicha.forEach(boton => {
            boton.addEventListener('click', (e) => {
                e.preventDefault();
                const idActividad = boton.getAttribute('data-id');

                if (idActividad) {
                    window.location.href = `paginas/Actividad.html?id=${idActividad}`;
                }
            });
        });
    }

});