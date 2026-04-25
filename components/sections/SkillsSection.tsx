import { Container, Section } from "@/components/layout";
import { SectionHeading } from "@/components/ui";
import { skillCategories } from "@/data/skills";

function skillAbbr(skill: string) {
  return skill
    .split(/\s|\.|\+|\-/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export default function SkillsSection() {
  return (
    <Section id="skills" className="border-t border-white/5">
      <Container>
        <SectionHeading
          title="Skills"
          subtitle="Core tools and technologies I use to architect, build, and ship real products."
        />

        <div className="stagger-children mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => (
            <article
              key={category.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300">{category.title}</h3>
              <ul className="mt-4 grid gap-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-sm text-zinc-200">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-300/25 bg-cyan-400/10 text-xs font-semibold text-cyan-200">
                      {skillAbbr(skill)}
                    </span>
                    <span>{skill}</span>
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
