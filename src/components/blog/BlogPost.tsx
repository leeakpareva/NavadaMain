import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, ExternalLink } from 'lucide-react';

interface BlogPostProps {
  onBack: () => void;
}

export default function BlogPost({ onBack }: BlogPostProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <motion.button
        onClick={onBack}
        whileHover={{ x: -5 }}
        className="flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Blog
      </motion.button>

      <div className="prose prose-invert max-w-none">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            Mar 15, 2024
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            5 min read
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          The Future of AI in Business Transformation: A Visual Guide for Fashion Designers
        </h1>
        <p className="text-gray-400 text-xl mb-8">
          Written by Lee Akpareva, MA, MBA
        </p>

        <motion.a
          href="https://chatgpt.com/g/g-e68SydeO7-navada"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 
            rounded-full text-white font-medium hover:opacity-90 transition-all duration-300 no-underline"
        >
          Read on ChatGPT
          <ExternalLink className="w-4 h-4" />
        </motion.a>
      </div>
    </motion.article>
  );
}