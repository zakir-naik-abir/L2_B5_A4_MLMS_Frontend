import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import type { IBook } from '@/types/book';
import { useAddBookMutation } from '@/redux/features/books/bookApi';

export const AddBook = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IBook>();
  const navigate = useNavigate();
  const [addBook, { isLoading }] = useAddBookMutation();

  const onSubmit = async (data: IBook) => {
    try {
      await addBook({ ...data, copies: Number(data.copies) }).unwrap();
      toast.success('Book added successfully!');
      navigate('/');
    } catch (error) {
      toast.error(`Failed to add book. ${error}`);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-3xl font-bold mb-4">Add New Book</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        {/* Title, Author, Genre, ISBN, Description, Copies fields */}
        <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input {...register('title', { required: 'Title is required' })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
        </div>
         <div>
            <label className="block text-sm font-medium text-gray-700">Author</label>
            <input {...register('author', { required: 'Author is required' })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
            {errors.author && <p className="text-red-500 text-xs mt-1">{errors.author.message}</p>}
        </div>
         <div>
            <label className="block text-sm font-medium text-gray-700">Genre</label>
            <input {...register('genre', { required: 'Genre is required' })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
            {errors.genre && <p className="text-red-500 text-xs mt-1">{errors.genre.message}</p>}
        </div>
         <div>
            <label className="block text-sm font-medium text-gray-700">ISBN</label>
            <input {...register('isbn', { required: 'ISBN is required' })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
            {errors.isbn && <p className="text-red-500 text-xs mt-1">{errors.isbn.message}</p>}
        </div>
         <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea {...register('description', { required: 'Description is required' })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
        </div>
         <div>
            <label className="block text-sm font-medium text-gray-700">Copies</label>
            <input type="number" {...register('copies', { required: 'Copies is required', min: 0 })} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"/>
            {errors.copies && <p className="text-red-500 text-xs mt-1">{errors.copies.message}</p>}
        </div>
        
        <button type="submit" disabled={isLoading} className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 disabled:bg-gray-400">
          {isLoading ? 'Adding...' : 'Add Book'}
        </button>
      </form>
    </div>
  );
};
