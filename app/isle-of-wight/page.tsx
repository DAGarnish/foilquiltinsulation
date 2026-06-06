export default function IsleOfWightInstallers() {
  return (
    <main className="main-content">
      <div className="content-section">
        <h1>Isle of Wight Installers</h1>
        <p>
          Supply & fit • Installer matching • Site surveys • Tech guidance for pros
        </p>
        <p>
          Get fast, tidy installs of YBS SuperQuilt and comparable multifoil systems—set up for roofers, builders, loft-conversion teams, and timber-frame specialists across the Island. We help you hit targets, keep build-ups slim, and get the paperwork you need for Building Control.
        </p>
        <div style={{ margin: "2rem 0" }}>
          <button className="btn">Request a Quote</button>
        </div>
      </div>

      <div className="content-section">
        <h2>Key Benefits</h2>
        <ul className="bullet-list">
          <li>Multifoil delivers high thermal performance with a relaxed thickness ~40 mm (approx.), ideal where rafters are shallow or headroom matters.</li>
          <li>Roofs, walls, floors—one system, multiple details.</li>
          <li>Clean, quick, and easy to handle, especially useful for ferry-timed days and tight turnarounds.</li>
          <li>When correctly installed and taped, multifoil systems provide vapour control within the build-up.</li>
          <li>19-layer certified product with formal approvals suitable for Building Control submissions.</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>What We Offer</h2>
        <div style={{ marginBottom: "1.5rem" }}>
          <h3>1) Supply & Fit (Trade-ready)</h3>
          <ul className="bullet-list">
            <li>Measured, cut, taped, and sealed by an experienced team</li>
            <li>Warm roof / cold roof details for pitched roofs</li>
            <li>Stud walls & dormers</li>
            <li>Suspended timber floors</li>
          </ul>
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <h3>2) Installer-Matching</h3>
          <p>Already have labour? We’ll pair you with a vetted multifoil installer on the Island and ship the full kit with install notes and detailed drawings.</p>
        </div>
        <div style={{ marginBottom: "1.5rem" }}>
          <h3>3) Site Surveys & Technical</h3>
          <ul className="bullet-list">
            <li>Pre-start survey to check rafters, service zones, ventilation, and junctions</li>
            <li>U-value guidance for typical Island build-ups</li>
            <li>Detail packs for Building Control: product data, certificates, install method statements</li>
          </ul>
        </div>
      </div>

      <div className="content-section">
        <h2>Local advantages</h2>
        <ul className="check-list">
          <li>Reliable ferry-day planning: Materials consolidated and labelled by area/room to keep install days efficient.</li>
          <li>Tidy, low-mess installs: Perfect for occupied homes and tight streets.</li>
          <li>Coastal know-how: We pay attention to vapour control and airtightness by the sea—taping, laps, and junctions are properly handled.</li>
          <li>Same-week slots are often available for surveys and small installs.</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>Areas covered on the Island</h2>
        <p>Newport, Ryde, Cowes & East Cowes, Sandown, Shanklin, Ventnor, Yarmouth, Freshwater, Bembridge, Brading—and everywhere in between.</p>
      </div>

      <div className="content-section" style={{ backgroundColor: '#f9fafb', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
        <h2>Ready to go?</h2>
        <p>Book a site survey or request a trade quote. Tell us: property type, target areas (roof/wall/floor), rough dimensions, and your ideal start date. We’ll come back with a clear spec, programme, and price.</p>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="btn">Book a Site Survey</button>
          <button className="btn btn-secondary">Request Trade Quote</button>
        </div>
      </div>
    </main>
  );
}
