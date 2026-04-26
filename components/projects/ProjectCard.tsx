import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all hover:border-cyan-400/30 hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.15)]">
      {project.image && (
        <Link href={`/projects/${project.slug}`} className="relative block h-48 w-full overflow-hidden sm:h-56">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
        </Link>
      )}

      <div className="relative flex flex-1 flex-col p-5 sm:p-6">
        <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_60%)]" />
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

        <Link href={`/projects/${project.slug}`} className="mt-4 inline-block">
          <h3 className="text-lg font-semibold text-zinc-50 transition-colors group-hover:text-cyan-300 sm:text-xl">{project.title}</h3>
        </Link>
        <p className="mt-3 text-sm leading-relaxed text-zinc-300 line-clamp-2">{project.description}</p>
        
        <div className="mt-5 flex flex-wrap gap-2 flex-1">
          {project.tech.slice(0, 4).map((item) => (
            <span key={item} className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 text-xs text-zinc-300">
              {item}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 text-xs text-zinc-400">
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
          <Link
            href={`/projects/${project.slug}`}
            className="rounded-full bg-cyan-400 px-5 py-2.5 text-center font-bold text-slate-950 transition-all hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_15px_-3px_rgba(34,211,238,0.4)]"
          >
            View in Brief
          </Link>
          
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 bg-white/[0.02] px-5 py-2.5 text-center font-medium text-zinc-100 backdrop-blur transition-colors hover:border-cyan-300/60 hover:bg-white/[0.05] hover:text-cyan-200"
            >
              Live Demo
            </a>
          ) : null}
          
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 bg-white/[0.02] px-5 py-2.5 text-center font-medium text-zinc-100 backdrop-blur transition-colors hover:border-cyan-300/60 hover:bg-white/[0.05] hover:text-cyan-200"
            >
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
