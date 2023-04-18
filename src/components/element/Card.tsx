import { ReactElement } from "react";
import TagsWrapper from "../common/TagsWrapper";
import { PortfolioProject } from "../../types/PortfolioProject.type";

const Card = ({ data }: { data: PortfolioProject }): ReactElement => {
  return (
    <div className="card">
      <figure className="card__header">
        <img src={data.cover.path} alt={data.cover.alt} />
      </figure>
      <div className="card__content">
        <h3 className="card__title">{data.title}</h3>
        <p title={data.description} className="card__description">
          {data.description}
        </p>
        <TagsWrapper tags={data.tags} />
      </div>
      <div className="card__footer">
        {data.view && <a href={data.view}>view</a>}
        <a title="on GitHub" href={data.source}>
          source
        </a>
      </div>
    </div>
  );
};

export default Card;
