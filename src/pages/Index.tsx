
import React, { useState, useEffect } from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import FallingDinos from '@/components/FallingDinos';
import reign1 from '@/assets/reign-1.png';
import reign2 from '@/assets/reign-2.png';
import reign3 from '@/assets/reign-3.png';
import reign4 from '@/assets/reign-4.png';
import reign5 from '@/assets/reign-5.png';
import reign6 from '@/assets/reign-6.png';

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [countdown, setCountdown] = useState(3);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const reignPhotos = [reign1, reign2, reign3, reign4, reign5, reign6];
  
  const sweetMessages = [
    "My cutest little dino 🦕💕",
    "You are rawr-some, pook 🦖",
    "The prettiest T-Rex ever 🐾",
    "Every dino moment with you is precious 🦎",
    "You are my boo-saurus, boo 🦕",
    "Forever grateful for my pook 🦖💕"
  ];

  // Preload all images on mount
  useEffect(() => {
    reignPhotos.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  // Countdown effect
  useEffect(() => {
    if (currentSection === 0 && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (currentSection === 0 && countdown === 0) {
      setTimeout(() => setCurrentSection(1), 500);
    }
  }, [countdown, currentSection]);

  // Message auto-advance
  useEffect(() => {
    if (currentSection === 1) {
      const interval = setInterval(() => {
        setCurrentPhotoIndex((prev) => (prev + 1) % sweetMessages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [currentSection, sweetMessages.length]);

  const handleNext = () => {
    setCurrentSection(currentSection + 1);
  };

  const CuteButton = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
    <button 
      onClick={onClick}
      className="group relative bg-gradient-to-r from-cute-pink via-cute-purple to-cute-pink text-white px-10 py-4 rounded-full font-bold text-lg shadow-cute hover:shadow-glow-pink transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border-4 border-white/50 overflow-hidden"
    >
      <span className="relative z-10 flex items-center gap-2 justify-center">
        {children}
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-cute-purple via-cute-pink to-cute-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </button>
  );

  if (currentSection === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cute-lavender via-cute-pink to-cute-peach relative overflow-hidden">
        <FallingDinos />
        <div className="text-center relative z-10">
          <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 text-7xl animate-bounce-soft drop-shadow-lg">🦕</div>
          <div className="absolute -top-16 -right-16 text-5xl animate-float" style={{animationDelay: '1s'}}>💖</div>
          <div className="absolute -bottom-20 -left-10 text-6xl animate-bounce-soft" style={{animationDelay: '0.5s'}}>🦖</div>
          <div className="absolute -bottom-16 -right-10 text-5xl animate-float" style={{animationDelay: '1.5s'}}>✨</div>
          
          {countdown > 0 ? (
            <div className="relative">
              <div className="text-[10rem] font-pacifico text-gradient-cute animate-pulse-soft drop-shadow-lg">
                {countdown}
              </div>
              <div className="absolute -top-4 -right-4 text-4xl animate-sparkle">⭐</div>
              <div className="absolute -bottom-4 -left-4 text-4xl animate-sparkle" style={{animationDelay: '0.5s'}}>🌟</div>
            </div>
          ) : (
            <div className="animate-fade-in">
              <div className="text-5xl md:text-6xl font-pacifico text-gradient-cute mb-6 drop-shadow-lg">
                💕 For My Dearest Reign 💕
              </div>
              <div className="text-2xl text-foreground/80 font-quicksand font-medium bg-white/60 backdrop-blur-sm rounded-full px-8 py-3 shadow-cute">
                A little something from your boo Edwin 🦕
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (currentSection === 1) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cute-peach via-cute-pink to-cute-lavender flex items-center justify-center p-8 relative overflow-hidden">
        <FallingDinos />
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <div className="relative mb-10">
            <div className="absolute -inset-4 bg-gradient-to-r from-cute-pink via-cute-purple to-cute-blue rounded-[3rem] blur-2xl opacity-40 animate-pulse-soft"></div>
            <div className="relative w-72 md:w-80 h-96 rounded-[2rem] mx-auto shadow-cute border-[6px] border-white overflow-hidden bg-white">
              {reignPhotos.map((photo, index) => (
                <img 
                  key={index}
                  src={photo} 
                  alt={`Reign photo ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                    index === currentPhotoIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            <div className="absolute -top-8 -right-8 text-5xl animate-float">💖</div>
            <div className="absolute -bottom-8 -left-8 text-5xl animate-float" style={{animationDelay: '0.5s'}}>🦕</div>
            <div className="absolute top-1/2 -left-14 text-4xl animate-bounce-soft">✨</div>
            <div className="absolute top-1/2 -right-14 text-4xl animate-bounce-soft" style={{animationDelay: '1s'}}>🌸</div>
          </div>
          
          <div className="mb-10">
            <div className="bg-white/80 backdrop-blur-md rounded-[2rem] px-8 py-6 shadow-cute border-4 border-cute-pink/30 mb-6">
              <p className="text-2xl font-quicksand font-semibold text-foreground animate-fade-in leading-relaxed">
                "{sweetMessages[currentPhotoIndex]}"
              </p>
            </div>
            
            <div className="flex justify-center gap-3 mb-4">
              {sweetMessages.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentPhotoIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-500 border-2 ${
                    index === currentPhotoIndex 
                      ? 'bg-cute-pink border-white scale-125 shadow-lg' 
                      : 'bg-white/50 border-cute-pink/50 hover:bg-cute-pink/50'
                  }`}
                />
              ))}
            </div>
            
            <div className="text-sm text-foreground/60 font-medium flex items-center justify-center gap-2">
              <Star size={16} className="text-cute-yellow" />
              Sweet message {currentPhotoIndex + 1} of {sweetMessages.length}
              <Star size={16} className="text-cute-yellow" />
            </div>
          </div>

          <CuteButton onClick={handleNext}>
            Continue Reading 🦕💕
          </CuteButton>
        </div>
      </div>
    );
  }

  if (currentSection === 2) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cute-mint via-cute-blue to-cute-lavender flex items-center justify-center p-8 relative overflow-hidden">
        <FallingDinos />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-pacifico text-gradient-cute mb-10 flex items-center justify-center gap-4 drop-shadow-lg">
              <Sparkles className="text-cute-yellow animate-sparkle" size={48} />
              A Message From My Heart
              <Sparkles className="text-cute-yellow animate-sparkle" size={48} />
            </h2>
            
            <div className="bg-white/90 backdrop-blur-md rounded-[2rem] p-8 md:p-12 shadow-cute border-4 border-cute-pink/30 relative">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-5xl animate-bounce-soft">💕</div>
              <div className="absolute -top-4 -left-4 text-3xl animate-spin-slow">🌟</div>
              <div className="absolute -top-4 -right-4 text-3xl animate-float">✨</div>
              <div className="absolute -bottom-4 -left-4 text-3xl animate-float" style={{animationDelay: '1s'}}>🦕</div>
              <div className="absolute -bottom-4 -right-4 text-3xl animate-float" style={{animationDelay: '0.5s'}}>🦖</div>
              
              <div className="space-y-6 text-xl md:text-2xl font-quicksand text-foreground leading-relaxed">
                <p className="font-semibold text-cute-pink">"Dearest Reign,</p>
                <p>
                  Thank you for being the most incredible person in my life, pook. 
                  You have been my constant source of joy, my shoulder to lean on, and 
                  the brightest light in so many of my days. 🌟
                </p>
                <p>
                  Your kindness knows no bounds, your laughter is contagious, and your 
                  heart is pure gold. I am so grateful that life brought us together. 💖
                </p>
                <p>
                  This little website is just a tiny way to show you how much you mean to me, boo. 
                  You deserve all the love and appreciation in the world. 🦕"
                </p>
              </div>
              <div className="mt-8 text-cute-pink font-pacifico text-2xl flex items-center justify-center gap-3">
                <Heart className="text-cute-pink animate-pulse-soft" size={28} fill="currentColor" />
                Forever yours, Edwin
                <Heart className="text-cute-pink animate-pulse-soft" size={28} fill="currentColor" />
              </div>
            </div>
          </div>

          <CuteButton onClick={handleNext}>
            See Your Special Stats 🦕📊
          </CuteButton>
        </div>
      </div>
    );
  }

  if (currentSection === 3) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cute-yellow via-cute-peach to-cute-pink flex items-center justify-center p-8 relative overflow-hidden">
        <FallingDinos />
        
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-pacifico text-gradient-cute mb-10 text-center flex items-center justify-center gap-4 drop-shadow-lg">
            🦕 Reign Love Analytics 🦖
          </h2>
          
          <Card className="bg-white/90 backdrop-blur-md border-4 border-cute-pink/30 shadow-cute rounded-[2rem] overflow-hidden">
            <CardContent className="p-8">
              <div className="space-y-5">
                {[
                  { label: "Loyalty Level", value: "INFINITE/10 🦕", icon: <Heart className="text-cute-pink" size={24} fill="currentColor" /> },
                  { label: "Support Power", value: "10/10 🦖", icon: <Sparkles className="text-cute-purple" size={24} /> },
                  { label: "Cuteness Factor", value: "MAXIMUM 🐾", icon: <span className="text-2xl">🌸</span> },
                  { label: "Real Boo Status", value: "CERTIFIED ✅", icon: <Star className="text-cute-yellow" size={24} fill="currentColor" /> },
                  { label: "Special Place in Heart", value: "PERMANENT 💖", icon: <Heart className="text-cute-pink" size={24} fill="currentColor" /> },
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center p-5 bg-gradient-to-r from-cute-pink/20 via-cute-lavender/20 to-cute-blue/20 rounded-2xl border-2 border-white/50 hover:scale-[1.02] transition-transform"
                  >
                    <span className="text-lg md:text-xl font-bold text-foreground flex items-center gap-3">
                      {stat.icon}
                      {stat.label}:
                    </span>
                    <span className="text-xl md:text-2xl font-bold text-cute-pink">{stat.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-10">
            <CuteButton onClick={handleNext}>
              See The Ultimate Ranking 🦕🏆
            </CuteButton>
          </div>
        </div>
      </div>
    );
  }

  if (currentSection === 4) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-cute-purple via-cute-pink to-cute-peach flex items-center justify-center p-8 relative overflow-hidden">
        <FallingDinos />
        
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-pacifico text-gradient-cute mb-10 flex items-center justify-center gap-4 drop-shadow-lg">
            🏆 The Ultimate Boo Leaderboard 🏆
          </h2>
          
          <Card className="bg-white/90 backdrop-blur-md border-4 border-cute-pink/30 shadow-cute rounded-[2rem] mb-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-cute-pink via-cute-purple to-cute-blue"></div>
            <CardContent className="p-8 md:p-12">
              <div className="text-center">
                <div className="text-8xl mb-6 animate-bounce-soft drop-shadow-lg">👑</div>
                <div className="text-4xl md:text-5xl font-pacifico text-gradient-cute mb-4">
                  #1 REIGN
                </div>
                <div className="text-xl text-cute-purple mb-8 font-medium bg-cute-lavender/50 rounded-full px-6 py-2 inline-block">
                  "The Ultimate Boo & Pook" 💕
                </div>
                <div className="bg-gradient-to-r from-cute-pink/30 via-cute-lavender/30 to-cute-blue/30 rounded-2xl p-6 mb-8 border-2 border-white/50">
                  <span className="text-2xl md:text-3xl font-bold text-foreground block mb-2">
                    🦕 LEGENDARY STATUS ACHIEVED 🦖
                  </span>
                  <span className="text-lg text-foreground/70">
                    Hall of Fame - First Ballot Entry ⭐
                  </span>
                </div>
                <div className="space-y-3 text-foreground text-lg md:text-xl">
                  <p className="font-bold flex items-center justify-center gap-2">🥇 Winner of: Best Boo Ever</p>
                  <p className="font-bold flex items-center justify-center gap-2">🏆 Champion of: Unconditional Love</p>
                  <p className="font-bold flex items-center justify-center gap-2">👑 Queen of: Making Everything Better</p>
                </div>
                <div className="mt-8 p-5 bg-cute-pink/20 rounded-2xl border-2 border-cute-pink/30">
                  <p className="text-xl md:text-2xl font-bold text-foreground">
                    Nobody else even comes close! 💖
                  </p>
                  <p className="text-md text-foreground/70 mt-2">
                    The competition ended before it started 🦕
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <CuteButton onClick={handleNext}>
            One Final Dino Message 🦕💕
          </CuteButton>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cute-lavender via-cute-pink to-cute-peach flex items-center justify-center p-8 relative overflow-hidden">
      <FallingDinos />
      
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <div className="mb-10">
          <div className="text-8xl mb-8 animate-float drop-shadow-lg">🦕</div>
          <h2 className="text-3xl md:text-4xl font-pacifico text-gradient-cute mb-8 drop-shadow-lg">Just wanted you to know...</h2>
        </div>
        
        <Card className="bg-white/90 backdrop-blur-md border-4 border-cute-pink/30 shadow-cute rounded-[2rem]">
          <CardContent className="p-8 md:p-12">
            <div className="space-y-6 text-xl md:text-2xl font-quicksand text-foreground leading-relaxed">
              <p>
                This entire website was coded with love, just for you, Reign. 
                Every animation, every color, every word - all chosen to make you smile 
                the way you have made me smile countless times, pook. 💕
              </p>
              <p>
                You are as cute as a baby dino, and twice as special, boo. 🦕✨
              </p>
            </div>
            <div className="flex justify-center items-center gap-6 text-5xl my-8">
              <span className="animate-float">🦕</span>
              <Heart className="text-cute-pink animate-pulse-soft" size={60} fill="currentColor" />
              <span className="animate-float" style={{animationDelay: '0.5s'}}>🦖</span>
              <Sparkles className="text-cute-yellow animate-sparkle" size={50} />
            </div>
            <div className="text-2xl font-pacifico text-gradient-cute">
              Made with endless love by your boo Edwin 💖
            </div>
            <div className="mt-6 text-lg text-foreground/60 bg-cute-pink/10 rounded-full px-6 py-3 inline-block">
              (I hope this made you cry happy tears! 🥺💕)
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-10">
          <CuteButton onClick={() => setCurrentSection(0)}>
            Experience This Beautiful Journey Again 🦕🔄
          </CuteButton>
        </div>
      </div>
    </div>
  );
};

export default Index;
