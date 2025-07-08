import { Project, Service, SocialLink, NavLink } from '../types';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export const navLinks: NavLink[] = [
  { id: 1, title: 'ראשי', href: '#home' },
  { id: 2, title: 'שירותים', href: '#services' },
  { id: 3, title: 'פרויקטים', href: '#projects' },
  { id: 4, title: 'צור קשר', href: '#contact' },
];

export const services: Service[] = [
  {
    id: 1,
    title: 'ייעוץ אסטרטגי',
    description: 'ליווי חברות וסטארטאפים בתהליכי צמיחה ופיתוח עסקי',
    icon: 'strategy'
  },
  {
    id: 2,
    title: 'פיתוח מוצר',
    description: 'הובלת תהליכי פיתוח מוצר מרעיון ועד השקה',
    icon: 'product'
  },
  {
    id: 3,
    title: 'גיוס משקיעים',
    description: 'סיוע בגיוס הון וחיבור למשקיעים פוטנציאליים',
    icon: 'investment'
  }
];

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: IconType;
}

export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/your-profile',
    icon: FaLinkedin
  },
  {
    id: 'github',
    platform: 'GitHub',
    url: 'https://github.com/your-username',
    icon: FaGithub
  },
  {
    id: 'email',
    platform: 'Email',
    url: 'mailto:your.email@example.com',
    icon: FaEnvelope
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Project 1',
    description: 'תיאור הפרויקט הראשון',
    image: '/images/project1.jpg',
    category: 'startup',
    link: 'https://project1.com'
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'תיאור הפרויקט השני',
    image: '/images/project2.jpg',
    category: 'consulting'
  }
]; 