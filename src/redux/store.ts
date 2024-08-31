// src/redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./slices/paginationSlice";
import filterSaleReducer from "./slices/filterSaleSlice";
import activeLinkReducer from "./slices/activeLinkSlice";
import filterReducer from "./slices/filterSlice";
import cartReducer from "./slices/cartSlice"; // Импортируйте новый слайс

const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    filterSale: filterSaleReducer,
    activeLink: activeLinkReducer,
    filter: filterReducer,
    cart: cartReducer, // Добавьте новый редьюсер
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
