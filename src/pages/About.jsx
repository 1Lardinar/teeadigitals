import { Link } from "../router.jsx";
import { FounderArt } from "../components/Illustrations.jsx";
import { CTA, PageHero, SectionHead, StatBand, useSEO } from "../components/UI.jsx";
import { Reveal } from "../components/Layout.jsx";

const MILESTONES = [
  ["Learning", "Esther builds her own digital skills and starts helping businesses grow online through content, marketing and websites."],
  ["Noticing", "The same pattern keeps appearing: talented, skilled and underestimated people whose presence does not show their value."],
  ["Teaching", "Training and mentoring grow into a community, from LinkedIn visibility to SME Growth Tour workshops and TEEAcademy."],
  ["Focusing", "Everything narrows to one question: how do we make this brand impossible to overlook? TEEA Digitals opens in 2026."],
];

export default function About() {
  useSEO("Our story", "We started by helping people grow online. Then we saw the bigger problem: visibility, access and being easy to discover.");
  return (
    <>
      <PageHero crumbs={[{ label: "Our story" }]} eyebrow="Our story" title="We started by helping people grow online. Then we saw the bigger problem." />
      <section>
        <div className="wrap story">
          <Reveal><FounderArt /><p className="caption">Esther Eninine Adu, founder · Port Harcourt, Nigeria</p></Reveal>
          <div>
            <p className="quote">The problem was never only marketing. It was visibility, access and being easy to discover.</p>
            <p>TEEA Digitals began with founder Esther Eninine Adu’s own journey of learning digital skills and helping businesses grow online. She worked on content, marketing, websites, training and growth, and kept meeting the same people: talented, skilled and underestimated.</p>
            <p>Their work was good. Their presence did not show it. Clients could not find them, trust them quickly or understand their value in one look.</p>
            <p>That insight shaped everything. Today TEEA Digitals helps brands and professionals in Nigeria and across the diaspora present their value clearly, so opportunity finds them.</p>
            <p>The question we ask changed too. It is no longer “how do we post more?” It is “how do we make this brand impossible to overlook?”</p>
          </div>
        </div>
      </section>
      <section className="tint">
        <div className="wrap">
          <SectionHead eyebrow="The journey" title="From helping people post to making brands unmissable" />
          <div className="tl">
            {MILESTONES.map(([t, p], i) => (
              <Reveal key={t} className={i === 0 ? "first" : ""}><small>Step {i + 1}</small><h3>{t}</h3><p>{p}</p></Reveal>
            ))}
          </div>
        </div>
      </section>
      <StatBand />
      <section>
        <div className="wrap center-block">
          <h2>See what we stand for</h2>
          <p className="sub">Our mission, vision and the five values behind every engagement.</p>
          <Link className="btn" to="/vision">Vision and values</Link>
        </div>
      </section>
      <CTA />
    </>
  );
}
