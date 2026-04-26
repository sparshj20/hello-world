interface ExperienceItemProps {
  years: string;
  role: string;
  company: string;
  description: string;
}

export default function ExperienceItem({ years, role, company, description }: ExperienceItemProps) {
  return (
    <div
      className="flex gap-8 py-4"
      style={{ borderBottom: "1px solid var(--color-border)" }}
    >
      <span className="text-sm w-24 shrink-0 pt-0.5" style={{ color: "var(--color-muted)" }}>
        {years}
      </span>
      <div>
        <p className="font-medium" style={{ color: "var(--color-ink)" }}>
          {role} — {company}
        </p>
        <p className="text-sm mt-1" style={{ color: "var(--color-muted)" }}>
          {description}
        </p>
      </div>
    </div>
  );
}
