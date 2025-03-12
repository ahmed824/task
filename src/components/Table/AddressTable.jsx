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
    <div className="mt-4 sm:mt-6 bg-transparent rounded-lg">
      {addresses.length > 0 ? (
        addresses.map((address, index) => (
          <div key={index} className="mb-2 sm:mb-4">
            <TableRowItem
              address={address}
              index={index}
              onEdit={() => onEdit(index)}
              onDelete={onDelete}
              isEditing={editingIndex === index && showForm}
            />
            {editingIndex === index && showForm && (
              <div className="mt-2 sm:mt-3 bg-transparent">
                <AddressForm
                  onClose={onClose}
                  onSave={onSave}
                  initialValues={initialValues}
                  mode="edit"
                />
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="p-2 sm:p-3 text-center border border-[#ddd] rounded-md text-gray-500 text-sm sm:text-base">
          لا توجد عناوين مضافة بعد
        </div>
      )}

      {showForm && editingIndex === null && (
        <div className="mt-2 sm:mt-4 bg-transparent">
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