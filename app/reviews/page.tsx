import type { Metadata } from "next";
import { Star } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { webPageSchema } from "@/lib/structuredData";
import { StructuredData } from "@/components/StructuredData";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { ElfsightReviews } from "@/components/ElfsightReviews";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = createMetadata({
  title: "Ervaringen en Google reviews | Kraamzorg ’t Gouden Wiegje",
  description: "Lees ervaringen van gezinnen die kraamzorg van Vania bij ’t Gouden Wiegje hebben ontvangen. Actuele Google reviews op één plek.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <StructuredData data={{ "@context": "https://schema.org", ...webPageSchema("Ervaringen van gezinnen", "Actuele reviews over kraamzorg door Vania.", "/reviews") }} />
      <Breadcrumbs items={[{ name: "Reviews", path: "/reviews" }]} />
      <PageHero compact eyebrow="Ervaringen van gezinnen" title={<>Hun woorden geven <span className="gold">vertrouwen</span></>} text="De kraamweek is persoonlijk. Op deze pagina lees je de actuele Google reviews die via de reviewwidget worden geladen." />
      <section className="section section--white">
        <div className="container">
          <div className="google-rating" aria-label="Google-bedrijfsprofiel: 4,9 van 5 sterren op basis van 7 reviews">
            <div>
              <p className="eyebrow">Google-bedrijfsprofiel</p>
              <p className="google-rating__score"><strong>4,9</strong><span>van 5</span></p>
            </div>
            <div className="google-rating__details">
              <div className="google-rating__stars" aria-hidden="true">
                {Array.from({ length: 5 }, (_, index) => <Star key={index} size={23} fill="currentColor" strokeWidth={1.5} />)}
              </div>
              <p><strong>7 reviews</strong></p>
              <p>De door de opdrachtgever bevestigde cijfers van het Google-bedrijfsprofiel.</p>
            </div>
          </div>
          <div className="reviews-shell"><ElfsightReviews /></div>
          <p className="reviews-note">Hieronder laadt de Google Reviews-widget de bijbehorende beoordelingen. Het reviewaantal kan veranderen zodra er een nieuwe ervaring wordt toegevoegd.</p>
        </div>
      </section>
      <section className="section section--soft">
        <div className="container">
          <SectionHeading eyebrow="Waarom ervaringen helpen" title="Een keuze die goed moet voelen" text="Bij kraamzorg krijg je een zorgverlener in huis tijdens een kwetsbare periode. Ervaringen van andere gezinnen kunnen helpen om je een beeld te vormen." />
          <div className="review-reasons">
            <article className="review-reason" data-reveal><h3>Vertrouwen geven</h3><p>Andere ouders delen hoe zij de zorg, begeleiding en persoonlijke aanpak hebben ervaren.</p></article>
            <article className="review-reason" data-reveal><h3>Een beeld vormen</h3><p>Reviews geven een indruk, maar je eigen gevoel bij de kennismaking is minstens zo belangrijk.</p></article>
            <article className="review-reason" data-reveal><h3>Elkaar helpen</h3><p>Door ervaringen te delen helpen gezinnen elkaar bij een keuze die bij hen past.</p></article>
          </div>
        </div>
      </section>
      <CtaBand title="Wil je eerst zelf kennismaken?" text="Een review zegt veel, maar persoonlijk contact zegt vaak nog meer. Stel je vragen en ontdek of mijn aanpak bij jullie past." />
    </>
  );
}
