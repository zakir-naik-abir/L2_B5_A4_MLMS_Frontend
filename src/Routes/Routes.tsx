import { MainLayout } from '@/Layouts/MainLayout'
import { AddBook } from '@/pages/AddBook/AddBook'
import { BorrowSummary } from '@/pages/BorrowSummary/BorrowSummary';
import { Home } from '@/pages/Home/Home'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/add-book",
        element: <AddBook/>
      },
      {
        path: "/borrow-summary",
        element: <BorrowSummary/>
      },
    ]
  }
]);
