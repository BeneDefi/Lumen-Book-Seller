"use client";

import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ShoppingBasket,
  Star,
} from "lucide-react";

const bestSellers = [
  {
    image:
      "https://images.unsplash.com/photo-1516939884455-1445c8652f83?w=600&q=80",
    category: "Nature",
    rating: "3.5",
    title: "Life of Wilds",
    author: "Jasmine Belle",
    price: "$24,99",
  },
  {
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    category: "Adventure",
    rating: "4.7",
    title: "Story of Everest",
    author: "Henry Martopo",
    price: "$21,99",
    oldPrice: "$25",
  },
  {
    image:
      "https://images.unsplash.com/photo-1544717305-2782549b5136?w=600&q=80",
    category: "Biography",
    rating: "4.5",
    title: "So You Want To Talk About Race",
    author: "Ijeoma Oluo",
    price: "$15,63",
    oldPrice: "$16,99",
  },
];

const topRatedBooks = [
  {
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&q=80",
    title: "Electronic Basic",
    author: "John Doe",
    price: "$19,23",
    oldPrice: "$20,99",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&q=80",
    title: "Theory: Is Alien Real",
    author: "Alan Runner",
    price: "$15,63",
    oldPrice: "$16,99",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
    title: "Be your self & Never Surrender",
    author: "Jess Steve",
    price: "$15,63",
    oldPrice: "$16,99",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&q=80",
    title: "SAKURA",
    author: "Elsa Max",
    price: "$19,99",
    oldPrice: "$24,42",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?w=600&q=80",
    title: "SUNGLASES",
    author: "Samuel Lee",
    price: "$18,13",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
    title: "What colors of the sky",
    author: "Lunaric Axe",
    price: "$13,77",
    oldPrice: "$19,61",
  },
];

function BestSellerSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-[#181818]">
            Best Sellers
          </h2>

          <button className="flex items-center gap-3 text-sm font-semibold text-[#a642d8]">
            View more
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="relative">
          <button className="absolute -left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_8px_25px_rgba(0,0,0,0.12)] lg:flex">
            <ArrowLeft
              size={18}
              className="text-[#a642d8]"
            />
          </button>

          <button className="absolute -right-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#a642d8] shadow-[0_10px_25px_rgba(166,66,216,0.35)] lg:flex">
            <ArrowRight
              size={18}
              className="text-white"
            />
          </button>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {bestSellers.map((book) => (
              <div
                key={book.title}
                className="flex flex-col gap-5 sm:flex-row"
              >
                <div className="relative h-[190px] w-[115px] overflow-hidden rounded-2xl flex-shrink-0">
<img
  src={book.image}
  alt={book.title}
  className="absolute inset-0 h-full w-full object-cover"
/>

                  <div className="absolute inset-0 bg-black/20" />

                  <div className="absolute bottom-5 left-0 right-0 text-center">
                    <h3 className="text-[15px] font-bold leading-5 text-white">
                      {book.title}
                    </h3>

                    <p className="mt-2 text-[8px] text-white/80">
                      Lorem ipsum dolor sit amet
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="rounded-lg bg-[#f2defc] px-4 py-2 text-xs font-medium text-[#b04ddf]">
                      {book.category}
                    </span>

                    <span className="flex items-center gap-1 rounded-lg bg-[#ffc75e] px-3 py-2 text-xs font-semibold text-[#d87b00]">
                      <Star
                        size={12}
                        fill="currentColor"
                      />
                      {book.rating}
                    </span>
                  </div>

                  <h3 className="max-w-[210px] text-[30px] sm:text-[28px] lg:text-[31px] font-semibold leading-tight text-[#202020]">
                    {book.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#666]">
                    {book.author}
                  </p>

                  <div className="mt-auto flex items-end gap-3 pt-6">
                    <span className="text-4xl font-bold text-[#a642d8]">
                      {book.price}
                    </span>

                    {book.oldPrice && (
                      <span className="pb-1 text-sm text-[#9a9a9a] line-through">
                        {book.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TopRatedBooksSection() {
  return (
    <section className="bg-[#f5eef7] py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="mb-12 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-[#181818]">
            10 Top Rated Books
          </h2>

          <button className="flex items-center gap-3 text-sm font-semibold text-[#a642d8]">
            View more
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="relative">
          <button className="absolute -left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_8px_25px_rgba(0,0,0,0.12)] lg:flex">
            <ArrowLeft
              size={18}
              className="text-[#a642d8]"
            />
          </button>

          <button className="absolute -right-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[0_8px_25px_rgba(0,0,0,0.12)] lg:flex">
            <ArrowRight
              size={18}
              className="text-[#a642d8]"
            />
          </button>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {topRatedBooks.map((book) => (
              <div key={book.title}>
                <div className="relative h-[210px] overflow-hidden rounded-2xl">
<img
  src={book.image}
  alt={book.title}
  className="absolute inset-0 h-full w-full object-cover"
/>
                </div>

                <div className="mt-4 flex gap-1">
                  {[...Array(4)].map((_, index) => (
                    <Star
                      key={index}
                      size={14}
                      fill="currentColor"
                      className="text-[#ff9f1a]"
                    />
                  ))}
                </div>

                <h3 className="mt-3 min-h-[58px] text-[20px] font-semibold text-[#242424]">
                  {book.title}
                </h3>

                <p className="mt-2 text-sm text-[#8d8d8d]">
                  {book.author}
                </p>

                <div className="mt-6 flex items-center justify-between rounded-xl bg-[#f1e4f7] px-4 py-3">
                  <div>
                    <p className="text-xl font-bold text-[#222]">
                      {book.price}
                    </p>

                    {book.oldPrice && (
                      <p className="text-xs text-[#9d9d9d] line-through">
                        {book.oldPrice}
                      </p>
                    )}
                  </div>

                  <button className="flex h-11 w-11 items-center justify-center rounded-full bg-[#a642d8] text-white shadow-[0_10px_25px_rgba(166,66,216,0.35)]">
                    <ShoppingBasket size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-white">

      <TopRatedBooksSection />
      <BestSellerSection />
    </main>
  );
}