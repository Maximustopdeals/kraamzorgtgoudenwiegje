import Image from "next/image";
import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  text: string;
  children?: ReactNode;
  image?: {
    src: string | StaticImageData;
    alt: string;
    width: number;
    height: number;
  };
  compact?: boolean;
};

export function PageHero({ eyebrow, title, text, children, image, compact = false }: PageHeroProps) {
  return (
    <section className={`page-hero ${compact ? "page-hero--compact" : ""}`}>
      <div className={`container page-hero__grid ${image ? "page-hero__grid--image" : ""}`}>
        <div className="page-hero__copy" data-reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="page-hero__intro">{text}</p>
          {children && <div className="page-hero__actions">{children}</div>}
        </div>
        {image && (
          <div className="page-hero__media" data-reveal>
            <div className="image-frame image-frame--arch">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(max-width: 800px) 100vw, 42vw"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
