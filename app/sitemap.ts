import type { MetadataRoute } from "next";
import { canonicalUrl } from "@/lib/siteConfig";

const paths = [
  "/",
  "/kraamzorg",
  "/werkgebied",
  "/kraamzorg-schiedam",
  "/kraamzorg-rotterdam",
  "/kraamzorg-vlaardingen",
  "/kraamzorg-spijkenisse",
  "/kraamzorg-hoek-van-holland",
  "/over-ons",
  "/reviews",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({
    url: canonicalUrl(path),
    lastModified: new Date("2026-11-08"),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/contact" || path === "/kraamzorg" ? 0.9 : 0.8,
  }));
}
