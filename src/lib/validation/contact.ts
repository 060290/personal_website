import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(120, "Name must be 120 characters or less"),
  email: z.string().email("Please enter a valid email address"),
  subject: z
    .string()
    .min(1, "Subject is required")
    .max(200, "Subject must be 200 characters or less"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message must be 5000 characters or less"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
