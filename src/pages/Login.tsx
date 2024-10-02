import React, { KeyboardEvent, useState } from "react";
import Flex from "../components/shared/Flex";
import { Link, useNavigate } from "react-router-dom";
import Text from "../components/shared/Text";
import { useSetRecoilState } from "recoil";
import Input from "../components/shared/Input";
import Button from "../components/shared/Button";
import PasswordInput from "../components/shared/PasswordInput";

function Login() {
  const [loginInfo, setLoginInfo] = useState<any>({
    account: "",
    password: "",
  });

  const onChange = (e: { target: { name: any; value: any } }) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const onSubmit = async () => {
    console.log("ddd");
  };

  return (
    <Flex direction="flex-col" justify="justify-start" classNameProps="h-full">
      <div className="h-[100px]"></div>
      <Flex
        direction="flex-row"
        justify="justify-center"
        classNameProps="w-full"
      >
        <Text label="로그인" color="black" size="xl" bold={true} />
      </Flex>
      <div className="h-[36px]"></div>
      <Input
        placeholder="아이디"
        name="account"
        value={loginInfo.email}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <div className="h-[36px]"></div>
      <PasswordInput
        placeholder="비밀번호"
        name="password"
        value={loginInfo.password}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <div className="h-[22px]"></div>
      <Flex
        direction="flex-row"
        justify="justify-start"
        align="items-center"
        classNameProps="w-full"
      >
        <img src="/icons/alert.png" className="w-[20px] h-[20px]" />
        <div className="w-[6px]"></div>
        <Text
          label="올바르지 않은 아이디 또는 비밀번호입니다."
          color="red"
          size="base"
        />
      </Flex>
      <div className="h-[36px]"></div>
      <Button label="로그인" onClick={() => onSubmit()} />
    </Flex>
  );
}

export default Login;
