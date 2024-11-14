import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Utils/cartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
