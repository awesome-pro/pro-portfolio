'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub, FaLock } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

interface ProjectImage {
  url: string;
  alt: string;
}

interface Project {
  title: string;
  type: 'fullstack' | 'backend';
  description: string[];
  techStack: string[];
  images: ProjectImage[];
  githubLink: string;
  previewLink?: string;
  highlights?: string[];
  apiEndpoints?: string[];
  postmanLink?: string;
  lldLink?: string;
  deploymentLink?: string;
  isPrivate?: boolean;
}

const projects: Project[] = [
  {
    title: 'ShortUrl - Shorten URLs in Your way',
    type: 'fullstack',
    description: [
      'Built a URL Shortener powered by FastAPI, Redis, PostgreSQL, Google Cloud Run, Next.js and Docker.',
      'Automated deployment infrastructure using Docker and Google Cloud Run for automated CI/CD',
      'Implement enterprise-grade authentication using JWT and state management using Zustand',
      'Engineered leaderboard feature based on the number of redirections via the shortened URLs.'
    ],
    techStack: [
      'FastAPI',
      'Next.js',
      'Redis',
      'PostgreSQL',
      'Docker',
      'Google Cloud',
      'CI/CD',
      'hashing',
      'Zustand',
      'JWT'
    ],
    images: [
      { url: '/projects/url-1.png', alt: 'CRM Dashboard' },
      { url: '/projects/url-2.png', alt: 'Analytics View' },
      { url: '/projects/url-3.png', alt: 'Analytics View' },
    ],
    githubLink: 'https://github.com/awesome-pro/url-shortener-frontend',
    previewLink: 'http://shortenurl.abhinandan.pro/',
    highlights: ['Custom URL shortening', '50ms Average Response Time'],
  },
  {
    title: 'UPSCprep - UPSC Exam Preparation Platform',
    type: 'fullstack',
    description: [
      'Developed a comprehensive UPSC exam preparation platform using Next.js 15, Nest.js 11, Prisma, PostgreSQL, Redis, AWS.',
      'Automated deployment infrastructure using Docker, GitHub Actions for CICD, and Nginx for reverse proxy/load balancing',
      'Integrated Razorpay for automated payment processing, enabling seamless subscription payments.',
      'Implemented real-time notifications using the Firebase Cloud Messaging.'
    ],
    techStack: [
      'Next.js',
      'Nest.js',
      'Prisma',
      'PostgreSQL',
      'Redis',
      'AWS',
      'Docker',
      'CI/CD',
      'Firebase',
      'Razorpay',
      'Google Cloud Vision API',
      'XLSX',
      'Firebase Cloud Messaging',
    ],
    images: [
      { url: '/projects/upsc-0.webp', alt: 'CRM Dashboard' },
      { url: '/projects/upsc-1.webp', alt: 'Analytics View' },
      { url: '/projects/upsc-2.webp', alt: 'Analytics View' },
    ],
    githubLink: 'https://github.com/awesome-pro/upscprep-next-frontend',
    previewLink: 'https://upscprep.abhinandan.pro',
    highlights: ['99.9% Uptime', '50ms Average Response Time'],
  },
  {
    title: 'EasyMarketplace - The Simplified AWS Marketplace',
    type: 'fullstack',
    description: [
      'Developed a comprehensive AWS Marketplace using Next.js 15, Nest.js 11, Prisma, PostgreSQL, Redis, AWS.',
      'Automated deployment infrastructure using Docker, GitHub Actions for CICD, and Nginx for reverse proxy/load balancing',
      'Implemented real-time notifications using the Firebase Cloud Messaging.'

    ],
    techStack: [
      'Next.js',
      'Nest.js',
      'Prisma',
      'PostgreSQL',
      'Redis',
      'AWS',
      'Docker',
      'CI/CD',
      'Firebase',
      'Razorpay',
      'Google Cloud Vision API',
      'XLSX',
      'Firebase Cloud Messaging',
    ],
    images: [
      { url: '/projects/easy-2.webp', alt: 'CRM Dashboard' },
      { url: '/projects/easy-1.webp', alt: 'Analytics View' },
      { url: '/projects/easy-0.webp', alt: 'Analytics View' },
    ],
    githubLink: 'https://github.com/awesome-pro/easy-marketplace-frontend',
    previewLink: 'https://easymarketplace.abhinandan.pro',
    highlights: ['99.9% Uptime', '50ms Average Response Time'],
  },
  {
    title: 'myproposal.love - The AI Proposal Generator',
    type: 'fullstack',
    description: [
      'Designed and implemented an AI-powered romantic proposal generator',
      'Integrated Amazon SES & Resend for email notifications',
      'Built secure authentication system with NextAuth.js adding Google and Email authentication',
      'Implemented caching strategy reducing response time by 60%',
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'React',
      'PostgreSQL',
      'Prisma',
      'Redis',
      'AWS',
      'Stripe',
      'Docker',
      'CI/CD',
    ],
    images: [
      { url: '/projects/love-1.webp', alt: 'Landing Page' },
      { url: '/projects/love-2.webp', alt: 'Proposal View' },
    ],
    githubLink: 'https://github.com/awesome-pro/proposal',
    previewLink: 'https://myproposal.love',
    highlights: ['99.9% Uptime', '50ms Average Response Time',],
  },
  {
    title: 'Aarogya - The Healthcare Platform',
    type: 'backend',
    description: [
      'Designed and implemented an Asynchronous Appointment Scheduling System using BullMQ and Redis',
      'Architected a microservices-based scalable backend with PostgreSQL and Prisma',
      'Implemented real-time notifications system with WebSocket for instant updates',
      'Integrated Twilio for automated SMS and WhatsApp appointment reminders',
      'Built secure authentication system with JWT and role-based access control',
      'Implemented caching strategy reducing response time by 60%',
    ],
    techStack: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'Prisma',
      'Redis',
      'BullMQ',
      'WebSocket',
      'Twilio',
      'JWT',
    ],
    images: [{ url: '/projects/aarogya-arch.webp', alt: 'Aarogya Architecture Diagram' }],
    githubLink: 'https://github.com/awesome-pro/aarogya',
    lldLink: 'https://app.eraser.io/workspace/MHpqxq6BCLBfAfOeUnav?origin=share',
    apiEndpoints: [
      'GET /api/appointments',
      'POST /api/appointments/schedule',
      'PUT /api/appointments/:id',
      'GET /api/doctors/availability',
      'POST /api/notifications/subscribe',
      'GET /api/patients/:id/history',
    ],
    highlights: ['99.9% Uptime', '60% Faster Response', '50% Cost Reduction'],
  },
  {
    title: 'ImageToSketch - The Image to Sketch Converter',
    type: 'fullstack',
    description: [
      'Developed a Image to Sketch Converter using Next.js, FastAPI, OpenCV, Numpy, and AWS S3',
      'Integrated boto3 for AWS S3 AES-256 encryption secured file upload and download',
    ],
    techStack: [
      'Next.js',
      'FastAPI',
      'OpenCV',
      'Numpy',
      'AWS S3',
      'boto3',
      'Docker',
      'CI/CD',
    ],
    images: [
      { url: '/projects/image-1.webp', alt: 'Image to Sketch Converter' },
      { url: '/projects/image-2.webp', alt: 'Image to Sketch Converter' },
    ],
    githubLink: 'https://github.com/awesome-pro/imagetosketch-frontend',
    previewLink: 'https://imagetosketch.abhinandan.pro',
    highlights: [ ],
  },

  {
    title: 'SuperFastAPI - Ship fast with FastAPI',
    type: 'fullstack',
    description: [
      'Developed a FastAPI framework for FastAPI to ship fast with FastAPI',
      'Implemented SQLAlchemy for database operations, ensuring 99.9% uptime with Error-handling mechanisms',
      'Utitlized Celery for background tasks, ensuring 99.9% uptime with Error-handling mechanisms',
      'Setup CICD pipeline using GitHub Actions & Docker for containerization'
      
    ],
    techStack: [
      'Next.js',
      'FastAPI',
      'SQLAlchemy',
      'Celery',
    ],
    images: [
      { url: '/projects/super-0.webp', alt: 'SuperFastAPI Dashboard' },
    ],
    githubLink: 'https://github.com/awesome-pro/superfastapi-frontend',
    previewLink: 'https://superfastapi.abhinandan.pro',
    highlights: ['99.9% Uptime', '50ms Average Response Time', '10k+ Daily Active Users'],
  },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState<'fullstack' | 'backend'>('fullstack');

  const filteredProjects = projects.filter(project => !filter || project.type === filter);

  return (
    <section
      className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Showcasing production-ready applications and solutions
          </p>
        </motion.div>

        {/* Animated Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {['fullstack', 'backend'].map(type => (
            <motion.button
              key={type}
              onClick={() => setFilter(type as typeof filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all relative ${
                filter === type
                  ? 'text-white'
                  : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
              } ${filter === type ? 'bg-gradient-to-r from-blue-600 to-blue-400' : ''}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {project.type === 'fullstack' && <FullStackCard project={project} />}
                {project.type === 'backend' && <BackendCard project={project} />}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const FullStackCard: React.FC<{ project: Project }> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => setCurrentImageIndex(prev => (prev + 1) % project.images.length);
  const prevImage = () =>
    setCurrentImageIndex(prev => (prev - 1 + project.images.length) % project.images.length);

  return (
    <Card className="overflow-hidden group transform transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
      <div className="relative h-80">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <Image
              src={project.images[currentImageIndex].url}
              alt={project.images[currentImageIndex].alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <div className="flex gap-2">
            {project.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Carousel Navigation Buttons */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 dark:from-blue-900 dark:to-blue-800 dark:text-blue-200"
              >
                {tech}
              </Badge>
            ))}
          </div>
          <ul className="space-y-2">
            {project.description.map((item, i) => (
              <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                <span className="mr-2 text-blue-500">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between p-6 bg-gray-50 dark:bg-gray-700">
        {project.githubLink &&
          (project.isPrivate ? (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 text-gray-700 shadow hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                  <FaGithub className="h-5 w-5" />
                  <span>Source Code</span>
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent className="sm:max-w-[450px] rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900">
                <AlertDialogHeader className="text-center">
                  <div className="flex justify-center mb-2">
                    <FaLock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <AlertDialogTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    Private Repository
                  </AlertDialogTitle>
                  <AlertDialogDescription className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    This project is currently in{' '}
                    <span className="font-semibold text-primary-800 dark:text-gray-200">
                      production
                    </span>{' '}
                    and generating{' '}
                    <span className="font-semibold text-gray-800 dark:text-gray-200">revenue</span>.
                    Hence, the source code is kept private for{' '}
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      business reasons.
                    </span>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="mt-4 flex justify-center gap-3">
                  <AlertDialogCancel asChild>
                    <button className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 shadow hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700">
                      I understand
                    </button>
                  </AlertDialogCancel>
                  {project.previewLink && (
                    <AlertDialogAction asChild>
                      <Link
                        href={project.previewLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                      >
                        View Live Demo
                      </Link>
                    </AlertDialogAction>
                  )}
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          ) : (
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <FaGithub className="h-5 w-5" />
              <span>Source Code</span>
            </Link>
          ))}
        {project.previewLink && (
          <Link
            href={project.previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <ExternalLink className="h-5 w-5" />
            <span>Live Preview</span>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};


const BackendCard: React.FC<{ project: Project }> = ({ project }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'api' | 'metrics'>('overview');

  return (
    <Card className="overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300">
      <div className="p-6 space-y-6">
        {/* Header Section */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {project.title}
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-wrap gap-3">
          {project.githubLink && (
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
            >
              <FaGithub className="h-4 w-4" />
              <span>Source Code</span>
            </Link>
          )}
          {project.deploymentLink && (
            <Link
              href={project.deploymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 hover:bg-green-100 dark:bg-green-900/30 dark:hover:bg-green-900/50 text-green-700 dark:text-green-300 transition-colors text-sm font-medium"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Live API</span>
            </Link>
          )}
          {project.postmanLink && (
            <Link
              href={project.postmanLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 hover:bg-orange-100 dark:bg-orange-900/30 dark:hover:bg-orange-900/50 text-orange-700 dark:text-orange-300 transition-colors text-sm font-medium"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.527 2.987c-4.61-.405-8.583 2.865-8.967 7.467-.383 4.615 2.97 8.669 7.573 9.074 4.61.405 8.583-2.865 8.967-7.467.383-4.615-2.97-8.669-7.573-9.074zm.316 13.598c-2.415.212-4.378-1.345-4.586-3.495-.208-2.15 1.575-4.062 3.99-4.274 2.415-.212 4.378 1.345 4.586 3.495.208 2.15-1.575 4.062-3.99 4.274z" />
              </svg>
              <span>Postman</span>
            </Link>
          )}
          {project.lldLink && (
            <Link
              href={project.lldLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 hover:bg-purple-100 dark:bg-purple-900/30 dark:hover:bg-purple-900/50 text-purple-700 dark:text-purple-300 transition-colors text-sm font-medium"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <span>System Design</span>
            </Link>
          )}
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-4 border-b border-gray-200 dark:border-gray-700">
          {(['overview', 'api', 'metrics'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[200px]">
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              {project.description.map((desc, i) => (
                <p key={i} className="text-gray-600 dark:text-gray-300">
                  {desc}
                </p>
              ))}
            </motion.div>
          )}

          {activeTab === 'api' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg divide-y divide-gray-200 dark:divide-gray-700">
                {project.apiEndpoints?.map((endpoint, i) => (
                  <div
                    key={i}
                    className="p-3 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <code className="text-sm font-mono text-blue-600 dark:text-blue-400">
                      {endpoint}
                    </code>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'metrics' && project.highlights && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {project.highlights.map((highlight, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/30 p-4 rounded-lg text-center"
                >
                  <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
                    {highlight}
                  </p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectsSection;
