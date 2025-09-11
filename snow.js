const numFlakes = 50;
const container = document.getElementById("snow-container");

for (let i = 0; i < numFlakes; i++) {
    let flake = document.createElement("div");
    flake.classList.add("snowflake");

    flake.style.left = Math.random() * window.innerWidth + "px";

    let size = Math.random() * 5 + 2;
    // Limita tamaño en móviles
    if(window.innerWidth < 768) size = Math.random() * 3 + 1;
    flake.style.width = size + "px";
    flake.style.height = size + "px";

    flake.style.animationDuration = (Math.random() * 5 + 5) + "s";
    flake.style.opacity = Math.random() * 0.8 + 0.2;

    container.appendChild(flake);
}
