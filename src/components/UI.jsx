import { useEffect, useState } from "react";
import { Link } from "../router.jsx";
import Icon from "./Icon.jsx";
import { Reveal } from "./Layout.jsx";
import { ImpactArt } from "./Illustrations.jsx";
import { FAQ, IMPACT, STATS, STATS_NOTE } from "../data/content.js";

export function useSEO(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | TEEA Digitals` : "TEEA Digitals | Digital footprint strategy for ambitious brands";
    if (description) {
      let m = document.querySelector('meta[name="description"]');
      if (!m) { m = document.createElement("meta"); m.name = "description"; document.head.appendChild(m); }
      m.content = description;
    }
  }, [title, description]);
}

export function PageHero({ title, lead, crumbs = [], eyebrow, children }) {
  return (
    <div className="phead">
      <div className="wrap">
        {crumbs.length > 0 && (
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {crumbs.map((c) => (
              <span key={c.label}><Icon name="right" size={13} />{c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}</span>
            ))}
          </nav>
        )}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {lead && <p className="phead-lead">{lead}</p>}
        {children}
      </div>
    </div>
  );
}

export function SectionHead({ eyebrow, title, sub, center }) {
  return (
    <Reveal className={`sec-head ${center ? "center" : ""}`}>
      {eyebrow && <span className="eyebrow dark">{eyebrow}</span>}
      <h2>{title}</h2>
      {sub && <p className="sub">{sub}</p>}
    </Reveal>
  );
}

export function StatBand({ dark = false }) {
  return (
    <section className={`statband ${dark ? "" : "light"}`} aria-label="Track record">
      <div className="wrap">
        <div className="nums">
          {STATS.map((s, i) => (
            <Reveal className="num" key={s.value} delay={i * 70}><b>{s.value}</b><span>{s.label}</span></Reveal>
          ))}
        </div>
        <p className="note">{STATS_NOTE}</p>
      </div>
    </section>
  );
}

export function CTA({ title = "Ready to be the obvious choice?", text = "Book a strategy call and let’s look at how your brand shows up today." }) {
  return (
    <section className="cta">
      <div className="wrap cta-in">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="row">
          <Link className="btn" to="/contact">Book a strategy call</Link>
          <Link className="btn ghost" to="/services">Explore our services</Link>
        </div>
      </div>
    </section>
  );
}

export function FAQList({ items = FAQ }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {items.map((f, i) => (
        <div key={f.q} className={`faq-item ${open === i ? "open" : ""}`}>
          <h3>
            <button aria-expanded={open === i} aria-controls={`faq-${i}`} onClick={() => setOpen(open === i ? -1 : i)}>
              {f.q}<Icon name={open === i ? "minus" : "plus"} size={20} />
            </button>
          </h3>
          <div id={`faq-${i}`} role="region" hidden={open !== i}><p>{f.a}</p></div>
        </div>
      ))}
    </div>
  );
}

export function ImpactCarousel() {
  const [i, setI] = useState(0);
  const n = IMPACT.length;
  const go = (d) => setI((i + d + n) % n);
  const s = IMPACT[i];
  return (
    <div className="carousel" role="group" aria-roledescription="carousel" aria-label="Our impact">
      <div className="slide" key={i} aria-live="polite">
        <div className="slide-art"><ImpactArt kind={s.art} /></div>
        <div className="slide-copy">
          <span className="chip">{s.tag}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
          <Link to="/updates" className="more">Read more <Icon name="arrow" size={16} /></Link>
        </div>
      </div>
      <div className="car-ctrl">
        <button className="icon-btn" onClick={() => go(-1)} aria-label="Previous slide"><Icon name="left" size={20} /></button>
        <span className="count" aria-hidden="true">{i + 1} / {n}</span>
        <button className="icon-btn" onClick={() => go(1)} aria-label="Next slide"><Icon name="right" size={20} /></button>
        <div className="dots">{IMPACT.map((_, k) => <button key={k} className={k === i ? "on" : ""} onClick={() => setI(k)} aria-label={`Go to slide ${k + 1}`} aria-current={k === i} />)}</div>
      </div>
    </div>
  );
}

export const fmtDate = (d) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
