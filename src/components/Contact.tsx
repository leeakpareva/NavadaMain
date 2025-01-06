import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send } from 'lucide-react';
import { staggerContainer, slideIn } from '../utils/motionVariants';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id="contact" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h2 
            variants={slideIn}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Let's Create Together
          </motion.h2>
          <motion.p 
            variants={slideIn}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Ready to transform your digital presence? Let's start a conversation.
          </motion.p>
        </motion.div>

        <motion.form
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto space-y-8"
        >
          <motion.div 
            variants={slideIn}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* ... (keep existing form fields) */}
          </motion.div>
          
          <motion.div variants={slideIn}>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
            <textarea
              id="message"
              rows={6}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
                placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                transition-all duration-300"
              placeholder="Tell us about your project..."
            />
          </motion.div>

          <motion.button
            variants={slideIn}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg px-8 py-4
              flex items-center justify-center space-x-2 hover:from-purple-700 hover:to-pink-700 
              transition-all duration-300"
          >
            <span>Send Message</span>
            <Send className="w-5 h-5" />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}