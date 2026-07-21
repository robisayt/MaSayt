import { TESTIMONIALS } from "@/lib/data";
import Reveal from "./Reveal";

function Star({ i }: { i: number }) {
  return (
    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B">
      <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9-6.2-3.3-6.2 3.3 1.2-6.9-5-4.9 6.9-1z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-14 sm:py-24 md:py-32" style={{ background: "var(--bg2)" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-2xl mb-10 sm:mb-16">
          <p className="font-mono text-sm mb-3" style={{ color: "var(--accent)" }}>// відгук</p>
          <h2 className="font-display font-bold text-[1.7rem] sm:text-3xl md:text-[2.6rem] tracking-tight mb-4">
            Що кажуть клієнти
          </h2>
        </Reveal>

        <div className="max-w-xl mx-auto">
          {TESTIMONIALS.map((t) => (
            <Reveal key={t.name}>
              <div className="card rounded-2xl p-6 sm:p-8 md:p-10 text-center">
                <span
                  className="w-14 h-14 mx-auto rounded-full flex items-center justify-center font-display font-semibold text-white text-lg mb-5"
                  style={{ background: `linear-gradient(135deg, ${t.from}, ${t.to})` }}
                >
                  {t.initials}
                </span>
                <p className="font-display font-semibold text-lg">{t.name}</p>
                <p className="text-sm mb-4" style={{ color: "var(--text-soft)" }}>{t.company}</p>
                <div className="flex justify-center gap-1 mb-5">
                  {[0, 1, 2, 3, 4].map((i) => <Star key={i} i={i} />)}
                </div>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-soft)" }}>&quot;{t.text}&quot;</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
