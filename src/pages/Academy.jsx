import { Link } from "../router.jsx";
import Icon from "../components/Icon.jsx";
import { Reveal } from "../components/Layout.jsx";
import { CTA, PageHero, useSEO } from "../components/UI.jsx";
import { SITE } from "../data/site.js";

const WHAT = [
  { icon: "book", title: "Practical courses", text: "Learn digital skills you can apply the same day." },
  { icon: "spark", title: "Recorded training", text: "Learn at your own pace and revisit lessons any time." },
  { icon: "pen", title: "Resources", text: "Guides and tools for creators, entrepreneurs and teams." },
];

export default function Academy() {
  useSEO("TEEAcademy", "Practical digital courses and training for creators, entrepreneurs and teams.");
  return (
    <>
      <PageHero crumbs={[{ label: "TEEAcademy" }]} eyebrow="Learn with us" title="TEEAcademy" lead="Practical digital courses and training for creators, entrepreneurs and teams." />
      <section>
        <div className="wrap">
          <Reveal className="academy">
            <div><h2>Prefer to learn it yourself?</h2><p>TEEAcademy is our home for practical digital courses, recorded training and resources. Learn the skills, apply them straight away and grow with confidence.</p></div>
            <div><a className="btn green" href={SITE.academyUrl} target="_blank" rel="noopener noreferrer">Explore TEEAcademy courses</a></div>
          </Reveal>
          <div className="cards three" style={{ marginTop: 40 }}>
            {WHAT.map((w, i) => (
              <Reveal key={w.title} className="card feature" delay={i * 70}><span className="ico"><Icon name={w.icon} size={26} /></span><h3>{w.title}</h3><p>{w.text}</p></Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="tint">
        <div className="wrap center-block">
          <h2>Need training for your whole team?</h2>
          <p className="sub">Ask us about corporate workshops.</p>
          <Link className="btn" to="/contact?topic=training">Enquire about team training</Link>
        </div>
      </section>
      <CTA />
    </>
  );
}
