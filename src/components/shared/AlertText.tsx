import React from "react";
import Flex from "./Flex";
import Text from "./Text";

interface AlertTextProps {
  alertLabel: string;
}
function AlertText({ alertLabel }: AlertTextProps) {
  return (
    <Flex
      direction="flex-row"
      justify="justify-start"
      align="items-center"
      classNameProps="w-full"
    >
      <img src="/icons/alert.png" className="w-[20px] h-[20px]" />
      <div className="w-[6px]"></div>
      <Text label={alertLabel} color="red" size="base" />
    </Flex>
  );
}

export default AlertText;
