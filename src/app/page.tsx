import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ProjectCard } from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/data/projects";
import { getRecentPosts } from "@/lib/data/blog";
import { formatDate } from "@/lib/utils";

export default function HomePage() {
  const featured = getFeaturedProjects();
  const recentPosts = getRecentPosts(3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--color-border)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.12),transparent)]" />
        <Container className="relative py-16 sm:py-24 lg:py-32">
          <p className="text-sm font-medium text-[var(--color-accent)] animate-fade-in">
            Robotics Engineering
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-[var(--color-fg)] sm:text-5xl lg:text-6xl animate-fade-in-up">
            Building robots that assist, navigate, and learn.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--color-fg-muted)] animate-fade-in-up [animation-delay:100ms] opacity-0 [animation-fill-mode:forwards]">
            I design and build quadruped assistive robots, autonomous vehicles, and
            manipulation systems. This site is my portfolio, build log, and way to
            connect.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
            <Button href="/projects" variant="primary" size="lg">
              View projects
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Get in touch
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-[var(--color-fg)]">
                Featured projects
              </h2>
              <p className="mt-2 text-[var(--color-fg-muted)]">
                Robotics builds from coursework and personal projects.
              </p>
            </div>
            <Button href="/projects" variant="ghost" size="sm" className="shrink-0">
              All projects →
            </Button>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {featured.map((project, i) => (
              <div
                key={project.id}
                className="animate-fade-in-up opacity-0 [animation-fill-mode:forwards]"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-bg-elevated)] py-16 sm:py-24">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-[var(--color-fg)]">
                Build log
              </h2>
              <p className="mt-2 text-[var(--color-fg-muted)]">
                Notes, iterations, and tutorials from the bench.
              </p>
            </div>
            <Button href="/blog" variant="ghost" size="sm" className="shrink-0">
              All posts →
            </Button>
          </div>
          <ul className="mt-10 space-y-1">
            {recentPosts.map((post, i) => (
              <li
                key={post.id}
                className="animate-fade-in-up opacity-0 [animation-fill-mode:forwards]"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="flex flex-col gap-1 rounded-xl py-4 px-4 -mx-4 transition-colors hover:bg-[var(--color-bg)] sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="font-medium text-[var(--color-fg)]">
                    {post.title}
                  </span>
                  <span className="text-sm text-[var(--color-fg-muted)]">
                    {formatDate(post.date)} · {post.readTime} min read
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-[var(--color-border)] py-16 sm:py-24">
        <Container size="narrow" className="text-center">
          <h2 className="text-2xl font-semibold text-[var(--color-fg)]">
            Let’s work together
          </h2>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            Open to internships, research, and collaboration on robotics and
            hardware projects.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Contact me
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
