import { LogoMark } from "@/lib/icons";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-10 sm:pt-16 pb-8" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 sm:gap-10 mb-8 sm:mb-12">
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <span
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white shrink-0"
                style={{ background: "linear-gradient(135deg,var(--accent),var(--accent-light))" }}
              >
                <LogoMark className="w-[62%] h-[62%]" />
              </span>
              <span className="font-display font-bold text-[17px] tracking-tight">MaSayt</span>
            </a>
            <p className="text-sm max-w-xs" style={{ color: "var(--text-soft)" }}>
              Веб-дизайнер і frontend-розробник. Створюю сучасні сайти, які допомагають бізнесу зростати.
            </p>
          </div>

          <nav className="flex flex-col gap-2 text-sm" aria-label="Навігація у футері">
            <a href="#home" style={{ color: "var(--text-soft)" }}>Головна</a>
            <a href="#portfolio" style={{ color: "var(--text-soft)" }}>Портфоліо</a>
            <a href="#services" style={{ color: "var(--text-soft)" }}>Послуги</a>
            <a href="#contact" style={{ color: "var(--text-soft)" }}>Контакти</a>
          </nav>

          <div>
            <p className="text-sm font-medium mb-3">Соціальні мережі</p>
            <SocialLinks />
          </div>
        </div>
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: "1px solid var(--border)", color: "var(--text-soft)" }}
        >
          <p>© {year} Андрій Мастеров. Усі права захищено.</p>
          <p className="font-mono">Дизайн і розробка сайтів</p>
        </div>
      </div>
    </footer>
  );
}
