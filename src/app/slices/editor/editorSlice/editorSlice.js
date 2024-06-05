import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    elementId: null,
    elementText: null,
    elementStyles: null,
    elementAriaLabel: null,
    elementType: null,
    mainElement: null,
    templateDetail: null,
}

const editorSlice = createSlice({
    name: "editor",
    initialState,
    reducers: {
        getElement: (state, action) => {
            const { elementId, elementText, elementAriaLabel, elementType, mainElement } = action.payload;
            if (state.elementId === elementId && state.elementText === elementText) {
                state.elementId = null;
                state.elementAriaLabel = null;
                state.elementText = null;
                state.mainElement = null;
                state.elementType = null;
            }
            else {
                state.elementId = elementId;
                state.elementText = elementText;
                state.elementAriaLabel = elementAriaLabel;
                state.elementType = elementType;
                state.mainElement = mainElement;
            }
        },

        getElementStyle: (state, action) => {
            state.elementStyles = action.payload;
        },

        getTemplateDetail: (state, action) => {
            state.templateDetail = action.payload;
        }
    }
});

export default editorSlice.reducer;
export const { getElement, getElementStyle, getTemplateDetail } = editorSlice.actions;