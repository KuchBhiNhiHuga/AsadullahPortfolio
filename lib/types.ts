export interface NavLink {
  label: string;
  href: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  url: string;
  tag: string;
  description: string;
  accent: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  org: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}

export interface StatItem {
  value: string;
  label: string;
}
