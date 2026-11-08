// =====================================================================
//  ترجمه‌ها
//  کلید = متن فارسی دقیقاً همان‌طور که در index.html / cores.html نوشته شده
//  مقدار = معادل انگلیسی
//  اگر متنی را در HTML عوض کردید، کلیدش را اینجا هم عوض کنید.
// =====================================================================
const DICT = {
  "اندیشکده کیمیا | مطالعات دارویی": "Kimia Think Tank | Pharmaceutical Studies",
  "هسته‌های پژوهشی | اندیشکده کیمیا": "Research Cores | Kimia Think Tank",
  "پرش به محتوا": "Skip to content",
  "تلگرام": "Telegram", "لینکدین": "LinkedIn", "ایکس": "X", "اینستاگرام": "Instagram", "آپارات": "Aparat",
  "لوگو": "Logo", "بستن": "Close", "جستجو": "Search", "منو": "Menu",

  // هدر و منو
  "اندیشکده کیمیا": "Kimia Think Tank",
  "خانه": "Home",
  "هسته‌های پژوهشی": "Research Cores",
  "تحلیل نهادی نظام فارماکوویژیلانس": "Institutional Analysis of Pharmacovigilance",
  "کمبود احصا و گزارش عوارض دارویی": "Under-reporting of Adverse Drug Reactions",
  "هوشمندسازی محاسبه دیات مقدر": "Smart Calculation of Statutory Diya",
  "دارویاری": "Darooyari",
  "تجربه‌نگاری سیاست‌های فرآورده‌های سلامت": "Health Products Policy Documentation",
  "تداوم خدمات دارویی در ناپایداری اینترنت": "Pharmacy Continuity During Internet Outages",
  "بررسی علل کمبود دارویی": "Root Causes of Drug Shortages",
  "آرشیو مطالب": "Archive",
  "رویدادها": "Events",
  "پروژه‌ها": "Projects",
  "پروژه‌های جاری": "Ongoing Projects",
  "پروژه‌های پایان‌یافته": "Completed Projects",
  "دستاوردهای سیاستی": "Policy Achievements",
  "نگارخانه": "Gallery",
  "پادکست دارو": "Pharma Podcast",
  "تصاویر": "Photos",
  "ویدئوها": "Videos",
  "اینفوگرافیک": "Infographics",
  "درباره ما": "About Us",
  "معرفی": "Introduction",
  "تاریخچه": "History",
  "رویکرد و روش کار": "Our Approach",
  "اعضای هسته‌ها": "Core Members",
  "ارتباط با ما": "Contact Us",

  // جستجو
  "جستجو در سایت": "Search the site",
  "عبارت مورد نظر را بنویسید...": "Type your search...",

  // هیرو
  "مجموعه‌ای نخبگانی از کارگروه‌های تخصصی با رویکرد مسئله‌محور برای حل چالش‌های استراتژیک نظام سلامت کشور، با تمرکز بر حوزه دارو و فرآورده‌های سلامت.":
    "An elite group of specialised working groups taking a problem-driven approach to the strategic challenges of Iran's health system, with a focus on medicines and health products.",
  "درباره اندیشکده": "About the Think Tank",
  "آشنایی با هسته‌ها": "Explore Our Cores",

  // معرفی
  "معرفی اندیشکده": "About Kimia",
  "اندیشکده کیمیا مجموعه‌ای نخبگانی متشکل از کارگروه‌های تخصصی با رویکرد مسئله‌محور است که برای حل چالش‌های استراتژیک نظام سلامت کشور فعالیت می‌کند. تمرکز اصلی این اندیشکده بر حوزه دارو و فرآورده‌های سلامت است و فعالیت‌های آن در قالب «هسته‌های پژوهشی» سازمان‌دهی می‌شود؛ هسته‌هایی که هر یک حول یک مسئله مشخص و اولویت‌دار شکل می‌گیرند و چرخه کامل ریشه‌یابی مسئله، شناسایی موانع، طراحی راهکار و پیگیری پیاده‌سازی را تا مرحله اثرگذاری بر تصمیم‌گیران دنبال می‌کنند.":
    "Kimia Think Tank is an elite group of specialised working groups with a problem-driven approach, working to solve strategic challenges in Iran's health system. Its main focus is medicines and health products, and its work is organised into \"research cores\" — each formed around a specific, high-priority problem and following the full cycle of root-cause analysis, identifying barriers, designing solutions and following up on implementation until decision-makers are influenced.",
  "زمینه‌های تخصصی": "Areas of Expertise",
  "فارماکوویژیلانس و ایمنی دارو": "Pharmacovigilance & drug safety",
  "اقتصاد دارو و زنجیره تأمین": "Drug economics & supply chain",
  "حکمرانی و تنظیم‌گری نظام دارویی": "Governance & regulation of the pharmaceutical system",
  "سلامت دیجیتال و تاب‌آوری خدمات دارویی در بحران": "Digital health & resilience of pharmacy services in crises",
  "تجربه‌نگاری سیاست‌های حوزه سلامت": "Documenting health policy experience",

  // تاریخچه
  "تاریخچه و روند شکل‌گیری": "History & Formation",
  "همه‌گیری کووید-۱۹": "The COVID-19 pandemic",
  "گروهی از دانش‌آموختگان علوم پزشکی با نام «اندیشکده نحب» فعالیت خود را با ورود به مسائل دارویی دوران همه‌گیری و تجربه‌نگاری وقایع آن آغاز کردند.":
    "A group of medical-science graduates, then known as \"Nahb Think Tank\", began working on the pharmaceutical issues of the pandemic and documenting its events.",
  "شناسایی خلأها": "Identifying gaps",
  "اعضا کوشیدند خلأهای نمایان‌شده نظام دارویی کشور در آن بحران را شناسایی کرده و با رویکرد مسئله‌محور به آن‌ها ورود کنند.":
    "Members set out to identify the gaps the crisis exposed in the national pharmaceutical system and to tackle them with a problem-driven approach.",
  "۱۴۰۱ — نخستین پروژه نظام‌مند": "2022 — First systematic project",
  "مشاهده عوارض جانبی واکسن‌های کووید-۱۹ نقطه آغاز نخستین پروژه نظام‌مند اندیشکده در حوزه فارماکوویژیلانس شد.":
    "Adverse effects observed after COVID-19 vaccines triggered the think tank's first systematic project, in pharmacovigilance.",
  "هویت تازه: اندیشکده کیمیا": "A new identity: Kimia",
  "با گسترش موضوعات و شکل‌گیری هسته‌های جدید، مجموعه با هویت تازه «اندیشکده کیمیا» مسیر خود را ادامه داد.":
    "As its topics broadened and new cores formed, the group continued under its new identity, Kimia Think Tank.",

  // رویکرد
  "الگوی کاری اندیشکده کیمیا بر حل مسئله استوار است؛ هر هسته پس از انتخاب مسئله این چرخه را تا اثرگذاری بر تصمیم‌گیران دنبال می‌کند.":
    "Kimia's way of working is built on problem solving: once a core selects a problem, it follows this cycle until decision-makers are influenced.",
  "ریشه‌یابی": "Root-cause analysis",
  "تحلیل سیستماتیک عوامل بنیادین مسئله": "Systematic analysis of the underlying factors",
  "احصای موانع": "Identifying barriers",
  "استخراج ریشه‌ها و موانع اصلی": "Extracting the main roots and obstacles",
  "طراحی راهکار": "Designing solutions",
  "راهکار عملی برای هر ریشه": "A practical solution for each root cause",
  "پیگیری اجرا": "Following up implementation",
  "پایش اثر از طریق تعامل با نهادهای مسئول": "Monitoring impact by engaging responsible bodies",
  "روش‌های پژوهش": "Research Methods",
  "مطالعه متون و اسناد بالادستی": "Literature and policy-document review",
  "تحلیل داده‌های ملی": "Analysis of national data",
  "مصاحبه با خبرگان و ذی‌نفعان کلیدی": "Interviews with experts and key stakeholders",
  "بررسی تجربیات بین‌المللی": "Review of international experience",
  "بارش فکری": "Brainstorming",
  "پنل خبرگان": "Expert panels",


  // بخش‌ها
  "مشاهده بیشتر": "View more",
  "دستاوردها و خروجی‌ها": "Outputs & Achievements",
  "همکاری‌های نهادی": "Institutional Cooperation",
  "دیدگاه‌های تخصصی": "Expert Opinions",
  "آرشیو": "Archive",
  "تولیدات چندرسانه‌ای": "Multimedia",
  "کیمیا در عرصه جهانی": "Kimia on the Global Stage",
  "Kimia in Global Pharmaceutical Research": "کیمیا در پژوهش‌های جهانی دارو",
  "آمار و اطلاعات": "Facts & Figures",
  "هسته پژوهشی فعال": "Active research cores",
  "زمینه تخصصی": "Areas of expertise",
  "نهاد همکار": "Partner institutions",
  "روش پژوهشی": "Research methods",
  "Kimia Pharmaceutical Think Tank (KPTT)": "اندیشکده مطالعات دارویی کیمیا",

  // فوتر
  "اندیشکده کیمیا؛ مجموعه‌ای مسئله‌محور برای حل چالش‌های حوزه دارو و فرآورده‌های سلامت.":
    "Kimia Think Tank: a problem-driven group tackling challenges in medicines and health products.",
  "لینک‌های مهم": "Useful Links",
  "بانک اطلاعات دارویی": "Drug Database",
  "تماس با ما": "Get in Touch",
  "تهران، خیابان نمونه، پلاک ۱": "No. 1, Sample St., Tehran, Iran",
  "تمامی حقوق محفوظ است.": "All rights reserved."
};

// متن‌های کوچکی که در کد ساخته می‌شوند
const UI = {
  fa: { switchTo: "En Version", more: "اطلاعات بیشتر »", year: 1405 },
  en: { switchTo: "نسخه فارسی", more: "More info »", year: 2026 }
};

// =====================================================================
//  محتوای کارت‌های صفحه اصلی (دو زبانه)
//  هر مورد: [عنوان، توضیح، لینک اختیاری]
//  «رویدادها»، «دیدگاه‌ها» و «چندرسانه‌ای» نمونه‌اند؛ با موارد واقعی جایگزین کنید.
// =====================================================================
const DATA = {
  fa: {
    events: [
      ["همایش تخصصی فارماکوویژیلانس", "همایشی برای کادر درمان با محوریت شناخت و گزارش‌دهی عوارض دارویی، در ادامه کوریکولوم آموزشی هسته کمبود گزارش عوارض.", "cores.html#adr-reporting"],
      ["پنل خبرگان دستورالعمل خدمات دارویی آفلاین", "نقد و نهایی‌سازی دستورالعمل ۹ ماده‌ای ارائه خدمات دارویی بدون اتصال اینترنت.", "cores.html#offline"],
      ["جلسات هم‌اندیشی تجربه‌نگاری", "گفت‌وگو درباره یافته‌های مصاحبه‌ها در حیطه‌های غذا، دارو، مکمل و تجهیزات پزشکی.", "cores.html#experience"],
      ["نشست ارائه نتایج ارزیابی طرح دارویاری", "مرور شاخص‌های کلیدی طرح در بازه ۱۳۹۹ تا ۱۴۰۳.", "cores.html#darooyari"],
      ["رونمایی از دموی سامانه محاسبه دیه", "معرفی قابلیت‌های نسخه نمایشی سامانه هوشمند محاسبه دیات مقدر.", "cores.html#diyat"]
    ],
    pubs: [
      ["آسیب‌شناسی نظام فارماکوویژیلانس کشور", "احصای کلان‌ترین مشکلات نظام فارماکوویژیلانس و ارائه راهکارهای بهبود به سازمان غذا و دارو.", "cores.html#pv-system"],
      ["ارزیابی طرح دارویاری (۱۳۹۹ تا ۱۴۰۳)", "سنجش میزان تحقق اهداف طرح با تحلیل مقایسه‌ای شاخص‌های ارزی، کمبود، تولید داخل و پرداخت از جیب.", "cores.html#darooyari"],
      ["دستورالعمل ۹ ماده‌ای خدمات دارویی آفلاین", "نسخه‌نویسی، تحویل دارو و تسویه بیمه‌ای بدون اینترنت بر پایه رمزنگاری کلید عمومی و خصوصی.", "cores.html#offline"],
      ["ریشه‌یابی کمبود انسولین نووومیکس", "تحلیل خط زمانی بحران، مصرف در برابر تأمین و سه علت اصلی کمبود.", "cores.html#shortage"],
      ["سامانه هوشمند محاسبه دیه (نسخه دمو)", "ایجاد رویه‌ای واحد و علمی در محاسبه دیات و کاهش آرای متفاوت در پرونده‌های مشابه.", "cores.html#diyat"]
    ],
    partners: [
      ["سازمان غذا و دارو", "ارائه راهکارهای بهبود نظام فارماکوویژیلانس و پیشنهاد ساختار متولی یکپارچه."],
      ["وزارت بهداشت", "همکاری در گردآوری داده‌های ارزیابی طرح دارویاری."],
      ["قوه قضاییه", "هوشمندسازی محاسبه دیات در راستای راهکار ۲۰ سند تحول قضایی."],
      ["سازمان پزشکی قانونی", "پیگیری استقرار سامانه هوشمند محاسبه دیه."],
      ["سازمان‌های بیمه‌گر", "داده‌های پرداخت از جیب و طراحی فرآیند تسویه بیمه‌ای آفلاین."]
    ],
    opinions: [
      ["۱۴۰۵/۰۸/۱۵", "چرا مردم و کادر درمان عوارض دارویی را گزارش نمی‌کنند؟"],
      ["۱۴۰۵/۰۸/۱۰", "دارویاری؛ آنچه داده‌ها درباره حذف ارز ترجیحی می‌گویند"],
      ["۱۴۰۵/۰۸/۰۴", "داروخانه بدون اینترنت؛ درس‌های جنگ ۱۲ روزه"],
      ["۱۴۰۵/۰۷/۲۸", "انحصار در بازار انسولین قلمی"],
      ["۱۴۰۵/۰۷/۲۰", "هوش مصنوعی در خدمت عدالت؛ محاسبه هوشمند دیه"],
      ["۱۴۰۵/۰۷/۱۲", "ضرورت متولی واحد فارماکوویژیلانس"],
      ["۱۴۰۵/۰۷/۰۵", "چرا باید سیاست‌ها را تجربه‌نگاری کرد؟"],
      ["۱۴۰۵/۰۶/۲۹", "از کووید-۱۹ تا امروز؛ خلأهای نظام دارویی"]
    ],
    media: [
      ["پادکست", "پادکست کیمیا: فارماکوویژیلانس به زبان ساده"],
      ["ویدئو", "معرفی سامانه هوشمند محاسبه دیه"],
      ["اینفوگرافیک", "اینفوگرافیک نتایج ارزیابی طرح دارویاری"],
      ["پادکست", "پادکست کیمیا: داروخانه در شرایط بحران"],
      ["ویدئو", "گفت‌وگو با اعضای هسته تجربه‌نگاری"]
    ]
  },
  en: {
    events: [
      ["Pharmacovigilance Conference", "A conference for healthcare professionals on recognising and reporting adverse drug reactions, building on the ADR core's training curriculum.", "cores.html#adr-reporting"],
      ["Expert Panel on Offline Pharmacy Services", "Reviewing and finalising the 9-article guideline for delivering pharmacy services without internet access.", "cores.html#offline"],
      ["Policy Documentation Workshops", "Discussing interview findings in food, medicines, supplements and medical devices.", "cores.html#experience"],
      ["Darooyari Evaluation Results", "Presenting the programme's key indicators for 2020–2024.", "cores.html#darooyari"],
      ["Diya Calculator Demo Launch", "Introducing the demo version of the smart statutory-diya calculation system.", "cores.html#diyat"]
    ],
    pubs: [
      ["Diagnosing Iran's Pharmacovigilance System", "The system's most significant problems, with improvement measures submitted to the Food and Drug Administration.", "cores.html#pv-system"],
      ["Evaluating the Darooyari Programme (2020–2024)", "Measuring how far its goals were met through comparative analysis of currency, shortage, local-production and out-of-pocket indicators.", "cores.html#darooyari"],
      ["A 9-Article Guideline for Offline Pharmacy Services", "Prescribing, dispensing and insurance settlement without internet, based on public/private-key cryptography.", "cores.html#offline"],
      ["Root Causes of the NovoMix Insulin Shortage", "Crisis timeline, consumption versus supply, and the three main causes.", "cores.html#shortage"],
      ["Smart Diya Calculation System (Demo)", "A single, evidence-based procedure for calculating diya and fewer inconsistent rulings in similar cases.", "cores.html#diyat"]
    ],
    partners: [
      ["Food and Drug Administration", "Recommendations to improve pharmacovigilance and a proposed unified structure to lead it."],
      ["Ministry of Health", "Data for the Darooyari programme evaluation."],
      ["Judiciary", "Smart diya calculation under Solution 20 of the Judicial Transformation Document."],
      ["Legal Medicine Organization", "Deploying the smart diya calculation system."],
      ["Health Insurers", "Out-of-pocket data and the design of offline insurance settlement."]
    ],
    opinions: [
      ["Nov 6, 2026", "Why don't patients and clinicians report adverse drug reactions?"],
      ["Nov 1, 2026", "Darooyari: what the data say about removing the subsidised exchange rate"],
      ["Oct 26, 2026", "Pharmacies without internet: lessons from the 12-day war"],
      ["Oct 20, 2026", "Monopoly in the insulin pen market"],
      ["Oct 12, 2026", "AI for justice: smart diya calculation"],
      ["Oct 4, 2026", "Why pharmacovigilance needs a single lead body"],
      ["Sep 27, 2026", "Why document policy experience?"],
      ["Sep 20, 2026", "From COVID-19 to today: gaps in the pharmaceutical system"]
    ],
    media: [
      ["Podcast", "Kimia Podcast: Pharmacovigilance Made Simple"],
      ["Video", "Introducing the smart diya calculation system"],
      ["Infographic", "Darooyari evaluation results"],
      ["Podcast", "Kimia Podcast: Pharmacies in Times of Crisis"],
      ["Video", "Conversation with the policy documentation core"]
    ]
  }
};

// =====================================================================
//  هسته‌های پژوهشی (صفحه cores.html) — بر اساس سند معرفی اندیشکده
//  نام اعضا و عکس‌ها نمونه هستند؛ با اطلاعات واقعی جایگزین کنید.
//  عکس هر عضو: images/team/<id>-<شماره>.svg
//  (برای عکس واقعی، فایل jpg را با همان نام بگذارید و PHOTO_EXT را "jpg" کنید)
// =====================================================================
const PHOTO_EXT = "svg";

const CORES_UI = {
  fa: {
    pageTitle: "هسته‌های پژوهشی",
    pageIntro: "فعالیت‌های اندیشکده کیمیا در قالب هسته‌های پژوهشی سازمان‌دهی می‌شود؛ هر هسته حول یک مسئله مشخص و اولویت‌دار شکل می‌گیرد و چرخه کامل ریشه‌یابی، شناسایی موانع، طراحی راهکار و پیگیری پیاده‌سازی را تا اثرگذاری بر تصمیم‌گیران دنبال می‌کند.",
    team: "اعضای هسته"
  },
  en: {
    pageTitle: "Research Cores",
    pageIntro: "Kimia's work is organised into research cores. Each core forms around a specific, high-priority problem and follows the full cycle of root-cause analysis, identifying barriers, designing solutions and following up on implementation until decision-makers are influenced.",
    team: "Core Members"
  }
};

const ROLES = {
  fa: ["مسئول هسته", "پژوهشگر ارشد", "پژوهشگر", "پژوهشگر همکار"],
  en: ["Head of Core", "Senior Researcher", "Researcher", "Associate Researcher"]
};

const CORES = {
  fa: [
    {
      id: "pv-system", icon: "g1",
      title: "تحلیل نهادی نظام فارماکوویژیلانس در ایران",
      desc: [
        "فارماکوویژیلانس، علم و مجموعه فعالیت‌های مربوط به شناسایی، ارزیابی، درک و پیشگیری از عوارض جانبی داروها و نظارت بر نسبت خطر به منفعت داروها پس از ورود به بازار است. این هسته که به دنبال مشاهده عوارض جانبی واکسن‌های کووید-۱۹ در سال ۱۴۰۱ شکل گرفت، با رویکردی نظام‌مند به آسیب‌شناسی ساختار فارماکوویژیلانس کشور پرداخت.",
        "جست‌وجو در منابع معتبر و مصاحبه با ذی‌نفعان کلیدی، تحلیل تمام ریکال‌های دارویی سال ۱۴۰۱ با مؤلفه‌های مشخص، و ترسیم زنجیره پنج‌مرحله‌ای گزارش‌دهی عارضه (از وقوع رویداد تا آگاهی، گزارش به سازمان، دریافت و بازخورد) برای شناسایی دقیق گلوگاه‌ها، از مراحل این آسیب‌شناسی بوده است. راهکارهای بهبود برآمده از این مطالعه به سازمان غذا و دارو ارائه شده است."
      ],
      listTitle: "کلان‌ترین مشکلات احصاشده",
      list: [
        "شکاف آموزشی مردم و کادر درمان در شناخت و گزارش‌دهی عوارض",
        "پیچیدگی و کاربرپسند نبودن سامانه‌های گزارش‌دهی",
        "نبود پایش عملکرد و مشوق‌های کافی",
        "کمبود نیروی متخصص در سازمان و معاونت‌های غذا و دارو",
        "اختلالات فنی سامانه‌های ثبت و پردازش گزارش‌ها",
        "فقدان رویه‌ها و دستورالعمل‌های مدون"
      ],
      members: ["دکتر مریم احمدی", "دکتر علی رضایی", "دکتر نگار حسینی", "دکتر رضا کریمی"]
    },
    {
      id: "adr-reporting", icon: "g2",
      title: "کمبود احصا و گزارش عوارض دارویی",
      desc: [
        "این هسته به‌طور خاص بر مسئله «کمبود گزارش عوارض دارویی از سوی مردم و کادر درمان» متمرکز است و با تحلیل سیستماتیک عوامل بنیادین، چهار ریشه اصلی این مسئله را شناسایی کرده است: نبود متولی واحد و مدیریت یکپارچه فارماکوویژیلانس در کشور، چالش‌های فنی سامانه‌های گزارش‌دهی (سایت تیتک و سامانه تلفنی ۱۹۰)، کمبود بازآموزی اجباری کادر درمان در حوزه عوارض دارویی و ضعف رسانه‌ای در آگاهی‌بخشی عمومی.",
        "برای هر ریشه، راهکار عملی طراحی و پیگیری شده است."
      ],
      listTitle: "راهکارهای طراحی‌شده",
      list: [
        "ایجاد متولی یکپارچه فارماکوویژیلانس در قالب ساختار سازمانی جدید برای سازمان غذا و دارو",
        "اختصاص ۲۵ امتیاز از ۱۲۵ امتیاز بازآموزی پنج‌ساله رشته‌های درمانی مرتبط به بازآموزی‌های فارماکوویژیلانس",
        "تدوین کوریکولوم آموزشی و برگزاری همایش تخصصی",
        "پیگیری رفع مشکلات فنی سامانه‌های گزارش‌دهی",
        "مداخلات رسانه‌ای: انتخاب رسانه هدف و تولید محتوای آموزشی برای مردم و سیاست‌گذاران"
      ],
      members: ["دکتر سارا موسوی", "دکتر حمید جعفری", "دکتر الهام صادقی", "دکتر مهدی نوری"]
    },
    {
      id: "diyat", icon: "g3",
      title: "هوشمندسازی محاسبه دیات مقدر",
      desc: [
        "این هسته در راستای راهکار ۲۰ سند تحول قضایی و از سال ۱۴۰۴ فعالیت خود را آغاز کرده است. در وضعیت موجود، تطبیق آسیب‌های توصیف‌شده توسط پزشکی قانونی با مواد قانونی و محاسبه و تجمیع دیات به‌صورت دستی انجام می‌شود؛ فرآیندی زمان‌بر و مستعد خطا که به دلیل پیچیدگی‌های فقهی و قانونی، به صدور آرای متفاوت در پرونده‌های مشابه می‌انجامد.",
        "هدف پروژه، ایجاد رویه‌ای واحد و علمی در محاسبه دیات، ارتقای دقت و شفافیت، کاهش بار کاری مقام قضایی و تسهیل فرآیند کارشناسی و فهم عمومی گزارش‌های پزشکی قانونی از طریق هوشمندسازی فرآیندها و سامانه‌های یکپارچه است. نسخه دمو سامانه هوشمند محاسبه دیه طراحی و پیاده‌سازی شده و استقرار آن در سازمان پزشکی قانونی با همکاری مرکز پیگیری سند تحول قضایی و مرکز فناوری اطلاعات پزشکی قانونی در حال پیگیری است."
      ],
      listTitle: "قابلیت‌های سامانه",
      list: [
        "انتخاب مرحله‌به‌مرحله عضو، نوع و شدت آسیب",
        "جست‌وجو در کلیه لایه‌ها",
        "نمایش قدر متیقن دیه برای تسریع پرداخت به بیمار",
        "اعمال خودکار شروط قانونی",
        "تجمیع نهایی دیات آسیب‌های مختلف"
      ],
      members: ["دکتر زهرا کاظمی", "دکتر امیر شریفی", "دکتر فاطمه رحیمی", "دکتر محسن قاسمی"]
    },
    {
      id: "darooyari", icon: "g4",
      title: "دارویاری",
      subtitle: "ارزیابی سیاست اصلاح ارز ترجیحی دارو",
      desc: [
        "طرح دارویاری با اهدافی چون انتقال یارانه دارو به انتهای زنجیره تأمین و رساندن آن از طریق بیمه‌ها به مردم، رفع عوارض ارز ترجیحی، افزایش پوشش بیمه‌ای و واقعی‌سازی قیمت داروها بدون افزایش پرداخت از جیب بیماران اجرا شد.",
        "هسته دارویاری، ارزیابی جامع عملکرد این طرح و سنجش میزان تحقق اهداف اعلام‌شده را از طریق تحلیل مقایسه‌ای شاخص‌های کلیدی در بازه ۱۳۹۹ تا ۱۴۰۳ در دستور کار قرار داده است. داده‌ها از وزارت بهداشت، سازمان غذا و دارو، سازمان‌های بیمه‌گر و سازمان برنامه و بودجه گردآوری، پاکسازی و مقایسه شده و شاخص‌هایی چون میزان کل ارز تأمین‌شده و بازه زمانی دسترسی به ارز (با مقایسه شماره ثبت سفارش اقلام یکسان پیش و پس از اجرای طرح) بررسی شده است."
      ],
      listTitle: "نتایج کلیدی",
      list: [
        "صرفه‌جویی و مدیریت بهینه‌تر منابع ارزی در تأمین دارو",
        "کاهش محسوس میانگین تعداد روزهای دسترسی صنعت دارویی به ارز",
        "بهبود وضعیت کمبودهای دارویی؛ کاهش کمبودهای کوتاه‌مدت و میان‌مدت و حرکت اقلام دارای کمبود مزمن به سمت پایداری بیشتر",
        "افزایش سهم تولید داخل در سبد تأمین دارویی همزمان با رشد صادرات دارویی",
        "عدم تغییر معنادار در پرداخت از جیب بیماران بر اساس مطالعات و داده‌های بیمه‌ای"
      ],
      members: ["دکتر لیلا مرادی", "دکتر کاوه اکبری", "دکتر نرگس طاهری", "دکتر بهروز یوسفی"]
    },
    {
      id: "experience", icon: "g5",
      title: "تجربه‌نگاری سیاست‌های حوزه فرآورده‌های سلامت",
      desc: [
        "این هسته مأموریت مستندسازی و تجربه‌نگاری سیاست‌های حوزه فرآورده‌های سلامت در دولت شهید رئیسی را ذیل بنیاد شهید رئیسی بر عهده دارد و فعالیت خود را از شهریور ۱۴۰۴ آغاز کرده است. در گام نخست، پس از جلسات هم‌اندیشی اعضا، هماهنگی با متولیان امر و مطالعه شیوه‌نامه‌ها و محتوای آموزشی بنیاد، موضوعات کلیدی شناسایی و سؤالات مصاحبه طراحی شد و مصاحبه‌های حضوری با دکتر سید حیدر محمدی در بنیاد شهید رئیسی انجام گرفت.",
        "در فاز دوم، مصاحبه‌ها به حیطه‌های تخصصی گسترش یافته و یافته‌های هر حیطه در هسته مربوطه بررسی تکمیلی می‌شود. خروجی این فرآیند، ثبت نظام‌مند تجربه سیاست‌گذاری حوزه فرآورده‌های سلامت برای بهره‌برداری سیاست‌گذاران آینده خواهد بود."
      ],
      listTitle: "حیطه‌های مصاحبه در فاز دوم",
      list: ["غذا", "دارو", "مکمل", "تجهیزات پزشکی", "فناوری اطلاعات"],
      members: ["دکتر مینا عباسی", "دکتر سعید نجفی", "دکتر پریسا رستمی", "دکتر حسین فرهادی"]
    },
    {
      id: "offline", icon: "g6",
      title: "تداوم خدمات دارویی در شرایط ناپایداری شبکه اینترنت",
      desc: [
        "ناپایداری گسترده شبکه اینترنت در جریان جنگ ۱۲ روزه، وابستگی کامل داروخانه‌ها به خطوط آنلاین را به چالشی جدی بدل کرد؛ امکان بررسی برخط نسخ پزشکی قطع شد، تأیید اصالت داروها از طریق سامانه‌های ملی مختل گردید و خدمت‌رسانی سازمان‌های بیمه‌گر متوقف شد. این هسته یک ماه پس از جنگ با هدف طراحی دستورالعملی برای ارائه خدمات آفلاین دارویی در داروخانه‌ها تشکیل شد و با روش‌های ترسیم وضعیت، مصاحبه با ذی‌نفعان، بررسی تجربیات بین‌المللی و بارش فکری کار خود را پیش برده است.",
        "دستاورد اصلی این هسته، تدوین دستورالعملی ۹ ماده‌ای مبتنی بر ساختار رمزنگاری کلید عمومی و خصوصی است که در بلندمدت و با فراهم‌سازی زیرساخت‌های لازم، می‌تواند مبنای تحول در ارائه خدمات دارویی الکترونیک غیربرخط در سراسر کشور باشد. طراحی پرسشنامه، مصاحبه با ذی‌نفعان، برگزاری پنل خبرگان و نقد و نهایی‌سازی دستورالعمل، گام‌های بعدی این هسته است."
      ],
      listTitle: "سه فرآیند کلیدی بدون نیاز به اینترنت",
      list: [
        "نسخه‌نویسی امن توسط پزشک",
        "تحویل و ثبت دارو در داروخانه",
        "تسویه‌حساب بیمه‌ای پس از بازگشت ارتباط"
      ],
      members: ["دکتر شیما کریمیان", "دکتر پویا منصوری", "دکتر آزاده بهرامی", "دکتر مجید سلطانی"]
    },
    {
      id: "shortage", icon: "g7",
      title: "بررسی علل کمبود دارویی در کشور",
      desc: [
        "این هسته با رویکردی نظام‌مند به آسیب‌شناسی علل کمبود اقلام دارویی در کشور می‌پردازد و تلاش می‌کند با ریشه‌یابی هر مورد، عوامل بنیادین بروز کمبود را شناسایی و راهکارهای عملی برای رفع آن ارائه دهد.",
        "کمبود انسولین نووومیکس به‌عنوان یکی از نمونه‌های مطالعه‌شده بررسی شد؛ داروی حیاتی بیماران دیابتی که با شیوع ۹.۵ درصدی دیابت در جمعیت بزرگسال، کمبود آن به تشدید عوارض، سرگردانی بیماران و تغییر اجباری نوع انسولین منجر می‌شود. تحلیل خط زمانی بحران، بررسی داده‌های مصرف در برابر تأمین و ریشه‌یابی عوامل، سه علت اصلی را آشکار کرد. بر همین اساس، راهکارهایی نظیر شکست انحصار از طریق ورود رقبای داخلی و خارجی و کاهش وابستگی به انسولین با ترویج داروهای خوراکی و نسل جدید دیابت پیشنهاد شد."
      ],
      listTitle: "علل اصلی کمبود انسولین نووومیکس",
      list: [
        "اولویت پایین بازار ایران برای شرکت تولیدکننده اصلی (نوونوردیسک) به دلیل تمرکز بر محصولات پرسودتر جهانی",
        "انحصار چندجانبه در تأمین انسولین‌های قلمی",
        "وابستگی بالای کشور به واردات"
      ],
      members: ["دکتر نازنین عزیزی", "دکتر فرهاد امیری", "دکتر سمیرا جلالی", "دکتر کامران حیدری"]
    }
  ],
  en: [
    {
      id: "pv-system", icon: "g1",
      title: "Institutional Analysis of Iran's Pharmacovigilance System",
      desc: [
        "Pharmacovigilance is the science and set of activities concerned with detecting, assessing, understanding and preventing adverse drug effects and monitoring the benefit–risk balance of medicines after they reach the market. Formed after adverse effects of COVID-19 vaccines were observed in 2022, this core took a systematic approach to diagnosing the structure of Iran's pharmacovigilance system.",
        "The work included reviewing authoritative sources, interviewing key stakeholders, analysing every drug recall in 2022 against defined criteria, and mapping the five-stage reporting chain (from the event to awareness, reporting to the authority, receipt and feedback) to pinpoint bottlenecks. The resulting improvement measures were submitted to the Food and Drug Administration."
      ],
      listTitle: "Most significant problems identified",
      list: [
        "Knowledge gaps among the public and healthcare staff in recognising and reporting adverse effects",
        "Complex, user-unfriendly reporting systems",
        "No performance monitoring and too few incentives",
        "Shortage of specialists at the FDA and university food & drug departments",
        "Technical faults in report registration and processing systems",
        "No formal procedures or written guidelines"
      ],
      members: ["Dr. Maryam Ahmadi", "Dr. Ali Rezaei", "Dr. Negar Hosseini", "Dr. Reza Karimi"]
    },
    {
      id: "adr-reporting", icon: "g2",
      title: "Under-reporting of Adverse Drug Reactions",
      desc: [
        "This core focuses specifically on the low rate of adverse-drug-reaction reporting by the public and healthcare staff. A systematic analysis of underlying factors identified four root causes: no single body leading and integrating pharmacovigilance nationally; technical problems with the reporting channels (the TTAC website and the 190 phone line); too little mandatory continuing education for clinicians on adverse effects; and weak public-awareness media work.",
        "A practical solution was designed and pursued for each root cause."
      ],
      listTitle: "Solutions designed",
      list: [
        "A unified pharmacovigilance lead body within a new organisational structure for the FDA",
        "Allocating 25 of the 125 five-year continuing-education credits in relevant clinical fields to pharmacovigilance",
        "A training curriculum and a specialist conference",
        "Following up fixes to the reporting systems' technical problems",
        "Media interventions: choosing target media and producing educational content for the public and policymakers"
      ],
      members: ["Dr. Sara Mousavi", "Dr. Hamid Jafari", "Dr. Elham Sadeghi", "Dr. Mahdi Nouri"]
    },
    {
      id: "diyat", icon: "g3",
      title: "Smart Calculation of Statutory Diya",
      desc: [
        "Launched in 2025 under Solution 20 of the Judicial Transformation Document, this core addresses how diya (statutory compensation for bodily injury) is calculated. Today, matching injuries described by the Legal Medicine Organization to legal articles, and calculating and aggregating diya, is done by hand — a slow, error-prone process that, given its legal and jurisprudential complexity, leads to different rulings in similar cases.",
        "The project aims to create a single, evidence-based procedure for calculating diya, improve accuracy and transparency, reduce judges' workload, and make forensic reports easier to assess and understand by digitising processes and integrating systems. A demo of the smart diya calculation system has been designed and built, and its deployment at the Legal Medicine Organization is being pursued with the Judicial Transformation Document Follow-up Center and the organisation's IT center."
      ],
      listTitle: "System features",
      list: [
        "Step-by-step selection of body part, injury type and severity",
        "Search across all layers",
        "Showing the certain minimum diya to speed up payment to the patient",
        "Automatic application of legal conditions",
        "Final aggregation of diya across multiple injuries"
      ],
      members: ["Dr. Zahra Kazemi", "Dr. Amir Sharifi", "Dr. Fatemeh Rahimi", "Dr. Mohsen Ghasemi"]
    },
    {
      id: "darooyari", icon: "g4",
      title: "Darooyari",
      subtitle: "Evaluating the reform of the subsidised drug exchange rate",
      desc: [
        "The Darooyari programme aimed to move drug subsidies to the end of the supply chain and deliver them to people through insurers, remove the side effects of the subsidised exchange rate, expand insurance coverage, and bring drug prices to realistic levels without increasing patients' out-of-pocket payments.",
        "This core is carrying out a comprehensive evaluation of the programme and how far its stated goals were met, through comparative analysis of key indicators for 2020–2024. Data from the Ministry of Health, the FDA, health insurers and the Plan and Budget Organization were collected, cleaned and compared, including total foreign currency supplied and time to access currency (comparing order-registration numbers for identical items before and after the programme)."
      ],
      listTitle: "Key findings",
      list: [
        "Savings and more efficient management of foreign-currency resources for drug supply",
        "A marked reduction in the average number of days for the industry to access currency",
        "Fewer drug shortages: short- and medium-term shortages fell, and chronically short items moved toward more stable supply",
        "A larger share of local production in national drug supply, alongside growing exports",
        "No significant change in patients' out-of-pocket payments, according to studies and insurance data"
      ],
      members: ["Dr. Leila Moradi", "Dr. Kaveh Akbari", "Dr. Narges Taheri", "Dr. Behrouz Yousefi"]
    },
    {
      id: "experience", icon: "g5",
      title: "Documenting Health Products Policy",
      desc: [
        "Under the Martyr Raisi Foundation, this core is documenting the health-products policies of the Raisi administration; it began work in September 2025. In the first stage — after member workshops, coordination with the relevant officials and study of the foundation's guidelines and training materials — key topics were identified, interview questions designed, and in-person interviews held with Dr. Seyed Heydar Mohammadi at the foundation.",
        "In the second phase, interviews are expanding into specialist areas, with each area's findings reviewed further in the relevant core. The output will be a systematic record of health-products policymaking experience for future policymakers."
      ],
      listTitle: "Second-phase interview areas",
      list: ["Food", "Medicines", "Supplements", "Medical devices", "Information technology"],
      members: ["Dr. Mina Abbasi", "Dr. Saeed Najafi", "Dr. Parisa Rostami", "Dr. Hossein Farhadi"]
    },
    {
      id: "offline", icon: "g6",
      title: "Pharmacy Service Continuity During Internet Instability",
      desc: [
        "Widespread internet instability during the 12-day war turned pharmacies' total dependence on online connections into a serious problem: online prescription checks stopped, drug-authenticity verification through national systems was disrupted, and insurers' services halted. This core was formed a month after the war to design a guideline for offline pharmacy services, using situation mapping, stakeholder interviews, international experience and brainstorming.",
        "Its main output is a 9-article guideline built on public/private-key cryptography. In the long term, with the necessary infrastructure, it could become the basis for offline electronic pharmacy services nationwide. Next steps are a questionnaire, stakeholder interviews, an expert panel, and review and finalisation of the guideline."
      ],
      listTitle: "Three key processes without internet",
      list: [
        "Secure prescribing by the physician",
        "Dispensing and recording medicines at the pharmacy",
        "Insurance settlement once the connection returns"
      ],
      members: ["Dr. Shima Karimian", "Dr. Pouya Mansouri", "Dr. Azadeh Bahrami", "Dr. Majid Soltani"]
    },
    {
      id: "shortage", icon: "g7",
      title: "Root Causes of Drug Shortages in Iran",
      desc: [
        "This core takes a systematic approach to diagnosing why medicines go short in Iran, tracing each case to its underlying causes and proposing practical remedies.",
        "One case studied was the shortage of NovoMix insulin — a vital drug for people with diabetes. With diabetes affecting 9.5% of adults, its shortage worsens complications, leaves patients searching for supply and forces switches in insulin type. Analysing the crisis timeline and consumption versus supply revealed three main causes. Proposed remedies include breaking the monopoly by bringing in domestic and foreign competitors, and reducing dependence on insulin by promoting oral and newer-generation diabetes medicines."
      ],
      listTitle: "Main causes of the NovoMix insulin shortage",
      list: [
        "Low priority of the Iranian market for the original manufacturer (Novo Nordisk), which focuses on more profitable global products",
        "Oligopoly in the supply of insulin pens",
        "High dependence on imports"
      ],
      members: ["Dr. Nazanin Azizi", "Dr. Farhad Amiri", "Dr. Samira Jalali", "Dr. Kamran Heydari"]
    }
  ]
};
