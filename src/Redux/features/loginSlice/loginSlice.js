import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admin: { username: "" },
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setAdmin: (state, action) => {
      state.admin = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAdmin } = loginSlice.actions;

export default loginSlice.reducer;
