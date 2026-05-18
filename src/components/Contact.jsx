import React from "react";
import { motion } from "framer-motion";
import { contact } from "../data";
import theme from "../theme";

export default function Contact({ t }) {
  return (
    <section id="contact" style={{ padding: "5rem 2rem", maxWidth: 1000, margin: "0 auto" }}>
      <p style={label}>{t.contactLabel}</p>
      <h2 style={title}>{t.contactTitle}</h2>
      <p style={desc}>{t.contactDesc}</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 12, marginTop: "3rem" }}>
        {contact.map((item, i) => (
          <motion.a key={i} href={item.href} target="_blank" rel="noreferrer"
            whileHover={{ y: -4, borderColor: theme.accent }}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            style={{
              background: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: theme.radiusSm, padding: "1rem 1.1rem",
              display: "flex", alignItems: "center", gap: 12,
              flexDirection: "row", direction: "ltr",
              textDecoration: "none", color: "var(--text)",
              transition: "all 0.3s", overflow: "hidden", minWidth: 0,
            }}
          >
            <i className={item.icon} style={{ fontSize: 22, color: theme.accent, width: 26, textAlign: "center", flexShrink: 0 }} />
            <div style={{ display: "flex", flexDirection: "column", minWidth: 0, flex: 1, direction: "ltr", textAlign: "left" }}>
              <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--text3)", fontWeight: 600, marginBottom: 2 }}>
                {item.platform}
              </span>
              <span style={{ fontSize: "0.82rem", color: "var(--text2)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {item.value}
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

const label = { fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text3)", fontWeight: 600, marginBottom: "0.75rem" };
const title = { fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem,4vw,2.4rem)", letterSpacing: "-0.02em", marginBottom: "1rem" };
const desc  = { color: "var(--text2)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 540 };
