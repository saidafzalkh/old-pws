import { ReactElement } from "react";
import { page_header } from "../../types/PageHeader.type";
import cv_pdf from "../../assets/CV/CV-EN.pdf";

const PageHeder = ({ data }: { data: page_header }): ReactElement => {
  return (
    <header className="page-header">
      <div className="container page-header__container">
        <div className="page-header__title">
          <h1>{data.title}</h1>
          {data.count && (
            <span className="page-header__top-item page-header__counter">
              {data.count}
            </span>
          )}
          {data.icon && (
            <a
              download={true}
              href={cv_pdf}
              className="page-header__top-item page-header__icon"
              title={data.icon.alt}
            >
              {<data.icon.el />}
            </a>
          )}
        </div>
        <p>{data.description}</p>
      </div>
    </header>
  );
};

export default PageHeder;
