"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/lib/siteConfig";
import { TrackedLink } from "./TrackedLink";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (event.key === "Tab") {
        const focusable = Array.from(
          menuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [],
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
    window.requestAnimationFrame(() => toggleRef.current?.focus());
  }

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand" aria-label="’t Gouden Wiegje, Kraamzorg door Vania, naar home">
          <Image src="/images/logo-gouden-wiegje.png" alt="" width={56} height={62} priority />
          <span className="brand__text">
            <strong>’t Gouden Wiegje</strong>
            <span>Kraamzorg door Vania</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Hoofdnavigatie">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? "active" : undefined}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <TrackedLink href="/contact" event="care_request_click" eventLabel="Navigatie" className="button button--small header-cta">
          Aanvragen <ArrowUpRight aria-hidden="true" size={17} />
        </TrackedLink>
        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-label="Menu openen"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <Menu aria-hidden="true" size={25} />
        </button>
      </div>
      {open && (
        <div className="menu-layer">
          <button className="menu-backdrop" type="button" aria-label="Menu sluiten" onClick={closeMenu} />
          <div className="mobile-menu" id="mobile-menu" ref={menuRef} role="dialog" aria-modal="true" aria-label="Navigatiemenu">
            <div className="mobile-menu__top">
              <span className="mobile-menu__label">Waar wil je naartoe?</span>
              <button type="button" className="menu-toggle" aria-label="Menu sluiten" onClick={closeMenu}>
                <X aria-hidden="true" size={24} />
              </button>
            </div>
            <nav aria-label="Mobiele navigatie">
              {navigation.map((item, index) => (
                <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpen(false)}>
                  <span>{item.label}</span>
                  <span aria-hidden="true">0{index + 1}</span>
                </Link>
              ))}
            </nav>
            <TrackedLink href="/contact" event="care_request_click" eventLabel="Mobiel menu" className="button button--gold" onNavigate={() => setOpen(false)}>
              Kraamzorg aanvragen <ArrowUpRight aria-hidden="true" size={18} />
            </TrackedLink>
            <p>Persoonlijke zorg van één vertrouwd gezicht, bij jou thuis.</p>
          </div>
        </div>
      )}
    </header>
  );
}
