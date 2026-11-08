import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Download, HeartHandshake, House, Users } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";
import { webPageSchema } from "@/lib/structuredData";
import { StructuredData } from "@/components/StructuredData";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { TrackedLink } from "@/components/TrackedLink";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = createMetadata({
  title: "Over Vania | Jouw persoonlijke kraamverzorgende",
  description:
    "Maak kennis met Vania: kraamverzorgende sinds 2015, moeder en oma. Persoonlijke, multiculturele en deskundige kraamzorg vanuit Schiedam.",
  path: "/over-ons",
});

const certificates = [
  { title: "Professionele Communicatie", detail: "KCKZ, Geboortezorg Academie, 28 januari 2026", href: "/certificaten/Professionele-Communicatie-KCKZ.pdf" },
  { title: "Borstvoeding na een borstvergroting", detail: "KCKZ, 24 februari 2026", href: "/certificaten/Borstvoeding-na-borstvergroting.pdf" },
  { title: "Aangeboren slokdarmafwijkingen TOF", detail: "KCKZ, 16 september 2025", href: "/certificaten/Aangeboren-slokdarmafwijkingen-TOF.pdf" },
  { title: "Fysiologie en pathologie van de partus / Acute verloskunde", detail: "Emergo Opleidingen, 18 september 2025", href: "/certificaten/Fysiologie-pathologie-partus-acute-verloskunde.pdf" },
  { title: "Keurmerk ZZP’er Zorg, niveau 3", detail: "Kiwa, registratie 30510. Certificaat geldig tot 1 september 2026", href: "/certificaten/Kiwa-Keurmerk-ZZP-er-Zorg.pdf" },
  { title: "Kinder EHBO en reanimatie", detail: "6 november 2023", href: "/certificaten/Kinder-EHBO-en-reanimatie.pdf" },
];

export default function AboutPage() {
  const personSchema = {
    "@type": "Person",
    name: "Vania Dos Santos",
    jobTitle: "Kraamverzorgende",
    worksFor: { "@id": `${siteConfig.url}/#organization` },
    knowsLanguage: "nl",
  };
  return (
    <>
      <StructuredData data={{ "@context": "https://schema.org", "@graph": [webPageSchema("Over Vania", "Maak kennis met jouw persoonlijke kraamverzorgende.", "/over-ons"), personSchema] }} />
      <Breadcrumbs items={[{ name: "Over Vania", path: "/over-ons" }]} />
      <PageHero eyebrow="Het vertrouwde gezicht achter ’t Gouden Wiegje" title={<>Warmte, ervaring en een <span className="gold">luisterend oor</span></>} text="Ik ben Vania. Als zelfstandig kraamverzorgende begeleid ik gezinnen met persoonlijke aandacht, vakkennis en oprechte betrokkenheid." image={{ src: "/images/vania-hero.jpg", alt: "Kraamverzorgende Vania tijdens de verzorging van een baby", width: 1178, height: 1513 }}>
        <TrackedLink href="/contact" event="care_request_click" eventLabel="Over Vania" className="button">Maak kennis met mij <ArrowRight aria-hidden="true" size={18} /></TrackedLink>
      </PageHero>

      <section className="section section--white">
        <div className="container content-grid">
          <div className="content-grid__sticky" data-reveal>
            <p className="eyebrow">Mijn verhaal</p>
            <h2>Zorgen zit in wie ik ben</h2>
          </div>
          <div className="prose" data-reveal>
            <p className="lead">Een kindje verwelkomen verandert alles. Het brengt liefde en verwondering, maar soms ook onzekerheid. Juist dan wil je iemand naast je die écht de tijd neemt.</p>
            <p>Ik ben trotse moeder van drie kinderen en oma van twee kleinkinderen. Ik ben geboren in Kaapverdië en opgegroeid in Rotterdam. Daar heb ik geleerd hoe belangrijk warmte, verbondenheid en zorgzaamheid binnen een gezin zijn.</p>
            <p>Mijn liefde voor baby’s begon al vroeg. Toen ik in 2015 aan mijn opleiding tot kraamverzorgende begon, voelde het alsof alles op zijn plek viel. Jarenlang werkte ik met veel plezier in loondienst, maar ik merkte dat ik gezinnen nog persoonlijker wilde begeleiden.</p>
            <p>Daarom ben ik voor mezelf begonnen met Kraamzorg ’t Gouden Wiegje, vanuit mijn thuisbasis in Schiedam. Zo kan ik de tijd nemen voor elk gezin, zonder haast en met volledige aandacht voor wat jullie nodig hebben.</p>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="Mijn manier van zorgen" title="Betrokken, zonder de regie uit handen te nemen" />
          <div className="principles">
            <article className="principle" data-reveal><HeartHandshake aria-hidden="true" size={28} /><h3>Persoonlijke aandacht</h3><p>Je krijgt één vaste kraamverzorgende die jullie leert kennen. Ik luister naar jullie wensen en pas mijn begeleiding daarop aan.</p></article>
            <article className="principle" data-reveal><Users aria-hidden="true" size={28} /><h3>Oog voor iedereen</h3><p>Niet alleen moeder en baby tellen. Ook je partner en eventuele andere kinderen mogen wennen, vragen stellen en meedoen.</p></article>
            <article className="principle" data-reveal><House aria-hidden="true" size={28} /><h3>Vertrouwd met verschillende culturen</h3><p>Mijn Kaapverdische achtergrond en Rotterdamse opvoeding helpen me om open en respectvol aan te sluiten bij verschillende gewoontes.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container editorial-split editorial-split--reverse">
          <div className="editorial-split__media" data-reveal>
            <div className="image-frame"><Image src="/images/borstvoeding-voorlichting.jpg" alt="Gehaakte borstmodellen die Vania gebruikt bij voorlichting over borstvoeding" width={1178} height={1001} sizes="(max-width: 800px) 100vw, 44vw" /></div>
            <p className="photo-note">Voorlichting over voeding en verzorging gebeurt rustig, praktisch en zonder oordeel.</p>
          </div>
          <div className="editorial-split__copy" data-reveal>
            <p className="eyebrow">Blijvend leren</p>
            <h2>Vakkennis die meebeweegt met de zorg</h2>
            <p>Goede kraamzorg vraagt om ervaring én actuele kennis. Daarom blijf ik mij scholen op onderwerpen zoals communicatie, borstvoeding, acute verloskunde en bijzondere medische situaties.</p>
            <p>Deze kennis gebruik ik om zorgvuldig te observeren, duidelijk voor te lichten en tijdig met andere zorgverleners af te stemmen wanneer dat nodig is.</p>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container content-grid">
          <div className="content-grid__sticky"><SectionHeading eyebrow="Scholing en certificaten" title="Documenten om rustig te bekijken" text="Hier vind je de aangeleverde certificaten. Elk document opent in een nieuw venster." /></div>
          <div data-reveal>
            <div className="certificate-list">
              {certificates.map((certificate) => (
                <article className="certificate" key={certificate.title}>
                  <div><h3>{certificate.title}</h3><p>{certificate.detail}</p></div>
                  <a href={certificate.href} target="_blank" rel="noreferrer" aria-label={`Open certificaat ${certificate.title}`}><Download aria-hidden="true" size={21} /></a>
                </article>
              ))}
            </div>
            <p className="certificate-note">De actuele geldigheid van de Kiwa Keurmerkpas moet via de vermelde verificatiewijze van Kiwa worden gecontroleerd. Het aangeleverde certificaat heeft een geldigheid tot 1 september 2026.</p>
          </div>
        </div>
      </section>
      <CtaBand title="Een goed gevoel begint met kennismaken" text="Vertel wat jij belangrijk vindt in de kraamweek. Ik vertel je graag hoe ik gezinnen begeleid en wat je van mij kunt verwachten." />
    </>
  );
}
