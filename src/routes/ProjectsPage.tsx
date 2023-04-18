import { ReactElement } from "react";
import ProjectsWrapper from "../components/element/ProjectsWrapper";

const Projects = (): ReactElement => {
  return (
    <section className="projects-page">
      <div className="container projects-page__container">
        <ProjectsWrapper />
      </div>
    </section>
  );
};

export default Projects;
