import Icon from "../components/Icon.jsx";
import { Reveal } from "../components/Layout.jsx";
import { CTA, PageHero, StatBand, useSEO } from "../components/UI.jsx";
import { WHY } from "../data/content.js";

export default function WhyUs() {
  useSEO("Why choose us", "Because visibility without strategy is just noise. Strategy first, founder-led, rooted in your market.");
  return (
    <>
      <PageHero crumbs={[{ label: "Why us" }]} eyebrow="Why us" title="Why brands choose TEEA Digitals" lead="Because visibility without strategy is just noise." />
      <section>
        <div className="wrap">
          <div className="cards">
            {WHY.map((w, i) => (
              <Reveal key={w.title} className={`card ${w.tone}`} delay={(i % 3) * 70}>
                <span className="ico"><Icon name={w.icon} size={24} /></span>
                <h3>{w.title}</h3><p>{w.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <StatBand />
      <section className="tint">
        <div className="wrap center-block">
          <h2>Built on real work</h2>
          <p>Trusted to train the staff of a major real estate company in Port Harcourt on digital usage, and invited to speak and train across Nigeria.</p>
        </div>
      </section>
      <CTA />
    </>
  );
}
