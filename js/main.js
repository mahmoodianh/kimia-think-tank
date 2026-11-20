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
      <article class="card ${i === 0 && grid.dataset.cards !== "partners" ? "card--feature" : ""} ${grid.dataset.cards === "partners" ? "card--partner" : "reveal"}">
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

  renderPubs();

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
// ---------- انتشارات: کارت گزارش‌ها (کاور + عنوان) و پنجره خلاصه هر گزارش ----------
const COVER_V = 1; // اگر کاورها عوض شدند، این عدد را یکی بالا ببرید
function renderPubs() {
  const grid = $("pubGrid");
  if (!grid) return;
  const U = PUB_UI[lang];
  grid.innerHTML = PUBLICATIONS[lang].map(p => `
    <a class="pub" href="#pub-${p.id}" data-pub="${p.id}">
      <span class="pub__cover"><img src="images/publications/${p.cover}?v=${COVER_V}" alt="${p.title}" loading="lazy"></span>
      <span class="pub__kind">${U.kind}</span>
      <span class="pub__title">${p.title}</span>
      <span class="pub__read">${U.read} »</span>
    </a>`).join("");
  if (!grid.dataset.bound) {
    grid.dataset.bound = "1";
    grid.addEventListener("click", e => {
      const a = e.target.closest("[data-pub]");
      if (!a) return;
      e.preventDefault();
      openPub(a.dataset.pub);
    });
  }
  // اگر پنجره‌ای باز است (مثلاً هنگام تغییر زبان)، متنش را به‌روز کن
  const dlg = $("pubDialog");
  if (dlg?.open && dlg.dataset.pub) fillPub(dlg.dataset.pub);
}

function fillPub(id) {
  const p = PUBLICATIONS[lang].find(x => x.id === id);
  if (!p) return false;
  const U = PUB_UI[lang];
  const dlg = $("pubDialog");
  dlg.dataset.pub = id;
  $("pubCover").src = `images/publications/${p.cover}?v=${COVER_V}`;
  $("pubCover").alt = p.title;
  $("pubKind").textContent = U.kind;
  $("pubTitle").textContent = p.title;
  $("pubSumHead").textContent = U.summary;
  $("pubBody").innerHTML = p.paras.map(t => `<p>${t}</p>`).join("") +
    (p.notes ? `<div class="pub-notes"><b>${U.notes}</b><ol>${p.notes.map(n => `<li>${n}</li>`).join("")}</ol></div>` : "");
  $("pubClose").setAttribute("aria-label", U.close);
  return true;
}

function openPub(id) {
  const dlg = $("pubDialog");
  if (!dlg || !fillPub(id)) return;
  if (!dlg.open) dlg.showModal();
  dlg.querySelector(".pub-dialog__text").scrollTop = 0;
  dlg.querySelector(".pub-dialog__in").scrollTop = 0;
  history.replaceState(null, "", location.pathname + location.search + "#pub-" + id);
}

(function setupPubDialog() {
  const dlg = $("pubDialog");
  if (!dlg) return;
  const close = () => dlg.close();
  $("pubClose").addEventListener("click", close);
  dlg.addEventListener("click", e => { if (e.target === dlg) close(); }); // کلیک بیرون از کادر
  dlg.addEventListener("close", () => {
    if (location.hash.startsWith("#pub-")) history.replaceState(null, "", location.pathname + location.search + "#publications");
  });
})();

// ---------- صفحه اصلی: «محورها» (آیکون هر هسته، با لینک به صفحه همان هسته) ----------
function renderAxes() {
  const grid = $("axesGrid");
  if (!grid) return;
  grid.innerHTML = CORES[lang].map(c => `
    <a class="axis reveal" href="cores.html?c=${c.id}">
      <span class="axis__icon"><img src="images/${c.icon}.svg" alt=""></span>
      <span class="axis__title">${c.title}</span>
    </a>`).join("");
  observe(grid);
}

// گزارش‌های مرتبط با یک محور (در صفحه همان محور)
function corePubs(coreId) {
  const rel = PUBLICATIONS[lang].filter(p => p.core === coreId);
  if (!rel.length) return "";
  return `
        <div class="core__pubs reveal">
          <h3>${CORES_UI[lang].pubs}</h3>
          <ul>${rel.map(p => `
            <li><a href="pub.html?p=${p.id}">
              <img src="images/publications/${p.cover}?v=${COVER_V}" alt="" loading="lazy">
              <span><small>${PUB_UI[lang].kind}</small>${p.title}</span>
            </a></li>`).join("")}
          </ul>
        </div>`;
}

// ---------- صفحه هر گزارش: pub.html?p=<id> ----------
function renderPubPage() {
  const box = $("pubPage");
  if (!box) return;
  const U = PUB_UI[lang];
  const id = new URLSearchParams(location.search).get("p");
  const p = PUBLICATIONS[lang].find(x => x.id === id);
  $("pubBack").textContent = "« " + U.back;
  if (!p) {
    $("pubPageTitle").textContent = U.missing;
    $("pubPageKind").textContent = "";
    box.innerHTML = "";
    return;
  }
  document.title = `${p.title} | ${CORES_UI[lang].site}`;
  $("pubPageKind").textContent = U.kind;
  $("pubPageTitle").textContent = p.title;
  const core = p.core && CORES[lang].find(c => c.id === p.core);
  box.innerHTML = `
    <aside class="pub-page__side">
      <img class="pub-page__cover" src="images/publications/${p.cover}?v=${COVER_V}" alt="${p.title}">
      ${core ? `<a class="pub-page__axis" href="cores.html?c=${core.id}">
        <img src="images/${core.icon}.svg" alt=""><span><small>${U.axis}</small>${core.title}</span></a>` : ""}
    </aside>
    <article class="pub-page__text">
      <h2>${U.summary}</h2>
      ${p.paras.map(t => `<p>${t}</p>`).join("")}
      ${p.notes ? `<div class="pub-notes"><b>${U.notes}</b><ol>${p.notes.map(n => `<li>${n}</li>`).join("")}</ol></div>` : ""}
    </article>`;
}

function renderCores() {
  const list = $("coresList");
  if (!list) return;
  const U = CORES_UI[lang];
  // cores.html?c=<id> فقط همان هسته را نشان می‌دهد؛ بدون پارامتر، همه هسته‌ها
  const only = new URLSearchParams(location.search).get("c");
  const one = CORES[lang].find(c => c.id === only);
  const shown = one ? [one] : CORES[lang];
  $("coresTitle").textContent = U.pageTitle;
  $("coresIntro").textContent = U.pageIntro;
  $("coreTabs").innerHTML =
    `<a href="cores.html" class="${one ? "" : "active"}">${U.all}</a>` +
    CORES[lang].map(c =>
      `<a href="cores.html?c=${c.id}" class="${one && one.id === c.id ? "active" : ""}"><img src="images/${c.icon}.svg" alt="">${c.title}</a>`).join("");
  if (one) document.title = `${one.title} | ${U.site}`;

  list.innerHTML = shown.map((c, ci) => `
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
        ${corePubs(c.id)}
      </div>
    </section>`).join("");
  observe(list);
}

function scrollToHash() {
  // لینک مستقیم به یک گزارش (#pub-<id>): رفتن به بخش انتشارات و باز کردن پنجره همان گزارش
  if (location.hash.startsWith("#pub-")) {
    $("publications")?.scrollIntoView();
    openPub(location.hash.slice(5));
    return;
  }
  const t = location.hash && document.querySelector(location.hash);
  if (t) t.scrollIntoView();
}

// ---------- ترجمه متن‌های ثابت صفحه ----------
// متن فارسی اصلی هر بخش یک بار ذخیره می‌شود و با DICT به انگلیسی برگردانده می‌شود.
const SKIP = new Set(["SCRIPT", "STYLE"]);
const textNodes = [];
const attrNodes = [];
(function collect() {
  const dynamic = "[data-cards], #pubGrid, #pubDialog, #slider, #coresList, #coreTabs, #axesGrid, #pubPage, #pubPageTitle, #pubPageKind, #pubBack";
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

// ---------- اسلایدشوی خودکار (همکاری‌های نهادی و انتشارات) ----------
// کارت‌ها در یک ردیف؛ هر چند ثانیه یک کارت جلو می‌رود و بعد از آخری بی‌وقفه به اولی برمی‌گردد.
function createAutoSlider({ box, dots, prev, next, item, delay = 3500 }) {
  box = $(box); dots = $(dots);
  if (!box) return { reset() {} };
  const track = box.firstElementChild;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let index = 0, count = 0, perView = 1, timer = null, paused = false;

  const gap = () => parseFloat(getComputedStyle(track).columnGap) || 0;
  const step = () => (track.querySelector(item)?.offsetWidth || 0) + gap();
  const sign = () => (document.documentElement.dir === "rtl" ? 1 : -1);

  function place(animate) {
    track.style.transition = animate ? "" : "none";
    track.style.transform = `translateX(${sign() * index * step()}px)`;
    if (!animate) track.offsetHeight; // apply instantly before re-enabling transitions
    track.style.transition = "";
    dots?.querySelectorAll("button").forEach((d, i) => d.classList.toggle("active", i === index % count));
  }

  function go(to) {
    index = to;
    if (index < 0) {            // before the first card: jump to the clones at the end, then step back
      index = count;
      place(false);
      index = count - 1;
    }
    place(true);
  }

  // after sliding onto the cloned cards, snap back to the real ones without animation
  track.addEventListener("transitionend", e => {
    if (e.target === track && index >= count) { index -= count; place(false); }
  });

  function start() {
    stop();
    if (!reduce && !paused && count > perView) timer = setInterval(() => go(index + 1), delay);
  }
  function stop() { clearInterval(timer); timer = null; }

  function reset() {
    // remove old clones, measure, then clone the first cards to the end for a seamless loop
    track.querySelectorAll(".clone").forEach(c => c.remove());
    const cards = [...track.querySelectorAll(item)];
    count = cards.length;
    if (!count) return;
    perView = Math.max(1, Math.round((box.clientWidth + gap()) / step()));
    if (count > perView) cards.slice(0, perView).forEach(c => {
      const k = c.cloneNode(true);
      k.classList.add("clone"); k.setAttribute("aria-hidden", "true");
      (k.matches("a") ? [k] : []).concat([...k.querySelectorAll("a")]).forEach(a => a.tabIndex = -1);
      track.appendChild(k);
    });
    if (dots) {
      dots.innerHTML = count > perView ? cards.map((_, i) => `<button aria-label="${i + 1}"></button>`).join("") : "";
      dots.querySelectorAll("button").forEach((d, i) => d.onclick = () => { go(i); start(); });
    }
    index = count > perView ? Math.min(index % count, count - 1) : 0;
    place(false);
    start();
  }

  $(next)?.addEventListener("click", () => { go(index + 1); start(); });
  $(prev)?.addEventListener("click", () => { go(index - 1); start(); });
  box.addEventListener("mouseenter", () => { paused = true; stop(); });
  box.addEventListener("mouseleave", () => { paused = false; start(); });
  box.addEventListener("focusin", () => { paused = true; stop(); });
  box.addEventListener("focusout", () => { paused = false; start(); });
  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));
  let rt; addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(reset, 200); });

  // swipe on touch screens
  let x0 = null;
  box.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; stop(); }, { passive: true });
  box.addEventListener("touchend", e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0; x0 = null;
    if (Math.abs(dx) > 40) go(index + (dx * sign() > 0 ? 1 : -1));
    start();
  });

  return { reset };
}

const partnerSlider = createAutoSlider({ box: "partnerSlider", dots: "partnerDots", prev: "partnerPrev", next: "partnerNext", item: ".card" });
const pubSlider = createAutoSlider({ box: "pubSlider", dots: "pubDots", prev: "pubPrev", next: "pubNext", item: ".pub", delay: 4000 });

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
  renderAxes();
  renderPubPage();
  $("langToggle").textContent = UI[l].switchTo;
  $("year").textContent = fmt(UI[l].year);
  document.querySelectorAll("[data-count]").forEach(el => {
    if (el.dataset.cur) el.textContent = fmt(+el.dataset.cur);
  });
  // دکمه‌های اسلایدرها: «بعدی» همیشه در جهت خواندن
  [["prev", "next"], ["partnerPrev", "partnerNext"], ["pubPrev", "pubNext"]].forEach(([p, n]) => {
    if (!$(p)) return;
    $(p).textContent = l === "fa" ? "›" : "‹";
    $(n).textContent = l === "fa" ? "‹" : "›";
  });
  partnerSlider.reset();
  pubSlider.reset();
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
  document.body.classList.toggle("nav-open", open); // جلوگیری از اسکرول صفحه پشت منو
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
