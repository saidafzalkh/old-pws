import { ReactElement } from "react";
import Title from "../specific/Title";
import { summary } from "../../data/Summary.data";

const Summary = (): ReactElement => {
  return (
    <article className="summary-text" about={summary.about}>
      <Title> {summary.title} </Title>
      <p dangerouslySetInnerHTML={{ __html: summary.content }}></p>
    </article>
  );
};

export default Summary;
