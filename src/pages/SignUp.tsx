import React, { useEffect, useState } from "react";
import Flex from "../components/shared/Flex";
import Text from "../components/shared/Text";
import Input from "../components/shared/Input";
import PasswordInput from "../components/shared/PasswordInput";
import { useNavigate } from "react-router-dom";
import Button from "../components/shared/Button";
import AlertText from "../components/shared/AlertText";

interface existCheckProps {
  email: string;
  name: string;
}

function SignUp() {
  const navigate = useNavigate();

  const [signUpInfo, setSignUpInfo] = useState<any>({
    account: "",
    email: "",
    password: "",
    passwordCheck: "",
    name: "",
  });

  const [errorMessage, setErrorMessage] = useState<string>("");

  const [existCheck, setExistCheck] = useState<existCheckProps>({
    email: "이메일 중복확인을 해주세요",
    name: "닉네임 중복확인을 해주세요",
  });

  useEffect(() => {
    setExistCheck({ ...existCheck, email: "이메일 중복확인을 해주세요" });
  }, [signUpInfo.email]);

  useEffect(() => {
    setExistCheck({ ...existCheck, name: "닉네임 중복확인을 해주세요" });
  }, [signUpInfo.name]);

  const isValidSignUpInfo = () => {
    /*
    if (expEmail.test(signUpInfo.email) === false) {
      return "이메일 형식을 확인하세요";
    }

    if (expPassword.test(signUpInfo.password) === false) {
      return "비밀번호는 문자, 숫자, 특수문자 포함 8~20자리입니다";
    }

    if (signUpInfo.password !== signUpInfo.passwordCheck) {
      return "비밀번호가 일치하지 않습니다";
    }

    if (expName.test(signUpInfo.name) === false) {
      return "닉네임은 4자이상 8자이하입니다";
    }*/

    return "";
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

  const nameCheck = async () => {
    /*
    const result = await checkUserNameExist(signUpInfo.name);

    if (result) {
      // 중복된 이메일이 있는 경우
      alert("이미 존재하는 닉네임입니다.");
      setSignUpInfo({ ...signUpInfo, name: "" });
    } else {
      alert("사용 가능한 닉네임입니다");
      setExistCheck({ ...existCheck, name: "" });
    } */
  };

  const onSubmit = async () => {
    if (isValidSignUpInfo() !== "") {
      setErrorMessage(isValidSignUpInfo());
      return;
    }

    setErrorMessage("");

    if (existCheck.email !== "") {
      alert(existCheck.email);
      return;
    }

    if (existCheck.name !== "") {
      alert(existCheck.name);
      return;
    }

    //const response = await signUp(signUpInfo);

    /*
    if (!response) {
      alert("회원가입 중 에러가 발생했습니다.");
      return;
    } */

    navigate("/login");
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
        name="name"
        value={signUpInfo.name}
        onChange={onChange}
      />
      <div className="h-[10px]"></div>
      <AlertText alertLabel="이미 존재하는 닉네임입니다." />
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
      <AlertText alertLabel="이미 존재하는 아이디입니다." />
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
      <AlertText alertLabel="이미 가입된 이메일입니다." />
      <div className="h-[24px]"></div>
      <Text label="비밀번호" bold={true} color="black" size="base" />
      <div className="h-[10px]"></div>
      <Input
        placeholder="8자 이상 영문 소문자, 숫자, 특수문자 조합"
        name="password"
        value={signUpInfo.password}
        type="password"
        onChange={onChange}
      />
      <div className="h-[24px]"></div>
      <Text label="비밀번호 확인" bold={true} color="black" size="base" />
      <div className="h-[10px]"></div>
      <Input
        placeholder="비밀번호를 재입력하세요"
        name="passwordCheck"
        value={signUpInfo.passwordCheck}
        type="password"
        onChange={onChange}
      />
      <div className="h-[10px]"></div>
      <AlertText alertLabel="비밀번호가 일치하지 않습니다" />
      <div className="h-[24px]"></div>
      <Button label="가입 완료" onClick={() => onSubmit()} />
    </Flex>
  );
}

export default SignUp;
