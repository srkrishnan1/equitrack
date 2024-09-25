
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const topLosersAdapter = createEntityAdapter();

const initialState = topLosersAdapter.getInitialState();

const topLosersSlice = createSlice({
  name: "topLosers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.getTopLosers.matchFulfilled,
      (state, action) => {
        const response = action.payload;

        const updatedData = response?.map((e) => ({ id: e.symbol, data: e }));

        topLosersAdapter.setAll(state, updatedData);
      }
    );
  },
});

export const { selectAll: selectLosers } = topLosersAdapter.getSelectors(
  (state) => state?.topLosers || initialState
);

export default topLosersSlice.reducer;
