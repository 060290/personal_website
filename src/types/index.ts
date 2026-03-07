export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: string;
  tags: string[];
  image: string;
  featured: boolean;
  caseStudy: {
    problem: string;
    solution: string;
    process: string[];
    techStack: string[];
    outcomes: string[];
    images?: string[];
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  tags: string[];
  image?: string;
}
