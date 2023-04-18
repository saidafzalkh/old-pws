import { ReactElement } from "react";
import { profile } from "../../data/Profile.data";
import { GeoAltFill } from "react-bootstrap-icons";
import SocialLinks from "../common/SocialLinks";
import TagsWrapper from "../common/TagsWrapper";

const Profile = (): ReactElement => {
  return (
    <article
      about={profile.name.first_name + " " + profile.name.second_name}
      className="profile profile--wrapper"
    >
      <profile.image />
      <div className="profile__data">
        <h1>
          {profile.name.first_name} {profile.name.second_name}
        </h1>
        <TagsWrapper tags={profile.tags} />
        <div className="profile__location">
          <GeoAltFill />
          <address>
            {profile.location.country}, {profile.location.city}
          </address>
        </div>
        <SocialLinks links={profile.social_links} />
      </div>
    </article>
  );
};

export default Profile;
