import { ReactElement } from "react";
import TagsWrapper from "../common/TagsWrapper";
import { PortfolioProject } from "../../types/PortfolioProject.type";
import Img from "../common/Image";
import placeholderImg from "../../assets/project-covers/placeholder.png";
import errorImg from "../../assets/project-covers/error.png";

const Card = ({ data }: { data: PortfolioProject }): ReactElement => {
  console.log(data.cover.alt);
  return (
    <div className="card">
      <figure className="card__header">
        <Img
          alt={data.cover.alt}
          src={data.cover.path}
          width={300}
          height={200}
          placeholderImg={placeholderImg}
          errorImg={errorImg}
        />
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
