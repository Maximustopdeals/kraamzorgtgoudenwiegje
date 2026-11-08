"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Analytics } from "./Analytics";

type Consent = "accepted" | "declined" | null;

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const saved = window.localStorage.getItem("cookie-consent") as Consent;
      if (saved === "accepted" || saved === "declined") setConsent(saved);
      else setVisible(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const choose = useCallback((value: Exclude<Consent, null>) => {
    const previous = window.localStorage.getItem("cookie-consent");
    window.localStorage.setItem("cookie-consent", value);
    if (previous === "accepted" && value === "declined") {
      window.location.reload();
      return;
    }
    setConsent(value);
    setVisible(false);
  }, []);

  useEffect(() => {
    const reopen = () => setVisible(true);
    window.addEventListener("open-cookie-settings", reopen);
    return () => window.removeEventListener("open-cookie-settings", reopen);
  }, []);

  return (
    <>
      {consent === "accepted" && <Analytics />}
      {visible && (
        <aside className="cookie-banner" aria-label="Cookievoorkeuren">
          <div className="cookie-banner__copy">
            <strong>Jouw privacy, jouw keuze</strong>
            <p>
              We gebruiken alleen analyse cookies als je daarvoor toestemming geeft. Ze helpen ons te begrijpen hoe bezoekers de site gebruiken. Lees meer in onze <Link href="/privacy">privacyverklaring</Link>.
            </p>
          </div>
          <div className="cookie-banner__actions">
            <button type="button" className="button button--outline" onClick={() => choose("declined")}>
              Alleen noodzakelijk
            </button>
            <button type="button" className="button" onClick={() => choose("accepted")}>
              Analyse toestaan
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
