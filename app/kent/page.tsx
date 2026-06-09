import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kent Installers – Foilquiltinsulation",
  description:
    "SuperQuilt & Multifoil Insulation supply and fit across Kent. Maidstone, Canterbury, Medway, Ashford and beyond. U-value guidance, same-week slots.",
};

export default function KentPage() {
  return (
    <>
      {/* ── HERO TITLE ────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "var(--color-base)",
          paddingTop: "var(--sp-50)",
          paddingBottom: "var(--sp-50)",
          paddingLeft: "var(--sp-50)",
          paddingRight: "var(--sp-50)",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "var(--fs-x-large)",
            fontWeight: 400,
            lineHeight: 1.15,
            margin: "0 auto",
            maxWidth: "var(--content-width)",
          }}
        >
          Kent Installers
        </h1>
      </section>

      {/* ── INTRO ─────────────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>
            SuperQuilt &amp; Multifoil Insulation Supply &amp; Installation
            Across Kent
          </h2>

          <p>
            We provide supply &amp; fit services across Maidstone, Canterbury,
            Medway, Ashford, and beyond.
          </p>

          <p>
            <strong>Primary product:</strong> YBS SuperQuilt multifoil (approx.
            40 mm relaxed thickness, 19 layers). Suitable for roofs, walls and
            floors, with formal certification for Building Control when installed
            to manufacturer guidance.
          </p>

          <p>
            <a href="/contact-us" className="btn" style={{ marginTop: "0.5rem" }}>
              Get a Trade Quote
            </a>
          </p>

          <ul className="dot-list">
            <li>Same-week slots where available</li>
            <li>U-value guidance and detail support</li>
            <li>Supply-only or full install teams</li>
          </ul>
        </div>
      </section>

      {/* ── WHO WE HELP ───────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>Who we help</h2>
          <ul className="dot-list">
            <li>
              Installers &amp; roofers needing reliable multifoil supply and
              labour
            </li>
            <li>
              Main contractors &amp; developers looking to keep programmes on
              track
            </li>
            <li>
              Self-builders/loft teams (trade-friendly; we'll keep it practical)
            </li>
          </ul>
        </div>
      </section>

      {/* ── WHY CHOOSE ────────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>
            Why Choose Multifoil Insulation for Kent Buildings?
          </h2>
          <p>
            Kent's mix of coastal, rural, and commuter-belt properties often
            face challenges like damp air, limited roof space, and strict
            timelines. That's where Multifoil Insulation shines:
          </p>
          <ul className="dot-list">
            <li>
              <strong>Slim build-ups</strong> – achieve target U-values without
              losing headroom.
            </li>
            <li>
              <strong>Thermal + radiant barrier</strong> – reflective layers
              reduce heat loss and summer overheating.
            </li>
            <li>
              <strong>Quick installs</strong> – rolls cut cleanly, with less
              mess than rigid boards or mineral wool.
            </li>
            <li>
              <strong>Airtight performance</strong> – when fully taped and
              sealed, it doubles as a Thermal Insulation Foil vapour barrier.
            </li>
            <li>
              <strong>Retrofit-friendly</strong> – perfect for lofts, dormers,
              bungalows, and older Kent properties with awkward rafters.
            </li>
          </ul>
          <p>
            Whether you need a foil roll insulation system for a new build or a
            thermal blanket insulation upgrade for a lived-in loft, we have
            solutions that work.
          </p>
        </div>
      </section>

      {/* ── COST ──────────────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>
            Cost of SuperQuilt &amp; Multifoil Insulation Installation in Kent
            Homes
          </h2>
          <p>
            The cost of installing SuperQuilt Loft Insulation or wall/floor
            build-ups in Kent varies depending on:
          </p>
          <ul className="dot-list">
            <li>Property type (loft, roof, stud wall, floor).</li>
            <li>
              Access and complexity (e.g., tight dormers vs open rafters).
            </li>
            <li>
              Hybrid vs single-system installs (e.g., combining with PIR
              boards).
            </li>
            <li>Project size and location.</li>
          </ul>
          <p>
            On average, supply &amp; fit jobs in Kent range from{" "}
            <strong>£35–£55 per m²</strong>, including materials, labour, and
            detailing for Building Control compliance.
          </p>
          <p>
            <em>
              Tip: Request a site survey for a clear, itemised quote. We provide
              U-value calculations, condensation risk checks, and documentation
              for sign-off.
            </em>
          </p>
          <p>
            <a href="/contact-us" className="btn" style={{ marginTop: "0.5rem" }}>
              Get a Kent Installation Quote
            </a>
          </p>
        </div>
      </section>

      {/* ── MULTIFOIL VS MINERAL WOOL TABLE ───────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>
            Multifoil vs Mineral Wool Insulation in Kent's Damp Climate
          </h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Kent's coastal and rural climate means condensation and damp can be
            real issues. Choosing the right insulation is key:
          </p>
          <div style={{ overflowX: "auto" }}>
            <table className="data-table">
              <tbody>
                <tr>
                  <td><strong>Factor</strong></td>
                  <td><strong>SuperQuilt Insulation</strong></td>
                  <td><strong>Mineral Wool</strong></td>
                </tr>
                <tr>
                  <td>Thickness</td>
                  <td>~40mm relaxed (19 layers)</td>
                  <td>150–200mm typical</td>
                </tr>
                <tr>
                  <td>Performance</td>
                  <td>Reflective + thermal barrier</td>
                  <td>Thermal only</td>
                </tr>
                <tr>
                  <td>Install speed</td>
                  <td>Fast roll-out, low mess</td>
                  <td>Slower, dusty, messy</td>
                </tr>
                <tr>
                  <td>Vapour control</td>
                  <td>Airtight when taped &amp; sealed</td>
                  <td>Needs separate VCL</td>
                </tr>
                <tr>
                  <td>Best use cases</td>
                  <td>Lofts, dormers, retrofits, tight rafters</td>
                  <td>New builds, standard loft roll installs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ───────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>
            Our Process: SuperQuilt &amp; Multifoil Insulation Installation in
            Kent
          </h2>
          <p style={{ marginBottom: "1rem" }}>
            We keep projects on schedule with a simple, transparent process:
          </p>
          <ol className="numbered-list">
            <li>
              <strong>Quick Brief</strong> – share drawings, property type, and
              targets.
            </li>
            <li>
              <strong>Survey</strong> – site visit, measure-up, and moisture
              checks.
            </li>
            <li>
              <strong>Quote</strong> – itemised materials, labour, timeline, and
              warranty.
            </li>
            <li>
              <strong>Install</strong> – clean, efficient fitters; we coordinate
              with your site lead.
            </li>
            <li>
              <strong>Handover</strong> – photos, Building Control
              documentation, and care notes.
            </li>
          </ol>
        </div>
      </section>

      {/* ── WHAT WE DO ────────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>What We Do</h2>
          <ul className="dot-list">
            <li>
              <strong>Supply &amp; Fit</strong> – materials plus qualified
              install teams.
            </li>
            <li>
              <strong>Installer Support</strong> – if you already have labour,
              we supply, brief, and provide detailing.
            </li>
            <li>
              <strong>Site Surveys</strong> – pre-start checks, risk
              assessments, and tailored guidance.
            </li>
            <li>
              <strong>Technical Help</strong> – condensation control, fixing
              centres, counter-battens, taping, and U-value targets.
            </li>
          </ul>
          <p style={{ marginBottom: "0.5rem" }}>
            <strong>Deliverables You Can Expect:</strong>
          </p>
          <ul className="check-list">
            <li>Clear specifications and fixing guides</li>
            <li>U-value calculations for Building Control</li>
            <li>
              Hybrid build-up options (SuperQuilt + PIR/mineral wool)
            </li>
            <li>Waste-minimising cut lists</li>
          </ul>
        </div>
      </section>

      {/* ── PRODUCT SNAPSHOT ──────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>
            Product Snapshot: YBS SuperQuilt Multifoil
          </h2>
          <ul className="dot-list">
            <li>
              19-layer reflective blanket (~40 mm relaxed thickness).
            </li>
            <li>Applications: roofs, walls, floors, dormers, garden rooms.</li>
            <li>Vapour control when fully taped &amp; sealed.</li>
            <li>Installed with staples, battens, and service voids.</li>
            <li>Manufacturer-certified and accepted by Building Control.</li>
          </ul>
        </div>
      </section>

      {/* ── AREAS WE COVER ────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>Areas We Cover in Kent</h2>
          <p style={{ marginBottom: "1rem" }}>
            We serve all major towns and villages, including:
          </p>
          <ul className="dot-list">
            <li>
              <strong>Maidstone</strong> – central hub for loft and retrofit
              projects.
            </li>
            <li>
              <strong>Medway</strong> – Chatham, Rochester, Gillingham.
            </li>
            <li>
              <strong>Canterbury</strong> – student homes, heritage properties,
              retrofits.
            </li>
            <li>
              <strong>Ashford</strong> – new builds and commuter properties.
            </li>
            <li>
              <strong>Tonbridge &amp; Tunbridge Wells</strong> – dormer loft
              upgrades and timber-frame homes.
            </li>
            <li>
              <strong>Dartford &amp; Gravesend</strong> – energy-efficient
              solutions for London commuters.
            </li>
            <li>
              <strong>Thanet</strong> (Margate, Ramsgate, Broadstairs) –
              coastal insulation for damp-prone homes.
            </li>
          </ul>
          <p>
            Not in this list? We likely still cover your area — ask us for
            postcode availability.
          </p>
        </div>
      </section>

      {/* ── FOR INSTALLERS ────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>
            For installers: make multifoil your easy win
          </h2>
          <ul className="dot-list">
            <li>Trade pricing &amp; volume rates</li>
            <li>Cut lists and waste-minimising plans</li>
            <li>
              Detail help for tricky junctions (rafters, eaves, dormers)
            </li>
            <li>
              Programme-friendly install teams that don't slow other trades
            </li>
          </ul>
          <p>
            Need supply-only today? We can stage deliveries to suit your
            schedule.
          </p>
        </div>
      </section>

      {/* ── FAQs ──────────────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1.5rem" }}>
            FAQs: SuperQuilt &amp; Multifoil Insulation in Kent
          </h2>

          {[
            [
              "Will this pass Building Control in Kent?",
              "Yes — when designed and installed as part of a compliant build-up. We provide all guidance and certification.",
            ],
            [
              "Can I combine SuperQuilt with PIR or mineral wool?",
              "Yes, hybrid systems are common and effective in tougher U-value targets.",
            ],
            [
              "Does it work as a vapour control layer?",
              "When fully taped and sealed, yes. We'll confirm exact detailing based on your build-up.",
            ],
            [
              "How fast can you install in Kent?",
              "Supply-only: rapid dispatch. Supply & fit: crews are available within 1–3 weeks, depending on project size.",
            ],
            [
              "Is it messy to install?",
              "No — unlike wool, it's a clean, low-dust installation. Perfect for lived-in lofts and retrofits.",
            ],
          ].map(([q, a]) => (
            <div key={String(q)} style={{ marginBottom: "1.25rem" }}>
              <p style={{ fontWeight: 600, marginBottom: "0.25rem" }}>{q}</p>
              <p style={{ color: "var(--color-contrast-2)" }}>{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <hr
            style={{
              borderColor: "var(--color-contrast-3)",
              marginBottom: "2rem",
            }}
          />
          <h2 style={{ marginBottom: "1rem" }}>
            Ready to price your Kent project?
          </h2>
          <p>
            Book a site survey or request a trade quote. Send drawings/specs and
            your target U-values, we'll return a clear plan, cost, and start
            date.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              marginTop: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            <Link href="/contact-us" className="btn">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
