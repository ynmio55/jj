import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const FloatingHearts = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate 18 floating heart and sparkle particles with random positions & speeds
    const initialParticles = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 16 + 12,
      duration: Math.random() * 8 + 8,
      delay: Math.random() * 5,
      type: i % 3 === 0 ? 'sparkle' : 'heart',
      opacity: Math.random() * 0.4 + 0.3,
    }));
    setParticles(initialParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bottom-0 text-pink-400/50 select-none"
          style={{
            left: `${p.x}%`,
            fontSize: `${p.size}px`,
          }}
          animate={{
            y: ['0vh', '-115vh'],
            x: [0, Math.sin(p.id) * 30, 0],
            rotate: [0, 45, -45, 0],
            opacity: [0, p.opacity, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
        >
          {p.type === 'heart' ? '💖' : '✨'}
        </motion.div>
      ))}
    </div>
  );
};
