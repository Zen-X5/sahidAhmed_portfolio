import { Container, Section } from "@/components/layout";
import { SectionHeading } from "@/components/ui";
import { aboutHighlights, aboutStats, aboutSummary } from "@/data/about";

export default function AboutSection() {
  return (
    <Section id="about" className="border-t border-white/5">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="stagger-children">
          <SectionHeading
            title="About"
            subtitle="I focus on delivering software that is practical, scalable, and aligned with business outcomes."
          />

          <p className="mt-6 max-w-3xl text-zinc-300">{aboutSummary.intro}</p>
          <p className="mt-4 max-w-3xl text-zinc-400">{aboutSummary.details}</p>

          <ul className="stagger-children mt-6 grid gap-3 text-sm text-zinc-300 md:grid-cols-2">
            {aboutHighlights.map((item) => (
              <li key={item} className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="stagger-children grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {aboutStats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="text-xs uppercase tracking-wider text-zinc-500">{stat.label}</p>
              <p className="mt-2 text-3xl font-semibold text-cyan-200">{stat.value}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
