import { ReactElement } from "react";
import { AvatarData as data } from "../../data/Avatar.data";

const Avatar = (): ReactElement => {
  return (
    <figure className="avatar--wrapper">
      <img height="250" src={data.path} alt={data.alt} title={data.title} />
    </figure>
  );
};

export default Avatar;
