// Site copy: navigation, buttons, section titles and labels (docs/content.md, section 10).
// Editorial content (headline, about, projects…) lives in src/content/ instead.

export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number];

export const dir = { ar: "rtl", en: "ltr" } as const;

// Section ids are shared by both languages, so the language switch can keep the reader's place.
export const sections = ["services", "work", "experience", "about", "contact"] as const;

export const ui = {
  ar: {
    "meta.title": "عبدالله زغلول · أنظمة إدارة ولوحات متابعة وأتمتة",
    "nav.label": "التنقل الرئيسي",
    "nav.services": "الخدمات",
    "nav.work": "الأعمال",
    "nav.experience": "الخبرة",
    "nav.about": "عني",
    "nav.contact": "تواصل",
    "lang.switch": "English",
    "lang.switchLabel": "Read this page in English",
    "theme.toggle": "تبديل المظهر",
    "skip": "تخطَّ إلى المحتوى",
    "hero.cta": "راسلني على واتساب",
    "hero.secondary": "شاهد أعمالي",
    "availability.on": "متاح لمشاريع جديدة",
    "availability.off": "لا أستقبل مشاريع جديدة حاليًا",
    "services.title": "ماذا أبني",
    "work.title": "أعمال مختارة",
    "experience.title": "الخبرة",
    "about.title": "عني",
    "about.principles": "طريقة عملي",
    "about.education": "الدراسة",
    "contact.title": "لنبدأ مشروعك",
    "contact.text": "أخبرني عن عملك، وعن المهمة التي تأخذ وقت فريقك.",
    "project.problem": "المشكلة",
    "project.built": "ما بنيته",
    "project.result": "النتيجة",
    "project.stack": "التقنيات",
    "project.link": "زيارة الموقع",
    "project.related": "مشروع مرتبط",
    "project.visual": "صورة المشروع قريبًا",
    "experience.present": "حتى الآن",
    "experience.remote": "عن بُعد",
    "experience.project": "بالمشروع",
    "cv": "تحميل السيرة الذاتية",
    "footer.source": "الكود المصدري على GitHub",
    "footer.top": "إلى الأعلى",
    "404.title": "الصفحة غير موجودة",
    "404.home": "العودة إلى الرئيسية",
  },
  en: {
    "meta.title": "Abdullah Zaghloul · Management systems, dashboards and automation",
    "nav.label": "Main navigation",
    "nav.services": "Services",
    "nav.work": "Work",
    "nav.experience": "Experience",
    "nav.about": "About",
    "nav.contact": "Contact",
    "lang.switch": "العربية",
    "lang.switchLabel": "اقرأ هذه الصفحة بالعربية",
    "theme.toggle": "Switch theme",
    "skip": "Skip to content",
    "hero.cta": "Message me on WhatsApp",
    "hero.secondary": "See my work",
    "availability.on": "Available for new projects",
    "availability.off": "Not taking new projects right now",
    "services.title": "What I build",
    "work.title": "Selected work",
    "experience.title": "Experience",
    "about.title": "About",
    "about.principles": "How I work",
    "about.education": "Education",
    "contact.title": "Let's start your project",
    "contact.text": "Tell me about your business and the task that takes up your team's time.",
    "project.problem": "Problem",
    "project.built": "What I built",
    "project.result": "Result",
    "project.stack": "Stack",
    "project.link": "Visit the site",
    "project.related": "Related project",
    "project.visual": "Project visual coming soon",
    "experience.present": "Present",
    "experience.remote": "Remote",
    "experience.project": "Project-based",
    "cv": "Download CV",
    "footer.source": "Source on GitHub",
    "footer.top": "Back to top",
    "404.title": "Page not found",
    "404.home": "Back to home",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export type UiKey = keyof (typeof ui)["en"];

export function useTranslations(locale: Locale) {
  return (key: UiKey) => ui[locale][key];
}

export function otherLocale(locale: Locale): Locale {
  return locale === "ar" ? "en" : "ar";
}

// Western digits in both languages, to match phone numbers and the stack names.
export function formatDate(value: string, locale: Locale) {
  const [year, month] = value.split("-").map(Number);
  if (!month) return String(year);
  return new Intl.DateTimeFormat(locale === "ar" ? "ar-EG-u-nu-latn" : "en-GB", {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year!, month - 1)));
}
