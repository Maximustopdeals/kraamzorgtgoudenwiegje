import type { Metadata } from "next";
import { Download } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/siteConfig";
import { webPageSchema } from "@/lib/structuredData";
import { StructuredData } from "@/components/StructuredData";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { CookieSettingsButton } from "@/components/CookieSettingsButton";

export const metadata: Metadata = createMetadata({
  title: "Privacy en cookies | Kraamzorg ’t Gouden Wiegje",
  description: "Lees hoe Kraamzorg ’t Gouden Wiegje omgaat met persoonsgegevens, het contactformulier, analyse cookies en jouw privacyrechten.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <StructuredData data={{ "@context": "https://schema.org", ...webPageSchema("Privacy en cookies", "Informatie over persoonsgegevens en cookies.", "/privacy") }} />
      <Breadcrumbs items={[{ name: "Privacy", path: "/privacy" }]} />
      <PageHero compact eyebrow="Jouw gegevens verdienen zorg" title="Privacy en cookies" text="Bij kraamzorg werk ik met persoonlijke en gevoelige informatie. Hier lees je waar je op kunt letten en waar je de volledige privacyverklaring vindt." />
      <section className="section section--white">
        <div className="container content-grid">
          <div className="content-grid__sticky">
            <p className="eyebrow">Documenten en instellingen</p>
            <h2>Transparant en persoonlijk</h2>
            <a className="button" style={{ marginTop: 28 }} href="/docs/Privacyverklaring-Kraamzorg-t-Gouden-Wiegje.pdf" target="_blank" rel="noreferrer"><Download aria-hidden="true" size={18} /> Volledige privacyverklaring</a>
          </div>
          <div className="prose">
            <h2 style={{ marginTop: 0 }}>Contactformulier</h2>
            <p>De gegevens die je in het contactformulier invult, worden gebruikt om op je vraag of aanvraag te reageren. Het formulier wordt via Formspree verwerkt en bezorgd. Deze website slaat de verzonden formuliergegevens niet in een eigen database op.</p>
            <p>Verstuur geen medische details die niet nodig zijn voor een eerste contact. Na je aanvraag bespreken we welke informatie voor de zorg wel nodig is.</p>
            <h2>Analyse en cookies</h2>
            <p>Google Tag Manager en Google Analytics 4 worden pas geladen nadat je toestemming hebt gegeven voor analyse cookies. Als je kiest voor “Alleen noodzakelijk”, worden deze analyse scripts niet door de website geladen.</p>
            <p>Je keuze wordt in je eigen browser bewaard. Je kunt die keuze hier opnieuw openen en aanpassen.</p>
            <CookieSettingsButton />
            <h2>Persoonsgegevens voor kraamzorg</h2>
            <p>Voor de zorgverlening kunnen contactgegevens, medische gegevens, gezinsgegevens en gegevens van je zorgverzekeraar nodig zijn. In de volledige privacyverklaring lees je over de doelen, bewaartermijnen, beveiliging en jouw rechten.</p>
            <h2>Vragen of verzoeken</h2>
            <p>Voor een vraag over privacy of een verzoek om inzage, correctie of verwijdering kun je mailen naar <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>. Sommige gegevens moeten wettelijk worden bewaard. In de privacyverklaring staat welke termijnen daarvoor gelden.</p>
          </div>
        </div>
      </section>
    </>
  );
}
