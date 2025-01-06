import { motion } from 'framer-motion';
import { textVariants } from '../../utils/animations';
import GradientButton from '../shared/GradientButton';
import HeroStats from './HeroStats';

export default function HeroContent() {
  return (
    <div className="max-w-4xl">
      <motion.div
        custom={1}
        initial="hidden"
        animate="visible"
        variants={textVariants}
        className="overflow-hidden"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
          Empowering
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Through AI & Web3
          </span>
          Innovation
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
        <GradientButton href="#programs" variant="primary">
          Explore Programs
        </GradientButton>
        <GradientButton href="#about" variant="secondary">
          Learn More
        </GradientButton>
      </motion.div>

      <HeroStats />
    </div>
  );
}