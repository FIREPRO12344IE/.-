import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  emoji: string;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
}

const cuteEmojis = ['🦕', '🦖', '💖', '✨', '🌸', '💕', '🎀', '⭐', '🌟', '💗', '🩷', '🐾', '🦋', '🌷', '💫'];

const FallingDinos: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      emoji: cuteEmojis[Math.floor(Math.random() * cuteEmojis.length)],
      left: Math.random() * 100,
      animationDuration: 10 + Math.random() * 15,
      animationDelay: Math.random() * 12,
      size: 14 + Math.random() * 18,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <style>{`
        @keyframes fall-cute {
          0% {
            transform: translateY(-100px) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 0.9;
          }
          90% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(100vh) rotate(360deg) scale(1);
            opacity: 0;
          }
        }
        @keyframes sway-cute {
          0%, 100% {
            transform: translateX(0px) rotate(-5deg);
          }
          50% {
            transform: translateX(25px) rotate(5deg);
          }
        }
      `}</style>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute drop-shadow-sm"
          style={{
            left: `${particle.left}%`,
            fontSize: `${particle.size}px`,
            animation: `fall-cute ${particle.animationDuration}s linear infinite, sway-cute 4s ease-in-out infinite`,
            animationDelay: `${particle.animationDelay}s, ${particle.animationDelay * 0.5}s`,
            filter: 'drop-shadow(0 2px 4px rgba(236, 72, 153, 0.3))',
          }}
        >
          {particle.emoji}
        </div>
      ))}
    </div>
  );
};

export default FallingDinos;
