// features/Slices/topGainersSlice.js
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const topGainersAdapter = createEntityAdapter();

const initialState = topGainersAdapter.getInitialState();

const topGainersSlice = createSlice({
  name: "topGainers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.getTopGainers.matchFulfilled,
      (state, action) => {
        const response = action.payload;

        const updatedData = response?.map((e) => ({ id: e.symbol, data: e }));

        topGainersAdapter.setAll(state, updatedData);
      }
    );
  },
});

export const { selectAll: selectGainers } = topGainersAdapter.getSelectors(
  (state) => state?.topGainers || initialState
);

export default topGainersSlice.reducer;
