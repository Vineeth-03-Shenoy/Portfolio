import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      title: "UiPath Certified Professional - Agentic Automation Associate",
      issuer: "UiPath",
      image: "/images/UiAAA_Badge.png",
      link: "https://credentials.uipath.com/166d8218-f3a2-4b24-bf20-fa4a6aa7e1dc#acc.kdfvOHhW",
      date: "Aug 2025 – Aug 2028"
    },
    {
      title: "UiPath Certified Professional - Automation Developer Professional",
      issuer: "UiPath",
      image: "/images/UIADP_Badge.png", 
      link: "https://credentials.uipath.com/6d7cc1c5-5d55-42cc-9100-8ac5043810b0",
      date: "May 2025 – May 2028"
    },
    {
      title: "UiPath Certified Professional - Specialized AI Associate",
      issuer: "UiPath",
      image: "/images/UISAIA_Badge.png", 
      link: "https://credentials.uipath.com/2e724b65-6db2-440f-a4c1-bb4c5b7a71a9",
      date: "May 2025 – May 2028"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <section id="certifications" className="py-20 bg-background/50 relative z-10">
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
            Credentials
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4 mt-2">Certifications</h2>
          <p className="text-textSecondary max-w-2xl mx-auto text-base sm:text-lg">
            Professional certifications in Automation and AI.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certifications.map((cert, index) => (
            <CertCard key={index} cert={cert} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const CertCard = ({ cert, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="bg-card rounded-xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 group relative"
    >
      {/* Shine effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full"
        animate={isHovered ? { translateX: '200%' } : { translateX: '-100%' }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      
      <div className="h-44 sm:h-48 overflow-hidden bg-white p-4 relative flex items-center justify-center">
        {cert.image ? (
          <motion.img 
            src={cert.image} 
            alt={cert.title} 
            className="w-full h-full object-contain"
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        ) : (
          <div className="text-6xl">🏆</div>
        )}
        
        {/* Overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a 
            href={cert.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 bg-primary text-background font-bold rounded-full hover:bg-primary/90 transition-colors"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            View Credential
          </motion.a>
        </motion.div>
      </div>
      
      <div className="p-5 sm:p-6 text-center">
        <h3 className="text-base sm:text-lg font-bold text-textPrimary mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
          {cert.title}
        </h3>
        <motion.p 
          className="text-primary text-sm font-medium mb-2"
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
        >
          {cert.issuer}
        </motion.p>
        <p className="text-textSecondary text-xs">{cert.date}</p>
      </div>
    </motion.div>
  );
};

export default Certifications;
