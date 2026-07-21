"use client";

import { useEffect, useState } from "react";
import { LogoMark } from "@/lib/icons";

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onLoad = () => setTimeout(() => setHidden(true), 500);
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }
    // Safety net in case the load event never fires as expected.
    const fallback = setTimeout(() => setHidden(true), 2500);
    return () => {
      window.removeEventListener("load", onLoad);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div id="preloader" aria-hidden="true" className={hidden ? "hide" : ""}>
      <div className="loader-mark">
        <LogoMark className="text-white" style={{ width: "56%", height: "56%" }} />
      </div>
      <div className="loader-bar">
        <span />
      </div>
      <p className="font-mono text-xs tracking-widest" style={{ color: "var(--text-soft)" }}>
        ЗАВАНТАЖЕННЯ...
      </p>
    </div>
  );
}
