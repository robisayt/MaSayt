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
    <Reveal key={project.id} delay={(i % 3) * 90}>
      <article className="project-card group rounded-2xl overflow-hidden flex flex-col h-full">
        <button
          className="project-thumb relative h-48 sm:h-60 cursor-pointer w-full text-left"
          onClick={() => setActive({ id: project.id, tab: "overview" })}
          aria-label={`Переглянути проєкт: ${project.title}`}
        >
          <MockThumb project={project} big />
          <div
            className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: "linear-gradient(to top, rgba(10,14,22,.6), rgba(10,14,22,0) 55%)" }}
          >
            <span className="text-white font-medium text-sm flex items-center gap-1.5">
              Переглянути проєкт
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </button>

        <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-display font-semibold text-lg">{project.title}</h3>
            <span
              className="font-mono text-[11px] px-2.5 py-1 rounded-full shrink-0"
              style={{ background: "var(--bg2)", color: "var(--text-soft)" }}
            >
              {project.category}
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--text-soft)" }}>{project.desc}</p>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {project.tech.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] px-2 py-1 rounded-md"
                style={{ border: "1px solid var(--border)", color: "var(--text-soft)" }}
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-3 mt-3 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
            <button
              className="btn-press flex-1 font-medium text-sm py-3 sm:py-2.5 rounded-lg"
              style={{ border: "1.5px solid var(--border)" }}
              onClick={() => setActive({ id: project.id, tab: "overview" })}
            >
              Детальніше
            </button>
            <button
              className="btn-press flex-1 font-medium text-sm py-3 sm:py-2.5 rounded-lg text-white"
              style={{ background: "var(--accent)" }}
              onClick={() => setActive({ id: project.id, tab: "desktop" })}
            >
              Відкрити
            </button>
          </div>
        </div>
      </article>
    </Reveal>
  ));

  return (
    <section id="portfolio" className="py-14 sm:py-24 md:py-32" style={{ background: "var(--bg2)" }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal className="max-w-2xl mb-10 sm:mb-16">
          <p className="font-mono text-sm mb-3" style={{ color: "var(--accent)" }}>// портфоліо</p>
          <h2 className="font-display font-bold text-[1.7rem] sm:text-3xl md:text-[2.8rem] tracking-tight mb-4">
            Роботи, якими я пишаюся
          </h2>
          <p className="text-lg" style={{ color: "var(--text-soft)" }}>
            Кожен проєкт — окрема задача бізнесу: від першого ескізу до готового сайту. Натисніть на проєкт, щоб
            переглянути деталі.
          </p>
        </Reveal>

        <MobileExpand
          items={items}
          previewCount={2}
          label="Переглянути портфоліо"
          gridClassName="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-7"
        />
      </div>

      {activeProject && active && (
        <ProjectModal project={activeProject} initialTab={active.tab} onClose={() => setActive(null)} />
      )}
    </section>
  );
}
