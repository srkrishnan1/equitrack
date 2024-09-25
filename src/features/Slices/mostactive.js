// features/Slices/mostactiveSlice.js
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const mostactive = createEntityAdapter();

const initialState = mostactive.getInitialState();

const mostactiveSlice = createSlice({
  name: "mostactive",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.getMostactive.matchFulfilled,
      (state, action) => {
        const response = action.payload;

        const updatedData = response?.map((e) => ({ id: e.symbol, data: e }));

        mostactive.setAll(state, updatedData);
      }
    );
  },
});

export const { selectAll: selectMostactive } = mostactive.getSelectors(
  (state) => state?.mostactive || initialState
);

export default mostactiveSlice.reducer;
