import { MainLayout } from "@/Layouts/MainLayout";
import { AddBook } from "@/pages/AddBook";
import { BookList } from "@/pages/BookList";
import { BorrowBook } from "@/pages/BorrowBook";
import { BorrowSummary } from "@/pages/BorrowSummary";
import { EditBook } from "@/pages/EditBook";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <BookList />,
      },

      {
        path: "/create-book",
        element: <AddBook />,
      },
      {
        path: "/edit-book/:id",
        element: <EditBook />,
      },
      {
        path: "/borrow/:bookId",
        element: <BorrowBook />,
      },

      {
        path: "/borrow-summary",
        element: <BorrowSummary />,
      },
    ],
  },
]);
