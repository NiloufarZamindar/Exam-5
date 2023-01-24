import axios from "axios";

export const addOrder = (inputs) => {
  return axios.post("/api/addOrder",inputs);
};
export const fetchOrders = (inputs) => {
  return axios.post("/api/fetchOrders",inputs);
};
