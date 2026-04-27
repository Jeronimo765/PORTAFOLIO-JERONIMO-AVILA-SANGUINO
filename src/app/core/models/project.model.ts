export interface Project {
  id: number;
  title: string;
  description: string;
  tags: ProjectTag[];
  githubUrl: string;
  liveUrl: string;
  gradient: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface ProjectTag {
  label: string;
  type: 'frontend' | 'backend' | 'database' | 'api';
}
