"use client";

import { useEffect, useState } from "react";
import { LogoMark } from "@/lib/icons";

const NAV_LINKS = [
  { href: "#home", label: "Головна" },
  { href: "#portfolio", label: "Портфоліо" },
  { href: "#services", label: "Послуги" },
  { href: "#about", label: "Про нас" },
  { href: "#testimonials", label: "Відгуки" },
  { href: "#contact", label: "Контакти" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    setDark(isDark);
  };

  return (
    <header id="site-header" className={`fixed top-0 inset-x-0 z-50 ${scrolled ? "scrolled" : ""}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[72px]">
          <a href="#home" className="flex items-center gap-2 group" aria-label="На головну">
            <span
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center text-white shrink-0"
              style={{ background: "linear-gradient(135deg,var(--accent),var(--accent-light))" }}
            >
              <LogoMark className="w-[62%] h-[62%]" />
            </span>
            <span className="font-display font-bold text-[15px] sm:text-[17px] tracking-tight">MaSayt</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8 font-medium text-[15px]" aria-label="Основна навігація">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="opacity-80 hover:opacity-100 transition">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              id="theme-toggle"
              className="theme-toggle-track"
              role="switch"
              aria-checked={dark}
              aria-label="Перемкнути тему"
              onClick={toggleTheme}
            >
              <span className="theme-toggle-dot">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                </svg>
              </span>
            </button>

            <a
              href="#contact"
              className="btn-press hidden md:inline-flex items-center gap-2 font-medium text-[14px] text-white px-5 py-2.5 rounded-xl shadow-sm hover:shadow-lg"
              style={{ background: "var(--accent)" }}
            >
              Замовити сайт
            </a>

            <button
              className="lg:hidden flex items-center gap-1.5 pl-3 pr-3.5 h-10 sm:h-11 rounded-xl font-medium text-sm btn-press"
              style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}
              aria-label={menuOpen ? "Закрити меню" : "Відкрити меню"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {menuOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
              <span>{menuOpen ? "Закрити" : "Меню"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden ${menuOpen ? "" : "hidden"} border-t`}
        style={{ borderColor: "var(--border)", background: "var(--bg)" }}
      >
        <nav className="flex flex-col px-5 py-4 gap-1 font-medium text-[16px]" aria-label="Мобільна навігація">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-3.5 px-3 rounded-lg"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 mt-2 border-t" style={{ borderColor: "var(--border)" }}>
            <a
              href="#contact"
              className="btn-press block text-center text-white px-5 py-4 rounded-xl font-semibold"
              style={{ background: "var(--accent)" }}
              onClick={() => setMenuOpen(false)}
            >
              Замовити сайт
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
