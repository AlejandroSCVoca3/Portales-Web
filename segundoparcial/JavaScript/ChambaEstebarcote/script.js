document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


const fases = document.querySelectorAll('.fase');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

fases.forEach(fase => observer.observe(fase));


const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    header.style.background = 'linear-gradient(90deg, var(--color-accent), var(--color-accent2))';
    header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.6)';
  } else {
    header.style.background = 'linear-gradient(90deg, var(--color-accent2), var(--color-accent))';
    header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.4)';
  }
});


console.log("%c🚀 Proyecto cargado correctamente — versión senior activada.", "color:#00c6ff; font-weight:bold;");
