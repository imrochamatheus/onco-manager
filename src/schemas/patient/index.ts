import * as yup from "yup";

const patientSchema = yup.object().shape({
  name: yup.string().required(),
  medical_records_number: yup.number().required(),
  contact: yup
    .string()
    .required()
    .max(255, "Must be a maximum of 255 characters"),
});

export default patientSchema;
