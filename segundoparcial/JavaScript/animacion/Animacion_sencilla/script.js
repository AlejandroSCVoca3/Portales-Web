const element = document.querySelector(".nombre");
const element_2 = document.querySelector(".nombre_2");
const button = document.getElementById("playButton");

button.addEventListener("click", () => {
  // Primer texto
  anime({
    targets: element,
    translateY: [-150, 0],
    rotate: [-15, 0],
    opacity: [0, 1],
    duration: 1500,
    easing: 'easeOutElastic(1, .8)'
  });

  // Segundo texto
  anime({
    targets: element_2,
    translateX: [-300, 0],
    rotateZ: [-20, 0],
    scale: [0.8, 1],
    opacity: [0, 1],
    duration: 1800,
    delay: 600,
    easing: 'easeOutElastic(1, .6)'
  });
});
