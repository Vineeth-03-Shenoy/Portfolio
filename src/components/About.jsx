import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { aboutConfig } from '../data/about';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const tabContent = {
    skills: aboutConfig.skills,
    experience: aboutConfig.experience,
    education: aboutConfig.education,
  };

  return (
    <section id="about" className="py-20 bg-background text-textPrimary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-72 h-80 sm:w-96 sm:h-[450px] bg-card rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition duration-500" style={{ backgroundImage: `url('${aboutConfig.profileImage}')` }}></div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-textPrimary">About Me</h2>
            <p className="text-textSecondary text-lg mb-8 leading-relaxed">
              {aboutConfig.bio}
            </p>

            {/* Tabs */}
            <div className="flex space-x-8 mb-8 border-b border-white/10 pb-2">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative pb-2 text-lg font-medium transition-colors duration-300 capitalize ${
                    activeTab === tab ? 'text-primary' : 'text-textSecondary hover:text-textPrimary'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <ul className="space-y-6">
                    {tabContent[activeTab].map((item, index) => (
                      <li key={index} className="group">
                        <span className="text-primary font-bold text-lg block mb-1 group-hover:translate-x-1 transition-transform duration-300 inline-block">
                          {item.title}
                        </span>
                        {item.subtitle && (
                           <span className="block text-textSecondary text-sm mb-1">{item.subtitle}</span>
                        )}
                        {item.date && (
                           <span className="block text-textSecondary text-xs italic mb-2">{item.date}</span>
                        )}
                        {item.desc && (
                          <p className="text-textSecondary group-hover:text-textPrimary transition-colors duration-300">
                            {item.desc}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
