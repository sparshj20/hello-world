export default function Footer() {
  return (
    <footer
      className="mt-16 py-8 text-sm flex gap-6"
      style={{ borderTop: "1px solid var(--color-border)", color: "var(--color-muted)" }}
    >
      <span>Sparsh Jain © {new Date().getFullYear()}</span>
      <a
        href="https://linkedin.com/in/sparshj20"
        className="hover:opacity-60 transition-opacity"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a href="mailto:sparsh.iitgn@gmail.com" className="hover:opacity-60 transition-opacity">
        Email
      </a>
    </footer>
  );
}
