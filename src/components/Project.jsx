import { projectsData } from "../data";
import ProjectsCard from "./ProjectsCard";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="project-list">
        {projectsData.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.imgSrc}
            techStack={project.techStack}
          />
        ))}
      </div>
    </section>
  );
}
