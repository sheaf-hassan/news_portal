import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2" }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => `/pokemon`,
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
