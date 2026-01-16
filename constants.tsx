
import React from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter,
  Mail,
  MessageCircle
} from 'lucide-react';
import { Project, Skill, Service, Testimonial } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { name: 'GitHub', icon: <Github size={20} />, href: 'https://github.com/bharatsingh' },
  { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/bharatsingh' },
  { name: 'Twitter', icon: <Twitter size={20} />, href: 'https://twitter.com/bharatsingh' },
];

export const CONTACT_INFO = {
  email: 'noreply@authorize.qzz.io',
  whatsapp: 'https://wa.me/9779826048177?text=Hello',
  location: 'Dubai, UAE / Remote',
  phone: '+971 50 123 4567',
  gmailIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/1280px-Gmail_icon_%282020%29.svg.png',
  whatsappIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/662px-WhatsApp_icon.png'
};

export const SKILLS: Skill[] = [
  { name: 'React/Next.js', level: 95, icon: 'React' },
  { name: 'TypeScript', level: 90, icon: 'TS' },
  { name: 'Node.js/Go', level: 85, icon: 'Node' },
  { name: 'Cloud Native', level: 80, icon: 'AWS' },
  { name: 'AI/LLM Integration', level: 88, icon: 'AI' },
  { name: 'System Design', level: 85, icon: 'System' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Aura Intelligence',
    description: 'A Next-gen AI dashboard utilizing Gemini 3.0 for predictive analytics and real-time data visualization.',
    tags: ['Next.js', 'TypeScript', 'Gemini API', 'D3.js'],
    image: 'https://picsum.photos/seed/aura/800/500',
    link: '#',
    github: '#'
  },
  {
    id: '2',
    title: 'Etherum Flow',
    description: 'Decentralized finance management platform with zero-knowledge proof security layers.',
    tags: ['React', 'Web3', 'Solidity', 'Tailwind'],
    image: 'https://picsum.photos/seed/crypto/800/500',
    link: '#',
    github: '#'
  },
  {
    id: '3',
    title: 'Quantum CMS',
    description: 'Headless CMS with built-in edge caching and visual drag-and-drop editor.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    image: 'https://picsum.photos/seed/cms/800/500',
    link: '#',
    github: '#'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Full-Stack Development',
    description: 'Building scalable, high-performance web applications using modern stacks.',
    icon: 'Layout'
  },
  {
    title: 'AI Integration',
    description: 'Seamlessly embedding LLMs and AI workflows into existing business processes.',
    icon: 'Cpu'
  },
  {
    title: 'Cloud Architecture',
    description: 'Designing resilient microservices and serverless infrastructures on AWS/GCP.',
    icon: 'Cloud'
  },
  {
    title: 'UI/UX Engineering',
    description: 'Crafting pixel-perfect, accessible, and high-conversion user interfaces.',
    icon: 'Layers'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'Nexus Labs',
    content: 'Bharat is a visionary developer. His ability to bridge complex backend systems with elegant UI is unparalleled.',
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    name: 'Marcus Thorne',
    role: 'Product Lead',
    company: 'Velocity AI',
    content: 'Working with Bharat transformed our product trajectory. His expertise in AI integration saved us months of R&D.',
    avatar: 'https://i.pravatar.cc/150?u=marcus'
  }
];
