import { configureStore } from '@reduxjs/toolkit'

import currentOrderSlice from './features/product/currentOrderSlice';
import cartSlice from './features/product/cartSlice';
import orderSlice from './features/product/orderSlice';
export default configureStore({
    reducer: {
        currentOrder: currentOrderSlice,
        cart: cartSlice,
        order: orderSlice,
    },
})


