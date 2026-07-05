# Website Portfolio

This repository contains a static portfolio website built with plain HTML, CSS, and JavaScript. It is designed for easy editing and collaboration, making it simple for your team to update content, add projects, and launch the site.

## Repository structure

```
website-portfolio/
├── index.html
├── work.html
├── about.html
├── testimonials.html
├── blog.html
├── contact.html
├── README.md
├── PRADYUMNA MOHARIR.jpeg
├── assets/
│   ├── css/
│   │   ├── animations.css
│   │   ├── base.css
│   │   ├── components.css
│   │   ├── home.css
│   │   ├── pages.css
│   │   └── tokens.css
│   ├── js/
│   │   ├── animations.js
│   │   ├── config.js
│   │   ├── data-posts.js
│   │   ├── data-projects.js
│   │   ├── data-testimonials.js
│   │   ├── layout.js
│   │   └── render-helpers.js
│   └── images/
│       ├── projects/
│       └── blog/
└── __MACOSX/
```

## What this repo does

- `index.html` is the homepage.
- `work.html` shows portfolio projects and filters.
- `about.html` is the studio/about page.
- `testimonials.html` shows client quotes.
- `blog.html` shows blog posts.
- `contact.html` includes a contact form and site contact details.

The site uses `assets/js/config.js` for shared configuration and `assets/js/data-*.js` for editable content.

## How to collaborate

1. Clone the repo:
   ```powershell
   git clone https://github.com/SanghpalBhakte/Website-Portfolio.git
   cd "website portfolio (r)"
   ```

2. Open the folder in VS Code.
3. Edit content in these files:
   - `assets/js/config.js` for site title, email, phone, and nav links.
   - `assets/js/data-projects.js` to add portfolio case studies.
   - `assets/js/data-testimonials.js` to add client quotes.
   - `assets/js/data-posts.js` to add blog posts.
   - `about.html` for the About page story section.

4. Commit and push changes:
   ```powershell
   git add .
   git commit -m "Update portfolio content"
   git push
   ```

## Running locally

This site is static and works in any browser. To preview it locally, use a simple server.

### Option 1: Python
```powershell
cd "c:\Users\Sanghapal\Downloads\website portfolio (r)"
python -m http.server 8000
```
Then open: `http://localhost:8000`

### Option 2: Live Server extension
- Install the Live Server extension in VS Code.
- Right-click `index.html` and choose `Open with Live Server`.

## Editing content

### Update the site identity
Edit `assets/js/config.js`:
- `siteName`
- `companyName`
- `tagline`
- `contact.email`
- `contact.phone`
- `socials`
- `nav`
- `navCta`

### Add portfolio projects
Edit `assets/js/data-projects.js` and add objects like:
```js
{
  title: "Client Name",
  category: "E-commerce",
  description: "One or two sentences about the project.",
  image: "assets/images/projects/example.jpg",
  liveUrl: "https://example.com",
  tags: ["Shopify", "Custom Theme"],
  featured: true,
},
```

### Add testimonials
Edit `assets/js/data-testimonials.js` and add objects like:
```js
{
  quote: "The team delivered a beautiful website quickly.",
  name: "Client Name",
  role: "Founder",
  company: "Company Name",
},
```

### Add blog posts
Edit `assets/js/data-posts.js` and add objects like:
```js
{
  title: "Article headline",
  excerpt: "Short summary.",
  date: "July 2026",
  category: "Process",
  image: "assets/images/blog/cover.jpg",
  url: "https://example.com/blog/article",
},
```

## Making the contact form functional

The form currently shows a success message in the browser when submitted. To send real emails:

1. Sign up at https://formspree.io
2. Create a form and copy your form URL.
3. Edit `contact.html` and set the form action:
   ```html
   <form id="contact-form" method="POST" action="https://formspree.io/f/YOUR_ID">
   ```

## Notes for collaborators

- Do not delete `assets/js/render-helpers.js` or `assets/js/layout.js`; they build the site automatically.
- Keep `assets/css/tokens.css` as the theme source of truth.
- If you change the `companyName` to empty in `config.js`, it will hide the small logo subtitle.

## GitHub repo

The project is already available at:
https://github.com/SanghpalBhakte/Website-Portfolio

Share this URL with collaborators so they can clone, update, and push changes.
