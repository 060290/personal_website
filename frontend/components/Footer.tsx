import Link from "next/link";

const footerLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Build Log" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="section-padding mx-auto max-w-6xl py-12 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <Link
              href="/"
              className="text-sm font-semibold text-foreground hover:opacity-80"
            >
              Portfolio
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Robotics engineering student — projects & build logs.
            </p>
          </div>
          <nav
            className="flex flex-wrap gap-6 md:gap-8"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} — Built with Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
