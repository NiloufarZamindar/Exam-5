import { createSlice } from "@reduxjs/toolkit";
export const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
  },
  reducers: {
    initialCart: (state) => {
      state.orders = [];
    },
    setOrders: (state, action) => {
        state.orders = action.payload;
    },
  },
});

export const { initialOrder, setOrders } = orderSlice.actions;
export default orderSlice.reducer;
