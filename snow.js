const numFlakes = 50;

for (let i = 0; i < numFlakes; i++) {
    let flake = document.createElement("div");
    flake.classList.add("snowflake");

    // Posición horizontal inicial
    flake.style.left = Math.random() * window.innerWidth + "px";

    // Tamaño aleatorio
    let size = Math.random() * 5 + 2;
    flake.style.width = size + "px";
    flake.style.height = size + "px";

    // Velocidad aleatoria
    flake.style.animationDuration = (Math.random() * 5 + 5) + "s";

    // Opacidad aleatoria
    flake.style.opacity = Math.random() * 0.8 + 0.2;

    document.body.appendChild(flake);
}
