import React, { useState } from "react";
import Flex from "../components/shared/Flex";
import { useRecoilValue } from "recoil";
import { userAtom } from "../store/atom/user";
import ProfileImage from "../components/myPage/ProfileImage";
import Text from "../components/shared/Text";
import TabButton from "../components/shared/TabButton";
import { Swiper, SwiperSlide } from "swiper/react";
import ImageSquare from "../components/shared/ImageSquare";
import CourseImage from "../components/myPage/CourseImage";
import "swiper/css";

function MyPage() {
  const user = useRecoilValue(userAtom);

  const [activeTab, setActiveTab] = useState("tab1"); // 기본 활성 탭 설정

  const onClickTabButton = () => {
    if (activeTab == "tab1") {
      setActiveTab("tab2");
    } else {
      setActiveTab("tab1");
    }
  };

  return (
    <Flex
      direction="flex-col"
      justify="justify-start"
      align="items-center"
      classNameProps="h-full"
    >
      <div className="h-[70px]"></div>
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
      <Flex
        direction="flex-row"
        justify="justify-center"
        classNameProps="w-full border-b"
      >
        <TabButton
          label="참여중인 코스"
          active={activeTab === "tab1"}
          onClickTab={() => onClickTabButton()}
        />
        <TabButton
          label="완주한 코스"
          active={activeTab === "tab2"}
          onClickTab={() => onClickTabButton()}
        />
      </Flex>
      {activeTab === "tab1" ? (
        <Swiper className="w-full" slidesPerView={2}>
          <SwiperSlide>
            <CourseImage count="4" label="돌과 바람의 길" />
          </SwiperSlide>
          <SwiperSlide>
            <CourseImage count="4" label="돌과 바람의 길" />
          </SwiperSlide>
          <SwiperSlide>
            <CourseImage count="4" label="돌과 바람의 길" />
          </SwiperSlide>
          <SwiperSlide>
            <CourseImage count="4" label="돌과 바람의 길" />
          </SwiperSlide>
        </Swiper>
      ) : (
        <div>he2</div>
      )}
    </Flex>
  );
}

export default MyPage;
