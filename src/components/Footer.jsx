// src/components/Footer.jsx

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container" id="contact">
        <div className="footer-brand">
          <a href="#top" className="footer-logo">
            DAGIM<span>.</span>
          </a>
          <p className="footer-tagline">
            Building software solutions with quality.
          </p>
        </div>

        <div className="footer-nav">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
          </ul>
        </div>

        <div className="footer-socials">
          <h4>Connect</h4>
          <div className="social-links">
            <a
              href="https://github.com/dagim2453-svg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/dagim-mathewos-46388230a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
            <a href="mailto:dagim2453@gmail.com" aria-label="Send Email">
              Email
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} All rights reserved.</p>
      </div>
    </footer>
  );
}
