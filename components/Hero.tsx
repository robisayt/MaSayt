import Reveal from "./Reveal";
import Counter from "./Counter";
import { LogoMark } from "@/lib/icons";

const STATS = [
  { value: 7, suffix: "+", label: "готових проєктів" },
  { value: 100, suffix: "%", label: "адаптивні сайти" },
  { value: 2, suffix: "–7 днів", label: "типовий строк" },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-40 md:pt-48 pb-14 sm:pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          {/* ---------- Left: message ---------- */}
          <div>
            <Reveal>
              <span className="eyebrow">Digital-студія MaSayt</span>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="font-display font-bold tracking-tight mt-6 sm:mt-8 mb-6 text-[2.35rem] leading-[1.08] sm:text-[3.4rem] sm:leading-[1.05] lg:text-[4.1rem] lg:leading-[1.02]">
                Сайти, які<br />
                <span className="text-gradient">працюють на бренд</span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="text-base sm:text-lg leading-relaxed max-w-lg mb-9 sm:mb-11" style={{ color: "var(--text-soft)" }}>
                Проєктуємо й розробляємо сайти для бізнесу — швидкі, зрозумілі та зроблені так,
                щоб їх було приємно показувати клієнтам.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href="#portfolio"
                  className="btn-press group w-full sm:w-auto justify-center inline-flex items-center gap-2.5 text-white font-semibold px-7 py-4 rounded-2xl shadow-[0_16px_40px_-16px_rgba(37,99,235,.95)] hover:shadow-[0_22px_54px_-16px_rgba(37,99,235,1)]"
                  style={{ background: "linear-gradient(135deg,var(--accent),var(--accent-light))" }}
                >
                  Дивитись роботи
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  className="btn-press w-full sm:w-auto justify-center inline-flex items-center gap-2 font-semibold px-7 py-4 rounded-2xl transition-colors"
                  style={{ border: "1.5px solid var(--border)" }}
                >
                  Обговорити проєкт
                </a>
              </div>
            </Reveal>

            {/* stat strip */}
            <Reveal delay={240}>
              <div className="hairline mt-11 sm:mt-14 mb-6" />
              <div className="grid grid-cols-3 gap-4 sm:gap-8">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <p className="font-display font-bold text-2xl sm:text-3xl tracking-tight mb-1">
                      <Counter target={s.value} suffix={s.suffix} />
                    </p>
                    <p className="text-[11px] sm:text-xs leading-snug" style={{ color: "var(--text-soft)" }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ---------- Right: living mockup ---------- */}
          <Reveal scale delay={140}>
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <span className="blob w-72 h-72 absolute -top-10 -right-6" style={{ background: "var(--accent-light)", opacity: 0.32 }} />
              <span className="blob w-64 h-64 absolute bottom-0 -left-10" style={{ background: "var(--accent)", opacity: 0.22 }} />
              <span className="shape-outline w-16 h-16 rounded-2xl absolute -top-4 left-4 hidden sm:block" />

              <div className="gradient-ring relative">
                <div className="browser-card relative p-3 sm:p-4 rounded-[1.75rem]">
                  {/* chrome */}
                  <div className="flex items-center gap-1.5 px-1 mb-3">
                    <span className="traffic-dot" style={{ background: "#FF5F57" }} />
                    <span className="traffic-dot" style={{ background: "#FEBC2E" }} />
                    <span className="traffic-dot" style={{ background: "#28C840" }} />
                    <span
                      className="ml-3 flex-1 h-7 rounded-lg flex items-center gap-1.5 px-3 font-mono text-[10px]"
                      style={{ background: "var(--bg2)", color: "var(--text-soft)" }}
                    >
                      <LogoMark className="w-3 h-3 shrink-0" style={{ color: "var(--accent)" }} />
                      masayt.com
                    </span>
                  </div>

                  {/* rendered page */}
                  <div className="rounded-2xl overflow-hidden" style={{ background: "var(--bg2)" }}>
                    <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: "1px solid var(--border)" }}>
                      <div className="flex items-center gap-1.5">
                        <span className="w-3.5 h-3.5 rounded-md" style={{ background: "linear-gradient(135deg,var(--accent),var(--accent-light))" }} />
                        <span className="h-1.5 w-9 rounded-full" style={{ background: "var(--border)" }} />
                      </div>
                      <div className="flex gap-1.5">
                        <span className="h-1.5 w-6 rounded-full" style={{ background: "var(--border)" }} />
                        <span className="h-1.5 w-6 rounded-full" style={{ background: "var(--border)" }} />
                        <span className="h-3.5 w-10 rounded-full" style={{ background: "var(--accent)" }} />
                      </div>
                    </div>

                    <div className="p-5 space-y-2.5">
                      <div className="code-line w-2/3"><span style={{ background: "var(--accent)" }} /></div>
                      <div className="code-line w-1/2" style={{ animationDelay: ".2s" }}>
                        <span style={{ background: "var(--accent-light)", animationDelay: ".2s" }} />
                      </div>
                      <div className="code-line w-5/6" style={{ animationDelay: ".4s" }}>
                        <span style={{ background: "var(--accent-light)", animationDelay: ".4s" }} />
                      </div>

                      <div className="grid grid-cols-3 gap-2.5 pt-3">
                        <div className="h-14 rounded-xl" style={{ background: "linear-gradient(140deg,var(--accent),var(--accent-light))" }} />
                        <div className="h-14 rounded-xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }} />
                        <div className="h-14 rounded-xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* floating proof chips */}
              <div className="float-chip glass absolute -bottom-5 -left-3 sm:-left-8 rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl">
                <span className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: "var(--tint)", color: "var(--accent)" }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
                  </svg>
                </span>
                <div className="leading-tight">
                  <p className="font-semibold text-sm">0.8с</p>
                  <p className="text-[11px]" style={{ color: "var(--text-soft)" }}>завантаження</p>
                </div>
              </div>

              <div className="float-chip glass absolute -top-4 -right-2 sm:-right-6 rounded-2xl px-4 py-3 hidden sm:flex items-center gap-2.5 shadow-xl" style={{ animationDelay: "1.4s" }}>
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: "#22C55E" }} />
                <p className="text-[13px] font-medium">Адаптив на всіх екранах</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
