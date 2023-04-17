import { ReactElement } from "react";
import Profile from "../components/element/Profile";
import Summary from "../components/element/Summary";

const Index = (): ReactElement => {
  return (
    <section className="index-page">
      <div className="container index-page__container">
        <Profile />
        <Summary />
      </div>
    </section>
  );
};

export default Index;
