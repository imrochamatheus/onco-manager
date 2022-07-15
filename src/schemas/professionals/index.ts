import * as yup from "yup";

const professionalSchema = yup.object().shape({
  full_name: yup.string().required(),
  email: yup.string().required(),
  password: yup
    .string()
    .required()
    .min(8, "The password must have 8 characters at least."),
  access_level: yup.mixed().oneOf(["master", "staff", "operator"]),
  occupation: yup
    .mixed()
    .oneOf(["manager", "secretary", "nurse", "nursing_technician"]),
});

export default professionalSchema;
