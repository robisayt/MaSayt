import { TECH } from "@/lib/data";
import Reveal from "./Reveal";

export default function TechStack() {
  return (
    <section className="relative py-12 sm:py-20 md:py-24 overflow-hidden" style={{ background: "var(--bg2)" }}>
      <div className="shape-outline w-14 h-14 rounded-full top-8 left-[10%] hidden md:block" />
      <div className="max-w-7xl mx-auto px-5 md:px-8 text-center relative">
        <Reveal className="font-mono text-sm mb-3" style={{ color: "var(--accent)" }}>// технології</Reveal>
        <Reveal>
          <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight mb-12">
            З якими технологіями я працюю
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
