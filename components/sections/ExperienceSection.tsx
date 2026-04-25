import { Container, Section } from "@/components/layout";
import { SectionHeading } from "@/components/ui";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <Section id="experience" className="border-t border-white/5">
      <Container>
        <SectionHeading
          title="Experience"
          subtitle="Leadership and execution across product delivery, technical mentorship, and developer communities."
        />

        <div className="stagger-children mt-8 grid gap-5">
          {experiences.map((item) => (
            <article key={`${item.company}-${item.role}`} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-zinc-50">{item.role}</h3>
                  <p className="mt-1 text-zinc-300">{item.company}</p>
                </div>
                <span className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
                  {item.duration}
                </span>
              </div>

              <ul className="mt-5 grid gap-2 text-sm text-zinc-300">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="mt-[7px] inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
