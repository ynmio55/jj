import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export const MemoriesSection = ({ memoriesData }) => {
  return (
    <section id="memories" className="py-20 px-4 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold tracking-wider uppercase mb-3 border border-amber-200"
        >
          <Sparkles className="w-4 h-4 text-amber-500" />
          SPECIAL MOMENTS
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 font-display mb-3"
        >
          ความทรงจำสุดพิเศษ 💫
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 text-sm sm:text-base max-w-md mx-auto"
        >
          ทุกนาทีที่ได้ใช้ร่วมกัน คือของขวัญที่ล้ำค่าที่สุด
        </motion.p>
      </div>

      {/* Clean Memory Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
        {memoriesData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-3xl p-3 border border-white/80 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 group"
          >
            {/* Image Container */}
            <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-100">
              <img
                src={item.image}
                alt="Special Memory"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/images/photo-1.jpg";
                }}
              />
              <div className="absolute bottom-3 right-3 bg-white/90 p-2.5 rounded-full shadow-md text-pink-500">
                <Heart className="w-4 h-4 fill-pink-500 animate-pulse" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
