export interface User {
  id: number;
  account: string;
  email: string;
  nickname: string;
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
