// متن‌ها و محتوای کارت‌ها در js/i18n.js هستند.
// این فایل در هر دو صفحه (index.html و cores.html) استفاده می‌شود؛
// هر بخش فقط وقتی اجرا می‌شود که عنصرش در صفحه وجود داشته باشد.

let lang = "fa";
const $ = id => document.getElementById(id);
const fmt = n => n.toLocaleString(lang === "fa" ? "fa-IR" : "en-US").replace(/[٬,]/g, "");
const img = i => `images/thumb${(i % 8) + 1}.svg`;

// ---------- انیمیشن ورود ----------
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.classList.add("in");
    if (en.target.dataset.count) countUp(en.target);
    io.unobserve(en.target);
  });
}, { threshold: 0.15 });
const observe = root => root.querySelectorAll(".reveal, [data-count]").forEach(el => io.observe(el));

// ---------- شمارنده آمار ----------
function countUp(el) {
  const target = +el.dataset.count;
  let cur = 0;
  const inc = Math.max(1, Math.ceil(target / 60));
  const t = setInterval(() => {
    cur = Math.min(target, cur + inc);
    el.dataset.cur = cur;
    el.textContent = fmt(cur);
    if (cur >= target) clearInterval(t);
  }, 25);
}

// ---------- کارت‌های صفحه اصلی ----------
const slider = $("slider");

function renderCards() {
  const D = DATA[lang];
  document.querySelectorAll("[data-cards]").forEach((grid, gi) => {
    grid.innerHTML = D[grid.dataset.cards].map(([t, p, href, video], i) => {
      const external = href && /^https?:/.test(href);
      // ویدئوی آپارات: پخش‌کننده داخل خود کارت
      const media = video
        ? `<div class="card__video">
             <iframe src="https://www.aparat.com/video/video/embed/videohash/${video}/vt/frame"
                     title="${t}" loading="lazy" allowfullscreen
                     allow="autoplay; fullscreen; picture-in-picture"></iframe>
             <span class="card__badge">▶ ${UI[lang].video}</span>
           </div>`
        : grid.dataset.cards === "partners" && PARTNER_LOGOS[i]
        ? `<div class="card__logos">${PARTNER_LOGOS[i].map(f =>
             `<img src="images/partners/${f}" alt="${t}" loading="lazy">`).join("")}</div>`
        : `<img src="${img(i + gi * 3)}" alt="" loading="lazy">`;
      const link = href
        ? `<a href="${href}" class="more"${external ? ' target="_blank" rel="noopener"' : ""}>${external ? UI[lang].watch : UI[lang].more}</a>`
        : "";
      return `
      <article class="card ${i === 0 ? "card--feature" : ""} ${grid.dataset.cards === "partners" ? "card--partner" : ""} reveal">
        ${media}
        <div class="card__body">
          <h4>${t}</h4>
          <p>${p}</p>
          ${link}
        </div>
      </article>`;
    }).join("");
    observe(grid);
  });

  if ($("opinions")) {
    $("opinions").innerHTML = D.opinions.map(([d, t], i) => `
      <a href="#" class="sq reveal">
        <img src="${img(i)}" alt="" loading="lazy">
        <div class="sq__cap"><small>${d}</small><h3>${t}</h3></div>
      </a>`).join("");
    observe($("opinions"));
  }

  if (slider) {
    slider.innerHTML = D.media.map(([tag, t], i) => `
      <div class="media">
        <span class="media__tag">${tag}</span>
        <img src="${img(i + 4)}" alt="" loading="lazy">
        <h4>${t}</h4>
      </div>`).join("");
  }
}

// ---------- صفحه هسته‌های پژوهشی ----------
function renderCores() {
  const list = $("coresList");
  if (!list) return;
  const U = CORES_UI[lang];
  $("coresTitle").textContent = U.pageTitle;
  $("coresIntro").textContent = U.pageIntro;
  $("coreTabs").innerHTML = CORES[lang].map(c =>
    `<a href="#${c.id}"><img src="images/${c.icon}.svg" alt="">${c.title}</a>`).join("");

  list.innerHTML = CORES[lang].map((c, ci) => `
    <section class="core ${ci % 2 ? "section--alt" : ""}" id="${c.id}">
      <div class="container">
        <div class="core__head reveal">
          <img src="images/${c.icon}.svg" alt="">
          <div>
            <h2>${c.title}</h2>
            ${c.subtitle ? `<p class="core__sub">${c.subtitle}</p>` : ""}
          </div>
        </div>
        <div class="core__body reveal">
          <div class="core__desc">${c.desc.map(d => `<p>${d}</p>`).join("")}</div>
          <div class="core__focus">
            <h3>${c.listTitle}</h3>
            <ul>${c.list.map(f => `<li>${f}</li>`).join("")}</ul>
          </div>
        </div>
        <h3 class="core__team-title">${U.team}</h3>
        <div class="team">
          ${c.members.map((m, i) => `
            <div class="member reveal">
              <img src="images/team/${c.id}-${i + 1}.${PHOTO_EXT}" alt="${m}" loading="lazy">
              <h4>${m}</h4>
              <span>${ROLES[lang][i]}</span>
            </div>`).join("")}
        </div>
      </div>
    </section>`).join("");
  observe(list);
}

function scrollToHash() {
  const t = location.hash && document.querySelector(location.hash);
  if (t) t.scrollIntoView();
}

// ---------- ترجمه متن‌های ثابت صفحه ----------
// متن فارسی اصلی هر بخش یک بار ذخیره می‌شود و با DICT به انگلیسی برگردانده می‌شود.
const SKIP = new Set(["SCRIPT", "STYLE"]);
const textNodes = [];
const attrNodes = [];
(function collect() {
  const dynamic = "[data-cards], #opinions, #slider, #coresList, #coreTabs";
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const n = walker.currentNode;
    const key = n.nodeValue.trim();
    if (!key || SKIP.has(n.parentElement.tagName) || n.parentElement.closest(dynamic)) continue;
    if (key in DICT) textNodes.push({ n, orig: n.nodeValue, key });
  }
  document.querySelectorAll("[placeholder], [aria-label], img[alt]").forEach(el =>
    ["placeholder", "aria-label", "alt"].forEach(a => {
      const v = el.getAttribute(a);
      if (v && v in DICT) attrNodes.push({ el, a, v });
    })
  );
})();
const origTitle = document.title;

function translateStatic() {
  const en = lang === "en";
  textNodes.forEach(({ n, orig, key }) => (n.nodeValue = en ? orig.replace(key, DICT[key]) : orig));
  attrNodes.forEach(({ el, a, v }) => el.setAttribute(a, en ? DICT[v] : v));
  document.title = en ? DICT[origTitle] || origTitle : origTitle;
}

// ---------- تغییر زبان ----------
function setLang(l) {
  lang = l;
  const html = document.documentElement;
  html.classList.add("no-anim");
  requestAnimationFrame(() => requestAnimationFrame(() => html.classList.remove("no-anim")));
  html.lang = l;
  html.dir = l === "fa" ? "rtl" : "ltr";
  translateStatic();
  renderCards();
  renderCores();
  $("langToggle").textContent = UI[l].switchTo;
  $("year").textContent = fmt(UI[l].year);
  document.querySelectorAll("[data-count]").forEach(el => {
    if (el.dataset.cur) el.textContent = fmt(+el.dataset.cur);
  });
  if ($("prev")) {
    // دکمه‌های اسلایدر: «بعدی» همیشه در جهت خواندن
    $("prev").textContent = l === "fa" ? "›" : "‹";
    $("next").textContent = l === "fa" ? "‹" : "›";
  }
  try { localStorage.setItem("lang", l); } catch (e) {}
  const url = new URL(location);
  l === "en" ? url.searchParams.set("lang", "en") : url.searchParams.delete("lang");
  history.replaceState(null, "", url);
}

$("langToggle").addEventListener("click", e => {
  e.preventDefault();
  setLang(lang === "fa" ? "en" : "fa");
});

let saved = new URLSearchParams(location.search).get("lang");
if (!saved) { try { saved = localStorage.getItem("lang"); } catch (e) {} }
setLang(saved === "en" ? "en" : "fa");
scrollToHash();

// ---------- اسلایدر ----------
if (slider) {
  const step = () => (slider.querySelector(".media")?.offsetWidth || 300) + 22;
  const forward = () => (lang === "fa" ? -1 : 1);
  $("next").onclick = () => slider.scrollBy({ left: forward() * step() });
  $("prev").onclick = () => slider.scrollBy({ left: -forward() * step() });
}

// ---------- منوی موبایل ----------
const nav = $("nav");
const overlay = $("overlay");
const toggleNav = open => {
  nav.classList.toggle("open", open);
  overlay.classList.toggle("show", open);
};
$("navOpen").onclick = () => toggleNav(true);
$("navClose").onclick = () => toggleNav(false);
overlay.onclick = () => toggleNav(false);
document.querySelectorAll(".chev").forEach(c =>
  c.addEventListener("click", () => c.parentElement.classList.toggle("open"))
);
// با انتخاب لینکی که به همین صفحه می‌رود، منوی موبایل بسته شود
nav.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener("click", () => toggleNav(false)));

// ---------- جستجو ----------
const search = $("search");
$("searchOpen").onclick = () => {
  search.classList.add("open");
  setTimeout(() => search.querySelector("input").focus(), 200);
};
$("searchClose").onclick = () => search.classList.remove("open");

// ---------- مودال ویدئو ----------
const modal = $("modal");
if (modal) {
  $("playBtn").onclick = () => modal.classList.add("open");
  $("modalClose").onclick = () => modal.classList.remove("open");
  modal.onclick = e => { if (e.target === modal) modal.classList.remove("open"); };
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    search.classList.remove("open");
    modal?.classList.remove("open");
    toggleNav(false);
  }
});

// ---------- هدر چسبان ----------
const header = $("header");
addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 20));

observe(document);
