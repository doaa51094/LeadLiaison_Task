import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  category: string;
  loading: boolean;

}

const initialState: CategoryState = {
  category: "All",
  loading: false,

};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export default categorySlice.reducer;
export const { setCategory,setLoading  } = categorySlice.actions;
