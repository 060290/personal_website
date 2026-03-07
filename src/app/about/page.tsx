import { Container } from "@/components/Container";
import { Button } from "@/components/Button";

export const metadata = {
  title: "About",
  description:
    "About Ellie Chen — robotics engineering student focused on assistive robots and autonomous systems.",
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--color-fg)] sm:text-4xl">
            About
          </h1>
          <div className="mt-8 space-y-6 text-[var(--color-fg)]">
            <p className="text-lg leading-relaxed">
              I’m a robotics engineering student with a focus on building systems
              that help people—from quadruped assistive robots to autonomous
              navigation and manipulation. I care about clean design, robust
              control, and making hardware that’s both capable and maintainable.
            </p>
            <p className="leading-relaxed">
              My work spans mechanical design (CAD, 3D printing, rapid prototyping),
              embedded systems and firmware, and higher-level software with ROS 2
              and Python. I’ve built quadrupeds, obstacle-avoiding vehicles, and
              pick-and-place arms both in coursework and on my own time.
            </p>
            <p className="leading-relaxed">
              When I’m not at the bench, I like to document what I learn and share
              build logs and tutorials so others can iterate on similar ideas.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/projects" variant="primary">
              View projects
            </Button>
            <Button href="/contact" variant="secondary">
              Get in touch
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
