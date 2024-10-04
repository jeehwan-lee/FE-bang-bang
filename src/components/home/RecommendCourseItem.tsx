import React from "react";
import Flex from "../shared/Flex";
import Text from "../shared/Text";
import HomeCourseImage from "./HomeCourseImage";
import RecommendCourseImage from "./RecommendCourseImage";

function RecommendCourseItem() {
  return (
    <Flex
      direction="flex-col"
      justify="justify-start"
      align="items-center"
      classNameProps="h-full"
    >
      <RecommendCourseImage courseImageUrl="/images/testImage2.jpg" />
      <div className="h-[10px]"></div>
      <Flex
        direction="flex-row"
        justify="justify-between"
        align="items-center"
        classNameProps="w-full"
      >
        <Text label="보물" color="gray-500" size="sm" />
        <Text label="10.6km" color="blue-500" size="sm" />
      </Flex>
      <div className="h-[6px]"></div>
      <Flex
        direction="flex-row"
        justify="justify-start"
        align="items-center"
        classNameProps="w-full"
      >
        <Text
          label="수원 방화수류정"
          color="gray-900"
          size="base"
          bold={true}
        />
      </Flex>
    </Flex>
  );
}

export default RecommendCourseItem;
