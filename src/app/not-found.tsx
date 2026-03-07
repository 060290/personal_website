import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center py-16">
      <Container size="narrow" className="text-center">
        <h1 className="text-4xl font-bold text-[var(--color-fg)]">404</h1>
        <p className="mt-4 text-[var(--color-fg-muted)]">
          This page could not be found.
        </p>
        <div className="mt-8">
          <Button href="/" variant="primary">
            Back to home
          </Button>
        </div>
      </Container>
    </div>
  );
}
