import Reveal from "./Reveal";
import Counter from "./Counter";

export default function AboutUs() {
  return (
    <section id="about" className="py-14 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        <Reveal scale className="order-2 lg:order-1">
          <div className="relative max-w-sm mx-auto aspect-[4/5]">
            <div
              className="blob w-72 h-72 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ background: "var(--accent-light)", opacity: 0.3 }}
            />
            <span className="shape-outline w-14 h-14 rounded-2xl absolute top-2 right-6" />
            <span className="shape-outline w-8 h-8 rounded-full absolute bottom-14 left-0" />

            {/* back layer: mini browser mockup, tilted */}
            <div className="browser-card absolute top-6 left-1 w-56 p-4 -rotate-6">
              <div className="flex items-center gap-1.5 mb-3">
                <span className="traffic-dot" style={{ background: "#FF5F57" }} />
                <span className="traffic-dot" style={{ background: "#FEBC2E" }} />
                <span className="traffic-dot" style={{ background: "#28C840" }} />
              </div>
              <div className="space-y-2">
                <div className="code-line w-2/3">
                  <span style={{ background: "var(--accent-light)" }} />
                </div>
                <div className="code-line w-1/2" style={{ animationDelay: ".2s" }}>
                  <span style={{ background: "var(--accent)", animationDelay: ".2s" }} />
                </div>
                <div className="code-line w-4/5" style={{ animationDelay: ".4s" }}>
                  <span style={{ background: "var(--accent-light)", animationDelay: ".4s" }} />
                </div>
              </div>
            </div>

            {/* middle floating card: team */}
            <div className="float-chip card absolute bottom-20 right-0 w-48 rounded-2xl p-5 rotate-3 shadow-xl">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-3"
                style={{ background: "var(--bg2)", color: "var(--accent)" }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="9" cy="8" r="3.2" />
                  <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
                  <circle cx="17.5" cy="8.7" r="2.6" />
                  <path d="M15.5 14.3c2.7.4 4.6 2.8 4.6 5.4" />
                </svg>
              </div>
              <p className="font-display font-semibold text-sm mb-1">Команда спеціалістів</p>
              <p className="text-xs" style={{ color: "var(--text-soft)" }}>Дизайн і розробка в одних руках</p>
            </div>

            {/* front chip */}
            <div
              className="float-chip card absolute bottom-0 left-2 rounded-2xl px-4 py-3 flex items-center gap-2.5 shadow-lg"
              style={{ animationDelay: "1.2s" }}
            >
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: "#22C55E" }} />
              <p className="text-sm font-medium">Готові до нових проєктів</p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal><span className="eyebrow">Хто ми</span></Reveal>
          <Reveal>
            <h2 className="font-display font-bold text-[1.7rem] sm:text-3xl md:text-[2.6rem] tracking-tight mt-6 mb-5">
              Команда, яка робить сайти,<br className="hidden sm:block" /> що приємно показувати
            </h2>
          </Reveal>
          <Reveal className="text-lg leading-relaxed mb-6" style={{ color: "var(--text-soft)" }}>
            MaSayt — команда, яка створює сучасні сайти для бізнесу. Ми поєднуємо сучасний дизайн, швидкість,
            функціональність та зручність використання.
          </Reveal>
          <Reveal className="text-lg leading-relaxed mb-10" style={{ color: "var(--text-soft)" }}>
            Наша мета — створювати сайти, які не лише красиво виглядають, а й допомагають бізнесу залучати нових
            клієнтів. Використовуємо сучасні технології, уважно ставимося до деталей та супроводжуємо клієнта на
            всіх етапах співпраці.
          </Reveal>

          <Reveal className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <p className="font-display font-bold text-4xl mb-1"><Counter target={7} suffix="+" /></p>
              <p style={{ color: "var(--text-soft)" }}>готових проєктів</p>
            </div>
            <div>
              <p className="font-display font-bold text-4xl mb-1"><Counter target={100} suffix="%" /></p>
              <p style={{ color: "var(--text-soft)" }}>адаптивні сайти</p>
            </div>
          </Reveal>

          <Reveal className="flex flex-wrap gap-3">
            <span className="font-mono text-xs px-3 py-2 rounded-lg" style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}>
              ⚡ Швидке виконання
            </span>
            <span className="font-mono text-xs px-3 py-2 rounded-lg" style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}>
              🎯 Індивідуальний підхід
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
