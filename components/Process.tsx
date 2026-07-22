import { PROCESS } from "@/lib/data";
import Reveal from "./Reveal";
import MobileExpand from "./MobileExpand";

export default function Process() {
  const items = PROCESS.map((step, i) => (
    <Reveal
      key={step.title}
      delay={(i % 3) * 90}
      className="relative flex flex-col items-start lg:items-center lg:text-center"
    >
      <span className="font-display font-bold text-3xl mb-3" style={{ color: "var(--accent-light)" }}>
        0{i + 1}
      </span>
      <h3 className="font-display font-semibold mb-2">{step.title}</h3>
      <p className="text-xs" style={{ color: "var(--text-soft)" }}>{step.desc}</p>
      {i < PROCESS.length - 1 && (
        <span className="hidden lg:block absolute top-4 left-[60%] w-full h-px" style={{ background: "var(--border)" }} />
      )}
    </Reveal>
  ));

  return (
    <section id="process" className="py-14 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-2xl mb-12 sm:mb-20">
          <p className="font-mono text-sm mb-3" style={{ color: "var(--accent)" }}>// етапи роботи</p>
          <h2 className="font-display font-bold text-[1.7rem] sm:text-3xl md:text-[2.6rem] tracking-tight mb-4">
            Як проходить робота над сайтом
          </h2>
          <p className="text-lg" style={{ color: "var(--text-soft)" }}>
            Шість послідовних кроків — від ідеї до запущеного сайту.
          </p>
        </Reveal>

        <MobileExpand
          items={items}
          previewCount={3}
          label="Переглянути всі етапи"
          gridClassName="relative grid sm:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-4"
        />
      </div>
    </section>
  );
}
