export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "quadruped-gait-tuning",
    title: "Quadruped Gait Tuning: From Simulation to Hardware",
    excerpt:
      "How I tuned trot and walk gaits in Gazebo and then ported parameters to the real quadruped, including dealing with latency and contact uncertainty.",
    date: "2024-02-15",
    readTime: "8 min",
    tags: ["Robotics", "Simulation", "Control"],
    featured: true,
  },
  {
    id: "2",
    slug: "obstacle-car-state-machine",
    title: "Designing the Obstacle-Avoiding Car State Machine",
    excerpt:
      "A breakdown of the simple but effective state machine that keeps the robot car safe: states, transitions, and how to tune them.",
    date: "2024-01-22",
    readTime: "5 min",
    tags: ["Embedded", "Arduino", "Autonomy"],
    featured: true,
  },
  {
    id: "3",
    slug: "ros2-first-steps",
    title: "My First ROS 2 Project: Tips and Pitfalls",
    excerpt:
      "Lessons learned setting up ROS 2 Humble, writing nodes in C++ and Python, and debugging with rqt and the CLI.",
    date: "2023-12-10",
    readTime: "6 min",
    tags: ["ROS 2", "Tutorial"],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
