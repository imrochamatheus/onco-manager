import * as yup from "yup";

export const patientCreateSchema = yup.object().shape({
  name: yup.string().required(),
  medical_records_number: yup.number().required(),
  contact: yup
    .string()
    .required()
    .max(255, "Must be a maximum of 255 characters"),
});

export const patientPatchSchema = yup.object().shape({
  name: yup.string(),
  medical_records_number: yup.number(),
  contact: yup.string().max(255, "Must be a maximum of 255 characters"),
});
