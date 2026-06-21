"use client";

import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Star,
  Store,
  Users,
  BookOpen,
} from "lucide-react";

export default function LumenBooksTestimonials() {
  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
  ];

  return (
    <section className="w-full overflow-hidden bg-[#f7f3f8]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.3fr]">
          <div>
            <h2 className="text-[34px] font-bold leading-none text-[#181818]">
              Testimonials
            </h2>

            <p className="mt-5 max-w-[420px] text-[14px] leading-6 text-[#8d8d8d]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>

            <div className="mt-8 flex items-center">
              {avatars.map((avatar, index) => (
                <div
                  key={index}
                  className={`relative h-12 w-12 overflow-hidden rounded-full border-[3px] border-white ${
                    index !== 0 ? "-ml-3" : ""
                  }`}
                >
                  <Image
                    src={avatar}
                    alt="reader"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
              ))}

              <div className="-ml-3 flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-white bg-[#8f35c6] text-[11px] font-semibold text-white">
                21k+
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute top-6 hidden h-[120px] w-[88%] rounded-md bg-white/70 shadow-[0_10px_30px_rgba(0,0,0,0.04)] lg:block" />

            <div className="relative w-full max-w-[820px] rounded-md bg-white px-8 py-10 text-center shadow-[0_8px_25px_rgba(155,91,185,0.12)] sm:px-12">
              <button className="absolute left-0 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
                <ArrowLeft size={18} className="text-[#b54bd7]" />
              </button>

              <button className="absolute right-0 top-1/2 flex h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
                <ArrowRight size={18} className="text-[#b54bd7]" />
              </button>

              <div className="flex justify-center gap-1">
                <Star size={16} fill="#f97316" className="text-[#f97316]" />
                <Star size={16} fill="#f97316" className="text-[#f97316]" />
                <Star size={16} fill="#f97316" className="text-[#f97316]" />
                <Star size={16} fill="#f97316" className="text-[#f97316]" />
                <Star size={16} fill="#d8d8d8" className="text-[#d8d8d8]" />
              </div>

              <p className="mx-auto mt-6 max-w-[620px] text-[20px] font-medium leading-9 text-[#222222]">
                Shopping books at Lumen Books is very easy. Quick delivery and
                fast response. Their services are awesome!
              </p>

              <h4 className="mt-7 text-[18px] font-semibold text-[#303030]">
                Steve Henry
              </h4>

              <p className="mt-1 text-[13px] text-[#9a9a9a]">Book Lovers</p>

              <div className="absolute left-1/2 top-full h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-[4px] border-white shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80"
                  alt="Steve Henry"
                  width={72}
                  height={72}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#39004d]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-14 text-center text-white sm:grid-cols-2 sm:px-8 lg:grid-cols-3 lg:px-16 xl:px-20">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4">
              <Store size={42} strokeWidth={1.8} />
              <span className="text-[52px] font-bold leading-none">268</span>
            </div>

            <p className="mt-4 text-[18px] text-white/70">
              Our stores around the world
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4">
              <Users size={42} strokeWidth={1.8} />
              <span className="text-[52px] font-bold leading-none">
                25,634
              </span>
            </div>

            <p className="mt-4 text-[18px] text-white/70">
              Our happy customers
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4">
              <BookOpen size={42} strokeWidth={1.8} />
              <span className="text-[52px] font-bold leading-none">68+k</span>
            </div>

            <p className="mt-4 text-[18px] text-white/70">
              Book Collections
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}