import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Foilquiltinsulation",
  description: "SuperQuilt & Multifoil Insulation — Installation for Roofs, Walls & Floors across Kent, Surrey, and Hampshire.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="site-wrapper">
          {/* ── HEADER ── */}
          <header className="site-header">
            <a href="/" className="site-title">
              <img src="/assets/logo.png" alt="Foil Quilt Logo" style={{ height: "120px", width: "auto" }} />
            </a>
            <nav aria-label="Main">
              <ul className="site-nav">
                <li><a href="/hampshire">Hampshire Installers</a></li>
                <li><a href="/isle-of-wight">Isle of Wight Installers</a></li>
                <li><a href="/kent">Kent Installers</a></li>
                <li><a href="/sussex">Sussex Installers</a></li>
              </ul>
            </nav>
          </header>

          {/* ── PAGE CONTENT ── */}
          {children}

          {/* ── FOOTER ── */}
          <footer className="site-footer">
            <div className="footer-grid">
              <div className="footer-brand">
                <a href="/" className="site-title">
                  <img src="/assets/logo.png" alt="Foil Quilt Logo" style={{ height: "108px", width: "auto" }} />
                </a>
                <p>Professional multifoil insulation supply and fit services across the South East.</p>
              </div>
              <div className="footer-col">
                <h4>About</h4>
                <ul className="footer-links">
                  <li><a href="#">Team</a></li>
                  <li><a href="#">History</a></li>
                  <li><a href="#">Careers</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Privacy</h4>
                <ul className="footer-links">
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms and Conditions</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Social</h4>
                <ul className="footer-links">
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">Twitter/X</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>Designed with WordPress. Replicated in Next.js.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
