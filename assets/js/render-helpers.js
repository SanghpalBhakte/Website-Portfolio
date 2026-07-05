/* ==========================================================================
   RENDER HELPERS
   Small functions that turn a data object (from data-projects.js,
   data-testimonials.js, data-posts.js) into HTML. Shared by every page
   that displays cards, so the card markup only has to be defined once.
   ========================================================================== */

function projectCardHTML(project, index) {
  const image = project.image
    ? `<img class="project-card__image" src="${project.image}" alt="${project.title} website screenshot" loading="lazy" />`
    : `<div class="project-card__placeholder-fill"></div>`;

  const tags = (project.tags || [])
    .map((t) => `<span class="tag">${t}</span>`)
    .join("");

  return `
    <article class="card project-card reveal" style="--delay:${index * 90}ms">
      <div class="project-card__frame">
        <div class="project-card__chrome"><span></span><span></span><span></span></div>
        ${image}
      </div>
      <div class="project-card__body">
        <span class="eyebrow">${project.category || "Project"}</span>
        <h3>${project.title}</h3>
        <p>${project.description || ""}</p>
        <div class="project-card__tags">${tags}</div>
        <div class="project-card__footer">
          ${
            project.liveUrl
              ? `<a class="btn-text" href="${project.liveUrl}" target="_blank" rel="noopener">Visit live site
                  <svg viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                 </a>`
              : `<span class="form-note" style="margin:0">Link coming soon</span>`
          }
        </div>
      </div>
    </article>
  `;
}

function testimonialCardHTML(t, index) {
  const initials = (t.name || "?")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return `
    <article class="card testimonial-card reveal" style="--delay:${index * 90}ms">
      <span class="testimonial-card__mark">&ldquo;</span>
      <p class="testimonial-card__quote">${t.quote}</p>
      <div class="testimonial-card__author">
        <div class="author-avatar">${initials}</div>
        <div>
          <div class="author-name">${t.name}</div>
          <div class="author-role">${t.role}${t.company ? ", " + t.company : ""}</div>
        </div>
      </div>
    </article>
  `;
}

function postCardHTML(post, index) {
  const image = post.image
    ? `<img src="${post.image}" alt="${post.title}" loading="lazy" />`
    : "";

  return `
    <article class="card post-card reveal" style="--delay:${index * 90}ms">
      <div class="post-card__image">${image}</div>
      <div class="post-card__meta">
        <span>${post.date || ""}</span>
        <span>&middot;</span>
        <span>${post.category || ""}</span>
      </div>
      <h3>${post.title}</h3>
      <p>${post.excerpt || ""}</p>
      <a class="btn-text" href="${post.url || "#"}" target="_blank" rel="noopener">Read post
        <svg viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>
    </article>
  `;
}

function emptyStateHTML({ title, message, hint }) {
  return `
    <div class="empty-state reveal">
      <h3>${title}</h3>
      <p>${message}</p>
      ${hint ? `<code>${hint}</code>` : ""}
    </div>
  `;
}
