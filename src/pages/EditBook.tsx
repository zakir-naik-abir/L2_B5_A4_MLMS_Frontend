import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";
import type { IBook } from "@/types/book";
import {
  useGetBookByIdQuery,
  useUpdateBookMutation,
} from "@/redux/features/books/bookApi";
import { Button } from "@/components/ui/button";
import { ImSpinner11 } from "react-icons/im";

export const EditBook = () => {
  const { id } = useParams<{ id: string }>();
  const { data: book } = useGetBookByIdQuery(id!);
  const { register, handleSubmit, reset } = useForm<IBook>();
  const navigate = useNavigate();
  const [updateBook, { isLoading }] = useUpdateBookMutation();

  useEffect(() => {
    if (book) {
      reset(book);
    }
  }, [book, reset]);

  const onSubmit = async (data: IBook) => {
    try {
      await updateBook({
        id: id!,
        data: { ...data, copies: Number(data.copies) },
      }).unwrap();
      toast.success("Book updated successfully!");
      navigate("/");
    } catch (error) {
      toast.error(`Failed to update book. ${error}`);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-3xl font-bold mb-4">Edit Book</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-white p-6 rounded-lg shadow-md"
      >
        {/* All fields like AddBook form */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            {...register("title")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Author
          </label>
          <input
            {...register("author")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Genre
          </label>
          <input
            {...register("genre")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            {...register("description")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Copies
          </label>
          <input
            type="number"
            {...register("copies", { min: 0 })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-indigo-400 text-white py-2 rounded-md hover:bg-indigo-600 disabled:bg-gray-400"
        >
          {isLoading ? (
            <div className="flex justify-center ">
              <ImSpinner11 className="animate-spin w-6 h-6 text-center" />
            </div>
          ) : (
            "Update Book"
          )}
        </Button>
      </form>
    </div>
  );
};
