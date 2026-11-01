import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { aboutConfig } from '../data/about';
import { logos } from '../data/logos';

// Deterministic pseudo-random in [0,1), seeded from a string so each logo
// gets a stable position/motion across re-renders instead of jumping around
const seededRandom = (str, salt = 0) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i) + salt) >>> 0;
  }
  const x = Math.sin(hash) * 10000;
  return x - Math.floor(x);
};

// Fixed 3-column grid, rows grow automatically as logos are added - each
// logo owns its own cell as a base position. Base size is intentionally
// small so that per-logo `scale` multipliers (see data/logos.js) have
// headroom without blowing out the layout; MAX_SIZE_CAP guards the rest.
const GRID_COLS = 3;
const MIN_SIZE = 44;
const MAX_SIZE = 68;
const MAX_SIZE_CAP = 190;

const GridLogo = ({ logo, index, gridRows }) => {
  const col = index % GRID_COLS;
  const row = Math.floor(index / GRID_COLS);
  const centerCol = (GRID_COLS - 1) / 2;
  const centerRow = (gridRows - 1) / 2;
  const maxDist = Math.sqrt(centerCol ** 2 + centerRow ** 2);
  const dist = Math.sqrt((col - centerCol) ** 2 + (row - centerRow) ** 2);
  const baseSize = MAX_SIZE - (dist / maxDist) * (MAX_SIZE - MIN_SIZE);
  const size = Math.min(baseSize * (logo.scale || 1), MAX_SIZE_CAP);

  const amplitude = 5 + seededRandom(logo.name, 1) * 6; // 5-11px, gentle bob
  const duration = 3 + seededRandom(logo.name, 2) * 3; // 3-6s
  const delay = seededRandom(logo.name, 3) * 2;

  return (
    <motion.div
      className="flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <motion.img
        src={logo.image}
        alt={logo.name}
        title={logo.name}
        style={{ width: size, height: size, filter: logo.invertOnDark ? 'invert(1) brightness(1.3)' : undefined }}
        className="object-contain cursor-default"
        animate={{ y: [0, -amplitude, 0] }}
        transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.15 }}
      />
    </motion.div>
  );
};

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const tabContent = {
    skills: aboutConfig.skills,
    education: aboutConfig.education,
  };

  return (
    <section id="about" className="py-20 bg-background text-textPrimary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Skill Logos Section - hidden on mobile, scattered across full column on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="hidden md:flex md:flex-col h-full min-h-[450px] overflow-hidden justify-center"
          >
            <span className="text-center text-textSecondary text-xs font-medium uppercase tracking-widest mb-4">
              Core Technologies
            </span>

            <div
              className="grid grid-cols-3 place-items-center gap-x-2 gap-y-4"
              style={{ gridTemplateRows: `repeat(${Math.ceil(logos.length / 3)}, auto)` }}
            >
              {logos.map((logo, index) => (
                <GridLogo
                  key={logo.name}
                  logo={logo}
                  index={index}
                  gridRows={Math.ceil(logos.length / 3)}
                />
              ))}
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
              {['skills', 'experience', 'education'].map((tab) => (
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
                  {activeTab === 'experience' ? (
                    <div className="space-y-8">
                      {aboutConfig.experience.map((company, cIndex) => (
                        <div key={cIndex}>
                          <span className="text-primary font-bold text-lg block mb-1">
                            {company.company}
                          </span>
                          <span className="block text-textSecondary text-sm mb-1">
                            {company.type}{company.duration ? ` · ${company.duration}` : ''}
                          </span>
                          {company.location && (
                            <span className="block text-textSecondary text-xs italic mb-4">{company.location}</span>
                          )}

                          <div className="relative border-l border-white/10 pl-6 space-y-6">
                            {company.roles.map((role, rIndex) => (
                              <div key={rIndex} className="relative group">
                                <span className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary" />
                                <span className="text-textPrimary font-semibold text-base block group-hover:translate-x-1 transition-transform duration-300">
                                  {role.title}
                                </span>
                                <span className="block text-textSecondary text-xs italic mb-2">
                                  {role.date}{role.location ? ` · ${role.location}` : ''}
                                </span>
                                <ul className="list-disc list-outside ml-4 space-y-1.5">
                                  {role.bullets.map((bullet, bIndex) => (
                                    <li key={bIndex} className="text-textSecondary text-sm group-hover:text-textPrimary transition-colors duration-300">
                                      {bullet}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
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
                  )}
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
