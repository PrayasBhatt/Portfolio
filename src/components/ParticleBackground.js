"use client"; 

import React from 'react';


const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      
      <div 
        className="absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full 
                   bg-cyan-500 opacity-20 blur-[150px] animate-blob-one"
        style={{ transform: 'translate(-50%, -50%)', animationDuration: '25s' }}
      ></div>

      <div 
        className="absolute bottom-[-10%] right-[-10%] w-96 h-96 rounded-full 
                   bg-fuchsia-500 opacity-20 blur-[150px] animate-blob-two"
        style={{ transform: 'translate(50%, 50%)', animationDuration: '30s', animationDelay: '-10s' }}
      ></div>

      <style jsx global>{`
        @keyframes blob-one {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          33% { transform: translate(50%, -30%) scale(1.1); }
          66% { transform: translate(-30%, 50%) scale(0.9); }
        }

        @keyframes blob-two {
          0%, 100% { transform: translate(50%, 50%) scale(1); }
          33% { transform: translate(-50%, 30%) scale(0.95); }
          66% { transform: translate(30%, -50%) scale(1.05); }
        }
        
        .animate-blob-one {
          animation: blob-one 25s infinite alternate ease-in-out;
        }

        .animate-blob-two {
          animation: blob-two 30s infinite alternate ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default ParticleBackground;