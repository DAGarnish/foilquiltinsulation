"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.Name,
          company: data.Company,
          role: data.Role,
          postcode: data.Postcode,
          email: data.Email,
          phone: data.Phone,
          message: data.Message,
        }),
      });

      let result;
      try {
        result = await response.json();
      } catch (e) {
        throw new Error("Invalid response from server");
      }

      if (response.ok && result.success) {
        toast.success("Enquiry submitted successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error(result.error || "Failed to submit enquiry.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An unexpected error occurred.");
    } finally {
      setStatus("idle");
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "0.75rem",
        }}
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
            name={field}
            type={field === "Email" ? "email" : "text"}
            required={field === "Name" || field === "Email"}
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
          name="Message"
          placeholder="Message"
          required
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
          <button type="submit" className="btn" disabled={status === "submitting"}>
            {status === "submitting" ? "Submitting..." : "Submit Enquiry"}
          </button>
        </div>
      </form>
      <ToastContainer position="bottom-right" />
    </>
  );
}
