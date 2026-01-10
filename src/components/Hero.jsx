import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-secondary font-medium text-lg mb-4">Software Engineer - Agentic AI CoE</h2>
            <h1 className="text-5xl sm:text-7xl font-bold text-textPrimary mb-6 tracking-tight">
              Hi, I'm <span className="text-primary">Vineeth</span>
              <br />
              Shenoy P
            </h1>
            <p className="text-textSecondary text-lg max-w-lg mb-8 leading-relaxed">
              Software Engineer at Novigo Solutions specializing in Robotic Process Automation (RPA) and Agentic Automation. Experienced in designing scalable, AI-driven automation solutions.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex gap-4"
            >
              <a 
                href="#projects" 
                className="px-8 py-3 bg-transparent border border-primary text-primary hover:bg-primary/10 rounded-md transition-all duration-300 font-medium"
              >
                View Work
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 bg-primary text-background hover:bg-primary/90 rounded-md transition-all duration-300 font-medium"
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
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 border-2 border-secondary/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-card bg-card/50 backdrop-blur-sm z-10">
                 {/* Placeholder for user image */}
                 <img 
                    src="images/user.jpg" 
                    alt="Vineeth Shenoy P" 
                    className="w-full h-full object-cover opacity-90"
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
