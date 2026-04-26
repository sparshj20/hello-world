"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "home" },
  { href: "/work", label: "work" },
  { href: "/misc", label: "misc" },
];

export default function Nav() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="flex items-center justify-between py-8">
      {/* Logo — SJ initials, links to home */}
      <Link href="/" className="nav-logo" aria-label="Home">
        SJ
      </Link>

      <nav className="flex items-center gap-6">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`nav-link ${isActive(href) ? "nav-link--active" : ""}`}
          >
            {isActive(href) && <span className="nav-dot" aria-hidden="true" />}
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
