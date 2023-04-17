import { ComponentProps, ReactElement } from "react";

const HyperLink = ({
  children,
  href,
  underline = true,
  title,
}: { underline?: boolean } & ComponentProps<"a">): ReactElement => {
  return (
    <a title={title} className={underline ? "" : "underline-none"} href={href}>
      {children}
    </a>
  );
};

export default HyperLink;
