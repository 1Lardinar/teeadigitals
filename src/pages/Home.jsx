import { Link } from "../router.jsx";
import Icon from "../components/Icon.jsx";
import { Reveal } from "../components/Layout.jsx";
import { DecisionArt, FounderArt, HeroVisual, PostCover } from "../components/Illustrations.jsx";
import { CTA, ImpactCarousel, SectionHead, StatBand, fmtDate, useSEO } from "../components/UI.jsx";
import { INDUSTRIES, OUTCOMES, PHASES, PLATFORMS, POSTS, SERVICES } from "../data/content.js";
import { SITE } from "../data/site.js";

export default function Home() {
  useSEO("", "TEEA Digitals is a digital footprint consultancy. We make sure the right people find your brand, trust it quickly and choose it with confidence.");
  return (
    <>
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Digital footprint consultancy</span>
            <h1>Your brand is better than your online presence shows.</h1>
            <p className="lead">TEEA Digitals is a digital footprint consultancy for ambitious brands and professionals. We make sure the right people find you, trust you quickly and choose you with confidence.</p>
            <div className="row">
              <Link className="btn green" to="/contact">Book a strategy call</Link>
              <Link className="btn ghost" to="/services">Explore our services</Link>
            </div>
            <a className="hero-link" href={SITE.academyUrl} target="_blank" rel="noopener noreferrer">Explore TEEAcademy courses <Icon name="arrow" size={16} /></a>
          </div>
          <div className="hero-visual"><HeroVisual /></div>
        </div>
      </section>

      <StatBand />

      <section className="tint">
        <div className="wrap split">
          <div>
            <SectionHead eyebrow="The problem" title="Customers decide before they ever contact you." />
            <p className="big">They search, scroll and compare. In those few minutes, your footprint decides whether you look like the obvious choice or one more option.</p>
            <p className="sub">Great work does not speak for itself online. It has to be found, framed and believed.</p>
            <p>We shape how your brand appears wherever your future clients are looking, so you win the decision early and compete on value, not price.</p>
          </div>
          <Reveal className="panel"><DecisionArt /></Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <SectionHead eyebrow="The outcome" title="What changes when your footprint is right" />
          <div className="cards three">
            {OUTCOMES.map((o, i) => (
              <Reveal className="card feature" key={o.title} delay={i * 80}>
                <span className="ico"><Icon name={o.icon} size={26} /></span>
                <h3>{o.title}</h3><p>{o.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mint">
        <div className="wrap">
          <div className="head-row">
            <SectionHead eyebrow="Services" title="Services built around one outcome: you get chosen." />
            <Link to="/services" className="more">View all services <Icon name="arrow" size={16} /></Link>
          </div>
          <div className="tiles">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 4) * 60}>
                <Link to={`/services/${s.slug}`} className="tile">
                  <span className="ico"><Icon name={s.icon} size={24} /></span>
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                  <span className="more">Learn more <Icon name="arrow" size={15} /></span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="head-row">
            <SectionHead eyebrow="Who we work with" title="Brands with real expertise and bigger ambitions." sub="Brands with real expertise and bigger ambitions than their online presence currently shows." />
            <Link to="/industries" className="more">Explore industries <Icon name="arrow" size={16} /></Link>
          </div>
          <div className="tags">{INDUSTRIES.map((x) => <span key={x.title}><Icon name={x.icon} size={18} />{x.title}</span>)}</div>
          <Link className="btn" to="/why-us">Why brands choose us</Link>
        </div>
      </section>

      <section className="way">
        <div className="wrap">
          <SectionHead eyebrow="How we work" title="A partnership, not a one-off job" sub="Most engagements run 60 to 90 days, because lasting visibility is built, not switched on." />
          <div className="phases">
            {PHASES.map((p, i) => (
              <Reveal className="phase" key={p.title} delay={i * 90}>
                <small>{p.n}</small><h3>{p.title}</h3><p>{p.text}</p>
                <ul>{p.points.map((x) => <li key={x}><Icon name="check" size={16} />{x}</li>)}</ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <SectionHead eyebrow="Our impact" title="Built on real work with creators and businesses" sub="Trusted to train teams, mentor professionals and grow small businesses across Nigeria." />
          <ImpactCarousel />
        </div>
      </section>

      <section className="tint">
        <div className="wrap story">
          <Reveal><FounderArt /></Reveal>
          <div>
            <span className="eyebrow dark">The founder</span>
            <h2>Meet the strategist</h2>
            <p>I’m Esther Eninine Adu, a digital marketer and content creator based in Port Harcourt, Nigeria. I started by helping businesses grow online and kept seeing the same thing: talented people and strong brands that were hard to find and hard to trust.</p>
            <p>TEEA Digitals exists to close that gap for brands in Nigeria and across the diaspora.</p>
            <Link className="btn" to="/about">Read our story</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <SectionHead eyebrow="Where we work" title="One footprint, shaped across every place clients look." center />
          <div className="platforms">{PLATFORMS.map((p) => <span key={p}>{p}</span>)}</div>
        </div>
      </section>

      <section className="tint">
        <div className="wrap">
          <div className="head-row">
            <SectionHead eyebrow="Latest insights" title="Insights on visibility, trust and growth" />
            <Link to="/insights" className="more">View all posts <Icon name="arrow" size={16} /></Link>
          </div>
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

      <section>
        <div className="wrap">
          <Reveal className="academy">
            <div><span className="eyebrow dark">TEEAcademy</span><h2>Prefer to learn it yourself?</h2><p>TEEAcademy is our home for practical digital courses, recorded training and resources for creators, entrepreneurs and teams.</p></div>
            <div className="row"><a className="btn green" href={SITE.academyUrl} target="_blank" rel="noopener noreferrer">Explore TEEAcademy courses</a><Link className="btn ghost dark" to="/academy">About TEEAcademy</Link></div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
