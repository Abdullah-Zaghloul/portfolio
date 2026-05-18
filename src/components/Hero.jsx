import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import theme from "../theme";

// ── Animated canvas background ─────────────────────────────
function HeroCanvas({ dark }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let W, H;

    const PARTICLE_COUNT = 70;
    const particles = [];

    function resize() {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    function randBetween(a, b) { return a + Math.random() * (b - a); }

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: randBetween(0, W),
          y: randBetween(0, H),
          r: randBetween(1, 2.5),
          vx: randBetween(-0.25, 0.25),
          vy: randBetween(-0.35, -0.08),
          alpha: randBetween(0.15, 0.7),
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Radial glow at top center
      const grd = ctx.createRadialGradient(W / 2, 0, 0, W / 2, 0, H * 0.65);
      grd.addColorStop(0, dark ? "rgba(56,189,248,0.12)" : "rgba(56,189,248,0.08)");
      grd.addColorStop(1, "transparent");
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, W, H);

      // Particles
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(125,211,252,${p.alpha})`;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        // Wrap around
        if (p.y < -5)  p.y = H + 5;
        if (p.x < -5)  p.x = W + 5;
        if (p.x > W + 5) p.x = -5;
      });

      // Faint connection lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56,189,248,${0.12 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    initParticles();
    draw();

    const ro = new ResizeObserver(() => { resize(); initParticles(); });
    ro.observe(canvas);

    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, [dark]);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
    />
  );
}

// ── Hero section ───────────────────────────────────────────
export default function Hero({ t, lang, dark }) {
  const isAr = lang === "ar";

  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", padding: "80px 2rem 4rem",
      textAlign: "center", position: "relative", overflow: "hidden",
    }}>
      {/* Animated canvas */}
      <HeroCanvas dark={dark} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{ maxWidth: 680, position: "relative", zIndex: 1 }}
      >
        {/* Name */}
        <h1 style={{ lineHeight: 1.2, marginBottom: "0.8rem" }}>
          <span style={{
            display: "block",
            fontFamily:theme.fontBody,
            fontWeight: 400,
            fontSize: "clamp(0.8rem, 1.8vw, 1rem)",
            letterSpacing:"0.28em",
            textTransform: "uppercase",
            color: "var(--text3)",
            marginBottom: "0.3rem",
          }}>
           Abdullah Mahmoud
          </span>

          <span style={{
            display: "block",
            fontFamily:theme.fontSerif,
            fontWeight: 400,
            fontSize: "clamp(3rem, 9vw, 6rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.3,
            paddingBottom: "0.15em",
            background: theme.nameGradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
           Zaghloul
          </span>
        </h1>

        {/* Title */}
        <p style={{
          fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
          color: "var(--text2)", marginBottom: "0.75rem",
          fontFamily: isAr ? theme.fontAr : theme.fontBody,
        }}>
          {t.heroTitle}
        </p>

        {/* Subtitle */}
        <p style={{
          fontSize: "0.875rem", color: "var(--text3)", marginBottom: "2.5rem",
          fontFamily: isAr ? theme.fontAr : theme.fontBody,
        }}>
          {t.heroSub}
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <motion.a
            href="/CV_Abdullah_Zaghloul.pdf" download
            whileHover={{ y: -2, boxShadow: `0 8px 30px ${theme.btnShadow}` }}
            style={{
              background: theme.accentGradient, color: "#fff", border: "none",
              padding: "12px 28px", borderRadius: 10, fontFamily: theme.fontBody,
              fontSize: 14, fontWeight: 500, cursor: "pointer",
              display: "inline-flex", alignItems: "center", gap: 8,
              textDecoration: "none", boxShadow: `0 4px 20px ${theme.btnShadow}`,
              transition: "all 0.3s",
            }}
          >
            <i className="fa-solid fa-download" />{t.cvBtn}
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ borderColor: theme.accent, color: theme.accent }}
            style={{
              background: "transparent", border: "1px solid var(--border2)", color: "var(--text2)",
              padding: "12px 28px", borderRadius: 10, fontFamily: theme.fontBody,
              fontSize: 14, fontWeight: 500, cursor: "pointer",
              display: "inline-flex", alignItems: "center", gap: 8,
              textDecoration: "none", transition: "all 0.3s",
            }}
          >
            <i className="fa-solid fa-envelope" />{t.contactBtn}
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
