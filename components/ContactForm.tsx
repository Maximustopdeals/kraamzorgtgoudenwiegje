"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import { trackEvent } from "@/lib/analytics";

type FormStatus = { type: "idle" | "submitting" | "success" | "error"; message?: string };

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({ type: "idle" });

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ type: "submitting" });
    try {
      const response = await fetch(siteConfig.formspree, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Verzenden is niet gelukt");
      form.reset();
      setStatus({ type: "success", message: "Bedankt voor je aanvraag. Je bericht is verzonden. Vania neemt persoonlijk contact met je op." });
      trackEvent("form_submit", { form_name: "Contactformulier kraamzorg" });
    } catch {
      setStatus({ type: "error", message: `Het formulier kon niet worden verzonden. Probeer het opnieuw of mail naar ${siteConfig.email}.` });
    }
  }

  return (
    <form className="contact-form" action={siteConfig.formspree} method="POST" onSubmit={onSubmit}>
      <input type="hidden" name="_subject" value="Nieuwe kraamzorgaanvraag via de website" />
      <div className="form-honeypot" aria-hidden="true"><label>Laat dit veld leeg<input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="field">
        <label htmlFor="naam">Naam <span aria-hidden="true">*</span></label>
        <input id="naam" name="Naam" type="text" placeholder="Vul hier uw voor- en achternaam in" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="email">E-mail <span aria-hidden="true">*</span></label>
        <input id="email" name="E-mail" type="email" placeholder="Vul hier uw e-mailadres in" autoComplete="email" required />
      </div>
      <div className="field field--full">
        <label htmlFor="telefoon">Telefoon <span aria-hidden="true">*</span></label>
        <input id="telefoon" name="Telefoon" type="tel" placeholder="Vul hier uw telefoonnummer in" autoComplete="tel" required />
      </div>
      <div className="field field--full">
        <label htmlFor="postcode">Postcode en woonplaats <span aria-hidden="true">*</span></label>
        <input id="postcode" name="Postcode en woonplaats" type="text" placeholder="Vul hier uw postcode en woonplaats in" autoComplete="postal-code" required />
      </div>
      <div className="field">
        <label htmlFor="bevalling">Bevalling <span aria-hidden="true">*</span></label>
        <select id="bevalling" name="Bevalling" defaultValue="" required>
          <option value="" disabled>--- Selecteer keuze ---</option>
          <option value="Ziekenhuis (medische indicatie)">Ziekenhuis (medische indicatie)</option>
          <option value="Ziekenhuis (poliklinisch)">Ziekenhuis (poliklinisch)</option>
          <option value="Thuisbevalling">Thuisbevalling</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="verwacht">Baby verwacht op: <span aria-hidden="true">*</span></label>
        <input id="verwacht" name="Baby verwacht op" type="date" required />
      </div>
      <div className="field">
        <label htmlFor="verloskundige">Verloskundige (naam)</label>
        <input id="verloskundige" name="Verloskundige (naam)" type="text" />
      </div>
      <div className="field">
        <label htmlFor="zorgverzekeraar">Zorgverzekeraar</label>
        <input id="zorgverzekeraar" name="Zorgverzekeraar" type="text" />
      </div>
      <div className="field field--full">
        <label htmlFor="informatie">Aanvullende informatie</label>
        <textarea id="informatie" name="Aanvullende informatie" />
      </div>
      <div className="field field--full">
        <label htmlFor="gevonden">Hoe heeft u mij gevonden <span aria-hidden="true">*</span></label>
        <select id="gevonden" name="Hoe heeft u mij gevonden" defaultValue="" required>
          <option value="" disabled>--- Selecteer keuze ---</option>
          <option value="Google">Google</option>
          <option value="Instagram">Instagram</option>
          <option value="Kennissen / familie">Kennissen / familie</option>
          <option value="Anders">Anders</option>
        </select>
      </div>
      <p className="form-privacy">Je gegevens worden gebruikt om op je aanvraag te reageren. Lees hoe ik met persoonsgegevens omga in de <Link href="/privacy">privacyverklaring</Link>.</p>
      {status.message && <div className={`form-status form-status--${status.type}`} role={status.type === "error" ? "alert" : "status"} aria-live="polite">{status.message}</div>}
      <div className="form-actions">
        <button type="submit" className="button" disabled={status.type === "submitting"}>
          {status.type === "submitting" ? "Versturen..." : "Verzend"} <Send aria-hidden="true" size={17} />
        </button>
      </div>
    </form>
  );
}
