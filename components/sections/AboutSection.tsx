import { Container, Section } from "@/components/layout";
import { SectionHeading } from "@/components/ui";
import {
  aboutHighlights,
  aboutPrinciples,
  aboutSpecialties,
  aboutStats,
  aboutSummary,
  aboutTimeline,
} from "@/data/about";

export default function AboutSection() {
  return (
    <Section id="about" className="border-t border-white/5">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="stagger-children">
          <SectionHeading
            title="About"
            subtitle="I build software like a product engineer: clear architecture, measurable outcomes, and delivery discipline."
          />

          <p className="mt-5 max-w-3xl text-zinc-300">{aboutSummary.intro}</p>
          <p className="mt-4 max-w-3xl text-zinc-400">{aboutSummary.details}</p>

          <div className="mt-6 rounded-2xl border border-cyan-300/25 bg-cyan-400/[0.06] p-4">
            <p className="text-xs uppercase tracking-widest text-cyan-200/90">Build Philosophy</p>
            <pre className="mt-3 overflow-x-auto text-sm leading-7 text-zinc-200">
{`const ship = (idea) => {
  architect(idea);
  buildCleanly(idea);
  measureImpact(idea);
};`}
            </pre>
            <ul className="mt-2 grid gap-2 text-sm text-zinc-300 md:grid-cols-3">
              {aboutPrinciples.map((principle) => (
                <li key={principle} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2">
                  {principle}
                </li>
              ))}
            </ul>
          </div>

          <ul className="stagger-children mt-5 grid gap-3 text-sm text-zinc-300 md:grid-cols-2">
            {aboutHighlights.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] px-4 py-3"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {aboutSpecialties.map((specialty) => (
              <span
                key={specialty}
                className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1.5 text-xs uppercase tracking-wide text-zinc-300"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        <div className="stagger-children space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[11px] uppercase tracking-wider text-zinc-500">{stat.label}</p>
                <p className="mt-2 text-4xl font-semibold text-cyan-200">{stat.value}</p>
              </div>
            ))}
          </div>

          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-widest text-zinc-500">Journey Snapshot</p>
            <ul className="mt-4 grid gap-3">
              {aboutTimeline.map((item) => (
                <li key={`${item.period}-${item.title}`} className="rounded-xl border border-white/10 bg-black/20 px-4 py-3">
                  <p className="text-xs font-medium tracking-wide text-cyan-200">{item.period}</p>
                  <p className="mt-1 text-sm font-semibold text-zinc-100">{item.title}</p>
                  <p className="mt-1 text-sm text-zinc-400">{item.detail}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </Section>
  );
}
