"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Twitter, Instagram } from 'lucide-react';

const connections = [
  {
    name: 'LinkedIn',
    username: 'Prayas Bhatt',
    link: 'https://www.linkedin.com/in/prayasbhatt/',
    icon: Linkedin,
    color: 'hover:text-blue-500',
  },
  {
    name: 'GitHub',
    username: 'PrayasBhatt',
    link: 'https://github.com/PrayasBhatt',
    icon: Github,
    color: 'hover:text-gray-800',
  },
  {
    name: 'Instagram',
    username: 'bhatt.prayas',
    link: 'https://www.instagram.com/bhatt.prayas/',
    icon: Instagram,
    color: 'hover:text-emerald-500',
  },
  {
    name: 'Email',
    username: 'bhattprayas40@gmail.com',
    link: 'mailto:bhattprayas40@gmail.com',
    icon: Mail,
    color: 'hover:text-rose-500',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const ConnectWithMe = () => {
  return (
    <div id='contact' className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-transparent">

      <motion.div
        className="w-full max-w-md p-6 sm:p-8 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-2xl transition-all duration-300 transform hover:scale-[1.01]"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >

        <div className="text-center mb-8">
          <motion.h1
            className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Connect With Me
          </motion.h1>
        </div>

        <motion.div 
          className="space-y-4"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {connections.map((connection, index) => {
            const IconComponent = connection.icon;
            return (
              <motion.a
                key={index}
                variants={itemVariants}
                href={connection.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl transition-colors duration-200 cursor-pointer bg-black/10 hover:bg-black/20 group hover:shadow-lg hover:shadow-white/5"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-4">
                  <IconComponent className={`w-6 h-6 text-gray-400 group-hover:text-white ${connection.color}`} />
                  <span className="text-lg font-semibold text-white">{connection.name}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors duration-200">
                    {connection.username}
                  </span>
                  <svg 
                    className={`w-5 h-5 text-gray-400 group-hover:text-white transform transition-transform duration-200 group-hover:translate-x-1 ${connection.color}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ConnectWithMe;
