import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Candi",
      description: "An AI-powered interview preparation assistant that analyzes your resume and job description to generate a comprehensive interview prep guide.",
      image: "/images/Candi_Logo.png",
      link: "https://github.com/Vineeth-03-Shenoy/Candi.git",
      tags: ["Interview Prep", "Gen AI", "Agentic AI", "Vibe Code with Brains"],
      icon: "🎯",
      status: "In Development"
    },
    {
      title: "Agentic Consultation Management",
      description: "An end-to-end Agentic Consultation Management process presented at GITEX 2025. Showcased UiPath's Agentic Capabilities to streamline the appointment booking-to-consultation process. This solution garnered health care client prospects for Novigo Solutions.",
      image: "/images/Consultaion_Solution_Architecture.png",
      link: "https://forum.uipath.com/t/agentic-consultation-management-process/2878370",
      tags: ["UiPath Agents", "Agentic AI", "Healthcare", "GenAI"],
      icon: "🤖"
    },
    {
      title: "GenAI Email Management System",
      description: "Runner-up project at Novigo GenAI Hackathon. A GenAI-based email management system built using MERN stack, integrated with Outlook, Graph API, and OpenAI API (GPT-4o-mini). Automated email classification and response generation.",
      image: null, 
      link: null, 
      tags: ["MERN Stack", "OpenAI API", "Graph API", "Hackathon"],
      icon: "📧",
      status: "Private Source Code"
    },
    {
      title: "Food Rendezvous",
      description: "My Food Blogging Website platform for sharing culinary experiences and recipes.",
      image: null,
      link: null,
      tags: ["Web Development", "Blogging", "React"],
      icon: "🍲",
      status: "Development Halted"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-20 bg-background relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-primary text-sm font-medium uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Portfolio
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4 mt-2">My Projects</h2>
          <p className="text-textSecondary max-w-2xl mx-auto text-base sm:text-lg">
            Showcasing expertise in Agentic AI, GenAI, and Web Development.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Separate component for 3D tilt effect
const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateX = (e.clientY - centerY) / 20;
    const rotateY = (centerX - e.clientX) / 20;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transformStyle: 'preserve-3d',
      }}
      className="bg-card rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 group"
    >
      {/* Glow effect */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`}
      />
      
      <div className="h-44 sm:h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 relative">
        {/* Development Status Badge */}
        {project.status && (
          <motion.div
            className="absolute top-3 right-3 z-20 px-3 py-1 bg-yellow-500/90 text-black text-xs font-bold rounded-full flex items-center gap-1.5"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.span
              className="w-2 h-2 bg-yellow-900 rounded-full"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            {project.status}
          </motion.div>
        )}
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl sm:text-6xl bg-gradient-to-br from-card via-background to-card">
            <motion.span
              animate={isHovered ? { scale: 1.2, rotate: [0, -10, 10, 0] } : { scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {project.icon}
            </motion.span>
          </div>
        )}
        
        {/* Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {project.link && (
            <motion.a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary text-background font-bold rounded-full hover:bg-primary/90 transition-colors"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              View Project
            </motion.a>
          )}
        </motion.div>
      </div>
      
      <div className="p-5 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold text-textPrimary mb-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-textSecondary text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <motion.span 
              key={tagIndex} 
              className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-md border border-primary/20"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(100, 255, 218, 0.2)' }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
