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
