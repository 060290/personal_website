import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="section-padding mx-auto max-w-3xl py-16 md:py-24">
      <div className="animate-fade-in-up">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          Resume
        </h1>
        <p className="mt-4 text-muted-foreground">
          Education, experience, skills, and a downloadable PDF link (add your
          own file).
        </p>

        <div className="mt-12 space-y-12">
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Education
            </h2>
            <div className="mt-4 space-y-4">
              <div>
                <p className="font-medium text-foreground">
                  B.S. Robotics Engineering (in progress)
                </p>
                <p className="text-sm text-muted-foreground">
                  University Name — Expected 2026
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Relevant coursework: Control Systems, Embedded Systems, Computer
                  Vision, Machine Learning for Robotics.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Experience
            </h2>
            <div className="mt-4 space-y-6">
              <div>
                <p className="font-medium text-foreground">
                  Robotics Research Assistant
                </p>
                <p className="text-sm text-muted-foreground">
                  Lab Name — 2024 – Present
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Working on legged locomotion and simulation-to-real transfer.
                  Implementing gait controllers in ROS 2 and C++.
                </p>
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Embedded Systems Intern
                </p>
                <p className="text-sm text-muted-foreground">
                  Company Name — Summer 2024
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Developed firmware and test harnesses for motor control
                  boards. Collaborated on code reviews and documentation.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Skills
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {[
                "C++",
                "Python",
                "ROS 2",
                "Embedded C",
                "Gazebo",
                "STM32",
                "Linux",
                "Git",
                "Control Theory",
                "URDF",
              ].map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-border bg-muted/30 px-3 py-1.5 text-sm text-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-muted/20 p-6 md:p-8">
          <p className="text-sm font-medium text-foreground">
            Download resume (PDF)
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            Add a link to your resume PDF here, or host the file in{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
              /public
            </code>{" "}
            and link to it.
          </p>
          <a
            href="/resume.pdf"
            className="mt-4 inline-flex h-10 items-center justify-center rounded-lg border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Download PDF
          </a>
        </div>

        <div className="mt-8">
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact me →
          </Link>
        </div>
      </div>
    </div>
  );
}
