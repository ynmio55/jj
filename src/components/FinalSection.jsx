import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';

export const FinalSection = ({ finalData }) => {
  const triggerConfetti = () => {
    // Fire festive heart-tinted confetti fireworks!
    const count = 200;
    const defaults = {
      origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#f472b6', '#38bdf8', '#c084fc']
    });
    fire(0.2, {
      spread: 60,
      colors: ['#fbcfe8', '#bae6fd']
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      colors: ['#e11d48', '#0284c7']
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  return (
    <section id="final" className="py-24 px-4 max-w-4xl mx-auto text-center relative">
      {/* Background soft lighting glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-pink-300/30 via-sky-300/30 to-purple-300/30 rounded-full blur-3xl pointer-events-none" />

      {/* Main Quote Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card rounded-3xl p-8 sm:p-12 border-2 border-pink-200/90 shadow-2xl relative mb-12"
      >
        <div className="my-3 inline-flex items-center justify-center p-3 rounded-full bg-pink-100 text-pink-500 mb-4">
          <Heart className="w-8 h-8 fill-pink-500 animate-heart-beat" />
        </div>

        {/* Big Thank You Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-romantic-gradient font-display mb-6 tracking-tight">
          {finalData.heading}
        </h2>

        {/* Deep Emotional Poem / Quote */}
        <div className="space-y-3 text-slate-700 text-base sm:text-xl font-medium leading-relaxed font-handwritten max-w-lg mx-auto mb-8">
          <p className="text-slate-600">"{finalData.quoteLine1}</p>
          <p className="text-slate-600">{finalData.quoteLine2}</p>
          <p className="text-pink-600 font-bold text-xl sm:text-2xl pt-2">
            {finalData.quoteLine3}"
          </p>
        </div>

        {/* Final Couple Portrait Showcase Frame */}
        <div className="relative w-44 h-44 sm:w-56 sm:h-56 mx-auto rounded-full p-2 bg-white/90 shadow-xl border-4 border-pink-300 overflow-hidden mb-6 group">
          <img
            src={finalData.image}
            alt="Final Couple"
            className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80";
            }}
          />
        </div>

        {/* Final Wish Banner */}
        <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800 font-display mb-8">
          {finalData.wishText}
        </div>

        {/* Celebration Confetti Trigger Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={triggerConfetti}
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 text-white font-bold text-base sm:text-lg shadow-xl shadow-pink-300 hover:shadow-2xl transition-all duration-300"
        >
          <PartyPopper className="w-5 h-5 animate-bounce" />
          <span>{finalData.buttonConfetti}</span>
          <Sparkles className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Small Copyright / Love Footer */}
      <footer className="text-slate-400 text-xs font-medium">
        Made with ❤️ specially for you • Happy Anniversary
      </footer>
    </section>
  );
};
