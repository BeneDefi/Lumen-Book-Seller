"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShoppingBasket,
  ChevronDown,
  BookOpen,
  Menu,
  LogIn,
  LayoutDashboard,
} from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import LiveSearch from "@/app/components/LiveSearch";

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
  const pathname = usePathname();

  return (
    <header className="w-full bg-white sticky top-0 z-40 shadow-sm">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex items-center justify-between gap-4 px-4 py-4 lg:px-10">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative">
                <BookOpen size={30} className="text-[#9A35D4]" />
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
            <LiveSearch />
          </div>

          <div className="hidden items-center gap-5 lg:flex">
            <div className="relative">
              <ShoppingBasket size={20} className="text-gray-700" />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#9A35D4] text-[10px] text-white">
                1
              </span>
            </div>

            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-sm font-medium text-[#6A2C91] hover:text-[#9A35D4] transition"
            >
              <LayoutDashboard size={16} />
              Dashboard
            </Link>

            <Link
              href="/login"
              className="flex h-11 items-center gap-3 rounded-md border border-[#D9B8EC] px-5 hover:bg-[#f7f3fb] transition"
            >
              <LogIn size={16} className="text-[#9A35D4]" />
              <span className="text-sm font-semibold text-[#6A2C91]">Login</span>
            </Link>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden">
            <Menu size={28} />
          </button>
        </div>

        <div className="bg-gradient-to-r from-[#A832D6] to-[#8E26C7]">
          <nav className="hidden items-center justify-center overflow-x-auto whitespace-nowrap lg:flex">
            {links.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-8 py-4 text-sm transition ${
                    isActive ? "font-semibold text-white" : "text-[#E6CFF7] hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <>
                      <span className="absolute bottom-0 left-1/2 h-[3px] w-10 -translate-x-1/2 rounded-full bg-white" />
                      <span className="absolute -top-[5px] left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#A832D6]" />
                    </>
                  )}
                </Link>
              );
            })}
          </nav>

          {open && (
            <div className="lg:hidden">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-white/10 px-5 py-4 text-white ${
                    pathname === link.href ? "font-semibold" : "text-[#E6CFF7]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="block border-b border-white/10 px-5 py-4 text-white text-[#E6CFF7]"
              >
                Login
              </Link>
              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className="block px-5 py-4 text-white text-[#E6CFF7]"
              >
                Dashboard
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}