import { ReactElement } from "react";
import { createLinkWrapper } from "../../helper/createLinkWrapper";
import { InterLinkType } from "../../types/Link.type";

const SocialLinks = ({ links }: { links: InterLinkType[] }): ReactElement => {
  return <nav>{createLinkWrapper(links)}</nav>;
};

export default SocialLinks;
