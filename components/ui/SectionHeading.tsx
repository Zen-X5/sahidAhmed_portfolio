type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold text-white md:text-3xl">{title}</h2>
      {subtitle ? <p className="max-w-2xl text-zinc-400">{subtitle}</p> : null}
    </div>
  );
}
