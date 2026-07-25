import { WHY } from "@/lib/data";
import { ICONS } from "@/lib/icons";
import Reveal from "./Reveal";
import MobileExpand from "./MobileExpand";

/**
 * Bento grid. Feature tiles (wide) and stat tiles break the uniform 4-up
 * rhythm so the section reads as a composition rather than a row of boxes.
 * On mobile it collapses to a single column and folds behind a button.
 */
export default function WhyChooseMe() {
  const items = WHY.map((item, i) => {
    const Icon = ICONS[item.icon];
    return (
      <Reveal key={item.title} delay={(i % 3) * 80} className={item.wide ? "lg:col-span-2" : ""}>
        <div className="card group relative h-full rounded-2xl p-6 sm:p-7 overflow-hidden">
          {/* ghost stat sits behind the content, revealed on hover */}
          {item.stat && (
            <span
              className="pointer-events-none absolute -right-1 -top-3 font-display font-bold text-[4.5rem] leading-none select-none transition-all duration-500 group-hover:-translate-y-1"
              style={{ color: "var(--accent)", opacity: 0.07 }}
              aria-hidden="true"
            >
              {item.stat}
            </span>
          )}

          <div className="relative flex items-start gap-4">
            <span
              className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
              style={{ background: "var(--tint)", color: "var(--accent)", border: "1px solid var(--glass-border)" }}
            >
              <Icon />
            </span>
            <div>
              <h3 className="font-display font-semibold text-[15px] sm:text-base leading-snug mb-1.5">{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-soft)" }}>
                {item.desc}
              </p>
            </div>
          </div>

          {/* hairline that draws itself in on hover */}
          <span
            className="absolute left-0 bottom-0 h-px w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
            style={{ background: "linear-gradient(90deg, var(--accent), transparent)" }}
          />
        </div>
      </Reveal>
    );
  });

  return (
    <section className="py-14 sm:py-24 md:py-32" style={{ background: "var(--tint)" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-2xl mb-10 sm:mb-16">
          <span className="eyebrow">Чому ми</span>
          <h2 className="font-display font-bold text-[1.7rem] sm:text-3xl md:text-[2.6rem] tracking-tight mt-6 mb-4">
            Що отримує клієнт
          </h2>
          <p className="text-lg" style={{ color: "var(--text-soft)" }}>
            Не список обіцянок, а рішення, які реально впливають на те, як сайт виглядає й працює.
          </p>
        </Reveal>

        <MobileExpand
          items={items}
          previewCount={3}
          label="Переглянути всі переваги"
          gridClassName="grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4"
        />
      </div>
    </section>
  );
}
