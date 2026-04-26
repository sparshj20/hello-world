import { listProjects } from "@/lib/content";
import ProjectCard from "@/components/ProjectCard";

export default function WorkPage() {
  const projects = listProjects();
  return (
    <div className="max-w-2xl">
      <p className="mb-10" style={{ color: "var(--color-muted)" }}>
        Selected case studies from the last few years.
      </p>
      <div>
        {projects.length === 0 ? (
          <p style={{ color: "var(--color-muted)" }}>Case studies coming soon.</p>
        ) : (
          projects.map((p, i) => (
            <ProjectCard key={p.slug} slug={p.slug} title={p.title} year={p.year} summary={p.summary} isLast={i === projects.length - 1} />
          ))
        )}
      </div>
    </div>
  );
}
