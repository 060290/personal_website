import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug } from "@/frontend/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { caseStudy } = project;

  return (
    <article className="section-padding mx-auto max-w-3xl py-16 md:py-24">
      <Link
        href="/projects"
        className="mb-8 inline-block text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Projects
      </Link>

      <header className="mb-12">
        <p className="text-sm font-medium text-muted-foreground">
          {project.year}
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {project.tagline}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-muted/50 px-2 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-12">
        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Problem
          </h2>
          <p className="mt-3 text-foreground">{caseStudy.problem}</p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Solution
          </h2>
          <p className="mt-3 text-foreground">{caseStudy.solution}</p>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Process
          </h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-foreground">
            {caseStudy.process.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Tech
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {caseStudy.tech.map((t) => (
              <li
                key={t}
                className="rounded-lg border border-border bg-muted/30 px-3 py-1.5 text-sm text-foreground"
              >
                {t}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Outcomes
          </h2>
          <ul className="mt-4 space-y-2 text-foreground">
            {caseStudy.outcomes.map((outcome, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-muted-foreground">•</span>
                {outcome}
              </li>
            ))}
          </ul>
        </section>

        {caseStudy.images && caseStudy.images.length > 0 && (
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Images
            </h2>
            <div className="mt-4 space-y-6">
              {caseStudy.images.map((img, i) => (
                <figure key={i}>
                  <div className="aspect-video rounded-xl bg-muted flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">
                      {img.caption}
                    </span>
                  </div>
                  <figcaption className="mt-2 text-sm text-muted-foreground">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}
      </div>

      <div className="mt-16 border-t border-border pt-8">
        <Link
          href="/projects"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to projects
        </Link>
      </div>
    </article>
  );
}
