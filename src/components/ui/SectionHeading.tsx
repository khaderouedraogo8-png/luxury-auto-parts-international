type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.28em] text-crimson">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-ivory sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-silver">
          {description}
        </p>
      ) : null}
    </div>
  );
}
