import React from "react";
import { Link } from "react-router-dom";
import "../styles/Portfolio.css";

function ProjectCard({ project }) {
  return (
    <div className="portfolio-card shadow-sm animate__animated animate__zoomIn">
      <div className="portfolio-img-wrapper">
        <img
          src={`${import.meta.env.BASE_URL}${project.image.replace(/^\/+/, '')}`}
          alt={project.title}
          className="portfolio-img"
        />
        <div className="portfolio-content-bottom text-center px-3 py-2" style={{ width: "100%" }}>
          <h5 className="mt-3 mb-2 fw-bold" style={{ fontSize: "1.15rem", color: "#222" }}>
            {project.title}
          </h5>
          <hr style={{ width: "40px", margin: "0.5rem auto 1rem auto", borderTop: "2px solid #e8491d", opacity: 0.5 }} />
          <div className="portfolio-btn-wrapper" style={{ width: "100%" }}>
            <Link
              to={`/projects/${project.id}`}
              className="btn btn-outline-primary btn-md view-project-btn"
              style={{
                borderRadius: "20px",
                padding: "0.5rem 1.5rem",
                fontWeight: 500,
                letterSpacing: "0.5px",
                transition: "background 0.2s, color 0.2s"
              }}
            >
              View Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;