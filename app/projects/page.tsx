import Link from "next/link";
import { projects } from "@/frontend/data/projects";

export default function ProjectsPage() {
  return (
    <div className="section-padding mx-auto max-w-6xl py-16 md:py-24">
      <div className="animate-fade-in-up">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Robotics and embedded systems work — from quadrupeds and autonomous
          cars to simulation and control.
        </p>
      </div>

      <ul className="mt-12 grid gap-8 md:mt-16 md:grid-cols-2 lg:gap-12">
        {projects.map((project, i) => (
          <li
            key={project.id}
            className="animate-fade-in-up"
            style={{ animationDelay: `${0.05 * i}s`, animationFillMode: "both" }}
          >
            <Link
              href={`/projects/${project.slug}`}
              className="group block overflow-hidden rounded-2xl border border-border bg-muted/20 transition-colors hover:border-foreground/20 hover:bg-muted/40"
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
                <h2 className="mt-2 text-xl font-semibold text-foreground group-hover:underline md:text-2xl">
                  {project.title}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.tagline}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
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
    </div>
  );
}
