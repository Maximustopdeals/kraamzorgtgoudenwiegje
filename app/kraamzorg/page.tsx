import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Bath, ClipboardCheck, HeartPulse, House, MessagesSquare } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { serviceSchema, webPageSchema } from "@/lib/structuredData";
import { StructuredData } from "@/components/StructuredData";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { TrackedLink } from "@/components/TrackedLink";
import { SectionHeading } from "@/components/SectionHeading";
import { FaqList } from "@/components/FaqList";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = createMetadata({
  title: "Wat is kraamzorg? | Persoonlijke begeleiding na de bevalling",
  description:
    "Ontdek wat Vania doet tijdens de kraamweek: controles van moeder en baby, hulp bij voeding en verzorging, praktische ondersteuning en persoonlijke begeleiding.",
  path: "/kraamzorg",
});

const careItems = [
  { icon: ClipboardCheck, title: "Dagelijkse controles", text: "Ik volg het herstel van de moeder en de gezondheid van de baby. Denk aan temperatuur, gewicht, navel, voeding en andere signalen die aandacht vragen." },
  { icon: HeartPulse, title: "Begeleiding bij voeding", text: "Of je kiest voor borstvoeding of flesvoeding, je krijgt geduldige en praktische ondersteuning die past bij jullie situatie." },
  { icon: Bath, title: "Verzorging van je baby", text: "We verschonen, badderen en verzorgen samen. Ik leg rustig uit wat ik doe, zodat je het stap voor stap zelfverzekerd zelf kunt." },
  { icon: MessagesSquare, title: "Uitleg en advies", text: "Je kunt al je vragen stellen over slapen, voeding, herstel en ritme. Ik geef duidelijke informatie en zeg eerlijk wanneer extra zorg nodig is." },
  { icon: House, title: "Praktische hulp in huis", text: "Waar het past bij de kraamzorg help ik met lichte huishoudelijke taken en houd ik aandacht voor je partner en eventuele andere kinderen." },
];

const faqs = [
  { question: "Wanneer vraag ik kraamzorg aan?", answer: "Regel kraamzorg bij voorkeur vroeg in je zwangerschap, tussen 8 en 16 weken. Neem ook daarna gerust contact op. Samen kijken we wat er rond jouw uitgerekende datum mogelijk is." },
  { question: "Hoeveel uur kraamzorg krijg ik?", answer: "Het aantal uren wordt bepaald aan de hand van het Landelijk Indicatieprotocol en jullie persoonlijke situatie. Gezinnen krijgen gemiddeld 24 tot 49 uur, verdeeld over de kraamperiode. De verloskundige en kraamverzorgende stemmen de zorg hierop af." },
  { question: "Komt er steeds dezelfde kraamverzorgende?", answer: "Bij ’t Gouden Wiegje ben ik, Vania, jullie vaste kraamverzorgende. Je weet dus wie bij jullie thuis komt en wie jullie wensen en situatie kent." },
  { question: "Kan ik eerst vrijblijvend kennismaken?", answer: "Ja. Een goed gevoel is belangrijk. Tijdens de kennismaking bespreken we jullie wensen en kun je al je vragen stellen voordat je een keuze maakt." },
  { question: "Hoe zit het met de vergoeding?", answer: "Kraamzorg wordt in Nederland vergoed vanuit de basisverzekering. Daarnaast geldt meestal een wettelijke eigen bijdrage per uur. Een aanvullende verzekering kan deze bijdrage geheel of gedeeltelijk vergoeden. Controleer dit bij je eigen zorgverzekeraar." },
  { question: "Help je ook bij een thuisbevalling?", answer: "Ja, ik geef assistentie bij een thuisbevalling in overleg met de verloskundige. Ook na een ziekenhuisbevalling begeleid ik jullie zodra jullie thuis zijn." },
];

export default function KraamzorgPage() {
  return (
    <>
      <StructuredData data={{ "@context": "https://schema.org", "@graph": [webPageSchema("Wat is kraamzorg?", "Persoonlijke begeleiding tijdens de kraamweek door Vania.", "/kraamzorg"), serviceSchema()] }} />
      <Breadcrumbs items={[{ name: "Kraamzorg", path: "/kraamzorg" }]} />
      <PageHero eyebrow="Persoonlijke zorg na de bevalling" title={<>Wat je van <span className="gold">kraamzorg</span> kunt verwachten</>} text="Tijdens de kraamweek kom ik bij jullie thuis. Ik zorg voor toezicht, begeleiding en praktische rust, zodat jij kunt herstellen en jullie je baby in alle rust leren kennen.">
        <TrackedLink href="/contact" event="care_request_click" eventLabel="Kraamzorg hero" className="button">Kraamzorg aanvragen <ArrowRight aria-hidden="true" size={18} /></TrackedLink>
        <Link href="#mijn-zorg" className="text-link">Bekijk mijn zorg</Link>
      </PageHero>

      <section className="section section--white" id="mijn-zorg">
        <div className="container content-grid">
          <div className="content-grid__sticky" data-reveal>
            <SectionHeading eyebrow="Zorg voor moeder en baby" title="Ik kijk, help en leg uit" text="De zorg sluit aan bij wat jullie op dat moment nodig hebben. Geen dag is hetzelfde en geen gezin is hetzelfde." />
          </div>
          <div className="care-list" data-reveal>
            {careItems.map(({ icon: Icon, title, text }) => (
              <article className="care-item" key={title}>
                <Icon aria-hidden="true" size={28} />
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container editorial-split">
          <div className="editorial-split__media" data-reveal>
            <div className="image-frame"><Image src="/images/vania-babyzorg.jpg" alt="Vania verschont en verzorgt een pasgeboren baby" width={1178} height={895} sizes="(max-width: 800px) 100vw, 44vw" /></div>
          </div>
          <div className="editorial-split__copy" data-reveal>
            <p className="eyebrow">Samen leren</p>
            <h2>Van onzekerheid naar eigen vertrouwen</h2>
            <p>Veel vragen ontstaan pas als je baby er is. Mag je baby al zolang slapen? Hoe weet je of de voeding goed gaat? Wat is normaal bij je herstel?</p>
            <p>Ik neem de tijd om te kijken wat jullie nodig hebben. Door samen te doen en rustig te oefenen, groeit jullie vertrouwen in de verzorging.</p>
            <div className="fact-panel" style={{ marginTop: 32 }}>
              <h2>Mijn doel</h2>
              <p>Dat jullie aan het einde van de week niet alleen goed zijn verzorgd, maar ook vertrouwen hebben in jezelf als ouders.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container editorial-split">
          <div data-reveal>
            <p className="eyebrow">Vergoeding en uren</p>
            <h2>Goed geregeld, duidelijk uitgelegd</h2>
            <p className="lead" style={{ marginTop: 24 }}>De precieze zorg en het aantal uren zijn afhankelijk van jullie situatie en worden volgens het Landelijk Indicatieprotocol bepaald.</p>
          </div>
          <div className="fact-panel" data-reveal>
            <h2>Wat is handig om te weten?</h2>
            <dl>
              <div><dt>Basisverzekering</dt><dd>Kraamzorg wordt uit de basisverzekering vergoed.</dd></div>
              <div><dt>Eigen bijdrage</dt><dd>Meestal betaal je een wettelijke eigen bijdrage per uur.</dd></div>
              <div><dt>Aanvullend verzekerd</dt><dd>Je aanvullende verzekering kan de eigen bijdrage mogelijk vergoeden.</dd></div>
              <div><dt>Jouw situatie</dt><dd>Vraag je zorgverzekeraar welke vergoeding en eigen bijdrage voor jou gelden.</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-grid">
          <div className="content-grid__sticky"><SectionHeading eyebrow="Veelgestelde vragen" title="Alvast een antwoord op je vragen" text="Staat jouw vraag er niet bij? Bel, app of mail me gerust." /></div>
          <FaqList items={faqs} />
        </div>
      </section>
      <CtaBand title="Wil je weten of ik beschikbaar ben?" />
    </>
  );
}
