/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Layout, Server, Database, Cloud, Brain } from 'lucide-react';

// Add your tech icons/images to the public/skills directory
const skillCategories = [
  {
    title: 'Frontend Architecture',
    icon: <Layout className="w-6 h-6" />,
    skills: [
      {
        name: 'Next.js',
        level: 'Expert',
        experience: '1.5 years',
        details:
          'Streaming SSR, React Server Actions, Edge Runtime, caching strategies.',
        projects: 'Large-scale E-commerce, Enterprise CRM',
        icon: '/skills/nextjs.svg',
      },
      {
        name: 'React.js',
        level: 'Expert',
        experience: '1.5 years',
        details:
          'Advanced state management patterns, Custom Hooks architecture, Render optimization, Suspense patterns, concurrent features. Deep expertise in performance profiling and bundle optimization.',
        projects: 'Large-scale E-commerce, Enterprise CRM',
        icon: '/skills/react.svg',
      },
    ],
  },
  {
    title: 'Backend Systems',
    icon: <Server className="w-6 h-6" />,
    skills: [
      {
        name: 'Nest.js',
        level: 'Advanced',
        experience: '1.5 years',
        details:
          'Runtime schedulers, Concurrency patterns, High-performance networking,  CQRS, Event Sourcing',
        projects: 'Microservices Architecture, Trading Systems',
        icon: '/skills/nest.png',
      },
      {
        name: 'FastAPI',
        level: 'Expert',
        experience: '1.5 years',
        details:
          'Async IO optimization, WebSocket implementations, Custom middleware architecture, OpenAPI integration, Advanced dependency injection patterns, High-performance data streaming.',
        projects: 'Real-time Analytics, MLOps, MLflow',
        icon: '/skills/fastapi.svg',
      },
      
    ],
  },
  {
    title: 'Data & Infrastructure',
    icon: <Database className="w-6 h-6" />,
    skills: [
      {
        name: 'Database Design',
        level: 'Intermediate',
        experience: '1+ years',
        details:
          'Query optimization, Partitioning strategies, Replication architectures, ACID compliance patterns, Sharding.',
        projects: 'Big Data Analytics',
        icon: '/skills/postgresql.svg',
      },
      {
        name: 'MongoDB',
        level: 'Advanced',
        experience: '1+ years',
        details: 'Schema design, aggregation pipelines',
        projects: 'NoSQL applications',
        icon: '/skills/mongodb.svg',
      },
      {
        name: 'Redis',
        level: 'Intermediate',
        experience: '1 year',
        details: 'Caching, distributed systems',
        projects: 'Cache systems',
        icon: '/skills/redis.svg',
      },
    ],
  },
  {
    title: 'DevOps & Infrastructure',
    icon: <Cloud className="w-6 h-6" />,
    skills: [
      {
        name: 'Docker',
        level: 'Intermediate',
        experience: '1 year',
        details: 'Container orchestration, multi-stage builds',
        projects: 'Microservices deployment',
        icon: '/skills/docker.svg',
      },
      {
        name: 'Google Cloud',
        level: 'Intermediate',
        experience: '1 year',
        details: 'Compute Engine, Cloud SQL, Cloud Storage',
        projects: 'CI/CD Platforms, Cloud Infrastructure, Container orchestration',
        icon: '/skills/gcloud.png',
      },
      {
        name: 'AWS',
        level: 'Advanced',
        experience: '1 year',
        details: 'EC2, S3, Lambda, ECS deployment',
        projects: 'Cloud infrastructure',
        icon: '/skills/aws.svg',
      },
    ],
  },
  {
    title: 'AI & Machine Learning',
    icon: <Brain className="w-6 h-6" />,
    skills: [
      {
        name: 'LangChain',
        level: 'Expert',
        experience: '1 year',
        details: 'LangChain, LangGraph, LangChain-Community',
        projects: 'Machine Learning',
        icon: '/skills/langchain.png',
      },
      {
        name: 'Hugging Face',
        level: 'Expert',
        experience: '1 year',
        details: 'Transformers, Tokenizers, Pipelines',
        projects: 'Machine Learning',
        icon: '/skills/hugging.png',
      },
      {
        name: 'Vector Database',
        level: 'Expert',
        experience: '1 year',
        details: 'Pinecone, pgvector',
        projects: 'Machine Learning',
        icon: '/skills/pinecone.webp',
      }
    ],
  }
];

const SkillCard = ({ skill }: { skill: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      <div className="p-6 rounded-lg bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-800 dark:via-gray-700 dark:to-gray-700 hover:from-primary/10 hover:to-primary/20 transition-all duration-300 shadow-md">
        <div className="flex items-start gap-6">
          {/* Tech Icon/Image */}
          <div className="relative w-14 h-14 flex-shrink-0">
            <Image
              src={skill.icon}
              alt={skill.name}
              fill
              sizes="(max-width: 768px) 56px, 56px"
              className="object-contain filter dark:invert-[.85]"
            />
          </div>

          <div className="flex-1">
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200">
                {skill.name}
              </h4>
      
            </div>

              <p className='text-sm text-gray-700 dark:text-gray-300'>
              {skill.details}
              </p>
  

            <div className="flex flex-wrap gap-2 mt-2">
             
              {skill.projects.split(', ').map((project: string) => (
                <Badge
                  key={project}
                  variant="secondary"
                  className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200"
                >
                  {project}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section className="py-20 relative" id="skills">
      {/* Abstract gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(221.2,83.2%,53.3%,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,hsl(221.2,83.2%,53.3%,0.1)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
            Tech Expertise
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Specialized in modern web technologies with a focus on scalable, enterprise-grade
            applications and CRM systems development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white via-white/95 to-white/90 dark:from-gray-800 dark:via-gray-800/95 dark:to-gray-800/90 hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

                <div className="relative p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map(skill => (
                      <SkillCard key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
