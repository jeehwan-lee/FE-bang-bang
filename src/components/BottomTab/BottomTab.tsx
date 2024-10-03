import React from "react";
import { Link, useLocation } from "react-router-dom";
import { bottomTabList } from "../../constants/bottomTabList";
import Flex from "../shared/Flex";
import { ReactComponent as HomeIcon } from "../../icons/home.svg";
import { ReactComponent as NoteIcon } from "../../icons/note.svg";
import { ReactComponent as UserIcon } from "../../icons/user.svg";

import Text from "../shared/Text";
import TabItem from "./TabItem";

function BottomTab() {
  const location = useLocation().pathname;

  if (!bottomTabList.includes(location.split("/")[1])) {
    return null;
  }

  return (
    <div className="fixed -translate-x-[30px] bg-white w-[500px] h-[100px] bottom-0 border-t-2 mx-auto">
      <div className="h-[20px]"></div>
      <Flex
        direction="flex-row"
        justify="justify-between"
        classNameProps="w-full px-10"
      >
        <Link to="/diary">
          <TabItem
            label="수첩"
            color={location === "/diary" ? "blue-500" : "gray-500"}
          >
            <NoteIcon
              height="30px"
              width="30px"
              stroke={location === "/diary" ? "#5a71c7" : "#93949d"}
            />
          </TabItem>
        </Link>
        <Link to="/home">
          <TabItem
            label="홈"
            color={location === "/home" ? "blue-500" : "gray-500"}
          >
            <HomeIcon
              height="30px"
              width="30px"
              stroke={location === "/home" ? "#5a71c7" : "#93949d"}
            />
          </TabItem>
        </Link>
        <Link to="/myPage">
          <TabItem
            label="마이"
            color={location === "/myPage" ? "blue-500" : "gray-500"}
          >
            <UserIcon
              height="30px"
              width="30px"
              fill={location === "/myPage" ? "#5a71c7" : "#93949d"}
            />
          </TabItem>
        </Link>
      </Flex>
    </div>
  );
}

export default BottomTab;
