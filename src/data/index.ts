import { Project, Service, SocialLink, NavLink } from '../types';

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

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/zvika-avneri',
    icon: 'linkedin'
  },
  {
    id: 2,
    platform: 'Twitter',
    url: 'https://twitter.com/zvika_avneri',
    icon: 'twitter'
  },
  {
    id: 3,
    platform: 'Email',
    url: 'mailto:contact@zvika.com',
    icon: 'email'
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