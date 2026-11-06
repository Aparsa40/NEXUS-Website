type Language = "en" | "fa";

const copy = {
  en: {
    nav: ["Explore", "Projects", "Learning", "About"],
    language: "فارسی",
    eyebrow: "PERSONAL AI & TECHNOLOGY HUB",
    title: "A home for ideas, projects, and the tools behind them.",
    intro: "NEXUS brings software projects, AI tools, practical notes, and hard-won solutions together in one evolving workspace.",
    explore: "Explore the ecosystem",
    github: "GitHub profile",
    searchLabel: "Find something in NEXUS",
    searchPlaceholder: "Search projects, tools, topics, or quick links…",
    searchHint: "Search across projects and platform shortcuts",
    projectsEyebrow: "SELECTED WORK",
    projectsTitle: "Projects & experiments",
    projectsIntro: "A living collection of products, prototypes, and development experiments.",
    openProject: "Open project",
    status: "Project collection",
    learningEyebrow: "FIELD NOTES",
    learningTitle: "Knowledge worth keeping",
    learningIntro: "Short, practical guides and troubleshooting notes collected from real work — so the next fix takes minutes, not hours.",
    learningCta: "Knowledge library · Coming soon",
    toolsEyebrow: "QUICK ACCESS",
    toolsTitle: "Your tools, one launchpad",
    toolsIntro: "Direct shortcuts to the platforms used across the development workflow. Sign in on the provider’s official website.",
    socialsTitle: "Social & professional platforms",
    aiTitle: "AI platforms & developer tools",
    aboutEyebrow: "WHY NEXUS",
    aboutTitle: "Build, learn, document, repeat.",
    aboutText: "NEXUS is a personal workspace for building software with AI, exploring new tools, and documenting the solutions that make future work easier.",
    contact: "Get in touch",
    legal: "Terms & privacy",
    footer: "An independent personal technology workspace.",
    noResults: "No matching items. Try another keyword.",
    soon: "Details coming soon"
  },
  fa: {
    nav: ["کاوش", "پروژه‌ها", "یادگیری", "درباره"],
    language: "English",
    eyebrow: "مرکز شخصی فناوری و هوش مصنوعی",
    title: "خانه‌ای برای ایده‌ها، پروژه‌ها و ابزارهای سازنده آن‌ها.",
    intro: "NEXUS پروژه‌های نرم‌افزاری، ابزارهای هوش مصنوعی، یادداشت‌های کاربردی و راه‌حل‌های به‌دست‌آمده از تجربه را در یک فضای کاری در حال تکامل کنار هم قرار می‌دهد.",
    explore: "کاوش در اکوسیستم",
    github: "پروفایل GitHub",
    searchLabel: "در NEXUS جست‌وجو کن",
    searchPlaceholder: "جست‌وجوی پروژه، ابزار، موضوع یا دسترسی سریع…",
    searchHint: "جست‌وجو میان پروژه‌ها و میان‌بر پلتفرم‌ها",
    projectsEyebrow: "کارهای منتخب",
    projectsTitle: "پروژه‌ها و آزمایش‌ها",
    projectsIntro: "مجموعه‌ای زنده از محصولات، نمونه‌ها و تجربه‌های توسعه.",
    openProject: "مشاهده پروژه",
    status: "مجموعه پروژه‌ها",
    learningEyebrow: "یادداشت‌های میدانی",
    learningTitle: "دانشی که باید بماند",
    learningIntro: "آموزش‌های کوتاه و کاربردی و یادداشت‌های رفع اشکال از تجربه‌های واقعی؛ تا دفعه بعد حل یک مشکل چند دقیقه زمان ببرد، نه چند ساعت.",
    learningCta: "کتابخانه دانش · به‌زودی",
    toolsEyebrow: "دسترسی سریع",
    toolsTitle: "همه ابزارها، در یک نقطه",
    toolsIntro: "میان‌بر مستقیم به پلتفرم‌های مورد استفاده در گردش‌کار توسعه. ورود به حساب در وب‌سایت رسمی هر سرویس انجام می‌شود.",
    socialsTitle: "شبکه‌های اجتماعی و حرفه‌ای",
    aiTitle: "پلتفرم‌های هوش مصنوعی و ابزار توسعه",
    aboutEyebrow: "درباره NEXUS",
    aboutTitle: "بساز، یاد بگیر، مستند کن، تکرار کن.",
    aboutText: "NEXUS فضای کاری شخصی برای ساخت نرم‌افزار با کمک هوش مصنوعی، تجربه ابزارهای تازه و مستندسازی راه‌حل‌هایی است که کارهای آینده را ساده‌تر می‌کنند.",
    contact: "راه ارتباطی",
    legal: "شرایط استفاده و حریم خصوصی",
    footer: "یک فضای کاری مستقل و شخصی برای فناوری.",
    noResults: "موردی پیدا نشد. عبارت دیگری را امتحان کن.",
    soon: "جزئیات به‌زودی"
  }
} as const;

const projects = [
  { id: "nexus-bot", category: "AI · Discord", title: "NEXUS Assistant", description: "A Discord-based AI assistant connecting conversations with practical GitHub project workflows.", tags: "discord github ai bot", href: "https://github.com/Aparsa40/NEXUS", mark: "N" },
  { id: "nexus-site", category: "Web · Platform", title: "NEXUS Website", description: "The public-facing home for projects, tools, field notes, and the wider development ecosystem.", tags: "website portfolio hub", href: "https://github.com/Aparsa40/NEXUS-Website", mark: "NX" },
  { id: "rudin-store", category: "Commerce · React", title: "Rudin Store", description: "A bilingual multi-vendor marketplace project with a product catalog and vendor-oriented workflows.", tags: "ecommerce marketplace react shop", href: "https://github.com/Aparsa40/rudin-store", mark: "R" },
  { id: "wiztalk", category: "AI · Application", title: "WizTalk", description: "An AI-powered conversational application and an ongoing full-stack engineering project.", tags: "chat ai fullstack", href: "https://github.com/Aparsa40/WizTalk", mark: "W" }
];

const social = [
  { title: "GitHub", href: "https://github.com/", group: "social", mark: "GH" },
  { title: "LinkedIn", href: "https://www.linkedin.com/", group: "social", mark: "in" },
  { title: "YouTube", href: "https://www.youtube.com/", group: "social", mark: "YT" },
  { title: "Telegram", href: "https://web.telegram.org/", group: "social", mark: "TG" },
  { title: "WhatsApp", href: "https://web.whatsapp.com/", group: "social", mark: "WA" },
  { title: "Facebook", href: "https://www.facebook.com/", group: "social", mark: "f" },
  { title: "Bluesky", href: "https://bsky.app/", group: "social", mark: "BS" },
  { title: "Mastodon", href: "https://mastodon.social/", group: "social", mark: "M" }
];

const aiTools = [
  { title: "ChatGPT", href: "https://chatgpt.com/", group: "ai", mark: "GPT" },
  { title: "Mistral", href: "https://chat.mistral.ai/", group: "ai", mark: "MI" },
  { title: "Mistral Vibe", href: "https://mistral.ai/", group: "ai", mark: "MV" },
  { title: "OpenRouter", href: "https://openrouter.ai/", group: "ai", mark: "OR" },
  { title: "Google AI Studio", href: "https://aistudio.google.com/", group: "ai", mark: "G" },
  { title: "Hugging Face", href: "https://huggingface.co/", group: "ai", mark: "HF" },
  { title: "GitHub", href: "https://github.com/", group: "ai", mark: "GH" },
  { title: "Render", href: "https://dashboard.render.com/", group: "ai", mark: "RE" }
];

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character] ?? character);
}

function shell(language: Language, content: string): string {
  const t = copy[language];
  const direction = language === "fa" ? "rtl" : "ltr";
  const alternate = language === "fa" ? "en" : "fa";
  return `<!doctype html>
<html lang="${language}" dir="${direction}">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#101b1b">
<meta name="description" content="${escapeHtml(t.aboutText)}">
<meta name="robots" content="index,follow">
<meta property="og:type" content="website"><meta property="og:title" content="NEXUS · Personal AI & Technology Hub">
<meta property="og:description" content="${escapeHtml(t.aboutText)}">
<title>NEXUS · Personal AI & Technology Hub</title>
<link rel="stylesheet" href="/styles.css"><script src="/home.js" defer></script>
</head>
<body class="home-page">
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
<a class="brand" href="/?lang=${language}" aria-label="NEXUS home"><span class="brand-symbol">N</span><span>NEXUS<span class="brand-dot">.</span></span></a>
<nav class="main-nav" aria-label="Main navigation">
<a href="#ecosystem">${t.nav[0]}</a><a href="#projects">${t.nav[1]}</a><a href="#learning">${t.nav[2]}</a><a href="#about">${t.nav[3]}</a>
</nav>
<a class="language-switch" href="/?lang=${alternate}" lang="${alternate}">${t.language}</a>
</header>
<main id="main">
<div class="page-shell">${content}</div>
</main>
<footer class="site-footer">
<a class="brand brand-small" href="/"><span class="brand-symbol">N</span><span>NEXUS<span class="brand-dot">.</span></span></a>
<span>${t.footer}</span>
<div class="footer-links"><a href="/terms?lang=${language}">${language === "fa" ? "شرایط استفاده" : "Terms"}</a><a href="/privacy?lang=${language}">${language === "fa" ? "حریم خصوصی" : "Privacy"}</a><a href="https://github.com/Aparsa40/NEXUS-Website" target="_blank" rel="noopener noreferrer">Source ↗</a></div>
</footer>
</body></html>`;
}

export function renderNexusHome(language: Language): string {
  const t = copy[language];
  const projectCards = projects.map((project, index) => `
    <article class="project-card searchable" data-search="${escapeHtml([project.title, project.description, project.category, project.tags].join(" "))}">
      <a class="project-link" href="${project.href}" target="_blank" rel="noopener noreferrer" aria-label="${t.openProject}: ${escapeHtml(project.title)}">
        <div class="project-art art-${index + 1}"><span class="project-monogram">${project.mark}</span><span class="art-orbit"></span><span class="art-caption">${project.category}</span></div>
        <div class="project-copy"><div class="project-meta"><span>${project.category}</span><span>0${index + 1}</span></div><h3>${project.title}</h3><p>${project.description}</p><span class="text-link">${t.openProject} <span aria-hidden="true">↗</span></span></div>
      </a>
    </article>`).join("");

  const renderLinks = (items: typeof social) => items.map((item) => `
    <a class="platform-link searchable" href="${item.href}" target="_blank" rel="noopener noreferrer" data-search="${escapeHtml(item.title)}" aria-label="${escapeHtml(item.title)} — official website">
      <span class="platform-mark">${item.mark}</span><span>${item.title}</span><span class="platform-arrow" aria-hidden="true">↗</span>
    </a>`).join("");

  const content = `
<section class="hero" id="ecosystem">
  <div class="hero-copy">
    <p class="eyebrow"><span class="eyebrow-line"></span>${t.eyebrow}</p>
    <h1>${t.title}</h1><p class="hero-intro">${t.intro}</p>
    <div class="hero-actions"><a class="button button-primary" href="#projects">${t.explore}<span aria-hidden="true">↘</span></a><a class="button button-secondary" href="https://github.com/Aparsa40" target="_blank" rel="noopener noreferrer">${t.github}<span aria-hidden="true">↗</span></a></div>
  </div>
  <div class="hero-visual" aria-label="Abstract NEXUS ecosystem illustration">
    <div class="visual-grid"></div><div class="visual-core"><span>N</span></div>
    <div class="orbit orbit-one"><span class="orbit-node node-one">AI</span><span class="orbit-node node-two">DEV</span></div>
    <div class="orbit orbit-two"><span class="orbit-node node-three">WEB</span><span class="orbit-node node-four">LAB</span></div>
    <span class="visual-label label-top">IDEAS → SYSTEMS</span><span class="visual-label label-bottom">CONNECTED BY CURIOSITY</span>
  </div>
</section>

<section class="search-section" aria-labelledby="search-title">
  <div class="search-heading"><span class="eyebrow" id="search-title">${t.searchLabel}</span><span class="search-shortcut">⌕</span></div>
  <label class="search-box" for="site-search"><span aria-hidden="true">⌕</span><input id="site-search" type="search" placeholder="${t.searchPlaceholder}" autocomplete="off"><kbd>↵</kbd></label>
  <p class="search-hint" id="search-status" aria-live="polite">${t.searchHint}</p>
</section>

<section class="section-block" id="projects">
  <div class="section-heading"><div><p class="eyebrow">${t.projectsEyebrow}</p><h2>${t.projectsTitle}</h2><p>${t.projectsIntro}</p></div><span class="section-count">01 / 04</span></div>
  <div class="project-grid">${projectCards}</div>
  <p class="no-results" hidden>${t.noResults}</p>
</section>

<section class="learning-panel" id="learning">
  <div class="learning-symbol"><span>✳</span><i></i><i></i><i></i></div>
  <div class="learning-copy"><p class="eyebrow">${t.learningEyebrow}</p><h2>${t.learningTitle}</h2><p>${t.learningIntro}</p><a class="text-link" href="#learning" aria-disabled="true">${t.learningCta} <span aria-hidden="true">↗</span></a></div>
  <div class="learning-index"><span>FIELD NOTES</span><strong>001—∞</strong><small>Experience, captured.</small></div>
</section>

<section class="section-block quick-access" id="tools">
  <div class="section-heading"><div><p class="eyebrow">${t.toolsEyebrow}</p><h2>${t.toolsTitle}</h2><p>${t.toolsIntro}</p></div></div>
  <div class="platform-groups">
    <div class="platform-group"><h3>${t.socialsTitle}</h3><div class="platform-grid">${renderLinks(social)}</div></div>
    <div class="platform-group"><h3>${t.aiTitle}</h3><div class="platform-grid">${renderLinks(aiTools)}</div></div>
  </div>
  <p class="platform-note">${language === "fa" ? "پیوندهای شبکه‌های اجتماعی فعلاً به وب‌سایت رسمی پلتفرم‌ها می‌روند؛ پس از دریافت نشانی پروفایل‌ها، به حساب‌های عمومی خودت متصل می‌کنیم." : "Social shortcuts currently open each platform’s official website. Personal profile URLs can be added once provided."}</p>
</section>

<section class="about-panel" id="about">
  <div><p class="eyebrow">${t.aboutEyebrow}</p><h2>${t.aboutTitle}</h2></div>
  <div><p>${t.aboutText}</p><a class="text-link" href="https://github.com/Aparsa40" target="_blank" rel="noopener noreferrer" aria-label="${t.contact}">${t.contact} <span aria-hidden="true">↗</span></a></div>
</section>`;
  return shell(language, content);
}
