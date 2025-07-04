import { configureStore } from '@reduxjs/toolkit';
import { booksApi } from './features/books/bookApi';
import { borrowApi } from './features/Borrow/borrowApi';


export const store = configureStore({
  reducer: {
   [booksApi.reducerPath]: booksApi.reducer,
   [borrowApi.reducerPath]: borrowApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, borrowApi.middleware ),
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
// export type AppStore = typeof store;