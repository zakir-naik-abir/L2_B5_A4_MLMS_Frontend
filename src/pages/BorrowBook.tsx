/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { useGetBookByIdQuery } from "@/redux/features/books/bookApi";
import { useBorrowBookMutation } from "@/redux/features/Borrow/borrowApi";
import type { BorrowFormData } from "@/types/borrow";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ImSpinner11 } from "react-icons/im";
import { useNavigate, useParams } from "react-router-dom";

export const BorrowBook = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const { data: book } = useGetBookByIdQuery(bookId!);
  console.log(book);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BorrowFormData>();
  const navigate = useNavigate();
  const [borrowBook, { isLoading }] = useBorrowBookMutation();

  const onSubmit = async (data: BorrowFormData) => {
    if (!book || data.quantity > book.copies) {
      toast.error(`Cannot borrow more than ${book?.copies} available copies.`);
      return;
    }

    try {
      await borrowBook({
        book: bookId!,
        quantity: Number(data.quantity),
        dueDate: data.dueDate,
      }).unwrap();
      toast.success("Book borrowed successfully");
      navigate("/borrow-summary");
    } catch (error: any) {
      toast.error(error.data?.message || "Failed borrow book");
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-3xl font-bold mb-4">Borrow: {book?.title}</h1>
      <p className="mb-4">Available Copies: {book?.copies}</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-white p-5 rounded-lg shadow-md"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <input
            type="number"
            {...register("quantity", {
              required: true,
              min: 1,
              max: book?.copies,
            })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.quantity && (
            <p className="text-red-500 text-xs mt-1">
              Please enter a valid quantity!
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Due Date
          </label>
          <input
            type="date"
            {...register("dueDate", {
              required: true,
              min: 1,
              max: book?.copies,
            })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />

          {errors.dueDate && (
            <p className="text-red-500 text-xs mt-1">Due date is required!</p>
          )}
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 disabled:bg-green-300"
        >
          {isLoading ? (
            <div className="flex justify-center ">
              <ImSpinner11 className="animate-spin w-6 h-6 text-center" />
            </div>
          ) : (
            "Borrow Now"
          )}
        </Button>
      </form>
    </div>
  );
};
