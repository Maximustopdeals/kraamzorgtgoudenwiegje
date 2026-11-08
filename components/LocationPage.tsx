import { ArrowRight, HeartHandshake, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import type { LocationContent } from "@/lib/locationContent";
import { serviceSchema, webPageSchema } from "@/lib/structuredData";
import { StructuredData } from "./StructuredData";
import { Breadcrumbs } from "./Breadcrumbs";
import { PageHero } from "./PageHero";
import { TrackedLink } from "./TrackedLink";
import { SectionHeading } from "./SectionHeading";
import { FaqList } from "./FaqList";
import { CtaBand } from "./CtaBand";

const focusIcons = [ShieldCheck, HeartHandshake, Sparkles];

export function LocationPage({ content }: { content: LocationContent }) {
  return (
    <>
      <StructuredData data={{ "@context": "https://schema.org", "@graph": [webPageSchema(content.seoTitle, content.seoDescription, content.path), serviceSchema(content.name)] }} />
      <Breadcrumbs items={[{ name: "Werkgebied", path: "/werkgebied" }, { name: content.name, path: content.path }]} />
      <PageHero eyebrow={`Persoonlijke kraamzorg in ${content.name}`} title={<>Kraamzorg in <span className="gold">{content.name}</span></>} text={content.intro}>
        <TrackedLink href="/contact" event="care_request_click" eventLabel={content.name} className="button">Bespreek je uitgerekende datum <ArrowRight aria-hidden="true" size={18} /></TrackedLink>
      </PageHero>

      <section className="section section--white">
        <div className="container editorial-split">
          <div data-reveal>
            <p className="eyebrow">Jullie eerste week thuis</p>
            <h2>{content.sectionTitle}</h2>
          </div>
          <div className="prose" data-reveal>
            {content.sectionText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {content.quote && (
              <div className="quote-block" style={{ marginTop: 32 }}>
                <blockquote>“{content.quote}”</blockquote>
                <cite>Vania, kraamverzorgende</cite>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="Wat je kunt verwachten" title={content.focusTitle} text={content.focusText} />
          <div className="principles">
            {content.focusItems.map((item, index) => {
              const Icon = focusIcons[index];
              return <article className="principle" data-reveal key={item.title}><Icon aria-hidden="true" size={28} /><h3>{item.title}</h3><p>{item.text}</p></article>;
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container editorial-split">
          <div data-reveal>
            <p className="eyebrow">Kraamzorg in jouw omgeving</p>
            <h2>Waar ik in {content.name} kom</h2>
            <p className="lead" style={{ marginTop: 24 }}>{content.neighborhoodText}</p>
          </div>
          <div data-reveal>
            <ul className="neighborhoods" aria-label={`Gebieden in ${content.name}`}>
              {content.neighborhoods.map((neighborhood) => <li key={neighborhood}>{neighborhood}</li>)}
            </ul>
            <div className="fact-panel" style={{ marginTop: 32 }}>
              <MapPin aria-hidden="true" size={28} style={{ color: "var(--color-primary)" }} />
              <p><strong>Twijfel je over jouw adres?</strong><br />Vermeld je postcode en woonplaats in het contactformulier. Dan krijg je een persoonlijk antwoord over de mogelijkheden.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container content-grid">
          <div className="content-grid__sticky"><SectionHeading eyebrow={`Vragen uit ${content.name}`} title="Goed voorbereid op jullie kraamweek" text="Heb je een andere vraag? Neem gerust persoonlijk contact op." /></div>
          <FaqList items={content.faqs} />
        </div>
      </section>
      <CtaBand place={content.name} />
    </>
  );
}
