import React from "react";
import { useNavigate } from "react-router-dom";
import Flex from "../components/shared/Flex";
import ImageSquare from "../components/shared/ImageSquare";
import Button from "../components/shared/Button";
import Text from "../components/shared/Text";
import { useRecoilValue } from "recoil";
import { userAtom } from "../store/atom/user";

function CompleteSignUp() {
  const user = useRecoilValue(userAtom);

  const navigate = useNavigate();

  const onClickStartBtn = () => {
    navigate("/main");
  };
  return (
    <Flex direction="flex-col" justify="justify-center" classNameProps="h-full">
      <div className="h-[50px]"></div>
      <Flex
        direction="flex-row"
        justify="justify-center"
        classNameProps="w-full"
      >
        <Text label="회원가입 완료" bold={true} size="lg" color="blue-100" />
      </Flex>
      <div className="h-[40px]"></div>
      <div className="relative">
        <Flex
          direction="flex-col"
          justify="justify-center"
          align="items-center"
          classNameProps="h-full absolute w-full"
        >
          <Text
            label={`${user?.nickname}님`}
            bold={true}
            size="lg"
            color="blue-100"
          />
          <Text label="환영합니다!" bold={true} size="lg" color="blue-100" />
        </Flex>
        <ImageSquare imageUrl="/images/complete_signup_thumbnail.png" />
      </div>
      <div className="h-[300px]"></div>
      <Flex
        direction="flex-col"
        justify="justify-center"
        classNameProps="w-full"
      >
        <Button label="시작하기" onClick={onClickStartBtn} />
      </Flex>
    </Flex>
  );
}

export default CompleteSignUp;
