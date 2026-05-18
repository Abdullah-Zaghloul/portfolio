import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { skills } from "../data";
import theme from "../theme";

export default function Experience({ lang, t }) {
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) ref.current?.classList.add("visible"); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="reveal" id="experience"
      style={{ padding: "5rem 2rem", maxWidth: 1000, margin: "0 auto" }}>
      <p style={label}>{t.expLabel}</p>
      <h2 style={title}>{t.expTitle}</h2>
      <p style={desc}>{t.expDesc}</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))", gap: 16, marginTop: "3rem" }}>
        {skills.map((skill, i) => {
          const Tag = skill.link ? motion.a : motion.div;
          const linkProps = skill.link ? { href: skill.link, target: "_blank", rel: "noreferrer" } : {};
          return (
            <Tag key={i} {...linkProps}
              whileHover={{ y: -5, borderColor: theme.accent }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: "var(--surface)",
                border: `1px solid ${skill.highlight ? `rgba(${theme.accentRgb},0.4)` : "var(--border)"}`,
                borderRadius: theme.radius, padding: "1.5rem",
                cursor: skill.link ? "pointer" : "default",
                transition: "all 0.3s", position: "relative", overflow: "hidden",
                textDecoration: "none", color: "inherit",
              }}
            >
              {skill.highlight && (
                <span style={{
                  position: "absolute", top: 12, right: 12, fontSize: 10,
                  padding: "2px 8px", borderRadius: 99,
                  background: theme.highlightBg, color: theme.highlightColor,
                  fontWeight: 600, letterSpacing: "0.08em",
                }}>★ MAIN</span>
              )}

              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: theme.iconBg, border: `1px solid ${theme.iconBorder}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, marginBottom: "1rem", color: theme.iconColor,
              }}>
                <i className={skill.icon} />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: "0.5rem" }}>
                <span style={{ fontFamily: theme.fontHead, fontWeight: 700, fontSize: "1rem" }}>
                  {skill[lang].title}
                </span>
                {skill.link && <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: 10, color: theme.accent, opacity: 0.7 }} />}
              </div>

              <div style={{ fontSize: "0.85rem", color: "var(--text2)", lineHeight: 1.65 }}>
                {skill[lang].desc}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "1rem" }}>
                {skill.tags.map((tag, j) => (
                  <span key={j} style={{
                    fontSize: 11, padding: "3px 10px", borderRadius: theme.radiusTag,
                    background: theme.tagBg, color: theme.tagColor,
                    border: `1px solid ${theme.tagBorder}`, fontWeight: 500,
                  }}>{tag}</span>
                ))}
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
