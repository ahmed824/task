"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";

const TableRowItem = dynamic(() => import("./TableRowItem"), { ssr: false });
const AddressForm = dynamic(() => import("../AddressForm/AddressForm"), { ssr: false });

export default function AddressTable({
  addresses,
  onDelete,
  showForm,
  initialValues,
  onSave,
  onClose,
}) {
  const [editingIndex, setEditingIndex] = useState(null);

  const handleEdit = (index) => {
    setEditingIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="mt-6  bg-transparent rounded-lg">
      {addresses.length > 0 ? (
        addresses.map((address, index) => (
          <React.Fragment key={index}>
            <TableRowItem address={address} index={index} onEdit={handleEdit} onDelete={onDelete} />
            {editingIndex === index && (
              <div className="mt-2 rounded-md">
                <AddressForm onClose={() => setEditingIndex(null)} onSave={onSave} initialValues={initialValues} mode="edit" />
              </div>
            )}
          </React.Fragment>
        ))
      ) : (
        <div className="p-3 text-center border-1 border-[#ddd] rounded-md text-gray-500">لا توجد عناوين مضافة بعد</div>
      )}

      {showForm && editingIndex === null && (
        <div className="mt-2 bg-transparent ">
          <AddressForm onClose={onClose} onSave={onSave} initialValues={initialValues} mode="add" />
        </div>
      )}
    </div>
  );
}
