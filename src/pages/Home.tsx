import React from "react";
import ImageSquare from "../components/shared/ImageSquare";
import Flex from "../components/shared/Flex";
import Button from "../components/shared/Button";
import Text from "../components/shared/Text";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const onClickLoginBtn = () => {
    navigate("/login");
  };
  return (
    <Flex
      direction="flex-col"
      justify="justify-between"
      classNameProps="h-full"
    >
      <div className="h-[50px]"></div>
      <ImageSquare imageUrl="/Project_Thumbnail.png" />
      <div className="h-[320px]"></div>
      <Flex
        direction="flex-col"
        justify="justify-center"
        classNameProps="w-full"
      >
        <Button label="로그인" onClick={onClickLoginBtn} />
        <div className="h-[20px]"></div>
        <Flex
          direction="flex-row"
          justify="justify-center"
          classNameProps="w-full"
        >
          <Text label="아직 계정이 없으신가요?" size="lg" color="blue-100" />
          <div className="w-[12px]"></div>
          <Text label="회원가입" size="lg" color="blue-100" />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home;
