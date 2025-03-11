import React from "react";
import ActionButtons from "./ActionButtons";
import { CiLocationOn } from "react-icons/ci";

export default function TableRowItem({ address, index, onEdit, onDelete }) {
  return (
    <div className="flex justify-between items-center p-2 border-b border-gray-200 last:border-b-0 bg-gray-50 transition-colors duration-200">
      <div className="text-right pr-4 flex items-center">
        <CiLocationOn className="mr-1" /> {address.siteTitle}
      </div>
      <div>
        <ActionButtons index={index} onEdit={onEdit} onDelete={onDelete} />
      </div>
    </div>
  );
}
