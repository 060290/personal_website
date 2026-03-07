import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { getBlogPostBySlug } from "@/lib/data/blog";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/Button";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="py-12 sm:py-16">
      <Container size="narrow">
        <Link
          href="/blog"
          className="text-sm font-medium text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
        >
          ← Build log
        </Link>
        <header className="mt-6">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            {formatDate(post.date)} · {post.readTime} min read
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-[var(--color-bg-elevated)] px-2 py-1 text-xs font-medium text-[var(--color-fg-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>
        <div className="mt-10 prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg text-[var(--color-fg-muted)]">{post.excerpt}</p>
          <p className="mt-6 text-[var(--color-fg)]">
            This is a placeholder for the full build log post. In production you
            would load content from Markdown or CMS (e.g. MDX, Contentlayer, or
            Sanity) and render it here. The slug for this post is{" "}
            <code className="rounded bg-[var(--color-bg-elevated)] px-1.5 py-0.5 text-sm">
              {post.slug}
            </code>
            .
          </p>
        </div>
        <div className="mt-12">
          <Button href="/blog" variant="secondary">
            Back to build log
          </Button>
        </div>
      </Container>
    </div>
  );
}
