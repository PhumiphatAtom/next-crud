import * as yup from "yup";

export const schema = yup
  .object({
    name: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().typeError("You must specify a number").positive().required(),
    quantity: yup.number().typeError("You must specify a number").positive().integer().required(),
    img_url: yup.string().required(),
  })
  .required();

