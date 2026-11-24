import { Link } from "../router.jsx";
import Icon from "../components/Icon.jsx";
import { Reveal } from "../components/Layout.jsx";
import { CTA, PageHero, useSEO } from "../components/UI.jsx";
import { INDUSTRIES } from "../data/content.js";

export default function Industries() {
  useSEO("Industries", "Who we work with: founders, consultants, real estate, e-commerce, hospitality and Nigerian and diaspora businesses.");
  return (
    <>
      <PageHero crumbs={[{ label: "Services", to: "/services" }, { label: "Industries" }]} eyebrow="Who we work with" title="Brands with real expertise and bigger ambitions." lead="Brands with real expertise and bigger ambitions than their online presence currently shows." />
      <section>
        <div className="wrap">
          <div className="cards">
            {INDUSTRIES.map((x, i) => (
              <Reveal key={x.title} className="card feature" delay={(i % 3) * 70}>
                <span className="ico"><Icon name={x.icon} size={26} /></span>
                <h3>{x.title}</h3>
                <p>{x.text}</p>
                <ul className="checks sm">{x.focus.map((f) => <li key={f}><Icon name="check" size={16} />{f}</li>)}</ul>
              </Reveal>
            ))}
          </div>
          <p className="center-block" style={{ marginTop: 40 }}>Not sure you fit? <Link to="/contact" className="more">Tell us about your brand <Icon name="arrow" size={15} /></Link></p>
        </div>
      </section>
      <CTA />
    </>
  );
}
