import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { staggerContainer, scaleIn } from '../utils/motionVariants';
import { services } from '../data/services';

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id="services" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.h2 
            variants={scaleIn}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Expertise
          </motion.h2>
          <motion.p 
            variants={scaleIn}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Comprehensive solutions that transform ideas into impactful digital experiences
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={scaleIn}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${service.gradient} p-4`}
              >
                <service.icon className="w-full h-full text-white" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 
                group-hover:opacity-10 transition-opacity duration-300`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}