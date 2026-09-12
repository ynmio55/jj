import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, Heart } from 'lucide-react';

export const FutureSection = ({ futureData }) => {
  return (
    <section id="our-future" className="py-20 px-4 relative my-12 overflow-hidden">
      {/* Container Background Card with Deep Dreamy Gradient */}
      <div className="max-w-5xl mx-auto rounded-3xl p-8 sm:p-12 glass-card-dark text-white relative shadow-2xl border border-sky-400/30 overflow-hidden">
        {/* Floating background glowing stars/orbs */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="text-center relative z-10 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold tracking-wider uppercase mb-3 border border-sky-400/30"
          >
            <Compass className="w-4 h-4 text-sky-400 animate-spin" style={{ animationDuration: '12s' }} />
            LOOKING AHEAD
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-pink-200 to-purple-200 font-display mb-4"
          >
            {futureData.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sky-100 text-sm sm:text-base max-w-lg mx-auto leading-relaxed"
          >
            "{futureData.introText}"
          </motion.p>
        </div>

        {/* Goals / Dreams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {futureData.goals.map((goal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-sky-300/40 shadow-lg hover:shadow-sky-500/10 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl p-3 rounded-xl bg-sky-500/20 border border-sky-400/30 group-hover:scale-110 transition-transform">
                  {goal.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-sky-200 mb-1.5 font-display flex items-center gap-2">
                    <span>{goal.title}</span>
                    <Sparkles className="w-3.5 h-3.5 text-pink-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note inside Future Card */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 text-xs text-pink-300 font-medium italic">
            <Heart className="w-3.5 h-3.5 fill-pink-400 text-pink-400 animate-heart-beat" />
            อนาคตของเราสองคน จะสวยงามกว่าอดีตที่ผ่านมาเสมอ
          </span>
        </div>
      </div>
    </section>
  );
};
