import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main className="bg-background overflow-hidden">
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
};

export default Home;
