import { configureStore, createReducer } from "@reduxjs/toolkit";
import userReducer from "./src/features/user/userSlice";
import cartRedcer from './src/features/cart/cartSlice';
const store = configureStore({
    reducer: {
        user: userReducer,
        cart:;
    }
});

export default store;
