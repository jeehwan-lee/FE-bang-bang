import React, { KeyboardEvent, useState } from "react";
import Flex from "../components/shared/Flex";
import { Link, useNavigate } from "react-router-dom";
import Text from "../components/shared/Text";
import { useSetRecoilState } from "recoil";
import Input from "../components/shared/Input";
import Button from "../components/shared/Button";
import PasswordInput from "../components/shared/PasswordInput";
import { login } from "../apis/login";
import { LoginInfo } from "../models/user";
import AlertText from "../components/shared/AlertText";
import axios from "axios";
import BackButton from "../components/shared/BackButton";

function Login() {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    account: "",
    password: "",
  });

  const [validMessage, setValidMessage] = useState<string>("");

  const onChange = (e: { target: { name: any; value: any } }) => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };

  const onSubmit = async () => {
    const result = await login(loginInfo);

    if (!result) {
      setValidMessage("올바르지 않은 아이디 또는 비밀번호입니다.");
      return;
    }

    navigate("/main");
  };

  return (
    <Flex direction="flex-col" justify="justify-start" classNameProps="h-full">
      <Flex
        direction="flex-col"
        justify="justify-start"
        classNameProps="w-full"
      >
        <BackButton />
      </Flex>
      <div className="h-[40px]"></div>
      <Flex
        direction="flex-row"
        justify="justify-center"
        classNameProps="w-full"
      >
        <Text label="로그인" color="gray-800" size="xl" bold={true} />
      </Flex>
      <div className="h-[36px]"></div>
      <Input
        placeholder="아이디"
        name="account"
        value={loginInfo.account}
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
      {validMessage !== "" && <AlertText alertLabel={validMessage} />}
      <div className="h-[36px]"></div>
      <Button label="로그인" onClick={() => onSubmit()} />
    </Flex>
  );
}

export default Login;
