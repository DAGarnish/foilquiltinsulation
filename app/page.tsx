export default function Home() {
  return (
    <main className="main-content">
      <div className="content-section">
        <h1>Multifoil Insulation Installers</h1>
        <p>
          Our expert team specialises in SuperQuilt Insulation Installation and Multifoil Insulation — providing thin, flexible, and high-performance insulation for lofts, roofs, walls, and floors across Kent, Surrey, and Hampshire.
        </p>
        <p>
          We supply and fit SuperQuilt Loft Insulation, Thermal Insulation Foil, and Foil Roll Insulation to help homeowners, builders, and contractors achieve Building Control approval while cutting costs and saving valuable space.
        </p>
        <div style={{ margin: "2rem 0" }}>
          <button className="btn">Get My Quote</button>
        </div>
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
        <div style={{ marginBottom: "1.5rem" }}>
          <h3>Garden Rooms & Garages</h3>
          <p>Transform outbuildings into year-round spaces. Thermal Blanket Insulation and Multifoil Insulation keep garden rooms, offices, and garages warm in winter and cooler in summer—without bulky materials.</p>
        </div>
      </div>

      <div className="content-section">
        <h2>Insulation That Delivers Results</h2>
        <p>
          With U-values as low as 0.18 W/m²K, our installations outperform traditional methods, keeping homes warmer in winter and cooler in summer. This means lower heating bills, improved comfort, and long-term energy savings.
        </p>
      </div>

      <div className="content-section">
        <h2>Typical Build-Ups & U-Value Examples</h2>
        <p>Final performance depends on your existing fabric, ventilation and detailing. We’ll confirm with project-specific calculations.</p>
        
        <div style={{ marginTop: "1rem" }}>
          <h3>Pitched Roof (Between Rafters)</h3>
          <ul className="bullet-list">
            <li>Multifoil blanket (19-layer), taped & sealed</li>
            <li>Counter-batten/service void</li>
            <li>Plasterboard finish</li>
          </ul>
        </div>
        
        <div style={{ marginTop: "1rem" }}>
          <h3>Warm Roof Hybrid (Above Deck + Between Rafters)</h3>
          <ul className="bullet-list">
            <li>PIR above deck (thickness to target)</li>
            <li>Multifoil beneath rafters, sealed</li>
            <li>Service void + plasterboard</li>
          </ul>
        </div>
        
        <div style={{ marginTop: "1rem" }}>
          <h3>Stud Wall (Internal)</h3>
          <ul className="bullet-list">
            <li>Multifoil to studs, taped</li>
            <li>Service battens</li>
            <li>Board finish</li>
          </ul>
        </div>
      </div>

      <div className="content-section">
        <h2>Local Coverage</h2>
        <p>We work across the South East with quick turnarounds and dependable crews.</p>
        <ul className="bullet-list">
          <li><strong>Kent</strong> — Maidstone, Canterbury, Ashford, Tonbridge, Sevenoaks, Dartford, Medway…</li>
          <li><strong>Surrey</strong> — Guildford, Woking, Epsom, Reigate, Farnham, Camberley…</li>
          <li><strong>Hampshire</strong> — Winchester, Basingstoke, Southampton, Portsmouth, Andover…</li>
          <li><strong>Isle of Wight</strong> — Newport, Freshwater, Cowes, Ryde, Ventnor</li>
        </ul>
      </div>

      <div className="content-section" style={{ backgroundColor: '#f9fafb', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
        <h2>Get Your Free Quote Today</h2>
        <p>Upgrade your property with SuperQuilt & Multifoil Insulation — the modern choice for energy efficiency and space-saving performance.</p>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="btn">Get My Quote</button>
          <button className="btn btn-secondary">Open a Trade Account</button>
        </div>
      </div>
    </main>
  );
}
