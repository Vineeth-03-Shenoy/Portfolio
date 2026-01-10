import { motion } from 'framer-motion';
import Typewriter from './Typewriter';

const Hero = () => {
  const roles = [
    "Agentic AI Developer",
    "RPA Specialist", 
    "UiPath Expert",
    "Automation Architect"
  ];

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative z-10">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4"
            >
              <span className="text-primary text-sm font-medium">Software Engineer - Agentic AI CoE</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-textPrimary mb-4 tracking-tight">
              Hi, I'm <span className="text-primary">Vineeth</span>
              <br />
              Shenoy P
            </h1>
            
            <div className="text-xl sm:text-2xl text-secondary mb-6 h-8">
              <Typewriter texts={roles} speed={80} deleteSpeed={40} delayBetween={2000} />
            </div>
            
            <p className="text-textSecondary text-base sm:text-lg max-w-lg mb-8 leading-relaxed mx-auto md:mx-0">
              Software Engineer at Novigo Solutions specializing in Robotic Process Automation (RPA) and Agentic Automation. Experienced in designing scalable, AI-driven automation solutions.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <a 
                href="#projects"
                onClick={(e) => handleScroll(e, 'projects')}
                className="group px-8 py-3 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-background rounded-lg transition-all duration-300 font-medium relative overflow-hidden"
              >
                <span className="relative z-10">View Work</span>
                <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
              <a 
                href="#contact"
                onClick={(e) => handleScroll(e, 'contact')}
                className="group px-8 py-3 bg-primary text-background hover:bg-primary/90 rounded-lg transition-all duration-300 font-medium transform hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/25"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
              {/* Animated rings */}
              <motion.div 
                className="absolute inset-0 border-2 border-primary/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-4 border-2 border-secondary/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-8 border border-primary/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Floating dots */}
              <motion.div
                className="absolute -top-2 left-1/2 w-3 h-3 bg-primary rounded-full"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-1/4 -right-2 w-2 h-2 bg-secondary rounded-full"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.div
                className="absolute bottom-1/4 -left-2 w-2 h-2 bg-primary rounded-full"
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              
              {/* Profile image */}
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-card bg-card/50 backdrop-blur-sm z-10">
                <img 
                  src="/images/profile.png" 
                  alt="Vineeth Shenoy P" 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
