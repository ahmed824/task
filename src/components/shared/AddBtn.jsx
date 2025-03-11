import React from "react";

export default function AddBtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full mt-4 cursor-pointer px-6 py-3 bg-[var(--main-color)] text-white rounded-lg shadow-md hover:bg-opacity-90 focus:ring-2 focus:ring-[var(--main-color)] focus:ring-opacity-50 transition-all duration-200 text-lg font-semibold"
    >
      إضافة عنوان آخر
    </button>
  );
}

