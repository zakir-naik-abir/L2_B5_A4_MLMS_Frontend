/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoadingSpinner } from "@/components/shared/LoadingSpinner";
import { useGetBorrowSummaryQuery } from "@/redux/features/Borrow/borrowApi";

export const BorrowSummary = () => {
  const { data, isLoading, isError } = useGetBorrowSummaryQuery();

  if (isLoading) return <LoadingSpinner />;
  if (isError)
    return (
      <div className="text-center items-center text-red-500">
        Error summary...
      </div>
    );
  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-4">
        Total Borrow Summary: {data?.data?.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead className="bg-gray-100 ">
            <tr className="*:border *:py-2">
              <th>Book Title</th>
              <th>ISBN</th>
              <th>Total Borrowed</th>
            </tr>
          </thead>
          <tbody className="border">
            {data?.data?.map((item: any) => (
              <tr
                key={item.isbn}
                className="text-center *:px-4 *:py-2 *:border"
              >
                <td>{item.bookTitle.title}</td>
                <td>{item.bookTitle.isbn}</td>
                <td>{item.totalQuantityBorrowed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
