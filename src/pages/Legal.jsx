import { PageHero, useSEO } from "../components/UI.jsx";
import { LEGAL_PRIVACY, LEGAL_TERMS } from "../data/content.js";

function LegalPage({ title, intro, items, updated }) {
  useSEO(title, intro);
  return (
    <>
      <PageHero crumbs={[{ label: title }]} title={title} lead={intro} />
      <section>
        <div className="wrap article">
          <p className="note">Last updated: {updated}</p>
          {items.map((i) => (<div key={i.h}><h2>{i.h}</h2><p>{i.p}</p></div>))}
        </div>
      </section>
    </>
  );
}

export const Privacy = () => <LegalPage title="Privacy policy" intro="How TEEA Digitals collects, uses and protects your information." items={LEGAL_PRIVACY} updated="24 November 2026" />;
export const Terms = () => <LegalPage title="Terms of use" intro="The terms that apply when you use this website." items={LEGAL_TERMS} updated="24 November 2026" />;
