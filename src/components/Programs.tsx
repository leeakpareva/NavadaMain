import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, BrainCircuit, Users, Workflow } from 'lucide-react';

const programs = [
  {
    icon: BookOpen,
    title: 'Skill Development',
    description: 'Comprehensive training programs in AI and Web3 technologies, accessible to underprivileged communities.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80'
  },
  {
    icon: Users,
    title: 'Employment Platform',
    description: 'Matching skilled individuals with businesses in need of tech-driven solutions.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80'
  },
  {
    icon: BrainCircuit,
    title: 'AI Integration',
    description: 'Helping businesses leverage AI for growth and efficiency through our platform.',
    image: 'https://images.unsplash.com/photo-1488229297570-58520851e868?auto=format&fit=crop&q=80'
  },
  {
    icon: Workflow,
    title: 'Community Forums',
    description: 'Establishing platforms for idea exchange between tech experts and the community.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80'
  }
];

export default function Programs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id="programs" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Opensource Programs</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Empowering individuals and businesses through innovative technology solutions
            and comprehensive training programs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="absolute inset-0">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />
              </div>
              
              <div className="relative p-8 min-h-[400px] flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm p-3 mb-6">
                    <program.icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                  <p className="text-gray-300">{program.description}</p>
                </div>
                
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-lg px-6 py-3 inline-flex items-center space-x-2 transition-colors duration-300"
                >
                  <span>Learn More</span>
                  <program.icon className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}