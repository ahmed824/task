"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Table, TableBody } from "@/components/ui/table";

const TableHeader = dynamic(() => import("./TableHeader"), { ssr: false });
const TableRowItem = dynamic(() => import("./TableRowItem"), { ssr: false });
const AddressForm = dynamic(() => import("../AddressForm/AddressForm"), { ssr: false });

export default function AddressTable({
  addresses,
  onEdit,
  onDelete,
  showForm,
  editingIndex,
  initialValues,
  onSave,
  onClose,
}) {
  return (
    <div className="mt-6">
      <Table className="w-full border border-gray-200 rounded-lg shadow-md">
        <TableHeader />
        <TableBody>
          {addresses.length > 0 ? (
            addresses.map((address, index) => (
              <React.Fragment key={index}>
                <TableRowItem
                  address={address}
                  index={index}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
                {showForm && editingIndex === index && (
                  <tr>
                    <td colSpan="7">
                      <AddressForm
                        onClose={onClose}
                        onSave={onSave}
                        initialValues={initialValues}
                        mode="edit"
                      />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="p-8 text-center text-gray-500">
                لا توجد عناوين مضافة بعد
              </td>
            </tr>
          )}
        </TableBody>
      </Table>
      {showForm && editingIndex === null && (
        <div className="mt-4">
          <AddressForm
            onClose={onClose}
            onSave={onSave}
            initialValues={initialValues}
            mode="add"
          />
        </div>
      )}
    </div>
  );
}