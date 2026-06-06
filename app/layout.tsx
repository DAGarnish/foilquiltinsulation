import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kent Installers – WordPress Website",
  description: "Multifoil Insulation Installers in Kent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="layout-container">
          <header className="header">
            <div className="site-title">
              <a href="/">WordPress Website</a>
            </div>
            <nav>
              <ul className="nav-links">
                <li><a href="/hampshire">Hampshire Installers</a></li>
                <li><a href="/isle-of-wight">Isle of Wight Installers</a></li>
                <li><a href="/kent">Kent Installers</a></li>
                <li><a href="/sussex">Sussex Installers</a></li>
              </ul>
            </nav>
          </header>
          {children}
          <footer className="footer">
            <div className="footer-grid">
              <div className="footer-col">
                <h4>WordPress Website</h4>
                <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: '1.6' }}>
                  Professional multifoil insulation supply and fit services across the UK.
                </p>
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
              <p>Designed with <a href="https://wordpress.org" target="_blank" rel="noreferrer">WordPress</a>. Replicated in Next.js.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
