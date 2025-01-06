import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Clock } from 'lucide-react';
import VideoCard from './videos/VideoCard';
import { videos } from '../data/videos';

export default function Videos() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section ref={ref} id="videos" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Videos</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our latest insights and tutorials on AI, Web3, and digital transformation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}