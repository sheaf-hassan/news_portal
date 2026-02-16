import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogsApi = createApi({
  reducerPath: "blogsApi",
  tagTypes: ["Blog"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://crudcrud.com/api/b638f95c4d204d20bda9a1d8d7adf2b3",
  }),

  endpoints: (builder) => ({
    // get blogs
    getBlogs: builder.query({
      query: () => "/blog",
      providesTags: ["Blog"],
    }),

    // create blog
    createBlog: builder.mutation({
      query: (payload) => ({
        url: "/blog",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Blog"],
    }),
  }),
});

export const { useGetBlogsQuery, useCreateBlogMutation } = blogsApi;
