import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export const StoryTimeline = ({ timelineData }) => {
  return (
    <section id="our-story" className="py-20 px-4 max-w-4xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-xs font-semibold tracking-wider uppercase mb-3 border border-sky-200"
        >
          <Sparkles className="w-4 h-4 text-sky-500" />
          OUR JOURNEY
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 font-display"
        >
          เรื่องราวความรักของเรา 💕
        </motion.h2>
      </div>

      {/* Timeline Vertical Container */}
      <div className="relative">
        {/* Central Connecting Line */}
        <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-sky-300 via-pink-400 to-purple-400 rounded-full -translate-x-1/2 shadow-sm" />

        {/* Timeline Items */}
        <div className="space-y-12 sm:space-y-16">
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;
            const isVideo = item.image?.endsWith('.mp4') || item.type === 'video';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-center ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot Node */}
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-white border-4 border-pink-400 shadow-md text-pink-500">
                  <Heart className="w-4 h-4 fill-pink-500" />
                </div>

                {/* Timeline Media Card (Photo or Video) */}
                <div className="w-full sm:w-1/2 pl-14 sm:pl-0 sm:px-8">
                  <div className="glass-card rounded-3xl p-3 sm:p-4 border border-white/80 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 overflow-hidden">
                    <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden shadow-md group bg-slate-900">
                      {isVideo ? (
                        <video
                          src={item.image}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                      ) : (
                        <img
                          src={item.image}
                          alt="Our story memory"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "/images/photo-1.jpg";
                          }}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
