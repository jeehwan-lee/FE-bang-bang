export const expEmail = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

export const expAccount = /^[a-z0-9]{1,15}$/;

export const expPassword =
  /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;"'<>?,./~`-]).{8,}$/;

export const expNickname = /^[a-zA-Z0-9가-힣]{4,10}$/;
