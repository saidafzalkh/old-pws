import { ComponentProps, ReactElement } from "react";
import { CSquareFill } from "react-bootstrap-icons";

const Copyright = ({ children }: ComponentProps<"small">): ReactElement => {
  return (
    <small className="copyright">
      <CSquareFill />
      {children}
    </small>
  );
};

export default Copyright;
