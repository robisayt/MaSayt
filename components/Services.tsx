import { SERVICES } from "@/lib/data";
import { ICONS } from "@/lib/icons";
import Reveal from "./Reveal";
import MobileExpand from "./MobileExpand";

export default function Services() {
  const items = SERVICES.map((service, i) => {
    const Icon = ICONS[service.icon];
    return (
      <Reveal key={service.title} delay={(i % 3) * 90}>
        <div className="card rounded-2xl p-6 h-full">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
            style={{ background: "var(--bg2)", color: "var(--accent)" }}
          >
            <Icon />
          </div>
          <h3 className="font-display font-semibold text-lg mb-2">{service.title}</h3>
          <p className="text-sm" style={{ color: "var(--text-soft)" }}>{service.desc}</p>
        </div>
      </Reveal>
    );
  });

  return (
    <section id="services" className="relative py-14 sm:py-24 md:py-32 overflow-hidden">
      <div className="blob w-72 h-72 -top-16 -right-20" style={{ background: "var(--accent-light)", opacity: 0.18 }} />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
        <Reveal className="max-w-2xl mb-10 sm:mb-16">
          <p className="font-mono text-sm mb-3" style={{ color: "var(--accent)" }}>// послуги</p>
          <h2 className="font-display font-bold text-[1.7rem] sm:text-3xl md:text-[2.6rem] tracking-tight mb-4">
            Чим можу допомогти
          </h2>
          <p className="text-lg" style={{ color: "var(--text-soft)" }}>
            Повний цикл створення сайту — від ідеї та дизайну до запуску й підтримки.
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
