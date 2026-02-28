'use client';

import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';
import { MapPin } from 'lucide-react';

interface ExperienceItem {
  position: string;
  location: string;
  briefDescription: string;
}

const experiences: ExperienceItem[] = [
  {
    position: 'Founding Software Engineer',
    location: 'New York, USA',
    briefDescription: 'Building innovative solutions from the ground up.',
  },
  {
    position: 'Software Engineer (Part-time)',
    location: 'Noida, India',
    briefDescription: 'Developed AI-powered real estate ecosystem with Next.js and modern stack.',
  },
  {
    position: 'Contract Software Engineer',
    location: 'Remote, Turkiye',
    briefDescription: 'Built FastAPI applications with OAuth and PDF generation capabilities.',
  },
  {
    position: 'Open-source Contributor',
    location: 'NextUI (YC S24)',
    briefDescription: 'Contributed to NextUI components and received personal offer from CEO.',
  },
  {
    position: 'SWE Intern',
    location: 'Noida',
    briefDescription: 'Engineered backend LMS serving 400+ users with secure authentication.',
  },
];

const TimelineItem: React.FC<{ experience: ExperienceItem; index: number }> = ({ experience, index }) => {
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
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex items-start gap-6 pb-8"
    >
      {/* Timeline dot */}
      <div className="relative flex-shrink-0 w-3 h-3 mt-1.5">
        <div className="w-3 h-3 rounded-full bg-blue-500 z-10">
          <div className="absolute -inset-1 rounded-full bg-blue-500/30 animate-pulse" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-gray-100">
          {experience.position}
        </h3>
        <div className="flex items-center gap-1 mt-1">
          <MapPin className="w-3 h-3 text-gray-500 dark:text-gray-400" />
          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            {experience.location}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100">
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1.5 top-0 bottom-8 w-0.5 bg-gradient-to-b from-blue-500/20 via-blue-500/50 to-blue-500/20" />

          {experiences.map((exp, index) => (
            <TimelineItem 
              key={index} 
              experience={exp} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
