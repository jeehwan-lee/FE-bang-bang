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
    <Flex direction="flex-col" justify="justify-center" classNameProps="h-full">
      <Flex
        direction="flex-row"
        justify="justify-center"
        classNameProps="w-full"
      >
        <Text label="로그인" color="black" size="xl" bold={true} />
      </Flex>

      <div className="h-[50px]"></div>
      <Input
        placeholder="아이디"
        name="account"
        value={loginInfo.email}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <div className="h-[40px]"></div>
      <PasswordInput
        placeholder="비밀번호"
        name="password"
        value={loginInfo.password}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <div className="h-[24px]"></div>
      <Button label="로그인" onClick={() => onSubmit()} />
    </Flex>
  );
}

export default Login;
