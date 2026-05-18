# Abdullah Zaghloul — Portfolio

A professional, bilingual (AR/EN) portfolio built with React, Tailwind CSS, and Framer Motion.

---

## 🚀 Quick Start (VS Code)

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm start
```
Open http://localhost:3000

---

## ✏️ How to Edit Content

All content lives in two files — no need to touch components:

| File | What to edit |
|------|-------------|
| `src/data.js` | Skills cards, project cards, contact links |
| `src/translations.js` | All text in English and Arabic |

### Add a new skill card — edit `src/data.js`:
```js
{
  icon: "fa-solid fa-bolt",          // FontAwesome icon class
  en: { title: "...", desc: "..." },
  ar: { title: "...", desc: "..." },
  tags: ["Tag1", "Tag2"],
  highlight: false,                  // true = shows ★ MAIN badge
}
```

### Add a new project — same file:
```js
{
  icon: "fa-solid fa-database",
  en: { title: "...", desc: "..." },
  ar: { title: "...", desc: "..." },
  tags: ["Python", "SQL"],
}
```

---

## 📥 Add your CV

Place your CV file in `/public/` named:
```
CV_Abdullah_Zaghloul.pdf
```
The download button in the Hero section already links to it.

---

## 🌐 Deploy to GitHub Pages

### One-time setup
1. Create a GitHub repo named `portfolio`
2. Update `homepage` in `package.json`:
   ```json
   "homepage": "https://Abdullah-Zaghloul.github.io/portfolio"
   ```
3. Init git & push:
   ```bash
   git init
   git remote add origin https://github.com/Abdullah-Zaghloul/portfolio.git
   git add .
   git commit -m "initial commit"
   git push -u origin main
   ```

### Deploy
```bash
npm run deploy
```

That's it! Your site will be live at:
`https://Abdullah-Zaghloul.github.io/portfolio`

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── CV_Abdullah_Zaghloul.pdf   ← Add your CV here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx              ← Root component + state
│   ├── data.js              ← All cards & links
│   ├── translations.js      ← All text (EN + AR)
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```
