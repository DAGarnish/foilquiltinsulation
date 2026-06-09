import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us – Foilquiltinsulation",
  description:
    "Get in touch with us for a trade quote, site survey, or technical support.",
};

export default function ContactUsPage() {
  return (
    <>
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
          Contact Us
        </h1>
      </section>

      <section className="section section--gray">
        <div className="section__inner">
          <h2 style={{ marginBottom: "1rem" }}>
            Ready to price your project?
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
            <a href="/contact-us" className="btn">Get Trade Quote</a>
            <a href="/contact-us" className="btn btn--outline">Book a Survey</a>
            <a href="/contact-us" className="btn btn--outline">Speak to a Technical Lead</a>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
