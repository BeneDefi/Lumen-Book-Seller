import NavBar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Clock } from "lucide-react";

export default function SalePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <NavBar />
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-20 bg-white">
        <div className="flex flex-col items-center gap-6 text-center max-w-md">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#f7f3fb] text-[#9A35D4]">
            <Clock size={36} />
          </div>
          <h1 className="text-4xl font-bold text-[#181818]">Coming Soon</h1>
          <p className="text-gray-500 text-sm leading-relaxed">
            Our discount Sale events are coming soon. Get ready for massive price drops on bestselling titles!
          </p>
          <a
            href="/"
            className="h-12 rounded-md bg-[#9A35D4] px-8 text-sm font-semibold text-white shadow-md hover:bg-[#8E26C7] transition flex items-center"
          >
            Go Back Home
          </a>
        </div>
      </div>
      <Footer />
    </main>
  );
}
