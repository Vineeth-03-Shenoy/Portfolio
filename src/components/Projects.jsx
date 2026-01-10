import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Agentic Consultation Management",
      description: "An end-to-end Agentic Consultation Management process presented at GITEX 2025. Showcased UiPath's Agentic Capabilities to streamline the appointment booking-to-consultation process. This solution garnered health care client prospects for Novigo Solutions.",
      image: "images/Consultaion_Solution_Architecture.png",
      link: "https://forum.uipath.com/t/agentic-consultation-management-process/2878370",
      tags: ["UiPath Agents", "Agentic AI", "Healthcare", "GenAI"],
    },
    {
      title: "GenAI Email Management System",
      description: "Runner-up project at Novigo GenAI Hackathon. A GenAI-based email management system built using MERN stack, integrated with Outlook, Graph API, and OpenAI API (GPT-4o-mini). Automated email classification and response generation.",
      image: null, 
      link: null, 
      tags: ["MERN Stack", "OpenAI API", "Graph API", "Hackathon"],
    },
    {
      title: "Food Rendezvous",
      description: "My Food Blogging Website platform for sharing culinary experiences and recipes.",
      image: null,
      link: null,
      tags: ["Web Development", "Blogging", "React"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-textPrimary mb-4">My Projects</h2>
          <p className="text-textSecondary max-w-2xl mx-auto">
             Showcasing expertise in Agentic AI, GenAI, and Web Development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden bg-gray-800 relative">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl bg-gradient-to-br from-card to-background">
                    {index === 0 ? '🤖' : index === 1 ? '📧' : '🍲'}
                  </div>
                )}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-primary text-background font-bold rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-textPrimary mb-2">{project.title}</h3>
                <p className="text-textSecondary text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
