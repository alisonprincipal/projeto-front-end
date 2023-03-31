import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório")
    .min(3, "Mínimo 3 caracteres"),
  email: yup
    .string()
    .required("Email obrigatório")
    .email("O email inválido"),
  image: yup.string().required("Url obrigatória"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(
      /(?=.*?[A-Z])/,
      "Deve conter uma letra maiúscula"
    )
    .matches(
      /(?=.*?[a-z])/,
      "Deve conter uma letra minúscula"
    )
    .matches(/(?=.*?[0-9])/, "Deve conter um Dígito")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "Deve conter um caractere especial(#?!@$%^&*-)"
    )
    .min(8, "Deve conter mínimo oito caracteres"),
  confirmed_password: yup
    .string()
    .required("Confirmação obrigatória")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais."),
});
export const LoginSchema = yup.object().shape({
  email: yup.string().required("O e-mail é obrigatório."),
  password: yup.string().required("A senha é obrigatória."),
});