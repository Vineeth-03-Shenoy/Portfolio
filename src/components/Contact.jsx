/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    Message: '',
    website: '' // honeypot - left empty by real users, filled by bots
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus('Message Sent Successfully!');
      setFormData({ Name: '', email: '', Message: '', website: '' });
      setTimeout(() => setStatus(''), 5000);
    } catch (error) {
      console.error('Error!', error.message);
      setStatus('Error sending message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-background text-textPrimary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
            <div className="space-y-6">
              <p className="flex items-center text-lg text-textSecondary hover:text-primary transition-colors duration-300">
                <i className="fa-solid fa-envelope mr-4 text-primary"></i>
                vineethshenoy22@gmail.com
              </p>
              <p className="flex items-center text-lg text-textSecondary hover:text-primary transition-colors duration-300">
                <i className="fa-solid fa-phone mr-4 text-primary"></i>
                +91 9449559975
              </p>
              
              <div className="flex space-x-6 pt-4">
                <a href="https://www.instagram.com/vineeth_03_shenoy/" target="_blank" rel="noopener noreferrer" className="text-2xl text-textSecondary hover:text-primary transition-colors duration-300">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://github.com/Vineeth-03-Shenoy" target="_blank" rel="noopener noreferrer" className="text-2xl text-textSecondary hover:text-primary transition-colors duration-300">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/vineeth-shenoy-p/" target="_blank" rel="noopener noreferrer" className="text-2xl text-textSecondary hover:text-primary transition-colors duration-300">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </div>

              <div className="pt-8">
                <a href="/Vineeth_Shenoy_P.pdf" download className="inline-block px-8 py-3 bg-card border border-primary text-primary hover:bg-primary hover:text-background rounded-md transition-all duration-300 font-medium">
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
                aria-hidden="true"
                className="absolute -left-[9999px] w-px h-px opacity-0"
              />
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                placeholder="Your Name" 
                required 
                className="w-full p-4 bg-card border border-white/10 rounded-md text-textPrimary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              />
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email" 
                required 
                className="w-full p-4 bg-card border border-white/10 rounded-md text-textPrimary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              />
              <textarea 
                name="Message" 
                rows="6" 
                value={formData.Message}
                onChange={handleChange}
                placeholder="Your Message" 
                required
                className="w-full p-4 bg-card border border-white/10 rounded-md text-textPrimary focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
              ></textarea>
              <button 
                type="submit" 
                className="w-full px-8 py-4 bg-primary text-background font-bold rounded-md hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1"
              >
                Submit
              </button>
            </form>
            {status && <span className="block mt-4 text-primary font-medium">{status}</span>}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
