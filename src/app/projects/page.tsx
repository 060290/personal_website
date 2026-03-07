import { Container } from "@/components/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/data/projects";

export const metadata = {
  title: "Projects",
  description:
    "Robotics projects: quadruped assistive robot, obstacle-avoiding car, pick-and-place arm, and more.",
};

export default function ProjectsPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            Projects
          </h1>
          <p className="mt-4 text-lg text-[var(--color-fg-muted)]">
            A selection of robotics builds—from assistive quadrupeds to
            autonomous cars and manipulation—with case studies and build logs.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </div>
  );
}
