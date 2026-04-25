import { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`min-h-[calc(100vh-3.5rem)] py-16 md:min-h-[calc(100vh-4rem)] md:py-24 ${className}`.trim()}>
      {children}
    </section>
  );
}
