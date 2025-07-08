export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  link?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  id: number;
  platform: string;
  url: string;
  icon: string;
}

export interface NavLink {
  id: number;
  title: string;
  href: string;
} 