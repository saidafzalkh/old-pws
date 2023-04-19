import { ReactElement } from "react";

const LoadingAnimation = (): ReactElement => {
  function drawSVG() {}

  return (
    <div className="svg-container">
      <h1>Loading...</h1>
    </div>
  );
};

export default LoadingAnimation;
