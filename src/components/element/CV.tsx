import { ReactElement } from "react";

const CV = (): ReactElement => {
  return (
    <article about="Saidafzal Kholkhujaev's CV">
      <header className="cv__header">
        <h1 title="Name: S">Saidafzal Kholkhujaev</h1>
        <p title="Job: Web">(Web Developer)</p>
        <p className="cv__about">
          A self-taught programmer who is always excited about new experiences
          and knowledge. Mentor with experience in an individual approach to his
          business.
        </p>
        <ul className="cv__tags-block">
          <li className="cv__tag">Uzbekistan, Fergana</li>
          <li className="cv__tag">+998 91 658 58 48</li>
          <li className="cv__tag">saidafzal1209@gmail.com</li>
        </ul>
      </header>
      <section className="cv__block cv__edu">
        <h3>Education</h3>
        <div className="cv__item">
          <div className="cv__item-title">
            <h3>Osh Technological University</h3>
            <p>Natural-technical</p>
          </div>
          <div className="cv__item-year">2021 - 2026</div>
        </div>
      </section>
      <section className="cv__block cv__exp">
        <h3>Experience </h3>
        <div className="cv__item">
          <div className="cv__item-title">
            <h3>Fantastic Academy</h3>
            <p>Mentor</p>
          </div>
          <div className="cv__item-year">Oct, 2021 - Mar, 2023</div>
        </div>
        <div className="cv__more">
          <p>
            "Fantastic Academy" is a <b>training center in Fergana</b>, which
            started its activity as a design studio in 2017. I worked here as a
            web programming <b>mentor</b> for more than a
            <b> year and a half.</b> During this period more than{" "}
            <i> 30 students finished</i> the course.
            <b>Key Responsibilities:</b>
            <ul>
              <li>I taught skills such as HTML/CSS, JavaScript, and React. </li>
              <li>Conducted open classes at schools.</li>
              <li>Participated in administrative work.</li>
            </ul>
            Graduated with the goal of working on real-world projects and
            building a career as a <b>Front-End/Full-Stack</b> developer.
          </p>
        </div>
      </section>
      <section className="cv__block cv__skills">
        <h3>Skills</h3>
        <ul className="cv__tags-block">
          <li className="cv__tag">HTML</li>
          <li className="cv__tag">CSS</li>
          <li className="cv__tag">Javascript</li>
        </ul>
      </section>
      <section className="cv__block cv__lang">
        <h3>Languages</h3>
        <ul className="cv__tags-block">
          <li className="cv__tag">Uzbek (Native)</li>
          <li className="cv__tag">Russian (C1)</li>
          <li className="cv__tag">English (B1)</li>
        </ul>
      </section>
      <section className="cv__block cv__cer">
        <h3>Certifications</h3>
        <ul className="cv__tags-block">
          <li className="cv__tag">Uzbek (Native)</li>
          <li className="cv__tag">Russian (C1)</li>
          <li className="cv__tag">English (B1)</li>
        </ul>
      </section>
    </article>
  );
};

export default CV;
