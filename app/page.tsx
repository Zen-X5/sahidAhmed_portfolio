import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  FooterSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from "@/components/sections";
import { Navbar } from "@/components/navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <FooterSection />
    </div>
  );
}
