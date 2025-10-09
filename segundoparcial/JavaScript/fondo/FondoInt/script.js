const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

// Crear partículas
function createParticle(x, y) {
  particles.push({
    x: x,
    y: y,
    radius: Math.random() * 5 + 2,
    dx: (Math.random() - 0.5) * 2,
    dy: (Math.random() - 0.5) * 2,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`,
    life: 100
  });
}

// Animar partículas
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  particles.forEach((p, i) => {
    p.x += p.dx;
    p.y += p.dy;
    p.life--;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();

    if (p.life <= 0) {
      particles.splice(i, 1);
    }
  });

  requestAnimationFrame(animate);
}

// Evento: mover mouse
canvas.addEventListener("mousemove", e => {
  for (let i = 0; i < 3; i++) {
    createParticle(e.clientX, e.clientY);
  }
});

animate();

// Ajustar canvas al redimensionar
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});