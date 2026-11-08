import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Baby, HeartHandshake, House, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { locations, siteConfig } from "@/lib/siteConfig";
import { serviceSchema, webPageSchema } from "@/lib/structuredData";
import { StructuredData } from "@/components/StructuredData";
import { TrackedLink } from "@/components/TrackedLink";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = createMetadata({
  title: "Kraamzorg in Schiedam en omgeving | Persoonlijk door Vania",
  description:
    "Persoonlijke kraamzorg door Vania in Schiedam en omgeving. Eén vaste kraamverzorgende, aandacht voor herstel, voeding en het hele gezin.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <StructuredData data={{ "@context": "https://schema.org", "@graph": [webPageSchema("Kraamzorg in Schiedam en omgeving", siteConfig.description, "/"), serviceSchema()] }} />
      <section className="home-hero">
        <div className="container home-hero__grid">
          <div className="home-hero__copy">
            <p className="eyebrow">Kraamzorg in Schiedam en omgeving</p>
            <h1>Een zachte start. <em>Samen met Vania.</em></h1>
            <p className="home-hero__intro">
              De eerste dagen met je baby zijn bijzonder en soms overweldigend. Ik kom bij jullie thuis met deskundige zorg, praktische hulp en een rustige, vertrouwde aanpak.
            </p>
            <div className="home-hero__actions">
              <TrackedLink href="/contact" event="care_request_click" eventLabel="Home hero" className="button">
                Bespreek je kraamzorg <ArrowRight aria-hidden="true" size={18} />
              </TrackedLink>
              <TrackedLink href={`tel:${siteConfig.phoneInternational}`} event="phone_click" eventLabel="Home hero" className="text-link">
                <Phone aria-hidden="true" size={18} /> Bel Vania direct
              </TrackedLink>
            </div>
            <p className="home-hero__note"><HeartHandshake aria-hidden="true" size={20} /> Eén vaste kraamverzorgende voor jullie hele kraamweek</p>
          </div>
          <div className="home-hero__media">
            <div className="image-frame image-frame--arch">
              <Image
                src="/images/vania-hero.jpg"
                alt="Vania verzorgt zorgzaam een pasgeboren baby"
                width={1178}
                height={1513}
                sizes="(max-width: 800px) 92vw, 40vw"
                priority
              />
            </div>
            <div className="hero-caption">
              <strong>Van harte gefeliciteerd</strong>
              <span>Een nieuwe periode vol liefde, leren en samen ontdekken.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Waar je op kunt rekenen">
        <div className="container trust-strip__inner">
          <div className="trust-item"><HeartHandshake aria-hidden="true" size={28} /><div><strong>Persoonlijk</strong><span>Dezelfde vertrouwde zorgverlener</span></div></div>
          <div className="trust-item"><ShieldCheck aria-hidden="true" size={28} /><div><strong>Ervaren sinds 2015</strong><span>Vakbekwaam en blijvend geschoold</span></div></div>
          <div className="trust-item"><House aria-hidden="true" size={28} /><div><strong>Bij jullie thuis</strong><span>In Schiedam en de omliggende regio</span></div></div>
        </div>
      </section>

      <section className="section">
        <div className="container editorial-split">
          <div className="editorial-split__media editorial-split__media--portrait" data-reveal>
            <div className="image-frame">
              <Image src="/images/vania-babyzorg.jpg" alt="Vania helpt bij de dagelijkse verzorging van een baby" width={1178} height={895} sizes="(max-width: 800px) 100vw, 43vw" />
            </div>
          </div>
          <div className="editorial-split__copy" data-reveal>
            <p className="eyebrow">Jullie kraamweek</p>
            <h2>Tijd om te herstellen. Ruimte om te leren.</h2>
            <p>
              Na de geboorte verandert er veel in korte tijd. Ik houd zorgvuldig toezicht op jou en je baby, help bij voeding en verzorging en beantwoord de vragen die onderweg opkomen.
            </p>
            <p>
              Niets hoeft meteen perfect. Samen ontdekken we wat voor jullie werkt, zodat je aan het einde van de kraamweek met meer vertrouwen zelf verder kunt.
            </p>
            <Link href="/kraamzorg" className="arrow-link">Wat je van mij kunt verwachten <ArrowRight aria-hidden="true" size={19} /></Link>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="Zorg die bij jullie past" title="Kleinschalig in organisatie. Groot in aandacht." text="Je hoeft niet opnieuw te beginnen bij elk bezoek. Ik leer jullie gezin kennen en stem mijn zorg af op jullie situatie, wensen en tempo." />
          <div className="principles">
            <article className="principle" data-reveal><HeartHandshake aria-hidden="true" size={28} /><h3>Eén vertrouwd gezicht</h3><p>Ik ben er tijdens de hele kraamweek voor jou, je baby en je gezin. Dat geeft rust en maakt de begeleiding persoonlijk.</p></article>
            <article className="principle" data-reveal><Baby aria-hidden="true" size={28} /><h3>Deskundige begeleiding</h3><p>Van dagelijkse controles tot voeding en babyverzorging. Je krijgt duidelijke uitleg zonder ingewikkelde termen.</p></article>
            <article className="principle" data-reveal><Sparkles aria-hidden="true" size={28} /><h3>Aandacht voor jullie ritme</h3><p>Ieder gezin is anders. We zoeken samen naar een fijn ritme, met ruimte voor herstel, vragen en alle eerste momenten.</p></article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Zo regel je kraamzorg" title="Van eerste contact tot een vertrouwde start" />
          <div className="steps">
            <article className="step" data-reveal><span className="step__number">01</span><h3>Vertel je verwachte datum</h3><p>Neem contact op via het formulier, telefonisch of met WhatsApp. Zo kunnen we de beschikbaarheid rond je bevalling bespreken.</p></article>
            <article className="step" data-reveal><span className="step__number">02</span><h3>We maken kennis</h3><p>Tijdens een persoonlijke kennismaking bespreken we jullie wensen, de zwangerschap en wat jullie van de kraamweek verwachten.</p></article>
            <article className="step" data-reveal><span className="step__number">03</span><h3>Ik ben er voor jullie</h3><p>Na de bevalling begeleid ik jullie thuis. Met zorg voor moeder en baby, praktische ondersteuning en aandacht voor het hele gezin.</p></article>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container editorial-split">
          <div data-reveal>
            <SectionHeading eyebrow="Dichtbij huis" title="Waar kom ik bij jullie?" text="Mijn thuisbasis is Schiedam. Daarnaast werk ik in Rotterdam, Vlaardingen, Spijkenisse en Hoek van Holland. Vraag gerust naar de mogelijkheden voor jouw woonplaats." />
            <Link href="/werkgebied" className="arrow-link">Bekijk het hele werkgebied <ArrowRight aria-hidden="true" size={19} /></Link>
          </div>
          <div className="location-list" data-reveal>
            {locations.map((location) => (
              <Link key={location.href} href={location.href} className="location-link">
                <span className="location-link__name">{location.name}</span><ArrowRight aria-hidden="true" size={23} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
