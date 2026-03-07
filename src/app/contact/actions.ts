"use server";

import { validateContactForm, processContactSubmission } from "@/lib/contact";

export type SubmitResult =
  | { success: true }
  | { success: false; errors?: Record<string, string>; message?: string };

export async function submitContact(formData: FormData): Promise<SubmitResult> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  const result = validateContactForm(raw);

  if (!result.success) {
    return { success: false, errors: result.errors };
  }

  try {
    await processContactSubmission(result.data);
    return { success: true };
  } catch {
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
