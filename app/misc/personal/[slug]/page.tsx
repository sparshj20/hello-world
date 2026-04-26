import { getPoem, listPoems } from "@/lib/content";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return listPoems().map((p) => ({ slug: p.slug }));
}

export default async function PoemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const poem = getPoem(slug);
  if (!poem) notFound();

  return (
    <article className="max-w-2xl">
      <header className="mb-10">
        <p className="text-xs mb-2" style={{ color: "var(--color-muted)" }}>
          {new Date(poem.date).toLocaleDateString("en-US", { year: "numeric", month: "long" })}
        </p>
        <h1 className="text-2xl font-semibold" style={{ color: "var(--color-ink)" }}>
          {poem.title}
        </h1>
      </header>

      <div
        className="whitespace-pre-wrap leading-relaxed text-base"
        style={{ color: "var(--color-ink)", fontStyle: "italic" }}
      >
        {poem.content.trim()}
      </div>
    </article>
  );
}
