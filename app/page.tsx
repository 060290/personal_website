import Link from "next/link";
import { projects } from "@/frontend/data/projects";

export default function HomePage() {
  const featured = projects.filter((p) => p.featured).slice(0, 2);

  return (
    <>
      <section className="gradient-mesh border-b border-border">
        <div className="section-padding mx-auto max-w-6xl py-20 md:py-28 lg:py-32">
          <div className="max-w-2xl animate-fade-in">
            <p className="mb-4 text-sm font-medium text-muted-foreground animate-fade-in-up [animation-delay:0.1s] [animation-fill-mode:both]">
              Robotics Engineering Student
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl animate-fade-in-up [animation-delay:0.2s] [animation-fill-mode:both]">
              Building robots that move, sense, and assist.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground md:text-xl animate-fade-in-up [animation-delay:0.3s] [animation-fill-mode:both]">
              I design and build legged robots, autonomous vehicles, and
              embedded systems. Here you&apos;ll find my projects, build logs,
              and how to get in touch.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-in-up [animation-delay:0.4s] [animation-fill-mode:both]">
              <Link
                href="/projects"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                View projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-transparent px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding mx-auto max-w-6xl py-16 md:py-24">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Featured projects
          </h2>
          <Link
            href="/projects"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View all →
          </Link>
        </div>
        <ul className="mt-8 grid gap-8 md:grid-cols-2">
          {featured.map((project, i) => (
            <li
              key={project.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${0.1 * i}s`, animationFillMode: "both" }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block overflow-hidden rounded-2xl border border-border bg-muted/30 transition-colors hover:border-foreground/20 hover:bg-muted/50"
              >
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">
                    {project.title}
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-xs font-medium text-muted-foreground">
                    {project.year}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-foreground group-hover:underline">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.tagline}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border bg-background px-2 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border bg-muted/20">
        <div className="section-padding mx-auto max-w-6xl py-16 md:py-24">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Build log
            </h2>
            <p className="mt-4 text-muted-foreground">
              Notes on gait tuning, state machines, ROS 2, and more from my
              robotics projects.
            </p>
            <Link
              href="/blog"
              className="mt-6 inline-flex items-center text-sm font-medium text-foreground hover:opacity-80"
            >
              Read the build log →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
