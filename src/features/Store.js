// features/Store.js
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import indicesSlice from "./Slices/indicesSlice";
import topGainersSlice from "./Slices/topGainersSlice";
import topLosersSlice from "./Slices/topLosersSlice";
import mostactiveSlice from "./Slices/mostactive";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    indices: indicesSlice,
    topGainers: topGainersSlice,
    topLosers: topLosersSlice,
    mostactive: mostactiveSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
