import { ReactElement } from "react";
import TagsWrapper from "../common/TagsWrapper";

const Card = (): ReactElement => {
  return (
    <div className="card">
      <figure className="card__header">
        <img src="" alt="" />
      </figure>
      <div className="card__content">
        <h3 className="card__title">Title</h3>
        <p className="card__description">Description will be here</p>
        <TagsWrapper tags={[{ title: "test" }, { title: "example" }]} />
      </div>
      <div className="card__footer">
        <a href="">source</a>
      </div>
    </div>
  );
};

export default Card;
