import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list"> {
        projects.map((projects, index)) => (
          <ProjectItem key={index} projects={projects} />

        ))}
        </div>
    </div>
  );
}

export default ProjectList;
