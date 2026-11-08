"use client";

export function CookieSettingsButton() {
  return (
    <button type="button" className="footer-button" onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}>
      Cookievoorkeuren
    </button>
  );
}
