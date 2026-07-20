/* ==========================================================================
   BTH OS - ULTRA-PREMIUM SAAS LANDING PAGE INTERACTION ENGINE
   Pure ES6 Vanilla JavaScript - 0 Heavy Libraries - 60 FPS GPU Performance
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initHeroCanvas();
  initNavbarScroll();
  initScrollReveals();
  initFaqAccordion();
  initCalculatorWidget();
  initLightboxModal();
  initMobileMenu();
});

/* --- 0. Light/Dark Theme Switcher Engine --- */
function initThemeToggle() {
  const toggleButtons = document.querySelectorAll('#theme-toggle, #mobile-theme-toggle');
  const savedTheme = localStorage.getItem('bth-theme') || 'dark';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('bth-theme', theme);
  }

  applyTheme(savedTheme);

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  });
}

/* --- 1. GPU Accelerated Ambient Hero Canvas --- */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  // Create lightweight particle nodes
  const particleCount = Math.min(Math.floor(width / 35), 45);
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 1.8 + 0.5,
      alpha: Math.random() * 0.4 + 0.1
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Subtle Grid background lines
    const gridSize = 60;
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
    ctx.lineWidth = 1;

    ctx.beginPath();
    for (let x = 0; x < width; x += gridSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
    ctx.stroke();

    // Render & Move Particles
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.fillStyle = `rgba(0, 230, 118, ${p.alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

/* --- 2. Navbar Scroll Shifting --- */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* --- 3. Scroll Reveal Animations (IntersectionObserver) --- */
function initScrollReveals() {
  const elements = document.querySelectorAll('.fade-up');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* --- 4. FAQ Accordion --- */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all other items
      faqItems.forEach(other => other.classList.remove('active'));

      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* --- 5. Interactive Calculator Demo --- */
function initCalculatorWidget() {
  const capitalInput = document.getElementById('calc-capital');
  const winrateInput = document.getElementById('calc-winrate');
  const riskInput = document.getElementById('calc-risk');
  const resultDisplay = document.getElementById('calc-projected');

  if (!capitalInput || !winrateInput || !riskInput || !resultDisplay) return;

  function calculate() {
    const capital = parseFloat(capitalInput.value) || 0;
    const winrate = parseFloat(winrateInput.value) || 0;
    const riskPct = parseFloat(riskInput.value) || 0;

    // Compound 20 simulated trades calculation
    let current = capital;
    const rewardRatio = 2.0; // 1:2 RRR default

    for (let i = 0; i < 20; i++) {
      const isWin = Math.random() * 100 < winrate;
      if (isWin) {
        current += current * (riskPct / 100) * rewardRatio;
      } else {
        current -= current * (riskPct / 100);
      }
    }

    const growth = Math.max(0, Math.round(current));
    resultDisplay.textContent = '$' + growth.toLocaleString();
  }

  [capitalInput, winrateInput, riskInput].forEach(input => {
    input.addEventListener('input', calculate);
  });

  calculate();
}

/* --- 6. Lightbox Screenshot Viewer --- */
function initLightboxModal() {
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');

  if (!modal || !modalImg || !closeBtn) return;

  const triggerImages = document.querySelectorAll('.desktop-body img');
  triggerImages.forEach(img => {
    img.addEventListener('click', () => {
      modalImg.src = img.src;
      modal.classList.add('active');
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}

/* --- 7. Mobile Navigation Toggle --- */
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.mobile-menu');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });
}
