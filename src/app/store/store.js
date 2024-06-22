import { configureStore } from "@reduxjs/toolkit";
import { editorSlice, dropdownSlice } from "../slices";
import { authApi } from "../../services/api/authApi";
import userSlice from "../slices/authentication/userSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    user: userSlice,
    editor: editorSlice,
    dropdown: dropdownSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
