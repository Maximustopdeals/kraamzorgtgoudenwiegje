import type { Metadata } from "next";
import { canonicalUrl, siteConfig } from "./siteConfig";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function createMetadata({ title, description, path }: MetadataInput): Metadata {
  const canonical = canonicalUrl(path);
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "nl_NL",
      url: canonical,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: "/images/vania-hero.jpg",
          width: 1178,
          height: 1513,
          alt: "Vania verzorgt een pasgeboren baby",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/vania-hero.jpg"],
    },
    robots: { index: true, follow: true },
  };
}
