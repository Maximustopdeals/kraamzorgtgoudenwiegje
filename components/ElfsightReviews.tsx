"use client";

import { useEffect } from "react";

export function ElfsightReviews() {
  useEffect(() => {
    if (document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) return;
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <div className="elfsight-app-ca1aa1f8-602e-4713-ae36-6f7446618894" data-elfsight-app-lazy />;
}
