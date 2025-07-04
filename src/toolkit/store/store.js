import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../app/auth/authSlice";
import productReducer from "../app/product/productSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
  },
});
