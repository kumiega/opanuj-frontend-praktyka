export const SkeletonCountryCard = () => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow animate-pulse">
      <div className="rounded-md bg-gray-300 h-8 w-16 mb-2"></div>

      <div className="h-6 bg-gray-300 rounded-md mb-3 w-3/4"></div>

      <div className="h-4 bg-gray-300 rounded-md mb-2 w-1/2"></div>

      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-300 rounded-md w-2/3"></div>
        <div className="h-4 bg-gray-300 rounded-md w-1/3"></div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="h-4 bg-gray-300 rounded-md w-24"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  );
};
