import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from "@/components/sections";
import { SectionDeck } from "@/components/navigation";

export default function Home() {
  const sections = [
    { id: "hero", label: "Landing", content: <HeroSection /> },
    { id: "about", label: "About", content: <AboutSection /> },
    { id: "skills", label: "Skills", content: <SkillsSection /> },
    { id: "projects", label: "Projects", content: <ProjectsSection /> },
    { id: "experience", label: "Experience", content: <ExperienceSection /> },
    { id: "contact", label: "Contact", content: <ContactSection /> },
  ];

  return (
    <div className="h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <SectionDeck sections={sections} />
    </div>
  );
}
