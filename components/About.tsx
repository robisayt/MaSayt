import Image from "next/image";
import Reveal from "./Reveal";
import Counter from "./Counter";

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
        <Reveal scale className="order-2 lg:order-1">
          <div className="relative max-w-sm mx-auto">
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden" style={{ boxShadow: "var(--shadow)" }}>
              <Image
                src="/about-photo.jpg"
                alt="Андрій Мастеров"
                fill
                sizes="(max-width: 1024px) 384px, 400px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 card rounded-2xl px-5 py-4 shadow-lg flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: "#22C55E" }} />
              <p className="text-sm font-medium">Відкритий до нових проєктів</p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal className="font-mono text-sm mb-3" style={{ color: "var(--accent)" }}>// про мене</Reveal>
          <Reveal>
            <h2 className="font-display font-bold text-[1.7rem] sm:text-3xl md:text-[2.6rem] tracking-tight mb-5">
              Привіт, я Андрій
            </h2>
          </Reveal>
          <Reveal className="text-lg leading-relaxed mb-6" style={{ color: "var(--text-soft)" }}>
            Я самостійно проєктую та розробляю сайти для малого бізнесу — від першого ескізу до готового результату.
            Займаюсь дизайном і кодом сам, тому сайт виглядає так само добре, як і працює.
          </Reveal>
          <Reveal className="text-lg leading-relaxed mb-10" style={{ color: "var(--text-soft)" }}>
            Працюю уважно до деталей, дотримуюсь домовлених термінів і залишаюсь на зв&apos;язку після запуску сайту.
          </Reveal>

          <Reveal className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <p className="font-display font-bold text-4xl mb-1"><Counter target={5} suffix="+" /></p>
              <p style={{ color: "var(--text-soft)" }}>готових проєктів</p>
            </div>
            <div>
              <p className="font-display font-bold text-4xl mb-1"><Counter target={100} suffix="%" /></p>
              <p style={{ color: "var(--text-soft)" }}>адаптивні сайти</p>
            </div>
          </Reveal>

          <Reveal className="flex flex-wrap gap-3">
            <span className="font-mono text-xs px-3 py-2 rounded-lg" style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}>
              ⚡ Швидке виконання
            </span>
            <span className="font-mono text-xs px-3 py-2 rounded-lg" style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}>
              🎯 Індивідуальний підхід
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
