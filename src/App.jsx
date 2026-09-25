import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import Services from './components/Services';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

export default function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight || 1)) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="font-body text-ink antialiased">
      <div
        className="fixed top-0 left-0 h-[3px] bg-emerald z-[60] transition-[width]"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar />

      <main>
        <Hero />
        <TechMarquee />
        {/* <Services /> */}
        <Projects onSelect={setActiveProject} />
        {/* <Experience /> */}
        <Skills />
        <Education />
        <Contact />
      </main>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
}
