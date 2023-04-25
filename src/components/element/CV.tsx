import { ReactElement } from "react";
import { CV as data } from "../../data/CV.data";
import Img from "../common/Image";
import placeholderImg from "../../assets/project-covers/placeholder.png";
import errorImg from "../../assets/project-covers/error.png";

const CV = (): ReactElement => {
  return (
    <article className="cv" about="Saidafzal Kholkhujaev's CV">
      <header className="cv__header">
        <h1 title="Name: S">{data.header.name}</h1>
        <p title="Job: Web">({data.header.job})</p>
        <p className="cv__about">{data.header.about}</p>
        <ul className="cv__tags-block ul-clear flex--wrapper">
          <li className="cv__tag">{data.header.info.address}</li>
          <li className="cv__tag">
            <a className="link" href="tel:998916585848">
              {data.header.info.phone}
            </a>
          </li>
          <li className="cv__tag">
            <a className="link" href="mailto:saidafzal1209@gmail.com">
              {data.header.info.email}
            </a>
          </li>
        </ul>
      </header>
      <section className="cv__block cv__edu">
        <h3 className="cv__block__title">Education</h3>
        <div className="cv__item">
          <div className="cv__item-title">
            <h3>{data.education.item.title}</h3>
            <p>{data.education.item.faculty}</p>
          </div>
          <small className="cv__item-year">{data.education.item.year}</small>
        </div>
      </section>
      <section className="cv__block cv__exp">
        <h3 className="cv__block__title">Experience </h3>
        <div className="cv__item">
          <div className="cv__item-title">
            <h3>{data.experience.item.company}</h3>
            <p>{data.experience.item.job}</p>
          </div>
          <small className="cv__item-year">{data.experience.item.year}</small>
        </div>
        <div className="cv__more">
          <p
            dangerouslySetInnerHTML={{ __html: data.experience.item.html }}
          ></p>
        </div>
      </section>
      <section className="cv__block cv__skills">
        <h3 className="cv__block__title">Skills</h3>
        <ul className="cv__tags-block ul-clear flex--wrapper">
          {data.skills.map((e, i) => (
            <li key={i} className="cv__tag">
              {e}
            </li>
          ))}
        </ul>
      </section>
      <section className="cv__block cv__lang">
        <h3 className="cv__block__title">Languages</h3>
        <ul className="cv__tags-block ul-clear flex--wrapper">
          {data.languages.map((e, i) => (
            <li key={i} className="cv__tag">
              {e}
            </li>
          ))}
        </ul>
      </section>
      <section className="cv__block cv__cer">
        <h3 className="cv__block__title">Certifications</h3>
        <div className="cv__cer-block">
          {data.certifications.map((e, i) => {
            return (
              <div className="cv__cer-items">
                <h4>{e.title}</h4>
                <p>{e.name}</p>
                <figure>
                  <a className="link" href={e.link}>
                    <Img
                      alt={e.link}
                      src={e.qr}
                      width={200}
                      height={200}
                      placeholderImg={placeholderImg}
                      errorImg={errorImg}
                    />
                  </a>
                </figure>
              </div>
            );
          })}
        </div>
      </section>
    </article>
  );
};

export default CV;
