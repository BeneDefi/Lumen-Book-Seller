import Link from 'next/link';
import { BookX } from 'lucide-react';
import NavBar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <NavBar />
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-20 bg-white">
        <div className="flex flex-col items-center gap-6 text-center max-w-md">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f7f3fb]">
            <BookX size={36} className="text-[#9A35D4]" />
          </div>
          <h1 className="text-4xl font-bold text-[#181818]">Page Not Found</h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            The page you are looking for doesn't exist in our library or is coming soon.
          </p>
          <Link
            href="/"
            className="h-12 rounded-md bg-[#9A35D4] px-8 text-sm font-semibold text-white shadow-md hover:bg-[#8E26C7] transition flex items-center"
          >
            Go Back Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
