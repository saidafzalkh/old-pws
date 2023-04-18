import { ComponentProps, ReactElement } from "react";
import Card from "./Card";

const ProjectsWrapper = (): ReactElement => {
  return (
    <div className="projects--wrapper">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default ProjectsWrapper;
