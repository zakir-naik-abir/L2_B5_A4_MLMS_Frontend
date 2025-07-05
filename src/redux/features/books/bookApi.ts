/* eslint-disable @typescript-eslint/no-explicit-any */
import type { BookFormValues, IBook } from "@/types/book";
import { BASE_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const booksApi = createApi({
  reducerPath: "booksApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    // baseUrl: import.meta.env.BASE_URL,
  }),
  tagTypes: ["Books"],
  endpoints: (builder) => ({
    getBooks: builder.query<any, void>({
      query: () => `/books`,
      providesTags: ["Books"],
    }),

    getBookById: builder.query<IBook, string>({
      query: (id) => `/books/${id}`,
      transformResponse: (response: { data: IBook }) => response.data,
    }),

    addBook: builder.mutation<IBook, BookFormValues>({
      query: (newBook) => ({
        url: "/create-book",
        method: "POST",
        body: newBook,
      }),
      invalidatesTags: ["Books"],
    }),

    updateBook: builder.mutation<IBook, { id: string; data: Partial<IBook> }>({
      query: ({ id, data }) => ({
        url: `/edit-book/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),

    deleteBook: builder.mutation<{ success: boolean; id: string }, string>({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookByIdQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = booksApi;
