import axios from "axios";

const defaultAPI = (url: string, options?: any) => {
  return axios.create({ baseURL: url, ...options });
};

export const defaultInstance = defaultAPI("http://localhost:8000");
