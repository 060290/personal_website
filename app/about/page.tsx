import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="section-padding mx-auto max-w-3xl py-16 md:py-24">
      <div className="animate-fade-in-up">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          About
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          I&apos;m a robotics engineering student focused on legged locomotion,
          autonomous systems, and embedded software. I like taking projects from
          simulation to hardware and writing about the process.
        </p>
        <p className="mt-6 text-muted-foreground">
          My work spans quadrupeds, obstacle-avoiding robots, and ROS 2-based
          pipelines. I care about clean interfaces between perception, control,
          and actuation — and about making robots that are reliable enough to
          be useful in real environments.
        </p>
        <p className="mt-6 text-muted-foreground">
          When I&apos;m not building robots, I enjoy reading, hiking, and
          tinkering with electronics. You can see my projects on the{" "}
          <Link href="/projects" className="font-medium text-foreground underline underline-offset-2 hover:opacity-80">
            Projects
          </Link>{" "}
          page and follow along in the{" "}
          <Link href="/blog" className="font-medium text-foreground underline underline-offset-2 hover:opacity-80">
            Build log
          </Link>
          . For a formal overview, check my{" "}
          <Link href="/resume" className="font-medium text-foreground underline underline-offset-2 hover:opacity-80">
            Resume
          </Link>
          .
        </p>
        <div className="mt-12">
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </div>
  );
}
