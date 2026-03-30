// Manejo del formulario de inscripción
const inscripcionForm = document.getElementById('inscripcionForm');
if (inscripcionForm) {
  inscripcionForm.addEventListener('submit', e => {
    e.preventDefault();
    alert("¡Gracias por inscribirte en Dale Vuelta! Te contactaremos pronto.");
    inscripcionForm.reset();
  });
}

// Manejo del formulario de contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert("¡Tu mensaje fue enviado! Nos pondremos en contacto.");
    contactForm.reset();
  });
}

// Interacciones con botones de secciones
const botones = document.querySelectorAll("button");
botones.forEach(boton => {
  boton.addEventListener("click", () => {
    console.log(`Botón presionado: ${boton.textContent}`);
  });
});

// Ejemplo de votación dinámica (simulación)
const votacionCitas = document.querySelector(".votacion p:last-child");
if (votacionCitas) {
  let votos = 1245;
  // Simulación: cada 5 segundos se suman votos
  setInterval(() => {
    votos += Math.floor(Math.random() * 5);
    votacionCitas.textContent = `Votos: ${votos}`;
  }, 5000);
}
