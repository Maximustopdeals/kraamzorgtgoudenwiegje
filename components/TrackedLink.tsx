"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

type TrackedLinkProps = {
  href: string;
  event: AnalyticsEvent;
  eventLabel?: string;
  className?: string;
  children: ReactNode;
  external?: boolean;
  ariaLabel?: string;
  onNavigate?: () => void;
};

export function TrackedLink({
  href,
  event,
  eventLabel,
  className,
  children,
  external = false,
  ariaLabel,
  onNavigate,
}: TrackedLinkProps) {
  const onClick = () => {
    trackEvent(event, eventLabel ? { link_label: eventLabel } : {});
    onNavigate?.();
  };
  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a
        href={href}
        className={className}
        onClick={onClick}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
