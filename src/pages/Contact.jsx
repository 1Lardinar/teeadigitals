import { useState } from "react";
import Icon from "../components/Icon.jsx";
import { FAQList, PageHero, SectionHead, useSEO } from "../components/UI.jsx";
import { SERVICES } from "../data/content.js";
import { SITE } from "../data/site.js";

const EMPTY = { name: "", email: "", brand: "", site: "", service: "", message: "" };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please tell us your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Enter a valid email address.";
  if (!v.brand.trim()) e.brand = "Please enter your brand name.";
  if (v.message.trim().length < 10) e.message = "Tell us a little about what you want to achieve.";
  return e;
}

export default function Contact() {
  useSEO("Contact", "Tell us about your brand and what you want it to achieve. If we are the right fit, we will book your strategy call.");
  const topic = new URLSearchParams(window.location.search).get("topic");
  const [v, setV] = useState({ ...EMPTY, service: topic === "training" ? "Training and workshops" : "" });
  const [err, setErr] = useState({});
  const [done, setDone] = useState(false);
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const found = validate(v);
    setErr(found);
    if (Object.keys(found).length) {
      document.getElementById(`f-${Object.keys(found)[0]}`)?.focus();
      return;
    }
    // No backend: open the visitor’s email client with the enquiry pre-filled.
    const body = `Name: ${v.name}\nEmail: ${v.email}\nBrand name: ${v.brand}\nWebsite or handle: ${v.site}\nService: ${v.service}\n\nWhat I want to achieve:\n${v.message}`;
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent("Strategy call request: " + v.brand)}&body=${encodeURIComponent(body)}`;
    setDone(true);
  };

  const field = (id, label, props = {}, Tag = "input") => (
    <div className={`field ${err[id] ? "bad" : ""}`}>
      <label htmlFor={`f-${id}`}>{label}</label>
      <Tag id={`f-${id}`} value={v[id]} onChange={set(id)} aria-invalid={!!err[id]} aria-describedby={err[id] ? `e-${id}` : undefined} {...props} />
      {err[id] && <span className="err" id={`e-${id}`} role="alert">{err[id]}</span>}
    </div>
  );

  return (
    <>
      <PageHero crumbs={[{ label: "Contact" }]} eyebrow="Contact" title="Let’s talk about your footprint." lead="Tell us about your brand and what you want it to achieve. If we are the right fit, we will book your strategy call." />
      <section>
        <div className="wrap contact-grid">
          <div>
            {done ? (
              <div className="success" role="status">
                <span className="ico"><Icon name="check" size={28} /></span>
                <h2>Thank you, {v.name.split(" ")[0]}.</h2>
                <p>Your email app should have opened with your enquiry ready to send. If it did not, use the contact options on this page and we will respond as soon as we can.</p>
                <button className="btn ghost dark" onClick={() => { setDone(false); setV(EMPTY); }}>Send another enquiry</button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="form">
                <h2>Request a strategy call</h2>
                <div className="two-f">
                  {field("name", "Your name", { autoComplete: "name" })}
                  {field("email", "Email address", { type: "email", autoComplete: "email" })}
                </div>
                <div className="two-f">
                  {field("brand", "Brand name", { autoComplete: "organization" })}
                  {field("site", "Website or handle (optional)")}
                </div>
                <div className="field">
                  <label htmlFor="f-service">What do you need help with?</label>
                  <select id="f-service" value={v.service} onChange={set("service")}>
                    <option value="">Not sure yet</option>
                    {SERVICES.map((s) => <option key={s.slug}>{s.title}</option>)}
                  </select>
                </div>
                {field("message", "What do you want your brand to achieve?", { rows: 5 }, "textarea")}
                <button className="btn green" type="submit">Book a strategy call</button>
                <p className="note">By sending this you agree to our privacy policy. We use your details only to respond to your enquiry.</p>
              </form>
            )}
          </div>
          <aside className="side">
            <div className="side-card">
              <h3>Other ways to reach us</h3>
              <ul className="contact-list lg">
                {SITE.email && <li><Icon name="mail" size={18} /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>}
                {SITE.whatsapp && <li><Icon name="chat" size={18} /><a href={`https://wa.me/${SITE.whatsapp}`}>Message on WhatsApp</a></li>}
                <li><Icon name="at" size={18} />{SITE.handle}</li>
                <li><Icon name="pin" size={18} />{SITE.location}</li>
                <li><Icon name="clock" size={18} />Strategy calls are booked after we review your enquiry</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <section className="tint">
        <div className="wrap narrow">
          <SectionHead title="Questions we are often asked" />
          <FAQList />
        </div>
      </section>
    </>
  );
}
