import React from "react";
import Text from "../shared/Text";
import Flex from "../shared/Flex";

function CourseItem() {
  return (
    <Flex
      classNameProps="w-full border mx-2 my-2 py-4 px-4 rounded-xl"
      direction="flex-col"
      justify="justify-start"
      align="items-center"
    >
      <Flex
        direction="flex-row"
        justify="justify-between"
        align="items-center"
        classNameProps="w-full"
      >
        <Flex
          direction="flex-row"
          justify="justify-start"
          align="items-center"
          classNameProps="w-full"
        >
          <div className="w-[8px]"></div>
          <Text
            label="[코스이름] 유적이름"
            color="gray-900"
            size="sm"
            bold={true}
          />
        </Flex>
        <Flex
          direction="flex-row"
          justify="justify-end"
          classNameProps="w-full"
        >
          <Text label="2024-10-03(목) 15:00" color="gray-600" size="sm" />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default CourseItem;
