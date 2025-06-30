import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Particles from 'react-tsparticles';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectSection from "./components/project/ProjectSection";
import ProjectDetails from "./components/project/ProjectDetails";
import Certificates from './components/Certificates';
import './components/styles/main.css';

const sections = [
  { Comp: About, id: "about" },
  { Comp: Skills, id: "skills" },
  { Comp: Certificates, id: "certificates" },
  { Comp: ProjectSection, id: "portfolio" },
  { Comp: Contact, id: "contact" }
];

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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
            {sections.map(({ Comp, id }, idx) => (
              <section
                id={id}
                key={id}
                className="glass-section"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <Comp />
              </section>
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