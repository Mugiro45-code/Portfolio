import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Particles from 'react-tsparticles';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectSection from "./components/project/ProjectSection";
import ProjectDetails from "./components/project/ProjectDetails";
import './components/styles/main.css';

const sections = [
  { Comp: About, id: "about" },
  { Comp: Skills, id: "skills" },
  { Comp: ProjectSection, id: "portfolio" },
  { Comp: Contact, id: "contact" }
];

function AnimatedSection({ children, id, custom, variants }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      id={id}
      className="glass-section"
      custom={custom}
      variants={variants}
      initial="hidden"
      animate={controls}
      whileHover="hover"
    >
      {children}
    </motion.section>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.98 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.9,
        type: 'spring',
        stiffness: 60,
      },
    }),
    hover: {
      scale: 1.025,
      boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <Particles
        options={{
          background: { color: '#f5f5f5' },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
              onClick: { enable: true, mode: 'push' },
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { quantity: 4 },
            },
          },
          particles: {
            color: { value: '#6c63ff' },
            links: { enable: true, color: '#bdbdbd', distance: 150, opacity: 0.3 },
            move: { enable: true, speed: 1.2 },
            number: { value: 60 },
            opacity: { value: 0.5 },
            shape: { type: 'circle' },
            size: { value: 3 },
          },
        }}
        style={{ position: 'fixed', zIndex: -1 }}
      />
      <Header />
      <Routes>
        <Route path="/" element={
          <main className="glass-main">
            {sections.map(({ Comp, id }, i) => (
              <AnimatedSection
                key={Comp.name}
                id={id}
                custom={i}
                variants={sectionVariants}
              >
                <Comp />
              </AnimatedSection>
            ))}
          </main>
        } />
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;