"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const tabData = {
  PROJECTS: {
    label: "Projects",
    icon: "fas fa-code",
    count: 1,
  },
  CERTIFICATES: {
    label: "Certificates",
    icon: "fas fa-certificate",
    count: 12,
  },
  TECH_STACK: {
    label: "Tech Stack",
    icon: "fas fa-tools",
    count: 10,
  },
};

const projectItems = [
  {
    id: 1,
    title: "GuffGPT",
    description:
      "I worked as a web developer and contributed to GuffGPT, a Nepali AI chatbot designed to provide conversational AI assistance in the Nepali language.",
    color: "text-purple-300",
    imageUrl: "/projects/guffgpt.jpg",
    liveDemoUrl: "https://guffgpt.com/",
    detailsUrl: "https://github.com/GuffGPT/repo",
  },
];

const certificateItems = [
  { id: 1, name: "Best Student In Coding - Deerwalk Sifal School", imageUrl: "/Certificates/bsic.jpg" },
  { id: 2, name: "Internship - Deerwalk Sifal School", imageUrl: "/Certificates/internship.jpg" },
  { id: 3, name: "Braimy College Ambassador - Braimy", imageUrl: "/Certificates/Braimy College Ambassador.jpg" },
  { id: 4, name: "WIX for Web Designing", imageUrl: "/Certificates/WIX for Web Design.jpg" },
  { id: 5, name: "Fundamentals for Graphic Designing", imageUrl: "/Certificates/Fundamental Of Graphic Design.jpg" },
  { id: 6, name: "Web Design - Broadway Infosys", imageUrl: "/Certificates/WEB DESIGN.jpg" },
  { id: 7, name: "Second Position SET Exhibition", imageUrl: "/Certificates/SET.jpg" },
  { id: 8, name: "First Position GSS QUIZ CONTEST", imageUrl: "/Certificates/GSS 1st.jpg" },
  { id: 9, name: "Second Position GSS Inter School Science Exhibition", imageUrl: "/Certificates/GSS 2nd.jpg" },
  { id: 10, name: "Codewalk 2.0", imageUrl: "/Certificates/Codewalk.jpg" },
  { id: 11, name: "AI for Starters - Sunway College", imageUrl: "/Certificates/AI for Starters.jpg" },
  { id: 12, name: "COAS Grand Science Exhibition", imageUrl: "/Certificates/COAS.jpg" },
];

const techStackItems = [
  { name: "React", imageUrl: "/techstack/react.png", color: "text-cyan-400" },
  { name: "Next.js", imageUrl: "/techstack/next.png", color: "text-white" },
  { name: "Tailwind ", imageUrl: "/techstack/tailwind.png", color: "text-sky-400" },
  { name: "HTML", imageUrl: "/techstack/html.png", color: "text-blue-600" },
  { name: "CSS", imageUrl: "/techstack/css.png", color: "text-green-600" },
  { name: "JS", imageUrl: "/techstack/js.png", color: "text-indigo-400" },
  { name: "Python", imageUrl: "/techstack/python.png", color: "text-blue-500" },
  { name: "Java", imageUrl: "/techstack/java.svg", color: "text-orange-500" },
  { name: "Figma", imageUrl: "/techstack/figma.png", color: "text-pink-500" },
];


const staggerContainer = {
  hidden: { opacity: 0, y: 10 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      delayChildren: delay,
      when: "beforeChildren",
    },
  }),
};

const itemVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.995 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.48, ease: [0.2, 0.9, 0.3, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.28 } },
};

const hoverLift = { scale: 1.02 };

const tabActive = { scale: 1.02 };

const contentWrapper = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.28 } },
};

const sectionVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};


const ProjectCard = ({ title, description, color, imageUrl, index, liveDemoUrl, detailsUrl }) => {
  return (
    <motion.div
      id="portfolio"
      variants={itemVariant}
      initial="hidden"
      whileHover={hoverLift}
      className="p-6 rounded-2xl bg-gray-800/60 border border-white/10 shadow-xl transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
      style={{ transformOrigin: "center" }}
    >
      <div className="h-48 mb-4 rounded-xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700">
        <img src={imageUrl} alt={`${title} Project`} className="w-full h-full object-cover opacity-80" />
      </div>

      <h3 className={`text-xl font-bold mb-2 ${color}`}>{title}</h3>
      <p className="text-sm text-gray-400 mb-4">{description}</p>

      <div className="flex justify-between items-center text-sm">
        <a
          href={liveDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-400 hover:text-indigo-300 transition duration-300 rounded-full py-1 px-3"
        >
          Live Demo
        </a>

        <a
          href={detailsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-white bg-indigo-600/70 hover:bg-indigo-600 transition duration-300 px-4 py-2 rounded-full shadow-md"
        >
          Github <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </motion.div>
  );
};

const CertificateCard = ({ cert, index }) => {
  return (
    <motion.div
      variants={itemVariant}
      className="p-4 rounded-2xl bg-gray-800/60 border border-white/10 shadow-lg flex flex-col items-center text-center transition-all duration-300 hover:bg-gray-700/60"
    >
      <div className="h-32 w-full mb-3 rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center border border-purple-500/50">
        <img src={cert.imageUrl} alt={`${cert.name} Certificate`} className="w-full h-full object-contain" />
      </div>

      <p className="font-semibold text-white">{cert.name}</p>
    </motion.div>
  );
};

const TechItem = ({ tech, index }) => {
  return (
    <motion.div
      variants={itemVariant}
      className="flex flex-col items-center w-28 p-4 rounded-xl bg-gray-800/60 border border-white/10 shadow-lg transition-all duration-300 hover:scale-105 hover:border-purple-500"
    >
      <div className="w-16 h-16 mb-2 rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
        <img src={tech.imageUrl} alt={`${tech.name} logo`} className="w-full h-full object-contain p-1" />
      </div>

      <span className="text-sm font-medium text-gray-200 text-center">{tech.name}</span>
    </motion.div>
  );
};


const App = () => {
  const [activeTab, setActiveTab] = useState("PROJECTS");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleTabClick = (tabKey) => {
    if (activeTab === tabKey) return;
    setActiveTab(tabKey);
    if (tabKey !== "PROJECTS") {
      setShowAllProjects(false);
    }
  };

  const renderProjects = () => {
    const projectsToShow = showAllProjects ? projectItems : projectItems.slice(0, 3);
    const shouldShowButton = projectItems.length > 3;

    return (
      <>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          custom={0.06}
          className="grid gap-8 lg:grid-cols-3 md:grid-cols-2"
        >
          {projectsToShow.map((card, index) => (
            <ProjectCard key={card.id} {...card} index={index} />
          ))}
        </motion.div>

        {shouldShowButton && (
          <div className="text-center mt-10">
            <motion.button
              onClick={() => setShowAllProjects(!showAllProjects)}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-indigo-600/70 hover:bg-indigo-600 rounded-full font-semibold transition duration-300 shadow-lg text-white"
            >
              {showAllProjects ? "Show Less Projects" : "Show More Projects"}
              <i className={`fas ${showAllProjects ? "fa-angle-up" : "fa-angle-down"} ml-3`}></i>
            </motion.button>
          </div>
        )}
      </>
    );
  };

  const renderCertificates = () => {
    return (
      <motion.div variants={staggerContainer} initial="hidden" animate="show" custom={0.04} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificateItems.map((cert, index) => (
          <CertificateCard key={cert.id} cert={cert} index={index} />
        ))}
      </motion.div>
    );
  };

  const renderTechStack = () => {
    return (
      <motion.div variants={staggerContainer} initial="hidden" animate="show" custom={0.03} className="flex flex-wrap gap-6 justify-center">
        {techStackItems.map((tech, index) => (
          <TechItem key={index} tech={tech} index={index} />
        ))}
      </motion.div>
    );
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 px-4 md:px-8 text-white showcase-section min-h-screen"
      variants={sectionVariant}
      initial="hidden"
      animate={isLoaded ? "show" : "hidden"}
      exit="hidden"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        WebkitBackdropFilter: "blur(5px)",
        backdropFilter: "blur(5px)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 mb-2">
            Portfolio Showcase
          </h1>
        </header>

        <div className="flex justify-between p-2 rounded-3xl max-w-5xl mx-auto shadow-2xl bg-gray-900/60 border border-white/10 mb-12 h-32">
          {Object.entries(tabData).map(([key, data]) => {
            const isActive = activeTab === key;
            return (
              <motion.button
                key={key}
                onClick={() => handleTabClick(key)}
                className="flex-1 p-1"
                whileTap={{ scale: 0.98 }}
                whileHover={isActive ? {} : { scale: 1.01 }}
                aria-pressed={isActive}
              >
                <motion.div
                  layout
                  transition={{ type: "spring", stiffness: 300, damping: 24 }}
                  className={`flex flex-col items-center justify-center h-full w-full py-4 rounded-2xl transition-all duration-300 ease-in-out ${
                    isActive ? "bg-indigo-900/60 text-white shadow-lg shadow-indigo-500/20" : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                  }`}
                >
                  <i className={`${data.icon} ${isActive ? "text-3xl mb-2 text-purple-400" : "text-xl mb-1"}`}></i>

                  <div className="flex items-center justify-center">
                    <span className={`text-base md:text-lg ${isActive ? "font-bold" : "font-medium"}`}>{data.label}</span>
                    <span className={`ml-2 text-sm ${isActive ? "text-gray-300" : "text-gray-500"}`}>({data.count})</span>
                  </div>
                </motion.div>
              </motion.button>
            );
          })}
        </div>

        <div className="p-4">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTab}
              variants={contentWrapper}
              initial="hidden"
              animate="show"
              exit="exit"
              className="w-full"
            >
              {activeTab === "PROJECTS" && (
                <motion.div initial="hidden" animate="show" exit="exit" variants={staggerContainer} custom={0.06}>
                  {renderProjects()}
                </motion.div>
              )}

              {activeTab === "CERTIFICATES" && (
                <motion.div initial="hidden" animate="show" exit="exit" variants={staggerContainer} custom={0.04}>
                  {renderCertificates()}
                </motion.div>
              )}

              {activeTab === "TECH_STACK" && (
                <motion.div initial="hidden" animate="show" exit="exit" variants={staggerContainer} custom={0.03}>
                  {renderTechStack()}
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default App;
