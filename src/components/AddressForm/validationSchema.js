import * as Yup from "yup";

const validationSchema = Yup.object({
    siteTitle: Yup.string().required("عنوان الموقع مطلوب"),
    name: Yup.string().required("الاسم مطلوب"),
    streetAddress: Yup.string().required("عنوان الشارع مطلوب"),
    city: Yup.string().required("المدينة مطلوبة"),
    postalCode: Yup.string()
        .matches(/^\d{5}$/, "يجب أن يكون الرمز البريدي 5 أرقام")
        .required("هذا الحقل مطلوب"),
    country: Yup.string().required("الدولة مطلوبة"),
});

export default validationSchema;
