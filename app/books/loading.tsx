export default function BooksLoading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-10 lg:px-20">
        <div className="h-10 w-48 bg-gray-200 rounded-md animate-pulse mb-8" />
        <div className="flex gap-3 mb-10">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-10 w-24 bg-gray-200 rounded-md animate-pulse" />
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="rounded-2xl bg-[#f9f9f9] p-4 animate-pulse">
              <div className="h-[250px] w-full bg-gray-200 rounded-xl mb-4" />
              <div className="h-3 bg-gray-200 rounded w-1/3 mb-2" />
              <div className="h-5 bg-gray-200 rounded w-4/5 mb-2" />
              <div className="h-3 bg-gray-200 rounded w-1/2 mb-4" />
              <div className="h-6 bg-gray-200 rounded w-1/4" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
