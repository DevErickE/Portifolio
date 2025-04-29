// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  
  // Animação fade-in ao rolar a página
  const fadeIns = document.querySelectorAll('.fade-in');
  
  function showOnScroll() {
    const triggerBottom = window.innerHeight * 0.9;
  
    fadeIns.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add('show');
      }
    });
  }
  
  window.addEventListener('scroll', showOnScroll);
  window.addEventListener('load', showOnScroll);
  
  // Modo escuro
  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = '🌗 Modo Escuro';
  toggleBtn.style.position = 'fixed';
  toggleBtn.style.bottom = '20px';
  toggleBtn.style.right = '20px';
  toggleBtn.style.padding = '10px 15px';
  toggleBtn.style.backgroundColor = '#004080';
  toggleBtn.style.color = '#fff';
  toggleBtn.style.border = 'none';
  toggleBtn.style.borderRadius = '5px';
  toggleBtn.style.cursor = 'pointer';
  toggleBtn.style.zIndex = '999';
  
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleBtn.textContent = document.body.classList.contains('dark-mode')
      ? '☀️ Modo Claro'
      : '🌗 Modo Escuro';
  });
  
  document.body.appendChild(toggleBtn);
  