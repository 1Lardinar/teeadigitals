import { Link } from "../router.jsx";
import Icon from "../components/Icon.jsx";
import { Reveal } from "../components/Layout.jsx";
import { PostCover } from "../components/Illustrations.jsx";
import { CTA, PageHero, SectionHead, fmtDate, useSEO } from "../components/UI.jsx";
import { POSTS, RESOURCES } from "../data/content.js";
import { SITE } from "../data/site.js";
import NotFound from "./NotFound.jsx";

export function Insights() {
  useSEO("Insights", "Practical thinking on visibility, trust and growth for ambitious brands, from the strategist behind TEEA Digitals.");
  return (
    <>
      <PageHero crumbs={[{ label: "Insights" }]} eyebrow="Insights" title="Insights on visibility, trust and growth" lead="Practical thinking for ambitious brands, from the strategist behind TEEA Digitals." />
      <section>
        <div className="wrap">
          <SectionHead title="Latest articles" />
          <div className="posts">
            {POSTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <Link to={`/insights/${p.slug}`} className="post">
                  <PostCover seed={i} label="" />
                  <div className="post-body"><small>{p.category} · {fmtDate(p.date)}</small><h3>{p.title}</h3><p>{p.excerpt}</p><span className="more">Read more <Icon name="arrow" size={15} /></span></div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="tint">
        <div className="wrap">
          <SectionHead title="Resources worth bookmarking" />
          <div className="cards three">
            {RESOURCES.map((r) => (
              <div key={r.title} className={`card ${r.tone}`}><h3>{r.title}</h3><p>{r.text}</p><p><a className="more" href={r.href} target="_blank" rel="noopener noreferrer">{r.cta} <Icon name="arrow" size={15} /></a></p></div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

export function Post({ slug }) {
  const idx = POSTS.findIndex((p) => p.slug === slug);
  const p = POSTS[idx];
  useSEO(p?.title, p?.excerpt);
  if (!p) return <NotFound />;
  const others = POSTS.filter((x) => x.slug !== slug);
  return (
    <>
      <PageHero crumbs={[{ label: "Insights", to: "/insights" }, { label: p.category }]} eyebrow={p.category} title={p.title}>
        <p className="byline"><span>By {SITE.founder}</span><span>{fmtDate(p.date)}</span><span><Icon name="clock" size={14} /> {p.read}</span></p>
      </PageHero>
      <section>
        <div className="wrap post-layout">
          <article className="article">
            <PostCover seed={idx} label={p.title} />
            {p.body.map((b, i) => (
              <div key={i}>{b.h && <h2>{b.h}</h2>}<p>{b.p}</p></div>
            ))}
            <div className="row" style={{ marginTop: 34 }}><Link className="btn" to="/contact">Book a strategy call</Link><Link className="btn ghost dark" to="/insights">Back to insights</Link></div>
          </article>
          <aside className="side">
            <div className="side-card">
              <h3>Keep reading</h3>
              <ul className="reads">{others.map((o) => <li key={o.slug}><Link to={`/insights/${o.slug}`}><small>{o.category}</small>{o.title}</Link></li>)}</ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
