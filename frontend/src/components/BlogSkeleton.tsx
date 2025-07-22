export function BlogSkeleton() {
  return (
    <div className="border-b-2 border-slate-200 pb-4 animate-pulse px-4 max-w-2xl mx-auto">
   
      <div className="flex items-center space-x-2 py-3">
        <div className="w-9 h-9 bg-gray-300 rounded-full" />
        <div className="h-4 bg-gray-300 rounded w-24" />
        <div className="h-1 w-1 bg-gray-300 rounded-full" />
        <div className="h-4 bg-gray-300 rounded w-20" />
      </div>
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-4" />

      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-300 rounded w-full" />
        <div className="h-4 bg-gray-300 rounded w-[90%]" />
        <div className="h-4 bg-gray-300 rounded w-[80%]" />
        <div className="h-4 bg-gray-300 rounded w-[85%]" />
      </div>

      <div className="h-4 bg-gray-300 rounded w-20" />
    </div>
  );
}
