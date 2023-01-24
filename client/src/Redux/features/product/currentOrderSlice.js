import { createSlice } from "@reduxjs/toolkit";

export const currentOrderSlice = createSlice({
  name: "currentOrder",
  initialState: {
    bowl: {},
    proteins: [],
    ingredients: [],
    price: 0,
  },
  reducers: {
    initialCurrent: (state, action) => {
      state.bowl = action.payload;
      state.price = parseFloat(action.payload.price);
      state.proteins = [];
      state.ingredients = [];
    },
    appendProtein: (state, action) => {
      state.proteins.push(action.payload);
    },
    removeProtein: (state, action) => {
      state.proteins = state.proteins.filter((val) => {
        return val !== action.payload;
      });
    },
    appendIngredient: (state, action) => {
      state.ingredients.push(action.payload);
    },
    removeIngredient: (state, action) => {
      state.ingredients = state.ingredients.filter((val) => {
        return val !== action.payload;
      });
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const {
  initialCurrent,
  appendProtein,
  removeProtein,
  removeIngredient,
  appendIngredient,
  setPrice,
} = currentOrderSlice.actions;
export default currentOrderSlice.reducer;
