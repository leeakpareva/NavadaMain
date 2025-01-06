import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail } from 'lucide-react';
import { staggerContainer, slideIn } from '../utils/motionVariants';

export default function Subscribe() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-purple-900/50 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            variants={slideIn}
            className="w-16 h-16 mx-auto mb-8 rounded-full bg-purple-600/20 flex items-center justify-center"
          >
            <Mail className="w-8 h-8 text-purple-400" />
          </motion.div>
          
          <motion.h2
            variants={slideIn} 
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            Stay Updated
          </motion.h2>
          
          <motion.p
            variants={slideIn}
            className="text-gray-300 mb-8"
          >
            Subscribe to our newsletter for the latest insights on AI, Web3, and digital transformation.
          </motion.p>
          
          <motion.form
            variants={slideIn}
            className="flex flex-col sm:flex-row gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white 
                placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white 
                font-medium hover:opacity-90 transition-opacity"
            >
              Subscribe
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}