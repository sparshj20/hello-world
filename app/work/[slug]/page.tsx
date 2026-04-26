import { getProject, listProjects } from "@/lib/content";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return listProjects().map((p) => ({ slug: p.slug }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return (
    <article className="max-w-2xl">
      <header className="mb-10">
        <p className="text-sm mb-2" style={{ color: "var(--color-muted)" }}>
          {project.role} · {project.year}
        </p>
        <h1 className="text-3xl font-semibold mb-3" style={{ color: "var(--color-ink)" }}>
          {project.title}
        </h1>
        <p className="text-lg" style={{ color: "var(--color-muted)" }}>
          {project.summary}
        </p>
      </header>
      <MarkdownRenderer content={project.content} />
    </article>
  );
}
