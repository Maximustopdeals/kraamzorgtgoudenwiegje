"use client";

import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { siteConfig, whatsappUrl } from "@/lib/siteConfig";
import { trackEvent } from "@/lib/analytics";

export function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button
        type="button"
        className={`floating-button back-to-top ${showTop ? "is-visible" : ""}`}
        aria-label="Terug naar boven"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        tabIndex={showTop ? 0 : -1}
      >
        <ArrowUp aria-hidden="true" size={21} />
      </button>
      <a
        className="floating-button whatsapp-button"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Stuur Vania een WhatsApp-bericht via ${siteConfig.phoneDisplay}`}
        onClick={() => trackEvent("whatsapp_click", { link_label: "Zwevende knop" })}
      >
        <MessageCircle aria-hidden="true" size={24} />
        <span>App Vania</span>
      </a>
    </>
  );
}
