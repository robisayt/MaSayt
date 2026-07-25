import { TESTIMONIALS } from "@/lib/data";
import Reveal from "./Reveal";

function Stars() {
  return (
    <div className="flex justify-center gap-1" aria-label="Оцінка 5 з 5">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width="17" height="17" viewBox="0 0 24 24" fill="#F59E0B" stroke="#F59E0B" aria-hidden="true">
          <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.9-6.2-3.3-6.2 3.3 1.2-6.9-5-4.9 6.9-1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-14 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
          <span className="eyebrow">Відгук</span>
          <h2 className="font-display font-bold text-[1.7rem] sm:text-3xl md:text-[2.6rem] tracking-tight mt-6">
            Що кажуть клієнти
          </h2>
        </Reveal>

        <div className="max-w-2xl mx-auto">
          {TESTIMONIALS.map((t) => (
            <Reveal key={t.name} scale>
              <figure className="gradient-ring relative">
                <div className="glass relative overflow-hidden rounded-[1.75rem] px-6 sm:px-12 py-10 sm:py-14 text-center">
                  {/* oversized quote mark as a composition anchor */}
                  <span
                    className="pointer-events-none absolute -top-6 left-4 sm:left-8 font-display font-bold text-[9rem] leading-none select-none"
                    style={{ color: "var(--accent)", opacity: 0.08 }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <span className="blob w-64 h-64 absolute -bottom-24 -right-16" style={{ background: "var(--accent-light)", opacity: 0.2 }} />

                  <div className="relative">
                    <Stars />
                    <blockquote className="text-lg sm:text-xl leading-relaxed font-display font-medium tracking-tight mt-6 mb-8">
                      {t.text}
                    </blockquote>

                    <div className="hairline mb-6" />

                    <figcaption className="flex items-center justify-center gap-3">
                      <span
                        className="w-12 h-12 rounded-full grid place-items-center font-display font-semibold text-white text-sm shrink-0 shadow-[0_8px_22px_-10px_rgba(37,99,235,.9)]"
                        style={{ background: `linear-gradient(135deg, ${t.from}, ${t.to})` }}
                      >
                        {t.initials}
                      </span>
                      <span className="text-left">
                        <span className="block font-display font-semibold">{t.name}</span>
                        <span className="block text-sm" style={{ color: "var(--text-soft)" }}>{t.company}</span>
                      </span>
                    </figcaption>
                  </div>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
