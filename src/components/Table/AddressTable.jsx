"use client";
import React from "react";
import dynamic from "next/dynamic";

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
    <div className="mt-6 border border-gray-200 rounded-lg shadow-md">
      {addresses.length > 0 ? (
        addresses.map((address, index) => (
          <React.Fragment key={index}>
            <TableRowItem address={address} index={index} onEdit={onEdit} onDelete={onDelete} />
            {showForm && editingIndex === index && (
              <div className="mt-2 bg-gray-50 p-4 rounded-md">
                <AddressForm onClose={onClose} onSave={onSave} initialValues={initialValues} mode="edit" />
              </div>
            )}
          </React.Fragment>
        ))
      ) : (
        <div className="p-8 text-center text-gray-500">لا توجد عناوين مضافة بعد</div>
      )}

      {showForm && editingIndex === null && (
        <div className="mt-4">
          <AddressForm onClose={onClose} onSave={onSave} initialValues={initialValues} mode="add" />
        </div>
      )}
    </div>
  );
}
