// ============================================================
//  DATA — Add / remove / edit skills and projects here
// ============================================================

export const skills = [
  {
    icon: "fa-solid fa-robot",
    link: "", // ← Replace with your link later
    en: {
      title: "Automation Specialist",
      desc: "Building intelligent automation workflows using n8n and Python to eliminate repetitive tasks and maximize efficiency.",
    },
    ar: {
      title: "متخصص أتمتة",
      desc: "بناء سير عمل أتمتة ذكية باستخدام n8n وPython للقضاء على المهام المتكررة وزيادة الكفاءة.",
    },
    tags: ["n8n", "Python", "Playwright", "APIs"],
    highlight: true,
  },
  {
    icon: "fa-brands fa-youtube",
    link: "https://youtube.com/@dravexa0?si=rTyXyEBdGSj0OT67", // ← Replace with your link later
    en: {
      title: "Creative Content & YouTube Systems",
      desc: "Script writing for educational & financial YouTube channels, managing full content pipelines from research to publishing.",
    },
    ar: {
      title: "المحتوى الإبداعي وأنظمة يوتيوب",
      desc: "كتابة سكريبتات لقنوات يوتيوب تعليمية ومالية، وإدارة خطوط إنتاج المحتوى من البحث حتى النشر.",
    },
    tags: ["Scripting", "YouTube", "SEO", "Thumbnails"],
  },
  {
    icon: "fa-solid fa-microphone-lines",
    link: "https://drive.google.com/drive/folders/15LQKzL8EKfUBbQtQHfOJYDHR4TMAxF4L?usp=sharing", // ← Replace with your link later
    en: {
      title: "AI Voiceover Artist",
      desc: "Professional AI-powered voiceover production supporting multiple dialects (Egyptian, Gulf, American English).",
    },
    ar: {
      title: "فنان تعليق صوتي بالذكاء الاصطناعي",
      desc: "إنتاج تعليق صوتي احترافي بالذكاء الاصطناعي يدعم لهجات متعددة (مصري، خليجي، إنجليزي أمريكي).",
    },
    tags: ["ElevenLabs", "Murf", "Multi-dialect"],
  },
  {
    icon: "fa-solid fa-chart-line",
    link: "", // ← Replace with your link later
    en: {
      title: "Project & Financial Management",
      desc: "Financial tracking, budgeting, and operations management. Hands-on experience managing sports facilities and freelance projects.",
    },
    ar: {
      title: "إدارة المشاريع والشؤون المالية",
      desc: "التتبع المالي، إعداد الميزانيات، وإدارة العمليات. خبرة عملية في إدارة الملاعب الرياضية والمشاريع المستقلة.",
    },
    tags: ["Excel", "Budgeting", "Operations"],
  },
];

export const projects = [
  {
    icon: "fa-brands fa-telegram",
    link: "", // ← Replace with your GitHub/demo link later
    en: {
      title: "Freelance Platform Monitor + Telegram Alerts",
      desc: "An n8n automation that scrapes leading remote-work platforms (Upwork, Freelancer, etc.) for new relevant job posts and instantly pushes formatted Telegram notifications — filtering by keywords, budget, and client ratings.",
    },
    ar: {
      title: "مراقب منصات العمل الحر + تنبيهات تليجرام",
      desc: "أتمتة بـ n8n تراقب منصات العمل الحر الكبرى وترسل تنبيهات تليجرام فورية للوظائف المناسبة مع فلترة بالكلمات المفتاحية والميزانية وتقييم العميل.",
    },
    tags: ["n8n", "Python", "Telegram Bot API", "Web Scraping"],
  },
  {
    icon: "fa-solid fa-mobile-screen",
    link: "", // ← Replace with your GitHub/demo link later
    en: {
      title: "Flutter News App",
      desc: "Full-featured news application with auth flows, persistent favorites, category filtering, and clean widget architecture. Built as a university final project.",
    },
    ar: {
      title: "تطبيق أخبار بـ Flutter",
      desc: "تطبيق أخبار متكامل بتدفقات مصادقة، مفضلات دائمة، فلترة الفئات، وهيكل ويدجت نظيف. تم بناؤه كمشروع نهائي جامعي.",
    },
    tags: ["Flutter", "Dart", "REST API", "SharedPrefs"],
  },
  {
    icon: "fa-solid fa-gamepad",
    link: "", // ← Replace with your GitHub/demo link later
    en: {
      title: "Unity FSM NPC AI System",
      desc: "A Finite State Machine-based NPC behavior system in Unity covering patrol, chase, attack, and idle states with smooth transitions.",
    },
    ar: {
      title: "نظام ذكاء NPC بـ FSM في Unity",
      desc: "نظام سلوك NPC قائم على FSM في Unity يغطي حالات الدوريات، المطاردة، الهجوم، والخمول مع انتقالات سلسة.",
    },
    tags: ["Unity", "C#", "FSM", "AI"],
  },
  {
    icon: "fa-brands fa-python",
    link: "", // ← Replace with your GitHub/demo link later
    en: {
      title: "Cloud Computing – Docker + FastAPI Service",
      desc: "Containerized REST API built with FastAPI and Docker for a cloud computing university module.",
    },
    ar: {
      title: "حوسبة سحابية – Docker + FastAPI",
      desc: "API REST محاصرة بـ Docker مبنية بـ FastAPI لمادة الحوسبة السحابية الجامعية.",
    },
    tags: ["Python", "FastAPI", "Docker", "REST"],
  },
  
];

export const contact = [
  {
    icon: "fa-brands fa-whatsapp",
    platform: "WhatsApp",
    value: "+20 106 988 8185",
    href: "https://wa.me/201069888185",
  },
  {
    icon: "fa-solid fa-envelope",
    platform: "Email",
    value: "abdullah.m.z2005@gmail.com",
    href: "mailto:abdullah.m.z2005@gmail.com",
  },
  {
    icon: "fa-brands fa-linkedin",
    platform: "LinkedIn",
    value: "abdullah-zaghloul",
    href: "https://linkedin.com/in/abdullah-zaghloul",
  },
  {
    icon: "fa-brands fa-github",
    platform: "GitHub",
    value: "abdullah-zaghloul",
    href: "https://github.com/Abdullah-Zaghloul",
  },
];
