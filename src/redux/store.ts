// store.ts
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { combineReducers } from "redux";
import paginationReducer from "./slices/paginationSlice";
import filterSaleReducer from "./slices/filterSaleSlice";
import activeLinkReducer from "./slices/activeLinkSlice";
import filterReducer from "./slices/filterSlice";
import cartReducer from "./slices/cartSlice";

// Настройка для сохранения состояния корзины
const persistConfig = {
  key: "root", // ключ для сохранения в localStorage
  storage,
  whitelist: ["cart"], // Сохраняем только редьюсер корзины
};

// Комбинируем редьюсеры
const rootReducer = combineReducers({
  pagination: paginationReducer,
  filterSale: filterSaleReducer,
  activeLink: activeLinkReducer,
  filter: filterReducer,
  cart: cartReducer, // редьюсер корзины
});

// Персистентный редьюсер
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Создаем store с использованием персистентного редьюсера
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Отключаем проверку сериализуемости, потому что redux-persist работает с объектами
    }),
});

// Экспортируем persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
