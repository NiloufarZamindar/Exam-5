import axios from "axios";

export const fetchBowls = () => {
  return axios.post("/api/getBowls");
};
export const fetchBowlById = (id) => {
  return axios.post("/api/getBowlById",{id});
};
