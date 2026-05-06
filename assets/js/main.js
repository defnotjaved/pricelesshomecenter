/* ═══ NAVBAR SCROLL ══════════════════════════════════════════ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ═══ HAMBURGER / MOBILE NAV ══════════════════════════════════ */
const hamburger  = document.getElementById('hamburger');
const mobileNav  = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    hamburger.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ═══ SCROLL REVEAL ══════════════════════════════════════════ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ═══ ACTIVE NAV HIGHLIGHT ════════════════════════════════════ */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-group a[href^="#"]');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(a => a.classList.remove('active'));
        const active = document.querySelector(`.nav-group a[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  },
  { threshold: 0.35 }
);
sections.forEach(s => sectionObserver.observe(s));

/* ═══ TICKER PAUSE ON HOVER ══════════════════════════════════ */
const tickerTrack = document.querySelector('.ticker-track');
if (tickerTrack) {
  const tickerWrap = tickerTrack.parentElement;
  tickerWrap.addEventListener('mouseenter', () => { tickerTrack.style.animationPlayState = 'paused'; });
  tickerWrap.addEventListener('mouseleave', () => { tickerTrack.style.animationPlayState = 'running'; });
}

/* ═══ HERO PARTICLE GENERATOR ════════════════════════════════ */
function createParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;

  for (let i = 0; i < 28; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${60 + Math.random() * 40}%;
      width: ${size}px;
      height: ${size}px;
      animation-delay: ${Math.random() * 6}s;
      animation-duration: ${5 + Math.random() * 6}s;
      opacity: 0;
    `;
    container.appendChild(p);
  }
}
createParticles();

/* ═══ ANIMATED COUNTER (hero) ════════════════════════════════ */
function animateCount(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1600;
  const step = duration / target;
  let current = 0;

  const timer = setInterval(() => {
    current += 1;
    el.textContent = current;
    if (current >= target) { el.textContent = target; clearInterval(timer); }
  }, step);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('.counter-num[data-target]').forEach(el => counterObserver.observe(el));

/* ═══ BRAND CARD STAGGER ═════════════════════════════════════ */
document.querySelectorAll('.brand-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.055}s`;
});

/* ═══ REVIEW CARD STAGGER ════════════════════════════════════ */
document.querySelectorAll('.review-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.065}s`;
});

/* ═══ CAT CARD STAGGER ═══════════════════════════════════════ */
document.querySelectorAll('.cat-card').forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.05}s`;
});

/* ═══ HOURS: HIGHLIGHT TODAY ═════════════════════════════════ */
const dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const todayName = dayNames[new Date().getDay()];

document.querySelectorAll('.hours-row[data-day]').forEach(row => {
  if (row.dataset.day === todayName) {
    row.classList.add('today-row');
    const timeEl = row.querySelector('.time');
    if (timeEl) {
      const openNow = document.createElement('span');
      openNow.style.cssText = `
        font-size: 10px; font-weight: 700; letter-spacing: 1.5px;
        text-transform: uppercase; color: #4ade80;
        background: rgba(74,222,128,0.12); border: 1px solid rgba(74,222,128,0.2);
        padding: 3px 8px; border-radius: 100px; margin-left: 10px;
      `;
      openNow.textContent = 'Today';
      timeEl.appendChild(openNow);
    }
  }
});

/* ═══ VIDEO: QUALITY ENHANCEMENT ════════════════════════════ */
const video = document.querySelector('.testimonial-video');
if (video) {
  video.addEventListener('loadeddata', () => {
    video.style.filter = 'brightness(1.06) contrast(1.08) saturate(1.12)';
  });
}

/* ═══ SMOOTH SCROLL OFFSET (fixed navbar) ════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const targetId = anchor.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    const offset = 72;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ═══ LOCATION CARD: HOVER SHIMMER ══════════════════════════ */
document.querySelectorAll('.loc-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top)  / rect.height) * 100;
    card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(212,32,32,0.03) 0%, #F6F6F6 70%)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.background = '';
  });
});

/* ═══ ABOUT STATS: SCROLL COUNTER ═══════════════════════════ */
const statBigs = document.querySelectorAll('.stat-big');
const statObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const raw = el.textContent.replace(/\D/g, '');
      const suffix = el.textContent.replace(/[\d]/g, '');
      const target = parseInt(raw, 10);
      if (!target || target < 2) return;

      let current = 0;
      const duration = 1400;
      const interval = duration / target;
      const timer = setInterval(() => {
        current += 1;
        el.textContent = current + suffix;
        if (current >= target) { el.textContent = target + suffix; clearInterval(timer); }
      }, Math.max(interval, 20));

      statObserver.unobserve(el);
    });
  },
  { threshold: 0.6 }
);
statBigs.forEach(el => {
  const hasNumbers = /\d/.test(el.textContent);
  if (hasNumbers && el.textContent !== '#1') statObserver.observe(el);
});
