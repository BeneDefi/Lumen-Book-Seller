import { cookies } from 'next/headers';
import { getBooks } from '@/lib/data';
import NavBar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { PlusCircle, BookOpen } from 'lucide-react';

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const auth = cookieStore.get('auth');

  if (!auth || auth.value !== 'true') {
    redirect('/login');
  }

  const books = await getBooks();

  return (
    <main className="min-h-screen bg-[#fafafa] flex flex-col">
      <NavBar />
      <div className="flex-1 mx-auto max-w-[1440px] px-5 py-12 w-full lg:px-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-[#181818]">Seller Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1">Welcome back, Admin</p>
          </div>
          <Link
            href="/dashboard/new"
            className="flex items-center gap-2 h-12 rounded-md bg-[#9A35D4] px-6 text-sm font-semibold text-white shadow-md hover:bg-[#8E26C7] transition"
          >
            <PlusCircle size={18} />
            Add New Book
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Total Listings</p>
            <p className="text-4xl font-bold text-[#9A35D4] mt-2">{books.length}</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Total Ratings</p>
            <p className="text-4xl font-bold text-[#9A35D4] mt-2">
              {books.reduce((sum, b) => sum + b.ratingsCount, 0).toLocaleString()}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Categories</p>
            <p className="text-4xl font-bold text-[#9A35D4] mt-2">
              {new Set(books.map(b => b.category)).size}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2">
            <BookOpen size={18} className="text-[#9A35D4]" />
            <h2 className="text-lg font-semibold text-[#181818]">Your Listings</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-[#f7f3fb] text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <th className="px-6 py-3">Cover</th>
                  <th className="px-6 py-3">Title</th>
                  <th className="px-6 py-3">Author</th>
                  <th className="px-6 py-3">Category</th>
                  <th className="px-6 py-3">Price</th>
                  <th className="px-6 py-3">Ratings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {books.map((book) => (
                  <tr key={book.id} className="hover:bg-[#fdf7ff] transition">
                    <td className="px-6 py-4">
                      <div className="relative h-16 w-12 overflow-hidden rounded-lg">
                        <Image src={book.coverImageUrl} alt={book.title} fill className="object-cover" />
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Link href={`/books/${book.slug}`} className="font-semibold text-[#222] hover:text-[#9A35D4] transition text-sm">
                        {book.title}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{book.author}</td>
                    <td className="px-6 py-4">
                      <span className="rounded-full bg-[#eedcf5] px-3 py-1 text-xs font-medium text-[#9d57c6]">
                        {book.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-[#9A35D4]">${book.price}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{book.ratingsCount.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
