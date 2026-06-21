import { getBookBySlug, getBooks, getRecommendedBooks } from '@/lib/data';
import NavBar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import { ShoppingBasket } from 'lucide-react';

export const revalidate = 3600;

export async function generateStaticParams() {
  const books = await getBooks();
  return books.map((book) => ({
    slug: book.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const book = await getBookBySlug(slug);
  if (!book) return { title: 'Book Not Found | Lumen Books' };
  
  return {
    title: `${book.title} | Lumen Books`,
    description: book.description,
    openGraph: {
      title: book.title,
      description: book.description,
      images: [book.coverImageUrl],
    }
  };
}

async function RecommendedBooks({ currentSlug }: { currentSlug: string }) {
  const books = await getRecommendedBooks(currentSlug);
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
      {books.map((book) => (
        <Link key={book.id} href={`/books/${book.slug}`} className="group block rounded-2xl bg-[#f9f9f9] p-4 transition hover:shadow-lg">
          <div className="relative h-[200px] w-full mb-4 overflow-hidden rounded-xl">
            <Image src={book.coverImageUrl} alt={book.title} fill className="object-cover transition-transform group-hover:scale-105" />
          </div>
          <h3 className="text-md font-bold text-[#202020] leading-tight">{book.title}</h3>
          <p className="text-sm text-[#666] mt-1">{book.author}</p>
          <p className="text-lg font-bold text-[#a642d8] mt-2">${book.price}</p>
        </Link>
      ))}
    </div>
  );
}

function RecommendedSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="rounded-2xl bg-[#f9f9f9] p-4 animate-pulse">
          <div className="h-[200px] w-full bg-gray-200 rounded-xl mb-4" />
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
          <div className="h-3 bg-gray-200 rounded w-1/2 mb-4" />
          <div className="h-5 bg-gray-200 rounded w-1/4" />
        </div>
      ))}
    </div>
  );
}

export default async function BookDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = await getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <NavBar />
      <div className="flex-1 mx-auto max-w-[1250px] px-5 py-16 w-full lg:px-10">
        <div className="grid gap-12 md:grid-cols-[400px_1fr]">
          <div className="relative h-[600px] w-full overflow-hidden rounded-2xl shadow-xl">
            <Image src={book.coverImageUrl} alt={book.title} fill className="object-cover" priority />
          </div>

          <div className="flex flex-col py-4">
            <span className="rounded-md bg-[#eedcf5] px-3 py-1 text-xs font-medium text-[#9d57c6] w-fit mb-4">
              {book.category}
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#181818] leading-tight mb-4">{book.title}</h1>
            <p className="text-xl text-[#666] mb-8">By <span className="font-semibold text-[#222]">{book.author}</span></p>
            
            <div className="text-4xl font-bold text-[#9A35D4] mb-8">
              ${book.price}
            </div>

            <p className="text-[15px] leading-relaxed text-[#555] mb-10 max-w-2xl">
              {book.description}
            </p>

            <button className="flex h-14 w-fit items-center gap-3 rounded-md bg-[#9d37d0] px-10 text-white font-semibold shadow-[0_10px_20px_rgba(157,55,208,0.25)] transition hover:opacity-90">
              <ShoppingBasket size={20} />
              Add to Cart
            </button>
          </div>
        </div>

        <div className="mt-24 border-t border-gray-100 pt-16">
          <h2 className="text-2xl font-bold text-[#181818] mb-2">Recommended for you</h2>
          <p className="text-sm text-gray-500 mb-8">Because you viewed {book.title}</p>
          
          <Suspense fallback={<RecommendedSkeleton />}>
            <RecommendedBooks currentSlug={book.slug} />
          </Suspense>
        </div>
      </div>
      <Footer />
    </main>
  );
}
