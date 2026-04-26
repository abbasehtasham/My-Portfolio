// ============================================
// DYNAMIC SECTION LOADER
// Loads HTML partials from /sections/ folder
// ============================================

const sectionsToLoad = [
  { id: 'nav-placeholder', file: 'sections/nav.html' },
  { id: 'home-placeholder', file: 'sections/home.html' },
  { id: 'skills-placeholder', file: 'sections/skills.html' },
  { id: 'experience-placeholder', file: 'sections/experience.html' },
  { id: 'projects-placeholder', file: 'sections/projects.html' },
  { id: 'education-placeholder', file: 'sections/education.html' },
  { id: 'blog-placeholder', file: 'sections/blog.html' },
  { id: 'about-placeholder', file: 'sections/about.html' },
  { id: 'contact-placeholder', file: 'sections/contact.html' },
  { id: 'footer-placeholder', file: 'sections/footer.html' },
];

async function loadSection(id, file) {
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`Failed to load ${file}`);
    const html = await response.text();
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  } catch (err) {
    console.error(`Error loading ${file}:`, err);
  }
}

async function loadAllSections() {
  await Promise.all(sectionsToLoad.map(s => loadSection(s.id, s.file)));
  // Re-init scroll reveal after sections are loaded
  if (typeof initRevealObserver === 'function') initRevealObserver();
}

document.addEventListener('DOMContentLoaded', loadAllSections);
