import Image from 'next/image';

export default function Home() {
  return (
    <main className="main-content">
      
      {/* Hero Section */}
      <div className="content-section" style={{ textAlign: 'center', marginBottom: '4rem', padding: '4rem 2rem' }}>
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1', marginBottom: '1.5rem', fontFamily: "'Cardo', serif", fontWeight: 700 }}>
          SuperQuilt &amp; Multifoil Insulation.<br/>Installation for Roofs, Walls &amp; Floors
        </h1>
        
        <p style={{ fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto 1.5rem', fontFamily: "'Inter', sans-serif" }}>
          Our expert team specialises in SuperQuilt Insulation Installation and Multifoil Insulation — providing thin, flexible, and high-performance insulation for lofts, roofs, walls, and floors across Kent, Surrey, and Hampshire.
        </p>

        <p style={{ fontSize: '1.125rem', maxWidth: '800px', margin: '0 auto 2.5rem', fontFamily: "'Inter', sans-serif" }}>
          We supply and fit SuperQuilt Loft Insulation, Thermal Insulation Foil, and Foil Roll Insulation to help homeowners, builders, and contractors achieve Building Control approval while cutting costs and saving valuable space.
        </p>
        
        <div style={{ marginBottom: '4rem' }}>
          <button className="btn" style={{ borderRadius: '9999px', padding: '0.875rem 2rem', fontSize: '1rem', fontWeight: 500 }}>About us</button>
        </div>
        
        <img 
          src="/assets/building-exterior.webp" 
          alt="Building exterior" 
          style={{ width: '100%', maxWidth: '1200px', borderRadius: '32px', objectFit: 'cover', height: 'auto', margin: '0 auto', display: 'block' }} 
        />
      </div>

      <div className="content-section">
        <h2>Why Choose SuperQuilt?</h2>
        <p>
          Unlike bulky PIR boards or mineral wool, SuperQuilt Insulation offers a multi-layered design that combines thermal performance, vapour control, and space efficiency in one solution.
        </p>
        <ul className="bullet-list">
          <li>BBA & BDA Certified, NHBC & LABC approved</li>
          <li>19-layer multifoil insulation (e.g., YBS SuperQuilt) at ~40 mm relaxed thickness</li>
          <li>Meets Building Regulations without extra PIR boards</li>
          <li>Accessories: tapes, battens, vapour control layers, fixings</li>
          <li>Documentation: data sheets, installation guides, certification</li>
          <li>Saves up to 10% in space and 30% in cost</li>
        </ul>
        <p><em>Manufactured in the UK, certified and verified.</em></p>
      </div>

      <div className="content-section">
        <h2>Applications</h2>
        <div style={{ marginBottom: "1.5rem" }}>
          <h3>Pitched Roof (Between Rafters)</h3>
          <p>Meet Building Regulation targets with minimal thickness. SuperQuilt Insulation Installation is ideal where you can’t afford to drop ceilings, offering high thermal performance in tight spaces.</p>
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <h3>Dormers & Lofts</h3>
          <p>Lightweight and flexible, SuperQuilt Loft Insulation provides a speedy upgrade that keeps lofts, dormers, and attic conversions comfortable all year round.</p>
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <h3>Stud Walls & Timber Frames</h3>
          <p>Perfect for retrofits and new builds, Multifoil Insulation reduces thermal bridging, delivers a built-in vapour control layer, and keeps interiors neat without bulky PIR boards.</p>
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <h3>Floors & Over-Slab</h3>
          <p>Add a reflective layer beneath suspended or solid floors. Foil Roll Insulation helps achieve warmer floors, reduced heat loss, and improved comfort without extra floor build-up.</p>
        </div>
      </div>

      {/* Études Sections (from the original WP Theme Demo content) */}
      <div className="content-section" style={{ marginTop: '5rem' }}>
        <h2>Architectural Solutions</h2>
        <p style={{ marginBottom: '3rem' }}>Experience the fusion of imagination and expertise with Études Architectural Solutions.</p>
        
        <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
          <div style={{ flex: '1 1 300px' }}>
            <img 
              src="/assets/tourist-and-building.webp" 
              alt="Tourist and building" 
              style={{ width: '100%', borderRadius: '16px', objectFit: 'cover' }} 
            />
            <h3 style={{ marginTop: '1.5rem' }}>Études Architect App</h3>
            <ul className="bullet-list">
              <li>Collaborate with fellow architects.</li>
              <li>Showcase your projects.</li>
              <li>Experience the world of architecture.</li>
            </ul>
          </div>

          <div style={{ flex: '1 1 300px' }}>
            <img 
              src="/assets/windows.webp" 
              alt="Windows" 
              style={{ width: '100%', borderRadius: '16px', objectFit: 'cover' }} 
            />
            <h3 style={{ marginTop: '1.5rem' }}>Études Newsletter</h3>
            <ul className="bullet-list">
              <li>A world of thought-provoking articles.</li>
              <li>Case studies that celebrate architecture.</li>
              <li>Exclusive access to design insights.</li>
            </ul>
          </div>
        </div>
        
        <blockquote style={{ fontSize: '1.5rem', fontStyle: 'italic', borderLeft: '4px solid var(--text-heading)', paddingLeft: '2rem', margin: '2rem 0' }}>
          "Études has saved us thousands of hours of work and has unlocked insights we never thought possible."
          <footer style={{ fontSize: '1rem', marginTop: '1rem', fontWeight: 'bold' }}>— Annie Steiner, CEO, Greenprint</footer>
        </blockquote>
      </div>

      <div className="content-section">
        <h2>Local Coverage</h2>
        <p>We work across the South East with quick turnarounds and dependable crews.</p>
        <ul className="bullet-list">
          <li><strong>Kent</strong> — Maidstone, Canterbury, Ashford, Tonbridge...</li>
          <li><strong>Surrey</strong> — Guildford, Woking, Epsom, Reigate...</li>
          <li><strong>Hampshire</strong> — Winchester, Basingstoke, Southampton...</li>
          <li><strong>Isle of Wight</strong> — Newport, Freshwater, Cowes...</li>
        </ul>
      </div>

      <div className="content-section" style={{ backgroundColor: '#e5e7eb', padding: '3rem', borderRadius: '16px', textAlign: 'center' }}>
        <h2>Get Your Free Quote Today</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>Upgrade your property with SuperQuilt & Multifoil Insulation — the modern choice for energy efficiency and space-saving performance.</p>
        <div>
          <button className="btn">Get My Quote</button>
        </div>
      </div>
    </main>
  );
}
