import Project from "./Project";
import "./portfolio.css";
const Projects = ({ projects }) => {
  return (
    <div className="portfolio__projects">
      {projects?.map((project) => {
        return <Project key={project.id} project={project} />;
      })}
    </div>
  );
};

export default Projects;
