'use client'; 

import React from 'react';
import { useInView } from 'react-intersection-observer';

const AboutSection = () => {

  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.1,    
  });

  const primaryBg = 'transparent'; 
  const textPrimary = '#e0e0e0'; 
  const neonAccent1 = '#00ffff'; 
  const neonAccent2 = '#ff00ff'; 

  
  const contentStyle = {
    transition: 'opacity 1s ease-out 0.3s, transform 1s ease-out 0.3s', 
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
  };

  const lineStyle = {
    position: 'absolute',
    left: '0',
    bottom: '-5px',
    height: '3px',
    backgroundColor: neonAccent2, 
    boxShadow: `0 0 8px ${neonAccent2}`, 
    borderRadius: '2px',
    
    width: inView ? '100%' : '0%', 
    transition: 'width 0.8s ease-out', 
  };
  
  const headingStyle = {
    transition: 'opacity 0.6s ease-in',
    opacity: inView ? 1 : 0,
  };

  return (
    <section 
      id="about" 
      ref={ref} 
      style={{
        backgroundColor: primaryBg,
        color: textPrimary,
        padding: '100px 20px', 
        textAlign: 'center',
      }}
    >
      <div 
        style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
        }}
      >
        <h2 
          style={{
            fontSize: '3em',
            marginBottom: '20px',
            color: neonAccent1, 
            position: 'relative',
            display: 'inline-block',
            ...headingStyle, 
          }}
        >
          About Me
          <span 
            style={lineStyle}
          ></span>
        </h2>
        
        <p 
          style={{
            fontSize: '1.2em',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '20px auto 0 auto',
            color: '#c0c0c0', 
            ...contentStyle, 
          }}
        >
          Hello! I'm Prayas Bhatt, a passionate Full Stack Developer with a keen interest in building responsive, performant, and delightful web applications. From conceptualizing an idea to deploying the final product, I thrive on crafting seamless digital experiences. My journey in tech is driven by continuous learning and a desire to leverage cutting-edge technologies to solve real-world problems. When I'm not coding, you can find me exploring new tech trends, contributing to open-source projects, or diving into a good book. 
        </p>
      </div>
    </section>
  );
};

export default AboutSection;