let counterValue = 0;
let counterInterval;
let currentSlide = 0; 
let isTyping = false;
let particleSystem = null; 
let particleSystemActive = false;
let currentParticleColor = '#ffd700';

document.addEventListener('DOMContentLoaded', function() {
    const clickBox = document.getElementById('clickBox');
    if (clickBox) {
        clickBox.addEventListener('click', function() {
            this.classList.toggle('clicked');
            
            if (this.classList.contains('clicked')) {
                this.textContent = '¡Genial!';
                setTimeout(() => {
                    this.classList.remove('clicked');
                    this.textContent = '¡Haz Click!';
                }, 2000);
            }
        });
    }
});

function startCounter() {
    const counter = document.getElementById('counter');
    if (!counter) return;
    if (counterInterval) clearInterval(counterInterval);
    
    counterValue = 0;
    const target = 100;
    const increment = 1; 
    
    counterInterval = setInterval(() => {
        if (counterValue < target) {
            counterValue += increment;
            counter.textContent = Math.floor(counterValue);

            const scale = 1 + (Math.sin(counterValue * 0.1) * 0.05);
            counter.style.transform = `scale(${scale})`;

        } else {
            counter.textContent = target;
            counter.style.transform = 'scale(1)';
            clearInterval(counterInterval);
            counter.style.color = '#4ecdc4'; 
            setTimeout(() => counter.style.color = '#ffd700', 1000); 
        }
    }, 20);
}
function resetCounter() {
    const counter = document.getElementById('counter');
    if (!counter) return;
    if (counterInterval) clearInterval(counterInterval);
    
    counterValue = 0;
    counter.textContent = '0';
    counter.style.transform = 'scale(1)';
    counter.style.color = '#ffd700';
}

function animateProgress() {
    const progressFill = document.getElementById('progressFill');
    if (!progressFill) return;
    
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += 2;
        if (progress > 100) progress = 100;
        
        progressFill.style.width = progress + '%';
        progressFill.textContent = progress + '%';
        
        if (progress >= 100) clearInterval(progressInterval);
    }, 50);
}
function resetProgress() {
    const progressFill = document.getElementById('progressFill');
    if (!progressFill) return;
    progressFill.style.width = '0%';
    progressFill.textContent = '0%';
}

function nextSlide() {
    const sliderWrapper = document.getElementById('sliderWrapper');
    if (!sliderWrapper) return;
    const slides = sliderWrapper.children;
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlider();
}
function previousSlide() {
    const sliderWrapper = document.getElementById('sliderWrapper');
    if (!sliderWrapper) return;
    const slides = sliderWrapper.children;
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlider();
}
function updateSlider() {
    const sliderWrapper = document.getElementById('sliderWrapper');
    if (!sliderWrapper) return;
    sliderWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function createParticleBurst() {
    const container = document.getElementById('particlesContainer');
    if (!container) return;
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const centerX = container.offsetWidth / 2;
        const centerY = container.offsetHeight / 2;

        particle.style.left = centerX + (Math.random() - 0.5) * 50 + 'px';
        particle.style.top = centerY + (Math.random() - 0.5) * 50 + 'px';
        
        particle.style.setProperty('--hue', Math.random() * 360); 

        container.appendChild(particle);
        setTimeout(() => particle.remove(), 2000);
    }
}

window.addEventListener('scroll', () => {
    const bg = document.getElementById('parallaxBg');
    const mid = document.getElementById('parallaxMid');
    const fg = document.getElementById('parallaxFg');
    let scrollY = window.scrollY;
    
    if (bg) bg.style.transform = `translateY(${scrollY * 0.1}px)`;
    if (mid) mid.style.transform = `translateY(${scrollY * 0.3}px)`;
    if (fg) fg.style.transform = `translateY(${scrollY * 0.5}px)`;
});

function startTyping() {
    if (isTyping) return;
    const text = "Este es un efecto máquina de escribir con JavaScript.";
    const typingText = document.getElementById('typingText');
    if (!typingText) return;
    typingText.textContent = '';
    let i = 0;
    isTyping = true;
    
    function typeChar() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeChar, 100);
        } else {
            isTyping = false;
        }
    }
    typeChar();
}

const canvas = document.getElementById('physicsCanvas');
const ctx = canvas ? canvas.getContext('2d') : null;
let balls = [];

let isAnimating = false; 

function animateBalls() {
    if (!ctx) return;
    if (balls.length === 0) {
        isAnimating = false;
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(ball => {
        ball.x += ball.dx;
        ball.y += ball.dy;
        ball.dy += 0.5; 

        if (ball.y + ball.radius > canvas.height) {
            ball.y = canvas.height - ball.radius; 
            ball.dy *= -0.8;
        }

        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
            ball.dx *= -1;
        }

        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ff6b6b';
        ctx.fill();
        ctx.closePath();
    });
    
    requestAnimationFrame(animateBalls);
}

function addBall() {
    if (!ctx) return;
    balls.push({
        x: Math.random() * (canvas.width - 20) + 10,
        y: 0,
        dx: (Math.random() - 0.5) * 4,
        dy: 2 + Math.random() * 2,
        radius: 10
    });
    if (!isAnimating) {
        isAnimating = true;
        animateBalls();
    }
}
function clearCanvas() {
    balls = [];
    isAnimating = false; 
    if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function morphText() {
    const el = document.getElementById('morphingText');
    if (!el) return;
    
    el.textContent = el.textContent.trim() === "JAVASCRIPT" ? "CSS MAGIC" : "JAVASCRIPT";
    
    el.classList.toggle('morphing'); 
}

let particles = [];
const pCanvas = document.getElementById('particleCanvas');
const pCtx = pCanvas ? pCanvas.getContext('2d') : null;

function initParticles() {
    particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * pCanvas.width,
            y: Math.random() * pCanvas.height,
            dx: (Math.random() - 0.5) * 1.5,
            dy: (Math.random() - 0.5) * 1.5,
            radius: Math.random() * 3 + 1
        });
    }
}

function drawParticles() {
    if (!pCtx || !particleSystemActive) return;

    pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);
    
    particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;
        
        if (p.x < 0 || p.x > pCanvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > pCanvas.height) p.dy *= -1;
        
        pCtx.beginPath();
        pCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        pCtx.fillStyle = currentParticleColor;
        pCtx.fill();
        pCtx.closePath();
    });
    
    particleSystem = requestAnimationFrame(drawParticles);
}

function toggleParticleSystem() {
    if (!pCtx) return;
    
    if (particleSystemActive) {
        particleSystemActive = false;
        cancelAnimationFrame(particleSystem);
        pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);
    } else {
        initParticles();
        particleSystemActive = true;
        drawParticles();
    }
}

function changeParticleColor() {
    currentParticleColor = currentParticleColor === '#ffd700' ? '#4ecdc4' : '#ffd700';
    if (!particleSystemActive && pCtx) {
        pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);
    }
}