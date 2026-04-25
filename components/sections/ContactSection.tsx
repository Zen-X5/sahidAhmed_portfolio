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
              className="rounded-full bg-cyan-400 px-5 py-3 text-center text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
            >
              Email Me
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-5 py-3 text-center text-sm font-semibold text-zinc-100 transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-5 py-3 text-center text-sm font-semibold text-zinc-100 transition-colors hover:border-cyan-300/60 hover:text-cyan-200"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="stagger-children space-y-4">
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-wider text-zinc-500">Primary Focus</p>
            <p className="mt-2 text-zinc-200">Internships, freelance projects, and product engineering collaborations.</p>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-wider text-zinc-500">Best For</p>
            <ul className="mt-3 grid gap-2 text-sm text-zinc-300">
              <li className="flex gap-2">
                <span className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                <span>React and Next.js frontend builds</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                <span>End-to-end MERN platform development</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                <span>AI and IoT feature integration in web apps</span>
              </li>
            </ul>
          </article>

          <article className="rounded-2xl border border-cyan-300/25 bg-cyan-400/10 p-5">
            <p className="text-xs uppercase tracking-wider text-cyan-200/90">Availability</p>
            <p className="mt-2 text-sm text-cyan-100">{siteConfig.availability}</p>
          </article>
        </div>
      </Container>
    </Section>
  );
}
