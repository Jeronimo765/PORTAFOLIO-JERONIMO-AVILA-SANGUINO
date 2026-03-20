export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
  color: string;
}

export interface TechPill {
  name: string;
  color: string;
}

export interface FloatingBadge {
  label: string;
  position: 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left' | 'top' | 'bottom';
}