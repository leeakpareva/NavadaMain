import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface InfoBoxProps {
  title: string;
  children: ReactNode;
}

export default function InfoBox({ title, children }: InfoBoxProps) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
      <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        {title}
      </h3>
      {children}
    </div>
  );
}