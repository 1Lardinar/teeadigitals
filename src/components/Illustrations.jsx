// Original SVG illustrations. Colours come from CSS variables so they follow light/dark themes.
import { useId } from "react";

export function Footprint({ size = 28, className = "", style }) {
  return (
    <svg className={className} style={style} width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <g fill="currentColor">
        <ellipse cx="32" cy="42" rx="10" ry="14" />
        <circle cx="20" cy="19" r="4.4" />
        <circle cx="29.5" cy="12.5" r="4.4" />
        <circle cx="40" cy="12.5" r="4" />
        <circle cx="47.5" cy="19.5" r="3.5" />
      </g>
    </svg>
  );
}

/* Hero: a search result that is found, trusted and chosen. */
export function HeroVisual() {
  const g = useId();
  return (
    <svg className="art hero-art" viewBox="0 0 560 480" role="img" aria-label="Illustration of a brand search result that is found, trusted and chosen">
      <defs>
        <linearGradient id={g} x1="0" x2="1">
          <stop offset="0" stopColor="#C8B6F5" />
          <stop offset=".6" stopColor="#9B7BFF" />
          <stop offset="1" stopColor="#3DDC97" />
        </linearGradient>
      </defs>
      <circle cx="300" cy="230" r="210" fill="rgba(200,182,245,.16)" />
      <circle cx="470" cy="90" r="46" fill="rgba(61,220,151,.16)" />
      {/* browser window */}
      <g>
        <rect x="40" y="56" width="400" height="330" rx="22" fill="var(--art-surface)" stroke="var(--art-line)" />
        <path d="M40 78a22 22 0 0122-22h356a22 22 0 0122 22v22H40z" fill="var(--art-bar)" />
        <circle cx="64" cy="78" r="5" fill="#FF8A8A" /><circle cx="82" cy="78" r="5" fill="#FFD36B" /><circle cx="100" cy="78" r="5" fill="#3DDC97" />
        <rect x="64" y="116" width="352" height="38" rx="19" fill="var(--art-field)" stroke="var(--art-line)" />
        <circle cx="88" cy="135" r="7" fill="none" stroke="var(--art-muted)" strokeWidth="2.4" /><path d="M93 140l6 6" stroke="var(--art-muted)" strokeWidth="2.4" strokeLinecap="round" />
        <text x="112" y="140" className="art-t" fill="var(--art-ink)" fontSize="15">your brand name</text>
        {/* featured result */}
        <rect x="64" y="172" width="352" height="122" rx="16" fill="var(--art-card)" stroke="#3DDC97" strokeWidth="2" />
        <circle cx="96" cy="206" r="18" fill="#4B1FA8" />
        <path d="M88 207l5 5 10-11" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="124" y="194" width="150" height="10" rx="5" fill="var(--art-ink)" opacity=".85" />
        <rect x="124" y="212" width="96" height="8" rx="4" fill="var(--art-muted)" opacity=".5" />
        <rect x="80" y="238" width="320" height="8" rx="4" fill="var(--art-muted)" opacity=".35" />
        <rect x="80" y="254" width="250" height="8" rx="4" fill="var(--art-muted)" opacity=".35" />
        <g className="art-t" fontSize="11" fontWeight="700">
          <rect x="80" y="270" width="64" height="18" rx="9" fill="rgba(75,31,168,.12)" /><text x="92" y="283" fill="#7C4DFF">Website</text>
          <rect x="152" y="270" width="70" height="18" rx="9" fill="rgba(75,31,168,.12)" /><text x="163" y="283" fill="#7C4DFF">LinkedIn</text>
          <rect x="230" y="270" width="64" height="18" rx="9" fill="rgba(23,138,85,.16)" /><text x="241" y="283" fill="#178A55">Reviews</text>
        </g>
        {/* faded competitors */}
        <rect x="64" y="308" width="352" height="30" rx="12" fill="var(--art-card)" opacity=".7" />
        <rect x="78" y="318" width="120" height="8" rx="4" fill="var(--art-muted)" opacity=".35" />
        <rect x="64" y="346" width="352" height="26" rx="12" fill="var(--art-card)" opacity=".45" />
        <rect x="78" y="355" width="90" height="8" rx="4" fill="var(--art-muted)" opacity=".3" />
      </g>
      {/* floating chips */}
      <g className="art-t" fontSize="15" fontWeight="700">
        <g transform="translate(398 46)"><rect width="122" height="40" rx="20" fill="#4B1FA8" /><circle cx="22" cy="20" r="8" fill="#C8B6F5" /><text x="38" y="26" fill="#fff">Found</text></g>
        <g transform="translate(420 168)"><rect width="124" height="40" rx="20" fill="#7C4DFF" /><circle cx="22" cy="20" r="8" fill="#EFE9FD" /><text x="38" y="26" fill="#fff">Trusted</text></g>
        <g transform="translate(404 300)"><rect width="136" height="44" rx="22" fill="#178A55" /><circle cx="24" cy="22" r="9" fill="#DDF5E8" /><path d="M20 22l3 3 6-7" stroke="#178A55" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /><text x="42" y="28" fill="#fff">Chosen</text></g>
      </g>
      {/* footprint trail */}
      <path d="M30 450C110 470 170 420 250 430S380 470 470 400" fill="none" stroke={`url(#${g})`} strokeWidth="4" strokeLinecap="round" strokeDasharray="2 13" />
      <circle cx="470" cy="400" r="9" fill="#3DDC97" />
    </svg>
  );
}

/* Decision funnel: search → scroll → compare → choose. */
export function DecisionArt() {
  const steps = [
    { x: 50, l: "Search", d: "M-8 0a8 8 0 1016 0 8 8 0 10-16 0M6 6l7 7" },
    { x: 170, l: "Scroll", d: "M0-10v20M-7 3l7 7 7-7" },
    { x: 290, l: "Compare", d: "M-10-6h8v12h-8zM2-6h8v12H2z" },
    { x: 410, l: "Choose", d: "M-9 0l6 6 12-12" },
  ];
  return (
    <svg className="art" viewBox="0 0 460 210" role="img" aria-label="A customer searches, scrolls, compares and then chooses, all before contacting you">
      <path d="M50 100H410" stroke="var(--art-line)" strokeWidth="3" strokeDasharray="3 10" strokeLinecap="round" />
      {steps.map((s, i) => (
        <g key={s.l} transform={`translate(${s.x} 100)`}>
          <circle r="38" fill={i === 3 ? "#178A55" : "var(--art-card)"} stroke={i === 3 ? "#178A55" : "var(--art-line)"} strokeWidth="2" />
          <g transform={i === 0 ? "translate(-3 -3)" : ""} fill="none" stroke={i === 3 ? "#fff" : "var(--art-accent)"} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d={s.d} />
          </g>
          <text y="68" textAnchor="middle" className="art-t" fontSize="14" fontWeight="700" fill="var(--art-ink)">{s.l}</text>
        </g>
      ))}
      <g className="art-t" fontSize="13" fill="var(--art-muted)">
        <text x="230" y="30" textAnchor="middle">A few minutes, before they ever contact you</text>
      </g>
      <path d="M60 18h340" stroke="var(--art-accent)" strokeWidth="2" opacity=".4" />
    </svg>
  );
}

/* Abstract founder portrait (illustration, not a photograph). */
export function FounderArt() {
  return (
    <svg className="art founder-art" viewBox="0 0 320 360" role="img" aria-label="Illustrated portrait placeholder for Esther Eninine Adu">
      <defs>
        <linearGradient id="fa-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#4B1FA8" /><stop offset=".65" stopColor="#7C4DFF" /><stop offset="1" stopColor="#3DDC97" />
        </linearGradient>
      </defs>
      <rect width="320" height="360" rx="36" fill="url(#fa-bg)" />
      <circle cx="260" cy="70" r="70" fill="rgba(255,255,255,.1)" />
      <circle cx="40" cy="320" r="90" fill="rgba(255,255,255,.08)" />
      <path d="M60 360c0-70 45-110 100-110s100 40 100 110z" fill="#2B1066" />
      <path d="M130 250c4 22 56 22 60 0l-8-24h-44z" fill="#E8C4A0" />
      <ellipse cx="160" cy="180" rx="50" ry="58" fill="#F2D0AE" />
      <path d="M108 170c-6-60 40-84 66-76 34 6 48 36 38 80-8-28-24-44-56-44-24 0-40 14-48 40z" fill="#1B1230" />
      <circle cx="140" cy="186" r="4" fill="#1B1230" /><circle cx="180" cy="186" r="4" fill="#1B1230" />
      <path d="M142 210c10 9 26 9 36 0" stroke="#9B4E3A" strokeWidth="4" fill="none" strokeLinecap="round" />
      <g fill="#C8B6F5"><circle cx="48" cy="52" r="6" /><circle cx="68" cy="34" r="4" /><circle cx="90" cy="24" r="3" /></g>
    </svg>
  );
}

/* Cover art for articles, generated from a seed so each is distinct. */
export function PostCover({ seed = 0, label }) {
  const palettes = [
    ["#2B1066", "#7C4DFF", "#3DDC97"],
    ["#4B1FA8", "#C8B6F5", "#178A55"],
    ["#150C2B", "#9B7BFF", "#3DDC97"],
  ];
  const [a, b, c] = palettes[seed % palettes.length];
  const id = `pc-${seed}`;
  return (
    <svg className="art cover" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice" role="img" aria-label={label || "Article illustration"}>
      <defs><linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={a} /><stop offset="1" stopColor={b} /></linearGradient></defs>
      <rect width="400" height="220" fill={`url(#${id})`} />
      <circle cx={80 + seed * 90} cy="60" r="90" fill="rgba(255,255,255,.08)" />
      <circle cx={340 - seed * 70} cy="190" r="70" fill="rgba(255,255,255,.08)" />
      <path d={`M-10 ${170 - seed * 10}C80 ${210 - seed * 20} 140 100 220 ${130 + seed * 8}S340 ${60 + seed * 15} 420 40`} fill="none" stroke="#fff" strokeOpacity=".9" strokeWidth="3.5" strokeLinecap="round" strokeDasharray="2 12" />
      <circle cx="380" cy="42" r="9" fill={c} />
      <circle cx="220" cy={130 + seed * 8} r="7" fill="#fff" opacity=".9" />
    </svg>
  );
}

/* Impact slide art. */
export function ImpactArt({ kind }) {
  const bars = [30, 52, 74, 104];
  return (
    <svg className="art" viewBox="0 0 420 280" role="img" aria-label={`Illustration for ${kind}`}>
      <rect width="420" height="280" rx="24" fill="var(--art-card)" />
      {kind === "training" && (
        <g>
          {bars.map((h, i) => (
            <rect key={i} x={60 + i * 62} y={210 - h * 1.5} width="40" height={h * 1.5} rx="10" fill={i === 3 ? "#3DDC97" : "#7C4DFF"} opacity={i === 3 ? 1 : 0.5 + i * 0.12} />
          ))}
          <path d="M60 120C140 110 200 70 340 50" stroke="var(--art-accent)" strokeWidth="3" fill="none" strokeDasharray="2 10" strokeLinecap="round" />
          <circle cx="340" cy="50" r="9" fill="#3DDC97" />
          <text x="60" y="250" className="art-t" fontSize="14" fill="var(--art-muted)">LinkedIn visibility, one cohort at a time</text>
        </g>
      )}
      {kind === "corporate" && (
        <g>
          <rect x="70" y="80" width="90" height="140" rx="8" fill="#4B1FA8" />
          <rect x="170" y="50" width="90" height="170" rx="8" fill="#7C4DFF" />
          <rect x="270" y="110" width="80" height="110" rx="8" fill="#9B7BFF" />
          {[0, 1, 2, 3].map((r) => [0, 1].map((c) => (
            <rect key={`${r}${c}`} x={185 + c * 36} y={68 + r * 34} width="20" height="20" rx="4" fill="rgba(255,255,255,.75)" />
          )))}
          {[0, 1, 2].map((r) => <rect key={r} x="86" y={98 + r * 36} width="22" height="22" rx="4" fill="rgba(255,255,255,.6)" />)}
          <path d="M50 220H370" stroke="var(--art-line)" strokeWidth="3" />
          <circle cx="330" cy="70" r="26" fill="#3DDC97" />
          <path d="M318 70l8 8 16-17" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )}
      {kind === "community" && (
        <g>
          {[110, 210, 310].map((x, i) => (
            <g key={x}>
              <circle cx={x} cy={110 - (i === 1 ? 12 : 0)} r={i === 1 ? 30 : 24} fill={["#7C4DFF", "#3DDC97", "#4B1FA8"][i]} />
              <path d={`M${x - 42} ${220}c0-${i === 1 ? 52 : 44} ${i === 1 ? 18 : 14}-${i === 1 ? 62 : 52} ${42}-${i === 1 ? 62 : 52}s42 ${i === 1 ? 10 : 8} 42 ${i === 1 ? 62 : 52}z`} fill={["#7C4DFF", "#3DDC97", "#4B1FA8"][i]} opacity=".85" />
            </g>
          ))}
          <path d="M70 244H350" stroke="var(--art-line)" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" />
        </g>
      )}
    </svg>
  );
}

export function NotFoundArt() {
  return (
    <svg className="art" viewBox="0 0 360 200" role="img" aria-label="A footprint trail that stops at a gap">
      <path d="M20 150C90 150 120 80 190 100" fill="none" stroke="#9B7BFF" strokeWidth="4" strokeLinecap="round" strokeDasharray="2 13" />
      <circle cx="20" cy="150" r="8" fill="#C8B6F5" />
      <circle cx="260" cy="70" r="26" fill="none" stroke="#3DDC97" strokeWidth="4" strokeDasharray="6 8" />
      <text x="260" y="80" textAnchor="middle" className="art-t" fontSize="28" fontWeight="800" fill="var(--art-accent)">?</text>
    </svg>
  );
}

/* Process timeline strip used on the services page. */
export function TrailStrip() {
  return (
    <svg className="art trail" viewBox="0 0 640 140" role="img" aria-label="Footprint trail from found to trusted to preferred to chosen">
      <defs>
        <linearGradient id="trail-g" x1="0" x2="1"><stop offset="0" stopColor="#C8B6F5" /><stop offset=".6" stopColor="#9B7BFF" /><stop offset="1" stopColor="#3DDC97" /></linearGradient>
      </defs>
      <path className="draw" d="M20 100C120 110 150 30 250 50S380 110 450 50 560 10 620 20" fill="none" stroke="url(#trail-g)" strokeWidth="4" strokeLinecap="round" strokeDasharray="3 11" />
      <g fill="#C8B6F5"><circle cx="20" cy="100" r="9" /><circle cx="250" cy="50" r="9" /><circle cx="450" cy="50" r="9" /></g>
      <circle cx="620" cy="20" r="11" fill="#3DDC97" />
      <g className="art-t" fontSize="15" fill="#E6DDFB">
        <text x="6" y="132">Found</text><text x="222" y="86">Trusted</text><text x="418" y="86">Preferred</text><text x="548" y="52">Chosen</text>
      </g>
    </svg>
  );
}
