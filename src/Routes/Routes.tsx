import { MainLayout } from '@/Layouts/MainLayout'
import { AddBook } from '@/pages/AddBook';
import { BookList } from '@/pages/BookList';

import { EditBook } from '@/pages/EditBook';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <BookList/>
      },
      
      // {
      //   path: "/book/:id",
      //   element: <BookDetails/>,
      //   loader: ({params})=> fetch(`BASE_URL/book/${params.id}`),
      // },
      {
        path: "/create-book",
        element: <AddBook/>
      },
      {
        path: "/edit-book/:id",
        element: <EditBook/>
      },
      // {
      //   path: "/borrow/:bookId",
      //   element: <BorrowBook/>
      // },
      // {
      //   path: "/borrow-summary",
      //   element: <BorrowSummary/>
      // },
    ]
  }
]);
