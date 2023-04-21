import { ReactElement } from "react";

const CV = (): ReactElement => {
  return <article about="Saidafzal Kholkhujaev's CV">
    <header className="cv__header">
        <h1 title="Name: S">Said</h1>
        <p title="Job: Web"></p>
    </header>
    <section className="cv__personal-data"></section>
    <section className="cv__summary"></section>
    <section className="cv__experience"></section>
    <section></section>
  </article>;
};

export default CV;
