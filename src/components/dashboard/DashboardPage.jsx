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
    setEditingIndex(null); // Add mode
    setInitialValues({ siteTitle: "", name: "", streetAddress: "", city: "", postalCode: "", country: "" });
    setShowForm(true);
  };

  const handleEdit = useCallback((index) => {
    setEditingIndex((prev) => (prev === index ? null : index)); // Toggle edit mode
    setInitialValues(addresses[index]); // Set form values to the selected address
    setShowForm((prev) => (prev && editingIndex === index ? false : true)); // Toggle form visibility
  }, [addresses, editingIndex]);

  const handleDelete = useCallback((index) => {
    setAddresses((prev) => prev.filter((_, i) => i !== index));
    toast.error("تم حذف العنوان بنجاح");
    if (editingIndex === index) setShowForm(false);  
  }, [editingIndex]);

  const handleSave = useCallback((address) => {
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
    setEditingIndex(null);  
  }, [editingIndex]);

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-[#FBF5F5] shadow-md rounded-lg">
      <h1 className="text-lg sm:text-xl font-semibold mb-4">العناوين المحفوظة</h1>
      <AddressTable
        addresses={addresses}
        onEdit={handleEdit}
        onDelete={handleDelete}
        showForm={showForm}
        editingIndex={editingIndex}
        initialValues={initialValues}
        onSave={handleSave}
        onClose={() => {
          setShowForm(false);
          setEditingIndex(null);
        }}
      />
      <AddBtn onClick={handleAddNew} />
    </div>
  );
}