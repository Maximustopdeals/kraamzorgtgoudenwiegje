import type { Metadata } from "next";
import { LocationPage } from "@/components/LocationPage";
import { createMetadata } from "@/lib/metadata";
import { locationContent } from "@/lib/locationContent";

const content = locationContent.spijkenisse;
export const metadata: Metadata = createMetadata({ title: content.seoTitle, description: content.seoDescription, path: content.path });
export default function Page() { return <LocationPage content={content} />; }
