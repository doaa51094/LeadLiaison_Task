import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoryState {
  category: string;

}

const initialState: CategoryState = {
  category: "All",

};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },

  },
});

export default categorySlice.reducer;
export const { setCategory  } = categorySlice.actions;
