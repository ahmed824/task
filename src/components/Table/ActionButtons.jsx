import React from "react";
import { Button } from "@/components/ui/button";
import { BsPencilSquare } from "react-icons/bs";
import { PiTrashSimpleBold } from "react-icons/pi";

export default function ActionButtons({ index, onEdit, onDelete }) {
  return (
    <div className="flex justify-center items-center gap-2">
      {/* Edit Button */}
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 text-[var(--main-color)] hover:bg-[var(--main-color)] hover:text-white transition-colors duration-200"
        onClick={() => onEdit(index)}
      >
        <BsPencilSquare size={18} />
      </Button>

      {/* Divider Line */}
      <div className="w-px h-6 bg-gray-300"></div>

      {/* Delete Button */}
      <Button
        variant="ghost"
        size="icon"
        className="h-9 w-9 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-200"
        onClick={() => onDelete(index)}
      >
        <PiTrashSimpleBold  size={18} />
      </Button>
    </div>
  );
}
