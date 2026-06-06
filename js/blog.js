// ============================================
// BLOG + PROJECTS RENDERING
// Data lives in js/data.js
// ============================================

function blogCardHTML(slug, post) {
  return `
    <a class="blog-card reveal" href="post.html?slug=${slug}">
      <div class="blog-top"></div>
      ${post.cover ? `<div class="blog-cover"><img src="${post.cover}" alt="${post.title}" /></div>` : ''}
      <div class="blog-body">
        <span class="blog-tag">${post.tag}</span>
        <div class="blog-title">${post.title}</div>
        <div class="blog-desc">${post.excerpt || ''}</div>
        <div class="blog-meta">
          <span class="blog-date">${post.date}</span>
          <span class="blog-read">Read more →</span>
        </div>
      </div>
    </a>`;
}

function projectCardHTML(slug, p) {
  return `
    <div class="project-card reveal" data-cat="${p.cat}">
      <a class="project-link-wrap" href="project.html?slug=${slug}">
        <div class="project-banner">
          <img src="${p.image}" alt="${p.title}" />
        </div>
        <div class="project-body">
          <div class="project-type">${p.type}</div>
          <div class="project-title">${p.title}</div>
          <div class="project-desc">${p.desc}</div>
          <div class="project-footer">
            <span class="project-link">View Details →</span>
            <span class="play-badge">${p.badge}</span>
          </div>
        </div>
      </a>
    </div>`;
}

// Render featured posts on home blog section
function renderFeaturedBlogs() {
  const grid = document.querySelector('#blog .blog-grid');
  if (!grid) return;
  grid.innerHTML = FEATURED_POST_SLUGS
    .map(slug => blogCardHTML(slug, BLOG_POSTS[slug]))
    .filter(Boolean)
    .join('');
}

// Render featured projects on home projects section
function renderFeaturedProjects() {
  const grid = document.querySelector('#projects .projects-grid');
  if (!grid) return;
  grid.innerHTML = FEATURED_PROJECT_SLUGS
    .map(slug => PROJECTS[slug] ? projectCardHTML(slug, PROJECTS[slug]) : '')
    .join('');
}

// Render full blog listing (blogs.html)
function renderAllBlogs() {
  const grid = document.getElementById('all-blogs-grid');
  if (!grid) return;
  grid.innerHTML = Object.entries(BLOG_POSTS)
    .map(([slug, post]) => blogCardHTML(slug, post))
    .join('');
}

// Render full projects listing (projects.html)
function renderAllProjects() {
  const grid = document.getElementById('all-projects-grid');
  if (!grid) return;
  grid.innerHTML = Object.entries(PROJECTS)
    .map(([slug, p]) => projectCardHTML(slug, p))
    .join('');
}

function getSlugFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('slug');
}

// Render single post page (post.html)
function renderSinglePost() {
  const root = document.getElementById('post-root');
  if (!root) return;
  const slug = getSlugFromURL();
  const post = BLOG_POSTS[slug];
  if (!post) {
    root.innerHTML = `<div class="page-empty"><h2>Post not found</h2><a class="btn-secondary" href="blogs.html">← Back to all posts</a></div>`;
    return;
  }
  document.title = `${post.title} — Ehtasham Abbas`;
  root.innerHTML = `
    <a class="page-back" href="blogs.html">← All Posts</a>
    <span class="post-tag">${post.tag}</span>
    <h1 class="post-title">${post.title}</h1>
    <div class="post-meta">${post.date} · 5 min read</div>
    <div class="post-body">${post.body}</div>
    <div class="post-footer">
      <a class="btn-secondary" href="blogs.html">← All Posts</a>
      <a class="btn-primary" href="index.html#contact">Get in Touch</a>
    </div>`;
}

// Render single project page (project.html)
function renderSingleProject() {
  const root = document.getElementById('project-root');
  if (!root) return;
  const slug = getSlugFromURL();
  const p = PROJECTS[slug];
  if (!p) {
    root.innerHTML = `<div class="page-empty"><h2>Project not found</h2><a class="btn-secondary" href="projects.html">← Back to all projects</a></div>`;
    return;
  }
  document.title = `${p.title} — Ehtasham Abbas`;
  const playBtn = p.playStore && p.playStore !== '#'
    ? `<a class="btn-primary" href="${p.playStore}" target="_blank" rel="noopener">View on Play Store →</a>`
    : '';
  root.innerHTML = `
    <a class="page-back" href="projects.html">← All Projects</a>
    <div class="project-hero">
      <div class="project-hero-img"><img src="${p.image}" alt="${p.title}" /></div>
      <div class="project-hero-info">
        <span class="post-tag">${p.type}</span>
        <h1 class="post-title">${p.title}</h1>
        <p class="project-hero-desc">${p.desc}</p>
        <div class="project-hero-actions">
          ${playBtn}
          <a class="btn-secondary" href="projects.html">More Projects</a>
        </div>
      </div>
    </div>
    ${p.about ? `<section class="project-block"><h3>About the Project</h3><p>${p.about}</p></section>` : ''}
    ${p.stack ? `<section class="project-block"><h3>Tech Stack</h3><div class="project-tags">${p.stack.map(s => `<span class="tag">${s}</span>`).join('')}</div></section>` : ''}
    ${p.highlights ? `<section class="project-block"><h3>Highlights</h3><ul class="project-highlights">${p.highlights.map(h => `<li>${h}</li>`).join('')}</ul></section>` : ''}
    <div class="post-footer">
      <a class="btn-secondary" href="projects.html">← All Projects</a>
      <a class="btn-primary" href="index.html#contact">Get in Touch</a>
    </div>`;
}

// Auto-bootstrap
document.addEventListener('DOMContentLoaded', () => {
  renderSinglePost();
  renderSingleProject();
  renderAllBlogs();
  renderAllProjects();
  // Reveal injected cards (standalone pages have no loader.js to do this)
  if (typeof initRevealObserver === 'function') initRevealObserver();
});
