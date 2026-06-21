"use client";

import Image from "next/image";
import {
  ArrowRight,
  BookOpen,
  User,
  CalendarDays,
} from "lucide-react";

export default function LumenBooksLatestNews() {
  const articles = [
    {
      title: "Why reading is important for our children?",
      image:
        "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop",
      date: "2 days ago",
    },
    {
      title: "Benefits of reading: Smart, Diligent, Happy",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop",
      date: "5 August 2020",
    },
    {
      title: "What books you should read in 2020?",
      image:
        "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop",
      date: "3 August 2020",
    },
    {
      title: "10 Things you must know to improve your reading skills",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200&auto=format&fit=crop",
      date: "1 August 2020",
    },
  ];

  return (
    <section className="bg-[#f6f6f6] px-5 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-[28px] font-bold tracking-tight text-[#161616] sm:text-[34px]">
            Latest News
          </h2>

          <p className="mx-auto mt-4 max-w-[520px] text-[13px] leading-6 text-[#9a9a9a]">
            Discover stories, book recommendations, reading tips and literary
            insights from Lumen Books to inspire your next reading adventure.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {articles.map((article, index) => (
            <article key={index} className="group">
              <div className="relative h-[190px] overflow-hidden rounded-md sm:h-[180px] lg:h-[150px]">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={300}
                  height={190}
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-5">
                <h3 className="min-h-[64px] text-[21px] font-semibold leading-[1.45] text-[#222] sm:text-[18px]">
                  {article.title}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#9b9b9b]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                  <span className="ml-1 cursor-pointer font-medium text-[#a03ac8] hover:underline">
                    Continue reading
                  </span>
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-gray-300 to-gray-500">
                    <User size={18} className="text-white" />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <BookOpen
                        size={14}
                        className="text-[#666] hidden sm:block"
                      />
                      <span className="text-[13px] font-semibold text-[#4a4a4a]">
                        James Wong
                      </span>
                    </div>

                    <div className="mt-1 flex items-center gap-1 text-[12px] text-[#9a9a9a]">
                      <CalendarDays size={13} />
                      <span>{article.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="flex items-center gap-3 rounded-md bg-[#a334c8] px-8 py-4 text-[14px] font-medium text-white transition hover:bg-[#9227b7]">
            <span>View more</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}