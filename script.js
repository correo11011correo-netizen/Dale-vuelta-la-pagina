// Manejo del formulario de inscripción
const inscripcionForm = document.getElementById('inscripcionForm');
if (inscripcionForm) {
  inscripcionForm.addEventListener('submit', e => {
    e.preventDefault();
    alert("¡Gracias por inscribirte! Te contactaremos pronto.");
    inscripcionForm.reset();
  });
}

// Manejo del formulario de contacto
const contactForm = document.getElementById('contactForm');
const msg = document.getElementById('msg');

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert("¡Tu mensaje fue enviado! Nos pondremos en contacto.");
    contactForm.reset();
  });
}

// Ejemplo de interacción con botones de secciones
const botones = document.querySelectorAll("button");
botones.forEach(boton => {
  boton.addEventListener("click", () => {
    console.log(`Botón presionado: ${boton.textContent}`);
  });
});
