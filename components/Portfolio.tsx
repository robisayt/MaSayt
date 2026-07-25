"use client";

import { useState } from "react";
import { PROJECTS } from "@/lib/data";
import MockThumb from "./MockThumb";
import ProjectModal from "./ProjectModal";
import Reveal from "./Reveal";
import MobileExpand from "./MobileExpand";

export default function Portfolio() {
  const [active, setActive] = useState<{ id: string; tab: "overview" | "desktop" } | null>(null);
  const activeProject = active ? PROJECTS.find((p) => p.id === active.id) ?? null : null;

  const items = PROJECTS.map((project, i) => (
    <Reveal key={project.id} delay={(i % 3) * 80}>
      <article className="project-card group relative h-full rounded-2xl overflow-hidden flex flex-col">
        {/* ---- preview ---- */}
        <button
          className="project-thumb relative h-52 sm:h-60 w-full text-left cursor-pointer"
          onClick={() => setActive({ id: project.id, tab: "overview" })}
          aria-label={`Відкрити кейс: ${project.title}`}
        >
          <MockThumb project={project} big />

          {/* index badge */}
          <span
            className="absolute top-3 left-3 z-10 font-mono text-[10px] tracking-widest px-2.5 py-1 rounded-full backdrop-blur-md"
            style={{ background: "rgba(255,255,255,.16)", color: "#fff", border: "1px solid rgba(255,255,255,.24)" }}
          >
            {String(i + 1).padStart(2, "0")}
          </span>

          {/* hover veil */}
          <div
            className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0"
            style={{ background: "linear-gradient(to top, rgba(8,12,20,.82), rgba(8,12,20,.15) 60%, transparent)" }}
          >
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tech.slice(0, 3).map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] px-2 py-1 rounded-md backdrop-blur-md"
                  style={{ background: "rgba(255,255,255,.14)", color: "#fff", border: "1px solid rgba(255,255,255,.2)" }}
                >
                  {t}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-1.5 text-white font-semibold text-sm">
              Переглянути кейс
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </button>

        {/* ---- meta ---- */}
        <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display font-semibold text-[17px] leading-snug">{project.title}</h3>
            <span
              className="font-mono text-[10px] whitespace-nowrap px-2.5 py-1 rounded-full shrink-0 mt-0.5"
              style={{ background: "var(--tint)", color: "var(--accent)", border: "1px solid var(--glass-border)" }}
            >
              {project.category}
            </span>
          </div>

          <p className="text-sm leading-relaxed" style={{ color: "var(--text-soft)" }}>
            {project.desc}
          </p>

          <div className="mt-auto pt-4 flex items-center justify-between gap-3" style={{ borderTop: "1px solid var(--border)" }}>
            <span className="text-[11px] leading-snug" style={{ color: "var(--text-soft)" }}>
              {project.role}
            </span>
            <button
              className="btn-press shrink-0 grid place-items-center w-10 h-10 rounded-xl transition-colors"
              style={{ background: "var(--tint)", color: "var(--accent)", border: "1px solid var(--glass-border)" }}
              onClick={() => setActive({ id: project.id, tab: "desktop" })}
              aria-label={`Показати адаптивність: ${project.title}`}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <rect x="2" y="4" width="14" height="10" rx="1" />
                <rect x="17" y="8" width="5" height="9" rx="1" />
              </svg>
            </button>
          </div>
        </div>
      </article>
    </Reveal>
  ));

  return (
    <section id="portfolio" className="py-14 sm:py-24 md:py-32" style={{ background: "var(--tint)" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-12 mb-10 sm:mb-16">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Кейси</span>
            <h2 className="font-display font-bold text-[1.7rem] sm:text-3xl md:text-[2.8rem] tracking-tight mt-6 mb-4">
              Роботи, які говорять за нас
            </h2>
            <p className="text-lg" style={{ color: "var(--text-soft)" }}>
              Кожен проєкт — окрема задача бізнесу. Відкрийте кейс, щоб побачити роль команди, обсяг робіт
              і як сайт виглядає на різних екранах.
            </p>
          </Reveal>

          <Reveal delay={120} className="hidden lg:flex shrink-0 items-center gap-2 text-sm" style={{ color: "var(--text-soft)" }}>
            <span className="w-8 h-px" style={{ background: "var(--border)" }} />
            Наведіть на кейс
          </Reveal>
        </div>

        <MobileExpand
          items={items}
          previewCount={2}
          label="Переглянути всі кейси"
          gridClassName="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
        />
      </div>

      {activeProject && active && (
        <ProjectModal project={activeProject} initialTab={active.tab} onClose={() => setActive(null)} />
      )}
    </section>
  );
}
