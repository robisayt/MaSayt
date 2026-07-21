"use client";

import { useState, type ReactNode } from "react";

export default function MobileExpand({
  items,
  previewCount,
  label,
  gridClassName,
}: {
  items: ReactNode[];
  previewCount: number;
  label: string;
  gridClassName: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const preview = items.slice(0, previewCount);
  const rest = items.slice(previewCount);

  return (
    <>
      <div className={gridClassName}>
        {preview}
        <div className={`${expanded ? "contents" : "hidden"} sm:contents`}>{rest}</div>
      </div>

      {rest.length > 0 && (
        <div className="sm:hidden flex justify-center mt-7">
          <button
            className="btn-press inline-flex items-center gap-2 font-medium text-sm px-6 py-3.5 rounded-xl"
            style={{ border: "1.5px solid var(--border)" }}
            aria-expanded={expanded}
            onClick={() => setExpanded((v) => !v)}
          >
            {expanded ? "Згорнути" : label}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transform: expanded ? "rotate(180deg)" : "none", transition: "transform .3s ease" }}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
