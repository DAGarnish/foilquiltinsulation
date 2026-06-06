export default function SussexInstallers() {
  return (
    <main className="main-content">
      <div className="content-section">
        <h1>Sussex Installers</h1>
        <p>
          Keep heat in, keep damp out, and keep build-ups slim. We help Sussex installers and contractors deliver warm roofs, dry walls and efficient floors, without bulky insulation using proven multifoil systems.
        </p>
        <p>
          Homeowner with a project? We’ll match you with a vetted local installer.
        </p>
        <div style={{ margin: "2rem 0" }}>
          <button className="btn">Request a Quote</button>
        </div>
      </div>

      <div className="content-section">
        <h2>Why Sussex chooses multifoil</h2>
        <p>From seafront terraces in Brighton & Hove to cottages on the South Downs and new builds around Crawley and Chichester, Sussex properties often need high performance without stealing space. Multifoil is ideal for:</p>
        <ul className="bullet-list">
          <li><strong>Tight build-ups:</strong> High thermal performance in a thin profile.</li>
          <li><strong>Retrofit friendly:</strong> Minimal disruption; great for lofts, dormers and garden rooms.</li>
          <li><strong>Condensation control:</strong> Installed as part of a ventilated build-up with the right tapes and seals, it helps manage moisture risk.</li>
          <li><strong>Speed on site:</strong> Clean, quick, and easy to detail around awkward rafters and studs.</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>What we do</h2>
        <ul className="check-list">
          <li>Supply & Fit: Full installation service for multifoil systems across Sussex.</li>
          <li>Installer Matching: Prefer to fit yourself or need extra hands? We’ll connect you with trusted local crews.</li>
          <li>Site Surveys: On-site checks to confirm quantities, details and programmes.</li>
          <li>Technical Guidance: Practical detailing support and documentation for building control.</li>
          <li>Trade Packs: Foil, tapes, fixings, battens and accessories—ready to go.</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>Our core product: YBS SuperQuilt® multifoil</h2>
        <ul className="bullet-list">
          <li>Construction: 19-layer reflective blanket</li>
          <li>Relaxed thickness: ~40 mm</li>
          <li>Applications: Roofs, walls and floors</li>
          <li>Compliance: Formally certified for building control (data sheets available)</li>
        </ul>
      </div>

      <div className="content-section">
        <h2>Where we cover in Sussex</h2>
        <div style={{ marginBottom: "1rem" }}>
          <p><strong>East Sussex:</strong> Brighton, Hove, Lewes, Peacehaven, Newhaven, Seaford, Eastbourne, Hailsham, Uckfield, Crowborough, Heathfield, Hastings, Bexhill.</p>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <p><strong>West Sussex:</strong> Chichester, Bognor Regis, Littlehampton, Worthing, Shoreham-by-Sea, Lancing, Steyning, Arundel, Angmering, Horsham, Crawley, Haywards Heath, Burgess Hill, Midhurst, Petworth, Pulborough.</p>
        </div>
      </div>

      <div className="content-section" style={{ backgroundColor: '#f9fafb', padding: '2rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
        <h2>Ready to start?</h2>
        <p>Installers & contractors: Send drawings for a trade quote and lead times. Homeowners: Book a quick call and we’ll match you with a Sussex installer.</p>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button className="btn">Get a Quote</button>
          <button className="btn btn-secondary">Contact Us</button>
        </div>
      </div>
    </main>
  );
}
