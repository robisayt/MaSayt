import { SERVICES } from "@/lib/data";
import { ICONS } from "@/lib/icons";
import Reveal from "./Reveal";
import MobileExpand from "./MobileExpand";

export default function Services() {
  const items = SERVICES.map((service, i) => {
    const Icon = ICONS[service.icon];
    return (
      <Reveal key={service.title} delay={(i % 3) * 90}>
        <div className="card group relative h-full rounded-2xl p-6 sm:p-7 overflow-hidden">
          <span
            className="pointer-events-none absolute -right-6 -bottom-6 w-24 h-24 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: "var(--accent-light)" }}
            aria-hidden="true"
          />
          <div className="relative">
            <div className="flex items-start justify-between gap-3 mb-5">
              <span
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                style={{ background: "var(--tint)", color: "var(--accent)", border: "1px solid var(--glass-border)" }}
              >
                <Icon />
              </span>
              <span className="font-mono text-[11px] tabular-nums pt-1" style={{ color: "var(--text-soft)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{service.title}</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-soft)" }}>{service.desc}</p>
          </div>
          <span
            className="absolute left-0 bottom-0 h-px w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
            style={{ background: "linear-gradient(90deg, var(--accent), transparent)" }}
          />
        </div>
      </Reveal>
    );
  });

  return (
    <section id="services" className="py-14 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-2xl mb-10 sm:mb-16">
          <span className="eyebrow">Напрямки</span>
          <h2 className="font-display font-bold text-[1.7rem] sm:text-3xl md:text-[2.6rem] tracking-tight mb-4">
            Що ми робимо
          </h2>
          <p className="text-lg" style={{ color: "var(--text-soft)" }}>
            Шість напрямків, у яких ми сильні. Кожен проєкт ведемо від структури до запуску.
          </p>
        </Reveal>

        <MobileExpand
          items={items}
          previewCount={3}
          label="Переглянути всі послуги"
          gridClassName="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        />
      </div>
    </section>
  );
}
