"use client";

import { useForm } from 'react-hook-form';
import { addBookAction } from '../actions';
import NavBar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

type BookFormData = {
  title: string;
  author: string;
  price: string;
  description: string;
  coverImageUrl: string;
  category: string;
};

const categories = ['Fiction', 'Non-Fiction', 'Science Fiction', 'Self-Help', 'Biography', 'History', 'Mystery', 'Adventure'];

export default function AddBookPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<BookFormData>();
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const onSubmit = async (data: BookFormData) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));
    await addBookAction(formData);
    setSuccess(true);
    setTimeout(() => router.push('/dashboard'), 1500);
  };

  return (
    <main className="min-h-screen bg-[#fafafa] flex flex-col">
      <NavBar />
      <div className="flex-1 mx-auto max-w-2xl px-5 py-12 w-full">
        <Link href="/dashboard" className="flex items-center gap-2 text-sm text-[#9A35D4] font-medium mb-8 hover:opacity-80 transition w-fit">
          <ArrowLeft size={16} />
          Back to Dashboard
        </Link>

        <h1 className="text-3xl font-bold text-[#181818] mb-8">Add New Book</h1>

        {success && (
          <div className="bg-green-50 text-green-600 p-4 rounded-md mb-6 text-sm font-medium">
            Book added successfully! Redirecting...
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              {...register('title', { required: 'Title is required' })}
              className="w-full h-12 rounded-md bg-[#f4f4f4] px-4 text-sm text-[#222] outline-none border border-transparent focus:border-[#9A35D4] transition"
              placeholder="Book title"
            />
            {errors.title && <p className="text-xs text-red-500 mt-1">{errors.title.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Author</label>
            <input
              {...register('author', { required: 'Author is required' })}
              className="w-full h-12 rounded-md bg-[#f4f4f4] px-4 text-sm text-[#222] outline-none border border-transparent focus:border-[#9A35D4] transition"
              placeholder="Author name"
            />
            {errors.author && <p className="text-xs text-red-500 mt-1">{errors.author.message}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price ($)</label>
              <input
                type="number"
                step="0.01"
                {...register('price', { required: 'Price is required', min: { value: 0, message: 'Price must be positive' } })}
                className="w-full h-12 rounded-md bg-[#f4f4f4] px-4 text-sm text-[#222] outline-none border border-transparent focus:border-[#9A35D4] transition"
                placeholder="9.99"
              />
              {errors.price && <p className="text-xs text-red-500 mt-1">{errors.price.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                {...register('category', { required: 'Category is required' })}
                className="w-full h-12 rounded-md bg-[#f4f4f4] px-4 text-sm text-[#222] outline-none border border-transparent focus:border-[#9A35D4] transition"
              >
                <option value="">Select category</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              {errors.category && <p className="text-xs text-red-500 mt-1">{errors.category.message}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cover Image URL</label>
            <input
              {...register('coverImageUrl', { required: 'Cover image URL is required' })}
              className="w-full h-12 rounded-md bg-[#f4f4f4] px-4 text-sm text-[#222] outline-none border border-transparent focus:border-[#9A35D4] transition"
              placeholder="https://images.unsplash.com/..."
            />
            {errors.coverImageUrl && <p className="text-xs text-red-500 mt-1">{errors.coverImageUrl.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              {...register('description', { required: 'Description is required' })}
              rows={4}
              className="w-full rounded-md bg-[#f4f4f4] px-4 py-3 text-sm text-[#222] outline-none border border-transparent focus:border-[#9A35D4] transition resize-none"
              placeholder="Book description..."
            />
            {errors.description && <p className="text-xs text-red-500 mt-1">{errors.description.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-12 rounded-md bg-[#9A35D4] text-white font-semibold shadow-md hover:bg-[#8E26C7] transition disabled:opacity-60"
          >
            {isSubmitting ? 'Adding Book...' : 'Add Book'}
          </button>
        </form>
      </div>
      <Footer />
    </main>
  );
}
