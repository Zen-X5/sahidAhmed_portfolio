import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout";
import { ArrowLeft, ExternalLink, GitBranch, CheckCircle2 } from "lucide-react";
import ImageSlider from "@/components/projects/ImageSlider";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: `${siteConfig.url}/projects/${project.slug}`,
      images: project.image ? [{ url: project.image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: project.image ? [project.image] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950 pb-20 pt-32 selection:bg-cyan-300/30">
      <Container>
        <Link 
          href="/#projects" 
          className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-cyan-300"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 items-start">
          {/* Left: Image / Slider */}
          <div className="w-full">
            <ImageSlider images={project.images || (project.image ? [project.image] : [])} />
          </div>

          {/* Right: Project Name and Info */}
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs mb-6">
              <span className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1.5 text-cyan-200">
                {project.kind}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-zinc-300">
                {project.year}
              </span>
              {project.featured && (
                <span className="rounded-full border border-violet-300/30 bg-violet-400/10 px-3 py-1.5 text-violet-200">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            
            <p className="mt-6 text-lg leading-relaxed text-zinc-300">
              {project.description}
            </p>

            <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-400/5 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">Primary Impact</h3>
              <p className="mt-2 text-zinc-200">{project.impact}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition-all hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_20px_-3px_rgba(34,211,238,0.4)]"
                >
                  <ExternalLink size={16} />
                  Visit Live Site
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.02] px-6 py-3 text-sm font-medium text-zinc-100 backdrop-blur transition-all hover:border-cyan-300/60 hover:bg-white/[0.05] hover:text-cyan-200 hover:shadow-[0_0_15px_-3px_rgba(34,211,238,0.1)]"
                >
                  <GitBranch size={16} />
                  View Source Code
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Below: Many Stuff (Tech Stack, Highlights, etc) */}
        <div className="mt-20 border-t border-white/10 pt-16">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-white">Project Highlights</h2>
              <ul className="mt-8 grid gap-4">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex gap-4 items-start">
                    <CheckCircle2 className="mt-1 shrink-0 text-cyan-400" size={20} />
                    <span className="text-zinc-300 leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white">Technology Stack</h2>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <div 
                    key={tech} 
                    className="flex items-center rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-zinc-200 transition-colors hover:border-cyan-500/30 hover:bg-white/[0.04]"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </Container>
    </div>
  );
}
