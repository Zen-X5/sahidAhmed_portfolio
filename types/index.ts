export type Project = {
  slug: string;
  title: string;
  description: string;
  impact: string;
  year: string;
  kind: "Web" | "Full-Stack" | "IoT" | "AI";
  featured?: boolean;
  tech: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  images?: string[];
};

export type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  points: string[];
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type StatItem = {
  label: string;
  value: string;
};
