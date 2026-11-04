type Language = "en" | "fa";
type LegalPage = "terms" | "privacy";

const labels = {
  en: {
    home: "Overview", terms: "Terms", privacy: "Privacy", lang: "فارسی",
    eyebrow: "DISCORD · AI · DEVELOPER WORKFLOWS",
    title: "A clearer workspace for AI-assisted development.",
    intro: "NEXUS-AI is an early-stage Discord assistant connecting AI conversations with practical GitHub project workflows.",
    source: "View source on GitHub", readPrivacy: "Read the privacy policy",
    statusLabel: "PROJECT STATUS", status: "Early development",
    capabilities: "What NEXUS-AI currently does",
    capabilityIntro: "The current bot focuses on a small set of practical workflows.",
    cards: [
      ["AI conversations", "Ask questions with a bot mention or the !ask command. Requests are sent to the configured OpenRouter model."],
      ["GitHub context", "Read repository files and inspect recent commits, branches, and open pull requests."],
      ["Reviewed file updates", "Generate a proposed file revision, inspect its preview, then explicitly confirm the update."]
    ],
    noteTitle: "Human confirmation before changes",
    note: "Generating code does not apply it. A user must review the preview and send the confirmation command. Confirmed updates currently write directly to the configured repository's main branch.",
    legalTitle: "Project policies", legalIntro: "These pages describe the current implementation and its limitations.",
    footer: "NEXUS-AI · Independent project", updated: "Last updated: 5 November 2026",
    termsTitle: "Terms of Service", privacyTitle: "Privacy Policy", homeTitle: "NEXUS-AI"
  },
  fa: {
    home: "نمای کلی", terms: "شرایط استفاده", privacy: "حریم خصوصی", lang: "English",
    eyebrow: "دیسکورد · هوش مصنوعی · گردش‌کار توسعه",
    title: "محیطی منسجم‌تر برای توسعه نرم‌افزار با کمک هوش مصنوعی.",
    intro: "NEXUS-AI یک دستیار در مرحله توسعه است که گفتگوهای هوش مصنوعی را از طریق دیسکورد به گردش‌کارهای پروژه در گیت‌هاب متصل می‌کند.",
    source: "مشاهده کد در GitHub", readPrivacy: "مطالعه سیاست حریم خصوصی",
    statusLabel: "وضعیت پروژه", status: "در حال توسعه اولیه",
    capabilities: "قابلیت‌های فعلی NEXUS-AI",
    capabilityIntro: "نسخه فعلی بات روی مجموعه‌ای محدود و کاربردی از گردش‌کارها تمرکز دارد.",
    cards: [
      ["گفتگو با هوش مصنوعی", "با منشن کردن بات یا دستور !ask سؤال بپرسید. درخواست‌ها به مدل تنظیم‌شده در OpenRouter ارسال می‌شوند."],
      ["دسترسی به اطلاعات GitHub", "فایل‌های مخزن را بخوانید و Commitها، شاخه‌ها و Pull Requestهای باز را بررسی کنید."],
      ["به‌روزرسانی با تأیید کاربر", "نسخه پیشنهادی فایل را تولید و بازبینی کنید؛ سپس ثبت تغییر را صریحاً تأیید کنید."]
    ],
    noteTitle: "تأیید انسانی پیش از ثبت تغییر",
    note: "صرفاً تولید کد باعث اعمال آن نمی‌شود. کاربر باید پیش‌نمایش را بررسی و دستور تأیید را ارسال کند. در پیاده‌سازی فعلی، تغییر تأییدشده مستقیماً روی شاخه main مخزن تنظیم‌شده ثبت می‌شود.",
    legalTitle: "سیاست‌های پروژه", legalIntro: "این صفحات رفتار فعلی برنامه و محدودیت‌های آن را توضیح می‌دهند.",
    footer: "NEXUS-AI · پروژه مستقل", updated: "آخرین به‌روزرسانی: ۱۴ آبان ۱۴۰۵",
    termsTitle: "شرایط استفاده", privacyTitle: "سیاست حریم خصوصی", homeTitle: "NEXUS-AI"
  }
} satisfies Record<Language, Record<string, any>>;

function shell(language: Language, title: string, content: string): string {
  const t = labels[language];
  const direction = language === "fa" ? "rtl" : "ltr";
  const alternate = language === "fa" ? "en" : "fa";
  return `<!doctype html>
<html lang="${language}" dir="${direction}">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#0b1020">
<meta name="robots" content="noindex,follow">
<meta name="description" content="Official NEXUS-AI project overview, terms of service, and privacy policy.">
<title>${title} · NEXUS-AI</title><link rel="stylesheet" href="/styles.css">
</head>
<body>
<div class="ambient ambient-one" aria-hidden="true"></div><div class="ambient ambient-two" aria-hidden="true"></div>
<header class="site-header">
<a class="brand" href="/?lang=${language}"><span class="brand-mark">N</span><span>NEXUS<span class="brand-accent">-AI</span></span></a>
<nav class="main-nav" aria-label="Main navigation">
<a href="/?lang=${language}">${t.home}</a><a href="/terms?lang=${language}">${t.terms}</a><a href="/privacy?lang=${language}">${t.privacy}</a>
</nav><a class="language-switch" href="?lang=${alternate}" lang="${alternate}">${t.lang}</a>
</header>
<main class="page-shell">${content}</main>
<footer class="site-footer"><span>${t.footer}</span><span>${t.updated}</span></footer>
</body></html>`;
}

export function renderHomePage(language: Language): string {
  const t = labels[language];
  const cards = t.cards.map(([title, description], index) =>
    "<article class='capability-card'><span class='card-index'>0" + (index + 1) +
    "</span><h3>" + title + "</h3><p>" + description + "</p></article>"
  ).join("");

  const content = `
<section class="hero">
<div class="hero-copy"><p class="eyebrow"><span class="pulse"></span>${t.eyebrow}</p>
<h1>${t.title}</h1><p class="hero-intro">${t.intro}</p>
<div class="hero-actions">
<a class="button button-primary" href="https://github.com/Aparsa40/NEXUS" target="_blank" rel="noreferrer">${t.source}<span aria-hidden="true">↗</span></a>
<a class="button button-quiet" href="/privacy?lang=${language}">${t.readPrivacy}</a>
</div></div>
<aside class="status-panel"><span class="status-orbit" aria-hidden="true"><span></span></span>
<p class="status-label">${t.statusLabel}</p><strong>${t.status}</strong><span class="status-line"></span>
<small>Discord Gateway · OpenRouter · GitHub API</small></aside>
</section>
<section class="section-block"><div class="section-heading"><p class="eyebrow">CAPABILITIES</p>
<h2>${t.capabilities}</h2><p>${t.capabilityIntro}</p></div>
<div class="capability-grid">${cards}</div></section>
<section class="notice-panel"><div class="notice-icon" aria-hidden="true">✓</div>
<div><h2>${t.noteTitle}</h2><p>${t.note}</p></div></section>
<section class="legal-section"><div><p class="eyebrow">TRANSPARENCY</p><h2>${t.legalTitle}</h2><p>${t.legalIntro}</p></div>
<div class="legal-links"><a href="/terms?lang=${language}"><span>${t.termsTitle}</span><span aria-hidden="true">↗</span></a>
<a href="/privacy?lang=${language}"><span>${t.privacyTitle}</span><span aria-hidden="true">↗</span></a></div></section>`;
  return shell(language, t.homeTitle, content);
}

const legal: Record<Language, Record<LegalPage, string>> = {
  en: {
    terms: `<article class="legal-document"><a class="back-link" href="/">← Back to NEXUS-AI</a>
<p class="eyebrow">NEXUS-AI · LEGAL</p><h1>Terms of Service</h1>
<p class="document-lead">These terms govern your use of the NEXUS-AI Discord bot and related project website.</p><p class="updated">Effective date: 5 November 2026</p>
<h2>1. Service description</h2><p>NEXUS-AI is an early-stage, independently operated Discord bot for AI-assisted questions and limited GitHub repository workflows. Features may change, be suspended, or be discontinued as the project evolves.</p>
<h2>2. Acceptable use</h2><p>You must comply with Discord's terms and policies, applicable law, and the rules of the server in which the bot is used. Do not use the service to bypass access controls, infringe rights, distribute malicious code, or interfere with other users or systems.</p>
<h2>3. AI-generated output</h2><p>AI responses and code suggestions may be inaccurate, incomplete, insecure, or unsuitable for production. You are responsible for reviewing, testing, and validating all output before relying on it.</p>
<h2>4. GitHub operations and user confirmation</h2><p>The current bot can read files and repository metadata from its configured GitHub repository. Its file-editing workflow generates a proposed revision and displays a preview. A user must issue the explicit confirmation command before the bot attempts to write the change. The current implementation writes confirmed changes directly to the configured repository's main branch; it does not create a pull request or feature branch. Review the diff, maintain backups, and ensure you have authority to make the change before confirming.</p>
<h2>5. Third-party services</h2><p>The bot relies on Discord, OpenRouter, GitHub, and the model/provider selected through OpenRouter. Their services are governed by their own terms, availability, and privacy practices. NEXUS-AI does not control those third parties.</p>
<h2>6. Availability and changes</h2><p>The service is provided on an evolving, best-effort basis. No uptime, response time, data retention period, or fitness for a particular purpose is guaranteed. Features and these terms may be updated when implementation changes.</p>
<h2>7. Disclaimer</h2><p>To the extent permitted by applicable law, the service is provided as is and as available, without warranties. The operator is not responsible for decisions made solely on AI output or for changes you authorize through the bot. Nothing in these terms excludes liability that cannot legally be excluded.</p>
<h2>8. Contact</h2><p>For questions about these terms, contact the NEXUS-AI operator through the Discord server where the bot is installed.</p></article>`,
    privacy: `<article class="legal-document"><a class="back-link" href="/">← Back to NEXUS-AI</a>
<p class="eyebrow">NEXUS-AI · LEGAL</p><h1>Privacy Policy</h1>
<p class="document-lead">This policy explains how the current NEXUS-AI Discord bot handles information when you interact with it.</p><p class="updated">Effective date: 5 November 2026</p>
<h2>1. Information processed</h2><ul>
<li><strong>Discord message content:</strong> the bot receives message events to process commands and direct mentions. Message text is used as input when you use an AI command or mention the bot.</li>
<li><strong>AI prompts and source code:</strong> for AI questions, the relevant prompt is sent to OpenRouter. When you request a file change, the requested file content and your instruction are also sent to the configured model to generate a proposal.</li>
<li><strong>Discord context:</strong> command processing uses Discord-provided user and channel context. A pending file-change proposal is temporarily associated with the requesting user's Discord ID and channel ID.</li>
<li><strong>GitHub information:</strong> GitHub commands request repository files, branches, commits, and pull requests. A confirmed edit is submitted to GitHub using the configured access token.</li>
<li><strong>Technical logs:</strong> the bot writes operational and error diagnostics to runtime logs. It does not intentionally log every conversation as a chat transcript, but external-service error details may appear in diagnostics.</li>
</ul>
<h2>2. How information is used</h2><p>Information is processed to answer requests, execute supported commands, retrieve GitHub context, prepare file-change previews, verify that the source file has not changed since the preview, and write a change after explicit confirmation.</p>
<h2>3. Third-party processing</h2><p>Discord delivers the messages and events needed to operate the bot. OpenRouter receives AI prompts and, for file-editing requests, relevant source file content and instructions. The model provider selected through OpenRouter may also process those inputs. GitHub receives API requests to read repository information and, after confirmation, commit file changes. These services operate under their own terms and privacy policies. Review those policies before sending confidential or personal information.</p>
<h2>4. Storage and retention</h2><p>The current bot implementation does not include an application database or a persistent conversation-history feature. Pending file-edit proposals are held in process memory and are lost when the bot restarts. Operational logs may be retained by the hosting environment according to its configuration. Discord, OpenRouter, GitHub, and model providers may retain information under their own policies.</p>
<h2>5. Security</h2><p>Service credentials are intended to be supplied through environment variables rather than public source code. GitHub access depends on the permissions of the configured token. No internet-connected service can guarantee absolute security; do not send passwords, API keys, private tokens, or other secrets to the bot.</p>
<h2>6. Your choices</h2><p>You can avoid sending content to the AI service by not using AI commands or direct mentions. Do not ask the bot to process information you are not authorized to share. For questions about information handled by the bot operator, contact the operator through the Discord server where the bot is installed. Data held by Discord, GitHub, OpenRouter, or a model provider must be addressed with that provider under its own policies.</p>
<h2>7. Changes to this policy</h2><p>This policy may be revised when bot features, integrations, or data practices change. The effective date above will be updated when a revised policy is published.</p>
<h2>8. Contact</h2><p>For privacy questions, contact the NEXUS-AI operator through the Discord server where the bot is installed.</p></article>`
  },
  fa: {
    terms: `<article class="legal-document" dir="rtl"><a class="back-link" href="/">← بازگشت به NEXUS-AI</a>
<p class="eyebrow">NEXUS-AI · اسناد حقوقی</p><h1>شرایط استفاده از خدمات</h1>
<p class="document-lead">این شرایط بر استفاده از بات دیسکورد NEXUS-AI و وب‌سایت مرتبط با آن حاکم است.</p><p class="updated">تاریخ اجرا: ۱۴ آبان ۱۴۰۵</p>
<h2>۱. شرح سرویس</h2><p>NEXUS-AI یک بات مستقل و در مرحله توسعه اولیه است که برای پاسخ‌گویی با کمک هوش مصنوعی و انجام برخی گردش‌کارهای محدود در مخازن GitHub طراحی شده است. با پیشرفت پروژه، قابلیت‌ها ممکن است تغییر کنند، موقتاً متوقف شوند یا کنار گذاشته شوند.</p>
<h2>۲. استفاده مجاز</h2><p>هنگام استفاده از سرویس باید قوانین و شرایط Discord، قوانین قابل‌اعمال و مقررات سروری را که بات در آن نصب شده رعایت کنید. استفاده برای دور زدن کنترل‌های دسترسی، نقض حقوق دیگران، انتشار کد مخرب یا اخلال در سامانه‌ها و کاربران مجاز نیست.</p>
<h2>۳. خروجی هوش مصنوعی</h2><p>پاسخ‌ها و پیشنهادهای کدنویسی هوش مصنوعی ممکن است نادرست، ناقص، ناامن یا نامناسب برای محیط Production باشند. بررسی، آزمایش و اعتبارسنجی خروجی پیش از اتکا به آن بر عهده شماست.</p>
<h2>۴. عملیات GitHub و تأیید کاربر</h2><p>نسخه فعلی بات می‌تواند فایل‌ها و اطلاعات مخزن GitHub تنظیم‌شده را بخواند. در گردش‌کار ویرایش فایل، ابتدا نسخه پیشنهادی تولید و پیش‌نمایش آن نمایش داده می‌شود. بات فقط پس از دریافت دستور صریح تأیید، برای ثبت تغییر اقدام می‌کند. پیاده‌سازی فعلی تغییر تأییدشده را مستقیماً روی شاخه main مخزن تنظیم‌شده ثبت می‌کند و Pull Request یا شاخه موقت نمی‌سازد. پیش از تأیید، تغییرات را بررسی کنید، نسخه پشتیبان داشته باشید و از اختیار خود برای اعمال تغییر مطمئن شوید.</p>
<h2>۵. سرویس‌های ثالث</h2><p>بات به Discord، OpenRouter، GitHub و مدل یا ارائه‌دهنده انتخاب‌شده از طریق OpenRouter وابسته است. شرایط استفاده، دسترس‌پذیری و رویه‌های حریم خصوصی این سرویس‌ها تابع سیاست‌های خودشان است و تحت کنترل NEXUS-AI نیست.</p>
<h2>۶. دسترس‌پذیری و تغییرات</h2><p>این سرویس در حال توسعه و بدون تضمین سطح مشخصی از دسترس‌پذیری ارائه می‌شود. هیچ تضمینی درباره Uptime، زمان پاسخ‌گویی، مدت نگهداری داده یا مناسب بودن برای هدف خاص داده نمی‌شود. با تغییر پیاده‌سازی، قابلیت‌ها و این شرایط نیز ممکن است به‌روزرسانی شوند.</p>
<h2>۷. سلب ضمانت</h2><p>تا حدی که قانون اجازه می‌دهد، سرویس به همان شکل موجود و بر اساس دسترس‌پذیری فعلی ارائه می‌شود و فاقد ضمانت است. مسئولیت تصمیم‌گیری صرفاً بر مبنای خروجی هوش مصنوعی یا تغییراتی که از طریق بات تأیید می‌کنید بر عهده خودتان است. هیچ بخشی از این شرایط، مسئولیتی را که قانوناً قابل سلب نیست حذف نمی‌کند.</p>
<h2>۸. ارتباط</h2><p>برای پرسش درباره این شرایط، از طریق سرور دیسکوردی که بات در آن نصب شده با گرداننده NEXUS-AI تماس بگیرید.</p></article>`,
    privacy: `<article class="legal-document" dir="rtl"><a class="back-link" href="/">← بازگشت به NEXUS-AI</a>
<p class="eyebrow">NEXUS-AI · اسناد حقوقی</p><h1>سیاست حریم خصوصی</h1>
<p class="document-lead">این سیاست توضیح می‌دهد نسخه فعلی بات NEXUS-AI هنگام تعامل شما چه اطلاعاتی را پردازش می‌کند.</p><p class="updated">تاریخ اجرا: ۱۴ آبان ۱۴۰۵</p>
<h2>۱. اطلاعاتی که پردازش می‌شوند</h2><ul>
<li><strong>محتوای پیام‌های Discord:</strong> بات رویدادهای پیام را برای پردازش دستورها و منشن مستقیم دریافت می‌کند. متن پیام هنگام استفاده از دستورهای هوش مصنوعی یا منشن بات به‌عنوان ورودی استفاده می‌شود.</li>
<li><strong>Prompt و کد منبع:</strong> برای پاسخ هوش مصنوعی، Prompt مربوطه به OpenRouter ارسال می‌شود. هنگام درخواست ویرایش فایل، محتوای فایل انتخاب‌شده و دستور شما نیز برای تولید پیشنهاد به مدل تنظیم‌شده فرستاده می‌شود.</li>
<li><strong>اطلاعات زمینه‌ای Discord:</strong> پردازش دستورها از اطلاعات کاربر و کانال ارائه‌شده توسط Discord استفاده می‌کند. پیشنهاد ویرایش در انتظار تأیید، به‌طور موقت با شناسه کاربر و شناسه کانال در حافظه فرایند نگهداری می‌شود.</li>
<li><strong>اطلاعات GitHub:</strong> هنگام استفاده از دستورهای GitHub، بات فایل‌ها، شاخه‌ها، Commitها و Pull Requestهای مخزن را از GitHub دریافت می‌کند. ویرایش تأییدشده با استفاده از توکن دسترسی تنظیم‌شده به GitHub ارسال می‌شود.</li>
<li><strong>گزارش‌های فنی:</strong> بات گزارش‌های عملیاتی و خطا را در Logهای زمان اجرا ثبت می‌کند. بات عمداً تمام گفتگوها را به شکل تاریخچه مکالمه ثبت نمی‌کند؛ بااین‌حال ممکن است جزئیات خطاهای سرویس‌های خارجی در گزارش‌های فنی ظاهر شوند.</li>
</ul>
<h2>۲. هدف پردازش اطلاعات</h2><p>اطلاعات برای پاسخ به درخواست‌ها، اجرای دستورهای پشتیبانی‌شده، دریافت اطلاعات پروژه از GitHub، آماده‌سازی پیش‌نمایش تغییر فایل، بررسی تغییر نکردن فایل از زمان تولید پیشنهاد و ثبت تغییر پس از تأیید صریح پردازش می‌شوند.</p>
<h2>۳. پردازش توسط سرویس‌های ثالث</h2><p>Discord پیام‌ها و رویدادهای لازم برای اجرای بات را منتقل می‌کند. OpenRouter، Promptهای هوش مصنوعی و در درخواست‌های ویرایش، محتوای فایل و دستور مربوطه را دریافت می‌کند. مدل انتخاب‌شده از طریق OpenRouter نیز ممکن است این ورودی‌ها را پردازش کند. GitHub درخواست‌های API برای خواندن اطلاعات مخزن و پس از تأیید، ثبت تغییرات فایل را دریافت می‌کند. هر سرویس تابع شرایط و سیاست حریم خصوصی خودش است. پیش از ارسال اطلاعات محرمانه یا شخصی، سیاست‌های آن سرویس‌ها را بررسی کنید.</p>
<h2>۴. ذخیره‌سازی و مدت نگهداری</h2><p>پیاده‌سازی فعلی بات شامل پایگاه داده برنامه یا قابلیت نگهداری دائمی تاریخچه گفتگو نیست. پیشنهادهای ویرایش در انتظار تأیید در حافظه موقت فرایند نگهداری می‌شوند و با راه‌اندازی مجدد بات از بین می‌روند. گزارش‌های عملیاتی ممکن است مطابق تنظیمات محیط میزبانی نگهداری شوند. Discord، OpenRouter، GitHub و ارائه‌دهندگان مدل ممکن است اطلاعات را بر اساس سیاست‌های خود نگهداری کنند.</p>
<h2>۵. امنیت</h2><p>اطلاعات محرمانه سرویس باید از طریق متغیرهای محیطی تأمین شوند، نه کد عمومی مخزن. سطح دسترسی بات به GitHub به مجوزهای توکن تنظیم‌شده وابسته است. هیچ سرویس متصل به اینترنتی امنیت مطلق را تضمین نمی‌کند؛ رمز عبور، API Key، توکن خصوصی یا اطلاعات محرمانه را برای بات ارسال نکنید.</p>
<h2>۶. انتخاب‌های شما</h2><p>اگر از دستورهای هوش مصنوعی یا منشن مستقیم استفاده نکنید، محتوای پیام شما برای پردازش هوش مصنوعی ارسال نمی‌شود. اطلاعاتی را که مجاز به اشتراک‌گذاری آن نیستید برای پردازش در اختیار بات قرار ندهید. برای پرسش درباره اطلاعاتی که گرداننده بات پردازش می‌کند، از طریق سرور دیسکوردی که بات در آن نصب شده با گرداننده تماس بگیرید. درخواست مربوط به داده‌هایی که Discord، GitHub، OpenRouter یا ارائه‌دهنده مدل نگهداری می‌کند باید طبق سیاست همان ارائه‌دهنده پیگیری شود.</p>
<h2>۷. تغییرات سیاست</h2><p>در صورت تغییر قابلیت‌ها، یکپارچه‌سازی‌ها یا روش‌های پردازش داده، این سیاست ممکن است بازنگری شود. تاریخ اجرا در بالای صفحه هنگام انتشار نسخه جدید به‌روزرسانی خواهد شد.</p>
<h2>۸. ارتباط</h2><p>برای پرسش‌های مربوط به حریم خصوصی، از طریق سرور دیسکوردی که بات در آن نصب شده با گرداننده NEXUS-AI تماس بگیرید.</p></article>`
  }
};

export function renderLegalPage(page: LegalPage, language: Language): string {
  const title = page === "terms" ? labels[language].termsTitle : labels[language].privacyTitle;
  return shell(language, title, legal[language][page]);
}
