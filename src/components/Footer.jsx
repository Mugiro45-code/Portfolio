import React from 'react';
import './styles/Footer.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => (
  <footer className="footer-section bg-dark text-white text-center py-4 mt-5">
    <div>
      <small>
        &copy; {new Date().getFullYear()} Mugilan. All rights reserved.
        <span className="ms-2">
          <a href="https://github.com/Mugiro45-code" target="_blank" rel="noopener noreferrer" className="footer-link">
            <GitHubIcon style={{ fontSize: 22, color: "#fff", verticalAlign: "middle" }} />
          </a>
        </span>
      </small>
    </div>
  </footer>
);

export default Footer;

export function About() {
  return (
    <div>
      <h2>
        <InfoOutlinedIcon style={{ color: '#6c63ff', fontSize: 32, verticalAlign: 'middle', marginRight: 8 }} />
        About Me
      </h2>
      {/* ...rest of your content... */}
    </div>
  );
}