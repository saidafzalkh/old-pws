import { ReactElement } from "react";
import Copyright from "../common/Copyright";
import { getCurrentYear } from "../../helper/getCurrentYear";
import SocialLinks from "../common/SocialLinks";
import { profile } from "../../data/Profile.data";

const Footer = (): ReactElement => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <Copyright>copyright | {getCurrentYear()}</Copyright>
        <SocialLinks links={profile.social_links} />
      </div>
    </footer>
  );
};

export default Footer;
