'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, ChevronLeft, ChevronRight, ZapIcon } from 'lucide-react';
import { FaDatabase, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

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
  deploymentLink?: string;
  backendLink?: string;
  apiEndPointLink?: string
}

const projects: Project[] = [
  {
    title: 'ShortUrl - Shorten URLs in Your way',
    type: 'fullstack',
    description: [
      'Engineered a high-throughput URL shortener on Google Cloud Run, achieving a P99 latency of <200ms for redirections by leveraging Redis.',
      'Automated deployment infrastructure using Docker and Google Cloud Run for automated CI/CD',
      'Secured endpoints using JWTs with short-lived access tokens and refresh tokens, providing a seamless and secure UX via Google OAuth.'
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
      'JWT'
    ],
    images: [
      { url: '/projects/url-1.png', alt: 'CRM Dashboard' },
      { url: '/projects/url-2.png', alt: 'Analytics View' },
      { url: '/projects/url-3.png', alt: 'Analytics View' },
    ],
    githubLink: 'https://github.com/awesome-pro/url-shortener-frontend',
    backendLink: 'https://github.com/awesome-pro/url-shortener-backend',
    apiEndPointLink: 'https://shorturl.abhinandan.pro/docs',
    previewLink: 'https://shortenurl.abhinandan.pro',
    highlights: ['Custom URL shortening', '50ms Average Response Time'],
  },
  {
    title: 'UPSCprep - UPSC Exam Preparation Platform',
    type: 'fullstack',
    description: [
      'Developed a full-featured SaaS platform for UPSC aspirants, including features like mock tests, performance analytics, and question banks.',
      'Integrated Razorpay and marketised the app in the local educational market as a SaaS product, generating ~$300 in revenue.',
    ],
    techStack: [
      'Next.js',
      'Nest.js',
      'Prisma',
      'PostgreSQL',
      'Redis',
      'Docker',
      'CI/CD',
      'Razorpay',
      'Google Cloud',
    ],
    images: [
      { url: '/projects/upsc-0.webp', alt: 'CRM Dashboard' },
      { url: '/projects/upsc-1.webp', alt: 'Analytics View' },
      { url: '/projects/upsc-2.webp', alt: 'Analytics View' },
    ],
    githubLink: 'https://github.com/awesome-pro/upscprep-next-frontend',
    backendLink: 'https://github.com/awesome-pro/upscprep-next-backend',
    apiEndPointLink: 'https://prepbackend.abhinandan.pro/api/docs',
    previewLink: 'https://upscprep.abhinandan.pro',
    highlights: ['99.9% Uptime', '50ms Average Response Time'],
  },
  {
    title: 'EasyMarketplace - The Simplified AWS Marketplace',
    type: 'fullstack',
    description: [
      'Addressed the complexity of the AWS Marketplace by building a streamlined management tool, reducing the time to manage listings for ISVs',
      'Achieved early traction with 50+ unique user sign-ups and generated 20+ resale authorisations, validating product-market fit.'
    ],
    techStack: [
      'Next.js',
      'Nest.js',
      'PostgreSQL',
      'AWS Marketplace',
      'RBAC'
    ],
    images: [
      { url: '/projects/easy-2.webp', alt: 'CRM Dashboard' },
      { url: '/projects/easy-1.webp', alt: 'Analytics View' },
      { url: '/projects/easy-0.webp', alt: 'Analytics View' },
    ],
    githubLink: 'https://github.com/awesome-pro/easy-marketplace-frontend',
    backendLink: 'https://github.com/awesome-pro/easy-marketplace-backend',
    apiEndPointLink: 'https://easybackend.abhinandan.pro/api/docs',
    previewLink: 'https://easymarketplace.abhinandan.pro',
    highlights: ['99.9% Uptime', '50ms Average Response Time'],
  },
  {
    title: 'myproposal.love - The AI Proposal Generator',
    type: 'fullstack',
    description: [
      'Built a robust, multi-channel delivery pipeline using AWS SES for email and Twilio for WhatsApp, achieving a >98% delivery success rate.',
      'Achieved early traction with 400+ unique user sign-ups and generated 100+ personalised proposals, validating product-market fit.'
    ],
    techStack: [
      'Next.js',
      'PostgreSQL',
      'Resend',
      'OpenAI SDK',
      'Twilio'
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
    title: 'ImageToSketch - The Image to Sketch Converter',
    type: 'fullstack',
    description: [
      'Developed a Image to Sketch Converter using Next.js, FastAPI, OpenCV, Numpy, and AWS S3',
      'Integrated boto3 for AWS S3 AES-256 encryption secured file upload and download',
      'Enginnerred the BackgroudTasks from FastAPI for image to sketch conversion to process the images in the background',
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
    githubLink: 'https://github.com/awesome-pro/imagetosketch-next-frontend',
    backendLink: 'https://github.com/awesome-pro/imagetosketch-fastapi-backend',
    apiEndPointLink: 'https://sketchbackend.abhinandan.pro/docs',
    previewLink: 'https://imagetosketch.abhinandan.pro',
    highlights: [ ],
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
      <div className="relative h-52 lg:h-80">
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
              sizes="(max-width: 668px) 100vw, (max-width: 1200px) 40vw, 33vw"
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h3 className="text-2xl font-bold group-hover:hidden dark:text-white text-slate-800 mb-2">{project.title}</h3>
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
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-20 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"
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

      <CardFooter className="flex flex-col gap-3 md:flex-row md:justify-between  bg-gray-50 dark:bg-gray-700 p-4 items-start md:items-center">
        {project.githubLink &&           
            <Link
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <FaGithub className="h-5 w-5" />
              <span>Frontend Repository</span>
            </Link>
          }
           
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
      <CardFooter className="flex flex-col gap-3 md:flex-row md:justify-between  bg-gray-50 dark:bg-gray-700 p-3 items-start md:items-center">
        {project.backendLink &&           
            <Link
              href={project.backendLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              <FaDatabase className="h-5 w-5" />
              <span>Backend Repository</span>
            </Link>
          }
           
        {project.apiEndPointLink && (
          <Link
            href={project.apiEndPointLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <ZapIcon className="h-5 w-5" />
            <span>Swagger API Endpoints</span>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectsSection;
