export default function Home() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section className="hero">
        <h1>
          SuperQuilt &amp; Multifoil Insulation. Installation for Roofs,
          Walls &amp; Floors
        </h1>
        <div style={{ height: "var(--sp-20)" }} />
        <p>
          Our expert team specialises in SuperQuilt Insulation Installation and
          Multifoil Insulation — providing thin, flexible, and high-performance
          insulation for lofts, roofs, walls, and floors across Kent, Surrey,
          and Hampshire.
        </p>
        <p>
          We supply and fit SuperQuilt Loft Insulation, Thermal Insulation Foil,
          and Foil Roll Insulation to help homeowners, builders, and contractors
          achieve Building Control approval while cutting costs and saving
          valuable space.
        </p>
        <div style={{ height: "var(--sp-20)" }} />
        <a href="#" className="btn">About us</a>
        <img
          src="/assets/building-exterior.webp"
          alt="Building exterior in Toronto, Canada"
          className="hero-image"
        />
      </section>

      {/* ── WHY CHOOSE ───────────────────────────────── */}
      <section className="section section--white">
        <div className="section__inner">
          <p className="asterisk-rule">*</p>
          <h2 style={{ marginBottom: "1rem" }}>
            Why Choose SuperQuilt Multifoil Insulation?
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Unlike bulky PIR boards or mineral wool, SuperQuilt Insulation offers
            a multi-layered design that combines thermal performance, vapour
            control, and space efficiency in one solution.
          </p>
          <ul className="dot-list">
            <li>BBA &amp; BDA Certified, NHBC &amp; LABC approved</li>
            <li>19-layer multifoil insulation (e.g., YBS SuperQuilt) at ~40 mm relaxed thickness</li>
            <li>Meets Building Regulations without extra PIR boards</li>
            <li>Accessories: tapes, battens, vapour control layers, fixings</li>
            <li>Documentation: data sheets, installation guides, certification</li>
            <li>Saves up to 10% in space and 30% in cost</li>
          </ul>
          <p style={{ fontSize: "var(--fs-small)", color: "var(--color-contrast-2)", fontStyle: "italic" }}>
            Manufactured in the UK, certified and verified
          </p>
        </div>
      </section>

      {/* ── APPLICATIONS (6 cards) ───────────────────── */}
      <section className="section section--gray">
        <div className="section__inner--wide">
          <p className="asterisk-rule">*</p>
          <h2 style={{ marginBottom: "2.5rem", maxWidth: "var(--content-width)", margin: "0 auto 2.5rem", textAlign: "center" }}>
            Where We Use It
          </h2>
          <div className="features-grid">
            {[
              {
                title: "Pitched Roof (Between Rafters)",
                desc: "Meet Building Regulation targets with minimal thickness. SuperQuilt Insulation Installation is ideal where you can't afford to drop ceilings, offering high thermal performance in tight spaces.",
                cta: "Roof Build-Ups & U-Values →",
              },
              {
                title: "Dormers & Lofts",
                desc: "Lightweight and flexible, SuperQuilt Loft Insulation provides a speedy upgrade that keeps lofts, dormers, and attic conversions comfortable all year round.",
              },
              {
                title: "Stud Walls & Timber Frames",
                desc: "Perfect for retrofits and new builds, Multifoil Insulation reduces thermal bridging, delivers a built-in vapour control layer, and keeps interiors neat without bulky PIR boards.",
              },
              {
                title: "Floors & Over-Slab",
                desc: "Add a reflective layer beneath suspended or solid floors. Foil Roll Insulation helps achieve warmer floors, reduced heat loss, and improved comfort without extra floor build-up.",
              },
              {
                title: "Garden Rooms & Garages",
                desc: "Transform outbuildings into year-round spaces. Thermal Blanket Insulation and Multifoil Insulation keep garden rooms, offices, and garages warm in winter and cooler in summer—without bulky materials.",
              },
              {
                title: "Architectural Solutions",
                desc: "Experience the fusion of imagination and expertise with Études Architectural Solutions.",
              },
            ].map(({ title, desc, cta }) => (
              <div key={title}>
                <p className="asterisk-rule" style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>*</p>
                <h3 style={{ marginBottom: "0.5rem" }}>{title}</h3>
                <p style={{ color: "var(--color-contrast-2)", marginBottom: "0.5rem" }}>{desc}</p>
                {cta && (
                  <p style={{ fontWeight: 500, fontSize: "var(--fs-small)" }}>
                    <a href="#">{cta}</a>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSULATION THAT DELIVERS ─────────────────── */}
      <section className="section section--white">
        <div className="section__inner" style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem" }}>Insulation That Delivers Results</h2>
          <p>
            With U-values as low as 0.18 W/m²K, our installations outperform
            traditional methods, keeping homes warmer in winter and cooler in
            summer. This means lower heating bills, improved comfort, and
            long-term energy savings.
          </p>
        </div>
      </section>

      {/* ── LOCAL COVERAGE ───────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <p className="asterisk-rule">*</p>
          <h2 style={{ marginBottom: "1rem" }}>
            Local Coverage: Kent • Surrey • Hampshire • Isle of Wight
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            We work across the South East with quick turnarounds and dependable crews.
          </p>
          <p>
            <strong>Kent</strong> — Maidstone, Canterbury, Ashford, Tonbridge, Sevenoaks, Dartford, Medway…
          </p>
          <p>
            <strong>Surrey</strong> — Guildford, Woking, Epsom, Reigate, Farnham, Camberley…
          </p>
          <p>
            <strong>Hampshire</strong> — Winchester, Basingstoke, Southampton, Portsmouth, Andover…
          </p>
          <p>
            <strong>Isle of Wight</strong> — Newport, Freshwater, Cowes, Ryde, Ventnor
          </p>
          <p style={{ marginTop: "1rem" }}>
            Not on the list? We may still cover you—<a href="#">ask about your postcode</a>.
          </p>
        </div>
      </section>

      {/* ── TYPICAL BUILD-UPS ────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "0.5rem" }}>Typical Build-Ups &amp; U-Value Examples</h2>
          <p style={{ color: "var(--color-contrast-2)", marginBottom: "2rem" }}>
            Final performance depends on your existing fabric, ventilation and detailing. We'll confirm with project-specific calculations.
          </p>

          {[
            {
              heading: "Pitched Roof (Between Rafters)",
              items: ["Multifoil blanket (19-layer), taped & sealed", "Counter-batten/service void", "Plasterboard finish"],
              note: "Notes: manage ventilation and vapour control per roof design.",
            },
            {
              heading: "Warm Roof Hybrid (Above Deck + Between Rafters)",
              items: ["PIR above deck (thickness to target)", "Multifoil beneath rafters, sealed", "Service void + plasterboard"],
              note: "Notes: popular where tighter U-values are required with minimal internal loss.",
            },
            {
              heading: "Stud Wall (Internal)",
              items: ["Multifoil to studs, taped", "Service battens", "Board finish"],
              note: "Notes: check services routing and vapour control strategy.",
            },
          ].map(({ heading, items, note }) => (
            <div key={heading} style={{ marginBottom: "2rem" }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--fs-large)", fontWeight: 400, marginBottom: "0.75rem" }}>
                {heading}
              </h3>
              <ul className="dot-list">
                {items.map((i) => <li key={i}>{i}</li>)}
                <li style={{ color: "var(--color-contrast-2)", fontStyle: "italic" }}>{note}</li>
              </ul>
            </div>
          ))}
          <p>
            Not sure? We'll recommend multifoil-only or hybrid specs to hit your target with the least disruption.
          </p>
        </div>
      </section>

      {/* ── MULTIFOIL VS PIR TABLE ───────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>Multifoil vs PIR: Quick Comparison</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Factor</th>
                <th>SuperQuilt Multifoil</th>
                <th>PIR Board</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Install Speed", "Fast — rolls unroll and cut cleanly", "Slower — rigid boards need careful cutting"],
                ["Thickness", "~40 mm relaxed", "Varies, often 50–200 mm"],
                ["Thermal Bridging", "Reflective layers reduce bridging at fixings", "Bridging at joints and fixings without careful detailing"],
                ["Best use cases", "Tight rafters, loft conversions, retrofit", "Flat roofs, above-deck warm roofs, high U-value targets"],
                ["Hybrid options", "Pairs well with PIR for tighter targets", "Can be used alone or with multifoil"],
              ].map(([factor, mf, pir]) => (
                <tr key={String(factor)}>
                  <td><strong>{factor}</strong></td>
                  <td>{mf}</td>
                  <td>{pir}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── CASE STUDIES / TESTIMONIAL ───────────────── */}
      <section className="section section--white">
        <div className="section__inner">
          <p className="asterisk-rule">*</p>
          <h2 style={{ marginBottom: "1.5rem" }}>Recent Projects</h2>
          <p>
            <strong>Dormer Loft, Guildford</strong> — 42 m² installed in just 1 day, transforming a draughty loft into a warm, usable bedroom with minimal ceiling loss.
          </p>
          <p>
            <strong>Garden Room, Maidstone</strong> — Year-round comfort achieved through a hybrid build-up that controls summer heat while reducing winter heat loss.
          </p>
          <p>
            <strong>Victorian Terrace, Portsmouth</strong> — Internal stud wall upgrade delivered a cleaner finish, fewer draughts, and improved energy efficiency in a tricky period property.
          </p>
          <p style={{ marginTop: "1.5rem" }}>
            <a href="#" style={{ fontWeight: 600 }}>See More Case Studies →</a>
          </p>

          <p className="asterisk-rule" style={{ marginTop: "2rem" }}>*</p>
          <h2 style={{ marginBottom: "1rem" }}>What Our Customers Say</h2>
          <blockquote style={{ borderLeft: "3px solid var(--color-contrast-3)", paddingLeft: "1rem", fontStyle: "italic", marginBottom: "0.5rem" }}>
            "Clean crew, clear paperwork, and passed Building Control without drama."
          </blockquote>
          <p style={{ fontWeight: 600, fontSize: "var(--fs-small)" }}>James R., Contractor, Sevenoaks</p>
        </div>
      </section>

      {/* ── PRICING ──────────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <p className="asterisk-rule">*</p>
          <h2 style={{ marginBottom: "1rem" }}>Pricing &amp; What Affects It</h2>
          <p>
            We provide transparent, itemised quotes for supply-only or supply-and-fit. Final cost depends on m², access, chosen build-up (multifoil-only vs hybrid), detailing (e.g., dormers), and timeline.
          </p>
          <ul className="dot-list" style={{ margin: "1rem 0" }}>
            <li><strong>Supply-Only:</strong> efficient materials + accessories delivered to site</li>
            <li><strong>Supply &amp; Fit:</strong> turnkey install, including tapes, battens and fixings</li>
          </ul>
          <p>
            <a href="#" style={{ fontWeight: 600 }}>[Get My Estimate]</a>
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section className="section section--white">
        <div className="section__inner">
          <p className="asterisk-rule">*</p>
          <h2 style={{ marginBottom: "1.5rem" }}>FAQs</h2>
          {[
            ["Will multifoil pass Building Control?", "Yes—when correctly specified and installed with the right build-up and documentation. We provide project-specific details and link to manufacturer certificates used by Building Control."],
            ["Do I still need ventilation or a vapour control layer?", "It depends on your roof/wall design. We'll advise on ventilation gaps, airtightness and vapour control to manage condensation risk."],
            ["What thickness is the blanket?", "Typical 19-layer multifoil is around 40 mm (relaxed). Performance comes from multiple reflective layers working together, not just bulk thickness."],
            ["Can I combine multifoil with PIR?", "Absolutely. Hybrid build-ups (multifoil + PIR) are common where tighter targets are required with minimal internal loss."],
            ["Is it suitable for floors and outbuildings?", "Yes—multifoil is widely used in suspended floors and garden rooms/garages. We'll specify the right layering and accessories."],
            ["How quickly can you start?", "Surveys are often available within a week. Start dates depend on project size and access—tell us your timeline and we'll work to it."],
            ["What documentation do I receive?", "Data sheets, install guide, a project-specific build-up and U-value summary, plus certificate links for Building Control."],
            ["Do you sell to trade?", <>Yes—installers get trade pricing, cut lists, accessory packs and direct technical support. <a href="#">[Open a Trade Account]</a></>],
          ].map(([q, a]) => (
            <div key={String(q)} style={{ marginBottom: "1.25rem" }}>
              <p style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{q}</p>
              <p style={{ color: "var(--color-contrast-2)" }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA / GET QUOTE ──────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner" style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "1rem" }}>Get Your Free Quote Today</h2>
          <p>
            Upgrade your property with SuperQuilt &amp; Multifoil Insulation — the modern choice for energy efficiency and space-saving performance.
          </p>
          <p>👉 Call us now or click below for a fast, no-obligation quote.</p>
          <div style={{ height: "var(--sp-20)" }} />
          <a href="#" className="btn">Get My Quote</a>
        </div>
      </section>

      {/* ── ÉTUDES COLUMNS ───────────────────────────── */}
      <section className="section section--white">
        <div className="two-col" style={{ alignItems: "start" }}>
          <div>
            <img
              src="/assets/tourist-and-building.webp"
              alt="Études Architect App"
              style={{ width: "100%", borderRadius: "16px", marginBottom: "1.5rem" }}
            />
            <h3>Études Architect App</h3>
            <ul className="dot-list" style={{ marginTop: "0.5rem" }}>
              <li>Collaborate with fellow architects.</li>
              <li>Showcase your projects.</li>
              <li>Experience the world of architecture.</li>
            </ul>
          </div>
          <div>
            <img
              src="/assets/windows.webp"
              alt="Études Newsletter"
              style={{ width: "100%", borderRadius: "16px", marginBottom: "1.5rem" }}
            />
            <h3>Études Newsletter</h3>
            <ul className="dot-list" style={{ marginTop: "0.5rem" }}>
              <li>A world of thought-provoking articles.</li>
              <li>Case studies that celebrate architecture.</li>
              <li>Exclusive access to design insights.</li>
            </ul>
            <blockquote style={{ borderLeft: "3px solid var(--color-contrast-3)", paddingLeft: "1rem", marginTop: "1.5rem", fontStyle: "italic", fontSize: "var(--fs-medium)" }}>
              "Études has saved us thousands of hours of work and has unlocked insights we never thought possible."
            </blockquote>
            <p style={{ marginTop: "0.5rem", fontSize: "var(--fs-small)", color: "var(--color-contrast-2)", fontWeight: 300 }}>
              Annie Steiner
            </p>
            <p style={{ fontSize: "var(--fs-small)", color: "var(--color-contrast-2)", fontWeight: 300 }}>
              CEO, Greenprint
            </p>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <div className="newsletter-card">
            <h2>Join 900+ subscribers</h2>
            <p>Stay in the loop with everything you need to know.</p>
            <a href="#" className="btn btn--light">Sign up</a>
          </div>
        </div>
      </section>
    </>
  );
}
