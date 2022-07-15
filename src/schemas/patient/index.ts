import * as yup from "yup";

export const patientCreateSchema = yup.object().shape({
  name: yup.string().required(),
  medical_records_number: yup
    .string()
    .required()
    .matches(/[^A-z]/)
    .max(255, "Must be a maximum of 255 characters"),
  contact: yup
    .string()
    .matches(/[^A-z]/)
    .required()
    .max(255, "Must be a maximum of 255 characters"),
});

export const patientPatchSchema = yup.object().shape({
  name: yup.string(),
  medical_records_number: yup
    .string()
    .matches(/[^A-z]/)
    .max(255, "Must be a maximum of 255 characters"),
  contact: yup
    .string()
    .matches(/[^A-z]/)
    .max(255, "Must be a maximum of 255 characters"),
});
