# Nidhi — Portfolio

A responsive personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, and Lucide icons.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Structure

- `src/App.jsx` – assembles all sections
- `src/components/` – Navbar, Hero, TechMarquee, Services, Projects, ProjectModal, Experience, Skills, Education, Contact
- `src/data/content.js` – all portfolio content (edit this to update text, projects, skills, etc.)
- `src/index.css` – global styles + Tailwind

## Things to personalize before deploying

1. **Photo** — in `src/components/Hero.jsx`, swap the placeholder SVG silhouette for `<img src="/your-photo.jpg" />` (drop the image in `public/`).
2. **Projects** — in `src/data/content.js`, update the `repo` field for each project to your real `owner/repo-name` on GitHub so the README modal pulls real content.
3. **Contact info** — update the email and WhatsApp number in `src/components/Contact.jsx`.
4. **Resume** — the "Resume" and "Download CV" buttons currently link to `#`; point them at your actual resume PDF (e.g. place it in `public/resume.pdf` and set `href="/resume.pdf"`).
5. **Social links** — footer GitHub/LinkedIn/Twitter links in `src/components/Contact.jsx` are placeholders.

## Deploying

This is a standard Vite app — it deploys straight to Vercel, Netlify, GitHub Pages, or any static host by running `npm run build` and serving the `dist/` folder.
# Portfolio
