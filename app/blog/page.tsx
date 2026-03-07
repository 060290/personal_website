import Link from "next/link";
import { blogPosts } from "@/frontend/data/blog";

export default function BlogPage() {
  return (
    <div className="section-padding mx-auto max-w-6xl py-16 md:py-24">
      <div className="animate-fade-in-up">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Build log
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Notes and write-ups from building robots: gait tuning, state machines,
          ROS 2, and more.
        </p>
      </div>

      <ul className="mt-12 space-y-8 md:mt-16 md:space-y-12">
        {blogPosts.map((post, i) => (
          <li
            key={post.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${0.05 * i}s`, animationFillMode: "both" }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-border bg-muted/20 p-6 transition-colors hover:border-foreground/20 hover:bg-muted/40 md:p-8"
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <time dateTime={post.date}>{post.date}</time>
                <span>·</span>
                <span>{post.readTime} read</span>
                {post.featured && (
                  <>
                    <span>·</span>
                    <span className="rounded-md border border-border px-2 py-0.5 text-xs">
                      Featured
                    </span>
                  </>
                )}
              </div>
              <h2 className="mt-3 text-xl font-semibold text-foreground group-hover:underline md:text-2xl">
                {post.title}
              </h2>
              <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-background px-2 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
