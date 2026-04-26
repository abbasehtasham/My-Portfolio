# Portfolio Website Agent Instructions

## Overview
This is a static portfolio website with modular HTML sections loaded dynamically via JavaScript. All paths are relative, no build process required.

## Development Setup
- **Local Development**: Run `python3 -m http.server 8000` and open `http://localhost:8000`. Do NOT open `index.html` directly (file:// protocol blocks fetch()).
- **Deployment**: Upload entire folder to any static host (GitHub Pages, Netlify, Vercel). No build step needed.

## Architecture
- `index.html` contains placeholders; `js/loader.js` fetches sections from `sections/` folder.
- CSS split by concern: `main.css` (variables/animations), then feature-specific files.
- JS: `main.js` (interactions), `blog.js` (blog modal), `loader.js` (dynamic loading - load last).

## Key Conventions
- **CSS Variables**: Use `--accent`, `--bg`, etc. from `main.css` for consistent theming.
- **Component Classes**: `.card` for hover effects, `.reveal` for scroll animations, `.tag` for monospace labels.
- **Naming**: Lowercase with dashes for IDs/classes. Sections have `id="section-name"`.
- **Responsive**: Use `grid-template-columns: repeat(auto-fill, minmax(340px, 1fr))` for flexible grids.

## Common Patterns
- **Add Project**: Copy `.project-card` in `sections/projects.html`, update image/title, add `data-cat` attribute.
- **Add Blog Post**: Add object to `BLOG_POSTS` in `js/blog.js`, add card in `sections/blog.html`.
- **Modify Theme**: Edit CSS variables in `css/main.css` - all components use `var(--colorname)`.

## Pitfalls to Avoid
- Never open `index.html` directly - use HTTP server for fetch() to work.
- Ensure `.reveal` class on elements for scroll animations; `initRevealObserver()` must run after sections load.
- Update JS selectors if renaming HTML IDs (e.g., `#mobileNav` in `toggleMenu()`).

## Key Files
- [README.md](README.md): Project structure and how it works.
- [css/main.css](css/main.css): CSS variables and base styles.
- [js/loader.js](js/loader.js): Dynamic section loading.
- [js/main.js](js/main.js): Navigation and interactions.
- [sections/](sections/): Individual HTML partials.

For detailed structure, see [README.md](README.md).</content>
<parameter name="filePath">/Users/user/Documents/My PortFolio/portfolio/AGENTS.md