import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  title: string;
  year: number;
  summary: string;
  isLast?: boolean;
}

export default function ProjectCard({ slug, title, year, summary, isLast }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${slug}`}
      className="block py-4 group"
      style={{ borderBottom: isLast ? "none" : "1px solid var(--color-border)" }}
    >
      <div className="flex items-baseline justify-between gap-4">
        <span
          className="font-medium transition-opacity group-hover:opacity-60"
          style={{ color: "var(--color-ink)" }}
        >
          {title}
        </span>
        <span className="text-sm shrink-0" style={{ color: "var(--color-muted)" }}>
          {year}
        </span>
      </div>
      <p className="text-sm mt-1" style={{ color: "var(--color-muted)" }}>
        {summary}
      </p>
    </Link>
  );
}
