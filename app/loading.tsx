export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 rounded-full border-4 border-[#f3e8fb] border-t-[#9A35D4] animate-spin" />
        <p className="text-sm font-medium text-[#9A35D4]">Loading Lumen Books...</p>
      </div>
    </div>
  );
}
