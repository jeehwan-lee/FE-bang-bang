import React from "react";
import Flex from "../shared/Flex";
import Text from "../shared/Text";

interface TabItemProps {
  label: string;
  children: React.ReactNode;
  color: string;
}
function TabItem({ children, label, color }: TabItemProps) {
  return (
    <Flex
      direction="flex-col"
      justify="justify-center"
      align="items-center"
      classNameProps="h-full"
    >
      {children}
      <div className="h-[6px]"></div>
      <Text label={label} size="base" color={color} />
    </Flex>
  );
}

export default TabItem;
