import { canonicalUrl, locations, siteConfig } from "./siteConfig";

export const organizationSchema = {
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  url: `${siteConfig.url}/`,
  logo: `${siteConfig.url}/images/icon.png`,
  email: siteConfig.email,
  telephone: siteConfig.phoneInternational,
  vatID: undefined,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phoneInternational,
    email: siteConfig.email,
    contactType: "customer service",
    availableLanguage: "Dutch",
  },
  areaServed: locations.map((location) => ({ "@type": "City", name: location.name })),
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: `${siteConfig.url}/`,
  name: siteConfig.name,
  inLanguage: "nl-NL",
  publisher: { "@id": `${siteConfig.url}/#organization` },
};

export function webPageSchema(title: string, description: string, path: string) {
  return {
    "@type": "WebPage",
    "@id": `${canonicalUrl(path)}#webpage`,
    url: canonicalUrl(path),
    name: title,
    description,
    inLanguage: "nl-NL",
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#organization` },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  };
}

export function serviceSchema(place?: string) {
  return {
    "@type": "Service",
    name: place ? `Persoonlijke kraamzorg in ${place}` : "Persoonlijke kraamzorg",
    serviceType: "Kraamzorg",
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: place
      ? { "@type": "City", name: place }
      : locations.map((location) => ({ "@type": "City", name: location.name })),
  };
}
