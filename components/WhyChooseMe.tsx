import { WHY } from "@/lib/data";
import { ICONS } from "@/lib/icons";
import Reveal from "./Reveal";
import MobileExpand from "./MobileExpand";

export default function WhyChooseMe() {
  const items = WHY.map((item, i) => {
    const Icon = ICONS[item.icon];
    return (
      <Reveal key={item.title} delay={(i % 3) * 90}>
        <div className="card rounded-2xl p-6 text-center flex flex-col items-center h-full">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
            style={{ background: "var(--bg2)", color: "var(--accent)" }}
          >
            <Icon />
          </div>
          <h3 className="font-display font-semibold mb-1.5">{item.title}</h3>
          <p className="text-xs" style={{ color: "var(--text-soft)" }}>{item.desc}</p>
        </div>
      </Reveal>
    );
  });

  return (
    <section className="py-14 sm:py-24 md:py-32" style={{ background: "var(--tint)" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-2xl mb-10 sm:mb-16">
          <p className="font-mono text-sm mb-3" style={{ color: "var(--accent)" }}>// переваги</p>
          <h2 className="font-display font-bold text-[1.7rem] sm:text-3xl md:text-[2.6rem] tracking-tight mb-4">
            Чому обирають нас
          </h2>
        </Reveal>

        <MobileExpand
          items={items}
          previewCount={4}
          label="Переглянути переваги"
          gridClassName="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        />
      </div>
    </section>
  );
}
