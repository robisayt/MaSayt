import type { Project } from "@/lib/data";

export default function MockThumb({ project, big = false }: { project: Project; big?: boolean }) {
  return (
    <div
      className="mock-inner w-full h-full flex flex-col"
      style={{ background: `linear-gradient(135deg, ${project.from}, ${project.to})` }}
    >
      {/* browser chrome */}
      <div className="flex items-center gap-1.5 px-3 pt-3 pb-2">
        <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
        <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
        <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
        <span className="ml-2 h-2.5 flex-1 max-w-[45%] rounded-full bg-white/15" />
      </div>

      {/* nav row */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-[4px] bg-white/70" />
          <span className="h-1.5 w-10 rounded-full bg-white/40" />
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <span className="h-1.5 w-6 rounded-full bg-white/30" />
          <span className="h-1.5 w-6 rounded-full bg-white/30" />
          <span className="h-1.5 w-6 rounded-full bg-white/30" />
        </div>
        <span className="h-3 w-10 rounded-full bg-white/80" />
      </div>

      {/* hero */}
      <div className="flex-1 px-4 py-4 flex flex-col gap-2 justify-center">
        <div className="h-2.5 w-3/4 rounded-full bg-white/85" />
        <div className="h-2.5 w-1/2 rounded-full bg-white/85" />
        <div className="h-1.5 w-2/3 rounded-full bg-white/40 mt-1" />
        <div className="h-5 w-20 rounded-lg bg-white mt-2.5" />

        <div className={`${big ? "h-16" : "h-9"} w-full rounded-lg bg-white/10 mt-3 grid grid-cols-3 gap-2 p-2`}>
          <div className="rounded-md bg-white/15 flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-white/60" />
          </div>
          <div className="rounded-md bg-white/15 flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-white/60" />
          </div>
          <div className="rounded-md bg-white/15 flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-white/60" />
          </div>
        </div>
      </div>
    </div>
  );
}
