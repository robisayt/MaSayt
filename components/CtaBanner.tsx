import Reveal from "./Reveal";
import { SOCIAL_LINKS } from "@/lib/data";

/**
 * Final accent of the page: a single, unmissable invitation to start.
 * Deliberately the only full-bleed dark/gradient surface on the site,
 * so it reads as the closing statement rather than "one more section".
 */
export default function CtaBanner() {
  return (
    <section className="px-5 md:px-8 py-6 sm:py-10">
      <Reveal scale>
        <div
          className="grain relative overflow-hidden max-w-7xl mx-auto rounded-[1.75rem] sm:rounded-[2.25rem] px-6 sm:px-12 lg:px-16 py-14 sm:py-20 lg:py-24 text-center"
          style={{ background: "linear-gradient(145deg, #1E3A8A 0%, #2563EB 45%, #3B82F6 100%)" }}
        >
          {/* depth */}
          <span className="blob w-96 h-96 absolute -top-24 -left-20" style={{ background: "#93C5FD", opacity: 0.35 }} />
          <span className="blob w-[26rem] h-[26rem] absolute -bottom-32 -right-24" style={{ background: "#1D4ED8", opacity: 0.5 }} />
          <span
            className="dot-grid absolute inset-x-0 top-0 h-40 hidden sm:block"
            style={{ backgroundImage: "radial-gradient(rgba(255,255,255,.5) 1.5px, transparent 1.5px)", opacity: 0.25 }}
          />

          <div className="relative">
            <span
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[.14em] uppercase px-4 py-2 rounded-full mb-7"
              style={{ background: "rgba(255,255,255,.14)", color: "#EFF6FF", border: "1px solid rgba(255,255,255,.22)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#86EFAC" }} />
              Приймаємо нові проєкти
            </span>

            <h2 className="font-display font-bold text-white tracking-tight text-[1.9rem] leading-[1.12] sm:text-[2.6rem] lg:text-[3.2rem] lg:leading-[1.06] mb-5 max-w-3xl mx-auto">
              Розкажіть про свій бізнес —<br className="hidden sm:block" /> ми запропонуємо, як він має виглядати онлайн
            </h2>

            <p className="text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto" style={{ color: "rgba(239,246,255,.82)" }}>
              Коротка розмова, чесна оцінка строків і вартості. Без зобовʼязань з вашого боку.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="btn-press group inline-flex items-center justify-center gap-2.5 font-semibold px-8 py-4 rounded-2xl bg-white shadow-[0_18px_44px_-18px_rgba(0,0,0,.6)]"
                style={{ color: "#1D4ED8" }}
              >
                Залишити заявку
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.telegram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-2xl text-white transition-colors"
                style={{ border: "1.5px solid rgba(255,255,255,.35)", background: "rgba(255,255,255,.06)" }}
              >
                Написати в Telegram
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
