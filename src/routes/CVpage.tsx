import { ReactElement } from "react";
import PageHeder from "../components/element/PageHeader";
import { cv_header } from "../data/CVpageHeader.data";

const CV = (): ReactElement => {
  return (
    <section className="cv-page">
      <div className="container cv-page__container">
        <PageHeder data={cv_header} />
      </div>
    </section>
  );
};

export default CV;
