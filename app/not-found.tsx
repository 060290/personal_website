import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-padding mx-auto flex max-w-2xl flex-col items-center justify-center py-24 text-center">
      <h1 className="text-2xl font-semibold text-foreground md:text-3xl">
        Page not found
      </h1>
      <p className="mt-4 text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        Back to home
      </Link>
    </div>
  );
}
