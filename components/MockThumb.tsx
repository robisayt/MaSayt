import type { Project } from "@/lib/data";

export default function MockThumb({ project, big = false }: { project: Project; big?: boolean }) {
  return (
    <div
      className="mock-inner w-full h-full flex flex-col"
      style={{ background: `linear-gradient(135deg, ${project.from}, ${project.to})` }}
    >
      <div className="flex items-center gap-1.5 px-3 pt-3">
        <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
        <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
        <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
      </div>
      <div className="flex-1 p-4 flex flex-col gap-2 justify-center">
        <div className="h-2 w-1/3 rounded-full bg-white/80" />
        <div className="h-2 w-2/3 rounded-full bg-white/50" />
        <div className={`${big ? "h-20" : "h-10"} w-full rounded-lg bg-white/20 mt-2 flex items-center justify-center`}>
          <div className="grid grid-cols-3 gap-1.5 w-2/3">
            <div className="h-3 rounded bg-white/40" />
            <div className="h-3 rounded bg-white/40" />
            <div className="h-3 rounded bg-white/40" />
          </div>
        </div>
      </div>
    </div>
  );
}
