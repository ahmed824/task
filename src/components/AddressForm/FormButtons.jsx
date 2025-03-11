import React from "react";
import { Button } from "@/components/ui/button";
import { ImSpinner2 } from "react-icons/im";

export default function FormButtons({ onCancel, isLoading, mode }) {
  return (
    <div className="col-span-2 flex w-full mt-4">
      {/* Submit Button with Loader */}
      <Button
        type="submit"
        disabled={isLoading}
        className="flex-1 px-6 py-2 bg-gradient-to-r from-[var(--main-color)] to-yellow-500 text-white hover:brightness-110 flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <ImSpinner2 className="animate-spin text-xl" />
            {mode === "edit" ? "جاري حفظ التغييرات..." : "جاري الإضافة..."}
          </>
        ) : (
          mode === "edit" ? "حفظ التغييرات" : "إضافة العنوان"
        )}
      </Button>

      {/* Cancel Button */}
      <Button
        type="button"
        variant="destructive"
        onClick={onCancel}
        className="flex-1 mr-2 px-6 py-2 "  
      >
        إلغاء
      </Button>
    </div>
  );
}