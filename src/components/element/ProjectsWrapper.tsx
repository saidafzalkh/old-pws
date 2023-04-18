import { ComponentProps, ReactElement } from "react";
import Card from "./Card";
import { projects } from "../../data/PortfolioProjects.data";

const ProjectsWrapper = (): ReactElement => {
  return (
    <div className="projects--wrapper">
      {projects.map((e) => (
        <Card key={e.id} data={e} />
      ))}
    </div>
  );
};

export default ProjectsWrapper;
