// --- Menú hamburguesa con barra fija ---
const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu a");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
      menu.style.display = "flex";
    } else {
      menu.style.display = "none";
    }
  });
}

// --- Cerrar menú al hacer clic en un enlace y scroll suave ---
menuLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }

    // Cierra el menú en móviles
    menu.classList.remove("active");
    menu.style.display = "none";
  });
});

// --- Formulario de inscripción ---
const inscripcionForm = document.getElementById('inscripcionForm');
if (inscripcionForm) {
  inscripcionForm.addEventListener('submit', e => {
    e.preventDefault();
    alert("¡Gracias por inscribirte en Dale Vuelta! Te contactaremos pronto.");
    inscripcionForm.reset();
  });
}

// --- Formulario de contacto ---
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    alert("¡Tu mensaje fue enviado! Nos pondremos en contacto.");
    contactForm.reset();
  });
}

// --- Interacciones con botones ---
const botones = document.querySelectorAll("button");
botones.forEach(boton => {
  boton.addEventListener("click", () => {
    console.log(`Botón presionado: ${boton.textContent}`);
  });
});

// --- Simulación de votación dinámica ---
const votacionCitas = document.querySelector("#participantes .votacion p:last-child");
if (votacionCitas) {
  let votos = 1245;
  setInterval(() => {
    votos += Math.floor(Math.random() * 5);
    votacionCitas.textContent = `Votos: ${votos}`;
  }, 5000);
}
