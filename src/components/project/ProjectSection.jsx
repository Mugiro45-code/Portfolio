import React from "react";
import projects from "../projectsData";
import ProjectCard from "./ProjectCard";
import FolderOpenIcon from "@mui/icons-material/FolderOpen"; // Material UI icon

function ProjectSection() {
  return (
    <section id="portfolio" className="container my-5 animate__animated animate__fadeInUp">
      <h2 className="mb-4 text-center">
        <FolderOpenIcon
          style={{
            color: "#e8491d",
            marginRight: 10,
            verticalAlign: "middle",
            fontSize: 32 // Explicit size
          }}
        />
        My Projects
      </h2>
      <div className="row g-4">
        {projects.map((project) => (
          <div className="col-md-4" key={project.id}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;