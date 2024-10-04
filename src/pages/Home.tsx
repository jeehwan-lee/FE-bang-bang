import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Flex from "../components/shared/Flex";
import Navbar from "../components/shared/Navbar";
import Text from "../components/shared/Text";
import HomeCourseItem from "../components/home/HomeCourseItem";
import CourseItem from "../components/myPage/CourseItem";
import CourseImage from "../components/myPage/CourseImage";
import RecommendCourseItem from "../components/home/RecommendCourseItem";
import RecommendCourseImage from "../components/home/RecommendCourseImage";
import DropDownButton from "../components/shared/DropDownButton";

function Home() {
  const options = ["전체보기", "진행중"];

  return (
    <Flex
      direction="flex-col"
      justify="justify-start"
      align="items-center"
      classNameProps="h-full"
    >
      <Navbar />
      <div className="h-[20px]"></div>
      <Flex
        direction="flex-row"
        justify="justify-between"
        align="items-center"
        classNameProps="w-full border-b-[2px]"
      >
        <Text label="추전장소" color="gray-900" size="lg" bold={true} />
        <Text label="지도보기" color="blue-500" size="base" />
      </Flex>
      <div className="h-[10px]"></div>
      <Flex
        direction="flex-row"
        justify="justify-between"
        align="items-center"
        classNameProps="w-full"
      >
        <RecommendCourseItem />
        <div className="w-[30px]"></div>
        <RecommendCourseItem />
      </Flex>
      <div className="h-[20px]"></div>
      <Flex
        direction="flex-row"
        justify="justify-between"
        align="items-center"
        classNameProps="w-full border-b-[2px]"
      >
        <Text
          label="스탬프 챌린지 코스"
          color="gray-900"
          size="lg"
          bold={true}
        />

        <DropDownButton options={options} onSelect={() => console.log("eee")} />
      </Flex>
      <div className="h-[10px]"></div>
      <Flex
        direction="flex-col"
        justify="justify-start"
        align="items-center"
        classNameProps="h-full w-full"
      >
        <HomeCourseItem
          label="돌과 바람의 길"
          courseImageUrl="/images/testImage.jpg"
        />
        <HomeCourseItem
          label="돌과 바람의 길"
          courseImageUrl="/images/testImage.jpg"
        />
        <HomeCourseItem
          label="돌과 바람의 길"
          courseImageUrl="/images/testImage.jpg"
        />
      </Flex>
    </Flex>
  );
}

export default Home;
