// Textos fijos de la interfaz (el contenido personal está en data.js)
const UI = {
  es: {
    "nav.about": "Sobre mí",
    "nav.education": "Formación",
    "nav.experience": "Experiencia",
    "nav.skills": "Aptitudes",
    "nav.projects": "Proyectos",
    "courses.title": "Asignaturas cursadas",
    "courses.count": (n) => `${n} asignaturas`,
    "projects.lead": "Proyectos terminados, en curso y los que vienen. Esta sección irá creciendo.",
    "filter.all": "Todos",
    "status.done": "Terminado",
    "status.wip": "En curso",
    "status.planned": "Próximamente",
    "project.repo": "Código",
    "project.demo": "Ver demo",
    "project.ghost": "Más proyectos en camino",
    "cta.linkedin": "LinkedIn",
    "cta.github": "GitHub",
    "cta.email": "Contacto",
    "theme": "Cambiar tema",
    "lang": "Cambiar idioma",
  },
  en: {
    "nav.about": "About",
    "nav.education": "Education",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "courses.title": "Courses taken",
    "courses.count": (n) => `${n} courses`,
    "projects.lead": "Finished, ongoing and upcoming projects. This section will keep growing.",
    "filter.all": "All",
    "status.done": "Finished",
    "status.wip": "In progress",
    "status.planned": "Coming soon",
    "project.repo": "Code",
    "project.demo": "Live demo",
    "project.ghost": "More projects on the way",
    "cta.linkedin": "LinkedIn",
    "cta.github": "GitHub",
    "cta.email": "Contact",
    "theme": "Toggle theme",
    "lang": "Change language",
  },
};

const $ = (id) => document.getElementById(id);
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function store(key, value) {
  try {
    if (value === undefined) return localStorage.getItem(key);
    localStorage.setItem(key, value);
  } catch (e) {
    return null;
  }
}

let lang = store("lang") || ((navigator.language || "es").startsWith("es") ? "es" : "en");
let projectFilter = "all";

const t = (key) => UI[lang][key];

function linksHtml(cls) {
  const { linkedin, github, email } = PROFILE.links;
  const out = [];
  if (linkedin) out.push(`<a class="${cls} primary" href="${esc(linkedin)}" target="_blank" rel="noopener">${t("cta.linkedin")}</a>`);
  if (github) out.push(`<a class="${cls}" href="${esc(github)}" target="_blank" rel="noopener">${t("cta.github")}</a>`);
  if (email) out.push(`<a class="${cls}" href="mailto:${esc(email)}">${t("cta.email")}</a>`);
  return out.join("");
}

function entryHtml({ title, org, dates, place, text, chips }) {
  return `
    <article class="card entry">
      <div class="entry-head">
        <div>
          <h3>${esc(title)}</h3>
          <div class="org">${esc(org)}</div>
        </div>
        <div class="meta">${esc(dates)}<br>${esc(place)}</div>
      </div>
      <p>${esc(text)}</p>
      ${chips && chips.length ? `<div class="chips">${chips.map((c) => `<span class="chip">${esc(c)}</span>`).join("")}</div>` : ""}
    </article>`;
}

function renderProjects() {
  const statuses = ["done", "wip", "planned"].filter((s) => PROJECTS.some((p) => p.status === s));
  const options = ["all", ...statuses];
  if (!options.includes(projectFilter)) projectFilter = "all";

  $("project-filters").innerHTML = options
    .map(
      (s) =>
        `<button class="filter" role="tab" type="button" data-filter="${s}" aria-selected="${s === projectFilter}">${
          s === "all" ? t("filter.all") : t("status." + s)
        }</button>`
    )
    .join("");

  const visible = PROJECTS.filter((p) => projectFilter === "all" || p.status === projectFilter);
  const cards = visible.map(
    (p) => `
      <article class="card project">
        ${p.image ? `<img src="${esc(p.image)}" alt="" loading="lazy">` : ""}
        <span class="badge ${esc(p.status)}">${t("status." + p.status)}</span>
        <h3>${esc(p.title[lang])}</h3>
        <p>${esc(p.text[lang])}</p>
        <div class="chips">${p.tech.map((x) => `<span class="chip">${esc(x)}</span>`).join("")}</div>
        ${
          p.repo || p.demo
            ? `<div class="project-links">
                ${p.repo ? `<a href="${esc(p.repo)}" target="_blank" rel="noopener">${t("project.repo")} →</a>` : ""}
                ${p.demo ? `<a href="${esc(p.demo)}" target="_blank" rel="noopener">${t("project.demo")} →</a>` : ""}
              </div>`
            : ""
        }
      </article>`
  );
  if (projectFilter === "all") {
    cards.push(`<div class="card project ghost"><span class="plus">+</span><span>${t("project.ghost")}</span></div>`);
  }
  $("projects-list").innerHTML = cards.join("");
}

function render() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => (el.textContent = t(el.dataset.i18n)));
  $("lang-toggle").textContent = lang === "es" ? "EN" : "ES";
  $("theme-toggle").setAttribute("aria-label", t("theme"));

  $("status").textContent = PROFILE.status[lang];
  $("name").textContent = PROFILE.name;
  $("headline").textContent = PROFILE.headline[lang];
  $("location").textContent = PROFILE.location[lang];
  $("tags").innerHTML = PROFILE.tags[lang].map((x) => `<li>${esc(x)}</li>`).join("");
  $("cta").innerHTML = linksHtml("btn");
  $("about-text").innerHTML = PROFILE.about[lang].map((p) => `<p>${esc(p)}</p>`).join("");

  $("education-list").innerHTML = EDUCATION.map((e) =>
    entryHtml({ title: e.degree[lang], org: e.school[lang], dates: e.dates[lang], place: e.place[lang], text: e.text[lang] })
  ).join("");

  $("courses").innerHTML = COURSES.map(
    (c) => `
      <details class="card">
        <summary><span>${esc(c.school[lang])}</span><span class="count">${t("courses.count")(c.list.length)}</span></summary>
        <ul>${[...c.list].sort((a, b) => a.localeCompare(b, "es")).map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      </details>`
  ).join("");

  $("experience-list").innerHTML = EXPERIENCE.map((e) =>
    entryHtml({ title: e.role[lang], org: e.company, dates: e.dates[lang], place: e.place[lang], text: e.text[lang], chips: e.skills[lang] })
  ).join("");

  $("skills-list").innerHTML = SKILLS.map(
    (s) => `
      <div class="card">
        <h3>${esc(s.group[lang])}</h3>
        <div class="chips">${s.items[lang].map((x) => `<span class="chip">${esc(x)}</span>`).join("")}</div>
      </div>`
  ).join("");

  renderProjects();

  $("footer-name").textContent = PROFILE.name;
  $("year").textContent = new Date().getFullYear();
  $("footer-links").innerHTML = linksHtml("").replace(/class=" primary"/g, "");
}

$("lang-toggle").addEventListener("click", () => {
  lang = lang === "es" ? "en" : "es";
  store("lang", lang);
  render();
});

$("project-filters").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-filter]");
  if (!btn) return;
  projectFilter = btn.dataset.filter;
  renderProjects();
});

// Tema: respeta el del sistema hasta que el visitante elige uno
const savedTheme = store("theme");
if (savedTheme) document.documentElement.dataset.theme = savedTheme;
$("theme-toggle").addEventListener("click", () => {
  const current =
    document.documentElement.dataset.theme ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  store("theme", next);
});

render();
