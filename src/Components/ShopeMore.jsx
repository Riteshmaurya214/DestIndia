import React from "react";

export default function ShopMore() {
  return (
    <div className="w-full py-8">
      {/* Heading with lines */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex-grow h-px bg-gray-300 mx-4" />
        <h2 className="text-lg font-semibold text-gray-800">Shop More</h2>
        <div className="flex-grow h-px bg-gray-300 mx-4" />
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <button className="flex items-center justify-between px-4 py-2 border rounded-md shadow-sm text-sm font-medium text-gray-800 hover:bg-gray-100 transition">
          More T-shirt By Nike
          <span className="ml-2">›</span>
        </button>

        <button className="flex items-center justify-between px-4 py-2 border rounded-md shadow-sm text-sm font-medium text-gray-800 hover:bg-gray-100 transition">
          More Gary T-shirt By Nike
          <span className="ml-2">›</span>
        </button>

        <button className="flex items-center justify-between px-4 py-2 border rounded-md shadow-sm text-sm font-medium text-gray-800 hover:bg-gray-100 transition">
          More T-shirt By Nike Under 500
          <span className="ml-2">›</span>
        </button>
      </div>
    </div>
  );
}
