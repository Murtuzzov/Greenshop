
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaginationState {
  currentPage: number;
  productsPerPage: number;
}

const initialState: PaginationState = {
  currentPage: 1,
  productsPerPage: 9,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setProductsPerPage(state, action: PayloadAction<number>) {
      state.productsPerPage = action.payload;
    },
  },
});

export const { setPage, setProductsPerPage } = paginationSlice.actions;
export default paginationSlice.reducer;
