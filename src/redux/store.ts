import { configureStore } from "@reduxjs/toolkit";
import reducer from "./features/dataSlice";
const store = configureStore({
  reducer,
});
export type RootState = ReturnType<typeof store.getState>;

export default store;

export type AppDispatch = typeof store.dispatch;