import { ReactElement } from "react";
import PageHeder from "../components/element/PageHeader";
import { cv_header } from "../data/CVpageHeader.data";
import CV from "../components/element/CV";

const CVpage = (): ReactElement => {
  return (
    <section className="cv-page">
      <div className="container cv-page__container">
        <PageHeder data={cv_header} />
        <CV />
      </div>
    </section>
  );
};

export default CVpage;
