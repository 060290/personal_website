import Link from "next/link";
import { Container } from "@/components/Container";
import { blogPosts } from "@/lib/data/blog";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Build Log",
  description:
    "Build logs, design iterations, and tutorials from robotics and hardware projects.",
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            Build log
          </h1>
          <p className="mt-4 text-lg text-[var(--color-fg-muted)]">
            Notes, iterations, and tutorials from the bench. Updated as projects
            progress.
          </p>
        </div>
        <ul className="mt-12 divide-y divide-[var(--color-border)]">
          {sorted.map((post) => (
            <li key={post.id}>
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col gap-2 py-8 transition-colors hover:opacity-80 sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div>
                  <h2 className="text-lg font-semibold text-[var(--color-fg)]">
                    {post.title}
                  </h2>
                  <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
                    {post.excerpt}
                  </p>
                </div>
                <span className="text-sm text-[var(--color-fg-muted)] sm:shrink-0 sm:pl-4">
                  {formatDate(post.date)} · {post.readTime} min read
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
