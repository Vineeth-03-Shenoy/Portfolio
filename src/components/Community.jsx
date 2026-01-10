import { useState, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const Community = () => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Mouse tracking for spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  // Floating animation keyframes
  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="community" className="py-20 bg-gradient-to-b from-background via-card/30 to-background relative z-10 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span 
            className="text-primary text-sm font-medium uppercase tracking-wider"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Open Source
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4 mt-2">
            Community Contribution
          </h2>
          <p className="text-textSecondary max-w-2xl mx-auto text-base sm:text-lg">
            Actively contributing to the UiPath Community, sharing knowledge and helping fellow developers.
          </p>
        </motion.div>

        {/* Analytics Card */}
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Animated border gradient */}
          <motion.div 
            className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-secondary to-primary opacity-75 blur-sm"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: '200% 200%' }}
          />
          
          {/* Card container */}
          <motion.div 
            className="relative bg-card/95 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10"
            animate={floatAnimation}
          >
            {/* Spotlight effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: isHovered 
                  ? `radial-gradient(600px circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(100, 255, 218, 0.1), transparent 40%)`
                  : 'none'
              }}
            />

            {/* Image container */}
            <div className="p-4 sm:p-6 lg:p-8">
              <motion.div
                className="relative overflow-hidden rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full z-10"
                  animate={isHovered ? { translateX: '200%' } : {}}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
                
                <img 
                  src="/images/v_roboto_v.png" 
                  alt="UiPath Community Analytics - V_Roboto_V" 
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </motion.div>
              
              {/* CTA Button */}
              <motion.div 
                className="mt-6 sm:mt-8 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href="https://forum.uipath.com/u/v_roboto_v/summary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-background font-bold rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    🤖
                  </motion.span>
                  Visit My Forum Profile
                  <motion.svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </motion.a>
              </motion.div>
            </div>

            {/* Stats highlights */}
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {[
                { label: "Solutions Given", value: "71", icon: "💡" },
                { label: "Replies Posted", value: "444", icon: "💬" },
                { label: "Likes Received", value: "253", icon: "❤️" },
                { label: "Academy Courses", value: "93", icon: "🎓" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-background/50 rounded-xl p-4 text-center border border-white/5 hover:border-primary/30 transition-colors"
                  whileHover={{ y: -5, backgroundColor: 'rgba(100, 255, 218, 0.05)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <motion.span 
                    className="text-2xl block mb-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {stat.icon}
                  </motion.span>
                  <span className="text-2xl sm:text-3xl font-bold text-primary block">{stat.value}</span>
                  <span className="text-xs sm:text-sm text-textSecondary">{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
