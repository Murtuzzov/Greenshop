// redux/slices/filterSaleSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FilterState = "all" | "sale";

interface FilterSaleSliceState {
  filter: FilterState;
}

const initialState: FilterSaleSliceState = {
  filter: "all",
};

const filterSaleSlice = createSlice({
  name: "filterSale",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<FilterState>) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSaleSlice.actions;
export default filterSaleSlice.reducer;
