import { createSlice } from "@reduxjs/toolkit";

export const myFormSlice = createSlice({
  name: "myForm",
  initialState: {},
  reducers: {
    UPDATE_FORM_STATE: (state, action) => {
      state[action.payload.form] = action.payload.state;
    }
  }
});

export const { UPDATE_FORM_STATE } = myFormSlice.actions;

export const selectForm = (state, form) => {
  return (state && state.myForm && state.myForm[form]) || {};
};

export default myFormSlice.reducer;
