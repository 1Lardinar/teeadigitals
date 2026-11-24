import { Reveal } from "../components/Layout.jsx";
import { CTA, PageHero, useSEO } from "../components/UI.jsx";
import Icon from "../components/Icon.jsx";
import { STATS_NOTE, UPDATES } from "../data/content.js";
import { SITE } from "../data/site.js";

export default function Updates() {
  useSEO("Updates", "New releases, training, community programmes and milestones from TEEA Digitals and our wider ecosystem.");
  return (
    <>
      <PageHero crumbs={[{ label: "Updates" }]} eyebrow="Updates" title="Updates and recent work" lead="New releases, training, community programmes and milestones from TEEA Digitals and our wider ecosystem." />
      <section>
        <div className="wrap narrow">
          <div className="tl">
            {UPDATES.map((u) => (
              <Reveal key={u.title} className={u.first ? "first" : ""}>
                <small>{u.tag}</small><h3>{u.title}</h3><p>{u.text}</p>
                {u.link && <p><a className="more" href={SITE.academyUrl} target="_blank" rel="noopener noreferrer">Explore TEEAcademy courses <Icon name="arrow" size={15} /></a></p>}
              </Reveal>
            ))}
          </div>
          <p className="note" style={{ marginTop: 34 }}>{STATS_NOTE}</p>
        </div>
      </section>
      <CTA />
    </>
  );
}
