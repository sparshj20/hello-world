export default function MiscPage() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-semibold mb-2" style={{ color: "var(--color-ink)" }}>
        Misc
      </h1>
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
        <p className="leading-relaxed" style={{ color: "var(--color-muted)" }}>
          I read a lot — mostly non-fiction, some sci-fi. I run half-marathons and dabble in
          photography. Most weekends I&apos;m either on a trail or at a coffee shop with a book.
        </p>
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
