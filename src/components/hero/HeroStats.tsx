import { motion } from 'framer-motion';
import { Code2, Globe2, Users } from 'lucide-react';
import { textVariants } from '../../utils/animations';

const stats = [
  { icon: Users, value: '5000+', label: 'Lives Impacted' },
  { icon: Code2, value: '10%', label: 'Unemployment Reduction' },
  { icon: Globe2, value: '100%', label: 'Open Source' },
];

export default function HeroStats() {
  return (
    <motion.div
      custom={4}
      initial="hidden"
      animate="visible"
      variants={textVariants}
      className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {stats.map((stat, index) => (
        <div key={index} className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
            <stat.icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-2xl font-bold text-white">{stat.value}</div>
            <div className="text-gray-400">{stat.label}</div>
          </div>
        </div>
      ))}
    </motion.div>
  );
}