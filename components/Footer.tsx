import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { locations, navigation, siteConfig, whatsappUrl } from "@/lib/siteConfig";
import { TrackedLink } from "./TrackedLink";
import { CookieSettingsButton } from "./CookieSettingsButton";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand brand--footer" aria-label="’t Gouden Wiegje, Kraamzorg door Vania, naar homepage">
            <Image src="/images/logo-gouden-wiegje.png" alt="" width={72} height={78} />
            <span className="brand__text">
              <strong>’t Gouden Wiegje</strong>
              <span>Kraamzorg door Vania</span>
            </span>
          </Link>
          <p>Warme, deskundige kraamzorg met één vertrouwd gezicht tijdens jullie hele kraamweek.</p>
          <p className="footer-kvk">KVK {siteConfig.kvk}</p>
        </div>
        <div className="footer-column">
          <h2>Ontdek</h2>
          {navigation.slice(1).map((item) => (
            <Link key={item.href} href={item.href}>{item.label}</Link>
          ))}
        </div>
        <div className="footer-column">
          <h2>Werkgebied</h2>
          {locations.map((location) => (
            <Link key={location.href} href={location.href}>{location.name}</Link>
          ))}
        </div>
        <div className="footer-column footer-contact">
          <h2>Persoonlijk contact</h2>
          <TrackedLink href={`tel:${siteConfig.phoneInternational}`} event="phone_click" eventLabel="Footer">
            <Phone aria-hidden="true" size={17} /> {siteConfig.phoneDisplay}
          </TrackedLink>
          <a href={`mailto:${siteConfig.email}`}><Mail aria-hidden="true" size={17} /> {siteConfig.email}</a>
          <TrackedLink href={whatsappUrl} event="whatsapp_click" eventLabel="Footer" external>
            WhatsApp <ArrowUpRight aria-hidden="true" size={17} />
          </TrackedLink>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Kraamzorg ’t Gouden Wiegje</p>
        <div>
          <Link href="/privacy">Privacy</Link>
          <a href="/docs/Algemene-voorwaarden.docx">Algemene voorwaarden</a>
          <CookieSettingsButton />
        </div>
      </div>
    </footer>
  );
}
