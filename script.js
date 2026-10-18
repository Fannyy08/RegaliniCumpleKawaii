
const botonAbrir = document.getElementById("abrir");
const botonSorpresa = document.getElementById("sorpresa");
const botonFinal = document.getElementById("final");

botonAbrir.addEventListener("click", () => {
  document.querySelectorAll(".pantalla")[1].scrollIntoView({
    behavior: "smooth"
  });

  lanzarCorazones(15);
});

botonSorpresa.addEventListener("click", () => {
  const mensajes = [
    "¡Un abrazo gigante para ti! 🧸💗",
    "Nunca olvides lo especial que eres. 🌷",
    "Te mando millones de corazoncitos. 💕",
    "Que hoy y siempre tengas razones para sonreír. ⭐",
    "Tu amistad es un regalito para mí también. 🎀"
  ];

  const elegido = Math.floor(Math.random() * mensajes.length);

  document.getElementById("mensajeSorpresa").textContent =
    mensajes[elegido];

  lanzarCorazones(20);
});

botonFinal.addEventListener("click", () => {
  document.getElementById("finalMensaje").textContent =
    "¡Feliz cumpleaños! Que todos tus sueños se llenen de magia. ♡";

  lanzarCorazones(35);
});

function lanzarCorazones(cantidad) {
  const contenedor = document.getElementById("corazones");
  const simbolos = ["💗", "💕", "♡", "🎀", "✨", "🌸"];

  for (let i = 0; i < cantidad; i++) {
    const corazon = document.createElement("span");

    corazon.className = "corazon";
    corazon.textContent =
      simbolos[Math.floor(Math.random() * simbolos.length)];

    corazon.style.left = Math.random() * 100 + "%";
    corazon.style.fontSize = (16 + Math.random() * 20) + "px";
    corazon.style.animationDuration = (3 + Math.random() * 3) + "s";

    contenedor.appendChild(corazon);

    corazon.addEventListener("animationend", () => {
      corazon.remove();
    });
  }
}

// Una pequeña lluvia de corazones al entrar.
window.addEventListener("load", () => {
  lanzarCorazones(12);
});
function mostrarMensajeJon() {
    document.getElementById("mensaje-jon").textContent =
        "🎀 Feliz cumpleaños. Espero que este pequeño detalle te saque una sonrisa. ♡";
}