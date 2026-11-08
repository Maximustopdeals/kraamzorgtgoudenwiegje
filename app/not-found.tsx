import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="not-found container">
      <p className="eyebrow">Pagina niet gevonden</p>
      <h1>Deze pagina is niet hier.</h1>
      <p>Misschien is de verwijzing verouderd. Via de homepage vind je snel alle informatie over kraamzorg door Vania.</p>
      <Link href="/" className="button"><ArrowLeft aria-hidden="true" size={18} /> Terug naar home</Link>
    </section>
  );
}
