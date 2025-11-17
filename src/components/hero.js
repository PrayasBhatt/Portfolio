'use client'; 

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion'; 

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 10 } },
  };

  const imageVariants = {
    hidden: { x: '100%', opacity: 0 },
    show: { x: '0%', opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { delay: 0.6, duration: 0.5 } },
  };

  const splitText = (text) => {
    return text.split(' ').map((word, index) => (
      <span key={index} className="inline-block overflow-hidden">
        <motion.span variants={itemVariants} className="inline-block">
          {word}&nbsp;
        </motion.span>
      </span>
    ));
  };

  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center justify-center p-4 overflow-hidden bg-gray-950/80 z-20">

      <div className="relative max-w-6xl w-full mx-auto text-white py-20 flex flex-col md:flex-row items-center justify-between gap-12">

        <motion.div
          className="md:w-1/2 lg:w-3/5 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold mb-4 leading-tight">
            <motion.span className="inline-block text-cyan-400" variants={containerVariants}>
              {splitText('Full Stack')}
            </motion.span>
            <br />
            <motion.span className="inline-block text-fuchsia-400" variants={containerVariants}>
              {splitText('Developer')}
            </motion.span>
          </h1>

          <motion.h2
            className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6"
            variants={itemVariants}
          >
            Cheif Operating Officer - Tech Grukha Digital Services
          </motion.h2>

          <motion.p
            className="max-w-xl text-lg text-gray-400 mb-10 mx-auto md:mx-0"
            variants={itemVariants}
          >
            Building responsive, performant, and delightful web applications from idea to deployment.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-10 justify-center md:justify-start"
            variants={buttonVariants} 
          >

            <Link href="#portfolio">
              <button className="flex items-center justify-center w-full sm:w-auto px-8 py-3 font-semibold rounded-lg text-white bg-gradient-to-r from-cyan-500 to-fuchsia-500 hover:from-cyan-400 hover:to-fuchsia-400 transition-all shadow-lg shadow-fuchsia-500/30">
                View Work <ArrowUpRight className="w-5 h-5 ml-2" />
              </button>
            </Link>

            <Link href="#contact">
              <button className="flex items-center justify-center w-full sm:w-auto px-8 py-3 font-semibold rounded-lg text-fuchsia-400 bg-gray-800 border border-fuchsia-500/50 hover:bg-fuchsia-900/40 transition-colors">
                Connect
              </button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="md:w-1/2 lg:w-2/5 flex justify-center p-4"
          variants={imageVariants}
          initial="hidden"
          animate="show"
        >
          <Image
            src="/codingperson.jpg"
            alt="Developer Working"
            width={500}
            height={500}
            className="rounded-xl shadow-2xl object-cover"
            priority
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;