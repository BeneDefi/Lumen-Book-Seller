"use client";

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { Search, X } from 'lucide-react';

type Book = {
  id: string;
  slug: string;
  title: string;
  author: string;
  price: number;
  coverImageUrl: string;
  category: string;
};

const fetchBooks = async (query: string): Promise<Book[]> => {
  const res = await fetch(`/api/books`);
  const books: Book[] = await res.json();
  if (!query) return [];
  return books.filter(
    (b) =>
      b.title.toLowerCase().includes(query.toLowerCase()) ||
      b.author.toLowerCase().includes(query.toLowerCase())
  );
};

export default function LiveSearch() {
  const [query, setQuery] = useState('');

  const { data: results = [], isFetching } = useQuery({
    queryKey: ['live-search', query],
    queryFn: () => fetchBooks(query),
    enabled: query.length > 1,
  });

  return (
    <div className="relative w-full max-w-[500px]">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Find books here..."
          className="h-11 w-full rounded-md bg-[#F5F5F5] pl-5 pr-10 text-sm outline-none text-gray-900"
        />
        {query ? (
          <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2">
            <X size={16} className="text-gray-400" />
          </button>
        ) : (
          <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
        )}
      </div>

      {query.length > 1 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 max-h-80 overflow-y-auto">
          {isFetching ? (
            <div className="p-4 text-center text-sm text-gray-400">Searching...</div>
          ) : results.length === 0 ? (
            <div className="p-4 text-center text-sm text-gray-400">No books found for "{query}"</div>
          ) : (
            results.map((book) => (
              <Link
                key={book.id}
                href={`/books/${book.slug}`}
                onClick={() => setQuery('')}
                className="flex items-center gap-3 p-3 hover:bg-[#f7f3fb] transition"
              >
                <div className="relative h-12 w-8 flex-shrink-0 overflow-hidden rounded-md">
                  <Image src={book.coverImageUrl} alt={book.title} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#222]">{book.title}</p>
                  <p className="text-xs text-gray-400">{book.author} · ${book.price}</p>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
