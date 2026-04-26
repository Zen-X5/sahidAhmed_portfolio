import { Container, Section } from "@/components/layout";
import { SectionHeading } from "@/components/ui";
import { skillCategories } from "@/data/skills";
import {
  Bot,
  Braces,
  Cloud,
  Code2,
  Cpu,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  Hammer,
  Layers3,
  MessageSquare,
  Monitor,
  Network,
  Palette,
  Route,
  ScanEye,
  Server,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const categoryIcons: Record<string, LucideIcon> = {
  Languages: Code2,
  Frameworks: Layers3,
  Database: Database,
  Tools: Wrench,
  "AI and ML": Bot,
  IoT: Cpu,
  Other: Sparkles,
};

const skillIcons: Record<string, LucideIcon> = {
  JavaScript: FileCode2,
  HTML: Globe,
  CSS: Palette,
  "React.js": Monitor,
  "Next.js": Route,
  "Node.js": Server,
  "Express.js": Server,
  MongoDB: Database,
  Git: GitBranch,
  GitHub: GitBranch,
  Vercel: Cloud,
  Cloudinary: Cloud,
  "Chatbot Development": MessageSquare,
  "OpenAI API": Bot,
  "Image Processing": ScanEye,
  "AI Integration": Sparkles,
  ESP32: Cpu,
  "Sensor-based Systems": Network,
  "Real-world IoT Integrations": Cpu,
  "REST APIs": Braces,
  "Full-Stack Development": Hammer,
};

export default function SkillsSection() {
  return (
    <Section id="skills" className="border-t border-white/5">
      <Container>
        <SectionHeading
          title="Skills"
          subtitle="A practical capability stack shaped by product delivery, architecture ownership, and real-world implementation."
        />

        <div className="stagger-children mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <article 
              key={category.title} 
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.04] hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              <div className="relative z-10 flex items-center gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-400/10 text-cyan-300 transition-transform duration-300 group-hover:scale-110 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/20">
                  {(() => {
                    const CategoryIcon = categoryIcons[category.title] ?? Sparkles;
                    return <CategoryIcon size={18} />;
                  })()}
                </span>
                <h3 className="text-base font-semibold tracking-wide text-zinc-100">{category.title}</h3>
              </div>

              <ul className="relative z-10 mt-6 grid gap-2.5">
                {category.skills.map((skill) => (
                  <li 
                    key={skill} 
                    className="flex items-center gap-3 rounded-xl border border-white/5 bg-black/40 px-3.5 py-2.5 text-sm font-medium text-zinc-300 transition-colors duration-200 hover:border-cyan-500/20 hover:bg-cyan-950/40 hover:text-cyan-100"
                  >
                    <span className="text-cyan-500/60">
                      {(() => {
                        const SkillIcon = skillIcons[skill] ?? Terminal;
                        return <SkillIcon size={16} />;
                      })()}
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
