import NavBar from "@/app/components/Navbar"

import {
  Clock3,
  ShieldCheck,
  Award,
  Shield,
  ArrowRight,
  Users,
  BookOpen,
} from "lucide-react";

export default function HeroSection() {
  return (
    <main className="min-h-screen bg-white">
      <NavBar />

      <section className="relative overflow-hidden bg-[#4D0D65]">

        <div className="absolute left-[45%] top-10 h-28 w-28 rounded-full bg-[#6F367B]/50" />

        <div className="mx-auto max-w-[1440px] px-5 py-20 lg:px-20">
          <div className="grid items-center gap-16 xl:grid-cols-2">
            <div>
              <h1 className="text-[44px] font-bold leading-[1.15] text-white lg:text-[58px]">
                Welcome to{" "}
                <span className="font-extrabold">
                  Lumen Books
                </span>
                <br />
                Online Book Store
              </h1>

              <p className="mt-7 max-w-[520px] text-sm leading-7 text-[#D4B8DE]">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris.
              </p>

              <div className="mt-12 flex flex-wrap gap-12">
                <div className="flex items-start gap-3">
                  <BookOpen
                    size={24}
                    className="text-white"
                  />

                  <div>
                    <h3 className="text-[18px] font-bold text-white lg:text-[20px]">
                      68+k
                    </h3>

                    <p className="text-sm text-[#C9B0D7]">
                      Book Collections
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Users
                    size={24}
                    className="text-white"
                  />

                  <div>
                    <h3 className="text-[18px] font-bold text-white lg:text-[20px]">
                      25,634
                    </h3>

                    <p className="text-sm text-[#C9B0D7]">
                      Customers
                    </p>
                  </div>
                </div>
              </div>

              <button className="mt-10 flex h-14 items-center gap-8 rounded-md bg-[#F41D83] px-8 font-semibold text-white transition hover:bg-[#ec147b]">
                Go to Collections
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="flex justify-center gap-8 xl:justify-end">
              <div className="relative h-[395px] w-[220px] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(204,108,255,0.25)]">
                <img
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1200"
                  alt=""
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />

                <div className="absolute left-0 top-4 rounded-r-full bg-[#FF8800] px-6 py-3 text-sm font-semibold text-white">
                  Best Seller
                </div>

                <div className="absolute bottom-24 left-1/2 flex -translate-x-1/2 gap-2">
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                  <span className="h-4 w-4 rounded-full bg-yellow-400" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400" />
                </div>

                <h3 className="absolute bottom-8 left-6 right-6 text-center font-serif text-[22px] leading-[1.5] text-white">
                  Be your self &
                  <br />
                  Never Surrender
                </h3>
              </div>

              <div className="relative h-[395px] w-[220px] overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1516972810927-80185027ca84?q=80&w=1200"
                  alt=""
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />

                <div className="absolute left-0 top-4 rounded-r-full bg-[#FF8800] px-6 py-3 text-sm font-semibold text-white">
                  Best Seller
                </div>

                <div className="absolute bottom-10 left-0 right-0 text-center">
                  <p className="text-[14px] font-bold tracking-[6px] text-[#F7D46A]">
                    THEORY:
                  </p>

                  <h3 className="mt-2 text-[22px] text-white">
                    Is Alien Real
                  </h3>
                </div>
              </div>

              <div className="hidden h-[395px] w-[120px] overflow-hidden rounded-2xl opacity-40 2xl:block">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1200"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center gap-3">
            <span className="h-[3px] w-5 rounded-full bg-[#876791]" />
            <span className="h-[3px] w-5 rounded-full bg-[#876791]" />
            <span className="h-[4px] w-8 rounded-full bg-white" />
          </div>
        </div>
      </section>

      <section className="bg-[#F4F1F4] py-14 text-gray-900">
        <div className="mx-auto max-w-[1440px] px-5 lg:px-20">
          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <Clock3
                size={34}
                className="text-[#9A35D4]"
              />

              <h3 className="mt-5 text-xl font-semibold">
                Quick Delivery
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div>
              <ShieldCheck
                size={34}
                className="text-[#9A35D4]"
              />

              <h3 className="mt-5 text-xl font-semibold">
                Secure Payment
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div>
              <Award
                size={34}
                className="text-[#9A35D4]"
              />

              <h3 className="mt-5 text-xl font-semibold">
                Best Quality
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div>
              <Shield
                size={34}
                className="text-[#9A35D4]"
              />

              <h3 className="mt-5 text-xl font-semibold">
                Return Guarantee
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}