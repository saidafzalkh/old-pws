import { ReactElement } from "react";
import { createTagWrapper } from "../../helper/createTagWrapper";
import { TagType } from "../../types/Tags.type";

const TagsWrapper = ({ tags }: { tags: TagType[] }): ReactElement => {
  return createTagWrapper(tags);
};

export default TagsWrapper;
