# Content

This file tracks everything the site will say: what's decided, what's a draft, and what's missing. It's the working file for Phase 2 ([roadmap.md](roadmap.md)).

Rules for content:
- Every fact, number and claim must come from Abdullah. No invented metrics, clients or testimonials.
- Write English and Arabic together. Arabic is written natively, not machine-translated from English, in clear Modern Standard Arabic unless decided otherwise.
- Plain language for the reader: say what was built, for whom, and what it changed. Describe the impact, not the steps.

Status key: ✅ done · 📝 draft, needs review · ❓ missing

---

## 0. Ground rules from Abdullah (2026-10-28)

- **No client names.** Don't name the consulting firm, its founder, or the academy anywhere on the site. Describe them generically. A link to a live project is fine, so a visitor can open it. This repo is public, so the names stay out of these docs too.
- **Don't mention AI** as part of how the work is done.
- **Education only in About.** The university and major appear in the About section and on the CV, nowhere else (not in the hero or the headline). The city is not stated.
- **Removed from the old site:** AI voiceover, YouTube scriptwriting and the @dravexa0 channel, sports-facilities management, and the four old projects (freelance monitor, invoice pipeline, Flutter app, FastAPI/Docker).
- **Content operations is not a service.** It stays only as the title of a role in the experience section.
- **Availability is a setting.** Abdullah is not available right now. The status must change from one place in site settings, with no code edits (see [brief.md](brief.md#requirements)).

## 1. Positioning 📝

**Audience, in order:**
1. Clients who need a system for their work: business owners and organizations of any kind, such as an academy or a clinic. Mostly in the Gulf. Egypt is not a target market.
2. Companies hiring, who may offer a remote role.

The main call to action is WhatsApp.

**Draft:**

| | English | Arabic |
|---|---|---|
| Headline | I build the internal systems a business runs on. | أبني الأنظمة الداخلية التي تُدار بها الأعمال. |
| Subline | Management portals, dashboards that update themselves, and automation, designed around how your team actually works. | بوابات إدارة، ولوحات متابعة تحدّث نفسها، وأتمتة، مصممة على طريقة عمل فريقك الفعلية. |

## 2. About 📝

**Draft (EN):** I build systems from inside the work. My day job is running content operations, coordinating editors, designers and publishing across several platforms, so I see where a team's hours go. When a task keeps repeating, I turn it into a system: a dashboard that prepares itself, an upload that runs on its own, or a full portal that a whole organization works in.

**Draft (AR):** أبني الأنظمة من داخل العمل نفسه. أدير عمليات المحتوى في عملي اليومي، فأنسّق بين المونتاج والتصميم والنشر على أكثر من منصة، وأرى أين يذهب وقت الفريق. وحين تتكرر مهمة، أحوّلها إلى نظام: لوحة متابعة تجهّز نفسها، أو رفع يتم وحده، أو بوابة كاملة تعمل عليها مؤسسة بأكملها.

- **Photo:** ✅ yes, one professional photo in the About section, not the hero. ❓ Abdullah to provide it. The layout must still work without it.
- **Education:** Software Industry & Multimedia, Faculty of Science, Alexandria University. ❓ Show the expected graduation year (2027) or not?
- **Languages spoken:** not stated.
- **Other About content (suggestions, ❓ to approve):**
  - *How I work:* three or four short principles drawn from real practice. For example: understand the operation before building; agree on requirements in writing first (about a week with the academy's founder); deliver a working first version, then improve it; leave the system documented so others can run it.
  - *Now:* one line on what Abdullah is working on at the moment, kept in site settings so it's easy to update.

## 3. Experience 📝

### Content Operations & Growth Specialist: professional consulting firm (remote)
- **Dates:** started around May 2026, about five months before 2026-10-28. The site shows "2026 – present".
- **Title:** shown in English on both language versions. The Arabic original is "مسؤول عمليات المحتوى والنمو". Not "Lead" or "Manager", because Abdullah reports to the operations manager.
- **Context, not for the site:** the firm builds the personal brand of a consultant who helps experienced professionals present their expertise and make hard career decisions. Abdullah reports to a general operations manager.
- **Outcomes (draft):**
  - Coordinates editors and designers on content for social platforms (LinkedIn first), email campaigns, YouTube channels, live streams and workshops, including their promotion.
  - Turned the weekly performance report into a dashboard that updates itself. Preparing the numbers used to take about an hour each week and now needs no manual work.
  - Automated video uploads from Google Drive to YouTube. Each upload took about an hour by hand.
  - Set up scheduled performance reports that update the platform's historical performance sheet.

### Systems developer: online Quran academy (project-based, freelance)
- **Dates:** September to October 2026.
- **Outcomes:** see projects 1 and 2.

## 4. Services 📝

In this order, as agreed:

| # | English | Arabic |
|---|---|---|
| 1 | **Management systems and portals.** A web portal for your team, with roles and permissions, records, workflows, payments and reports, in Arabic and English. | **أنظمة وبوابات الإدارة.** بوابة ويب لفريقك فيها الأدوار والصلاحيات، والسجلات، وسير العمل، والمدفوعات، والتقارير، بالعربية والإنجليزية. |
| 2 | **Dashboards, reporting and automation.** Your numbers on one page that updates itself, with the repetitive steps around it handled automatically. | **لوحات المتابعة والتقارير والأتمتة.** أرقامك في صفحة واحدة تحدّث نفسها، والخطوات المتكررة حولها تتم تلقائيًا. |
| 3 | **Websites for organizations.** Fast bilingual websites that take a visitor from an ad to a WhatsApp message. | **مواقع المؤسسات.** مواقع سريعة بلغتين، تنقل الزائر من الإعلان إلى رسالة واتساب. |

- ❓ The tools strip. Candidates: Next.js, TypeScript, React, Supabase, PostgreSQL, Tailwind CSS, Astro, Cloudflare, GitHub Actions, Google Apps Script, Google Sheets, Metricool, Notion.

## 5. Projects 📝

For each project: a one-line summary, the problem, what was built, the stack, the result, a link if public, and one visual.

### 1. Management portal for an online Quran academy ⭐ featured
- **Problem:** the academy wanted an easier way to follow up on students, teachers and their sessions.
- **How it went:** about a week of gathering requirements with the founder. A complete first version on Google Sheets and Apps Script was delivered in a week. On delivery the academy asked for a fuller, more professional system, so it was rebuilt as a web portal.
- **What it does:** seven staff roles, each with its own dashboard. It covers students, sessions, study plans, exams, payments and monthly reports, in Arabic and English, with Google sign-in. Each role sees only what it's allowed to, enforced in the database itself. Daily automatic backups and an automated test suite.
- **Stack:** Next.js, TypeScript, Supabase (PostgreSQL), Tailwind CSS, Cloudflare Workers, GitHub Actions.
- **Result:** in production since 25 October 2026, about four weeks after the first requirements meeting.
- **Link:** none. The portal is behind a login and the repo is private.
- **Visual:** an illustrated mockup with fictional data, drawn from screenshots Abdullah will share later.
- **Testimonial:** the founder's quote goes on this project (see section 6).
- Mention that project 2 was built for the same academy, and link the two.

### 2. Public website for the same academy
- **What it does:** the academy's bilingual website and the landing page for its ads. Visitors see the programs and the founder's profile, then contact the academy on WhatsApp or through a form. Built mobile-first, with security checks before launch.
- **Stack:** Astro, TypeScript, Tailwind CSS, Cloudflare Workers.
- **Result:** launched in October 2026.
- **Link:** https://qalaidacademy.com, the live site. The link is allowed; the name still isn't written in the copy.
- **Visual:** ❓ a screenshot or a mockup, decided in the design phase.
- Shown as its own project, linked to project 1.

### 3. Self-updating weekly performance dashboard
- **Problem:** the weekly meeting needed platform numbers that took about an hour to prepare by hand.
- **What it does:** analytics exports from Metricool go into a Google Sheet through a script, and a one-page dashboard reads from it: the required figures plus charts of the growth trend and its status.
- **Result:** the weekly numbers are ready with no manual work.
- **Visual:** an illustration or animation with fictional numbers, drawn for the site.

### 4. Automatic Drive-to-YouTube upload
- **Problem:** each video upload took about an hour by hand.
- **What it does:** a script uploads a video from Google Drive straight to YouTube.
- **Stack:** Python on Google Colab, YouTube Data API.

## 6. Proof 📝

- **Real figures available:** about an hour saved on every weekly report and every video upload, and the portal live about four weeks after the first requirements meeting. A stats row only goes in if the design calls for one. No other numbers exist yet; don't add any.
- **Testimonials belong to projects.** Each quote is shown on the project it's about, credited by role, not as a separate carousel. The content schema gets an optional testimonial on each project.
- **First testimonial:** the academy's founder agreed to write one for project 1. Credit: "Founder, an international Quran academy" (AR: "مؤسس أكاديمية دولية لتحفيظ القرآن الكريم"). ❓ waiting for the real text.
- **Placeholder, for design only. Never publish.** The schema marks it `placeholder: true`, and production builds must hide any placeholder testimonial.
  - EN: "[Placeholder] Abdullah turned our requirements into a system our whole team works in, and he was clear with us at every step."
  - AR: "[نص مؤقت] حوّل عبدالله متطلباتنا إلى نظام يعمل عليه فريقنا كله، وكان واضحًا معنا في كل خطوة."
- **Certificates:** none listed.

## 7. Contact and links ✅

- WhatsApp: +20 106 988 8185 (main call to action)
- Email: abdullah.m.z2005@gmail.com
- LinkedIn: linkedin.com/in/abdullah-zaghloul
- GitHub: github.com/Abdullah-Zaghloul
- The YouTube channel is removed.

## 8. CV ❓

- `public/CV_Abdullah_Zaghloul.pdf` is out of date. Rewrite it from this file once sections 1 to 6 are approved, before the site goes live.
- Education stays on the CV.
- Both languages: an English CV and an Arabic CV.

## 9. Site settings ✅

Values that change often live in one settings file, not in components:
- Availability: on or off, plus an optional note per language.
- Contact links, the CV file and the main call to action.

## 10. Site copy ❓

Navigation, buttons, section titles, the call to action and the footer. Write these last, once the sections above are approved.
