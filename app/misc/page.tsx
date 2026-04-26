import Link from "next/link";
import { listPoems } from "@/lib/content";
import PhotoCard, { PhotoData } from "@/components/PhotoCard";

const photos: PhotoData[] = [
  { id: 1, caption: "Place name", location: "Location", date: "Month Year", story: "A short story or feeling from this moment." },
  { id: 2, caption: "Place name", location: "Location", date: "Month Year", story: "A short story or feeling from this moment." },
  { id: 3, caption: "Place name", location: "Location", date: "Month Year" },
  { id: 4, caption: "Place name", location: "Location", date: "Month Year" },
  { id: 5, caption: "Place name", location: "Location", date: "Month Year" },
  { id: 6, caption: "Place name", location: "Location", date: "Month Year" },
];

export default function MiscPage() {
  const poems = listPoems();

  return (
    <div className="max-w-2xl">
      <p className="mb-12" style={{ color: "var(--color-muted)" }}>
        Things outside work.
      </p>

      <section className="mb-12">
        <h2
          className="text-sm font-semibold uppercase tracking-wider mb-6"
          style={{ color: "var(--color-muted)" }}
        >
          Personal
        </h2>
        <p className="leading-relaxed mb-10" style={{ color: "var(--color-muted)" }}>
          I read a lot — mostly non-fiction, some sci-fi. I run half-marathons and love
          photography. Most weekends I&apos;m either on a trail or at a coffee shop with a book.
        </p>

        {/* Photography */}
        <div className="mb-12">
          <h3
            className="text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ color: "var(--color-muted)" }}
          >
            Photography
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {photos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} />
            ))}
          </div>
        </div>

        {/* Poems */}
        <div>
          <h3
            className="text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ color: "var(--color-muted)" }}
          >
            Poems
          </h3>
          <div className="space-y-3">
            {poems.map((poem) => (
              <div key={poem.slug}>
                <Link
                  href={`/misc/personal/${poem.slug}`}
                  className="text-sm text-link"
                >
                  {poem.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <h2
          className="text-sm font-semibold uppercase tracking-wider mb-6"
          style={{ color: "var(--color-muted)" }}
        >
          Experiments
        </h2>
        <p className="leading-relaxed" style={{ color: "var(--color-muted)" }}>
          Small side projects and prototypes I&apos;ve built to scratch a product itch. This section
          will grow as I ship more things.
        </p>
      </section>
    </div>
  );
}
