import React from 'react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VerifiedIcon from '@mui/icons-material/Verified';
import './styles/Certificates.css';

const certificates = [
  {
    title: "Certified NSS National Contingent Member",
    description: "Participated in National Integration Camp - 2024 in Hyderabad representing Tamil Nadu.",
    issuer: "NSS, Ministry of Youth Affairs and Sports, Govt. of India",
    date: "2024",
    file: `${import.meta.env.BASE_URL}assets/NIC.jpg`,
    fileType: "image",
  },
  {
    title: "NSS State Contingent Member",
    description: "Participated in State Level Adventure Camp - 2025 at Yercaud, represented Alagappa University.",
    issuer: "Ministry of Youth Welfare and Sports Development, Govt. of Tamil Nadu",
    date: "2025",
  },
  {
    title: "Member of Youth Parliament",
    description: "One of only two to be selected and participate in Youth Parliament for three consecutive times.",
    issuer: "Ministry of Parliamentary Affairs, Govt. of India",
    date: "2022 - 2025",
    file: `${import.meta.env.BASE_URL}assets/YP.pdf`,
    fileType: "pdf",
  },
  {
    title: "Best NSS Volunteer of Alagappa University",
    description: "Awarded Best NSS Volunteer of Alagappa University for the Academic Year 2023-2024.",
    issuer: "The Registrar,Program Coordinator,NSS Cell Alagappa University",
    date: "2023",
    file: `${import.meta.env.BASE_URL}assets/Best Volunteer.jpg`,
    fileType: "image",
  },
];

function Certificates() {
  return (
    <>
      <h2 className="section-title mb-4">
        <EmojiEventsIcon style={{ color: '#e8491d', fontSize: 32, marginRight: 12, verticalAlign: 'middle' }} />
        Certificates & Awards
      </h2>
      <div className="row g-4 justify-content-center">
        {certificates.map((cert, idx) => (
          <div className="col-md-6 col-lg-5" key={idx}>
            <div className="certificate-glass-card position-relative p-4 h-100 d-flex flex-column">
              <div className="certificate-accent-bar"></div>
              <div className="mb-2 d-flex align-items-center gap-2">
                <VerifiedIcon style={{ fontSize: 26, color: "#43e97b" }} />
                <span className="certificate-title">{cert.title}</span>
              </div>
              <div className="certificate-description mb-2">{cert.description}</div>
              {cert.file && (
                <div className="mb-3 text-center">
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary"
                    aria-label="View Certificate"
                    style={{ borderRadius: 5, background: "#5a28d6", border: "none" }}
                  >
                    View Certificate
                  </a>
                </div>
              )}
              <div className="certificate-meta mt-auto">
                <span className="certificate-badge" title={cert.issuer}>
                  {cert.issuer}
                </span>
                <br />
                <span className="certificate-date text-muted">
                  {cert.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Certificates;