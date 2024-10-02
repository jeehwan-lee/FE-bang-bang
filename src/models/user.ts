export interface User {
  id: number;
  email: string;
  name: string;
  photoUrl: string;
}

export interface SignUpInfo {
  account: string;
  email: string;
  password: string;
  passwordCheck: string;
  nickname: string;
}

export interface LoginInfo {
  account: string;
  password: string;
}
