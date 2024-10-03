import React from "react";
import Flex from "./Flex";
import Text from "./Text";
import { ReactComponent as Alert } from "../../icons/alert.svg";

interface AlertTextProps {
  alertLabel: string;
}
function AlertText({ alertLabel }: AlertTextProps) {
  return (
    <Flex direction="flex-col" justify="justify-start" classNameProps="h-full">
      <div className="h-[10px]"></div>
      <Flex
        direction="flex-row"
        justify="justify-start"
        align="items-center"
        classNameProps="w-full"
      >
        <Alert fill="#e00512" />
        <div className="w-[6px]"></div>
        <Text label={alertLabel} color="red-400" size="sm" />
      </Flex>
      <div className="h-[10px]"></div>
    </Flex>
  );
}

export default AlertText;
