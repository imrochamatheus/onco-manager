import * as yup from "yup"

export const sessionCreateSchema = yup.object().shape({
    email: yup.string().email("Invalid Email").required(),
    password: yup.string().required()
})