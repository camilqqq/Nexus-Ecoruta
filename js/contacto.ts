interface MensajeContacto {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
  fecha: string;
}

document.addEventListener("DOMContentLoaded", () => {
  const formContacto = document.getElementById("formContacto") as HTMLFormElement | null;
  const mensajeExito = document.getElementById("mensajeExito") as HTMLElement | null;

  if (formContacto) {
    formContacto.addEventListener("submit", (e: Event) => {
      e.preventDefault();

      const nombreInput = document.getElementById("nombre") as HTMLInputElement;
      const emailInput = document.getElementById("email") as HTMLInputElement;
      const asuntoInput = document.getElementById("asunto") as HTMLInputElement;
      const mensajeInput = document.getElementById("mensaje") as HTMLTextAreaElement;

      if (!nombreInput || !emailInput || !asuntoInput || !mensajeInput) return;

      const nuevoMensaje: MensajeContacto = {
        nombre: nombreInput.value.trim(),
        email: emailInput.value.trim(),
        asunto: asuntoInput.value.trim(),
        mensaje: mensajeInput.value.trim(),
        fecha: new Date().toLocaleString("es-CL")
      };

      const mensajesGuardados: MensajeContacto[] = JSON.parse(
        localStorage.getItem("mensajesContacto") || "[]"
      );
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
