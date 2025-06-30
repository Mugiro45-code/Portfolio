import React from 'react';
import './styles/About.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const About = () => (
  <section id="about" className="about-section container my-5 animate__animated animate__fadeInLeft">
    <div className="row align-items-center">
      <div className="col-md-4 text-center mb-4 mb-md-0">
        <img src={`${import.meta.env.BASE_URL}assets/Mugi.jpg`} alt="Mugilan S" className="about-avatar shadow" />
      </div>
      <div className="col-md-8">
        <div className="about-card p-4 shadow">
          <h2 className="fw-bold mb-3 section-title">
            <InfoOutlinedIcon style={{ color: '#6c63ff', fontSize: 32, marginRight: 12, verticalAlign: 'middle' }} />
            About Me
          </h2>
          <p>
            Passionate about building beautiful and functional web experiences.<br />
            <span className="text-primary fw-semibold">Driven software engineer and active community leader.</span>
          </p>
          <ul className="timeline mt-4">
            <li><span>2022–2025:</span> B.Voc Software Development,Alagappa University</li>
            <li><span>2024–Present:</span> Human Resource Co-ordinator & Vice-president, Bhumi Trichy</li>
            <li><span>2025–Present:</span> Software Engineer, Selten Technologies</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;