"use client";

import Link from "next/link";
import {
  Search,
  ShoppingBasket,
  ChevronDown,
  BookOpen,
  Menu,
} from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "Books", href: "/books" },
  { name: "Magazine", href: "/magazine" },
  { name: "Textbooks", href: "/textbooks" },
  { name: "Audiobooks", href: "/audiobooks" },
  { name: "Recommended", href: "/recommended" },
  { name: "Sale", href: "/sale" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-center justify-between gap-4 px-4 py-4 lg:px-10">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <BookOpen
                  size={30}
                  className="text-[#9A35D4]"
                />
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#F51C86]" />
              </div>

              <div>
                <h2 className="text-[18px] font-bold leading-none text-black md:text-[22px]">
                  Lumen
                </h2>

                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#9A35D4]">
                  Books
                </p>
              </div>
            </Link>

            <button className="hidden h-10 items-center gap-2 rounded-md bg-[#9A35D4] px-6 text-sm font-semibold text-white lg:flex">
              Menu
              <ChevronDown size={15} />
            </button>
          </div>

          <div className="hidden flex-1 px-6 lg:block">
            <div className="relative mx-auto max-w-[500px]">
              <input
                type="text"
                placeholder="Find books here.."
                className="h-11 w-full rounded-md bg-[#F5F5F5] pl-5 pr-12 text-sm outline-none text-gray-900"
              />

              <Search
                size={18}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>
          </div>

          <div className="hidden items-center gap-8 lg:flex">
            <div className="relative">
              <ShoppingBasket
                size={20}
                className="text-gray-700"
              />

              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#9A35D4] text-[10px] text-white">
                1
              </span>
            </div>

            <button className="flex h-11 items-center gap-3 rounded-md border border-[#D9B8EC] px-5">
              <FaUserCircle
                size={18}
                className="text-[#9A35D4]"
              />

              <span className="text-sm font-semibold text-[#6A2C91]">
                Benedict Maigida
              </span>

              <ChevronDown
                size={15}
                className="text-[#6A2C91]"
              />
            </button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            <Menu size={28} />
          </button>
        </div>

        <div className="bg-gradient-to-r from-[#A832D6] to-[#8E26C7]">
          <nav className="hidden items-center justify-center overflow-x-auto whitespace-nowrap lg:flex">
            {links.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-8 py-4 text-sm ${
                  index === 0
                    ? "font-semibold text-white"
                    : "text-[#E6CFF7]"
                }`}
              >
                {link.name}

                {index === 0 && (
                  <>
                    <span className="absolute bottom-0 left-1/2 h-[3px] w-10 -translate-x-1/2 rounded-full bg-white" />

                    <span className="absolute -top-[5px] left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#A832D6]" />
                  </>
                )}
              </Link>
            ))}
          </nav>

          {open && (
            <div className="lg:hidden">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block border-b border-white/10 px-5 py-4 text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}