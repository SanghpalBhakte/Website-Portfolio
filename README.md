# Your Portfolio Site — Editing Guide

A dark, premium portfolio site built for web designers/developers who build websites for businesses.

---

## File structure at a glance

```
portfolio-site/
│
├── index.html              Homepage
├── work.html               Portfolio / case studies
├── about.html              About page
├── testimonials.html       Client testimonials
├── blog.html               Blog / articles
├── contact.html            Contact form
│
├── assets/
│   ├── css/
│   │   ├── tokens.css      ← COLOR & FONT SYSTEM (change the whole look here)
│   │   ├── base.css        Reset + typography defaults
│   │   ├── components.css  Nav, footer, cards, buttons, throughline rail
│   │   ├── animations.css  Keyframes + scroll-reveal classes
│   │   ├── home.css        Homepage-only styles
│   │   └── pages.css       Inner page styles (work, about, etc.)
│   │
│   ├── js/
│   │   ├── config.js           ← START HERE — site name, company, contact, nav
│   │   ├── data-projects.js    ← ADD PROJECTS HERE
│   │   ├── data-testimonials.js← ADD TESTIMONIALS HERE
│   │   ├── data-posts.js       ← ADD BLOG POSTS HERE
│   │   ├── render-helpers.js   Card HTML factories (rarely edited)
│   │   ├── layout.js           Builds nav + footer from config
│   │   └── animations.js       Scroll-reveal + throughline + hero glow
│   │
│   └── images/
│       ├── projects/           Drop project screenshots here
│       └── blog/               Drop blog cover images here
```

---

## The 4 files you'll edit most

### 1. `assets/js/config.js` — Site identity & contact info
Change your site name, company name, tagline, email, phone, and social links here.
Everything updates everywhere automatically.

### 2. `assets/js/data-projects.js` — Add portfolio projects
Each project is one object. Copy the commented example, fill in the fields, and
remove the `/*` and `*/` around it.

```js
{
  title: "Client Name",
  category: "E-commerce",         // used in filter buttons on the Work page
  description: "One or two sentences about the project and what you achieved.",
  image: "assets/images/projects/client-screenshot.jpg",  // or "" for placeholder
  liveUrl: "https://clientwebsite.com",
  tags: ["Shopify", "Custom Theme"],
  featured: true,   // true = also shows on the homepage
},
```

### 3. `assets/js/data-testimonials.js` — Add client quotes

```js
{
  quote: "The full testimonial text here.",
  name: "Client Name",
  role: "Job Title",
  company: "Their Company",
},
```

### 4. `assets/js/data-posts.js` — Add blog posts

```js
{
  title: "Article headline",
  excerpt: "One or two sentence summary shown on the card.",
  date: "July 2026",
  category: "Process",
  image: "assets/images/blog/cover.jpg",   // or "" for placeholder
  url: "https://medium.com/your-article",  // where the full post lives
},
```

---

## Changing colors

Open `assets/css/tokens.css`. The variables at the top control everything:

| Variable | Default | What it affects |
|---|---|---|
| `--color-bg` | `#0a0908` | Page background |
| `--color-gold` | `#bfa055` | Primary accent (buttons, eyebrows, borders) |
| `--color-gold-bright` | `#e8c766` | Hover / highlight states |
| `--color-ivory` | `#f5f1e8` | Headings and primary text |
| `--color-muted` | `#aca48f` | Body copy |

---

## Changing fonts

In `tokens.css`, edit `--font-display` (headings) and `--font-body` (body text).
Then update the Google Fonts link in each HTML file's `<head>`.

---

## Wiring up the contact form

Open `contact.html`. Find this line:

```html
<form id="contact-form" method="POST" action="">
```

Replace the empty `action=""` with your Formspree URL:

```html
<form id="contact-form" method="POST" action="https://formspree.io/f/YOUR_ID">
```

Sign up free at https://formspree.io — they handle the email delivery.

---

## Adding your photo (About page)

1. Add your photo to `assets/images/portrait.jpg`
2. Open `about.html`
3. Find the `about-portrait-placeholder` div and replace it with:
   ```html
   <img src="assets/images/portrait.jpg" alt="Your Name" />
   ```

---

## Hosting

This is a plain HTML/CSS/JS site — no build tools required.
Upload the entire `portfolio-site/` folder to:
- **Netlify** (drag and drop the folder at netlify.com/drop) ← easiest
- **Vercel** (connect a GitHub repo)
- **GitHub Pages**
- Any web host that serves static files

---

## The throughline

The gold vertical guide-rail on the left side of the screen (desktop) fills as
you scroll and lights up nodes as each section comes into view. On mobile it
becomes a thin gold progress bar at the top of the screen.

It's driven by `data-throughline` attributes on `<section>` elements. Every
section with `data-throughline="anything"` gets a node automatically. You don't
need to touch `animations.js` to add or remove nodes — just add or remove the
attribute from your sections.
