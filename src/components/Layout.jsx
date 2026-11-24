import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useRouter } from "../router.jsx";
import Icon from "./Icon.jsx";
import { Footprint } from "./Illustrations.jsx";
import { FOOTER_COLS, NAV, SITE } from "../data/site.js";

const safe = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } },
};

export function Logo({ light = true }) {
  return (
    <Link to="/" className={`logo ${light ? "" : "logo-dark"}`} aria-label="TEEA Digitals home">
      <span className="logo-mark"><img src="../../Logo.png" sizes="0" alt="" /></span>
      <span>TEEA-DIGITALS</span>
    </Link>
  );
}

function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute("data-theme") || "auto");
  const dark = theme === "dark" || (theme === "auto" && window.matchMedia?.("(prefers-color-scheme: dark)").matches);
  const toggle = () => {
    const next = dark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    safe.set("teea-theme", next);
    setTheme(next);
  };
  return (
    <button className="icon-btn" onClick={toggle} aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} title={dark ? "Light mode" : "Dark mode"}>
      <Icon name={dark ? "sun" : "moon"} size={20} />
    </button>
  );
}

export function Header() {
  const { path } = useRouter();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const esc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => { window.removeEventListener("keydown", esc); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="wrap bar">
        <Logo />
        <nav className="main-nav" aria-label="Main">
          {NAV.map((item) =>
            item.children ? (
              <div className="has-menu" key={item.label}>
                <NavLink to={item.to} className="nav-link">
                  {item.label}
                  <Icon name="chevron" size={14} />
                </NavLink>
                <div className="menu" role="menu">
                  {item.children.map((c) => (
                    <Link key={c.to} to={c.to} role="menuitem">{c.label}</Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} className={`nav-link ${item.accent ? "acad" : ""}`}>{item.label}</NavLink>
            )
          )}
        </nav>
        <div className="bar-actions">
          <ThemeToggle />
          <Link to="/contact" className="btn btn-sm green hide-sm">Book a strategy call</Link>
          <button className="icon-btn menu-btn" aria-expanded={open} aria-controls="drawer" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            <Icon name={open ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>
      <div id="drawer" className={`drawer ${open ? "open" : ""}`} hidden={!open}>
        <nav aria-label="Mobile">
          {[
            ["Home", "/"], ["Services", "/services"], ["Industries", "/industries"], ["Why us", "/why-us"],
            ["Our story", "/about"], ["Vision and values", "/vision"], ["Updates", "/updates"],
            ["Insights", "/insights"], ["TEEAcademy", "/academy"], ["Contact", "/contact"],
          ].map(([l, t]) => <NavLink key={t} to={t} end={t === "/"}>{l}</NavLink>)}
          <Link to="/contact" className="btn green">Book a strategy call</Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap foot-grid">
        <div className="foot-brand">
          <Logo />
          <p>A digital footprint consultancy for ambitious brands and professionals. We make sure the right people find you, trust you quickly and choose you with confidence.</p>
          <div className="socials">
            <a href={SITE.academyUrl} target="_blank" rel="noopener noreferrer" aria-label="TEEAcademy" className="icon-btn"><Icon name="book" size={18} /></a>
            <span className="handle"><Icon name="at" size={16} /> {SITE.handle.replace("@", "")}</span>
          </div>
        </div>
        {FOOTER_COLS.map((col) => (
          <div key={col.title}>
            <h4>{col.title}</h4>
            <ul>{col.links.map((l) => <li key={l.to}><Link to={l.to}>{l.label}</Link></li>)}</ul>
          </div>
        ))}
        <div>
          <h4>Contact</h4>
          <ul className="contact-list">
            <li><Icon name="pin" size={16} /> {SITE.location}</li>
            {SITE.email && <li><Icon name="mail" size={16} /> <a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>}
            {SITE.whatsapp && <li><Icon name="chat" size={16} /> <a href={`https://wa.me/${SITE.whatsapp}`}>WhatsApp</a></li>}
            <li><Icon name="at" size={16} /> {SITE.handle}</li>
            <li><Link to="/contact" className="foot-cta">Book a strategy call <Icon name="arrow" size={14} /></Link></li>
          </ul>
        </div>
      </div>
      <div className="wrap foot-base">
        <span>© {SITE.year} {SITE.name}. {SITE.location}.</span>
        <span className="legal"><Link to="/privacy">Privacy policy</Link><Link to="/terms">Terms of use</Link><a href={SITE.academyUrl} target="_blank" rel="noopener noreferrer">TEEAcademy courses</a></span>
      </div>
    </footer>
  );
}

export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => { if (!safe.get("teea-cookies")) setShow(true); }, []);
  if (!show) return null;
  const choose = (v) => { safe.set("teea-cookies", v); setShow(false); };
  return (
    <div className="cookie" role="dialog" aria-label="Cookie notice">
      <p>We use essential storage to remember your preferences, and optional analytics cookies to improve this site. <Link to="/privacy">Read our privacy policy</Link>.</p>
      <div className="row">
        <button className="btn btn-sm ghost" onClick={() => choose("declined")}>Decline</button>
        <button className="btn btn-sm green" onClick={() => choose("accepted")}>Accept</button>
      </div>
    </div>
  );
}

export function ScrollTop() {
  const [v, setV] = useState(false);
  useEffect(() => {
    const on = () => setV(window.scrollY > 700);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <button className={`to-top ${v ? "show" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" tabIndex={v ? 0 : -1}>
      <Icon name="arrow" size={18} style={{ transform: "rotate(-90deg)" }} />
    </button>
  );
}

export function useReveal() {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, seen];
}

export function Reveal({ children, className = "", as: Tag = "div", delay = 0 }) {
  const [ref, seen] = useReveal();
  return <Tag ref={ref} className={`reveal ${seen ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</Tag>;
}
