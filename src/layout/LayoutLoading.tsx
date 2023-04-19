import { ReactElement } from "react";

const LayoutLoading = (): ReactElement => {
  return (
    <section className="loading">
      <div className="container loading__container">
        <h1>Loading...</h1>
      </div>
    </section>
  );
};

export default LayoutLoading;
