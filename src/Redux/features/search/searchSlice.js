import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
  isStart: false,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.searchValue = action.payload;
    },
    setStart: (state, action) => {
      state.isStart = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setValue, setStart } = searchSlice.actions;

export default searchSlice.reducer;
