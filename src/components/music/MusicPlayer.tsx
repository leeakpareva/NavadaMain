import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3"
        loop
      />
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-4 left-4 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={togglePlay}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-full 
            shadow-lg hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          {isPlaying ? (
            <>
              <Volume2 className="w-6 h-6" />
              <span className="text-sm">Playing</span>
            </>
          ) : (
            <>
              <VolumeX className="w-6 h-6" />
              <span className="text-sm">Muted</span>
            </>
          )}
        </motion.button>
      </motion.div>
    </>
  );
}