import { Project, Service, SocialLink, NavLink } from '../types';
import { FaLinkedin, FaGithub, FaEnvelope, FaLightbulb, FaChartLine, FaUsers } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export interface NavLink {
  id: number;
  title: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { id: 1, title: 'ראשי', href: '#home' },
  { id: 2, title: 'שירותים', href: '#services' },
  { id: 3, title: 'פרויקטים', href: '#projects' },
  { id: 4, title: 'צור קשר', href: '#contact' }
];

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: IconType;
}

export const services: Service[] = [
  {
    id: 'strategy',
    title: 'ייעוץ אסטרטגי',
    description: 'פיתוח אסטרטגיות צמיחה והתאמת מודלים עסקיים לשוק המשתנה',
    icon: FaChartLine
  },
  {
    id: 'startup',
    title: 'ליווי סטארטאפים',
    description: 'הנחייה וליווי מקצועי לסטארטאפים בשלבים שונים של התפתחות',
    icon: FaLightbulb
  },
  {
    id: 'management',
    title: 'פיתוח מנהלים',
    description: 'הכשרה והדרכת מנהלים לניהול אפקטיבי ומנהיגות משפיעה',
    icon: FaUsers
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