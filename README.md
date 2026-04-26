# Ehtasham Abbas — Portfolio Website

A modular static portfolio website with a clean folder structure.

## Project Structure

```
portfolio/
├── index.html              # Main entry point - loads all sections
├── README.md
├── css/
│   ├── main.css            # Variables, reset, base styles, animations
│   ├── navigation.css      # Top nav + mobile menu
│   ├── hero.css            # Home/hero section styles
│   ├── sections.css        # Skills, Experience, Projects, Education
│   └── blog-about-contact.css   # Blog modal, About, Contact, Footer
├── js/
│   ├── main.js             # Nav toggle, scroll reveal, project filter
│   ├── loader.js           # Dynamically loads section HTMLs
│   └── blog.js             # Blog modal handler with article data
├── sections/
│   ├── nav.html            # Navigation bar
│   ├── home.html           # Hero section
│   ├── skills.html         # Tech stack cards
│   ├── experience.html     # Career timeline
│   ├── projects.html       # 10 project cards
│   ├── education.html      # University card
│   ├── blog.html           # Blog cards + modal markup
│   ├── about.html          # About section with photo
│   ├── contact.html        # Contact links
│   └── footer.html         # Footer
└── images/
    ├── profile.png         # Profile photo (transparent bg)
    ├── pakwheels.png
    ├── smarty-men-suit.png
    ├── fast-share.png
    ├── gps-camera.png
    ├── recover-messages.png
    ├── gomobile-school.png
    ├── caller-locator.png
    ├── financial-app.svg   # Generated banner
    ├── stag-vpn.png
    └── lurvio-vpn.png
```

## How It Works

`index.html` contains **only placeholders** for each section. On page load,
`js/loader.js` uses `fetch()` to dynamically load each HTML partial from the
`sections/` folder into its placeholder. This keeps each section in its own
clean file for easy editing.

## Running Locally

⚠️ **Important**: Because the loader uses `fetch()` to load HTML partials,
you must serve the site through an HTTP server (not open `index.html` directly
via `file://` — browsers block fetch from local files).

### Option 1 — Python (easiest)
```bash
cd portfolio
python3 -m http.server 8000
```
Then open: http://localhost:8000

### Option 2 — Node.js
```bash
cd portfolio
npx serve
```

### Option 3 — VS Code
Install the "Live Server" extension, right-click `index.html` → "Open with Live Server".

## Editing Content

- **Add/edit a project**: Edit `sections/projects.html` — copy any
  `.project-card` block, change image src + text.
- **Add a blog post**: Add the post object to `BLOG_POSTS` in `js/blog.js`,
  then add a `.blog-card` in `sections/blog.html` calling
  `openBlogModal('your-post-id')`.
- **Update profile photo**: Replace `images/profile.png`.
- **Change colors/theme**: Edit CSS variables at top of `css/main.css`.

## Deployment

Upload the entire `portfolio/` folder to any static host:
- GitHub Pages
- Netlify (drag-and-drop)
- Vercel
- Cloudflare Pages

All paths are relative, so it works out of the box.
