import { Container, Section } from "@/components/layout";
import { SectionHeading } from "@/components/ui";
import { siteConfig } from "@/config/site";

export default function ContactSection() {
  return (
    <Section id="contact" className="border-t border-white/5">
      <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="stagger-children">
          <SectionHeading
            title="Contact"
            subtitle="If you are hiring for internships, freelance work, or collaborative builds, I would love to connect."
          />

          <p className="mt-6 max-w-2xl text-zinc-300">
            I am currently based in {siteConfig.location} and open to remote-friendly product opportunities across frontend,
            full-stack, and AI-integrated web projects.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:flex sm:flex-wrap">
            <a
              href={siteConfig.links.email}
              className="group relative overflow-hidden rounded-full bg-cyan-400 px-6 py-3.5 text-center text-sm font-bold text-slate-950 transition-all hover:scale-105 hover:bg-cyan-300 hover:shadow-[0_0_20px_-3px_rgba(34,211,238,0.4)]"
            >
              <span className="relative z-10">Email Me</span>
              <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.02] px-6 py-3.5 text-center text-sm font-medium text-zinc-300 backdrop-blur transition-all hover:border-cyan-500/40 hover:bg-white/[0.05] hover:text-cyan-300 hover:shadow-[0_0_15px_-3px_rgba(34,211,238,0.1)]"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/10 bg-white/[0.02] px-6 py-3.5 text-center text-sm font-medium text-zinc-300 backdrop-blur transition-all hover:border-cyan-500/40 hover:bg-white/[0.05] hover:text-cyan-300 hover:shadow-[0_0_15px_-3px_rgba(34,211,238,0.1)]"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="stagger-children space-y-4 lg:pl-8 mt-10 lg:mt-0">
          <article className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.04] hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-wider text-zinc-500 transition-colors group-hover:text-cyan-400/80">Primary Focus</p>
              <p className="mt-3 text-zinc-200">Internships, freelance projects, and product engineering collaborations.</p>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.04] hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-wider text-zinc-500 transition-colors group-hover:text-cyan-400/80">Best For</p>
              <ul className="mt-4 grid gap-3 text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500/60 transition-colors group-hover:bg-cyan-400" />
                  <span>React and Next.js frontend builds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500/60 transition-colors group-hover:bg-cyan-400" />
                  <span>End-to-end MERN platform development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500/60 transition-colors group-hover:bg-cyan-400" />
                  <span>AI and IoT feature integration in web apps</span>
                </li>
              </ul>
            </div>
          </article>

          <article className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-cyan-400/[0.03] p-6 backdrop-blur transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-400/[0.05] hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.2)]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">Availability</p>
              <p className="mt-3 text-sm font-medium text-cyan-50">{siteConfig.availability}</p>
            </div>
          </article>
        </div>
      </Container>
    </Section>
  );
}
