import { ContactForm } from "@/frontend/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="section-padding mx-auto max-w-2xl py-16 md:py-24">
      <div className="animate-fade-in-up">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Contact
        </h1>
        <p className="mt-4 text-muted-foreground">
          Have a question or want to collaborate? Send a message and I&apos;ll
          get back to you.
        </p>
        <ContactForm className="mt-12" />
      </div>
    </div>
  );
}
