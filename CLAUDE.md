# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running Locally

**Important:** The site uses `fetch()` to load HTML partials, so it must be served over HTTP — opening `index.html` via `file://` will fail.

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Alternatively: `npx serve` or VS Code Live Server extension.

## Architecture

Static vanilla HTML/CSS/JS site. No build step, no framework, no dependencies.

**Entry point:** `index.html` contains only 10 empty placeholder `<div>`s. On load, `js/loader.js` fetches each HTML partial from `sections/` and injects it into the matching placeholder via `Promise.all()`.

**Section files** (`sections/*.html`): One file per page section — `nav`, `home`, `skills`, `experience`, `projects`, `education`, `blog`, `about`, `contact`, `footer`. Edit these to change content.

**CSS** (`css/`): Five files split by concern — `main.css` (global CSS variables and base), `navigation.css`, `hero.css`, `sections.css` (skills/experience/projects/education), `blog-about-contact.css`. All theme colors and font sizes are CSS custom properties at the top of `main.css`.

**JS** (`js/`):
- `loader.js` — fetches and injects section HTML partials
- `main.js` — nav toggle, scroll-reveal via IntersectionObserver, project card filtering by category, active nav link highlighting
- `blog.js` — blog modal: post data lives in the `BLOG_POSTS` object here; modal open/close, ESC key + backdrop click handlers

## Common Content Edits

- **Add a project**: Copy a `.project-card` block in `sections/projects.html`, update image src and text.
- **Add a blog post**: Add an entry to `BLOG_POSTS` in `js/blog.js` with a unique key, then add a `.blog-card` in `sections/blog.html` that calls `openBlogModal('your-key')`.
- **Change theme colors**: Edit CSS custom properties at the top of `css/main.css`.
- **Update profile photo**: Replace `images/profile.png`.

## Deployment

Upload the entire folder to any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages). All asset paths are relative.
