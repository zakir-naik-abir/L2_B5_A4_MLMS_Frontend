/* eslint-disable @typescript-eslint/no-explicit-any */
import { useDeleteBookMutation, useGetBooksQuery } from '@/redux/features/books/bookApi';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

export const BookList = () => {
  const { data, isLoading, isError } = useGetBooksQuery();
  console.log(data)
  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await deleteBook(id).unwrap();
        toast.success('Book deleted successfully!');
      } catch (error) {
        toast.error(`Failed to delete book. ${error}`);
      }
    }
  };

  if (isLoading) return <p className="text-center mt-8">Loading...</p>;
  if (isError) return <p className="text-center mt-8 text-red-500">Error fetching books.</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Total Books Item: {data?.data?.length}</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border">Title</th>
              <th className="py-2 px-4 border">Author</th>
              <th className="py-2 px-4 border">Genre</th>
              <th className="py-2 px-4 border">Copies</th>
              <th className="py-2 px-4 border">Available</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((book: any) => (
              <tr key={book._id} className="text-center">
                <td className="py-2 px-4 border">{book.title}</td>
                <td className="py-2 px-4 border">{book.author}</td>
                <td className="py-2 px-4 border">{book.genre}</td>
                <td className="py-2 px-4 border">{book.copies}</td>
                <td className={`py-2 px-4 border ${book.available ? 'text-green-600' : 'text-red-600'}`}>
                  {book.available ? 'Yes' : 'No'}
                </td>
                <td className="py-2 px-4 border space-x-2">
                  <Link to={`/edit-book/${book._id}`} className="bg-blue-500 text-white px-3 py-1 rounded">Edit</Link>
                  <button onClick={() => handleDelete(book._id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
                  <Link to={`/borrow/${book._id}`} className="bg-green-500 text-white px-3 py-1 rounded">Borrow</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
