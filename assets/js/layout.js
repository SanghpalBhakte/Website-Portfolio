/* ==========================================================================
   LAYOUT
   Builds the nav and footer from SITE_CONFIG so every page stays in sync.
   Requires config.js to be loaded first.
   ========================================================================== */

(function () {
  function currentPage() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    return path;
  }

  function renderHeader() {
    const mount = document.getElementById("site-header");
    if (!mount) return;
    const page = currentPage();

    const links = SITE_CONFIG.nav
      .map((item) => {
        const isCurrent = item.href === page;
        return `<a href="${item.href}"${isCurrent ? ' aria-current="page"' : ""}>${item.label}</a>`;
      })
      .join("");

    mount.innerHTML = `
      <div class="container">
        <a href="index.html" class="logo">
          <span class="logo-name">${SITE_CONFIG.siteName}</span>
          <span class="logo-company">${SITE_CONFIG.companyName}</span>
        </a>
        <nav class="main-nav" aria-label="Primary">
          <div class="main-nav__links">${links}</div>
          <a class="btn btn-primary nav-cta" href="${SITE_CONFIG.navCta.href}">${SITE_CONFIG.navCta.label}</a>
          <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </nav>
      </div>
    `;

    const toggle = mount.querySelector(".nav-toggle");
    toggle.addEventListener("click", () => {
      const isOpen = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    mount.querySelectorAll(".main-nav__links a").forEach((a) =>
      a.addEventListener("click", () => {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );

    const onScroll = () => {
      mount.classList.toggle("is-scrolled", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function renderFooter() {
    const mount = document.getElementById("site-footer");
    if (!mount) return;

    const socialLinks = SITE_CONFIG.socials
      .filter((s) => s.url)
      .map((s) => `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`)
      .join("");

    const navLinks = SITE_CONFIG.nav
      .map((item) => `<a href="${item.href}">${item.label}</a>`)
      .join("");

    mount.innerHTML = `
      <div class="container">
        <div class="footer-brand">
          <span class="logo-name">${SITE_CONFIG.siteName}</span>
          <p>${SITE_CONFIG.footerBlurb}</p>
        </div>
        <div class="footer-col">
          <h4>Site</h4>
          ${navLinks}
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <a href="mailto:${SITE_CONFIG.contact.email}">${SITE_CONFIG.contact.email}</a>
          ${socialLinks}
        </div>
      </div>
      <div class="footer-bottom">
        <div class="container">
          <small>&copy; ${new Date().getFullYear()} ${SITE_CONFIG.companyName}. All rights reserved.</small>
          <small>Built by ${SITE_CONFIG.companyName}</small>
        </div>
      </div>
    `;
  }

  document.title = document.title || SITE_CONFIG.siteName;
  renderHeader();
  renderFooter();
})();
