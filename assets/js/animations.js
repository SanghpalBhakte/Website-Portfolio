/* ==========================================================================
   ANIMATIONS
   Three independent pieces, each safe to delete on its own:
     1. Scroll-reveal — fades/slides .reveal elements in as they enter view
     2. Throughline    — the gold guide-rail (+ mobile progress bar)
     3. Hero glow      — a soft cursor-tracked light behind the hero text
   ========================================================================== */

(function revealOnScroll() {
  const targets = document.querySelectorAll(".reveal, .reveal-line");
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );

  targets.forEach((el) => observer.observe(el));
})();

(function throughline() {
  const sections = document.querySelectorAll("[data-throughline]");
  const mount = document.getElementById("throughline-mount");
  const progressMount = document.getElementById("scroll-progress-mount");
  if (!sections.length) return;

  if (mount) {
    const nodes = Array.from(sections)
      .map(() => `<div class="throughline__node"></div>`)
      .join("");
    mount.innerHTML = `
      <div class="throughline">
        <div class="throughline__track">
          <div class="throughline__fill"></div>
          <div class="throughline__nodes">${nodes}</div>
        </div>
      </div>
    `;
  }

  if (progressMount) {
    progressMount.innerHTML = `
      <div class="scroll-progress"><div class="scroll-progress__fill"></div></div>
    `;
  }

  const fillEl = mount ? mount.querySelector(".throughline__fill") : null;
  const nodeEls = mount ? mount.querySelectorAll(".throughline__node") : [];
  const progressFill = progressMount
    ? progressMount.querySelector(".scroll-progress__fill")
    : null;

  function update() {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? Math.min(window.scrollY / docHeight, 1) : 0;

    if (fillEl) fillEl.style.height = `${progress * 100}%`;
    if (progressFill) progressFill.style.width = `${progress * 100}%`;

    sections.forEach((section, i) => {
      const rect = section.getBoundingClientRect();
      const isActive = rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.2;
      if (nodeEls[i]) nodeEls[i].classList.toggle("is-active", isActive);
    });
  }

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
})();

(function sectionGlow() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const glowSections = document.querySelectorAll(".hero-glow, .section");
  if (!glowSections.length) return;

  glowSections.forEach((section) => {
    section.addEventListener("pointermove", (e) => {
      const rect = section.getBoundingClientRect();
      section.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      section.style.setProperty("--my", `${e.clientY - rect.top}px`);
    });
  });
})();
