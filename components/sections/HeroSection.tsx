import { Container, Section } from "@/components/layout";
import { siteConfig } from "@/config/site";

export default function HeroSection() {
  return (
    <Section id="hero" className="relative overflow-hidden pt-14 sm:pt-16 md:pt-24 lg:pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_38%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.16),transparent_34%)]" />
      <Container className="grid items-start gap-8 md:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="stagger-children">
          <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-xs font-medium tracking-wide text-cyan-200">
            {siteConfig.availability}
          </p>

          <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-zinc-50 sm:text-4xl md:text-5xl lg:text-6xl">
            Building scalable digital products with MERN, AI, and IoT.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            I am {siteConfig.name}, a {siteConfig.role} from {siteConfig.location}. I design and ship production-ready
            applications with strong architecture, clean frontend systems, and measurable real-world impact.
          </p>

          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:items-center">
            <a
              href="#projects"
              className="w-full rounded-full bg-cyan-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 sm:w-auto"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-zinc-100 transition-colors hover:border-cyan-300/60 hover:text-cyan-200 sm:w-auto"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-3 text-sm text-zinc-300 sm:flex sm:flex-wrap">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-4 py-2 text-center transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
            >
              GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-4 py-2 text-center transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.links.email}
              className="rounded-full border border-white/15 px-4 py-2 text-center transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
            >
              Email
            </a>
          </div>
        </div>

        <div className="stagger-children grid gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-widest text-zinc-400">Current Focus</p>
            <p className="mt-2 text-base text-zinc-100">Full-stack architecture, API reliability, and UX performance.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-widest text-zinc-400">Selected Work</p>
            <p className="mt-2 text-base text-zinc-100">5 flagship projects across civic tech, agri-tech, education, and enterprise.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-xs uppercase tracking-widest text-zinc-400">Leadership</p>
            <p className="mt-2 text-base text-zinc-100">Tech Lead and Developer Co-Lead roles with community mentorship impact.</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
