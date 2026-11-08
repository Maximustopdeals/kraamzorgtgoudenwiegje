export const siteConfig = {
  name: "Kraamzorg ’t Gouden Wiegje",
  shortName: "’t Gouden Wiegje",
  url: "https://kraamzorgtgoudenwiegje.nl",
  description:
    "Persoonlijke kraamzorg door Vania in Schiedam, Rotterdam, Vlaardingen, Spijkenisse en Hoek van Holland.",
  phoneDisplay: "06 28 98 39 82",
  phoneInternational: "+31628983982",
  email: "info@kraamzorgtgoudenwiegje.nl",
  kvk: "93546890",
  formspree: "https://formspree.io/f/xdeevbjl",
  gtm: "GTM-5LTMFZQX",
  ga4: "G-9V0C2JMFQ2",
};

export const whatsappUrl = `https://wa.me/31628983982?text=${encodeURIComponent(
  "Hallo Vania, ik wil graag meer weten over kraamzorg via ’t Gouden Wiegje.",
)}`;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Kraamzorg", href: "/kraamzorg" },
  { label: "Werkgebied", href: "/werkgebied" },
  { label: "Over Vania", href: "/over-ons" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export const locations = [
  { name: "Schiedam", href: "/kraamzorg-schiedam" },
  { name: "Rotterdam", href: "/kraamzorg-rotterdam" },
  { name: "Vlaardingen", href: "/kraamzorg-vlaardingen" },
  { name: "Spijkenisse", href: "/kraamzorg-spijkenisse" },
  { name: "Hoek van Holland", href: "/kraamzorg-hoek-van-holland" },
];

export function canonicalUrl(path: string) {
  if (path === "/") return `${siteConfig.url}/`;
  return `${siteConfig.url}/${path.replace(/^\/|\/$/g, "")}/`;
}
