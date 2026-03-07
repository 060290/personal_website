import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be at most 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(200, "Subject must be at most 200 characters"),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters")
    .max(2000, "Message must be at most 2000 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export function validateContactForm(
  data: unknown
): { success: true; data: ContactFormData } | { success: false; errors: Record<string, string> } {
  const result = contactFormSchema.safeParse(data);
  if (result.success) {
    return { success: true, data: result.data };
  }
  const errors: Record<string, string> = {};
  result.error.errors.forEach((err) => {
    const path = err.path[0] as string;
    if (path && !errors[path]) {
      errors[path] = err.message;
    }
  });
  return { success: false, errors };
}
