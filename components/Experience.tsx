'use client';

import React, { useRef, useEffect, useMemo } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
  position: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
  images: string[];
  proofLink?: string;
}

const experiences: ExperienceItem[] = [
  {
    position: 'Software Engineer (Part-time)',
    company: 'Cynos Nexus',
    period: 'Jan 2025 – July 2025',
    location: 'Noida, India',
    description: [
      'Collaborated to develop core features of an AI-powered real estate ecosystem using Next.js, Nest.js, Prisma, GraphQL & Google Cloud',
      'As part of a 4-person team, developed core features that helped acquire 20 clients in 2 months, contributing to ₹100K in new MRR.',
      'Partnered to implement the AI knowledge base service, using FastAPI & Langchain.',
      'Fortified with enterprise-grade RBAC authentication using JWT and HTTP-only cookies.',
      'Automated deployment infrastructure using Docker, GitHub Actions for CI/CD, and Nginx for reverse proxy/load balancing.',
      'Implemented Google Cloud Vision API, XLSX & BullMQ to help users seed their client database in the app by scanning their contact diaries with their smartphone camera or using the Microsoft Excel import.',
      'Integrated Razorpay for automated payment processing, achieving a high (>95%) transaction success rate.',
      'Implemented real-time notifications using GraphQL subscriptions (WebSockets), PubSub(Redis) & Firebase Cloud Messaging.',
      'Engineered secure AWS S3 file uploads using multi-part uploads to reliably handle large files (up to 5GB), ensuring data integrity.',
      'Integrated AWS SES and BullMQ for transactional emails and targeted marketing campaigns, improving delivery rates by 15%.',
    ],
    skills: [
      'Next.js',
      'Nest.js',
      'Prisma',
      'PostgreSQL',
      'Apollo GraphQL',
      'Redis',
      'Google Cloud',
      'AWS',
      'FastAPI',
      'JWT',
      'Docker',
      'GitHub Actions',
      'CI/CD',
      'Nginx',
      'BullMQ',
      'Razorpay',
      'WebSockets',
      'PubSub',
      'Firebase Cloud Messaging',
    ],
    images: ['/cynos.png'],
  },
  {
    position: 'Contract Software Engineer',
    company: 'Caresept',
    period: 'Sept 2024 – Dec 2024',
    location: 'Remote, Turkiye',
    description: [
      'Collaborated with cross-functional teams to integrate OAuth in FastAPI, improving user onboarding by 20%.',
      'Engineered a high-performance PDF generator using WeasyPrint, converting the dynamic JSON reports to high-quality PDFs.',
      'Optimised data processing via bulk CSV upload & processing using Celery worker, reducing processing time by 40%.',
      'Established a CI/CD pipeline with GitHub Actions and Docker on an AWS EC2 machine.',
      'Collaborated to build a LangChain and pgvector knowledge base, improving ML model query accuracy by 15%.',
      'Executed strategic SEO optimisations like JSON-LD schema markup data, Open Graph tags, and dynamic meta tags.'
    ],
    skills: [
      'FastAPI',
      'OAuth',
      'WeasyPrint',
      'Celery',
      'CSV processing',
      'GitHub Actions',
      'Docker',
      'AWS EC2',
      'LangChain',
      'pgvector'
    ],
    images: ['/caresept.webp'],
  },
  {
    position: 'Open-source Contributor',
    company: 'NextUI',
    period: 'June 2024 – Aug 2024',
    location: 'Y Combinator S24 start-up',
    description: [
      'Achieved a personal offer from the CEO to join NextUI after making open-source contributions.',
      'User Experience Enhancement: Resolved 10+ bugs in essential components like Calendar, Table, and Pagination, leading to direct improvement of the product\'s stability and usability.',
      'Delivered 7+ feature enhancements that improved component flexibility and extensibility of enterprise-grade reusable UI components.'
    ],
    skills: [
      'React',
      'TypeScript',
      'Next.js',
      'React-Aria',
      'Storybook',
      'Jest',
      'React Testing Library'
    ],
    images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
    proofLink: '/nextui',
  },
  {
    position: 'SWE Intern',
    company: 'SkilledUp',
    period: 'Feb 2024 – May 2024',
    location: 'Noida',
    description: [
      'Engineered the backend application of the enterprise Learning Management System serving 400+ users.',
      'Developed JWT and OAuth 2.0 authentication, securing 400+ user accounts with almost zero breaches.',
      'Developed a backend service based on MySQL and Django Rest Framework(DRF), handling ~4000 daily queries.'
    ],
    skills: [
      'Django Rest Framework',
      'MySQL',
      'JWT',
      'OAuth 2.0',
      'Python',
      'Backend Development'
    ],
    images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
  },
];

const Experience: React.FC = () => {
  // Extract all unique technical skills across all experiences
  const allTechnicalSkills = useMemo(() => {
    const skillsSet = new Set<string>();
    experiences.forEach(exp => {
      exp.skills.forEach(skill => skillsSet.add(skill));
    });
    return Array.from(skillsSet);
  }, []);

  return (
    <section
      id="experience"
      className="py-16 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:text-left text-center mb-16 max-w-2xl"
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
            Professional Experiences
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Specialized in development of ML powered applications.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-500 to-blue-500/0 hidden lg:block" />

          {experiences.map((exp, index) => (
            <TimelineItem 
              key={index} 
              experience={exp} 
              index={index} 
              allTechnicalSkills={allTechnicalSkills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItem: React.FC<{ 
  experience: ExperienceItem; 
  index: number;
  allTechnicalSkills: string[];
}> = ({
  experience,
  index,
  allTechnicalSkills,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="mb-12 relative pl-8 lg:pl-12"
    >
      {/* Timeline dot */}
      <div className="absolute -left-[5px] top-0 lg:top-8 w-[10px] h-[10px] rounded-full bg-blue-500 z-10">
        <div className="absolute -inset-2 rounded-full bg-blue-500/20 animate-pulse" />
      </div>

      <Card className="transform hover:scale-[1.02] transition-all duration-300 border dark:border-gray-700 lg:max-w-3xl hover:shadow-xl dark:hover:shadow-blue-500/10 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400">
               {experience.position}
              </CardTitle>
              <CardDescription className="text-lg">
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  {experience.company}
                </span>
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {experience.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {experience.location}
                    </span>
                  </div>
                </div>
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-200">
                Key Achievements:
              </h4>
              <ul className="space-y-2">
                {experience.description.map((item, i) => {
                  // Enhanced regex patterns for different categories
                  const metrics = item.replace(
                    /(\d+(?:\.\d+)?[%+]?|\$\d+(?:\.\d+)?[MK]?\+?|\d+,\d+\+?)/g,
                    '<span class="font-bold text-blue-600 dark:text-blue-400">$1</span>'
                  );

                  // Highlight technical skills using ALL technical skills from all experiences
                  const technicalTerms = allTechnicalSkills.join('|');
                  const withTechHighlights = metrics.replace(
                    new RegExp(`(${technicalTerms})`, 'gi'),
                    '<span class="font-medium text-emerald-600 dark:text-emerald-400">$1</span>'
                  );

                  // Highlight impact keywords and action verbs
                  const impactKeywords = [
                    'Collaborated',
                    'Executed',
                    'Integrated',
                    'Maximized',
                    'Optimised',
                    'Containerized',
                    'Architected',
                    'Engineered',
                    'Spearheaded',
                    'Pioneered',
                    'Implemented',
                    'Optimized',
                    'Revolutionized',
                    'Innovated',
                    'Championed',
                   
                    'Orchestrated',
                    'Developed',
                    'Designed',
                    'Created',
                    'Delivered',
                    'Achieved',
                    'Improved',
                    'Enhanced',
                    'Reduced',
                    'Increased',
                    'Streamlined',
                    'Automated',
                    'Secured',
                    'Resolved',
                    'Contributed',
                  ].join('|');

                  const finalText = withTechHighlights.replace(
                    new RegExp(`(${impactKeywords})`, 'gi'),
                    '<span class="font-semibold text-purple-600 dark:text-purple-400">$1</span>'
                  );

                  return (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start group"
                    >
                      <span className="mr-2 text-blue-500 transform group-hover:scale-125 transition-transform">
                        •
                      </span>
                      <span
                        className="text-gray-700 dark:text-gray-300"
                        dangerouslySetInnerHTML={{ __html: finalText }}
                      />
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};


export default Experience;
