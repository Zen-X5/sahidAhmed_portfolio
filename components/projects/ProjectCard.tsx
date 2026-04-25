import { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-cyan-300/50 sm:p-6">
      <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.16),transparent_45%)]" />
      </div>

      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-2.5 py-1 text-cyan-200">
          {project.kind}
        </span>
        <span className="rounded-full border border-white/10 px-2.5 py-1 text-zinc-300">{project.year}</span>
        {project.featured ? (
          <span className="rounded-full border border-violet-300/30 bg-violet-400/10 px-2.5 py-1 text-violet-200">
            Featured
          </span>
        ) : null}
      </div>

      <h3 className="mt-4 text-lg font-semibold text-zinc-50 sm:text-xl">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-300">{project.description}</p>
      <p className="mt-3 text-sm text-cyan-200">{project.impact}</p>

      <ul className="mt-4 grid gap-2 text-sm text-zinc-300">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2">
            <span className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span key={item} className="rounded-md border border-white/10 px-2 py-1 text-xs text-zinc-300">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 text-sm sm:flex sm:flex-wrap">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-cyan-400 px-4 py-2 text-center font-medium text-slate-950 transition-transform hover:-translate-y-0.5"
          >
            Live Demo
          </a>
        ) : (
          <span className="rounded-full border border-white/10 px-4 py-2 text-center text-zinc-500">Private Demo</span>
        )}

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-white/20 px-4 py-2 text-center font-medium text-zinc-100 transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
          >
            GitHub
          </a>
        ) : (
          <span className="rounded-full border border-white/10 px-4 py-2 text-center text-zinc-500">Source Unavailable</span>
        )}
      </div>
    </article>
  );
}
