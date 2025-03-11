"use client";
import React, { useState, useCallback } from "react";
import { Formik, Form } from "formik";
import dynamic from "next/dynamic";
import validationSchema from "./validationSchema";

const InputField = dynamic(() => import("../shared/Input"));
const FormButtons = dynamic(() => import("./FormButtons"));

export default function AddressForm({ onClose, onSave, initialValues, mode }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = useCallback(
    (values) => {
      if (isLoading) return;
      setIsLoading(true);
      setTimeout(() => {
        onSave(values);
        setIsLoading(false);
        onClose();
      }, 1000);
    },
    [onSave, onClose, isLoading]
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#F9F9F9] shadow-md rounded-lg">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {() => (
          <Form className="grid grid-cols-2 gap-4">
            <InputField label="عنوان الموقع" name="siteTitle" placeholder="ادخل عنوان الموقع" />
            <InputField label="الاسم" name="name" placeholder="ادخل الاسم" />
            <InputField label="عنوان الشارع" name="streetAddress" placeholder="ادخل عنوان الشارع" />
            <InputField label="المدينة" name="city" placeholder="ادخل المدينة" />
            <InputField label="الرمز البريدي" name="postalCode" placeholder="ادخل الرمز البريدي (5 ارقام)" />
            <InputField label="الدولة" name="country" placeholder="ادخل الدولة" />

            {/* Buttons */}
            <FormButtons onCancel={onClose} isLoading={isLoading} mode={mode} />
          </Form>
        )}
      </Formik>
    </div>
  );
}