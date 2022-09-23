import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./features/loaderSlice/loaderSlice";
import loginSlice from "./features/loginSlice/loginSlice";
import pageSlice from "./features/pagesSlice/pageSlice";
import searchSlice from "./features/search/searchSlice";
export const store = configureStore({
  reducer: {
    searchStore: searchSlice,
    pageStore: pageSlice,
    adminStore: loginSlice,
    loaderStore: loaderSlice,
  },
});
