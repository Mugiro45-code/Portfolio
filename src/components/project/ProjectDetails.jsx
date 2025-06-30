import React, { useEffect } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import projects from "../projectsData";

function ProjectDetails() {
  // Scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { projectId } = useParams();
  const project = projects.find((p) => p.id === projectId);
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackToProjects = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById("portfolio");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById("portfolio");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!project)
    return (
      <div className="container my-5 text-center">
        <h2>Project not found.</h2>
        <Link to="/" className="btn btn-secondary mt-3">
          ← Back to Portfolio
        </Link>
      </div>
    );

  const imageSrc = `${import.meta.env.BASE_URL}${(project.image || '/assets/placeholder.jpg').replace(/^\/+/, '')}`;

  // Extract bullet points from description (if any)
  const [mainDesc, ...features] = project.description.split("Key Features:");
  let featureList = [];
  if (features.length > 0) {
    featureList = features[0]
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.startsWith("-"))
      .map((line) => line.replace(/^- /, ""));
  }

  return (
    <div
      className="container my-5 d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <div className="card shadow-lg w-100" style={{ maxWidth: 700 }}>
        <div className="card-body px-4 py-4">
          <a
            href="#portfolio"
            className="btn btn-secondary mb-3"
            onClick={handleBackToProjects}
          >
            ← Back to My Projects
          </a>
          <h2 className="mb-3 text-center fw-bold" style={{ color: "#5a28d6" }}>
            {project.title}
          </h2>
          <img
            src={imageSrc}
            alt={project.title}
            className="img-fluid rounded mb-4 d-block mx-auto"
            onError={(e) => {
              e.target.src = `${import.meta.env.BASE_URL}assets/placeholder.jpg`;
            }}
            style={{ maxHeight: "320px", objectFit: "cover" }}
          />
          <div className="mb-3" style={{ textAlign: "justify", color: "#333", fontSize: "1.08rem" }}>
            {mainDesc.trim()}
            {featureList.length > 0 && (
              <ul className="mt-3" style={{ textAlign: "left" }}>
                {featureList.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="mb-4 text-center">
            {project.badges &&
              project.badges.map((badge) => (
                <span
                  key={badge}
                  className="badge bg-primary me-2 mb-2"
                  style={{ fontSize: "1em", padding: "0.5em 1em", background: "#e8491d", color: "#fff" }}
                >
                  {badge}
                </span>
              ))}
          </div>
          {project.link && (
            <div className="text-center">
              <a
                href={project.link}
                className="btn btn-primary px-4 py-2 fw-semibold"
                target="_blank"
                rel="noopener noreferrer"
                style={{ background: "#e8491d", border: "none", borderRadius: "5px" }}
              >
                Live Preview
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;