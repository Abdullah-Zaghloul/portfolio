import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data";
import theme from "../theme";

export default function Projects({ lang, t }) {
  return (
    <section id="projects" style={{ padding: "5rem 2rem", maxWidth: 1000, margin: "0 auto" }}>
      <p style={label}>{t.projLabel}</p>
      <h2 style={title}>{t.projTitle}</h2>
      <p style={desc}>{t.projDesc}</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: "3rem" }}>
        {projects.map((project, i) => {
          const Tag = project.link ? motion.a : motion.div;
          const linkProps = project.link ? { href: project.link, target: project.link !== "#" ? "_blank" : "_self", rel: "noreferrer" } : {};
          return (
            <Tag key={i} {...linkProps}
              whileHover={{ x: 6, borderColor: theme.accent }}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              style={{
                background: "var(--surface)", border: "1px solid var(--border)",
                borderRadius: theme.radius, padding: "1.5rem",
                display: "flex", alignItems: "flex-start", gap: "1.25rem",
                transition: "border-color 0.3s, background 0.3s",
                textDecoration: "none", color: "inherit", cursor: "pointer",
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                background: theme.iconBg, border: `1px solid ${theme.iconBorder}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, color: theme.iconColor,
              }}>
                <i className={project.icon} />
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: "0.4rem", flexWrap: "wrap" }}>
                  <span style={{ fontFamily: theme.fontHead, fontWeight: 700, fontSize: "1rem" }}>
                    {project[lang].title}
                  </span>
                  <i className="fa-solid fa-arrow-up-right-from-square"
                    style={{ fontSize: 10, color: theme.accent, opacity: 0.6, flexShrink: 0 }} />
                </div>
                <div style={{ fontSize: "0.85rem", color: "var(--text2)", lineHeight: 1.65 }}>
                  {project[lang].desc}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "0.75rem" }}>
                  {project.tags.map((tag, j) => (
                    <span key={j} style={{
                      fontSize: 11, padding: "3px 10px", borderRadius: theme.radiusTag,
                      background: theme.tagBg, color: theme.tagColor,
                      border: `1px solid ${theme.tagBorder}`, fontWeight: 500,
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </Tag>
          );
        })}
      </div>
    </section>
  );
}

const label = { fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text3)", fontWeight: 600, marginBottom: "0.75rem" };
const title = { fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem,4vw,2.4rem)", letterSpacing: "-0.02em", marginBottom: "1rem" };
const desc  = { color: "var(--text2)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 540 };
