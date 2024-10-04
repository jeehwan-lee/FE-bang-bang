import React from "react";
import Flex from "./Flex";
import { ReactComponent as AlarmIcon } from "../../icons/alarm.svg";
import { ReactComponent as MenuIcon } from "../../icons/menu.svg";

function Navbar() {
  return (
    <Flex direction="flex-row" justify="justify-end" classNameProps="w-full">
      <AlarmIcon width="30px" height="30px" fill="#171719" />
      <div className="w-[20px]"></div>
      <MenuIcon width="30px" height="30px" fill="#171719" />
    </Flex>
  );
}

export default Navbar;
