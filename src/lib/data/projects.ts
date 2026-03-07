import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    slug: "quadruped-assistive-robot",
    title: "Quadruped Assistive Robot",
    tagline: "Mobility aid with adaptive gait and obstacle awareness",
    description:
      "A four-legged assistive robot designed to support mobility and object retrieval for users with limited movement. Features adaptive gait planning and real-time obstacle avoidance.",
    year: "2024",
    tags: ["Robotics", "ROS 2", "Python", "CAD", "Embedded"],
    image: "/projects/quadruped-hero.jpg",
    featured: true,
    caseStudy: {
      problem:
        "Existing mobility aids are either bulky wheeled devices or expensive commercial quadrupeds with limited customization for assistive tasks like fetching objects or providing stability.",
      solution:
        "We built a custom quadruped from the ground up with modular 3D-printed legs, off-the-shelf actuators, and a ROS 2 stack for gait control and perception. The system supports multiple gaits (walk, trot, stand) and can be commanded via a simple interface for object retrieval and companion walking.",
      process: [
        "Requirements and gait research: studied existing quadrupeds and defined target payload, speed, and terrain.",
        "Mechanical design: leg kinematics (3 DoF per leg), motor selection, and chassis in Fusion 360; iterative 3D printing and testing.",
        "Firmware and control: STM32-based motor drivers, inverse kinematics, and gait state machine in C++; tuned via simulation (Gazebo) then on hardware.",
        "ROS 2 integration: perception (depth + IMU), path planning, and high-level behaviors in Python; RViz for visualization and debugging.",
        "User interface: tablet app for mode selection and waypoint commands; voice commands via Whisper for hands-free use.",
      ],
      techStack: [
        "ROS 2 Humble",
        "Python 3.10",
        "C++ (STM32 HAL)",
        "Fusion 360",
        "Gazebo / Ignition",
        "OpenCV",
      ],
      outcomes: [
        "Stable walk and trot on flat and slightly uneven surfaces.",
        "Object retrieval demo: robot navigates to target, orients, and returns to user.",
        "Modular design allows swapping legs or adding payload (e.g., tray) without full redesign.",
      ],
      images: ["/projects/quadruped-1.jpg", "/projects/quadruped-2.jpg", "/projects/quadruped-3.jpg"],
    },
  },
  {
    id: "2",
    slug: "obstacle-avoiding-robot-car",
    title: "Obstacle-Avoiding Robot Car",
    tagline: "Autonomous navigation with ultrasonic sensing and reactive control",
    description:
      "A small autonomous vehicle that maps its environment with ultrasonic sensors and avoids obstacles in real time using a reactive control strategy. Built for a robotics course final project.",
    year: "2024",
    tags: ["Arduino", "C++", "Electronics", "Control Systems"],
    image: "/projects/robot-car-hero.jpg",
    featured: true,
    caseStudy: {
      problem:
        "We needed a platform to implement and compare reactive vs. simple planning-based obstacle avoidance within tight time and budget constraints.",
      solution:
        "A differential-drive robot with an HC-SR04 ultrasonic sensor on a servo for scanning, Arduino Uno for low-level control, and a state machine that switches between forward motion and turn-until-clear behaviors based on sensor thresholds.",
      process: [
        "Hardware: chassis kit, two DC motors with encoders, L298N driver, ultrasonic sensor + servo, Arduino Uno; assembled and wired on a breadboard then transferred to perfboard.",
        "Firmware: PWM motor control, encoder reading for rough odometry, servo sweep with ultrasonic sampling every 10°; threshold-based logic for obstacle detection.",
        "Control: reactive state machine (drive forward → if distance < threshold then stop, turn in place until clear, then drive again); tuned thresholds and turn speed for reliable avoidance in a cluttered room.",
        "Optional: logged distance vs. angle to Serial and plotted in Python for simple “map” visualization.",
      ],
      techStack: [
        "Arduino (C++)",
        "HC-SR04 Ultrasonic",
        "SG90 Servo",
        "L298N Motor Driver",
        "Python (logging/plotting)",
      ],
      outcomes: [
        "Reliable avoidance of static obstacles at walking speed in indoor environments.",
        "Clear demonstration of reactive control tradeoffs (no global map, but simple and robust).",
        "Extensible design: same hardware used later for a line-follower variant.",
      ],
      images: ["/projects/car-1.jpg", "/projects/car-2.jpg"],
    },
  },
  {
    id: "3",
    slug: "robotic-arm-pick-place",
    title: "6-DoF Robotic Arm Pick & Place",
    tagline: "Computer vision–driven pick and place with inverse kinematics",
    description:
      "A desktop 6-DoF robotic arm that uses a camera to detect objects, computes inverse kinematics for reachable poses, and executes pick-and-place sequences. Developed for a manipulation course.",
    year: "2023",
    tags: ["Python", "OpenCV", "IK", "ROS"],
    image: "/projects/arm-hero.jpg",
    featured: false,
    caseStudy: {
      problem:
        "Teaching manipulation and inverse kinematics (IK) in a way that connects theory to a real robot with vision feedback.",
      solution:
        "We used a low-cost 6-DoF arm (e.g., Dobot or similar) with a USB camera. A Python pipeline does color-based object detection, estimates 3D position (assuming known height), runs IK via a library (e.g., PyKDL or custom), and sends joint commands to the arm to pick and place objects into bins.",
      process: [
        "Setup: mount camera with fixed height and calibrate (intrinsics + rough extrinsics to robot base).",
        "Vision: segment objects by color in OpenCV, compute 2D centroids, project to 3D using known table height.",
        "IK: use existing IK solver for the arm; validate poses in simulation before sending to hardware.",
        "Sequence: move to approach pose → open gripper → move to object → close gripper → lift → move to bin → open gripper; add simple error handling (e.g., no solution → skip or retry).",
      ],
      techStack: ["Python", "OpenCV", "ROS", "PyKDL", "MoveIt (optional)"],
      outcomes: [
        "Successful pick-and-place of colored blocks into designated bins with high repeatability.",
        "Students could change object color or bin positions and see the pipeline adapt.",
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
