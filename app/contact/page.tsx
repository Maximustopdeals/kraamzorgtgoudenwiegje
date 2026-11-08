import type { Metadata } from "next";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { createMetadata } from "@/lib/metadata";
import { siteConfig, whatsappUrl } from "@/lib/siteConfig";
import { webPageSchema } from "@/lib/structuredData";
import { StructuredData } from "@/components/StructuredData";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { TrackedLink } from "@/components/TrackedLink";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = createMetadata({
  title: "Contact en kraamzorg aanvragen | Vania ’t Gouden Wiegje",
  description: "Vraag kraamzorg aan of bespreek je wensen met Vania. Vul het uitgebreide formulier in, bel of stuur een persoonlijk WhatsApp-bericht.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <StructuredData data={{ "@context": "https://schema.org", ...webPageSchema("Contact en kraamzorg aanvragen", "Neem persoonlijk contact op met Vania.", "/contact") }} />
      <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
      <PageHero compact eyebrow="Neem vrijblijvend contact op" title={<>Vertel mij wat je <span className="gold">nodig hebt</span></>} text="Wil je kraamzorg aanvragen, eerst kennismaken of iets vragen? Kies de manier die voor jou het fijnst voelt. Je krijgt een persoonlijk antwoord van mij, Vania." />

      <section className="section section--white">
        <div className="container contact-layout">
          <aside data-reveal>
            <p className="eyebrow">Direct contact</p>
            <h2>Bel, app of mail mij</h2>
            <p className="lead" style={{ marginTop: 20 }}>Heb je een korte vraag of wil je liever eerst even praten? Dat kan natuurlijk ook.</p>
            <div className="contact-methods" style={{ marginTop: 32 }}>
              <article className="contact-method">
                <MessageCircle aria-hidden="true" size={26} />
                <div><h2>WhatsApp</h2><p>Snel en persoonlijk een bericht sturen.</p><TrackedLink href={whatsappUrl} event="whatsapp_click" eventLabel="Contactpagina" external>{siteConfig.phoneDisplay}</TrackedLink></div>
              </article>
              <article className="contact-method">
                <Phone aria-hidden="true" size={26} />
                <div><h2>Bellen</h2><p>Direct je vraag aan mij stellen.</p><TrackedLink href={`tel:${siteConfig.phoneInternational}`} event="phone_click" eventLabel="Contactpagina">{siteConfig.phoneDisplay}</TrackedLink></div>
              </article>
              <article className="contact-method">
                <Mail aria-hidden="true" size={26} />
                <div><h2>E-mail</h2><p>Voor uitgebreide vragen of het sturen van documenten.</p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
              </article>
            </div>
          </aside>
          <div className="contact-form-wrap" data-reveal>
            <h2>Contactformulier</h2>
            <p>Velden met * zijn verplicht. Vermeld je uitgerekende datum en woonplaats om je aanvraag goed te bespreken.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
