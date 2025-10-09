/**
 * snow.js
 * Script para generar y animar copos de nieve en el contenedor de fondo.
 */
document.addEventListener('DOMContentLoaded', () => {
    const numFlakes = 70; // Aumento la cantidad para un efecto más denso
    const container = document.getElementById("snow-container");
    const isMobile = window.innerWidth < 768;

    for (let i = 0; i < numFlakes; i++) {
        let flake = document.createElement("div");
        flake.classList.add("snowflake");

        // Posición horizontal aleatoria
        flake.style.left = Math.random() * 100 + "vw";

        // Tamaño aleatorio, más pequeño en móvil
        let minSize = isMobile ? 1 : 2;
        let maxSize = isMobile ? 3 : 5;
        let size = Math.random() * (maxSize - minSize) + minSize;
        
        flake.style.width = size + "px";
        flake.style.height = size + "px";

        // Duración y retraso de la animación para un efecto más natural
        flake.style.animationDuration = (Math.random() * 7 + 8) + "s"; // Más lentas y variadas
        flake.style.animationDelay = (Math.random() * 15) + "s"; // Comienzan en diferentes momentos
        
        // Opacidad variable
        flake.style.opacity = Math.random() * 0.7 + 0.3;

        container.appendChild(flake);
    }
});
