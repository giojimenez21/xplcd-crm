import * as yup from 'yup';

export const formValidation = yup.object({
  actualPassword: yup
    .string()
    .required('La contraseña es obligatoria')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      'La contraseña debe ser de ocho caràcteres, tener por lo menos una mayùscula, una minùscula y un nùmero'
    ),
  newPassword: yup
    .string()
    .required('La nueva contraseña es obligatoria')
    .notOneOf(
      [yup.ref('actualPassword')],
      'La nueva contraseña no puede ser igual a la anterior'
    )
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      'La contraseña debe ser de ocho caràcteres, tener por lo menos una mayùscula, una minùscula y un nùmero'
    ),
  newPassword2: yup
    .string()
    .oneOf(
      [yup.ref('newPassword')],
      'Las contraseñas no coinciden'
    ),
}).required();
