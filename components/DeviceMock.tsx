import type { Project } from "@/lib/data";
import MockThumb from "./MockThumb";

export type DeviceTab = "desktop" | "tablet" | "mobile";

export default function DeviceMock({ project, tab }: { project: Project; tab: DeviceTab }) {
  if (tab === "desktop") {
    return (
      <div className="max-w-xl mx-auto">
        <div
          className="rounded-t-xl border border-b-0 px-3 py-2 flex items-center gap-1.5"
          style={{ borderColor: "var(--border)", background: "var(--bg2)" }}
        >
          <span className="traffic-dot" style={{ background: "#FF5F57" }} />
          <span className="traffic-dot" style={{ background: "#FEBC2E" }} />
          <span className="traffic-dot" style={{ background: "#28C840" }} />
        </div>
        <div className="device-frame aspect-[16/10] rounded-t-none">
          <MockThumb project={project} big />
        </div>
        <div
          className="mx-auto h-2.5 w-2/3 rounded-b-xl"
          style={{ background: "var(--bg2)", border: "1px solid var(--border)", borderTop: "none" }}
        />
        <div className="mx-auto h-1.5 w-1/4 rounded-b-lg" style={{ background: "var(--border)" }} />
      </div>
    );
  }

  if (tab === "tablet") {
    return (
      <div
        className="mx-auto max-w-xs p-3 rounded-[1.75rem]"
        style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}
      >
        <div className="device-frame aspect-[3/4]">
          <MockThumb project={project} big />
        </div>
        <div className="mx-auto mt-2.5 w-9 h-9 rounded-full" style={{ border: "2px solid var(--border)" }} />
      </div>
    );
  }

  return (
    <div
      className="mx-auto max-w-[220px] p-2.5 rounded-[2rem]"
      style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}
    >
      <div className="mx-auto mb-1.5 w-16 h-4 rounded-full" style={{ background: "var(--border)" }} />
      <div className="device-frame aspect-[9/16]">
        <MockThumb project={project} big />
      </div>
      <div className="mx-auto mt-1.5 w-16 h-1 rounded-full" style={{ background: "var(--border)" }} />
    </div>
  );
}
