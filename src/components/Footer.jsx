import React from 'react';
import './styles/Footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => (
  <footer className="footer-section text-center py-4" role="contentinfo" aria-label="Footer">
    <div className="mb-2">
      <a href="https://github.com/Mugiro45-code" target="_blank" rel="noopener noreferrer" className="mx-2" aria-label="GitHub">
        <GitHubIcon className="footer-social-icon" style={{ fontSize: 26, color: "#171515", verticalAlign: "middle" }} />
      </a>
      <a href="https://www.linkedin.com/in/mugilan-developer" target="_blank" rel="noopener noreferrer" className="mx-2" aria-label="LinkedIn">
        <LinkedInIcon className="footer-social-icon" style={{ fontSize: 26, color: "#0077b5", verticalAlign: "middle" }} />
      </a>
      <a href="https://www.instagram.com/mugiro_45/" target="_blank" rel="noopener noreferrer" className="mx-2" aria-label="Instagram">
        <InstagramIcon className="footer-social-icon" style={{ fontSize: 26, color: "#E4405F", verticalAlign: "middle" }} />
      </a>
      <a href="mailto:mugi.developer@gmail.com" className="mx-2" aria-label="Email">
        <EmailIcon className="footer-social-icon" style={{ fontSize: 26, color: "#EA4335", verticalAlign: "middle" }} />
      </a>
    </div>
    <div style={{ color: "#fff", fontSize: "0.98em", opacity: 0.85 }}>
      <LocationOnIcon style={{ color: "#ffd700", verticalAlign: "middle", fontSize: 20 }} /> Karaikudi, Tamil Nadu, India
    </div>
    <div className="mt-2" style={{ color: "#fff", fontSize: "0.95em", opacity: 0.7 }}>
      &copy; {new Date().getFullYear()} Mugilan S. All rights reserved.
    </div>
  </footer>
);

export default Footer;