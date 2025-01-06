import { motion } from 'framer-motion';
import { Play, Clock } from 'lucide-react';
import { Video } from '../../types/video';

interface VideoCardProps {
  video: Video;
  index: number;
  inView: boolean;
}

export default function VideoCard({ video, index, inView }: VideoCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-colors duration-300"
    >
      <div className="relative aspect-video">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
          >
            <Play className="w-8 h-8 text-white" />
          </motion.a>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {video.duration}
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
          {video.title}
        </h3>
        <p className="text-gray-400 mb-4">
          {video.description}
        </p>
      </div>
    </motion.article>
  );
}