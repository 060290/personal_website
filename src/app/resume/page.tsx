import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export const metadata = {
  title: "Resume",
  description: "Resume and experience for Ellie Chen — robotics engineering.",
};

export default function ResumePage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            Resume
          </h1>
          <p className="mt-4 text-[var(--color-fg-muted)]">
            Education, experience, and skills. Download a PDF or view below.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              href="/resume.pdf"
              variant="primary"
              className="inline-flex"
            >
              Download PDF
            </Button>
          </div>

          <section className="mt-12 space-y-10">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-fg-muted)]">
                Education
              </h2>
              <div className="mt-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
                <h3 className="font-semibold text-[var(--color-fg)]">
                  B.S. Robotics Engineering (in progress)
                </h3>
                <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
                  University Name · Expected 2026
                </p>
                <p className="mt-2 text-sm text-[var(--color-fg)]">
                  Relevant coursework: Control Systems, Computer Vision, Robot
                  Dynamics, Embedded Systems, Machine Learning.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-fg-muted)]">
                Experience
              </h2>
              <ul className="mt-4 space-y-6">
                <li className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
                  <h3 className="font-semibold text-[var(--color-fg)]">
                    Robotics Research Assistant
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
                    Lab Name · 2024 – Present
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-fg)]">
                    Assisting with quadruped locomotion and perception. Tasks
                    include simulation in Gazebo, ROS 2 integration, and hardware
                    testing.
                  </p>
                </li>
                <li className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elevated)] p-6">
                  <h3 className="font-semibold text-[var(--color-fg)]">
                    Teaching Assistant — Intro to Robotics
                  </h3>
                  <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
                    University Name · 2023 – 2024
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-fg)]">
                    Led lab sections and office hours; helped students with
                    Arduino, sensors, and basic control.
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-fg-muted)]">
                Skills
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "ROS 2",
                  "Python",
                  "C++",
                  "Embedded (STM32, Arduino)",
                  "CAD (Fusion 360)",
                  "Gazebo",
                  "OpenCV",
                  "Control Systems",
                  "3D Printing",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-2 text-sm font-medium text-[var(--color-fg)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <div className="mt-12">
            <Button href="/contact" variant="primary">
              Contact me
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
