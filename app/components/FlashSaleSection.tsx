"use client";

import {
  ArrowLeft,
  ArrowRight,
  ShoppingBasket,
  Star,
} from "lucide-react";

const flashSaleBooks = [
  {
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&q=80",
    category: "Fiction",
    title: "Theory: Is Alien Real",
    author: "Alan Runner",
    price: "$15,63",
    oldPrice: "$18,53",
    rating: "(459)",
    left: "2 books left",
    progress: "88%",
  },
  {
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    category: "Adventure",
    title: "Story of Everest",
    author: "Henry Martopo",
    price: "$21,99",
    oldPrice: "$25",
    rating: "(459)",
    left: "45 books left",
    progress: "65%",
  },
];

export default function FlashSaleSection() {
  return (
    <section className="bg-[#69008c] py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-bold text-white">
              Flash Sale
            </h2>

            <p className="mt-4 max-w-[250px] text-sm leading-6 text-white/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>

            <div className="mt-8 flex w-fit overflow-hidden rounded-lg border border-white/20">
              <div className="flex min-w-[70px] flex-col items-center border-r border-white/20 px-4 py-3">
                <span className="text-3xl font-bold text-white">
                  05
                </span>
                <span className="text-[10px] text-white/70">
                  Hours
                </span>
              </div>

              <div className="flex min-w-[70px] flex-col items-center border-r border-white/20 px-4 py-3">
                <span className="text-3xl font-bold text-white">
                  42
                </span>
                <span className="text-[10px] text-white/70">
                  Minutes
                </span>
              </div>

              <div className="flex min-w-[70px] flex-col items-center px-4 py-3">
                <span className="text-3xl font-bold text-white">
                  19
                </span>
                <span className="text-[10px] text-white/70">
                  Second
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute right-10 top-[-40px] hidden lg:block">
              <div className="grid grid-cols-6 gap-3">
                {Array.from({ length: 18 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-[4px] w-[4px] rounded-full bg-white/35"
                  />
                ))}
              </div>
            </div>

            <button className="absolute left-[-15px] top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl lg:flex">
              <ArrowLeft
                size={18}
                className="text-[#8d21c9]"
              />
            </button>

            <button className="absolute right-[-15px] top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl lg:flex">
              <ArrowRight
                size={18}
                className="text-[#8d21c9]"
              />
            </button>

            <div className="grid gap-5 xl:grid-cols-2">
              {flashSaleBooks.map((book) => (
                <div
                  key={book.title}
                  className="rounded-[18px] bg-[#560071] p-4"
                >
                  <div className="flex gap-4">
                    <div className="h-[150px] w-[100px] flex-shrink-0 overflow-hidden rounded-2xl">
                      <img
                        src={book.image}
                        alt={book.title}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-medium text-[#d348ff]">
                            {book.category}
                          </span>

                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, index) => (
                              <Star
                                key={index}
                                size={12}
                                fill="currentColor"
                                className="text-[#ff9e1b]"
                              />
                            ))}
                          </div>

                          <span className="text-xs text-white/50">
                            {book.rating}
                          </span>
                        </div>
                      </div>

                      <h3 className="mt-4 text-2xl font-semibold text-white">
                        {book.title}
                      </h3>

                      <p className="mt-2 text-sm text-white/65">
                        {book.author}
                      </p>

                      <div className="mt-5 flex items-end gap-3">
                        <span className="text-4xl font-bold text-[#d72dff]">
                          {book.price}
                        </span>

                        <span className="pb-1 text-sm text-white/40 line-through">
                          {book.oldPrice}
                        </span>
                      </div>

                      <div className="mt-3 flex items-center gap-3">
                        <div className="h-[4px] flex-1 overflow-hidden rounded-full bg-white/20">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-[#ff7d00] to-[#ffe100]"
                            style={{
                              width: book.progress,
                            }}
                          />
                        </div>

                        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#b423ff] text-white shadow-lg">
                          <ShoppingBasket size={16} />
                        </button>
                      </div>

                      <p className="mt-2 text-xs text-white/55">
                        {book.left}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}