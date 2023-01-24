import axios from "axios";

export const loginUser = (inputs) => {
  return axios({
    method: "POST",
    data: inputs,
    withCredentials: true,
    url: "/api/login",
  });
};
export const signupUser = (inputs) => {
  return axios.post("/api/signup", inputs);
};
