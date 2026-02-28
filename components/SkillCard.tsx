'use client';

import { motion } from 'motion/react';

const SkillCard = ({ skill }: { skill: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="p-4 bg-gray-800 text-white rounded-lg shadow-md"
  >
    {skill}
  </motion.div>
);

export default SkillCard;
