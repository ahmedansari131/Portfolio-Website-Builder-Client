import { configureStore } from "@reduxjs/toolkit";
import { editorSlice, dropdownSlice } from "../slices";
import { authApi } from "../../services/api/authApi";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    editor: editorSlice,
    dropdown: dropdownSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
