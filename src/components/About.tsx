import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, BookOpen, Brain, Code2, Gem, Globe2 } from 'lucide-react';
import AboutInfo from './about/AboutInfo';

const expertise = [
  {
    icon: Brain,
    title: 'AI Innovation',
    description: 'Developing cutting-edge AI solutions for predictive analytics and automation.'
  },
  {
    icon: Code2,
    title: 'Blockchain Architecture',
    description: 'Certified expertise in designing and implementing blockchain solutions.'
  },
  {
    icon: Globe2,
    title: 'Digital Transformation',
    description: 'Leading complex transformation projects across multiple industries.'
  },
  {
    icon: Award,
    title: 'Project Leadership',
    description: '16+ years of experience in programme direction and development.'
  },
  {
    icon: BookOpen,
    title: 'Education',
    description: "MA in Business Analytics and MBA from Northumbria University."
  },
  {
    icon: Gem,
    title: 'Community Impact',
    description: 'Committed to sustainable business practices and innovation through education.'
  }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id="about" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About NAVADA</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Led by Leslie Akpareva, MA, MBA, NAVADA is a transformative initiative designed to harness 
            the power of AI and Web3 technologies to support sustainable growth and community development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <h3 className="text-3xl font-bold mb-6">Leslie Akpareva, MA, MBA</h3>
          <p className="text-gray-400 mb-6">
            With over 16 years of experience as a Programme Director and Python Developer,
            Leslie has successfully delivered complex transformation projects across finance,
            digital, energy, logistics, and travel industries. His dual master's degrees in
            Business Analytics (MA) and Business Administration (MBA) from Northumbria University
            provide a strong foundation for driving innovation and business transformation.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span>Certified Blockchain Architect</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-pink-500 rounded-full" />
              <span>De-Fi Expert</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full" />
              <span>Python Developer</span>
            </div>
          </div>
        </motion.div>

        <AboutInfo />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {expertise.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 p-3
                transform group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}