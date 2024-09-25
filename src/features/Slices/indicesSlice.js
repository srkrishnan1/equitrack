// features/Slices/indicesSlice.js
import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const indicesAdapter = createEntityAdapter();

const initialState = indicesAdapter.getInitialState();

const indicesSlice = createSlice({
  name: "indices",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      apiSlice.endpoints.getIndexData.matchFulfilled,
      (state, action) => {
        // Extract the data and symbol from the payload
        const { data, symbol, previousClosePrice } = action.payload;

        // Create an index object
        const indexData = { id: symbol, symbol, data, previousClosePrice };

        // Upsert the index data using the adapter
        indicesAdapter.upsertOne(state, indexData);
      }
    );
  },
});

// Selectors
export const { selectAll: selectAllIndices, selectById: selectIndexById } =
  indicesAdapter.getSelectors((state) => state.indices);

// Export the reducer
export default indicesSlice.reducer;
