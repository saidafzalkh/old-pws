import { ComponentProps } from "react";

const UL = ({
  children,
  clear = false,
  className,
}: { clear?: boolean } & ComponentProps<"ul">) => {
  console.log(className);
  return (
    <ul className={clear && className ? className + " ul-clear" : className}>
      {children}
    </ul>
  );
};

export default UL;
