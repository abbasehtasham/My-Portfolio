// ============================================
// NAVIGATION & MOBILE MENU
// ============================================
function toggleMenu() {
  document.getElementById('mobileNav').classList.toggle('open');
}

// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 60);
    }
  });
}, { threshold: 0.1 });

function initRevealObserver() {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// ============================================
// PROJECT FILTER
// ============================================
function filterProjects(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.project-card').forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

// ============================================
// NAV SCROLL EFFECT
// ============================================
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (nav) {
    nav.style.boxShadow = window.scrollY > 50 ? '0 4px 30px rgba(0,0,0,0.4)' : 'none';
  }
});

// ============================================
// ACTIVE NAV LINK HIGHLIGHT
// ============================================
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--white)' : '';
  });
});
