"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const formContacto = document.getElementById("formContacto");
    const mensajeExito = document.getElementById("mensajeExito");
    if (formContacto) {
        formContacto.addEventListener("submit", (e) => {
            e.preventDefault();
            const nombreInput = document.getElementById("nombre");
            const emailInput = document.getElementById("email");
            const asuntoInput = document.getElementById("asunto");
            const mensajeInput = document.getElementById("mensaje");
            if (!nombreInput || !emailInput || !asuntoInput || !mensajeInput)
                return;
            const nuevoMensaje = {
                nombre: nombreInput.value.trim(),
                email: emailInput.value.trim(),
                asunto: asuntoInput.value.trim(),
                mensaje: mensajeInput.value.trim(),
                fecha: new Date().toLocaleString("es-CL")
            };
            const mensajesGuardados = JSON.parse(localStorage.getItem("mensajesContacto") || "[]");
            mensajesGuardados.push(nuevoMensaje);
            localStorage.setItem("mensajesContacto", JSON.stringify(mensajesGuardados));
            formContacto.reset();
            formContacto.style.display = "none";
            if (mensajeExito) {
                mensajeExito.style.display = "block";
            }
        });
    }
});
