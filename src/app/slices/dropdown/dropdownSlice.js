import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dropdownId: null,
}

const dropdownSlice = createSlice({
    name: "dropdown",
    initialState,
    reducers: {
        dropdownActive: (state, actions) => {
            const { dropdownId } = actions.payload;

            if (state.dropdownId !== dropdownId) {
                state.dropdownId = dropdownId
            }
            else if (state.dropdownId === dropdownId) {
                state.dropdownId = null;
            }


        }
    }
});

export default dropdownSlice.reducer;
export const { dropdownActive } = dropdownSlice.actions;