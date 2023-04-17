import { ComponentProps } from "react";

const Title = ({ children }: ComponentProps<"h2">) => {
  return <h2 className="text--big">{children}</h2>;
};

export default Title;
