import { createSlice, current } from "@reduxjs/toolkit";
import sumBy from "lodash/sumBy";
import isEqual from "lodash/isEqual";
import { cfp } from "./../../../utils/cfp";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    totalPrice: 0,
    totalCount: 0,
  },
  reducers: {
    initialCart: (state)=>{
      state.products = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
    appendProduct: (state, action) => {
      let currentState = current(state).products;
      let findOrder = currentState.find((product) => {
        return (
          isEqual(product.order.bowl, action.payload.order.bowl) &&
          isEqual(product.order.proteins, action.payload.order.proteins) &&
          isEqual(product.order.ingredients, action.payload.order.ingredients)
        );
      });
      if (findOrder) {
        state.products.map((product) => {
          if (findOrder.id === product.id) {
            product.count = action.payload.count + product.count;
            product.order.price = cfp(
              parseFloat(action.payload.order.price + product.order.price)
            );
            return product;
          } else {
            return product;
          }
        });
      } else {
        state.products.push(action.payload);
      }
      state.totalPrice = sumBy(state.products, (product) => {
        return product.order.price;
      });
      state.totalCount = sumBy(state.products, (product) => {
        return product.count;
      });
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((product) => {
        return product.id !== action.payload;
      });
      state.totalPrice = sumBy(state.products, (product) => {
        return product.order.price;
      });
      state.totalCount = sumBy(state.products, (product) => {
        return product.count;
      });
    },
    increaseCount: (state, action) => {
      state.products.map((product) => {
        if (action.payload === product.id) {
          product.order.price = cfp(
            (product.count + 1) *
              parseFloat(product.order.price / product.count)
          );
          product.count++;
          return product;
        } else {
          return product;
        }
      });
      state.totalPrice = sumBy(state.products, (product) => {
        return product.order.price;
      });
      state.totalCount = sumBy(state.products, (product) => {
        return product.count;
      });
    },
    decreaseCount: (state, action) => {
      state.products.map((product) => {
        if (action.payload === product.id) {
          product.order.price = cfp(
            (product.count - 1) *
              parseFloat(product.order.price / product.count)
          );
          product.count--;
          if (product.count <= 0) {
            state.products = state.products.filter((pr) => {
              return pr.id !== product.id;
            });
          }
          return product;  
        } else {
          return product;
        }
      });
      state.totalPrice = sumBy(state.products, (product) => {
        return product.order.price;
      });
      state.totalCount = sumBy(state.products, (product) => {
        return product.count;
      });
    },
  },
});

export const { initialCart,appendProduct, removeProduct, increaseCount, decreaseCount } =
  cartSlice.actions;
export default cartSlice.reducer;
