import { Container, Section } from "@/components/layout";
import { ProjectCard } from "@/components/projects";
import { SectionHeading } from "@/components/ui";
import { projects } from "@/data/projects";

const sortedProjects = [...projects].sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));

export default function ProjectsSection() {
  return (
    <Section id="projects" className="border-t border-white/5">
      <Container>
        <SectionHeading
          title="Projects"
          subtitle="Selected products demonstrating full-stack execution, practical architecture, and real-world problem solving."
        />

        <div className="stagger-children mt-8 grid gap-6 lg:grid-cols-2">
          {sortedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
