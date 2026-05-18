import React, { useState, useEffect } from "react";
import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import Experience from "./components/Experience";
import Projects   from "./components/Projects";
import About      from "./components/About";
import Contact    from "./components/Contact";
import translations from "./translations";

export default function App() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState("en");

  useEffect(() => {
    document.body.classList.toggle("dark",  dark);
    document.body.classList.toggle("light", !dark);
  }, [dark]);

  useEffect(() => {
    document.documentElement.dir  = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => { document.body.classList.add("dark"); }, []);

  const t = translations[lang];
  const toggleTheme = () => setDark(d => !d);
  const toggleLang  = () => setLang(l => l === "en" ? "ar" : "en");

  const divider = <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "0 2rem" }} />;

  return (
    <>
      <Navbar dark={dark} toggleTheme={toggleTheme} lang={lang} toggleLang={toggleLang} t={t} />
      <main>
        <Hero t={t} lang={lang} dark={dark} />
        {divider}
        <Experience lang={lang} t={t} />
        {divider}
        <Projects lang={lang} t={t} />
        {divider}
        <About t={t} />
        {divider}
        <Contact t={t} />
      </main>
      <footer style={{ textAlign: "center", padding: "2rem", color: "var(--text3)", fontSize: 13 }}>
        {t.footer}
      </footer>
    </>
  );
}
