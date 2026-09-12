import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export const LightboxModal = ({ isOpen, activeIndex, images, onClose, onNavigate }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((activeIndex - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') onNavigate((activeIndex + 1) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, activeIndex, images.length, onClose, onNavigate]);

  if (!isOpen || activeIndex === null || !images[activeIndex]) return null;

  const currentImage = images[activeIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors border border-white/30"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((activeIndex - 1 + images.length) % images.length);
          }}
          className="absolute left-2 sm:left-6 z-50 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors border border-white/30"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((activeIndex + 1) % images.length);
          }}
          className="absolute right-2 sm:right-6 z-50 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors border border-white/30"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Modal Main Content Box */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-4xl w-full max-h-[90vh] flex flex-col bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/20"
        >
          {/* Clean Image Viewer Frame */}
          <div className="relative flex-1 flex items-center justify-center bg-black/80 overflow-hidden min-h-[350px] max-h-[85vh] p-2">
            <img
              src={currentImage.url}
              alt="Memory Photo"
              className="w-full h-full object-contain max-h-[85vh] rounded-2xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/photo-1.jpg";
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
