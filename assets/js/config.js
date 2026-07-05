/* ==========================================================================
   SITE CONFIG
   ⚠️ START HERE. This is the file you'll edit most often.

   Everything in this object is pulled into every page automatically by
   layout.js — change a value once here and it updates the nav, footer,
   contact page, and browser tab everywhere on the site.

   Just edit the values on the right of each colon. Keep the quote marks.
   ========================================================================== */

const SITE_CONFIG = {
  // The name of the website itself, shown as the logotype in the nav.
  siteName: "Atelier",

  // Your company / studio name, shown in small caps under the logo and
  // in the footer. Leave empty to hide the small company line under the
  // logo.
  companyName: "",

  // One sentence describing what you do. Used in the browser tab and
  // for search engines.
  tagline: "Websites for businesses that take their growth seriously.",

  // Shown in the footer "about" blurb.
  footerBlurb:
    "We design and build fast, premium websites for ambitious businesses — from first sketch to launch day.",

  contact: {
    email: "pradyum2937@gmail.com",
    phone: "+91 9579199234",
    location: "Based remotely — working with clients worldwide",
    // Optional: only shown if you fill it in.
    calendlyUrl: "",
  },

  socials: [
    // Add or remove rows. Leave url empty ("") to hide a link.
    { label: "Instagram", url: "" },
    { label: "LinkedIn", url: "" },
    { label: "Twitter / X", url: "" },
    { label: "Dribbble", url: "" },
  ],

  nav: [
    { label: "Home", href: "index.html" },
    { label: "Work", href: "work.html" },
    { label: "About", href: "about.html" },
    { label: "Testimonials", href: "testimonials.html" },
    { label: "Blog", href: "blog.html" },
    { label: "Contact", href: "contact.html" },
  ],

  // The button shown on the right side of the nav.
  navCta: { label: "Start a project", href: "contact.html" },
};
