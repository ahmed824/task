import React from "react";
import { Button } from "@/components/ui/button";
import { BsPencilSquare } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function ActionButtons({ index, onEdit, onDelete }) {
  return (
    <div className="flex justify-center gap-2">
      {/* Edit Button */}
      <Button
        variant="outline"
        size="icon"
        className="h-9 w-9 border-[var(--main-color)] text-[var(--main-color)] hover:bg-[var(--main-color)] hover:text-white transition-colors duration-200"
        onClick={() => onEdit(index)}
      >
        <BsPencilSquare size={18} />
      </Button>
      {/* Delete Button */}
      <Button
        variant="outline"
        size="icon"
        className="h-9 w-9 border-[var(--main-color)] text-[var(--main-color)] hover:bg-red-500 hover:text-white transition-colors duration-200"
        onClick={() => onDelete(index)}
      >
        <RiDeleteBin6Line size={18} />
      </Button>
    </div>
  );
}
