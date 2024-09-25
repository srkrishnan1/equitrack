// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const BASE_URL = "http://127.0.0.1:5000/api";
// export const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
//   tagTypes: [
//     "stock",
//     "mutualFund",
//     "Index",
//     "Favorite",
//     "portfolio",
//     "TopGainers",
//     "TopLoser",
//   ],
//   endpoints: (builder) => ({}),
// });

// features/api/apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://127.0.0.1:5000/api";

export const apiSlice = createApi({
  reducerPath: "indicesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getIndexData: builder.query({
      query: (indexType) => `/index/${indexType}`,
      transformResponse: (response) => {
        // Include both the data and the symbol in the response
        return {
          data: response.data,
          symbol: response.symbol,
          previousClosePrice: response.previousClosePrice,
        };
      },
    }),
    getTopGainers: builder.query({
      query: () => `gainers`,
      transformResponse: (response) => {
        return response;
      },
    }),
    getTopLosers: builder.query({
      query: () => `losers`,
      transformResponse: (response) => {
        return response;
      },
    }),
    getMostactive: builder.query({
      query: () => `mostactive?limit=5`,
      transformResponse: (response) => {
        return response;
      },
    }),
  }),
});

export const { useGetIndexDataQuery, useGetTopGainersQuery, useGetTopLosersQuery, useGetMostactiveQuery } = apiSlice;
