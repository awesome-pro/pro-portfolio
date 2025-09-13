'use client';

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCheckCircle, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const SystemStatus = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center space-x-3 bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-900/50 px-4 py-2 rounded-full shadow-md max-w-60"
    >
      <div>
        <p className="text-xs font-medium text-green-800 dark:text-green-200">
          All Systems Operational
        </p>
      </div>
      <motion.div
        className="w-2 h-2 bg-green-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
    </motion.div>
  );
};

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/awesome-pro',
      icon: <FaGithub className="w-5 h-5 text-primary" />,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/abhinandan-verma',
      icon: <FaLinkedin className="w-5 h-5 text-primary" />,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/fierce_fire_',
      icon: <FaTwitter className="w-5 h-5 text-primary" />,
    },
    {
      name: 'Email',
      href: 'mailto:abhinadnan@abhinandan.pro',
      icon: <FaEnvelope className="w-5 h-5 text-primary" />,
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@abhi_is_building',
      icon: <FaYoutube className="w-5 h-5 text-primary" />,
    },
  ];

  return (
    <footer className="relative">
      {/* Gradient divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="bg-gradient-to-b from-gray-50/50 to-gray-100/50 dark:from-gray-900/50 dark:to-gray-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          {/* Main footer content */}
          <div className="py-12 flex flex-col md:flex-row justify-between lg:items-center">
            {/* Logo and description */}
            <div className="flex flex-col space-y-4">
              <Link href="/">
                <Image src="/logo.png" alt="Logo" width={220} height={50} className="dark:invert" />
              </Link>
              
            </div>

            {/* System Status and Social Links */}
            <div className="flex flex-col space-y-4 mt-4 lg:mt-0">
              {/* System Status */}
              <SystemStatus />

              {/* Social Links */}
              <div className="flex flex-wrap gap-2">
                {socialLinks.map(social => (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    asChild
                    className="hover:bg-primary/10 transition-colors duration-200"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary/80"
                    >
                      {social.icon}
                      <span className="sr-only">{social.name}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="py-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                &copy; {new Date().getFullYear()} Abhinandan. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
