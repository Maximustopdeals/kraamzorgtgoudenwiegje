import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarCheck, House, MapPin, MessagesSquare } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { locations } from "@/lib/siteConfig";
import { serviceSchema, webPageSchema } from "@/lib/structuredData";
import { StructuredData } from "@/components/StructuredData";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { TrackedLink } from "@/components/TrackedLink";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = createMetadata({
  title: "Werkgebied kraamzorg | Schiedam, Rotterdam en omgeving",
  description:
    "Vania biedt persoonlijke kraamzorg in Schiedam, Rotterdam, Vlaardingen, Spijkenisse en Hoek van Holland. Bekijk de plaatsen en vraag naar beschikbaarheid.",
  path: "/werkgebied",
});

const descriptions: Record<string, string> = {
  Schiedam: "Mijn thuisbasis, met persoonlijke kraamzorg in alle delen van de stad.",
  Rotterdam: "Rustige begeleiding thuis, afgestemd op jouw gezin en jullie dagelijkse leven.",
  Vlaardingen: "Eén vertrouwd gezicht, met aandacht voor herstel, voeding en verzorging.",
  Spijkenisse: "Warme zorg en praktische structuur voor een rustige eerste week samen.",
  "Hoek van Holland": "Deskundige begeleiding bij jullie thuis, van de eerste controles tot praktische tips.",
};

export default function WorkAreaPage() {
  return (
    <>
      <StructuredData data={{ "@context": "https://schema.org", "@graph": [webPageSchema("Werkgebied kraamzorg", "De plaatsen waar Vania persoonlijke kraamzorg aanbiedt.", "/werkgebied"), serviceSchema()] }} />
      <Breadcrumbs items={[{ name: "Werkgebied", path: "/werkgebied" }]} />
      <PageHero eyebrow="Kraamzorg dichtbij huis" title={<>Vanuit Schiedam, <span className="gold">bij jullie thuis</span></>} text="Ik werk in Schiedam, Rotterdam, Vlaardingen, Spijkenisse en Hoek van Holland. Bekijk jouw plaats of neem contact op om de mogelijkheden voor jouw woonadres te bespreken.">
        <TrackedLink href="/contact" event="care_request_click" eventLabel="Werkgebied hero" className="button">Vraag naar beschikbaarheid <ArrowRight aria-hidden="true" size={18} /></TrackedLink>
      </PageHero>

      <section className="section section--white">
        <div className="container editorial-split">
          <div data-reveal>
            <SectionHeading eyebrow="Mijn werkgebied" title="Kies je woonplaats" text="Op iedere plaatspagina lees je hoe ik de kraamweek vormgeef en welke vragen gezinnen vaak hebben. De zorg blijft persoonlijk, waar je ook woont." />
          </div>
          <div className="location-list" data-reveal>
            {locations.map((location) => (
              <Link href={location.href} className="location-link" key={location.href}>
                <span><span className="location-link__name">{location.name}</span><span className="location-link__meta">{descriptions[location.name]}</span></span>
                <ArrowRight aria-hidden="true" size={24} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Zo werkt regionale kraamzorg" title="Eén aanpak, afgestemd op jullie thuis" text="Waar je in mijn werkgebied woont, verandert niets aan de persoonlijke begeleiding. We stemmen vooraf goed af wat je kunt verwachten." />
          <div className="principles">
            <article className="principle" data-reveal><MapPin aria-hidden="true" size={28} /><h3>Check je woonplaats</h3><p>Bekijk de plaatspagina of neem contact op als je twijfelt over jouw adres. Zo krijg je direct duidelijkheid.</p></article>
            <article className="principle" data-reveal><CalendarCheck aria-hidden="true" size={28} /><h3>Bespreek je datum</h3><p>Met je uitgerekende datum en woonplaats kijken we naar de beschikbaarheid rond de bevalling.</p></article>
            <article className="principle" data-reveal><House aria-hidden="true" size={28} /><h3>Ontvang zorg thuis</h3><p>Na de bevalling begeleid ik jou en je baby thuis, met aandacht voor jullie wensen en je gezin.</p></article>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container editorial-split">
          <div className="editorial-split__copy" data-reveal>
            <p className="eyebrow">Staat je wijk er niet bij?</p>
            <h2>Vraag het gewoon persoonlijk</h2>
            <p>De plaatspagina’s geven een overzicht van de gebieden die op de bestaande website worden genoemd. Ze zijn geen harde grens. Wil je weten wat er voor jouw adres mogelijk is? Stuur je postcode en woonplaats mee met je aanvraag.</p>
            <Link href="/contact" className="arrow-link">Neem contact op <ArrowRight aria-hidden="true" size={19} /></Link>
          </div>
          <div className="fact-panel" data-reveal>
            <MessagesSquare aria-hidden="true" size={30} style={{ color: "var(--color-primary)", marginBottom: 24 }} />
            <h2>Duidelijkheid vooraf</h2>
            <p>Vooraf weet je wie er bij je komt en wat je van de begeleiding kunt verwachten. Dat geeft rust.</p>
          </div>
        </div>
      </section>
      <CtaBand title="Woon je in de regio en verwacht je een baby?" />
    </>
  );
}
