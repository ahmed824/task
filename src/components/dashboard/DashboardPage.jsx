"use client";
import dynamic from "next/dynamic";
import React, { useState, useCallback } from "react";
import { toast } from "sonner";

const AddressTable = dynamic(() => import("../Table/AddressTable"));
const AddBtn = dynamic(() => import("../shared/AddBtn"));

export default function DashboardPage() {
  const [showForm, setShowForm] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [initialValues, setInitialValues] = useState({
    siteTitle: "",
    name: "",
    streetAddress: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleAddNew = () => {
    if (!showForm) {
      setEditingIndex(null);
      setInitialValues({ siteTitle: "", name: "", streetAddress: "", city: "", postalCode: "", country: "" });
      setShowForm(true);
    }
  };

  const handleEdit = useCallback(
    (index) => {
      setEditingIndex(index);
      setInitialValues(addresses[index]);
      setShowForm(true);
    },
    [addresses]
  );

  const handleDelete = useCallback((index) => {
    setAddresses((prev) => prev.filter((_, i) => i !== index));
    toast.error("تم حذف العنوان بنجاح");
  }, []);

  const handleSave = useCallback(
    (address) => {
      setAddresses((prev) => {
        const updated = [...prev];
        if (editingIndex !== null) {
          updated[editingIndex] = address;
          toast.success("تم تعديل العنوان بنجاح");
        } else {
          updated.push(address);
          toast.success("تمت إضافة العنوان بنجاح");
        }
        return updated;
      });
      setShowForm(false);
    },
    [editingIndex]
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#FBF5F5] shadow-md rounded-lg">
      <h1 className="text-xl font-semibold mb-4">العناوين المحفوظة</h1>
      <AddressTable
        addresses={addresses}
        onEdit={handleEdit}
        onDelete={handleDelete}
        showForm={showForm}
        editingIndex={editingIndex}
        initialValues={initialValues}
        onSave={handleSave}
        onClose={() => setShowForm(false)}
      />
      <AddBtn onClick={handleAddNew} />
    </div>
  );
}