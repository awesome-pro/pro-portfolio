'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section
      className="relative min-h-[98vh] flex items-center justify-center overflow-hidden bg-linear-to-b from-white to-slate-100 dark:from-gray-900 dark:to-gray-950"
      id="hero"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(59,130,246,0.1),transparent)]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center mask-[radial-gradient(white,transparent_85%)] dark:opacity-20" />
      </div>

      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10 mt-10 md:mt-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div
            className="space-y-6 md:space-y-8 text-center lg:text-left pt-8 md:pt-0"
          >
           <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium backdrop-blur-sm">
                Engineer & Enterpreneur
            </span>

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

              <p
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0"
              >
                Implementing the solutions that help you automate your browser
              </p>
            </div>

            {/* CTA Section */}
            <div
              className="flex flex-col md:flex-row items-center gap-4 pt-8"
            >
              <Button
                className='rounded-full w-full md:w-1/3 h-11'
                asChild
              >
               <Link
                  href="https://cal.com/abhinandan07/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  Let&apos;s Talk
                </Link>
              </Button>

              <Button
                variant="outline"
                className='rounded-full w-full md:w-1/3 h-11'
                onClick={() => {
                  document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                  Explore More
              </Button>
            </div>
          </div>

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
                className="relative z-10 rounded-3xl overflow-hidden shadow-2xl "
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
