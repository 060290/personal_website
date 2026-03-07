import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug } from "@/frontend/data/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="section-padding mx-auto max-w-3xl py-16 md:py-24">
      <Link
        href="/blog"
        className="mb-8 inline-block text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Build log
      </Link>

      <header className="mb-12">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <time dateTime={post.date}>{post.date}</time>
          <span>·</span>
          <span>{post.readTime} read</span>
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-muted/50 px-2 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-lg text-muted-foreground">{post.excerpt}</p>
        <p className="mt-6 text-muted-foreground">
          Full article content can be added here — e.g. from Markdown or CMS.
          This page serves as the build log post layout.
        </p>
      </div>

      <div className="mt-16 border-t border-border pt-8">
        <Link
          href="/blog"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to build log
        </Link>
      </div>
    </article>
  );
}
