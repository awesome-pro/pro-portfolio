'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className="relative min-h-[98vh] flex items-center justify-center overflow-hidden bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"
      id="hero"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(59,130,246,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center mask-[radial-gradient(white,transparent_85%)] dark:opacity-20" />
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10 mt-10 md:mt-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:space-y-8 text-center lg:text-left pt-8 md:pt-0"
          >
            {/* Leadership Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium backdrop-blur-sm">
                Engineer & Enterpreneur
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Building the Future
                <span className="block text-blue-600 dark:text-blue-400">
                  One Solution at a Time
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Transforming ideas into enterprise-grade solutions with modern tech stacks.
              </motion.p>
            </div>

            {/* CTA Section */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                className="group bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 
                hover:to-blue-900 text-white px-6 md:px-8 py-4 md:py-6 backdrop-blur-sm rounded-full"
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <span className="flex items-center">
                  Let&apos;s Have a Talk
                  <motion.span
                    className="ml-2"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </span>
                <div
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 
                transition-opacity duration-300"
                />
              </Button>

              <Button
                variant="outline"
                className="group border-2 border-blue-600 dark:border-blue-400 hover:bg-blue-50 
                dark:hover:bg-blue-900/20 px-6 md:px-8 py-4 md:py-6 backdrop-blur-sm rounded-full"
                asChild
              >
                <Link
                  href="https://shorturl.abhinandan.one/resume?ref=abhinandanpro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Check My Resume
                  <motion.span
                    className="ml-2"
                    whileHover={{ rotate: 45 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image & Project Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative aspect-square max-w-sm md:max-w-md mx-auto">
              {/* Main Profile Image */}
              <div
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl 
                before:absolute before:inset-0 before:bg-blue-500/10 before:z-10 group transition-transform duration-300"
              >
                <Image
                  src="/p-7.jpg"
                  alt="Your Name"
                  width={500}
                  height={500}
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Background Elements */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
