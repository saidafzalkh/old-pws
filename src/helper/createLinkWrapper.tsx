import { ReactElement } from "react";
import UL from "../components/common/UL";
import { InterLinkType } from "../types/Link.type";
import HyperLink from "../components/common/HyperLink";

export const createLinkWrapper = (link: InterLinkType[]): ReactElement => {
  return (
    <UL clear={true} className="flex--wrapper">
      {link.map((e, i) => (
        <li key={i}>
          <HyperLink href={e.url} title={e.alt ? e.alt : ""} underline={false}>
            {e.icon ? <e.icon /> : e.title}
          </HyperLink>
        </li>
      ))}
    </UL>
  );
};
