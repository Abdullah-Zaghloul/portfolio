// ============================================================
//  THEME — Single source of truth for all colors & tokens
//  To change the color scheme: edit ONLY this file
// ============================================================

const theme = {
  // ── Primary accent colors ──────────────────────────────────
  accent:        "#38bdf8",   // Sky Blue — main accent
  accent2:       "#7dd3fc",   // Lighter blue — secondary accent
  accentRgb:     "56,189,248",   // RGB version for rgba() usage
  accent2Rgb:    "125,211,252",  // RGB version for rgba() usage

  // ── Gradients ─────────────────────────────────────────────
  accentGradient:  "linear-gradient(135deg, #38bdf8, #7dd3fc)",
  nameGradient:    "linear-gradient(135deg, #e8f4fd 0%, #7dd3fc 55%, #38bdf8 100%)",
  heroGlow:        "rgba(56,189,248,0.18)",
  cardGlowBg:      "rgba(56,189,248,0.08)",
  tagBg:           "rgba(56,189,248,0.10)",
  tagBorder:       "rgba(56,189,248,0.20)",
  tagColor:        "#7dd3fc",
  iconBg:          "rgba(56,189,248,0.12)",
  iconBorder:      "rgba(56,189,248,0.20)",
  iconColor:       "#38bdf8",
  highlightBg:     "rgba(56,189,248,0.15)",
  highlightColor:  "#7dd3fc",
  btnShadow:       "rgba(56,189,248,0.30)",

  // ── Typography ────────────────────────────────────────────
  fontHead: "'Syne', sans-serif",
  fontBody: "'DM Sans', sans-serif",
  fontSerif: "'DM Serif Display', Georgia, serif",
  fontAr:   "'Tajawal', sans-serif",

  // ── Border radius ─────────────────────────────────────────
  radius:   16,
  radiusSm: 10,
  radiusTag: 6,

  // ── Transitions ───────────────────────────────────────────
  trans: "0.3s cubic-bezier(0.4,0,0.2,1)",
};

export default theme;
