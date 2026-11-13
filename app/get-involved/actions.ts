"use server";

import { createClient } from "@/lib/supabase/server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

// Inserts a contact form submission into the `messages` table.
// Requires a `messages` table in Supabase (see Requirements Doc, Section E)
// with columns: name, email, subject, body, created_at, status.
export async function submitContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const subject = (formData.get("subject") as string)?.trim();
  const body = (formData.get("message") as string)?.trim();

  if (!name || !email || !body) {
    return { status: "error", message: "Please fill in your name, email, and message." };
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.from("messages").insert({
      name,
      email,
      subject: subject || "Website contact form",
      body,
      status: "new",
    });

    if (error) {
      console.error("Contact form insert failed:", error.message);
      return {
        status: "error",
        message: "Something went wrong sending your message. Please try emailing us directly.",
      };
    }

    return { status: "success", message: "Thank you — your message has been sent. We'll get back to you soon." };
  } catch (err) {
    console.error("Contact form error:", err);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try emailing us directly.",
    };
  }
}
