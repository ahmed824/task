import React from "react";
import { TableRow, TableCell } from "@/components/ui/table";
import ActionButtons from "./ActionButtons";

export default function TableRowItem({ address, index, onEdit, onDelete }) {
  return (
    <TableRow className="hover:bg-gray-50 transition-colors duration-200">
      <TableCell className="py-3 text-right pr-4">{address.siteTitle}</TableCell>
      <TableCell className="py-3 text-right pr-4">{address.name}</TableCell>
      <TableCell className="py-3 text-right pr-4">{address.streetAddress}</TableCell>
      <TableCell className="py-3 text-right pr-4">{address.city}</TableCell>
      <TableCell className="py-3 text-right pr-4">{address.postalCode}</TableCell>
      <TableCell className="py-3 text-right pr-4">{address.country}</TableCell>
      <TableCell className="py-3">
        <ActionButtons index={index} onEdit={onEdit} onDelete={onDelete} />
      </TableCell>
    </TableRow>
  );
}
