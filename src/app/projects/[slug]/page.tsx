import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/Container";
import { getProjectBySlug } from "@/lib/data/projects";
import { Button } from "@/components/Button";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.tagline,
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { caseStudy } = project;

  return (
    <div className="pb-16">
      <div className="border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)]">
        <Container className="py-12 sm:py-16">
          <Link
            href="/projects"
            className="text-sm font-medium text-[var(--color-fg-muted)] hover:text-[var(--color-fg)]"
          >
            ← Projects
          </Link>
          <p className="mt-4 text-sm font-medium text-[var(--color-accent)]">
            {project.year}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-[var(--color-fg-muted)]">
            {project.tagline}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-[var(--color-bg)] px-3 py-1.5 text-sm font-medium text-[var(--color-fg-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </Container>
      </div>

      <Container className="py-12 sm:py-16">
        <div className="mx-auto max-w-3xl space-y-16">
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-fg-muted)]">
              Overview
            </h2>
            <p className="mt-4 text-[var(--color-fg)]">
              {project.description}
            </p>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-fg-muted)]">
              Problem
            </h2>
            <p className="mt-4 text-[var(--color-fg)]">{caseStudy.problem}</p>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-fg-muted)]">
              Solution
            </h2>
            <p className="mt-4 text-[var(--color-fg)]">{caseStudy.solution}</p>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-fg-muted)]">
              Process
            </h2>
            <ol className="mt-4 list-decimal space-y-4 pl-5 text-[var(--color-fg)]">
              {caseStudy.process.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-fg-muted)]">
              Tech stack
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {caseStudy.techStack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-2 text-sm font-medium text-[var(--color-fg)]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-fg-muted)]">
              Outcomes
            </h2>
            <ul className="mt-4 space-y-2 text-[var(--color-fg)]">
              {caseStudy.outcomes.map((outcome, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-[var(--color-accent)]">✓</span>
                  {outcome}
                </li>
              ))}
            </ul>
          </section>

          <div className="pt-8">
            <Button href="/projects" variant="secondary">
              Back to projects
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
