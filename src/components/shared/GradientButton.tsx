import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface GradientButtonProps {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function GradientButton({ href, children, variant = 'primary' }: GradientButtonProps) {
  const isPrimary = variant === 'primary';

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`group ${
        isPrimary 
          ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 p-[2px]' 
          : 'border border-white/20'
      } rounded-full`}
    >
      <div className={`${isPrimary ? 'bg-black' : ''} rounded-full px-8 py-4 transition ${isPrimary ? 'group-hover:bg-transparent' : ''}`}>
        <span className="flex items-center space-x-2 text-white">
          <span>{children}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </motion.a>
  );
}