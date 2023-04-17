import { ReactElement } from "react";
import { TagType } from "../types/Tags.type";
import Tag from "../components/common/Tag";
import UL from "../components/common/UL";

export const createTagWrapper = (tags: TagType[]): ReactElement => {
  return (
    <UL clear={true} className="flex--wrapper">
      {tags.map((e, i) => (
        <li key={i}>
          <Tag title={e.alt}>{e.title}</Tag>
        </li>
      ))}
    </UL>
  );
};
