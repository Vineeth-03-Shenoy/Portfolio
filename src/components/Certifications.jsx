import { motion } from 'framer-motion';
import { certifications } from '../data/certifications';

const CertCard = ({ cert, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    viewport={{ once: true }}
    whileHover={{ y: -6, transition: { duration: 0.25 } }}
    className="group relative bg-card rounded-2xl overflow-hidden border border-white/10 hover:border-primary/40 transition-colors duration-300 shadow-lg hover:shadow-primary/10 hover:shadow-2xl"
  >
    {/* Animated glow border */}
    <motion.div
      className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{
        background: "linear-gradient(135deg, rgba(100,255,218,0.3), rgba(100,255,218,0.05), rgba(100,255,218,0.2))",
        filter: "blur(1px)"
      }}
    />

    {/* Badge area */}
    <div className="relative bg-white p-2 flex items-center justify-center h-44 sm:h-52 overflow-hidden">
      {cert.image ? (
        <motion.img
          src={cert.image}
          alt={cert.title}
          className="w-full h-full object-contain"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
      ) : (
        <div className="text-7xl select-none">🏆</div>
      )}

      {/* Verify overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-5"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        {cert.link ? (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-primary text-background text-sm font-bold rounded-full hover:bg-primary/90 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            Verify Credential
          </a>
        ) : (
          <span className="px-5 py-2 bg-white/20 text-white text-sm font-medium rounded-full">
            Coming Soon
          </span>
        )}
      </motion.div>
    </div>

    {/* Info area */}
    <div className="px-5 py-4 sm:px-6 sm:py-5">
      <h3 className="text-sm sm:text-base font-bold text-textPrimary group-hover:text-primary transition-colors duration-300 leading-snug line-clamp-2 mb-2">
        {cert.title}
      </h3>
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-primary/80">{cert.issuer}</span>
        <span className="text-xs text-textSecondary">{cert.date}</span>
      </div>
    </div>
  </motion.div>
);

const Certifications = () => (
  <section id="certifications" className="py-20 bg-background/50 relative z-10">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
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
          Credentials
        </motion.span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-textPrimary mb-4 mt-2">
          Certifications
        </h2>
        <p className="text-textSecondary max-w-2xl mx-auto text-base sm:text-lg">
          4 UiPath professional certifications spanning Agentic AI, Automation, and Specialized AI.
        </p>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {certifications.map((cert, index) => (
          <CertCard key={index} cert={cert} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
