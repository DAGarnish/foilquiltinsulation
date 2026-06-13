"use server";

import { prisma } from "@/lib/prisma";

export async function submitContact(formData: FormData) {
  const name = formData.get("Name") as string;
  const company = formData.get("Company") as string;
  const role = formData.get("Role") as string;
  const postcode = formData.get("Postcode") as string;
  const email = formData.get("Email") as string;
  const phone = formData.get("Phone") as string;
  const message = formData.get("Message") as string;

  try {
    const enquiry = await prisma.contactEnquiry.create({
      data: {
        name,
        company,
        role,
        postcode,
        email,
        phone,
        message,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error saving contact enquiry:", error);
    return { success: false, error: "Failed to save enquiry" };
  }
}
