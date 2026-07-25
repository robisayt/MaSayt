import { LogoMark } from "@/lib/icons";
import { SOCIAL_LINKS } from "@/lib/data";
import SocialLinks from "./SocialLinks";

const NAV = [
  { href: "#portfolio", label: "Роботи" },
  { href: "#services", label: "Напрямки" },
  { href: "#about", label: "Про нас" },
  { href: "#process", label: "Процес" },
  { href: "#faq", label: "Питання" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-16 sm:pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="hairline mb-12 sm:mb-16" />

        <div className="grid gap-10 sm:gap-12 md:grid-cols-[1.4fr_1fr_1.2fr] mb-12 sm:mb-16">
          {/* brand */}
          <div>
            <a href="#home" className="inline-flex items-center gap-2.5 mb-5" aria-label="MaSayt — на головну">
              <span
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white shrink-0 shadow-[0_6px_18px_-8px_rgba(37,99,235,.9)]"
                style={{ background: "linear-gradient(135deg,var(--accent),var(--accent-light))" }}
              >
                <LogoMark className="w-[60%] h-[60%]" />
              </span>
              <span className="font-display font-bold text-[17px] tracking-tight">MaSayt</span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs mb-6" style={{ color: "var(--text-soft)" }}>
              Digital-студія, що проєктує та розробляє сайти для бізнесу. Дизайн, швидкість і зручність — в одному місці.
            </p>
            <SocialLinks />
          </div>

          {/* nav */}
          <nav aria-label="Навігація у футері">
            <p className="font-display font-semibold text-sm mb-4">Розділи</p>
            <ul className="flex flex-col gap-2.5 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="transition-colors hover:opacity-100 opacity-80" style={{ color: "var(--text-soft)" }}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* contacts */}
          <div>
            <p className="font-display font-semibold text-sm mb-4">Звʼязок</p>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href={SOCIAL_LINKS.telegram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors"
                  style={{ color: "var(--text-soft)" }}
                >
                  <span className="font-mono text-[11px] tracking-wider uppercase" style={{ color: "var(--accent)" }}>TG</span>
                  @wrowoo
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_LINKS.email.url}
                  className="inline-flex items-center gap-2 transition-colors"
                  style={{ color: "var(--text-soft)" }}
                >
                  <span className="font-mono text-[11px] tracking-wider uppercase" style={{ color: "var(--accent)" }}>Email</span>
                  robisayt@gmail.com
                </a>
              </li>
            </ul>

            <a
              href="#contact"
              className="btn-press inline-flex items-center gap-2 mt-6 font-medium text-sm px-5 py-3 rounded-xl"
              style={{ border: "1px solid var(--border)", background: "var(--tint)" }}
            >
              Обговорити проєкт
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hairline mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: "var(--text-soft)" }}>
          <p>© {year} MaSayt. Усі права захищено.</p>
          <p className="font-mono tracking-wide">Дизайн і розробка сайтів</p>
        </div>
      </div>
    </footer>
  );
}
