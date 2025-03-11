"use client";
import React from "react";
import { Field, ErrorMessage } from "formik";
import { iconMap } from "./icons";  

export default function InputField({ label, name, placeholder, type = "text" }) {
  return (
    <div className="col-span-2 sm:col-span-1 relative">
      <label className="block text-gray-700">{label}</label>
      <div className="relative">
        {iconMap[name]} 
        <Field
          type={type}
          name={name}
          placeholder={placeholder}
          className="w-full p-2 pl-10 bg-[#FBF5F5] border border-gray-300 rounded-md focus:ring-2 focus:ring-[#ac8e3c]"
        />
      </div>
      <ErrorMessage name={name} component="div" className="text-red-500 text-sm" />
    </div>
  );
}