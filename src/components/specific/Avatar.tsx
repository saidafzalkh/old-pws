import { ReactElement } from "react";
import { AvatarData as data } from "../../data/Avatar.data";
import Img from "../common/Image";
import placeholderImg from "../../assets/project-covers/placeholder.png";
import errorImg from "../../assets/project-covers/error.png";

const Avatar = (): ReactElement => {
  return (
    <figure className="avatar--wrapper">
      <Img
        width={250}
        src={data.path}
        alt={data.alt}
        title={data.title}
        placeholderImg={placeholderImg}
        errorImg={errorImg}
      />
    </figure>
  );
};

export default Avatar;
