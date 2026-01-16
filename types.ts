
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface TechInsight {
  title: string;
  snippet: string;
  sourceUrl: string;
}
