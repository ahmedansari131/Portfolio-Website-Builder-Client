import { configureStore } from "@reduxjs/toolkit";
import { editorSlice, dropdownSlice } from '../slices'

export const store = configureStore({
    reducer: {
        editor: editorSlice,
        dropdown: dropdownSlice,
    },
});