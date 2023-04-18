import { ReactElement } from "react";
import { page_header } from "../../types/PageHeader.type";

const PageHeder = ({ data }: { data: page_header }): ReactElement => {
  return (
    <header className="page-header">
      <div className="container page-header__container">
        <div className="page-header__title">
          <h1>{data.title}</h1>
          <span>{data.count}</span>
        </div>
        <p>{data.description}</p>
      </div>
    </header>
  );
};

export default PageHeder;
