import { motion } from 'framer-motion';
import { ArrowRight, Code2, Globe2, Users } from 'lucide-react';
import AnimatedBackground from './hero/AnimatedBackground';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.8,
      ease: [0.215, 0.610, 0.355, 1.000],
    },
  }),
};

const stats = [
  { icon: Users, value: '5000+', label: 'Lives Impacted' },
  { icon: Code2, value: '10%', label: 'Unemployment Reduction' },
  { icon: Globe2, value: '100%', label: 'Open Source' },
];

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <AnimatedBackground />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="overflow-hidden"
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Navigating Artistic Visions
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                with Advanced Digital
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Assistance
              </span>
            </h1>
          </motion.div>
          
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl"
          >
            NAVADA harnesses the power of AI and Web3 technologies to support sustainable growth
            and create meaningful impact in communities worldwide.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#programs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 p-[2px] rounded-full"
            >
              <div className="bg-black rounded-full px-8 py-4 transition group-hover:bg-transparent">
                <span className="flex items-center space-x-2 text-white">
                  <span>Explore Programs</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group border border-white/20 rounded-full"
            >
              <div className="px-8 py-4 transition">
                <span className="flex items-center space-x-2 text-white">
                  <span>Learn More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.a>
          </motion.div>

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
        </div>
      </div>
    </div>
  );
}