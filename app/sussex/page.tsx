import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sussex Installers – Foilquiltinsulation",
  description:
    "SuperQuilt & Multifoil Insulation supply and fit across Sussex. Brighton, Worthing, Chichester, Crawley and beyond. Trade packs, site surveys, installer matching.",
};

export default function SussexPage() {
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
          Sussex Installers
        </h1>
      </section>

      {/* ── INTRO ─────────────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>
            Multifoil Insulation Installers in Sussex
          </h2>

          <p style={{ color: "var(--color-contrast-2)", marginBottom: "1rem" }}>
            Supply &amp; fit for YBS SuperQuilt® and comparable multifoil
            systems
          </p>

          <p>
            Keep heat in, keep damp out, and keep build-ups slim. We help Sussex
            installers and contractors deliver warm roofs, dry walls and
            efficient floors, without bulky insulation using proven multifoil
            systems.
          </p>

          <p>
            Homeowner with a project? We'll match you with a vetted local
            installer.
          </p>
        </div>
      </section>

      {/* ── WHY SUSSEX CHOOSES MULTIFOIL ──────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>
            Why Sussex chooses multifoil
          </h2>
          <p>
            From seafront terraces in Brighton &amp; Hove to cottages on the
            South Downs and new builds around Crawley and Chichester, Sussex
            properties often need high performance without stealing space.
            Multifoil (often called "foil quilt") is ideal for:
          </p>
          <ul className="dot-list">
            <li>
              <strong>Tight build-ups:</strong> High thermal performance in a
              thin profile.
            </li>
            <li>
              <strong>Retrofit friendly:</strong> Minimal disruption; great for
              lofts, dormers and garden rooms.
            </li>
            <li>
              <strong>Condensation control:</strong> Installed as part of a
              ventilated build-up with the right tapes and seals, it helps
              manage moisture risk.
            </li>
            <li>
              <strong>Speed on site:</strong> Clean, quick, and easy to detail
              around awkward rafters and studs.
            </li>
          </ul>
        </div>
      </section>

      {/* ── WHAT WE DO ────────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>What we do</h2>
          <ul className="dot-list">
            <li>
              <strong>Supply &amp; Fit:</strong> Full installation service for
              multifoil systems across Sussex.
            </li>
            <li>
              <strong>Installer Matching:</strong> Prefer to fit yourself or
              need extra hands? We'll connect you with trusted local crews.
            </li>
            <li>
              <strong>Site Surveys:</strong> On-site checks to confirm
              quantities, details and programmes.
            </li>
            <li>
              <strong>Technical Guidance:</strong> Practical detailing support
              and documentation for building control.
            </li>
            <li>
              <strong>Trade Packs:</strong> Foil, tapes, fixings, battens and
              accessories—ready to go.
            </li>
          </ul>
        </div>
      </section>

      {/* ── OUR CORE PRODUCT ──────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>
            Our core product: YBS SuperQuilt® multifoil
          </h2>
          <ul className="dot-list">
            <li>
              <strong>Construction:</strong> 19-layer reflective blanket
            </li>
            <li>
              <strong>Relaxed thickness:</strong> ~40 mm
            </li>
            <li>
              <strong>Applications:</strong> Roofs, walls and floors
            </li>
            <li>
              <strong>Compliance:</strong> Formally certified for building
              control (data sheets available)
            </li>
          </ul>
          <p>
            We also supply compatible multifoil products where the spec calls
            for them.
          </p>
        </div>
      </section>

      {/* ── TYPICAL APPLICATIONS ──────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>Typical Sussex applications</h2>
          <ul className="dot-list">
            <li>
              <strong>Lofts &amp; pitched roofs:</strong> Under-rafter or
              over-rafter build-ups for refurbs and conversions.
            </li>
            <li>
              <strong>Dormers &amp; ceilings:</strong> Keep headroom, improve
              comfort.
            </li>
            <li>
              <strong>Timber frame &amp; stud walls:</strong> Reflective layers
              plus airtightness detailing.
            </li>
            <li>
              <strong>Garden rooms &amp; outbuildings:</strong> Fast, tidy,
              space-saving insulation.
            </li>
            <li>
              <strong>Suspended floors:</strong> Reduce drafts and heat loss
              from below.
            </li>
          </ul>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>How it works</h2>
          <ol className="numbered-list">
            <li>
              <strong>Tell us about the job</strong> – location,
              drawings/photos, target U-values and programme.
            </li>
            <li>
              <strong>Get a quote</strong> – clear line-item pricing for
              supply-only or supply &amp; fit.
            </li>
            <li>
              <strong>Schedule the install</strong> – coordinated with other
              trades; we bring tapes, fixings and know-how.
            </li>
            <li>
              <strong>Handover</strong> – photos, install notes and
              documentation for building control.
            </li>
          </ol>
        </div>
      </section>

      {/* ── TRADE BENEFITS ────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>Trade benefits</h2>
          <ul className="dot-list">
            <li>Straightforward pricing with reliable lead times.</li>
            <li>
              Help with details for tricky junctions and airtightness.
            </li>
            <li>
              Right-first-time installs that pass building control without fuss.
            </li>
            <li>
              Friendly aftercare if you need tweaks or extra materials.
            </li>
          </ul>
        </div>
      </section>

      {/* ── WHERE WE COVER ────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>Where we cover in Sussex</h2>
          <p>
            <strong>East Sussex:</strong> Brighton, Hove, Lewes, Peacehaven,
            Newhaven, Seaford, Eastbourne, Hailsham, Uckfield, Crowborough,
            Heathfield, Hastings, Bexhill.
          </p>
          <p style={{ marginTop: "0.75rem" }}>
            <strong>West Sussex:</strong> Chichester, Bognor Regis,
            Littlehampton, Worthing, Shoreham-by-Sea, Lancing, Steyning,
            Arundel, Angmering, Horsham, Crawley, Haywards Heath, Burgess Hill,
            Midhurst, Petworth, Pulborough.
          </p>
        </div>
      </section>

      {/* ── FAQs ──────────────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1.5rem" }}>FAQs</h2>

          {[
            [
              "Is multifoil accepted by building control?",
              "Yes—when installed to the manufacturer's guidance as part of a compliant build-up. We provide current product certification and documentation upon request.",
            ],
            [
              "How thick is it once installed?",
              "The blanket is around ~40 mm relaxed. Final build-up thickness depends on battens/rafters and the full system you choose.",
            ],
            [
              "Can it replace all other insulation?",
              "It can be used as a primary layer or combined with other materials, depending on your target U-value and detail. We'll advise what's practical for your project.",
            ],
            [
              "Do you supply tapes and fixings?",
              "Yes—order everything in one go: foil, tapes, staples/fixings, battens and accessories.",
            ],
            [
              "Do you work on period and coastal homes?",
              "We do. We're experienced with heritage constraints and coastal exposure—ask us about recent jobs in Brighton, Lewes and Arundel.",
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
          <h2 style={{ marginBottom: "1rem" }}>Ready to start?</h2>
          <p>
            <strong>Installers &amp; contractors:</strong> Send drawings for a
            trade quote and lead times.
          </p>
          <p>
            <strong>Homeowners:</strong> Book a quick call and we'll match you
            with a Sussex installer.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              marginTop: "1.5rem",
            }}
          >
            <a href="#" className="btn">
              Get a Trade Quote
            </a>
            <a href="#" className="btn btn--outline">
              Book a Site Survey
            </a>
            <a href="/contact-us" className="btn btn--outline">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
