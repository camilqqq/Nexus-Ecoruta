document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.querySelector("#form-contacto");

  if (formulario) {
    formulario.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const nombre = document.querySelector("#nombre").value.trim();
      const email = document.querySelector("#email").value.trim();
      const mensaje = document.querySelector("#mensaje").value.trim();
      const respuesta = document.querySelector("#mensaje-respuesta");

      // Validar campos vacíos
      if (nombre === "" || email === "" || mensaje === "") {
        respuesta.innerHTML = "<p style='color: red;'>Por favor, completa todos los campos obligatorios.</p>";
        return;
      }

      // Validar formato de correo
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!regexEmail.test(email)) {
        respuesta.innerHTML = "<p style='color: red;'>Ingresa un correo electrónico válido.</p>";
        return;
      }

      // Mensaje de éxito
      respuesta.innerHTML = "<p style='color: green;'>¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.</p>";
      formulario.reset();
    });
  }
});
