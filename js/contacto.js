document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("#form-contacto");

  if (formulario) {
    formulario.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const nombre = document.querySelector("#nombre").value.trim();
      const email = document.querySelector("#email").value.trim();
      const mensaje = document.querySelector("#mensaje").value.trim();
      const respuesta = document.querySelector("#mensaje-respuesta");

      // 1. Evitar strings de solo espacios en blanco
      if (!nombre || !email || !mensaje) {
        respuesta.innerHTML = "<p style='color: red;'>Por favor, ingresa texto válido (no solo espacios).</p>";
        return;
      }

      // 2. Validar que el nombre tenga al menos 3 caracteres
      if (nombre.length < 3) {
        respuesta.innerHTML = "<p style='color: red;'>El nombre debe contener al menos 3 caracteres.</p>";
        return;
      }

      // 3. Regex estricta para correo electrónico
      const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!regexEmail.test(email)) {
        respuesta.innerHTML = "<p style='color: red;'>Ingresa un correo electrónico con formato válido (ejemplo@dominio.com).</p>";
        return;
      }

      // Éxito
      respuesta.innerHTML = "<p style='color: green;'>¡Mensaje enviado con éxito!</p>";
      formulario.reset();
    });
  }
});
