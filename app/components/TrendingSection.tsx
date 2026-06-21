"use client";

import Image from "next/image";

import { ArrowLeft, ArrowRight, Star } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f4f4f4] flex items-center justify-center px-4 py-16">
      <section className="w-full max-w-7xl">
        <div className="text-center">
          <h2 className="text-[28px] sm:text-[34px] font-bold text-neutral-900">
            Trending this week
          </h2>

          <p className="mt-4 text-[12px] sm:text-[13px] text-neutral-400 max-w-md mx-auto leading-relaxed">
            Discover the most loved titles from Lumen Books and explore stories
            readers can't stop talking about this week.
          </p>
        </div>

        <div className="relative mt-16">
          <button className="absolute left-0 md:left-24 lg:left-40 top-[42%] -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] flex items-center justify-center">
            <ArrowLeft className="w-6 h-6 text-fuchsia-600" />
          </button>

          <button className="absolute right-0 md:right-24 lg:right-40 top-[42%] -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.12)] flex items-center justify-center">
            <ArrowRight className="w-6 h-6 text-fuchsia-600" />
          </button>

          <div className="relative h-[420px] sm:h-[470px] flex items-center justify-center overflow-visible">
            <div className="absolute -translate-x-[100px] sm:-translate-x-[220px] scale-90 z-10 w-[180px] h-[275px] rounded-2xl bg-gradient-to-b from-indigo-900 to-indigo-700 shadow-[0_15px_35px_rgba(0,0,0,0.18)]">
              <div className="w-full h-full rounded-2xl flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-[20px] text-white font-extrabold leading-none">
                  Stars and Above
                </h3>
              </div>
            </div>

            <div className="absolute -translate-x-[50px] sm:-translate-x-[110px] scale-95 z-20 w-[180px] h-[275px] rounded-2xl bg-gradient-to-b from-fuchsia-950 to-rose-900 shadow-[0_15px_35px_rgba(0,0,0,0.18)]">
              <div className="w-full h-full rounded-2xl flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-[20px] text-white font-extrabold leading-none">
                  The Adventure
                </h3>
              </div>
            </div>

            <div className="absolute z-40 w-[225px] h-[320px] rounded-2xl bg-gradient-to-b from-emerald-600 to-emerald-500 shadow-[0_15px_35px_rgba(0,0,0,0.18)]">
              <div className="relative w-full h-full rounded-2xl flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-[32px] sm:text-[36px] text-white font-extrabold leading-none">
                  Emily and the Backbone
                </h3>

                <p className="absolute bottom-14 text-[10px] italic text-white/80">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
            </div>

            <div className="absolute translate-x-[50px] sm:translate-x-[110px] scale-95 z-20 w-[180px] h-[275px] rounded-2xl bg-gradient-to-b from-amber-950 to-amber-800 shadow-[0_15px_35px_rgba(0,0,0,0.18)]">
              <div className="w-full h-full rounded-2xl flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-[20px] text-white font-extrabold leading-none">
                  After the Novel
                </h3>
              </div>
            </div>

            <div className="absolute translate-x-[100px] sm:translate-x-[220px] scale-90 z-10 w-[180px] h-[275px] rounded-2xl bg-gradient-to-b from-pink-600 to-pink-500 shadow-[0_15px_35px_rgba(0,0,0,0.18)]">
              <div className="w-full h-full rounded-2xl flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-[20px] text-white font-extrabold leading-none">
                  Novel Life
                </h3>
              </div>
            </div>
          </div>

          <div className="-mt-12 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full border-[5px] border-white overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
                alt="Ijeoma Oluo"
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>

            <h4 className="mt-3 text-[28px] font-semibold text-neutral-800">
              Ijeoma Oluo
            </h4>

            <div className="flex items-center gap-1 mt-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  className="w-5 h-5 fill-orange-500 text-orange-500"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-xs text-neutral-400 tracking-[0.25em] uppercase">
            Lumen Books
          </p>
        </div>
      </section>
    </main>
  );
}