
/* eslint-disable @typescript-eslint/no-explicit-any */

import type { BorrowSummary } from "@/types/borrow";
import { BASE_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
  reducerPath: 'borrowApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Books', 'BorrowSummary'],
  endpoints: (builder) =>({
    
    borrowBook: builder.mutation<any, { book: string; quantity:number; dueDate: string }>({
      query: ( book ) =>({
        url: `/borrow`,
        method: 'POST',
        body: book,
      }),
      invalidatesTags: ['Books', 'BorrowSummary'],
    }),

    getBorrowSummary: builder.query<BorrowSummary[], void>({
      query: () => '/borrow-summary',
      providesTags: ['BorrowSummary'],
    }),

  }),
})

export const { useBorrowBookMutation, useGetBorrowSummaryQuery } = borrowApi;