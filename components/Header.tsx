"use client";

import { useEffect, useState } from "react";
import { LogoMark } from "@/lib/icons";

const NAV_LINKS = [
  { href: "#portfolio", label: "Роботи" },
  { href: "#services", label: "Напрямки" },
  { href: "#about", label: "Про нас" },
  { href: "#process", label: "Процес" },
  { href: "#contact", label: "Контакти" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item for the section currently in view.
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    setDark(isDark);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
      <div className={`max-w-6xl mx-auto px-4 sm:px-6 transition-all duration-500 ${scrolled ? "pt-2 sm:pt-3" : "pt-3 sm:pt-6"}`}>
        <div
          className={`pointer-events-auto flex items-center justify-between gap-3 rounded-2xl transition-all duration-500 ${
            scrolled
              ? "glass px-3 sm:px-4 h-14 sm:h-16 shadow-[0_8px_32px_-16px_rgba(15,23,42,.28)]"
              : "px-1 sm:px-2 h-14 sm:h-[68px] border border-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2.5 shrink-0" aria-label="MaSayt — на головну">
            <span
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white shrink-0 shadow-[0_6px_18px_-8px_rgba(37,99,235,.9)]"
              style={{ background: "linear-gradient(135deg,var(--accent),var(--accent-light))" }}
            >
              <LogoMark className="w-[60%] h-[60%]" />
            </span>
            <span className="font-display font-bold text-[16px] sm:text-[17px] tracking-tight">MaSayt</span>
          </a>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Основна навігація">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className="relative px-3.5 py-2 rounded-lg text-[14.5px] font-medium transition-colors duration-300"
                  style={{ color: isActive ? "var(--accent)" : "var(--text-soft)" }}
                >
                  {link.label}
                  <span
                    className="absolute left-3.5 right-3.5 -bottom-0.5 h-px origin-left transition-transform duration-300"
                    style={{
                      background: "var(--accent)",
                      transform: isActive ? "scaleX(1)" : "scaleX(0)",
                    }}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              className="theme-toggle-track shrink-0"
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
              className="btn-press hidden md:inline-flex items-center gap-2 font-semibold text-[14px] text-white pl-5 pr-4 py-2.5 rounded-xl shadow-[0_10px_28px_-14px_rgba(37,99,235,.95)] hover:shadow-[0_16px_36px_-14px_rgba(37,99,235,1)]"
              style={{ background: "linear-gradient(135deg,var(--accent),var(--accent-light))" }}
            >
              Обговорити проєкт
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>

            <button
              className={`lg:hidden flex items-center gap-1.5 pl-3 pr-3.5 h-10 rounded-xl font-medium text-sm btn-press transition-colors ${scrolled ? "" : "glass"}`}
              style={scrolled ? { background: "var(--tint)", border: "1px solid var(--glass-border)" } : undefined}
              aria-label={menuOpen ? "Закрити меню" : "Відкрити меню"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                {menuOpen ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
              <span>{menuOpen ? "Закрити" : "Меню"}</span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden pointer-events-auto overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-[26rem] opacity-100 mt-2" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="glass rounded-2xl p-3 flex flex-col gap-1 shadow-[0_16px_48px_-24px_rgba(15,23,42,.4)]" aria-label="Мобільна навігація">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center justify-between py-3.5 px-4 rounded-xl font-medium transition-colors"
                style={{ color: active === link.href ? "var(--accent)" : "var(--text)" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" style={{ color: "var(--text-soft)" }}>
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </a>
            ))}
            <a
              href="#contact"
              className="btn-press mt-1 text-center text-white px-5 py-4 rounded-xl font-semibold shadow-[0_12px_30px_-14px_rgba(37,99,235,.95)]"
              style={{ background: "linear-gradient(135deg,var(--accent),var(--accent-light))" }}
              onClick={() => setMenuOpen(false)}
            >
              Обговорити проєкт
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
