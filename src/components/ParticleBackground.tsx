import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    // Reduce particles on mobile for better performance
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 15 : 25;
    const newParticles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    setParticles(newParticles);
  }, []);

  const particleColor = useMemo(() => 
    theme === 'dark' ? 'bg-purple-400' : 'bg-purple-600',
    [theme]
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={particleColor}
          style={{
            position: 'absolute',
            width: particle.size,
            height: particle.size,
            borderRadius: '50%',
            opacity: particle.opacity,
            willChange: 'transform',
          }}
          initial={{ x: `${particle.x}vw`, y: `${particle.y}vh` }}
          animate={{
            x: [`${particle.x}vw`, `${particle.x + particle.speedX * 100}vw`],
            y: [`${particle.y}vh`, `${particle.y + particle.speedY * 100}vh`],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
