import Reveal from "./Reveal";
import { LogoMark } from "@/lib/icons";

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 sm:pt-40 md:pt-48 pb-12 sm:pb-20 md:pb-28 overflow-hidden">
      <div className="blob w-72 h-72 -top-10 -left-10" style={{ background: "var(--accent-light)" }} />
      <div className="blob w-96 h-96 top-40 -right-24" style={{ background: "var(--accent)" }} />

      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-10 sm:gap-14 items-center relative">
        <div>
          <Reveal className="font-mono text-sm mb-4 sm:mb-5 flex items-center gap-2" style={{ color: "var(--accent)" }}>
            <span className="w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} />
            {"// веб-дизайнер & розробник сайтів"}
          </Reveal>

          <Reveal>
            <h1 className="font-display font-bold text-[2rem] leading-[1.15] sm:text-5xl md:text-[3.4rem] md:leading-[1.08] tracking-tight mb-5 sm:mb-6">
              Створюю сучасні сайти,<br className="hidden sm:block" /> які допомагають{" "}
              <span style={{ color: "var(--accent)" }}>бізнесу зростати</span>
            </h1>
          </Reveal>

          <Reveal
            className="text-base sm:text-lg leading-relaxed max-w-xl mb-7 sm:mb-9"
            style={{ color: "var(--text-soft)" }}
          >
            Розробляю швидкі, адаптивні та естетичні сайти — від лендінгу до інтернет-магазину. Поєдную чистий код із
            дизайном, який викликає довіру з першого погляду.
          </Reveal>

          <Reveal className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            <a
              href="#portfolio"
              className="btn-press w-full sm:w-auto justify-center inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-xl shadow-sm hover:shadow-xl"
              style={{ background: "var(--accent)" }}
            >
              Переглянути роботи
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="btn-press w-full sm:w-auto justify-center inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-xl"
              style={{ border: "1.5px solid var(--border)" }}
            >
              Зв&apos;язатися
            </a>
          </Reveal>

          <Reveal
            className="flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-8 sm:gap-y-3 font-mono text-xs"
            style={{ color: "var(--text-soft)" }}
          >
            <span>NEXT.JS</span>
            <span>TYPESCRIPT</span>
            <span>TAILWIND</span>
            <span>FRAMER MOTION</span>
          </Reveal>
        </div>

        <Reveal scale className="relative">
          <div className="shape-outline w-16 h-16 rounded-2xl -top-6 right-10 hidden sm:block" />
          <div className="shape-outline w-10 h-10 rounded-full bottom-16 -left-4" />

          <div className="browser-card relative max-w-md mx-auto p-4 md:p-5">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="traffic-dot" style={{ background: "#FF5F57" }} />
              <span className="traffic-dot" style={{ background: "#FEBC2E" }} />
              <span className="traffic-dot" style={{ background: "#28C840" }} />
              <span
                className="ml-3 flex-1 h-6 rounded-md flex items-center gap-1.5 px-3 font-mono text-[10px]"
                style={{ background: "var(--bg2)", color: "var(--text-soft)" }}
              >
                <LogoMark className="w-3 h-3 shrink-0" style={{ color: "var(--accent)" }} />
                masayt.com
              </span>
            </div>

            <div className="rounded-xl p-4 space-y-2.5" style={{ background: "var(--bg2)" }}>
              <div className="code-line w-1/3">
                <span style={{ background: "var(--accent-light)" }} />
              </div>
              <div className="code-line w-2/3" style={{ animationDelay: ".15s" }}>
                <span style={{ background: "var(--accent)", animationDelay: ".15s" }} />
              </div>
              <div className="code-line w-1/2" style={{ animationDelay: ".3s" }}>
                <span style={{ background: "var(--accent-light)", animationDelay: ".3s" }} />
              </div>
              <div className="code-line w-5/6" style={{ animationDelay: ".45s" }}>
                <span style={{ background: "var(--accent)", animationDelay: ".45s" }} />
              </div>
              <div className="code-line w-2/5" style={{ animationDelay: ".6s" }}>
                <span style={{ background: "var(--accent-light)", animationDelay: ".6s" }} />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2.5 mt-3">
              <div
                className="h-16 rounded-lg"
                style={{ background: "linear-gradient(135deg,var(--accent),var(--accent-light))", opacity: 0.9 }}
              />
              <div className="h-16 rounded-lg col-span-2" style={{ background: "var(--bg2)", border: "1px solid var(--border)" }} />
            </div>
          </div>

          <div className="float-chip absolute -bottom-6 -left-4 md:-left-8 card rounded-2xl px-4 py-3 flex items-center gap-3 shadow-lg">
            <span className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "var(--bg2)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round">
                <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" />
              </svg>
            </span>
            <div className="leading-tight">
              <p className="font-semibold text-sm">0.8с</p>
              <p className="text-xs" style={{ color: "var(--text-soft)" }}>завантаження</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
