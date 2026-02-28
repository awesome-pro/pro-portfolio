'use client';

import { motion } from 'motion/react';

const Logo = () => (
  <motion.div
    className="flex items-center space-x-3"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    {/* Monogram */}
    <motion.div
      className="bg-gradient-to-r from-primary via-accent to-primary w-12 h-12 rounded-full flex justify-center items-center shadow-lg"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill="none"
        stroke="white"
        strokeWidth="8"
        className="w-8 h-8"
      >
        <path d="M10 50 L50 10 L90 50 L50 90 Z" />
        <path d="M50 35 L50 65 M35 50 L65 50" />
      </svg>
    </motion.div>

    {/* Name */}
    <motion.div
      className="text-text"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h1 className="text-3xl font-extrabold tracking-tight leading-none">Abhinandan</h1>
      <p className="text-sm font-medium text-gray-400">Software Engineer</p>
    </motion.div>
  </motion.div>
);

export default Logo;
