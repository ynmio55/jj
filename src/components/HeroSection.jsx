import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';
import { TogetherCounter } from './TogetherCounter';

export const HeroSection = ({ heroData, startDate }) => {
  const scrollToStory = () => {
    const el = document.getElementById('our-story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-12 pb-16 px-4 text-center overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-tr from-pink-300/40 via-sky-200/40 to-purple-300/40 rounded-full blur-3xl pointer-events-none" />

      {/* Romantic Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md shadow-md border border-pink-200 mb-6"
      >
        <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
        <span className="text-xs sm:text-sm font-semibold text-pink-600 tracking-wide">
          OUR SPECIAL DAY
        </span>
        <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-heart-beat" />
      </motion.div>

      {/* Main Couple Image Frame */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative group mb-8"
      >
        {/* Animated aura ring */}
        <div className="absolute -inset-2 bg-gradient-to-r from-pink-400 via-sky-400 to-purple-400 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse-glow" />
        
        <div className="relative w-48 h-48 sm:w-60 sm:h-60 rounded-full p-2 bg-white/90 backdrop-blur-sm shadow-2xl overflow-hidden border-4 border-white">
          <img
            src={heroData.image}
            alt="Couple Hero"
            className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              // Fallback placeholder image if local file not added yet
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80";
            }}
          />
        </div>

        {/* Floating Heart Sticker */}
        <div className="absolute bottom-2 right-2 bg-white/90 p-2.5 rounded-full shadow-lg border border-pink-200 text-pink-500 animate-bounce">
          <Heart className="w-5 h-5 fill-pink-500" />
        </div>
      </motion.div>

      {/* Main Titles */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-romantic-gradient tracking-tight mb-3 font-display"
      >
        {heroData.title} {heroData.heartEmoji}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-slate-600 text-base sm:text-lg max-w-md mx-auto mb-4 font-medium leading-relaxed"
      >
        "{heroData.subtitle}"
      </motion.p>

      {/* Live Days Counter */}
      <TogetherCounter startDate={startDate} />

      {/* Smooth Scroll Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-4"
      >
        <button
          onClick={scrollToStory}
          className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-sky-400 via-pink-400 to-purple-400 text-white font-bold text-base sm:text-lg shadow-xl shadow-pink-200 hover:shadow-2xl hover:shadow-sky-300 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
        >
          <span>{heroData.buttonText}</span>
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:translate-y-0.5 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
};
