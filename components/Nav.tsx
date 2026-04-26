import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex gap-6 py-8">
      <Link href="/" style={{ color: "var(--color-ink)" }} className="hover:opacity-60 transition-opacity">
        home
      </Link>
      <Link href="/work" style={{ color: "var(--color-ink)" }} className="hover:opacity-60 transition-opacity">
        work
      </Link>
      <Link href="/misc" style={{ color: "var(--color-ink)" }} className="hover:opacity-60 transition-opacity">
        misc
      </Link>
    </nav>
  );
}
