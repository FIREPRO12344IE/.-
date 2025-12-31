import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  emoji: string;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
}

const dinoEmojis = ['🦕', '🦖', '🐾', '🦎', '🐊', '🐢', '🦴', '🥚', '🌿', '🌴'];

const FallingDinos: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      emoji: dinoEmojis[Math.floor(Math.random() * dinoEmojis.length)],
      left: Math.random() * 100,
      animationDuration: 8 + Math.random() * 12,
      animationDelay: Math.random() * 10,
      size: 16 + Math.random() * 24,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes sway {
          0%, 100% {
            transform: translateX(0px);
          }
          50% {
            transform: translateX(30px);
          }
        }
      `}</style>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: `${particle.left}%`,
            fontSize: `${particle.size}px`,
            animation: `fall ${particle.animationDuration}s linear infinite, sway 3s ease-in-out infinite`,
            animationDelay: `${particle.animationDelay}s, ${particle.animationDelay * 0.5}s`,
          }}
        >
          {particle.emoji}
        </div>
      ))}
    </div>
  );
};

export default FallingDinos;
