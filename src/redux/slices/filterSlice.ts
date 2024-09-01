import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  category: string | null;
  size: string | null;
  price: number;
}

const initialState: FilterState = {
  category: null,
  size: null,
  price: 500,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string | null>) => {
      state.category = action.payload;
    },
    setSize: (state, action: PayloadAction<string | null>) => {
      state.size = action.payload;
    },
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
  },
});

export const { setCategory, setSize, setPrice } = filterSlice.actions;
export default filterSlice.reducer;
