export default function Footer() {
  return (
    <footer className="footer">
      <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem" }}>
        <span className="footer-name">Sparsh Jain</span>
        <span className="footer-divider" aria-hidden="true">·</span>
        <span className="footer-year">© {new Date().getFullYear()}</span>
      </span>

      <div className="footer-links">
        <a
          href="https://linkedin.com/in/sparshj20"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-icon-link"
          aria-label="LinkedIn"
        >
          {/* LinkedIn icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span>LinkedIn</span>
        </a>

        <a
          href="mailto:sparsh.iitgn@gmail.com"
          className="footer-icon-link"
          aria-label="Email"
        >
          {/* Mail icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
          <span>Email</span>
        </a>
      </div>
    </footer>
  );
}
