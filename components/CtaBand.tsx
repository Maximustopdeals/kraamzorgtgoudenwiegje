import { ArrowRight, Phone } from "lucide-react";
import { TrackedLink } from "./TrackedLink";
import { siteConfig } from "@/lib/siteConfig";

type CtaBandProps = {
  title?: string;
  text?: string;
  place?: string;
};

export function CtaBand({
  title = "Zullen we kennismaken?",
  text = "Vertel wanneer je baby wordt verwacht en waar je woont. Dan bespreken we jouw wensen en mijn beschikbaarheid rond jullie uitgerekende datum.",
  place,
}: CtaBandProps) {
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container cta-band__inner" data-reveal>
        <div>
          <p className="eyebrow eyebrow--light">Persoonlijk contact</p>
          <h2 id="cta-title">{place ? `Kraamzorg in ${place} bespreken?` : title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-band__actions">
          <TrackedLink href="/contact" event="care_request_click" eventLabel={place || "Algemeen"} className="button button--gold">
            Kraamzorg aanvragen <ArrowRight aria-hidden="true" size={18} />
          </TrackedLink>
          <TrackedLink href={`tel:${siteConfig.phoneInternational}`} event="phone_click" eventLabel="CTA" className="text-link text-link--light">
            <Phone aria-hidden="true" size={18} /> Bel {siteConfig.phoneDisplay}
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
