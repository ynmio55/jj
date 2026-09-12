import React, { useState, useRef, useEffect } from 'react';
import { Music, Volume2, VolumeX, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const MusicPlayer = ({ musicUrl, autoPlayImmediately = true }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    // Attempt automatic playback immediately after login / mount
    if (autoPlayImmediately && audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setShowHint(false);
          })
          .catch((err) => {
            console.warn('Autoplay prevented by browser, waiting for user click:', err);
          });
      }
    }

    const timer = setTimeout(() => setShowHint(false), 8000);
    return () => clearTimeout(timer);
  }, [autoPlayImmediately]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setShowHint(false);
      }).catch((err) => {
        console.warn('Playback error:', err);
      });
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {showHint && !isPlaying && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="glass-card px-3 py-1.5 rounded-full text-xs text-pink-600 shadow-md font-medium flex items-center gap-1.5 border border-pink-200"
          >
            <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500 animate-pulse" />
            <span>กดตรงนี้เพื่อเปิดเพลงรัก 🎵</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={togglePlay}
        className={`relative p-3.5 rounded-full glass-card shadow-lg flex items-center justify-center border transition-all duration-300 ${
          isPlaying 
            ? 'border-pink-400 bg-pink-500/20 text-pink-600 shadow-pink-300/50' 
            : 'border-sky-300 bg-white/80 text-sky-600 hover:text-pink-500'
        }`}
        aria-label="Toggle Music"
      >
        {isPlaying ? (
          <div className="flex items-center gap-1">
            <span className="w-1 h-4 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-1 h-5 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-1 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            <span 
              onClick={toggleMute} 
              className="ml-1.5 text-xs hover:text-pink-700" 
              title={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-pink-500" />}
            </span>
          </div>
        ) : (
          <Music className="w-6 h-6 animate-pulse" />
        )}
      </motion.button>

      <audio
        ref={audioRef}
        src={musicUrl}
        loop
        preload="auto"
      />
    </div>
  );
};
