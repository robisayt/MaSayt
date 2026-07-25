import { FAQ } from "@/lib/data";
import Reveal from "./Reveal";

export default function Faq() {
  return (
    <section id="faq" className="py-14 sm:py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-2xl mb-10 sm:mb-14">
          <span className="eyebrow">Питання</span>
          <h2 className="font-display font-bold text-[1.7rem] sm:text-3xl md:text-[2.6rem] tracking-tight mb-4">
            Часті запитання
          </h2>
        </Reveal>

        <div className="space-y-4">
          {FAQ.map((item, i) => (
            <Reveal key={item.q} delay={(i % 3) * 90}>
              <details className="faq-item card rounded-2xl overflow-hidden">
                <summary className="cursor-pointer flex items-center justify-between gap-4 px-6 py-5 font-medium">
                  <span>{item.q}</span>
                  <span
                    className="faq-icon shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                    style={{ background: "var(--bg2)", color: "var(--accent)" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "var(--text-soft)" }}>
                  {Array.isArray(item.a) ? (
                    <ul className="space-y-1.5">
                      {item.a.map((line) => (
                        <li key={line} className="flex gap-2">
                          <span className="shrink-0" style={{ color: "var(--accent)" }}>•</span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    item.a
                  )}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
