import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export const Navbar = ({ coupleNames }) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / Math.max(1, totalHeight)) * 100;
      setScrollProgress(progress);
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      {/* Scroll Progress Bar */}
      <div
        className="h-1 bg-gradient-to-r from-sky-400 via-pink-400 to-purple-400 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`px-4 sm:px-8 py-3 transition-all duration-300 flex items-center justify-center ${
          scrolled
            ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-pink-100'
            : 'bg-transparent'
        }`}
      >
        {/* Logo / Clean Romantic Title */}
        <a
          href="#"
          className="flex items-center gap-2 text-lg sm:text-xl font-extrabold font-display py-1"
        >
          <Heart className="w-5 h-5 text-pink-500 fill-pink-500 animate-heart-beat shrink-0" />
          <span className="text-romantic-gradient">{coupleNames}</span>
        </a>
      </nav>
    </header>
  );
};
