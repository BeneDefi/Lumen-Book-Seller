import { getBooks } from '@/lib/data';
import NavBar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default async function BooksPage({ searchParams }: { searchParams: Promise<{ category?: string; sort?: 'price' | 'newest' }> }) {
  const params = await searchParams;
  const books = await getBooks({ category: params.category, sort: params.sort });

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <NavBar />
      <div className="flex-1 mx-auto max-w-[1440px] px-5 py-10 w-full lg:px-20">
        <h1 className="text-3xl font-bold mb-6 text-[#181818]">Catalog</h1>
        
        <div className="mb-8 flex flex-wrap gap-4">
          <Link href="/books" className="px-4 py-2 bg-[#f4f4f4] rounded-md text-sm font-medium text-[#222]">All</Link>
          <Link href="/books?category=Fiction" className="px-4 py-2 bg-[#f4f4f4] rounded-md text-sm font-medium text-[#222]">Fiction</Link>
          <Link href="/books?category=Science Fiction" className="px-4 py-2 bg-[#f4f4f4] rounded-md text-sm font-medium text-[#222]">Science Fiction</Link>
          <Link href="/books?sort=price" className="px-4 py-2 bg-[#f4f4f4] rounded-md text-sm font-medium text-[#222]">Sort: Price</Link>
          <Link href="/books?sort=newest" className="px-4 py-2 bg-[#f4f4f4] rounded-md text-sm font-medium text-[#222]">Sort: Newest</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {books.map((book) => (
            <Link key={book.id} href={`/books/${book.slug}`} className="group block rounded-2xl bg-[#f9f9f9] p-4 transition hover:shadow-lg">
              <div className="relative h-[250px] w-full mb-4 overflow-hidden rounded-xl">
                <Image src={book.coverImageUrl} alt={book.title} fill className="object-cover transition-transform group-hover:scale-105" />
              </div>
              <span className="text-[11px] font-medium text-[#9A35D4]">{book.category}</span>
              <h2 className="text-lg font-bold text-[#202020] leading-tight mt-1">{book.title}</h2>
              <p className="text-sm text-[#666] mt-1">{book.author}</p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xl font-bold text-[#a642d8]">${book.price}</p>
              </div>
            </Link>
          ))}
          {books.length === 0 && (
            <div className="col-span-full py-20 text-center text-gray-500">
              No books found matching the criteria.
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
