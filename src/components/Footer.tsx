import Link from "next/link";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Build Log" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/"
              className="text-sm font-semibold text-[var(--color-fg)]"
            >
              Ellie Chen
            </Link>
            <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
              Robotics Engineering · Portfolio & Build Logs
            </p>
          </div>
          <nav className="flex flex-wrap gap-6">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t border-[var(--color-border)] pt-6 text-center text-sm text-[var(--color-fg-muted)]">
          © {year} Ellie Chen. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
