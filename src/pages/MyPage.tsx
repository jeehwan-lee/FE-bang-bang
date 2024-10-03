import React from "react";
import Flex from "../components/shared/Flex";
import { useRecoilValue } from "recoil";
import { userAtom } from "../store/atom/user";
import ProfileImage from "../components/myPage/ProfileImage";
import Text from "../components/shared/Text";

function MyPage() {
  const user = useRecoilValue(userAtom);

  return (
    <Flex
      direction="flex-col"
      justify="justify-start"
      align="items-center"
      classNameProps="h-full"
    >
      <div className="h-[100px]"></div>
      <ProfileImage profileUrl={user?.photoUrl as string} />
      <div className="h-[10px]"></div>
      <Text
        label={user?.nickname ?? "닉네임"}
        color="gray-800"
        size="lg"
        bold={true}
      />
      <div className="h-[30px]"></div>
      <Flex
        direction="flex-row"
        justify="justify-between"
        classNameProps="w-full px-24"
      >
        <Flex direction="flex-col" justify="justify-start" align="items-center">
          <Text label="코스 완주" color="gray-500" size="base" />
          <div className="h-[10px]"></div>
          <Text label={"0회"} color="blue-500" size="lg" bold={true} />
        </Flex>
        <div className="w-[10px]"></div>
        <div className="h-full w-[2px] bg-gray-300"></div>
        <div className="w-[10px]"></div>
        <Flex direction="flex-col" justify="justify-start" align="items-center">
          <Text label="누적 스탬프" color="gray-500" size="base" />
          <div className="h-[10px]"></div>
          <Text label={"0개"} color="blue-500" size="lg" bold={true} />
        </Flex>
      </Flex>
      <div className="h-[50px]"></div>
      <div>hello</div>
    </Flex>
  );
}

export default MyPage;
