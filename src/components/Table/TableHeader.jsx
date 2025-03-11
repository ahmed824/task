import React from "react";
import { TableHeader, TableRow, TableHead } from "@/components/ui/table";

export default function TableHeaderComponent() {
  return (
    <TableHeader>
      <TableRow className="bg-gray-100 text-[var(--main-color)]">
        <TableHead className="font-semibold py-3 text-right pr-4">عنوان الموقع</TableHead>
        <TableHead className="font-semibold py-3 text-right pr-4">الاسم</TableHead>
        <TableHead className="font-semibold py-3 text-right pr-4">عنوان الشارع</TableHead>
        <TableHead className="font-semibold py-3 text-right pr-4">المدينة</TableHead>
        <TableHead className="font-semibold py-3 text-right pr-4">الرمز البريدي</TableHead>
        <TableHead className="font-semibold py-3 text-right pr-4">الدولة</TableHead>
        <TableHead className="font-semibold py-3 text-center">إجراءات</TableHead>
      </TableRow>
    </TableHeader>
  );
}
