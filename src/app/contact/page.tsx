import { Container } from "@/components/Container";
import { ContactForm } from "./ContactForm";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Ellie Chen for collaborations and opportunities.",
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <Container size="narrow">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--color-fg)] sm:text-4xl">
          Contact
        </h1>
        <p className="mt-4 text-lg text-[var(--color-fg-muted)]">
          Have a project in mind, want to collaborate, or just say hi? Send a
          message and I’ll get back to you.
        </p>
        <div className="mt-10">
          <ContactForm />
        </div>
      </Container>
    </div>
  );
}
