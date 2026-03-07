export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  year: string;
  tags: string[];
  image: string;
  featured: boolean;
  caseStudy: {
    problem: string;
    solution: string;
    process: string[];
    tech: string[];
    outcomes: string[];
    images?: { src: string; caption: string }[];
  };
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "quadruped-assistive-robot",
    title: "Quadruped Assistive Robot",
    tagline: "Legged mobility platform for indoor assistance and research",
    year: "2024",
    tags: ["ROS 2", "C++", "Gazebo", "Python", "Embedded"],
    image: "/projects/quadruped-hero.jpg",
    featured: true,
    caseStudy: {
      problem:
        "Indoor assistive robots often use wheels or tracks, which limit mobility on stairs, thresholds, and cluttered spaces. I wanted to explore legged locomotion for more versatile indoor assistance.",
      solution:
        "Designed and built a quadruped robot with 12 DOF (3 per leg), running ROS 2 for perception and control. The platform supports walking gaits, obstacle negotiation, and payload carrying for assistive tasks.",
      process: [
        "Mechanical design: leg geometry, joint limits, and foot placement for stable gaits.",
        "Firmware: STM32-based joint control with torque/position feedback and gait state machine.",
        "Simulation: Gazebo + Ignition with custom URDF and contact dynamics tuning.",
        "High-level control: ROS 2 nodes for path planning, obstacle avoidance, and user commands.",
        "Integration: real-world testing on varied surfaces and obstacle courses.",
      ],
      tech: ["ROS 2 Humble", "C++17", "Python 3", "Gazebo", "STM32", "URDF"],
      outcomes: [
        "Stable trot and walk gaits in simulation and on hardware.",
        "Obstacle avoidance pipeline using depth and IMU.",
        "Modular codebase suitable for adding manipulation or navigation stacks.",
      ],
      images: [
        { src: "/projects/quadruped-1.jpg", caption: "Quadruped in Gazebo simulation" },
        { src: "/projects/quadruped-2.jpg", caption: "Hardware prototype with custom legs" },
      ],
    },
  },
  {
    id: "2",
    slug: "obstacle-avoiding-robot-car",
    title: "Obstacle-Avoiding Robot Car",
    tagline: "Autonomous navigation with ultrasonic sensing and reactive control",
    year: "2024",
    tags: ["Arduino", "C", "Ultrasonic", "Motor Control"],
    image: "/projects/robot-car-hero.jpg",
    featured: true,
    caseStudy: {
      problem:
        "Building a reliable foundation for autonomous navigation: the car had to detect obstacles in real time and make safe steering decisions without a computer or camera.",
      solution:
        "Implemented an obstacle-avoiding robot car using an Arduino, HC-SR04 ultrasonic sensors, and DC motors with an L298N driver. Logic runs entirely on the microcontroller with no external compute.",
      process: [
        "Hardware: 2WD chassis, front-mounted ultrasonic sensor, motor driver, and power distribution.",
        "Sensor fusion: multiple readings and filtering to reduce noise and false triggers.",
        "State machine: FORWARD, TURN_LEFT, TURN_RIGHT, BACK_UP with timing and thresholds.",
        "Tuning: threshold distances and turn durations for different speeds and environments.",
        "Documentation: build log and code repo for reproducibility.",
      ],
      tech: ["Arduino (C++)", "HC-SR04", "L298N", "DC Motors", "Breadboard prototyping"],
      outcomes: [
        "Consistent obstacle detection and avoidance in indoor and outdoor tests.",
        "Clear separation of drive logic and sensor reading for easy behavior changes.",
        "Served as base for later projects (line following, Bluetooth control).",
      ],
      images: [
        { src: "/projects/robot-car-1.jpg", caption: "Top view of chassis and wiring" },
        { src: "/projects/robot-car-2.jpg", caption: "Ultrasonic sensor mounting and test run" },
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
