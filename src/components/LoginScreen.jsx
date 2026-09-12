import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, User, KeyRound, Heart, Eye, EyeOff, Sparkles, ShieldAlert } from 'lucide-react';
import confetti from 'canvas-confetti';

export const LoginScreen = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      // Validate credentials
      if (username.trim() === 'JameMuay' && password.trim() === '121324') {
        // Trigger small romantic celebration confetti
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f472b6', '#38bdf8', '#c084fc']
        });

        // Save login state in sessionStorage
        sessionStorage.setItem('isLoggedIn', 'true');
        onLoginSuccess();
      } else {
        setError('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้องนะงับ 💔');
        setIsSubmitting(false);
      }
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-br from-love-blue-100 via-love-pink-100 to-love-purple-100 overflow-hidden">
      {/* Background Orbs & Sparkles */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-pink-300/40 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-300/40 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 260 }}
        className="w-full max-w-md glass-card rounded-3xl p-8 sm:p-10 border-2 border-white/90 shadow-2xl relative z-10 text-center"
      >
        {/* Heart Lock Icon Badge */}
        <div className="mx-auto w-20 h-20 mb-6 rounded-full bg-gradient-to-tr from-pink-400 via-sky-400 to-purple-400 p-1 shadow-lg shadow-pink-200">
          <div className="w-full h-full rounded-full bg-white/95 flex items-center justify-center text-pink-500">
            <Lock className="w-9 h-9 animate-bounce" />
          </div>
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-100/90 text-pink-600 text-xs font-semibold uppercase tracking-wider mb-2 border border-pink-200">
          <Sparkles className="w-3.5 h-3.5" />
          OUR PRIVATE SPACE
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-romantic-gradient font-display mb-2">
          พื้นที่ความรักของเรา 💖
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm mb-6">
          กรุณากรอกชื่อผู้ใช้และรหัสผ่านเพื่อปลดล็อกเรื่องราวความรักนะงับ
        </p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          {/* Username Input */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              ชื่อผู้ใช้ (Username)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-pink-400">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="กรอกชื่อผู้ใช้..."
                required
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white/80 border border-pink-200 focus:border-pink-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-300/40 text-slate-800 text-sm font-medium transition-all shadow-sm"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              รหัสผ่าน (Password)
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-pink-400">
                <KeyRound className="w-4 h-4" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="กรอกรหัสผ่าน..."
                required
                className="w-full pl-10 pr-11 py-3 rounded-2xl bg-white/80 border border-pink-200 focus:border-pink-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-pink-300/40 text-slate-800 text-sm font-medium transition-all shadow-sm"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-pink-500 transition-colors"
                tabIndex="-1"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                className="flex items-center gap-2 p-3 rounded-2xl bg-red-50 text-red-600 text-xs font-semibold border border-red-200"
              >
                <ShieldAlert className="w-4 h-4 flex-shrink-0 text-red-500" />
                <span>{error}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-pink-200 hover:shadow-xl transition-all duration-300 active:scale-98 flex items-center justify-center gap-2 disabled:opacity-75"
          >
            {isSubmitting ? (
              <span className="inline-flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                กำลังเปิดความทรงจำ...
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <Heart className="w-4 h-4 fill-white" />
                เข้าสู่ระบบ 💕
              </span>
            )}
          </button>
        </form>

        <p className="mt-6 text-[11px] text-slate-400 font-medium">
          Only for Jame & Muay • Anniversary Special
        </p>
      </motion.div>
    </div>
  );
};
