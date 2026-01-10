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

  return (
    <section id="certifications" className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-textPrimary mb-4">Certifications</h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
            Professional certifications in Automation and AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden bg-white p-4 relative flex items-center justify-center">
                {cert.image ? (
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                  />
                ) : (
                  <div className="text-6xl">
                      🏆
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-primary text-background font-bold rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"
                  >
                    View Credential
                  </a>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-textPrimary mb-2">{cert.title}</h3>
                <p className="text-primary text-sm font-medium mb-2">{cert.issuer}</p>
                <p className="text-textSecondary text-xs">{cert.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
