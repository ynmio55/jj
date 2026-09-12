import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export const TogetherCounter = ({ startDate }) => {
  const [daysTogether, setDaysTogether] = useState(0);

  useEffect(() => {
    const calculateDays = () => {
      const start = new Date(startDate).getTime();
      const now = new Date().getTime();
      const difference = Math.max(0, now - start);
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDaysTogether(days);
    };

    calculateDays();
    const interval = setInterval(calculateDays, 60000); // refresh every minute

    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div className="w-full max-w-lg mx-auto my-6 px-4">
      <div className="text-center mb-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/80 text-pink-600 text-xs font-semibold tracking-wider uppercase shadow-sm border border-pink-200">
          <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500 animate-heart-beat" />
          Together For
        </span>
      </div>

      {/* Clean Main Days Counter Card */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-3xl p-6 text-center border border-white/80 shadow-xl relative overflow-hidden"
      >
        {/* Soft decorative background glows */}
        <div className="absolute -top-10 -right-10 w-28 h-28 bg-pink-300/30 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-sky-300/30 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10">
          <div className="text-5xl sm:text-6xl font-extrabold text-romantic-gradient font-display tracking-tight mb-1">
            {daysTogether.toLocaleString()}
          </div>
          <div className="text-lg sm:text-xl font-semibold text-slate-700 tracking-wide">
            DAYS OF LOVE ❤️
          </div>
        </div>
      </motion.div>
    </div>
  );
};
