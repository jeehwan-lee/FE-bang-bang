import { SignUpInfo } from "../models/user";
import { defaultInstance } from "../utils/instance";

export const signUp = async (signUpInfo: SignUpInfo) => {
  const { passwordCheck, ...restSignUpInfo } = signUpInfo;

  try {
    const { data } = await defaultInstance.post("/user/signup", restSignUpInfo);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const checkAccountExist = async (account: string) => {
  const { data } = await defaultInstance.get(
    `/user/validate?account=${account}&email=&nickname=`
  );
  return data;
};

export const checkEmailExist = async (email: string) => {
  const { data } = await defaultInstance.get(
    `/user/validate?email=${email}&nickname=&account=`
  );
  return data;
};

export const checkNicknameExist = async (nickname: string) => {
  const { data } = await defaultInstance.get(
    `/user/validate?nickname=${nickname}&account=&email=`
  );
  return data;
};
