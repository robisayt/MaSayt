"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/lib/data";
import MockThumb from "./MockThumb";
import DeviceMock, { type DeviceTab } from "./DeviceMock";

type Tab = "overview" | DeviceTab;

const TABS: { key: Tab; label: string }[] = [
  { key: "overview", label: "Огляд" },
  { key: "desktop", label: "ПК" },
  { key: "tablet", label: "Планшет" },
  { key: "mobile", label: "Телефон" },
];

export default function ProjectModal({
  project,
  initialTab,
  onClose,
}: {
  project: Project;
  initialTab: Tab;
  onClose: () => void;
}) {
  const [tab, setTab] = useState<Tab>(initialTab);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="project-modal open fixed inset-0 z-[60] flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="absolute inset-0"
        style={{ background: "rgba(10,14,22,.55)", backdropFilter: "blur(4px)" }}
        onClick={onClose}
      />

      <div
        className="modal-panel relative w-full sm:max-w-3xl max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl"
        style={{ background: "var(--card)", boxShadow: "var(--shadow)" }}
      >
        <div
          className="sticky top-0 z-10 flex items-center justify-between px-6 md:px-8 py-5"
          style={{ background: "var(--card)", borderBottom: "1px solid var(--border)" }}
        >
          <h3 id="modal-title" className="font-display font-bold text-xl">
            {project.title}
          </h3>
          <button
            className="w-9 h-9 rounded-full flex items-center justify-center btn-press"
            style={{ background: "var(--bg2)" }}
            aria-label="Закрити"
            onClick={onClose}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <div className="px-6 md:px-8 pt-5">
          <div className="flex flex-wrap gap-2" role="tablist">
            {TABS.map((t) => (
              <button
                key={t.key}
                className="tab-btn font-mono text-xs px-4 py-2 rounded-lg btn-press"
                style={{ border: "1px solid var(--border)" }}
                role="tab"
                aria-selected={t.key === tab}
                onClick={() => setTab(t.key)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="px-6 md:px-8 py-7">
          {tab === "overview" ? (
            <>
              <div className="h-48 rounded-xl overflow-hidden mb-6">
                <MockThumb project={project} big />
              </div>
              <p className="text-sm mb-6" style={{ color: "var(--text-soft)" }}>
                {project.desc}
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="font-mono text-xs mb-2" style={{ color: "var(--accent)" }}>ЗАВДАННЯ</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-soft)" }}>{project.task}</p>
                </div>
                <div>
                  <p className="font-mono text-xs mb-2" style={{ color: "var(--accent)" }}>РІШЕННЯ</p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-soft)" }}>{project.solution}</p>
                </div>
              </div>
              <p className="font-mono text-xs mb-2" style={{ color: "var(--accent)" }}>КОЛЬОРИ</p>
              <div className="flex gap-2 mb-6">
                <span className="w-8 h-8 rounded-lg" style={{ background: project.from }} />
                <span className="w-8 h-8 rounded-lg" style={{ background: project.to }} />
                <span className="w-8 h-8 rounded-lg" style={{ background: "var(--bg2)", border: "1px solid var(--border)" }} />
              </div>
              <p className="font-mono text-xs mb-2" style={{ color: "var(--accent)" }}>ТЕХНОЛОГІЇ</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1.5 rounded-lg"
                    style={{ border: "1px solid var(--border)", color: "var(--text-soft)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </>
          ) : (
            <>
              <DeviceMock project={project} tab={tab} />
              <p className="text-center text-xs mt-6" style={{ color: "var(--text-soft)" }}>
                Демонстраційний макет проєкту.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
