"use client";

import Image from "next/image";
import {
  Star,
  Heart,
  ArrowRight,
  ArrowLeft,
  ShoppingBasket,
} from "lucide-react";

export default function FeaturedBooks() {
  const books = [
    {
      title: "Emily and the Backbone",
      image:
        "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
      category: "Biography",
      price: "$19,23",
      oldPrice: "$20,99",
      featured: false,
    },
    {
      title: "Emily and the Backbone",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop",
      category: "Biography",
      price: "$19,23",
      oldPrice: "$20,99",
      featured: true,
    },
    {
      title: "So you want to talk about race",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
      category: "Biography",
      price: "$19,23",
      oldPrice: "$20,99",
      featured: false,
    },
  ];

  return (
    <section className="w-full bg-[#f5f5f5] py-16 md:py-20">
      <div className="mx-auto max-w-[1250px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl md:text-[38px] font-bold text-[#171717] tracking-[-0.02em]">
            Featured Book
          </h2>

          <button className="flex items-center gap-2 text-sm font-medium text-[#a23cd7] transition hover:opacity-80">
            View more
            <ArrowRight size={15} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {books.map((book, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-sm bg-[#f1f1f1] ${
                book.featured
                  ? "border border-[#ececec]"
                  : "opacity-60 lg:opacity-100"
              }`}
            >
              <div className="flex flex-col gap-8 p-6 sm:p-8 md:flex-row md:items-center">
                <div className="relative mx-auto h-[250px] w-[155px] flex-shrink-0 overflow-hidden rounded-2xl md:mx-0">
                      <Image
                        src={book.image}
                        alt={book.title}
                        width={155}
                        height={250}
                        className="h-full w-full object-cover"
                      />

                  {book.featured && (
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-700 via-emerald-500 to-green-500">
                      <div className="flex h-full flex-col items-center justify-center px-4 text-center">
                        <h3 className="font-serif text-[22px] font-bold leading-[1.05] text-white">
                          Emily
                          <br />
                          and the
                          <br />
                          Backbone
                        </h3>

                        <p className="absolute bottom-4 text-[6px] text-white/80">
                          Lorem ipsum dolor sit amet
                        </p>
                      </div>
                    </div>
                  )}

                  {!book.featured && index === 2 && (
                    <div className="absolute inset-0 bg-black/35" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="mb-4 flex flex-wrap items-center gap-4">
                    <span className="rounded-md bg-[#eedcf5] px-3 py-1 text-xs font-medium text-[#9d57c6]">
                      {book.category}
                    </span>

                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4].map((star) => (
                        <Star
                          key={star}
                          size={12}
                          className="fill-[#ff9f1c] text-[#ff9f1c]"
                        />
                      ))}
                    </div>

                    <span className="text-xs text-[#8f8f8f]">
                      459 Reviews
                    </span>
                  </div>

                  <h3 className="mb-4 text-[22px] font-bold leading-tight text-[#222]">
                    {book.title}
                  </h3>

                  <p className="mb-5 max-w-[420px] text-sm leading-6 text-[#9b9b9b]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <div className="mb-8 flex items-center gap-4">
                    <span className="text-[20px] font-bold text-[#9d37d0]">
                      {book.price}
                    </span>

                    <span className="text-sm font-medium text-[#9a9a9a] line-through">
                      {book.oldPrice}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <button className="flex h-[46px] items-center gap-2 rounded-md bg-[#9d37d0] px-5 text-sm font-medium text-white shadow-[0_10px_18px_rgba(157,55,208,0.35)] transition hover:opacity-90">
                      <ShoppingBasket size={16} />
                      Add to cart
                    </button>

                    <button className="flex h-[46px] w-[46px] items-center justify-center rounded-md border border-[#e4e4e4] bg-white">
                      <Heart
                        size={18}
                        className="fill-[#ff5d5d] text-[#ff5d5d]"
                      />
                    </button>

                    <button className="text-sm font-medium text-[#9d57c6]">
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              {index === 0 && (
                <button className="absolute bottom-[108px] left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-white text-[#9d37d0] shadow-xl">
                  <ArrowLeft size={18} />
                </button>
              )}

              {index === 2 && (
                <button className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#9d37d0] shadow-xl">
                  <ArrowRight size={18} />
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center gap-3 lg:hidden">
          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#9d37d0] shadow-lg">
            <ArrowLeft size={18} />
          </button>

          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#9d37d0] shadow-lg">
            <ArrowRight size={18} />
          </button>
        </div>

        <div className="mt-16 flex items-center justify-center">
          <div className="text-center">
            <h3 className="text-xl font-bold text-[#222]">Lumen Books</h3>
            <p className="mt-2 text-sm text-[#8e8e8e]">
              Discover stories that illuminate minds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}