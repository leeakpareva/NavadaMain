import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  description: string;
  inView: boolean;
}

export default function SectionHeading({ title, description, inView }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6">{title}</h2>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">
        {description}
      </p>
    </motion.div>
  );
}