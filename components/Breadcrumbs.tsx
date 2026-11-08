import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { StructuredData } from "./StructuredData";
import { breadcrumbSchema } from "@/lib/structuredData";

type BreadcrumbsProps = {
  items: { name: string; path: string }[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <StructuredData data={breadcrumbSchema(allItems)} />
      <nav className="breadcrumbs container" aria-label="Kruimelpad">
        <ol>
          {allItems.map((item, index) => (
            <li key={item.path}>
              {index > 0 && <ChevronRight aria-hidden="true" size={14} />}
              {index === allItems.length - 1 ? (
                <span aria-current="page">{item.name}</span>
              ) : (
                <Link href={item.path}>{item.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
