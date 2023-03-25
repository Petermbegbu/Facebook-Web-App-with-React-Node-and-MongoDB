import * as yup from "yup";

export const updateSchema = yup.object({
    email: yup.string().email("Invalid Email Format!"),
})