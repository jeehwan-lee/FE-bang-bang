import React from "react";
import Flex from "../shared/Flex";
import Text from "../shared/Text";
import HomeCourseImage from "./HomeCourseImage";
import RecommendCourseImage from "./RecommendCourseImage";

interface HomeCourseItemProps {
  courseImageUrl: string;
  label: string;
}

function HomeCourseItem({ label, courseImageUrl }: HomeCourseItemProps) {
  return (
    <div className="relative px-1 py-2 w-full">
      <HomeCourseImage imageUrl={courseImageUrl} />
      <div className="absolute bottom-[16px] right-[16px]">
        <Text label={label} color="white" size="sm" />
      </div>
    </div>
  );
}

export default HomeCourseItem;
