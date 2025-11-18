'use client';

import React, { useEffect, useState } from 'react';


export default function ParticleBackground() {
  const [particleOneStyle, setParticleOneStyle] = useState({});
  const [particleTwoStyle, setParticleTwoStyle] = useState({});


  useEffect(() => {
    const durationOne = Math.random() * 20 + 20; 
    const durationTwo = Math.random() * 20 + 25; 
    const delayTwo = durationTwo * -0.5;

    setParticleOneStyle({
      transform: `translate(0px, 0px) scale(1)`, 
      animationDuration: `${durationOne}s`,
    });

    setParticleTwoStyle({
      transform: `translate(0px, 0px) scale(1)`, 
      animationDuration: `${durationTwo}s`,
      animationDelay: `${delayTwo}s`,
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl opacity-50"
        style={particleOneStyle}
      ></div>

      <div
        className="absolute bottom-[-10%] right-[-10%] w-96 h-96 rounded-full bg-pink-500/20 blur-3xl opacity-50"
        style={particleTwoStyle}
      ></div>
      
    </div>
  );
}