import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import theme from "../theme";

const navLinks = [
  { key: "navExperience", href: "#experience" },
  { key: "navProjects",   href: "#projects"   },
  { key: "navAbout",      href: "#about"       },
  { key: "navContact",    href: "#contact"     },
];

export default function Navbar({ dark, toggleTheme, lang, toggleLang, t }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          padding: "0 1.5rem", height: 64,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          direction: "ltr",
          background: dark ? "rgba(1,6,13,0.92)" : "rgba(240,248,255,0.92)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border)",
          transition: "background 0.3s",
          gap: 12,
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none", flexShrink: 0 }}>
          <span style={{ fontFamily: theme.fontBody, fontWeight: 700, fontSize: "1.05rem", color: "var(--text)" }}>
            Abdullah{" "}
            <span style={{ background: theme.accentGradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Zaghloul
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }} className="desktop-nav">
          {navLinks.map(link => (
            <a key={link.key} href={link.href} style={linkStyle}
              onMouseEnter={e => e.target.style.color = theme.accent}
              onMouseLeave={e => e.target.style.color = "var(--text2)"}
            >{t[link.key]}</a>
          ))}

          <span style={{ width: 1, height: 20, background: "var(--border)", margin: "0 6px" }} />

          {/* Status badge */}
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "var(--green-bg)", border: "1px solid rgba(34,197,94,0.3)",
            color: "var(--green)", padding: "4px 12px", borderRadius: 99,
            fontSize: 12, fontWeight: 500, whiteSpace: "nowrap", flexShrink: 0,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--green)", animation: "pulse 2s infinite", flexShrink: 0 }} />
            {t.status}
          </span>

          <span style={{ width: 1, height: 20, background: "var(--border)", margin: "0 6px" }} />

          <button onClick={toggleLang} style={btnStyle}>
            <i className="fa-solid fa-globe" style={{ fontSize: 13 }} />
            <span>{t.langToggle}</span>
          </button>
          <button onClick={toggleTheme} style={{ ...btnStyle, padding: "6px 10px" }}>
            <i className={dark ? "fa-solid fa-moon" : "fa-solid fa-sun"} style={{ fontSize: 13 }} />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(o => !o)} className="mobile-menu-btn" style={{ ...btnStyle, padding: "6px 10px" }}>
          <i className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"} style={{ fontSize: 15 }} />
        </button>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}
            style={{
              position: "fixed", top: 64, left: 0, right: 0, zIndex: 99,
              background: dark ? "rgba(1,6,13,0.98)" : "rgba(240,248,255,0.98)",
              backdropFilter: "blur(20px)", borderBottom: "1px solid var(--border)",
              padding: "1rem 1.5rem 1.25rem",
              display: "flex", flexDirection: "column", gap: 4,
            }}
          >
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 7,
              background: "var(--green-bg)", border: "1px solid rgba(34,197,94,0.3)",
              color: "var(--green)", padding: "6px 14px", borderRadius: 99,
              fontSize: 12, fontWeight: 500, marginBottom: 8, alignSelf: "flex-start",
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--green)", animation: "pulse 2s infinite" }} />
              {t.status}
            </span>

            {navLinks.map(link => (
              <a key={link.key} href={link.href} onClick={() => setMenuOpen(false)}
                style={{ ...linkStyle, fontSize: 15, padding: "8px 0", borderBottom: "1px solid var(--border)" }}>
                {t[link.key]}
              </a>
            ))}

            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <button onClick={toggleLang} style={{ ...btnStyle, flex: 1, justifyContent: "center" }}>
                <i className="fa-solid fa-globe" style={{ fontSize: 13 }} /><span>{t.langToggle}</span>
              </button>
              <button onClick={toggleTheme} style={{ ...btnStyle, padding: "6px 14px" }}>
                <i className={dark ? "fa-solid fa-moon" : "fa-solid fa-sun"} style={{ fontSize: 13 }} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-menu-btn { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}

const linkStyle = { textDecoration: "none", color: "var(--text2)", fontSize: 13, fontWeight: 500, padding: "4px 8px", borderRadius: 6, transition: "color 0.2s", whiteSpace: "nowrap" };
const btnStyle  = { background: "var(--surface)", border: "1px solid var(--border)", color: "var(--text2)", padding: "6px 12px", borderRadius: 8, fontFamily: "'DM Sans',sans-serif", fontSize: 13, fontWeight: 500, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, transition: "all 0.2s", whiteSpace: "nowrap" };
