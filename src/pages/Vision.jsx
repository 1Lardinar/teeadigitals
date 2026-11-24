import Icon from "../components/Icon.jsx";
import { Reveal } from "../components/Layout.jsx";
import { CTA, PageHero, SectionHead, useSEO } from "../components/UI.jsx";
import { VALUES } from "../data/content.js";

const ICONS = ["target", "shield", "book", "users", "eye"];

export default function Vision() {
  useSEO("Vision, mission and values", "The purpose behind TEEA Digitals and the principles we hold ourselves to.");
  return (
    <>
      <PageHero crumbs={[{ label: "Vision and values" }]} eyebrow="What we stand for" title="What we stand for" lead="The purpose behind the work, and the principles we hold ourselves to." />
      <section>
        <div className="wrap">
          <div className="vm">
            <Reveal className="box a"><span className="vs">Mission</span><h2>Our mission</h2><p>To help brands and professionals be found, trusted and chosen online, through strategy rather than guesswork.</p></Reveal>
            <Reveal className="box b" delay={100}><span className="vs">Vision</span><h2>Our vision</h2><p>To be the most trusted digital footprint partner for ambitious brands across Africa and the diaspora.</p></Reveal>
          </div>
        </div>
      </section>
      <section className="tint">
        <div className="wrap">
          <SectionHead eyebrow="Values" title="Our values" sub="Five principles that shape how we work with every brand." />
          <div className="cards">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} className={`card ${v.tone}`} delay={i * 60}>
                <span className="ico"><Icon name={ICONS[i]} size={24} /></span>
                <h3>{v.title}</h3><p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
