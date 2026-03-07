import { contactFormSchema, type ContactFormData } from "@/lib/validation/contact";

export type ContactResult =
  | { success: true }
  | { success: false; errors: Record<string, string> };

export function validateContactForm(
  raw: unknown
): { success: true; data: ContactFormData } | { success: false; errors: Record<string, string> } {
  const parsed = contactFormSchema.safeParse(raw);
  if (parsed.success) {
    return { success: true, data: parsed.data };
  }
  const errors: Record<string, string> = {};
  const fieldErrors = parsed.error.flatten().fieldErrors;
  if (fieldErrors) {
    for (const [key, value] of Object.entries(fieldErrors)) {
      if (value?.[0]) errors[key] = value[0];
    }
  }
  return { success: false, errors };
}

export function processContactSubmission(_data: ContactFormData): Promise<void> {
  // In production: send email (e.g. Resend, SendGrid), write to DB, or queue.
  return Promise.resolve();
}
