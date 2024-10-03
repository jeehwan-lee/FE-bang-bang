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
    <div className="absolute w-full bottom-[20px] left-0 border-t-2">
      <div className="h-[20px]"></div>
      <Flex
        direction="flex-row"
        justify="justify-between"
        classNameProps="w-full px-10"
      >
        <Link to="/diary">
          <TabItem label="수첩">
            <NoteIcon height="30px" width="30px" />
          </TabItem>
        </Link>
        <Link to="/home">
          <TabItem label="홈">
            <HomeIcon height="30px" width="30px" />
          </TabItem>
        </Link>
        <Link to="/myPage">
          <TabItem label="마이">
            <UserIcon height="30px" width="30px" />
          </TabItem>
        </Link>
      </Flex>
    </div>
  );
}

export default BottomTab;
