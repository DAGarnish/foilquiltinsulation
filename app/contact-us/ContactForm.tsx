"use client";

export default function ContactForm() {
  return (
    <form
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "0.75rem",
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      {[
        "Name",
        "Company",
        "Role",
        "Postcode",
        "Email",
        "Phone",
      ].map((field) => (
        <input
          key={field}
          type="text"
          placeholder={field}
          style={{
            padding: "9px 12px",
            border: "1px solid var(--color-contrast-3)",
            borderRadius: "4px",
            fontFamily: "var(--font-body)",
            fontSize: "var(--fs-medium)",
            backgroundColor: "var(--color-base-2)",
            color: "var(--color-contrast)",
            width: "100%",
          }}
        />
      ))}
      <textarea
        placeholder="Message"
        rows={4}
        style={{
          padding: "9px 12px",
          border: "1px solid var(--color-contrast-3)",
          borderRadius: "4px",
          fontFamily: "var(--font-body)",
          fontSize: "var(--fs-medium)",
          backgroundColor: "var(--color-base-2)",
          color: "var(--color-contrast)",
          gridColumn: "1 / -1",
          resize: "vertical",
        }}
      />
      <div style={{ gridColumn: "1 / -1" }}>
        <button type="submit" className="btn">
          Submit Enquiry
        </button>
      </div>
    </form>
  );
}
