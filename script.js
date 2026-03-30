const form = document.getElementById('contactForm');
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
  e.preventDefault();
  msg.textContent = "¡Gracias por tu mensaje! Nos pondremos en contacto.";
  form.reset();
});
