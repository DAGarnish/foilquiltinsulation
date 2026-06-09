import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hampshire Installers – Foilquiltinsulation",
  description:
    "SuperQuilt & Multifoil Insulation supply and fit in Hampshire. Local survey, tech guidance, and fast lead-times for installers, builders and homeowners.",
};

export default function HampshirePage() {
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
          Hampshire Installers
        </h1>


      </section>

      {/* ── INTRO ─────────────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h1 style={{ marginBottom: "1.5rem" }}>
            Multifoil Insulation in Hampshire
          </h1>

          <p>
            Supply &amp; fit for pros with local survey, tech guidance, and
            fast lead-times
          </p>

          <p>
            <strong>
              Looking for a reliable SuperQuilt installer in Hampshire?
            </strong>{" "}
            We help installers, builders and conversion firms across the county
            with <strong>YBS SuperQuilt</strong> and comparable multifoil
            systems, supplied, fitted, and backed by practical, on-site support.
          </p>

          <p>
            Trade-friendly supply &amp; fit or installer-matching, plus site
            surveys and technical guidance for building control.
          </p>

          <p>
            YBS SuperQuilt multifoil insulation, a 19-layer reflective blanket
            for roofs, walls and floors, with formal certification recognised by
            building control.
          </p>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>
            Why Hampshire installers choose us
          </h2>
          <ul className="dot-list">
            <li>
              <strong>Slim build-ups, big results</strong>
              <br />
              Multifoil saves headroom and speeds up installs. Ideal for lofts,
              dormers, garage conversions, garden rooms and timber frames.
            </li>
            <li>
              <strong>Fast, tidy fit</strong>
              <br />
              Clean cuts, minimal waste, and fewer site disruptions than bulky
              boards or messy rolls.
            </li>
            <li>
              <strong>Thermal + radiant performance</strong>
              <br />
              SuperQuilt reflects heat, helping spaces feel warmer in winter and
              cooler in summer.
            </li>
            <li>
              <strong>Vapour control when sealed</strong>
              <br />
              When taped and detailed correctly, multifoil acts as a
              high-performance vapour control layer to reduce condensation risk.
            </li>
            <li>
              <strong>Trade support that turns jobs around</strong>
              <br />
              From take-offs to product choice, we keep it simple and help you
              get sign-off first time.
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
              <strong>Supply &amp; Fit:</strong> Qualified teams to install
              multifoil to spec.
            </li>
            <li>
              <strong>Installer-Matching:</strong> Prefer to fit it yourself?
              We'll connect you with local, approved installers.
            </li>
            <li>
              <strong>Site Surveys:</strong> On-site checks for build-up,
              moisture, and detailing before you start.
            </li>
            <li>
              <strong>Tech Guidance:</strong> Practical advice on layers,
              counter-battens, tapes, membranes and fixings.
            </li>
            <li>
              <strong>Quote Packs for Building Control:</strong> Datasheets and
              method statements to support sign-off.
            </li>
            <li>
              <strong>Accessories &amp; Extras:</strong> Reflective tapes,
              breather membranes, staples, battens — delivered with your order.
            </li>
          </ul>
        </div>
      </section>

      {/* ── WHERE WE WORK ─────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>Where we work in Hampshire</h2>
          <p>
            We cover the whole county, including Southampton, Portsmouth,
            Winchester, Basingstoke, Andover, Fareham, Gosport, Eastleigh,
            Havant, Waterlooville, Petersfield, Alton, Fleet, Aldershot,
            Farnborough, Romsey, Totton, Lymington, New Milton, Ringwood,
            Fordingbridge, and across the New Forest and South Downs.
          </p>
        </div>
      </section>

      {/* ── TYPICAL APPLICATIONS ──────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>
            Typical applications we handle
          </h2>
          <ul className="dot-list">
            <li>
              <strong>Warm &amp; cold roofs</strong> (over/under rafters)
            </li>
            <li>
              <strong>Lofts, dormers &amp; room-in-roof</strong>
            </li>
            <li>
              <strong>Stud walls &amp; timber frame</strong>
            </li>
            <li>
              <strong>Garden rooms &amp; outbuildings</strong>
            </li>
            <li>
              <strong>Floors &amp; suspended timber</strong>
            </li>
            <li>
              <strong>Barn and heritage retrofits</strong> (slim build-ups where
              every millimetre counts)
            </li>
          </ul>
        </div>
      </section>

      {/* ── YBS SUPERQUILT ────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>YBS SuperQuilt</h2>
          <ul className="dot-list">
            <li>
              <strong>19-layer</strong> reflective multifoil blanket
            </li>
            <li>~40 mm relaxed thickness</li>
            <li>Designed for roofs, walls, floors</li>
            <li>
              Supplied with formal certification recognised by building control
            </li>
            <li>
              Works with standard fixings, battens and reflective tapes
            </li>
            <li>
              Ideal as part of a layered build-up (multifoil + service void +
              plasterboard)
            </li>
          </ul>
          <p>
            <em>
              Need alternatives or hybrid build-ups? We'll advise on combined
              systems where multifoil is paired with board or mineral wool to
              hit your targets.
            </em>
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>How it works</h2>
          <ol className="numbered-list">
            <li>
              <strong>Send plans or photos</strong>
              <br />
              Email drawings, room sizes or a quick video walk-through of the
              space.
            </li>
            <li>
              <strong>Rapid trade quote</strong>
              <br />
              You'll get a line-item breakdown for materials, labour (if we're
              fitting), and accessories.
            </li>
            <li>
              <strong>Site survey</strong>
              <br />
              We check substrates, ventilation paths, moisture risks and access.
            </li>
            <li>
              <strong>Install or supply</strong>
              <br />
              We either fit to spec or deliver your kit, with guidance for your
              team.
            </li>
            <li>
              <strong>Sign-off pack</strong>
              <br />
              Datasheets and method statements to support building control
              approval.
            </li>
          </ol>
        </div>
      </section>

      {/* ── FOR INSTALLERS ────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>For installers &amp; builders</h2>
          <ul className="dot-list">
            <li>
              <strong>Price-sharp trade supply</strong> with predictable
              lead-times
            </li>
            <li>
              On-call tech help for tricky details (dormer cheeks, valleys,
              eaves)
            </li>
            <li>
              No-nonsense documentation for inspectors and clients
            </li>
            <li>
              Upsell ready: Slim build-ups your clients will actually say yes to
            </li>
          </ul>
        </div>
      </section>

      {/* ── FOR HOMEOWNERS ────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>
            For homeowners &amp; developers
          </h2>
          <ul className="dot-list">
            <li>
              <strong>Hampshire-wide coverage</strong> with vetted installers
            </li>
            <li>Less mess on site and faster turnaround</li>
            <li>More comfort without losing room space</li>
            <li>Clear costs and simple timelines</li>
          </ul>
        </div>
      </section>

      {/* ── FAQs ──────────────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1.5rem" }}>FAQs</h2>

          {[
            [
              "Is multifoil accepted by building control?",
              "Yes — when used as specified and installed correctly. SuperQuilt is formally certified and widely accepted by inspectors. We provide the documentation you'll need.",
            ],
            [
              "Will it help with condensation?",
              "Multifoil can form an effective vapour control layer when all laps, edges and penetrations are taped and sealed. We'll detail this for your build-up.",
            ],
            [
              "Can I mix multifoil with PIR/MW to hit a target U-value?",
              "Often, yes. Hybrid build-ups are common. Share your target and we'll advise a practical spec.",
            ],
            [
              "What about lead-times?",
              "We keep Hampshire well covered. Most projects turn around quickly once the survey and quote are approved.",
            ],
            [
              "Do you work weekends or evenings?",
              "Where access is tight or time-critical, we'll do our best to accommodate. Tell us what you need.",
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
          <hr style={{ borderColor: "var(--color-contrast-3)", marginBottom: "2rem" }} />
          <h2 style={{ marginBottom: "1rem" }}>
            Ready to price your Hampshire job?
          </h2>
          <p>
            <strong>Installers &amp; builders:</strong> Send plans for a fast
            trade quote.
            <br />
            <strong>Homeowners:</strong> Book a free call to discuss your
            project and get matched with a local installer.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
            <a href="/contact-us" className="btn">Get a Trade Quote</a>
            <a href="/contact-us" className="btn btn--outline">Book a Site Survey</a>
            <a href="/contact-us" className="btn btn--outline">Request Installer Match</a>
          </div>
        </div>
      </section>
    </>
  );
}
