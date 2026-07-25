import { PROCESS } from "@/lib/data";
import Reveal from "./Reveal";
import MobileExpand from "./MobileExpand";

/**
 * Two genuinely different compositions rather than one stretched layout:
 * mobile reads as a vertical timeline with a rail running through the nodes,
 * desktop turns into a six-across horizontal track. The connector is drawn
 * per-step so the rail survives the mobile fold-out.
 */
export default function Process() {
  const items = PROCESS.map((step, i) => {
    const isLast = i === PROCESS.length - 1;
    return (
      <Reveal key={step.title} delay={(i % 3) * 80}>
        <div className="group relative flex gap-4 lg:block pb-2 lg:pb-0">
          {/* node + connector */}
          <div className="relative flex flex-col items-center lg:block shrink-0">
            <span
              className="relative z-10 grid place-items-center w-11 h-11 rounded-xl font-display font-bold text-sm transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_10px_28px_-12px_rgba(37,99,235,.9)]"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                color: "var(--accent)",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* vertical rail (mobile) */}
            {!isLast && (
              <span
                className="lg:hidden flex-1 w-px mt-1 mb-1"
                style={{ background: "linear-gradient(180deg, var(--border), transparent)" }}
              />
            )}
            {/* horizontal rail (desktop) */}
            {!isLast && (
              <span
                className="hidden lg:block absolute top-1/2 left-full w-[calc(100%+1rem)] h-px"
                style={{ background: "linear-gradient(90deg, var(--border), transparent)" }}
              />
            )}
          </div>

          <div className="lg:mt-5 pb-6 lg:pb-0">
            <h3 className="font-display font-semibold mb-1.5 transition-colors duration-300">{step.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-soft)" }}>
              {step.desc}
            </p>
          </div>
        </div>
      </Reveal>
    );
  });

  return (
    <section id="process" className="py-14 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-12 mb-12 sm:mb-20">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Процес</span>
            <h2 className="font-display font-bold text-[1.7rem] sm:text-3xl md:text-[2.6rem] tracking-tight mt-6 mb-4">
              Шлях від ідеї до запуску
            </h2>
            <p className="text-lg" style={{ color: "var(--text-soft)" }}>
              Шість етапів, на кожному з яких ви бачите проміжний результат і розумієте, що відбувається далі.
            </p>
          </Reveal>

          <Reveal delay={120} className="hidden lg:block shrink-0">
            <div className="glass rounded-2xl px-6 py-5 text-right">
              <p className="font-display font-bold text-3xl tracking-tight mb-1">2–14</p>
              <p className="text-xs" style={{ color: "var(--text-soft)" }}>днів на проєкт</p>
            </div>
          </Reveal>
        </div>

        <MobileExpand
          items={items}
          previewCount={3}
          label="Переглянути всі етапи"
          gridClassName="grid gap-0 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-6 lg:gap-4"
        />
      </div>
    </section>
  );
}
