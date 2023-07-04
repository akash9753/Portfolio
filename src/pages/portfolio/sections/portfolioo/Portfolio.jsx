import "./portfolio.css";
import ProjectCategories from "./ProjectCategories";
import Projects from "./Projects";
import data from "./data";
import { useState } from "react";
const Portfolio = () => {
  const [projects, setProjects] = useState(data);
  const categories = data.map((item) => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];

  const filterProjectHandler = (category) => {
    if (category === "all") {
      setProjects(data);
      return;
    }
    const filterProjects = data.filter(
      (project) => project.category === category
    );
    setProjects(filterProjects);
  };

  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>
        Check out some of the projects I recently worked on for my clients. Use
        the buttons to toggle the differnet categories.
      </p>
      <div className="container portfolio__container">
        <ProjectCategories categories={uniqueCategories} onFilterProjects={filterProjectHandler}/>
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
