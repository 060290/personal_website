import Link from "next/link";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
  priority?: boolean;
};

export function ProjectCard({ project, className, priority }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group block rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] overflow-hidden transition-all duration-300 hover:border-[var(--color-fg-muted)] hover:shadow-lg",
        className
      )}
    >
      <div className="aspect-[16/10] bg-[var(--color-border)] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center"
          aria-hidden
        >
          <span className="text-4xl text-white/30 font-mono">
            {project.title.charAt(0)}
          </span>
        </div>
      </div>
      <div className="p-6">
        <span className="text-xs font-medium text-[var(--color-fg-muted)] uppercase tracking-wider">
          {project.year}
        </span>
        <h3 className="mt-2 text-xl font-semibold text-[var(--color-fg)] group-hover:text-[var(--color-accent)] transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-[var(--color-fg-muted)] line-clamp-2">
          {project.tagline}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-[var(--color-bg)] px-2 py-1 text-xs font-medium text-[var(--color-fg-muted)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
