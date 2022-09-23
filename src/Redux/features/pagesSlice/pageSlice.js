import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageList: [
    "Naslovna",
    "Onama",
    "Programi",
    "Blogovi",
    "BlogPostPage",
    "Kontakti",
    "Raspored",
    "Admin/login",
    "Galerija",
    "Dojmovi",
  ],
};

export const pageSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const { addPage } = pageSlice.actions;

export default pageSlice.reducer;
