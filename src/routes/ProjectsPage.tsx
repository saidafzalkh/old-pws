import { ReactElement } from "react";
import ProjectsWrapper from "../components/element/ProjectsWrapper";
import PageHeder from "../components/element/PageHeader";
import { projects_header } from "../data/PortfolioProjects.data";

const Projects = (): ReactElement => {
  return (
    <section className="projects-page">
      <div className="container projects-page__container">
        <PageHeder data={projects_header} />
        <ProjectsWrapper />
      </div>
    </section>
  );
};

export default Projects;
