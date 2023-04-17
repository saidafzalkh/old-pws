import { ComponentProps, ReactElement } from "react";

const Tag = ({ children, title }: ComponentProps<"strong">): ReactElement => {
  return (
    <strong title={title} className="tag">
      {children}
    </strong>
  );
};

export default Tag;
