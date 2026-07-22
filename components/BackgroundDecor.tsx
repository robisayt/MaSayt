/**
 * One continuous decorative layer for the whole page — not per section.
 * It sits absolutely inside the page's relative wrapper (see app/page.tsx),
 * stretching to the full height of the content, so every shape scrolls
 * past section boundaries with no clipping edge and no visible seams.
 *
 * Section backgrounds now use the semi-transparent `--tint` variable
 * instead of an opaque fill, so this composition reads through every
 * block on the page, not just the ones without their own background.
 */
export default function BackgroundDecor() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* soft full-page diagonal wash for extra depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(37,99,235,.05) 0%, rgba(96,165,250,0) 22%, rgba(96,165,250,0) 60%, rgba(37,99,235,.05) 100%)",
        }}
      />

      <span className="blob w-96 h-96" style={{ top: "1%", left: "-12%", background: "var(--accent-light)", opacity: 0.16 }} />
      <span className="blob w-[26rem] h-[26rem]" style={{ top: "16%", right: "-14%", background: "var(--accent)", opacity: 0.13 }} />
      <span className="shape-outline w-20 h-20 rounded-3xl hidden md:block" style={{ top: "13%", left: "6%" }} />

      <span className="dot-grid w-56 h-56 hidden md:block" style={{ top: "24%", right: "4%", opacity: 0.4 }} />
      <span className="blob w-80 h-80" style={{ top: "34%", left: "-10%", background: "var(--accent)", opacity: 0.12 }} />
      <span className="shape-outline w-12 h-12 rounded-full hidden sm:block" style={{ top: "40%", right: "16%" }} />

      <span className="blob w-96 h-96" style={{ top: "48%", right: "-14%", background: "var(--accent-light)", opacity: 0.15 }} />
      <span className="shape-outline w-16 h-16 rounded-2xl hidden md:block" style={{ top: "58%", left: "8%" }} />

      <span className="blob w-80 h-80" style={{ top: "64%", left: "-12%", background: "var(--accent-light)", opacity: 0.13 }} />
      <span className="dot-grid w-48 h-48 hidden md:block" style={{ top: "74%", left: "2%", opacity: 0.35 }} />
      <span className="shape-outline w-14 h-14 rounded-full hidden sm:block" style={{ top: "78%", right: "12%" }} />

      <span className="blob w-[28rem] h-[28rem]" style={{ top: "84%", right: "-16%", background: "var(--accent)", opacity: 0.12 }} />
      <span className="blob w-72 h-72" style={{ top: "97%", left: "-8%", background: "var(--accent-light)", opacity: 0.14 }} />
    </div>
  );
}
