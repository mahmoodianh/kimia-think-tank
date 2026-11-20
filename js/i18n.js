// =====================================================================
//  ترجمه‌ها
//  کلید = متن فارسی دقیقاً همان‌طور که در index.html / cores.html نوشته شده
//  مقدار = معادل انگلیسی
//  اگر متنی را در HTML عوض کردید، کلیدش را اینجا هم عوض کنید.
// =====================================================================
const DICT = {
  "اندیشکده کیمیا | مطالعات دارویی": "Kimia Think Tank | Pharmaceutical Studies",
  "هسته‌های پژوهشی | اندیشکده کیمیا": "Research Cores | Kimia Think Tank",
  "گزارش | اندیشکده کیمیا": "Report | Kimia Think Tank",
  "درباره اندیشکده | اندیشکده کیمیا": "About | Kimia Think Tank",
  "پرش به محتوا": "Skip to content",
  "تلگرام": "Telegram", "لینکدین": "LinkedIn", "ایکس": "X", "اینستاگرام": "Instagram", "آپارات": "Aparat",
  "لوگو": "Logo", "بستن": "Close", "جستجو": "Search", "منو": "Menu",
  "قبلی": "Previous", "بعدی": "Next",

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
  "محورها": "Research Areas",
  "دستاوردها": "Achievements",
  "انتشارات": "Publications",
  "تازه‌ها": "What's New",
  "مشاهده همه": "View all",
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
  "سازمان غذا و دارو": "Food and Drug Administration",
  "وزارت بهداشت، درمان و آموزش پزشکی": "Ministry of Health and Medical Education",
  "قوه قضاییه": "Judiciary",
  "سازمان پزشکی قانونی": "Legal Medicine Organization",
  "سازمان بیمه سلامت ایران": "Iran Health Insurance Organization",
  "سازمان تأمین اجتماعی": "Social Security Organization",
  "تلفن:": "Phone:",
  "۰۲۱-۰۰۰۰۰۰۰۰": "+98 21 0000 0000",
  "پست الکترونیک:": "Email:",
  "آدرس:": "Address:",
  "تهران، چهارراه ولیعصر، خیابان برادران مظفر، کوچه بخشنده، پلاک ۵": "No. 5, Bakhshandeh Alley, Baradaran-e Mozaffar St., Vali-e Asr Intersection, Tehran, Iran",
  "تهران، خیابان نمونه، پلاک ۱": "No. 1, Sample St., Tehran, Iran",
  "تمامی حقوق محفوظ است.": "All rights reserved."
};

// متن‌های کوچکی که در کد ساخته می‌شوند
const UI = {
  fa: { switchTo: "En Version", more: "اطلاعات بیشتر »", watch: "مشاهده در آپارات »", video: "ویدئو", year: 1405 },
  en: { switchTo: "نسخه فارسی", more: "More info »", watch: "Watch on Aparat »", video: "Video", year: 2026 }
};

// =====================================================================
//  محتوای کارت‌های صفحه اصلی (دو زبانه)
//  هر مورد: [عنوان، توضیح، لینک اختیاری]
//  «رویدادها»، «دیدگاه‌ها» و «چندرسانه‌ای» نمونه‌اند؛ با موارد واقعی جایگزین کنید.
// =====================================================================
const DATA = {
  fa: {
    events: [
      ["معرفی اندیشکده در بخش ویژه «اندیشکده نوپا» — دومین جایزه ملی سیاست‌گذاری",
       "۱۹ مهر ۱۴۰۳ — خانم سمن فلاح سلطانی، مدیر اندیشکده (با نام پیشین «اندیشکده نحب»)، در بخش ویژه اندیشکده نوپا از دومین جایزه ملی سیاست‌گذاری به معرفی این مجموعه پرداخت. داوری این بخش بر عهده دکتر مصباح‌الهدی باقری کنی، دکتر سعید نریمان، دکتر کیومرث اشتریان و دکتر روح‌الله هنرور بود.",
       "https://www.aparat.com/v/dwtf4m1", "dwtf4m1"],
      ["همایش تخصصی فارماکوویژیلانس", "همایشی برای کادر درمان با محوریت شناخت و گزارش‌دهی عوارض دارویی، در ادامه کوریکولوم آموزشی هسته کمبود گزارش عوارض.", "cores.html#adr-reporting"],
      ["پنل خبرگان دستورالعمل خدمات دارویی آفلاین", "نقد و نهایی‌سازی دستورالعمل ۹ ماده‌ای ارائه خدمات دارویی بدون اتصال اینترنت.", "cores.html#offline"],
      ["جلسات هم‌اندیشی تجربه‌نگاری", "گفت‌وگو درباره یافته‌های مصاحبه‌ها در حیطه‌های غذا، دارو، مکمل و تجهیزات پزشکی.", "cores.html#experience"],
      ["نشست ارائه نتایج ارزیابی طرح دارویاری", "مرور شاخص‌های کلیدی طرح در بازه ۱۳۹۹ تا ۱۴۰۳.", "cores.html#darooyari"]
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
      ["Introducing the Think Tank at the “Emerging Think Tanks” Special Section — 2nd National Policymaking Award",
       "10 October 2024 — Ms. Saman Fallah Soltani, director of the think tank (then known as Nahb Think Tank), introduced the group in the “Emerging Think Tanks” (Nopa) special section of the 2nd National Policymaking Award. The section was judged by Dr. Mesbah-ol-Hoda Bagheri Kani, Dr. Saeed Nariman, Dr. Kiumars Ashtarian and Dr. Rouhollah Honarvar.",
       "https://www.aparat.com/v/dwtf4m1", "dwtf4m1"],
      ["Pharmacovigilance Conference", "A conference for healthcare professionals on recognising and reporting adverse drug reactions, building on the ADR core's training curriculum.", "cores.html#adr-reporting"],
      ["Expert Panel on Offline Pharmacy Services", "Reviewing and finalising the 9-article guideline for delivering pharmacy services without internet access.", "cores.html#offline"],
      ["Policy Documentation Workshops", "Discussing interview findings in food, medicines, supplements and medical devices.", "cores.html#experience"],
      ["Darooyari Evaluation Results", "Presenting the programme's key indicators for 2020–2024.", "cores.html#darooyari"]
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
//  انتشارات (صفحه اصلی، بخش «انتشارات»)
//  هر گزارش: کاور (images/publications) + عنوان + متن خلاصه/مقدمه (هر پاراگراف یک رشته) + پانویس‌ها
//  برای افزودن گزارش جدید، یک مورد دیگر به هر دو زبان اضافه کنید.
// =====================================================================
const PUB_UI = {
  fa: { kind: "گزارش پژوهشی", read: "مطالعه خلاصه گزارش", summary: "خلاصه و مقدمه گزارش", close: "بستن", notes: "پانویس",
        page: "صفحه گزارش", axis: "محور مرتبط", back: "بازگشت به انتشارات", missing: "گزارش مورد نظر پیدا نشد." },
  en: { kind: "Research Report", read: "Read the summary", summary: "Summary & Introduction", close: "Close", notes: "Notes",
        page: "Report page", axis: "Research area", back: "Back to Publications", missing: "Report not found." }
};

const PUBLICATIONS = {
  fa: [
    {
      id: "offline-pharmacy", cover: "cover-5.jpg", core: "offline",
      title: "دستورالعمل تداوم ارائه خدمات دارویی در داروخانه‌های شهری در صورت ناپایداری شبکه اینترنتی در شرایط بحران",
      paras: [
        "با گذار پرشتاب نظام سلامت ایران به سمت ارائۀ خدمات الکترونیک و رسیدن به نرخ وابستگی ۹۸ درصدی در صدور نسخۀ الکترونیک، معماری خدمات دارویی با شکنندگی عمیقی در برابر اختلالات زیرساختی روبه‌رو شده است. شواهد میدانی نشان می‌دهد که در زمان بروز بحران‌ها و قطعی اینترنت، این وابستگی مطلق به شبکه‌های برخط می‌تواند استمرار درمان را با مخاطرۀ جدی مواجه کرده و به سرگردانی بیماران و کادر درمان بینجامد. با وجود حساسیت حیاتی این موضوع و پیامدهای اجتماعی ناشی از آن، خلأ یک دستورالعمل جامع و عملیاتی برای تداوم خدمات دارویی در شرایط اضطرار کاملاً محسوس و آسیب‌زا است.",
        "پژوهش حاضر با درک این ضرورت راهبردی و با هدف تدوین یک الگوی از پیش تعیین‌شده برای مدیریت بحران در سطح داروخانه‌های شهری شکل گرفته است. در این مسیر پس از شناسایی سناریوهای بحرانی و ترسیم وضعیت موجود، تلاش شد تا با بهره‌گیری از مطالعات تطبیقی بین‌المللی راهکارهای جایگزین و موفق جهانی واکاوی شود. در ادامه برای بومی‌سازی این الگوها و شناخت دقیق چالش‌های میدانی، مصاحبه‌های نیمه‌ساختاریافته‌ای با ذی‌نفعان کلیدی و نهادهای سیاست‌گذار انجام گرفت. تحلیل مضمون این داده‌های کیفی به‌خوبی نشان داد که نقاط ضعف فرایندهای جاری کجاست و چگونه گسیختگی نهادی می‌تواند بار تاب‌آوری سیستم را به‌طور ناعادلانه بر دوش داروخانه‌ها بیندازد.",
        "خروجی نهایی و دستاورد این واکاوی همه‌جانبه، تدوین یک <b>دستورالعمل پدافندی نه‌ماده‌ای</b> است که به‌عنوان راهکاری فوری و عملیاتی، تمامی حلقه‌های زنجیرۀ خدمات دارویی را از لحظۀ ثبت دستی نسخه تا تحویل دارو در شرایط قطعی شبکۀ اینترنت مدیریت می‌کند. افزون بر این راهکار کوتاه‌مدت، سند حاضر در نگاهی آینده‌نگرانه دستورالعمل مکمل دیگری را مبتنی بر فناوری‌های تنظیم‌گر و زیرساخت رمزنگاری نامتقارن پیشنهاد می‌دهد. عملیاتی شدن این معماری نوین در بلندمدت می‌تواند امکان احراز هویت، ارائۀ خدمات و تسویۀ قطعی بیمه‌ای را بدون نیاز به هیچ‌گونه ارتباط برخط فراهم ساخته و تاب‌آوری نظام دارویی کشور را در تاریکی‌های دیجیتال به‌طور کامل تضمین کند."
      ]
    },
    {
      id: "diyat-database", cover: "cover-1.jpg", core: "diyat",
      title: "پایگاه داده هوشمندسازی محاسبه دیات مقدر",
      paras: [
        "نظام حقوقی در ایران بر مبنای فقه اسلامی بنا شده و توسعه یافته است. این نظام، شامل بخش‌های متعددی بوده که یکی از این بخش‌ها، قانون مجازات اسلامی است. قانون مجازات اسلامی مشتمل بر جرایم و مجازات‌های حدود، قصاص، دیات و تعزیرات، اقدامات تأمینی و تربیتی، شرایط و موانع مسؤولیت کیفری و قواعد حاکم بر آن‌ها است. کتاب چهارم قانون مجازات مرتبط با موضوع دیات است و شامل مجموعه‌ای کامل از قواعدی است که برای آسیب‌های مختلف، دیات متناسبی را تعیین کرده است. دیات تعیین شده در قانون، بر دو نوع هستند. دیات مقدر و غیرمقدر (ارش):",
        "دیه مقدر، مال معینی است که در شرع مقدس به سبب جنایت غیر عمدی یا عمدی در مواردی که به هر جهتی قصاص ندارد، مقرر شده است.<sup>۱</sup>",
        "ارش، دیه غیر مقدر است که میزان آن در شرع تعیین نشده است و توسط کارشناسان ذی‌صلاح پزشکی و قضایی متناسب با آسیب وارده به مجنی‌علیه تعیین می‌شود.<sup>۲</sup>",
        "تعیین و تشخیص آسیب و محاسبه دیه مرتبط با آن پیچیدگی‌هایی دارد که به سبب آن، علی‌رغم تعیین قواعد دیات در قانون، گاهی در عمل شاهد تفاوت در ارزیابی و تطبیق آسیب با قانون در میان قضات و کارشناسان پزشکی قانونی هستیم. برخی از موارد دیه به دلیل شرایط خاص یا پیچیدگی‌های فقهی و پزشکی، در مقام اجرا با برداشت‌های مختلف همراه بوده و همین امر باعث صدور آرای متفاوت در موارد مشابه شده است. روند تعیین دیه نیازمند تطبیق آسیب با مواد متعدد قانونی است که این فرآیند زمان‌بر، مستعد خطا و وابسته به تفسیر شخصی است.",
        "توسعه یک سامانه یکپارچه که تحلیل، تطبیق و محاسبه دیه را بر اساس قوانین انجام دهد، می‌تواند تحولی بزرگ در کاهش اختلافات و افزایش دقت و سرعت در روند دادرسی ایجاد کند. مسئله‌ای که موضوع <b>راهکار ۲۰ سند تحول و تعالی قوه قضائیه</b> نیز می‌باشد. بر اساس این سند، هوشمندسازی محاسبه دیات برای هر دو نوع دیات مقدر و غیرمقدر (ارش) ضروری و لازم‌الاجرا است.",
        "از این رو کارشناسان این مرکز به منظور کمک به سازمان پزشکی قانونی و فراهم کردن بستر هوشمندسازی محاسبه دیات، پروژه تولید پایگاه داده هوشمندسازی محاسبه دیات مقدر را آغاز کردند."
      ],
      notes: ["ماده ۴۴۸ قانون مجازات اسلامی (مصوب ۱۳۹۲)", "ماده ۴۴۹ قانون مجازات اسلامی (مصوب ۱۳۹۲)"]
    },
    {
      id: "covid-supply", cover: "cover-2.jpg",
      title: "بررسی تامین اقلام دارویی حوزه کووید-۱۹ با رویکرد آینده‌پژوهی",
      paras: [
        "موضوع تامین اقلام دارویی از مهم‌ترین موضوعات در مدیریت یک پاندمی و دارای ابعاد متعددی اعم از اثربخشی، مصرف و تجویز منطقی و تامین می‌باشد. این گزارش در چند بخش به بررسی اثربخشی، مصرف و تامین اقلام کووید-۱۹ می‌پردازد.",
        "در بخش ابتدایی، پرمصرف‌ترین داروها در پاندمی کرونا به کمک یک پرسشنامه احصاء شد. سپس با دستورالعمل‌های درمانی معتبر مقایسه گردید. در نهایت نیز اثربخشی برخی از آن‌ها در مقالات مرور شد. در این پرسشنامه از پزشکان، داروسازان و پرستاران خواسته شده تا پرمصرف‌ترین داروها را به ترتیب وارد کرده و به تواتر آن‌ها نمره دهند. در گام بعدی، این داروها با در نظر گرفتن رویکرد توأمان تامین و جایگاه بالینی دسته‌بندی شدند.",
        "در بخش بعدی، مصرف داروی رمدسیویر به عنوان یکی از پرمصرف‌ترین داروها در تابستان ۱۴۰۰ مورد بررسی قرار گرفت. در این بخش میزان داروی مورد نیاز و تامین شده مقایسه گردید و نقش تجویز منطقی در تامین دارو مورد بحث قرار گرفت. همچنین در نهایت مبلغ هزینه شده برای مصرف رمدسیویر خارج از دستورالعمل رسمی کشوری محاسبه شده است.",
        "با توجه به رویکرد آینده‌پژوهانه گزارش، دو مورد از داروهای نوظهور که می‌توانند کاندید ورود به فهرست رسمی داروهای ایران باشند، مورد بررسی قرار گرفتند. مولنوپیراویر و نیرماترلویر/ریتوناویر (پکسلووید) از مطرح‌ترین داروهای جدید در حوزه درمان کووید-۱۹ هستند که تاییدیه مصرف اضطراری از FDA آمریکا دریافت کرده‌اند. در این گزارش، هر دو سناریوی واردات و تولید داخلی برای این دو دارو بررسی و قیمت احتمالی، میزان مورد نیاز و بار مالی ناشی از آن محاسبه شد.",
        "در نهایت پیشنهاداتی برای تامین آینده‌نگر دارو ارائه شد که می‌تواند اتلاف هزینه را کاهش داده و آسیب‌های ناشی از کمبود دارو را به حداقل برساند. یکی از این پیشنهادها، استفاده از مطالعات اپیدمیولوژی در بحث تامین دارو می‌باشد که در این گزارش مورد استفاده و سنجش قرار گرفته است."
      ]
    },
    {
      id: "paxlovid", cover: "cover-3.jpg",
      title: "بررسی کاربرد، اثربخشی و هزینه تامین داروهای کاندید ورود به فهرست دارویی کشور: پکسلووید",
      paras: [
        "کووید-۱۹ یک بیماری تنفسی مسری است که توسط ویروس SARS-CoV-2 ایجاد می‌شود. این بیماری از آذر سال ۱۳۹۸ شیوع پیدا کرد و تا ۱۰ خرداد ۱۴۰۱ بیش از ۵۳۲ میلیون مورد مبتلا در جهان گزارش شده است که بالغ بر ۶ میلیون نفر از آنان جان خود را از دست داده‌اند. باتوجه به گستردگی و تداوم همه‌گیری کرونا، تحقیقات برای یافتن داروهای موثر در این حوزه همچنان ادامه دارد. در حال حاضر شرکت‌های داروسازی بزرگ فراورده‌های جدیدی در این حوزه به جهان معرفی کرده‌اند. این داروها طیف مختلفی از هزینه و اثربخشی دارند و همگی می‌توانند کاندیدهای بالقوه ورود به فهرست رسمی داروهای ایران باشند. آگاهی سیاست‌گذاران به داروهای جدید پیش از ورود به فهرست، کمک شایانی به برنامه‌ریزی تامین آن‌ها می‌کند. از این رو رصد آن‌ها مهم است. در این گزارش، داروی <b>نیرماترلویر/ریتوناویر (پکسلووید)</b> به عنوان یکی از مهم‌ترین داروهای نوظهور که کاندید ورود به فهرست رسمی داروهای ایران است مورد بررسی قرار گرفته است.",
        "<b>پکسلووید</b> ترکیبی از نیرماترلویر و ریتوناویر است. نیرماترلویر ماده موثره اصلی دارو و یک مهارکننده پروتئاز ویروس کرونا است. ریتوناویر مهارکننده پروتئاز HIV بوده که به علت مهار سیتوکروم P450 3A4 همراه نیرماترلویر استفاده می‌شود تا مدت اثر دارو را افزایش دهد. پکسلووید به صورت سه قرص، هر ۱۲ ساعت و به مدت پنج روز استفاده می‌شود (مجموعاً ۳۰ عدد). در هر وعده ۲ عدد قرص نیرماترلویر (معادل ۳۰۰ میلی‌گرم) و یک عدد قرص ریتوناویر (معادل ۱۰۰ میلی‌گرم) مصرف می‌شود. این دارو در تاریخ ۱ دی‌ماه ۱۴۰۰، مجوز مصرف اضطراری از سازمان غذا و داروی آمریکا را دریافت کرده است. فایزر با امضای قراردادی با MPP، اجازه تولید نسخه ارزان‌قیمت دارو در ۳۶ شرکت ژنریک‌ساز را صادر کرده است تا در اختیار ۹۵ کشور با درآمد کم و متوسط قرار گیرد. کاربرد اصلی پکسلووید در حال حاضر در اوایل دوره بیماری و به منظور جلوگیری از پیشرفت و بستری شدن فرد می‌باشد. بیماران با تست مثبت کرونا (با حداقل سن ۱۲ سال و وزن ۴۰ کیلوگرم) که احتمال پیشرفت بیماری در آن‌ها بالاست مجاز به مصرف پکسلووید هستند. این دارو باید حداکثر تا ۵ روز پس از شروع علایم مصرف شود.",
        "اخیراً گزارش‌هایی دال بر کارایی پکسلووید در درمان کووید طولانی داده شده است که توجهات زیادی را به سمت خود جلب نموده است. با این وجود دانشمندان اعلام می‌کنند که این موارد مدرک مناسبی جهت اثبات اثربخشی پکسلووید بر تسکین کرونای طولانی نیست و تحقیقات بیشتری باید صورت پذیرد."
      ]
    },
    {
      id: "molnupiravir", cover: "cover-4.jpg",
      title: "بررسی کاربرد، اثربخشی و هزینه تامین داروهای کاندید ورود به فهرست دارویی کشور: مولنوپیراویر",
      paras: [
        "کووید-۱۹ یک بیماری تنفسی مسری است که توسط ویروس SARS-CoV-2 ایجاد می‌شود. این بیماری از آذر سال ۱۳۹۸ شیوع پیدا کرد و تا ۱۰ خرداد ۱۴۰۱ بیش از ۵۳۲ میلیون مورد مبتلا در جهان گزارش شده است که بالغ بر ۶ میلیون نفر از آنان جان خود را از دست داده‌اند. باتوجه به گستردگی و تداوم همه‌گیری کرونا، تحقیقات برای یافتن داروهای موثر در این حوزه همچنان ادامه دارد. در حال حاضر شرکت‌های داروسازی بزرگ فراورده‌های جدیدی در این حوزه به جهان معرفی کرده‌اند. این داروها طیف مختلفی از هزینه و اثربخشی دارند و همگی می‌توانند کاندیدهای بالقوه ورود به فهرست رسمی داروهای ایران باشند. آگاهی سیاست‌گذاران به داروهای جدید پیش از ورود به فهرست، کمک شایانی به برنامه‌ریزی تامین آن‌ها می‌کند. از این رو رصد آن‌ها مهم است. در این گزارش، داروی <b>مولنوپیراویر</b> به عنوان یکی از مهم‌ترین داروهای نوظهور که کاندید ورود به فهرست رسمی داروهای ایران است مورد بررسی قرار گرفته است.",
        "<b>مولنوپیراویر (Molnupiravir)</b> یک آنالوگ نوکلئوزیدی بوده و به صورت کپسول‌های خوراکی ۲۰۰ میلی‌گرمی در دسترس قرار گرفته است. این دارو با نام تجاری Lagevrio توسط شرکت مرک تولید و در تاریخ ۲ دی‌ماه ۱۴۰۰، مجوز مصرف اضطراری از سازمان غذا و داروی آمریکا را دریافت کرده است. مرک با امضای قراردادی با یک موسسه غیرانتفاعی وابسته به سازمان ملل متحد، اجازه تولید نسخه ارزان‌قیمت دارو در ۲۷ شرکت ژنریک‌ساز را صادر کرده است تا در اختیار ۱۰۵ کشور با درآمد کم و متوسط قرار گیرد. مولنوپیراویر در افراد پرخطر و در اوایل دوره بیماری تجویز می‌شود و دوز مصرفی آن ۴ کپسول، هر ۱۲ ساعت، به مدت پنج روز (مجموعاً ۴۰ عدد) است. مطابق نظر NIH مولنوپیراویر در صورتی استفاده می‌شود که سایر گزینه‌های درمان (نیرماترلویر/ریتوناویر، رمدسیویر، Bebtelovimab) در دسترس نباشند."
      ]
    }
  ],
  en: [
    {
      id: "offline-pharmacy", cover: "cover-5.jpg", core: "offline",
      title: "Guideline for Continuity of Pharmacy Services in Urban Pharmacies During Internet Instability in Crises",
      paras: [
        "As Iran's health system has moved rapidly towards electronic services, reaching 98% reliance on e-prescriptions, the architecture of pharmacy services has become deeply fragile in the face of infrastructure disruptions. Field evidence shows that during crises and internet outages, this total dependence on online networks can seriously threaten continuity of treatment and leave patients and healthcare staff stranded. Despite the vital sensitivity of this issue and its social consequences, the lack of a comprehensive, operational guideline for continuing pharmacy services in emergencies is clearly felt and harmful.",
        "This study was formed in recognition of that strategic need, with the aim of developing a predefined model for crisis management in urban pharmacies. After identifying crisis scenarios and mapping the current situation, successful alternative approaches from around the world were examined through international comparative studies. To localise these models and understand the challenges on the ground, semi-structured interviews were then held with key stakeholders and policymaking bodies. Thematic analysis of this qualitative data showed clearly where current processes are weak, and how institutional fragmentation can unfairly place the burden of system resilience on pharmacies.",
        "The final output of this comprehensive analysis is a <b>nine-article defensive guideline</b> that, as an immediate and practical solution, manages every link in the pharmacy service chain — from manually recording a prescription to dispensing the medicine — when the internet is down. Beyond this short-term solution, the document takes a forward-looking view and proposes a complementary guideline based on regulatory technologies and asymmetric-cryptography infrastructure. In the long term, putting this new architecture into practice could enable authentication, service delivery and final insurance settlement without any online connection, fully securing the resilience of the national pharmaceutical system during digital blackouts."
      ]
    },
    {
      id: "diyat-database", cover: "cover-1.jpg", core: "diyat",
      title: "A Database for Smart Calculation of Statutory Diya",
      paras: [
        "Iran's legal system is built on and developed from Islamic jurisprudence. One of its many parts is the Islamic Penal Code, which covers hudud, qisas, diya and ta'zir offences and punishments, security and corrective measures, the conditions for and barriers to criminal liability, and the rules governing them. Book Four of the Penal Code concerns diya (statutory compensation for bodily harm) and sets out a complete body of rules assigning appropriate compensation to different injuries. Diya under the law is of two kinds: statutory (muqaddar) and non-statutory (arsh):",
        "Statutory diya is a fixed amount set by Islamic law for intentional or unintentional harm in cases where, for whatever reason, retribution (qisas) does not apply.<sup>1</sup>",
        "Arsh is non-statutory diya, whose amount is not fixed by Islamic law and is determined by qualified medical and judicial experts in proportion to the harm suffered by the victim.<sup>2</sup>",
        "Identifying and assessing injuries and calculating the corresponding diya is complex. As a result, even though the rules are set out in law, judges and forensic medical experts sometimes assess injuries and match them to the law differently in practice. Some cases, because of special circumstances or jurisprudential and medical complexities, are interpreted differently when applied, leading to different rulings in similar cases. Determining diya requires matching an injury against many legal provisions — a process that is slow, error-prone and dependent on personal interpretation.",
        "An integrated system that analyses, matches and calculates diya according to the law could greatly reduce disputes and improve the accuracy and speed of proceedings. This is also the subject of <b>Solution 20 of the Judiciary's Transformation and Excellence Document</b>, under which smart calculation of both statutory and non-statutory (arsh) diya is necessary and mandatory.",
        "Accordingly, the centre's experts launched a project to build a database for the smart calculation of statutory diya, to support the Legal Medicine Organization and lay the groundwork for automating diya calculation."
      ],
      notes: ["Article 448, Islamic Penal Code (approved 2013)", "Article 449, Islamic Penal Code (approved 2013)"]
    },
    {
      id: "covid-supply", cover: "cover-2.jpg",
      title: "Supplying COVID-19 Medicines: A Foresight Study",
      paras: [
        "Supplying medicines is one of the most important issues in managing a pandemic, with many dimensions including effectiveness, consumption, rational prescribing and supply. This report examines the effectiveness, consumption and supply of COVID-19 medicines in several parts.",
        "First, the most widely used medicines during the pandemic were identified through a questionnaire, then compared with authoritative treatment guidelines, and finally the effectiveness of some of them was reviewed in the literature. The questionnaire asked physicians, pharmacists and nurses to list the most used medicines in order and score how frequently they were used. Next, these medicines were categorised by both supply considerations and clinical role.",
        "The next part examined consumption of remdesivir, one of the most used medicines in summer 2021. It compared the amount needed with the amount supplied, discussed the role of rational prescribing in drug supply, and calculated the money spent on remdesivir used outside the official national guideline.",
        "Given the report's foresight approach, two emerging medicines that could become candidates for Iran's official drug list were examined. Molnupiravir and nirmatrelvir/ritonavir (Paxlovid) are among the most prominent new COVID-19 treatments to have received emergency use authorisation from the US FDA. For both medicines the report examined import and local-production scenarios and estimated the likely price, the quantity needed and the resulting financial burden.",
        "Finally, it proposed measures for forward-looking drug supply that could reduce wasted spending and minimise the harm caused by shortages. One of these — using epidemiological studies in drug supply planning — was applied and tested in this report."
      ]
    },
    {
      id: "paxlovid", cover: "cover-3.jpg",
      title: "Use, Effectiveness and Supply Cost of Candidate Drugs for Iran's National Drug List: Paxlovid",
      paras: [
        "COVID-19 is a contagious respiratory disease caused by the SARS-CoV-2 virus. It began spreading in December 2019, and by 31 May 2022 more than 532 million cases had been reported worldwide, with over 6 million deaths. Given the scale and persistence of the pandemic, research into effective medicines continues. Major pharmaceutical companies have introduced new products, with a wide range of costs and effectiveness, all of which are potential candidates for Iran's official drug list. Policymakers' awareness of new medicines before they enter the list greatly helps supply planning, which makes monitoring them important. This report examines <b>nirmatrelvir/ritonavir (Paxlovid)</b>, one of the most important emerging medicines that is a candidate for Iran's official drug list.",
        "<b>Paxlovid</b> combines nirmatrelvir and ritonavir. Nirmatrelvir is the main active ingredient and inhibits the coronavirus protease. Ritonavir, an HIV protease inhibitor, is given with nirmatrelvir because it inhibits cytochrome P450 3A4, prolonging the drug's effect. Paxlovid is taken as three tablets every 12 hours for five days (30 tablets in total): two nirmatrelvir tablets (300 mg) and one ritonavir tablet (100 mg) per dose. It received emergency use authorisation from the US FDA on 22 December 2021. Under an agreement with the MPP, Pfizer has licensed 36 generic manufacturers to produce low-cost versions for 95 low- and middle-income countries. Paxlovid is currently used early in the illness to prevent progression and hospitalisation. Patients with a positive COVID test (aged at least 12 and weighing at least 40 kg) who are at high risk of progression are eligible. It must be started within 5 days of symptom onset.",
        "Recent reports suggesting that Paxlovid is effective against long COVID have attracted wide attention. However, scientists say these reports are not adequate evidence that Paxlovid relieves long COVID, and more research is needed."
      ]
    },
    {
      id: "molnupiravir", cover: "cover-4.jpg",
      title: "Use, Effectiveness and Supply Cost of Candidate Drugs for Iran's National Drug List: Molnupiravir",
      paras: [
        "COVID-19 is a contagious respiratory disease caused by the SARS-CoV-2 virus. It began spreading in December 2019, and by 31 May 2022 more than 532 million cases had been reported worldwide, with over 6 million deaths. Given the scale and persistence of the pandemic, research into effective medicines continues. Major pharmaceutical companies have introduced new products, with a wide range of costs and effectiveness, all of which are potential candidates for Iran's official drug list. Policymakers' awareness of new medicines before they enter the list greatly helps supply planning, which makes monitoring them important. This report examines <b>molnupiravir</b>, one of the most important emerging medicines that is a candidate for Iran's official drug list.",
        "<b>Molnupiravir</b> is a nucleoside analogue available as 200 mg oral capsules. It is made by Merck under the brand name Lagevrio and received emergency use authorisation from the US FDA on 23 December 2021. Through an agreement with a UN-affiliated non-profit, Merck has licensed 27 generic manufacturers to produce low-cost versions for 105 low- and middle-income countries. Molnupiravir is prescribed for high-risk patients early in the illness, at a dose of 4 capsules every 12 hours for five days (40 capsules in total). According to the NIH, it is used when other treatment options (nirmatrelvir/ritonavir, remdesivir, bebtelovimab) are not available."
      ]
    }
  ]
};

// لوگوی نهادهای همکار؛ به همان ترتیب کارت‌های «همکاری‌های نهادی» (فایل‌ها در images/partners)
// برای «سازمان‌های بیمه‌گر» دو لوگو کنار هم نمایش داده می‌شود.
const PARTNER_LOGOS = [
  ["fda.png"],               // سازمان غذا و دارو
  ["moh.png"],               // وزارت بهداشت
  ["judiciary.png"],         // قوه قضاییه
  ["lmo.png"],               // سازمان پزشکی قانونی
  ["ihio.png", "tamin.png"]  // بیمه سلامت + تأمین اجتماعی
];

// =====================================================================
//  هسته‌های پژوهشی (صفحه cores.html) — بر اساس سند معرفی اندیشکده
// =====================================================================
const CORES_UI = {
  fa: {
    pageTitle: "هسته‌های پژوهشی",
    pageIntro: "فعالیت‌های اندیشکده کیمیا در قالب هسته‌های پژوهشی سازمان‌دهی می‌شود؛ هر هسته حول یک مسئله مشخص و اولویت‌دار شکل می‌گیرد و چرخه کامل ریشه‌یابی، شناسایی موانع، طراحی راهکار و پیگیری پیاده‌سازی را تا اثرگذاری بر تصمیم‌گیران دنبال می‌کند.",
    all: "همه هسته‌ها",
    pubs: "گزارش‌های این محور",
    site: "اندیشکده کیمیا"
  },
  en: {
    pageTitle: "Research Cores",
    pageIntro: "Kimia's work is organised into research cores. Each core forms around a specific, high-priority problem and follows the full cycle of root-cause analysis, identifying barriers, designing solutions and following up on implementation until decision-makers are influenced.",
    all: "All Cores",
    pubs: "Reports in this area",
    site: "Kimia Think Tank"
  }
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
      ]
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
      ]
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
      ]
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
      ]
    },
    {
      id: "experience", icon: "g5",
      title: "تجربه‌نگاری سیاست‌های حوزه فرآورده‌های سلامت",
      desc: [
        "این هسته مأموریت مستندسازی و تجربه‌نگاری سیاست‌های حوزه فرآورده‌های سلامت در دولت شهید رئیسی را ذیل بنیاد شهید رئیسی بر عهده دارد و فعالیت خود را از شهریور ۱۴۰۴ آغاز کرده است. در گام نخست، پس از جلسات هم‌اندیشی اعضا، هماهنگی با متولیان امر و مطالعه شیوه‌نامه‌ها و محتوای آموزشی بنیاد، موضوعات کلیدی شناسایی و سؤالات مصاحبه طراحی شد و مصاحبه‌های حضوری با دکتر سید حیدر محمدی در بنیاد شهید رئیسی انجام گرفت.",
        "در فاز دوم، مصاحبه‌ها به حیطه‌های تخصصی گسترش یافته و یافته‌های هر حیطه در هسته مربوطه بررسی تکمیلی می‌شود. خروجی این فرآیند، ثبت نظام‌مند تجربه سیاست‌گذاری حوزه فرآورده‌های سلامت برای بهره‌برداری سیاست‌گذاران آینده خواهد بود."
      ],
      listTitle: "حیطه‌های مصاحبه در فاز دوم",
      list: ["غذا", "دارو", "مکمل", "تجهیزات پزشکی", "فناوری اطلاعات"]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
    },
    {
      id: "experience", icon: "g5",
      title: "Documenting Health Products Policy",
      desc: [
        "Under the Martyr Raisi Foundation, this core is documenting the health-products policies of the Raisi administration; it began work in September 2025. In the first stage — after member workshops, coordination with the relevant officials and study of the foundation's guidelines and training materials — key topics were identified, interview questions designed, and in-person interviews held with Dr. Seyed Heydar Mohammadi at the foundation.",
        "In the second phase, interviews are expanding into specialist areas, with each area's findings reviewed further in the relevant core. The output will be a systematic record of health-products policymaking experience for future policymakers."
      ],
      listTitle: "Second-phase interview areas",
      list: ["Food", "Medicines", "Supplements", "Medical devices", "Information technology"]
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
      ]
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
      ]
    }
  ]
};
