import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice.js";

export default const store = configureStore({
    reducer: {
        user: userReducer,
    }
});
