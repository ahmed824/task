import React from "react";

export default function AddBtn({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full mt-4 cursor-pointer px-4 py-2 bg-white border-1 border-[var(--main-color)] text-[var(--main-color)] shadow-md hover:bg-[var(--main-color)] hover:text-white transition-all duration-200 text-lg font-semibold"
    >
      إضافة عنوان آخر
    </button>
  );
}
