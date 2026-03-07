import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "quadruped-leg-design-iteration",
    title: "Quadruped leg design: from first print to stable gait",
    excerpt:
      "How we went through three leg iterations—material, joint stiffness, and foot design—before achieving a repeatable walk cycle.",
    date: "2024-11-15",
    readTime: 8,
    tags: ["Robotics", "CAD", "Build Log"],
    image: "/blog/leg-iteration.jpg",
  },
  {
    id: "2",
    slug: "ultrasonic-sensor-placement",
    title: "Ultrasonic sensor placement on the obstacle-avoiding car",
    excerpt:
      "Testing different mount heights and servo sweep ranges to maximize field of view and reduce blind spots.",
    date: "2024-10-02",
    readTime: 5,
    tags: ["Electronics", "Sensors", "Build Log"],
    image: "/blog/ultrasonic.jpg",
  },
  {
    id: "3",
    slug: "ros2-first-steps",
    title: "ROS 2 Humble: first steps for a new project",
    excerpt:
      "Setting up ROS 2 Humble on Ubuntu 22.04, creating a workspace, and running your first node and topic.",
    date: "2024-09-01",
    readTime: 6,
    tags: ["ROS 2", "Tutorial"],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRecentPosts(limit = 5): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, limit);
}
