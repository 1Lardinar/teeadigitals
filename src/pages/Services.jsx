import { Link } from "../router.jsx";
import Icon from "../components/Icon.jsx";
import { Reveal } from "../components/Layout.jsx";
import { TrailStrip } from "../components/Illustrations.jsx";
import { CTA, PageHero, SectionHead, useSEO } from "../components/UI.jsx";
import { PHASES, SERVICES } from "../data/content.js";
import NotFound from "./NotFound.jsx";

export function ServicesPage() {
  useSEO("Services", "Services built around one outcome: you get chosen. Strategy, brand presence, website, content, growth, reporting and training.");
  return (
    <>
      <PageHero crumbs={[{ label: "Services" }]} eyebrow="Services" title="Services built around one outcome: you get chosen." lead="Every engagement is shaped around your brand, your market and your goals.">
        <TrailStrip />
      </PageHero>
      <section>
        <div className="wrap">
          <div className="out">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug}>
                <div className="out-row">
                  <div className="out-title"><span className="num-i">{String(i + 1).padStart(2, "0")}</span><span className="ico"><Icon name={s.icon} size={24} /></span><h3>{s.title}</h3></div>
                  <div>
                    <p>{s.summary}</p>
                    <small>{s.bestFor}</small>
                    <Link to={`/services/${s.slug}`} className="more">Explore this service <Icon name="arrow" size={15} /></Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="way">
        <div className="wrap">
          <SectionHead eyebrow="How we work" title="A partnership, not a one-off job" sub="Most engagements run 60 to 90 days, because lasting visibility is built, not switched on." />
          <div className="phases">
            {PHASES.map((p) => (
              <div className="phase" key={p.title}><small>{p.n}</small><h3>{p.title}</h3><p>{p.text}</p><ul>{p.points.map((x) => <li key={x}><Icon name="check" size={16} />{x}</li>)}</ul></div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

export function ServiceDetail({ slug }) {
  const s = SERVICES.find((x) => x.slug === slug);
  useSEO(s?.title, s?.summary);
  if (!s) return <NotFound />;
  const related = SERVICES.filter((x) => x.slug !== slug).slice(0, 3);
  return (
    <>
      <PageHero crumbs={[{ label: "Services", to: "/services" }, { label: s.title }]} eyebrow={s.bestFor} title={s.title} lead={s.summary}>
        <div className="row" style={{ marginTop: 28 }}><Link className="btn green" to="/contact">Book a strategy call</Link><Link className="btn ghost" to="/services">All services</Link></div>
      </PageHero>
      <section>
        <div className="wrap detail">
          <div>
            <SectionHead eyebrow="Overview" title="What this service does" />
            <p className="big">{s.overview}</p>
            <h3 className="h3-sp">What is included</h3>
            <ul className="checks">{s.included.map((x) => <li key={x}><Icon name="check" size={18} />{x}</li>)}</ul>
            <h3 className="h3-sp">How it works</h3>
            <ol className="steps">{s.steps.map((x) => <li key={x}>{x}</li>)}</ol>
          </div>
          <aside className="side">
            <div className="side-card">
              <span className="ico"><Icon name={s.icon} size={26} /></span>
              <h3>The outcome</h3>
              <p>{s.outcome}</p>
              <small>Typical engagement: 60 to 90 days</small>
              <Link className="btn green" to="/contact">Start the conversation</Link>
            </div>
          </aside>
        </div>
      </section>
      <section className="tint">
        <div className="wrap">
          <SectionHead eyebrow="Related" title="Other ways we help" />
          <div className="tiles three">
            {related.map((r) => (
              <Link key={r.slug} to={`/services/${r.slug}`} className="tile"><span className="ico"><Icon name={r.icon} size={24} /></span><h3>{r.title}</h3><p>{r.summary}</p><span className="more">Learn more <Icon name="arrow" size={15} /></span></Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
