import { TECH } from "@/lib/data";
import Reveal from "./Reveal";

export default function TechStack() {
  return (
    <section className="py-12 sm:py-20 md:py-24" style={{ background: "var(--tint)" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
        <Reveal><span className="eyebrow">Стек</span></Reveal>
        <Reveal>
          <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mt-6 mb-12">
            Технології, на яких будуємо
          </h2>
        </Reveal>
        <Reveal className="flex flex-wrap justify-center gap-4 md:gap-5">
          {TECH.map((t) => (
            <span key={t} className="font-mono text-sm px-4 py-2.5 rounded-xl card">{t}</span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
