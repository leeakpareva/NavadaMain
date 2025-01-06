import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to window size
      const x = (e.clientX / window.innerWidth) * 15;
      const y = (e.clientY / window.innerHeight) * 15;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div 
      className="absolute inset-0"
      initial={{ scale: 1.2 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-black/80" />
      <motion.div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ 
          scale: 1, 
          opacity: 0.5,
          x: mousePosition.x,
          y: mousePosition.y
        }}
        transition={{ 
          scale: { duration: 1.5 },
          opacity: { duration: 1.5 },
          x: { type: "spring", stiffness: 50 },
          y: { type: "spring", stiffness: 50 }
        }}
      />
    </motion.div>
  );
}