import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://newsapi.org/v2" }),
 
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () =>
        `/everything?q=apple&from=2026-02-14&to=2026-02-14&sortBy=popularity&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`,
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
