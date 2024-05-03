import { combineReducers } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
export default combineReducers({
  data: dataSlice,
});

