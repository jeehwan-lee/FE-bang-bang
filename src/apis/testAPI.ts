import { defaultInstance } from "../utils/instance";

export const getUserListTest = async () => {
  try {
    const { data } = await defaultInstance.get(`/test/userList`);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const getUserInfoTest = async () => {
  try {
    const { data } = await defaultInstance.get(`/test/user/1`);
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const postUserTest = async (userInfo: any) => {
  try {
    const { data } = await defaultInstance.post("/test/user", userInfo);
    return data;
  } catch (e) {
    console.log(e);
  }
};
