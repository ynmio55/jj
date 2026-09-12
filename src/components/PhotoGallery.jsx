import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart } from 'lucide-react';
import { LightboxModal } from './LightboxModal';

export const PhotoGallery = ({ galleryQuote, images }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index) => {
    setActiveIndex(index);
    setModalOpen(true);
  };

  return (
    <section id="gallery" className="py-20 px-4 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold tracking-wider uppercase mb-3 border border-pink-200"
        >
          <Camera className="w-4 h-4 text-pink-500" />
          PHOTO ALBUM
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 font-display mb-4"
        >
          ความทรงจำผ่านรูปถ่าย 📷
        </motion.h2>

        {/* Romantic Banner Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block glass-card px-6 py-3 rounded-2xl border border-pink-200/80 shadow-md max-w-lg mx-auto"
        >
          <p className="text-pink-600 text-sm sm:text-base font-handwritten italic font-semibold">
            "{galleryQuote}"
          </p>
        </motion.div>
      </div>

      {/* Masonry / Responsive Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {images.map((img, index) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            onClick={() => openLightbox(index)}
            className="break-inside-avoid relative group rounded-3xl overflow-hidden glass-card border border-white/80 shadow-lg cursor-pointer transform transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden w-full bg-slate-100 p-2">
              <img
                src={img.url}
                alt="Gallery Memory"
                className="w-full h-auto object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/photo-1.jpg";
                }}
              />

              {/* Minimal Heart Icon Overlay on Hover */}
              <div className="absolute inset-2 bg-gradient-to-t from-pink-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-center p-4">
                <div className="p-3 rounded-full bg-white/90 shadow-lg text-pink-500">
                  <Heart className="w-5 h-5 fill-pink-500" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        isOpen={modalOpen}
        activeIndex={activeIndex}
        images={images}
        onClose={() => setModalOpen(false)}
        onNavigate={(newIdx) => setActiveIndex(newIdx)}
      />
    </section>
  );
};
