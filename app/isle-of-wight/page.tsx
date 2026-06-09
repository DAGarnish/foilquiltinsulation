import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isle of Wight Installers – Foilquiltinsulation",
  description:
    "SuperQuilt & Multifoil Insulation supply and fit on the Isle of Wight. Installer matching, site surveys & tech guidance for roofers, builders and loft specialists.",
};

export default function IsleOfWightPage() {
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
          Isle of Wight Installers
        </h1>
      </section>

      {/* ── INTRO ─────────────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>
            Multifoil Insulation on the Isle of Wight
          </h2>

          <p style={{ color: "var(--color-contrast-2)", marginBottom: "1rem" }}>
            Supply &amp; fit • Installer matching • Site surveys • Tech guidance
            for pros
          </p>

          <p>
            Get fast, tidy installs of YBS SuperQuilt and comparable multifoil
            systems—set up for roofers, builders, loft-conversion teams, and
            timber-frame specialists across the Island. We help you hit targets,
            keep build-ups slim, and get the paperwork you need for Building
            Control.
          </p>

          <p>
            <strong>Areas covered:</strong> Newport, Ryde, Cowes &amp; East
            Cowes, Sandown, Shanklin, Ventnor, Yarmouth, Freshwater, Bembridge,
            Brading—and everywhere in between.
          </p>
        </div>
      </section>

      {/* ── WHY MULTIFOIL ─────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>
            Why multifoil (SuperQuilt) for Island projects?
          </h2>
          <ul className="dot-list">
            <li>
              Multifoil delivers high thermal performance with a relaxed
              thickness ~40 mm (approx.), ideal where rafters are shallow or
              headroom matters.
            </li>
            <li>Roofs, walls, floors—one system, multiple details.</li>
            <li>
              Clean, quick, and easy to handle, especially useful for
              ferry-timed days and tight turnarounds.
            </li>
            <li>
              When correctly installed and taped, multifoil systems provide
              vapour control within the build-up.
            </li>
            <li>
              19-layer certified product with formal approvals suitable for
              Building Control submissions.
            </li>
          </ul>
          <p>
            YBS SuperQuilt multifoil insulation (19-layer blanket for roofs,
            walls, floors).
          </p>
        </div>
      </section>

      {/* ── WHAT WE DO ────────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1.5rem" }}>What we do</h2>

          {/* 1) Supply & Fit */}
          <h3 style={{ marginBottom: "0.75rem" }}>
            1) Supply &amp; Fit (Trade-ready)
          </h3>
          <ul className="dot-list">
            <li>Measured, cut, taped, and sealed by an experienced team</li>
            <li>
              Warm roof / cold roof details for pitched roofs (over/under
              rafters)
            </li>
            <li>
              Stud walls &amp; dormers (between &amp; across studs/battens)
            </li>
            <li>
              Suspended timber floors (between joists + service voids)
            </li>
            <li>All fixings, tapes, and accessories included to spec</li>
          </ul>

          {/* 2) Installer-Matching */}
          <h3 style={{ marginBottom: "0.75rem" }}>2) Installer-Matching</h3>
          <p style={{ marginBottom: "1.5rem" }}>
            Already have labour? We'll pair you with a vetted multifoil
            installer on the Island and ship the full kit with install notes and
            detailed drawings.
          </p>

          {/* 3) Site Surveys */}
          <h3 style={{ marginBottom: "0.75rem" }}>
            3) Site Surveys &amp; Technical
          </h3>
          <ul className="dot-list">
            <li>
              Pre-start survey to check rafters, service zones, ventilation, and
              junctions
            </li>
            <li>
              U-value guidance for typical Island build-ups (roof, wall, floor)
            </li>
            <li>
              Detail packs for Building Control: product data, certificates,
              install method statements
            </li>
          </ul>
        </div>
      </section>

      {/* ── TYPICAL BUILD-UPS ─────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>Typical build-ups we deliver</h2>

          <h3 style={{ marginBottom: "0.75rem" }}>
            Pitched roofs (loft conversions &amp; re-roofs)
          </h3>
          <ul className="dot-list">
            <li>Over-rafter multifoil + counter-batten + tile batten; or</li>
            <li>Under-rafter multifoil + service batten (slim, tidy finish)</li>
          </ul>
          <p>
            We'll align the detail to your design goals: slim internal
            build-ups, airtightness, and an install sequence that works with
            your programme.
          </p>
        </div>
      </section>

      {/* ── YBS SUPERQUILT ────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>YBS SuperQuilt (what to expect)</h2>
          <ul className="dot-list">
            <li>
              19 layers of reflective foils, waddings, and thermal breaks
            </li>
            <li>
              Approx. 40 mm relaxed thickness (projected performance delivered
              through reflective and conductive resistance in the system)
            </li>
            <li>Use across roofs, walls, floors</li>
            <li>
              Formal certification suitable for Building Control documentation
            </li>
            <li>
              Works as part of a taped and sealed system to manage vapour and
              reduce air leakage
            </li>
          </ul>
          <p>
            We'll provide current data sheets and certificates with your quote
            so you've got everything to hand for site and sign-off.
          </p>
        </div>
      </section>

      {/* ── LOCAL ADVANTAGES ──────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>Local advantages</h2>
          <ul className="dot-list">
            <li>
              <strong>Reliable ferry-day planning:</strong> Materials
              consolidated and labelled by area/room to keep install days
              efficient.
            </li>
            <li>
              <strong>Tidy, low-mess installs:</strong> Perfect for occupied
              homes and tight streets.
            </li>
            <li>
              <strong>Coastal know-how:</strong> We pay attention to vapour
              control and airtightness by the sea—taping, laps, and junctions
              are properly handled.
            </li>
            <li>
              Same-week slots are often available for surveys and small
              installs.
            </li>
          </ul>
        </div>
      </section>

      {/* ── WHO WE HELP ───────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>Who we help</h2>
          <ul className="dot-list">
            <li>
              Roofing contractors &amp; loft specialists who need lean build-ups
              and clean finishes
            </li>
            <li>
              Builders &amp; timber-frame teams managing mixed fabric upgrades
            </li>
            <li>
              Homeowners wanting a warmer loft, dormer, or garden room without
              losing space
            </li>
          </ul>
        </div>
      </section>

      {/* ── HOW TO GET STARTED ────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>How to get started</h2>
          <ol className="numbered-list">
            <li>
              Send plans or photos (rafters, joists, wall studs, any existing
              insulation).
            </li>
            <li>
              We spec the kit (multifoil, battens, tapes, fixings) and provide
              an installer or fit plan.
            </li>
            <li>Agree programme around ferry times and site access.</li>
            <li>
              We deliver &amp; install—then hand over the Building Control pack
              and aftercare notes.
            </li>
          </ol>
        </div>
      </section>

      {/* ── FAQs ──────────────────────────────────────── */}
      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1.5rem" }}>FAQs</h2>

          {[
            [
              "Do you cover my area?",
              "Yes—all across the Island: Newport, Ryde, Cowes/East Cowes, Sandown, Shanklin, Ventnor, Yarmouth, Freshwater, Bembridge, Brading, and rural locations.",
            ],
            [
              "Can multifoil help me meet Part L targets?",
              "Used in the right build-up and installed correctly, yes—multifoil can help you reach target U-values. We'll share detail-specific guidance with your quote.",
            ],
            [
              "Is it suitable for older or coastal homes?",
              "Yes, but detailing matters. We manage taping, laps, junctions, and ventilation to control moisture and air movement in coastal conditions.",
            ],
            [
              "Do you provide certificates and data sheets?",
              "Absolutely—formal certification and product data are included for Building Control and warranty files.",
            ],
            [
              "Can I combine multifoil with PIR/mineral wool?",
              "Yes. We often design hybrid build-ups to hit performance with the slimmest practical section.",
            ],
            [
              "How quickly can you start?",
              "Surveys are typically available within a week, and small installs can often be scheduled soon after, subject to ferry slots and material allocation.",
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
          <h2 style={{ marginBottom: "1rem" }}>Ready to go?</h2>
          <p>
            Book a site survey or request a trade quote. Tell us: property type,
            target areas (roof/wall/floor), rough dimensions, and your ideal
            start date. We'll come back with a clear spec, programme, and price.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              marginTop: "1.5rem",
            }}
          >
            <a href="/contact-us" className="btn">
              Book a Site Survey
            </a>
            <a href="/contact-us" className="btn btn--outline">
              Request a Trade Quote
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
