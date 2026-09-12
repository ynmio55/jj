import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MailOpen, Heart, Sparkles, X } from 'lucide-react';

export const LoveLetter = ({ letterData }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="love-letter" className="py-20 px-4 max-w-3xl mx-auto relative">
      {/* Section Title */}
      <div className="text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold tracking-wider uppercase mb-3 border border-purple-200"
        >
          <Mail className="w-4 h-4 text-purple-500" />
          FROM THE HEART
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 font-display mb-3"
        >
          ถึงคนที่ฉันรัก 💌
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-600 text-sm sm:text-base max-w-md mx-auto"
        >
          ความรู้สึกจริงใจที่อยากบอกเธอด้วยหัวใจ
        </motion.p>
      </div>

      {/* Envelope / Letter Interactive Container */}
      <div className="relative flex justify-center">
        {!isOpen ? (
          /* Sealed Envelope Card */
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setIsOpen(true)}
            className="w-full max-w-md glass-card rounded-3xl p-8 text-center border-2 border-pink-200 shadow-2xl cursor-pointer relative overflow-hidden group"
          >
            {/* Soft decorative background glows */}
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-pink-300/30 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-purple-300/30 rounded-full blur-2xl pointer-events-none" />

            {/* Stamp icon badge */}
            <div className="absolute top-4 right-4 bg-pink-100 p-2 rounded-xl border border-pink-300 shadow-sm rotate-6">
              <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
            </div>

            <div className="my-6 flex justify-center">
              <div className="relative p-6 rounded-full bg-gradient-to-tr from-pink-400 to-purple-400 text-white shadow-xl group-hover:rotate-12 transition-transform duration-500">
                <Mail className="w-12 h-12 animate-pulse" />
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2 font-display">
              {letterData.recipient}
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mb-6">
              มีจดหมายซ่อนอยู่ด้านใน กดที่ปุ่มเพื่อเปิดอ่านนะครับ ✨
            </p>

            <button
              onClick={() => setIsOpen(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-sm shadow-lg shadow-pink-200 group-hover:shadow-pink-300 transition-all duration-300"
            >
              <MailOpen className="w-4 h-4" />
              <span>เปิดจดหมาย 💌</span>
            </button>
          </motion.div>
        ) : (
          /* Opened Unfolded Letter */
          <AnimatePresence>
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ type: 'spring', damping: 22, stiffness: 200 }}
              className="w-full max-w-xl glass-card rounded-3xl p-6 sm:p-10 border-2 border-pink-300 shadow-2xl relative overflow-hidden bg-gradient-to-b from-white/95 via-pink-50/50 to-white/95"
            >
              {/* Close / Fold Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-colors"
                title="พับเก็บจดหมาย"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Watermark Heart */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                <Heart className="w-72 h-72 text-pink-600 fill-pink-600" />
              </div>

              {/* Letter Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-pink-200/80">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span className="text-sm font-bold text-pink-600 tracking-wider">
                  MY LOVE LETTER FOR YOU
                </span>
              </div>

              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-handwritten text-lg sm:text-xl">
                <p className="font-bold text-pink-700 text-xl sm:text-2xl mb-3">
                  {letterData.salutation}
                </p>

                {letterData.paragraphs.map((para, idx) => (
                  <p key={idx} className="indent-4">
                    {para}
                  </p>
                ))}
              </div>

              {/* Letter Signature */}
              <div className="mt-8 pt-6 border-t border-pink-200/80 text-right">
                <div className="text-xs text-slate-500 font-medium">
                  {letterData.signature}
                </div>
                <div className="text-lg sm:text-xl font-bold text-pink-600 font-display mt-1">
                  {letterData.senderName}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};
