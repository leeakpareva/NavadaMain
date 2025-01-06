import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-2 h-2 bg-white rounded-full"
        />
      </div>
    </motion.div>
  );
}