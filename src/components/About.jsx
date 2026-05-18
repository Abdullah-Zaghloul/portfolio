import React from "react";
import { motion } from "framer-motion";
import theme from "../theme";

export default function About({ t }) {
  const eduRows = [
    { icon: "fa-solid fa-graduation-cap", value: t.eduUni },
    { icon: "fa-solid fa-code",           value: t.eduDept },
    { icon: "fa-solid fa-calendar",       value: t.eduYear },
    { icon: "fa-solid fa-location-dot",   value: t.eduLoc },
  ];
  const skillRows = [
    { icon: "fa-solid fa-gear",      value: "n8n · Python · Playwright" },
    { icon: "fa-solid fa-mobile",    value: "Flutter · Dart" },
    { icon: "fa-solid fa-pen-nib",   value: t.skillContent || "Content Writing · Scriptwriting" },
    { icon: "fa-solid fa-microchip", value: "AI Tools · Prompt Engineering" },
  ];

  return (
    <section id="about" style={{ padding: "5rem 2rem", maxWidth: 1000, margin: "0 auto" }}>
      <p style={label}>{t.aboutLabel}</p>
      <h2 style={title}>{t.aboutTitle}</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "2rem", marginTop: "3rem" }}>
        {[{ head: t.eduHead, rows: eduRows }, { head: t.skillsHead, rows: skillRows }].map((card, ci) => (
          <motion.div key={ci}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: ci * 0.1 }}
            style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: theme.radius, padding: "1.5rem" }}
          >
            <h3 style={{ fontFamily: theme.fontHead, fontWeight: 700, fontSize: "1rem", marginBottom: "1rem", color: theme.accent }}>
              {card.head}
            </h3>
            {card.rows.map((row, ri) => (
              <div key={ri} style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 0", borderBottom: ri < card.rows.length - 1 ? "1px solid var(--border)" : "none" }}>
                <i className={row.icon} style={{ color: theme.accent2, width: 18, textAlign: "center" }} />
                <span style={{ fontSize: "0.875rem", color: "var(--text2)" }}>{row.value}</span>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const label = { fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text3)", fontWeight: 600, marginBottom: "0.75rem" };
const title = { fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem,4vw,2.4rem)", letterSpacing: "-0.02em", marginBottom: "1rem" };
