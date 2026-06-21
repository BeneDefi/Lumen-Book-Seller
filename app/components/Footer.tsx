"use client";

import Link from "next/link";
import { BookOpen, Heart } from "lucide-react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function LumenBooksFooter() {
  return (
    <footer className="w-full">
      <section className="relative overflow-hidden bg-[#8f2dc4]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div className="relative">
            <div className="absolute -left-5 -top-5 grid grid-cols-5 gap-[3px] opacity-30">
              {[...Array(25)].map((_, i) => (
                <span
                  key={i}
                  className="h-[3px] w-[3px] rounded-full bg-white"
                />
              ))}
            </div>

            <h2 className="relative max-w-md text-3xl font-bold leading-tight text-white md:text-[44px] lg:text-[46px]">
              Subscribe our newsletter
              <br />
              for newest books updates
            </h2>
          </div>

          <div className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Type your email here"
              className="h-14 flex-1 rounded bg-[#a84fce] px-5 text-sm text-white placeholder:text-[#ead4f5] outline-none"
            />

            <button className="h-14 rounded bg-white px-8 text-xs font-bold uppercase tracking-wide text-[#8f2dc4] shadow-sm transition hover:opacity-90">
              Subscribe
            </button>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 grid grid-cols-6 gap-3 p-6">
          {[...Array(24)].map((_, i) => (
            <span
              key={i}
              className="h-[5px] w-[5px] rounded-full bg-white"
            />
          ))}
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.6fr_0.7fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#f4e6fb]">
                  <BookOpen className="h-7 w-7 text-[#8f2dc4]" />
                </div>

                <h3 className="text-5xl font-bold text-black">Lumen</h3>
              </div>

              <p className="mt-7 max-w-sm text-[15px] leading-7 text-[#8d8695]">
                Lumen Books is an online bookstore website that sells all
                genres of books from around the world. Find your next great
                book here now.
              </p>

              <h4 className="mt-12 text-base font-semibold text-[#2b2b2b]">
                Follow Us
              </h4>

              <div className="mt-5 flex items-center gap-3">
                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ece7ef] bg-white text-[#c5afd3] transition hover:text-[#8f2dc4]"
                >
                  <FaFacebookF size={16} />
                </a>

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#8f2dc4] text-white shadow-md"
                >
                  <FaYoutube size={17} />
                </a>

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ece7ef] bg-white text-[#c5afd3] transition hover:text-[#8f2dc4]"
                >
                  <FaTwitter size={16} />
                </a>

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ece7ef] bg-white text-[#c5afd3] transition hover:text-[#8f2dc4]"
                >
                  <FaLinkedinIn size={16} />
                </a>

                <a
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ece7ef] bg-white text-[#c5afd3] transition hover:text-[#8f2dc4]"
                >
                  <FaInstagram size={16} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-base font-semibold text-[#2b2b2b]">
                Quick Links
              </h4>

              <ul className="mt-8 space-y-5 text-[15px] text-[#8d8695]">
                <li><Link href="/books/about" className="hover:text-[#8f2dc4] transition">About us</Link></li>
                <li><Link href="/books/contact" className="hover:text-[#8f2dc4] transition">Contact us</Link></li>
                <li><Link href="/books" className="hover:text-[#8f2dc4] transition">Catalog</Link></li>
                <li><Link href="/login" className="hover:text-[#8f2dc4] transition">Login</Link></li>
                <li><Link href="/dashboard" className="hover:text-[#8f2dc4] transition">Dashboard</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-semibold text-[#2b2b2b]">
                Customer Area
              </h4>

              <ul className="mt-8 space-y-5 text-[15px] text-[#8d8695]">
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">Orders</a>
                </li>
                <li>
                  <a href="#">Tracking List</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-semibold text-[#2b2b2b]">
                Don't miss the newest books
              </h4>

              <p className="mt-8 text-[15px] leading-7 text-[#8d8695]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Type your email here"
                  className="h-12 flex-1 rounded bg-[#efefef] px-4 text-sm text-[#444] placeholder:text-[#b3b3b3] outline-none"
                />

                <button className="h-12 rounded bg-[#8f2dc4] px-6 text-sm font-semibold text-white shadow-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#ebebeb]">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-[#9a9a9a] md:flex-row lg:px-12">
            <div className="flex items-center gap-3">
              <span className="font-semibold tracking-wide text-[#8a8a8a]">
                LUMEN
              </span>
              <span>–</span>
              <span>© 2020 All Rights Reserved</span>
            </div>

              Made with <Heart size={14} className="inline text-red-500 fill-current mx-1" /> by Peterdraw
          </div>
        </div>
      </section>
    </footer>
  );
}