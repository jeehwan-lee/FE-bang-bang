import React, { useEffect, useState } from "react";
import Flex from "../components/shared/Flex";
import Text from "../components/shared/Text";
import Input from "../components/shared/Input";
import PasswordInput from "../components/shared/PasswordInput";
import { useNavigate } from "react-router-dom";
import Button from "../components/shared/Button";
import AlertText from "../components/shared/AlertText";
import { SignUpInfo } from "../models/user";
import {
  expAccount,
  expEmail,
  expNickname,
  expPassword,
} from "../constants/regexp";
import { signUp } from "../apis/signUp";

interface checkInfoProps {
  account: string;
  email: string;
  nickname: string;
  password: string;
  passwordCheck: string;
}

function SignUp() {
  const navigate = useNavigate();

  const [signUpInfo, setSignUpInfo] = useState<SignUpInfo>({
    account: "",
    email: "",
    password: "",
    passwordCheck: "",
    nickname: "",
  });

  const [errorMessage, setErrorMessage] = useState<string>("");

  const [validCheck, setValidCheck] = useState<checkInfoProps>({
    account: "",
    email: "",
    nickname: "",
    password: "",
    passwordCheck: "",
  });

  const isValidSignUpInfo = () => {
    let isValid = true;

    let newErrors = {
      account: "",
      email: "",
      nickname: "",
      password: "",
      passwordCheck: "",
    };

    if (expNickname.test(signUpInfo.nickname) === false) {
      newErrors.nickname =
        "닉네임은 4~10자의 한글, 영문 대소문자와 숫자만 가능합니다.";
      isValid = false;
    }

    if (expAccount.test(signUpInfo.account) === false) {
      newErrors.account =
        "아이디는 15자 이하의 영문 소문자와 숫자만 가능합니다.";
      isValid = false;
    }

    if (expEmail.test(signUpInfo.email) === false) {
      newErrors.email = "이메일 형식에 맞게 입력해주세요.";
      isValid = false;
    }

    if (expPassword.test(signUpInfo.password) === false) {
      newErrors.password =
        "8자리 이상의 영문 소문자, 숫자, 특수문자로 조합해주세요.";
      isValid = false;
    }

    if (signUpInfo.password !== signUpInfo.passwordCheck) {
      newErrors.passwordCheck = "비밀번호가 일치하지 않습니다";
      isValid = false;
    }

    setValidCheck(newErrors);
    return isValid;
  };

  const onChange = (e: { target: { name: any; value: any } }) => {
    setSignUpInfo({ ...signUpInfo, [e.target.name]: e.target.value });
  };

  const emailCheck = async () => {
    /*
  /const result = await checkUserEmailExist(signUpInfo.email);

    if (result) {
      // 중복된 이메일이 있는 경우
      alert("이미 존재하는 이메일입니다.");
      setSignUpInfo({ ...signUpInfo, email: "" });
    } else {
      alert("사용 가능한 이메일입니다");
      setExistCheck({ ...existCheck, email: "" });
    } */
  };

  const nickname = async () => {
    /*
    const result = await checkUserNameExist(signUpInfo.nickname);

    if (result) {
      // 중복된 이메일이 있는 경우
      alert("이미 존재하는 닉네임입니다.");
      setSignUpInfo({ ...signUpInfo, nickname: "" });
    } else {
      alert("사용 가능한 닉네임입니다");
      setExistCheck({ ...existCheck, nickname: "" });
    } */
  };

  const onSubmit = async () => {
    if (!isValidSignUpInfo()) {
      return;
    }

    console.log(signUpInfo);

    const response = await signUp(signUpInfo);

    navigate("/completeSignUp");

    // if (existCheck.email !== "") {
    //   alert(existCheck.email);
    //   return;
    // }

    // if (existCheck.nickname !== "") {
    //   alert(existCheck.nickname);
    //   return;
    // }

    //const response = await signUp(signUpInfo);

    /*
    if (!response) {
      alert("회원가입 중 에러가 발생했습니다.");
      return;
    } */

    // navigate("/completeSignUp");
  };

  return (
    <Flex direction="flex-col" justify="justify-start" classNameProps="h-full">
      <Flex
        direction="flex-row"
        justify="justify-center"
        classNameProps="w-full"
      >
        <Text label="회원가입" color="black" size="lg" bold={true} />
      </Flex>
      <div className="h-[24px]"></div>
      <Text label="닉네임" bold={true} color="text-black" size="base" />
      <div className="h-[10px]"></div>
      <Input
        placeholder="4~10자 한글, 영문 대소문자, 숫자"
        name="nickname"
        value={signUpInfo.nickname}
        onChange={onChange}
      />
      <div className="h-[10px]"></div>
      {validCheck.nickname !== "" && (
        <AlertText alertLabel={validCheck.nickname} />
      )}
      <div className="h-[24px]"></div>
      <Text label="아이디" bold={true} color="black" size="base" />
      <div className="h-[10px]"></div>
      <Input
        placeholder="15자 이하 영문 소문자, 숫자"
        name="account"
        value={signUpInfo.account}
        onChange={onChange}
      />
      <div className="h-[10px]"></div>
      {validCheck.account !== "" && (
        <AlertText alertLabel={validCheck.account} />
      )}
      <div className="h-[24px]"></div>
      <Text label="이메일" bold={true} color="black" size="base" />
      <div className="h-[10px]"></div>
      <Input
        placeholder="이메일을 입력해주세요"
        name="email"
        value={signUpInfo.email}
        onChange={onChange}
      />
      <div className="h-[10px]"></div>
      {validCheck.email !== "" && <AlertText alertLabel={validCheck.email} />}
      <div className="h-[24px]"></div>
      <Text label="비밀번호" bold={true} color="black" size="base" />
      <div className="h-[10px]"></div>
      <PasswordInput
        placeholder="8자 이상 영문 소문자, 숫자, 특수문자 조합"
        name="password"
        value={signUpInfo.password}
        onChange={onChange}
      />
      <div className="h-[10px]"></div>
      {validCheck.password !== "" && (
        <AlertText alertLabel={validCheck.password} />
      )}
      <div className="h-[24px]"></div>
      <Text label="비밀번호 확인" bold={true} color="black" size="base" />
      <div className="h-[10px]"></div>
      <PasswordInput
        placeholder="비밀번호를 재입력하세요"
        name="passwordCheck"
        value={signUpInfo.passwordCheck}
        onChange={onChange}
      />
      <div className="h-[10px]"></div>
      {validCheck.passwordCheck !== "" && (
        <AlertText alertLabel={validCheck.passwordCheck} />
      )}
      <div className="h-[24px]"></div>
      <Button label="가입 완료" onClick={() => onSubmit()} />
    </Flex>
  );
}

export default SignUp;
